import { EXAM_RULES, QUESTION_BANK } from "./question-bank.js";

const STORAGE_KEY = "civics_exam_local_history_v1";

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
  const isPractice = ui.modeSelect.value === "practice";
  ui.practiceCountWrap.classList.toggle("hidden", !isPractice);
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

  let picked = [];
  let sessionLabel = "";

  if (state.mode === "exam") {
    const rules = EXAM_RULES[state.track];
    picked = [
      ...sample(knowledgePool, rules.knowledgeCount),
      ...sample(situationPool, rules.situationCount),
    ];
    shuffleInPlace(picked);
    state.remainingSec = rules.durationMinutes * 60;
    sessionLabel = `${rules.label} - Simulation officielle`;
    ui.timerBox.classList.remove("hidden");
    ui.timerBox.textContent = formatTime(state.remainingSec);
    state.timerId = setInterval(tickTimer, 1000);
  } else {
    const asked = clamp(Number(ui.practiceCountInput.value) || 20, 10, 50);
    picked = sample(pool, Math.min(asked, pool.length));
    state.remainingSec = 0;
    sessionLabel = `${EXAM_RULES[state.track].label} - Entrainement`;
    ui.timerBox.classList.add("hidden");
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
  ui.typeBadge.textContent = q.type === "knowledge" ? "Connaissances" : "Mise en situation";
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

    if (state.mode === "practice" && selected !== null) {
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

  if (state.mode !== "practice" || selected === null) {
    ui.feedbackWrap.className = "feedback hidden";
    ui.feedbackWrap.textContent = "";
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
  const good = state.questions.reduce((acc, q, idx) => {
    return acc + (state.answers[idx] === q.answer ? 1 : 0);
  }, 0);
  const percent = Math.round((good / total) * 100);
  const rules = EXAM_RULES[state.track];
  const passPercent = state.mode === "exam" ? rules.passPercent : null;
  const passed = passPercent === null ? null : percent >= passPercent;

  ui.scoreLine.textContent = `Resultat: ${good}/${total} (${percent}%)`;
  ui.resultLine.textContent =
    state.mode === "exam"
      ? `${passed ? "Reussi" : "A retravailler"} - seuil ${passPercent}% pour ${
          rules.label
        }${expired ? " (temps ecoule)" : ""}`
      : `Session d'entrainement terminee${expired ? " (temps ecoule)" : ""}.`;

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
    if (state.answers[idx] === q.answer) current.good += 1;
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
  const misses = state.questions
    .map((q, idx) => ({ q, idx }))
    .filter(({ q, idx }) => state.answers[idx] !== q.answer);

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

function sample(list, count) {
  const copy = [...list];
  shuffleInPlace(copy);
  return copy.slice(0, count);
}

function shuffleQuestionOptions(question) {
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
