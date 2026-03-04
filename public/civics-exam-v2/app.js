import { EXAM_RULES, QUESTION_BANK } from "./question-bank.js";

const STORAGE_KEY = "civics_exam_local_history_v1";
const STORAGE_KEY_CYCLE = "civics_exam_cycle_v1";

const ui = {
  setupPanel: document.getElementById("setupPanel"),
  quizPanel: document.getElementById("quizPanel"),
  resultPanel: document.getElementById("resultPanel"),
  setupForm: document.getElementById("setupForm"),
  trackSelect: document.getElementById("trackSelect"),
  modeSelect: document.getElementById("modeSelect"),
  practiceCountWrap: document.getElementById("practiceCountWrap"),
  practiceCountInput: document.getElementById("practiceCountInput"),
  historyText: document.getElementById("historyText"),
  sessionLabel: document.getElementById("sessionLabel"),
  counterText: document.getElementById("counterText"),
  timerBox: document.getElementById("timerBox"),
  progressFill: document.getElementById("progressFill"),
  typeBadge: document.getElementById("typeBadge"),
  themeBadge: document.getElementById("themeBadge"),
  questionText: document.getElementById("questionText"),
  optionsWrap: document.getElementById("optionsWrap"),
  feedbackWrap: document.getElementById("feedbackWrap"),
  prevBtn: document.getElementById("prevBtn"),
  nextBtn: document.getElementById("nextBtn"),
  scoreLine: document.getElementById("scoreLine"),
  resultLine: document.getElementById("resultLine"),
  themeBreakdown: document.getElementById("themeBreakdown"),
  reviewList: document.getElementById("reviewList"),
  restartBtn: document.getElementById("restartBtn"),
  backSetupBtn: document.getElementById("backSetupBtn"),
};

const state = {
  mode: "exam",
  track: "csp",
  questions: [],
  answers: [],
  index: 0,
  remainingSec: 0,
  timerId: null,
};

function init() {
  ui.setupForm.addEventListener("submit", onStart);
  ui.modeSelect.addEventListener("change", onModeChange);
  ui.prevBtn.addEventListener("click", onPrev);
  ui.nextBtn.addEventListener("click", onNext);
  ui.restartBtn.addEventListener("click", onStartFromButton);
  ui.backSetupBtn.addEventListener("click", showSetup);

  onModeChange();
  renderHistory();
  registerServiceWorker();
}

function onModeChange() {
  const mode = ui.modeSelect.value;
  ui.practiceCountWrap.classList.toggle("hidden", mode === "exam");
}

function onStart(event) {
  event.preventDefault();
  startSessionFromForm();
}

function onStartFromButton() {
  startSessionFromForm();
}

function startSessionFromForm() {
  clearTimer();

  state.mode = ui.modeSelect.value;
  state.track = ui.trackSelect.value;

  const pool = QUESTION_BANK.filter((q) => q.tracks.includes(state.track));
  const knowledgePool = pool.filter((q) => q.type === "knowledge");
  const situationPool = pool.filter((q) => q.type === "situation");
  const gradedPool = pool.filter(
    (q) => q.type === "knowledge" || q.type === "knowledge_suggested" || q.type === "situation"
  );
  const officialPromptPool = pool.filter((q) => q.type === "knowledge_open");

  let picked = [];
  let sessionLabel = "";

  if (state.mode === "exam") {
    const rules = EXAM_RULES[state.track];
    picked = [
      ...pickFromCycle(
        knowledgePool,
        rules.knowledgeCount,
        `${state.track}:exam:knowledge`
      ),
      ...pickFromCycle(
        situationPool,
        rules.situationCount,
        `${state.track}:exam:situation`
      ),
    ];
    shuffleInPlace(picked);
    state.remainingSec = rules.durationMinutes * 60;
    sessionLabel = `${rules.label} - Simulation officielle`;
    ui.timerBox.classList.remove("hidden");
    ui.timerBox.textContent = formatTime(state.remainingSec);
    state.timerId = setInterval(tickTimer, 1000);
  } else if (state.mode === "practice") {
    const asked = clamp(Number(ui.practiceCountInput.value) || 20, 10, 300);
    picked = pickFromCycle(
      gradedPool,
      Math.min(asked, gradedPool.length),
      `${state.track}:practice:graded`
    );
    state.remainingSec = 0;
    sessionLabel = `${EXAM_RULES[state.track].label} - Entrainement corrige (QCM)`;
    ui.timerBox.classList.add("hidden");
  } else {
    const asked = clamp(Number(ui.practiceCountInput.value) || 20, 10, 300);
    if (!officialPromptPool.length) {
      picked = pickFromCycle(
        gradedPool,
        Math.min(asked, gradedPool.length),
        `${state.track}:practice:graded`
      );
      state.mode = "practice";
      state.remainingSec = 0;
      sessionLabel = `${EXAM_RULES[state.track].label} - Entrainement corrige (QCM)`;
      ui.timerBox.classList.add("hidden");
    } else {
      picked = pickFromCycle(
        officialPromptPool,
        Math.min(asked, officialPromptPool.length),
        `${state.track}:official:prompts`
      );
      state.remainingSec = 0;
      sessionLabel = `${EXAM_RULES[state.track].label} - Questions officielles (sans correction)`;
      ui.timerBox.classList.add("hidden");
    }
  }

  state.questions = picked.map(shuffleQuestionOptions);
  state.answers = new Array(picked.length).fill(null);
  state.index = 0;

  ui.sessionLabel.textContent = sessionLabel;
  showQuiz();
  renderQuestion();
}

function tickTimer() {
  if (state.mode !== "exam") return;
  state.remainingSec -= 1;

  if (state.remainingSec <= 0) {
    ui.timerBox.textContent = "00:00";
    finishSession(true);
    return;
  }

  ui.timerBox.textContent = formatTime(state.remainingSec);
}

function renderQuestion() {
  const q = state.questions[state.index];
  const selected = state.answers[state.index];

  ui.counterText.textContent = `Question ${state.index + 1} / ${state.questions.length}`;
  ui.progressFill.style.width = `${((state.index + 1) / state.questions.length) * 100}%`;
  ui.typeBadge.textContent = getTypeLabel(q.type);
  ui.themeBadge.textContent = q.theme;
  ui.questionText.textContent = q.question;

  ui.optionsWrap.innerHTML = "";
  q.options.forEach((option, idx) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "option-btn";
    btn.style.animationDelay = `${idx * 0.03}s`;
    btn.textContent = `${String.fromCharCode(65 + idx)}. ${option}`;
    btn.dataset.selected = selected === idx ? "true" : "false";

    if (state.mode === "practice" && selected !== null && hasKnownAnswer(q)) {
      if (idx === q.answer) btn.classList.add("correct");
      if (idx === selected && idx !== q.answer) btn.classList.add("wrong");
    }

    btn.addEventListener("click", () => {
      state.answers[state.index] = idx;
      renderQuestion();
    });

    ui.optionsWrap.appendChild(btn);
  });

  renderFeedback();
  ui.prevBtn.disabled = state.index === 0;
  ui.nextBtn.textContent =
    state.index === state.questions.length - 1 ? "Terminer" : "Suivant";
}

function renderFeedback() {
  const q = state.questions[state.index];
  const selected = state.answers[state.index];

  if (state.mode === "exam" || selected === null) {
    ui.feedbackWrap.className = "feedback hidden";
    ui.feedbackWrap.textContent = "";
    return;
  }

  if (!hasKnownAnswer(q)) {
    ui.feedbackWrap.className = "feedback";
    ui.feedbackWrap.textContent =
      selected === 0
        ? "Question marquee comme connue. La correction QCM officielle n'est pas publiee."
        : "Question marquee a revoir. La correction QCM officielle n'est pas publiee.";
    return;
  }

  const isCorrect = selected === q.answer;
  ui.feedbackWrap.className = `feedback ${isCorrect ? "good" : "bad"}`;
  ui.feedbackWrap.textContent = `${
    isCorrect ? "Bonne reponse." : "Mauvaise reponse."
  } Bonne reponse: ${q.options[q.answer]}. ${q.explanation}`;
}

function onPrev() {
  if (state.index > 0) {
    state.index -= 1;
    renderQuestion();
  }
}

function onNext() {
  if (state.index < state.questions.length - 1) {
    state.index += 1;
    renderQuestion();
    return;
  }

  finishSession(false);
}

function finishSession(expired) {
  clearTimer();

  const total = state.questions.length;
  let good = 0;
  let percent = 0;

  if (state.mode === "official") {
    good = state.answers.reduce((acc, selected) => acc + (selected === 0 ? 1 : 0), 0);
    percent = total ? Math.round((good / total) * 100) : 0;
  } else {
    const gradedTotal = state.questions.reduce(
      (acc, q) => acc + (hasKnownAnswer(q) ? 1 : 0),
      0
    );
    good = state.questions.reduce((acc, q, idx) => {
      return acc + (hasKnownAnswer(q) && state.answers[idx] === q.answer ? 1 : 0);
    }, 0);
    percent = gradedTotal ? Math.round((good / gradedTotal) * 100) : 0;
  }

  const rules = EXAM_RULES[state.track];
  const passPercent = state.mode === "exam" ? rules.passPercent : null;
  const passed = passPercent === null ? null : percent >= passPercent;

  if (state.mode === "official") {
    ui.scoreLine.textContent = `Revision: ${good}/${total} marquees "Je connais la reponse" (${percent}%)`;
    ui.resultLine.textContent = `Session de questions officielles terminee${
      expired ? " (temps ecoule)" : ""
    }.`;
  } else {
    ui.scoreLine.textContent = `Resultat: ${good}/${total} (${percent}%)`;
    ui.resultLine.textContent =
      state.mode === "exam"
        ? `${passed ? "Reussi" : "A retravailler"} - seuil ${passPercent}% pour ${
            rules.label
          }${expired ? " (temps ecoule)" : ""}`
        : `Session d'entrainement terminee${expired ? " (temps ecoule)" : ""}.`;
  }

  renderThemeBreakdown();
  renderReviewList();
  saveHistory({ mode: state.mode, track: state.track, good, total, percent, passed });
  renderHistory();
  showResults();
}

function renderThemeBreakdown() {
  const stats = new Map();

  state.questions.forEach((q, idx) => {
    const current = stats.get(q.theme) || { total: 0, good: 0 };
    current.total += 1;
    if (hasKnownAnswer(q)) {
      if (state.answers[idx] === q.answer) current.good += 1;
    } else if (state.answers[idx] === 0) {
      current.good += 1;
    }
    stats.set(q.theme, current);
  });

  ui.themeBreakdown.innerHTML = "";
  Array.from(stats.entries())
    .sort((a, b) => a[0].localeCompare(b[0]))
    .forEach(([theme, s]) => {
      const item = document.createElement("div");
      item.className = "theme-chip";
      const pct = Math.round((s.good / s.total) * 100);
      item.textContent = `${theme}: ${s.good}/${s.total} (${pct}%)`;
      ui.themeBreakdown.appendChild(item);
    });
}

function renderReviewList() {
  if (state.mode === "official") {
    const toReview = state.questions
      .map((q, idx) => ({ q, idx }))
      .filter(({ idx }) => state.answers[idx] !== 0);

    ui.reviewList.innerHTML = "";

    if (!toReview.length) {
      const p = document.createElement("p");
      p.textContent = "Aucune question marquee a revoir.";
      ui.reviewList.appendChild(p);
      return;
    }

    toReview.forEach(({ q, idx }) => {
      const block = document.createElement("article");
      block.className = "review-item";
      const status = state.answers[idx] === 1 ? "A revoir" : "Non repondu";

      block.innerHTML = `
        <p><strong>Q:</strong> ${escapeHtml(q.question)}</p>
        <p><strong>Statut:</strong> ${escapeHtml(status)}</p>
        <p><strong>Note:</strong> Correction QCM officielle non publiee.</p>
      `;
      ui.reviewList.appendChild(block);
    });
    return;
  }

  const misses = state.questions
    .map((q, idx) => ({ q, idx }))
    .filter(({ q, idx }) => hasKnownAnswer(q) && state.answers[idx] !== q.answer);

  ui.reviewList.innerHTML = "";

  if (!misses.length) {
    const p = document.createElement("p");
    p.textContent = "Aucune erreur sur cette session.";
    ui.reviewList.appendChild(p);
    return;
  }

  misses.forEach(({ q, idx }) => {
    const block = document.createElement("article");
    block.className = "review-item";

    const asked = state.answers[idx];
    const yourAnswer = asked === null ? "Non repondu" : q.options[asked];
    const correct = q.options[q.answer];

    block.innerHTML = `
      <p><strong>Q:</strong> ${escapeHtml(q.question)}</p>
      <p><strong>Votre reponse:</strong> ${escapeHtml(yourAnswer)}</p>
      <p><strong>Bonne reponse:</strong> ${escapeHtml(correct)}</p>
      <p><strong>Rappel:</strong> ${escapeHtml(q.explanation)}</p>
    `;
    ui.reviewList.appendChild(block);
  });
}

function showQuiz() {
  ui.setupPanel.classList.add("hidden");
  ui.resultPanel.classList.add("hidden");
  ui.quizPanel.classList.remove("hidden");
}

function showResults() {
  ui.setupPanel.classList.add("hidden");
  ui.quizPanel.classList.add("hidden");
  ui.resultPanel.classList.remove("hidden");
}

function showSetup() {
  clearTimer();
  ui.quizPanel.classList.add("hidden");
  ui.resultPanel.classList.add("hidden");
  ui.setupPanel.classList.remove("hidden");
}

function saveHistory(entry) {
  const existing = getHistory();
  existing.unshift({
    date: new Date().toISOString(),
    ...entry,
  });
  localStorage.setItem(STORAGE_KEY, JSON.stringify(existing.slice(0, 12)));
}

function getHistory() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function renderHistory() {
  const data = getHistory();
  if (!data.length) {
    ui.historyText.textContent = "Aucune session enregistree pour le moment.";
    return;
  }

  const latest = data[0];
  const avg = Math.round(
    data.reduce((acc, s) => acc + Number(s.percent || 0), 0) / data.length
  );
  const date = new Date(latest.date).toLocaleString("fr-FR");
  const latestLine = `${date} - ${latest.track.toUpperCase()} - ${latest.percent}%`;
  ui.historyText.textContent = `Derniere session: ${latestLine}. Moyenne (${data.length} sessions): ${avg}%.`;
}

function clearTimer() {
  if (state.timerId) {
    clearInterval(state.timerId);
    state.timerId = null;
  }
}

function pickFromCycle(list, count, cycleKey) {
  if (!list.length || count <= 0) return [];

  const byId = new Map(list.map((q) => [q.id, q]));
  const ids = list.map((q) => q.id);
  const store = getCycleStore();
  let queue = Array.isArray(store[cycleKey]) ? store[cycleKey].filter((id) => byId.has(id)) : [];

  if (!queue.length) {
    queue = [...ids];
    shuffleInPlace(queue);
  }

  const selected = [];
  const seen = new Set();

  while (selected.length < count) {
    if (!queue.length) {
      queue = [...ids];
      shuffleInPlace(queue);
    }

    const nextId = queue.shift();
    if (!nextId || seen.has(nextId)) continue;

    const q = byId.get(nextId);
    if (!q) continue;

    selected.push(q);
    seen.add(nextId);
  }

  store[cycleKey] = queue;
  saveCycleStore(store);
  return selected;
}

function getCycleStore() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_CYCLE);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

function saveCycleStore(store) {
  localStorage.setItem(STORAGE_KEY_CYCLE, JSON.stringify(store));
}

function shuffleQuestionOptions(question) {
  if (!hasKnownAnswer(question)) {
    return {
      ...question,
      options: [...question.options],
      answer: question.answer,
    };
  }

  const options = question.options.map((text, originalIndex) => ({
    text,
    originalIndex,
  }));
  shuffleInPlace(options);

  return {
    ...question,
    options: options.map((o) => o.text),
    answer: options.findIndex((o) => o.originalIndex === question.answer),
  };
}

function shuffleInPlace(list) {
  for (let i = list.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [list[i], list[j]] = [list[j], list[i]];
  }
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function getTypeLabel(type) {
  if (type === "knowledge") return "Connaissances";
  if (type === "knowledge_suggested") return "Connaissances (QCM suggere)";
  if (type === "knowledge_open") return "Connaissances officielles";
  return "Mise en situation";
}

function hasKnownAnswer(question) {
  return Number.isInteger(question.answer);
}

function formatTime(totalSec) {
  const m = Math.floor(totalSec / 60)
    .toString()
    .padStart(2, "0");
  const s = (totalSec % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
}

function escapeHtml(text) {
  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

async function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) return;

  try {
    await navigator.serviceWorker.register("./sw.js", { scope: "./" });
  } catch (error) {
    console.warn("Enregistrement du service worker impossible:", error);
  }
}

init();
