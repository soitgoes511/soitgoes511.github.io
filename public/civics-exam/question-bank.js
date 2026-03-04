export const EXAM_RULES = {
  "csp": {
    "label": "Carte de sejour pluriannuelle (CSP)",
    "durationMinutes": 45,
    "knowledgeCount": 28,
    "situationCount": 12,
    "passPercent": 60
  },
  "cr": {
    "label": "Carte de resident (CR)",
    "durationMinutes": 45,
    "knowledgeCount": 28,
    "situationCount": 12,
    "passPercent": 65
  }
};

export const SOURCE_LINKS = {
  "official_csp": "https://formation-civique.interieur.gouv.fr/examen-civique/liste-officielle-des-questions-de-connaissance-csp/",
  "official_cr": "https://formation-civique.interieur.gouv.fr/examen-civique/liste-officielle-des-questions-de-connaissance-cr/",
  "exam_rules": "https://www.service-public.fr/particuliers/actualites/A18713",
  "suggested_qcm": "https://leqcmcivique.fr/",
  "suggested_qcm_license": "https://creativecommons.org/licenses/by-nc/4.0/deed.fr"
};

const BASE_QUESTION_BANK = [
  {
    "id": "K001",
    "type": "knowledge",
    "tracks": [
      "csp",
      "cr"
    ],
    "theme": "Principes et valeurs",
    "source": "official_csp",
    "question": "A quoi correspond la date du 14 juillet ?",
    "options": [
      "A la fete nationale francaise",
      "A la fin de la Seconde Guerre mondiale",
      "A la signature de la Constitution de 1958",
      "A la creation de l'Union europeenne"
    ],
    "answer": 0,
    "explanation": "Le 14 juillet est la fete nationale francaise."
  },
  {
    "id": "K002",
    "type": "knowledge",
    "tracks": [
      "csp",
      "cr"
    ],
    "theme": "Principes et valeurs",
    "source": "official_csp",
    "question": "Quelle est la devise de la Republique francaise ?",
    "options": [
      "Liberte, egalite, fraternite",
      "Travail, famille, patrie",
      "Ordre, securite, prosperite",
      "Paix, justice, unite"
    ],
    "answer": 0,
    "explanation": "La devise officielle est: Liberte, egalite, fraternite."
  },
  {
    "id": "K003",
    "type": "knowledge",
    "tracks": [
      "csp",
      "cr"
    ],
    "theme": "Principes et valeurs",
    "source": "official_csp",
    "question": "Quel est un symbole officiel de la Republique francaise ?",
    "options": [
      "Marianne",
      "La baguette",
      "Le TGV",
      "Le Louvre"
    ],
    "answer": 0,
    "explanation": "Marianne est un symbole officiel de la Republique."
  },
  {
    "id": "K004",
    "type": "knowledge",
    "tracks": [
      "csp",
      "cr"
    ],
    "theme": "Principes et valeurs",
    "source": "official_csp",
    "question": "Que signifie le principe d'egalite ?",
    "options": [
      "La loi est la meme pour tous",
      "Tout le monde doit avoir le meme salaire",
      "Tout le monde doit avoir la meme religion",
      "Les femmes ne peuvent pas voter"
    ],
    "answer": 0,
    "explanation": "L'egalite signifie notamment l'egalite devant la loi."
  },
  {
    "id": "K005",
    "type": "knowledge",
    "tracks": [
      "csp",
      "cr"
    ],
    "theme": "Principes et valeurs",
    "source": "official_csp",
    "question": "La liberte d'expression permet :",
    "options": [
      "D'exprimer ses opinions dans le cadre de la loi",
      "D'insulter librement les autres",
      "D'appeler a la haine",
      "De menacer une personne"
    ],
    "answer": 0,
    "explanation": "La liberte d'expression existe, mais elle est encadree par la loi."
  },
  {
    "id": "K006",
    "type": "knowledge",
    "tracks": [
      "csp",
      "cr"
    ],
    "theme": "Principes et valeurs",
    "source": "official_csp",
    "question": "A-t-on le droit d'insulter publiquement quelqu'un a cause de sa difference ?",
    "options": [
      "Non, c'est interdit",
      "Oui, si c'est sur internet",
      "Oui, si c'est dans la rue",
      "Oui, si la personne est inconnue"
    ],
    "answer": 0,
    "explanation": "Les insultes discriminatoires sont interdites et sanctionnees."
  },
  {
    "id": "K007",
    "type": "knowledge",
    "tracks": [
      "csp",
      "cr"
    ],
    "theme": "Principes et valeurs",
    "source": "official_csp",
    "question": "Certains metiers peuvent-ils etre reserves aux hommes ?",
    "options": [
      "Non, femmes et hommes sont egaux en droits",
      "Oui, tous les metiers techniques",
      "Oui, dans toutes les entreprises privees",
      "Oui, si l'employeur le souhaite"
    ],
    "answer": 0,
    "explanation": "L'egalite femmes-hommes s'applique dans le monde du travail."
  },
  {
    "id": "K008",
    "type": "knowledge",
    "tracks": [
      "csp",
      "cr"
    ],
    "theme": "Principes et valeurs",
    "source": "official_csp",
    "question": "De quand date la Constitution de la Ve Republique ?",
    "options": [
      "1958",
      "1905",
      "1789",
      "1945"
    ],
    "answer": 0,
    "explanation": "La Constitution actuelle date de 1958."
  },
  {
    "id": "K009",
    "type": "knowledge",
    "tracks": [
      "csp",
      "cr"
    ],
    "theme": "Principes et valeurs",
    "source": "official_csp",
    "question": "La laicite, c'est :",
    "options": [
      "La neutralite de l'Etat et la liberte de conscience",
      "L'interdiction de toutes les religions",
      "L'obligation d'avoir une religion",
      "La religion officielle de l'Etat"
    ],
    "answer": 0,
    "explanation": "La laicite protege la liberte de croire ou de ne pas croire."
  },
  {
    "id": "K010",
    "type": "knowledge",
    "tracks": [
      "csp",
      "cr"
    ],
    "theme": "Principes et valeurs",
    "source": "official_csp",
    "question": "En quelle annee la loi de separation des Eglises et de l'Etat a-t-elle ete votee ?",
    "options": [
      "1905",
      "1881",
      "1918",
      "1958"
    ],
    "answer": 0,
    "explanation": "La loi de separation date de 1905."
  },
  {
    "id": "K011",
    "type": "knowledge",
    "tracks": [
      "csp",
      "cr"
    ],
    "theme": "Institutions et politique",
    "source": "official_csp",
    "question": "Qui nomme le Premier ministre ?",
    "options": [
      "Le president de la Republique",
      "Le Senat",
      "Le prefet",
      "Le Parlement"
    ],
    "answer": 0,
    "explanation": "Le Premier ministre est nomme par le president."
  },
  {
    "id": "K012",
    "type": "knowledge",
    "tracks": [
      "csp",
      "cr"
    ],
    "theme": "Institutions et politique",
    "source": "official_csp",
    "question": "Le Parlement est compose :",
    "options": [
      "De l'Assemblee nationale et du Senat",
      "Du president et du gouvernement",
      "Des juges et procureurs",
      "Des maires et des prefets"
    ],
    "answer": 0,
    "explanation": "Le Parlement francais est bicameral."
  },
  {
    "id": "K013",
    "type": "knowledge",
    "tracks": [
      "csp",
      "cr"
    ],
    "theme": "Institutions et politique",
    "source": "official_csp",
    "question": "Qui detient le pouvoir executif ?",
    "options": [
      "Le president et le gouvernement",
      "Le Parlement uniquement",
      "Les tribunaux",
      "Les mairies"
    ],
    "answer": 0,
    "explanation": "Le pouvoir executif est exerce par le president et le gouvernement."
  },
  {
    "id": "K014",
    "type": "knowledge",
    "tracks": [
      "csp",
      "cr"
    ],
    "theme": "Institutions et politique",
    "source": "official_csp",
    "question": "Qui detient le pouvoir legislatif ?",
    "options": [
      "Le Parlement",
      "Le president",
      "La police",
      "Le prefet"
    ],
    "answer": 0,
    "explanation": "Le pouvoir legislatif appartient au Parlement."
  },
  {
    "id": "K015",
    "type": "knowledge",
    "tracks": [
      "csp",
      "cr"
    ],
    "theme": "Institutions et politique",
    "source": "official_csp",
    "question": "Qui vote les lois ?",
    "options": [
      "Le Parlement",
      "Le maire",
      "Le juge",
      "Le procureur"
    ],
    "answer": 0,
    "explanation": "Les lois sont votees par l'Assemblee nationale et le Senat."
  },
  {
    "id": "K016",
    "type": "knowledge",
    "tracks": [
      "csp",
      "cr"
    ],
    "theme": "Institutions et politique",
    "source": "official_csp",
    "question": "Qui sanctionne l'auteur d'un vol ?",
    "options": [
      "Un juge",
      "Le maire",
      "Le prefet",
      "Le ministre"
    ],
    "answer": 0,
    "explanation": "La sanction penale est prononcee par un juge."
  },
  {
    "id": "K017",
    "type": "knowledge",
    "tracks": [
      "csp",
      "cr"
    ],
    "theme": "Institutions et politique",
    "source": "official_csp",
    "question": "A partir de quel age a-t-on le droit de voter ?",
    "options": [
      "18 ans",
      "16 ans",
      "21 ans",
      "25 ans"
    ],
    "answer": 0,
    "explanation": "Le droit de vote s'exerce a partir de 18 ans."
  },
  {
    "id": "K018",
    "type": "knowledge",
    "tracks": [
      "csp",
      "cr"
    ],
    "theme": "Institutions et politique",
    "source": "official_csp",
    "question": "Pour combien de temps est elu le president de la Republique ?",
    "options": [
      "5 ans",
      "4 ans",
      "6 ans",
      "7 ans"
    ],
    "answer": 0,
    "explanation": "Le mandat presidentiel est de 5 ans."
  },
  {
    "id": "K019",
    "type": "knowledge",
    "tracks": [
      "csp",
      "cr"
    ],
    "theme": "Institutions et politique",
    "source": "official_csp",
    "question": "Pour combien de temps sont elus les deputes ?",
    "options": [
      "5 ans",
      "3 ans",
      "6 ans",
      "9 ans"
    ],
    "answer": 0,
    "explanation": "Le mandat des deputes est de 5 ans."
  },
  {
    "id": "K020",
    "type": "knowledge",
    "tracks": [
      "csp",
      "cr"
    ],
    "theme": "Institutions et politique",
    "source": "official_csp",
    "question": "Pour combien de temps sont elus les senateurs ?",
    "options": [
      "6 ans",
      "5 ans",
      "4 ans",
      "8 ans"
    ],
    "answer": 0,
    "explanation": "Le mandat des senateurs est de 6 ans."
  },
  {
    "id": "K021",
    "type": "knowledge",
    "tracks": [
      "csp",
      "cr"
    ],
    "theme": "Institutions et politique",
    "source": "official_csp",
    "question": "Combien de deputes composent l'Assemblee nationale ?",
    "options": [
      "577",
      "348",
      "500",
      "700"
    ],
    "answer": 0,
    "explanation": "L'Assemblee nationale compte 577 deputes."
  },
  {
    "id": "K022",
    "type": "knowledge",
    "tracks": [
      "csp",
      "cr"
    ],
    "theme": "Institutions et politique",
    "source": "official_csp",
    "question": "Qui represente l'Etat dans un departement ?",
    "options": [
      "Le prefet",
      "Le maire",
      "Le depute",
      "Le senateur"
    ],
    "answer": 0,
    "explanation": "Le prefet represente l'Etat dans le departement."
  },
  {
    "id": "K023",
    "type": "knowledge",
    "tracks": [
      "csp",
      "cr"
    ],
    "theme": "Droits et devoirs",
    "source": "official_csp",
    "question": "De quelle annee date la Declaration des droits de l'homme et du citoyen ?",
    "options": [
      "1789",
      "1799",
      "1848",
      "1958"
    ],
    "answer": 0,
    "explanation": "La DDHC date de 1789."
  },
  {
    "id": "K024",
    "type": "knowledge",
    "tracks": [
      "csp",
      "cr"
    ],
    "theme": "Droits et devoirs",
    "source": "official_csp",
    "question": "La peine de mort est :",
    "options": [
      "Interdite",
      "Autorisee",
      "Autorisee en cas de terrorisme",
      "A la discretion des juges"
    ],
    "answer": 0,
    "explanation": "La peine de mort est abolie en France."
  },
  {
    "id": "K025",
    "type": "knowledge",
    "tracks": [
      "csp",
      "cr"
    ],
    "theme": "Droits et devoirs",
    "source": "official_csp",
    "question": "En France, etre marie a plusieurs personnes en meme temps est :",
    "options": [
      "Interdit",
      "Autorise",
      "Autorise avec accord familial",
      "Autorise dans le prive"
    ],
    "answer": 0,
    "explanation": "La polygamie est interdite en France."
  },
  {
    "id": "K026",
    "type": "knowledge",
    "tracks": [
      "csp",
      "cr"
    ],
    "theme": "Droits et devoirs",
    "source": "official_csp",
    "question": "Une femme peut avorter :",
    "options": [
      "Selon les conditions prevues par la loi",
      "Jamais",
      "Seulement avec accord du maire",
      "Seulement si elle est mariee"
    ],
    "answer": 0,
    "explanation": "L'IVG est un droit legalement encadre."
  },
  {
    "id": "K027",
    "type": "knowledge",
    "tracks": [
      "csp",
      "cr"
    ],
    "theme": "Droits et devoirs",
    "source": "official_csp",
    "question": "Quelle est l'infraction la plus grave ?",
    "options": [
      "Le crime",
      "Le delit",
      "La contravention",
      "L'avertissement"
    ],
    "answer": 0,
    "explanation": "La categorie la plus grave est le crime."
  },
  {
    "id": "K028",
    "type": "knowledge",
    "tracks": [
      "csp",
      "cr"
    ],
    "theme": "Droits et devoirs",
    "source": "official_csp",
    "question": "Le travail non declare est :",
    "options": [
      "Interdit",
      "Autorise",
      "Autorise si c'est temporaire",
      "Autorise si c'est paye en especes"
    ],
    "answer": 0,
    "explanation": "Le travail dissimule est illegal."
  },
  {
    "id": "K029",
    "type": "knowledge",
    "tracks": [
      "csp",
      "cr"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "official_csp",
    "question": "En quelle annee a debute la Revolution francaise ?",
    "options": [
      "1789",
      "1815",
      "1848",
      "1914"
    ],
    "answer": 0,
    "explanation": "La Revolution francaise commence en 1789."
  },
  {
    "id": "K030",
    "type": "knowledge",
    "tracks": [
      "csp",
      "cr"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "official_csp",
    "question": "Quand a eu lieu la Premiere Guerre mondiale ?",
    "options": [
      "1914-1918",
      "1939-1945",
      "1870-1871",
      "1954-1962"
    ],
    "answer": 0,
    "explanation": "La Premiere Guerre mondiale a eu lieu de 1914 a 1918."
  },
  {
    "id": "K031",
    "type": "knowledge",
    "tracks": [
      "csp",
      "cr"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "official_csp",
    "question": "Quand a eu lieu la Seconde Guerre mondiale ?",
    "options": [
      "1939-1945",
      "1914-1918",
      "1948-1952",
      "1850-1854"
    ],
    "answer": 0,
    "explanation": "La Seconde Guerre mondiale a eu lieu de 1939 a 1945."
  },
  {
    "id": "K032",
    "type": "knowledge",
    "tracks": [
      "csp",
      "cr"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "official_csp",
    "question": "En quelle annee l'esclavage a-t-il ete aboli definitivement en France ?",
    "options": [
      "1848",
      "1789",
      "1905",
      "1945"
    ],
    "answer": 0,
    "explanation": "L'abolition definitive de l'esclavage date de 1848."
  },
  {
    "id": "K033",
    "type": "knowledge",
    "tracks": [
      "csp",
      "cr"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "official_csp",
    "question": "Quelle est la capitale de la France ?",
    "options": [
      "Paris",
      "Lyon",
      "Marseille",
      "Bordeaux"
    ],
    "answer": 0,
    "explanation": "La capitale de la France est Paris."
  },
  {
    "id": "K034",
    "type": "knowledge",
    "tracks": [
      "csp",
      "cr"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "official_csp",
    "question": "Dans quelle ville se trouve la tour Eiffel ?",
    "options": [
      "Paris",
      "Lille",
      "Toulouse",
      "Nantes"
    ],
    "answer": 0,
    "explanation": "La tour Eiffel se trouve a Paris."
  },
  {
    "id": "K035",
    "type": "knowledge",
    "tracks": [
      "csp",
      "cr"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "official_csp",
    "question": "Quel numero permet d'appeler le SAMU ?",
    "options": [
      "15",
      "18",
      "17",
      "1123"
    ],
    "answer": 0,
    "explanation": "Le SAMU est joignable au 15."
  },
  {
    "id": "K036",
    "type": "knowledge",
    "tracks": [
      "csp",
      "cr"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "official_csp",
    "question": "Quel numero permet d'appeler les pompiers ?",
    "options": [
      "18",
      "15",
      "17",
      "191"
    ],
    "answer": 0,
    "explanation": "Les pompiers sont joignables au 18."
  },
  {
    "id": "K037",
    "type": "knowledge",
    "tracks": [
      "csp",
      "cr"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "official_csp",
    "question": "Quelle est la duree legale du temps de travail par semaine ?",
    "options": [
      "35 heures",
      "30 heures",
      "39 heures",
      "42 heures"
    ],
    "answer": 0,
    "explanation": "La duree legale du travail est de 35 heures par semaine."
  },
  {
    "id": "K038",
    "type": "knowledge",
    "tracks": [
      "csp",
      "cr"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "official_csp",
    "question": "A partir de quel age un mineur peut-il travailler (cas general) ?",
    "options": [
      "16 ans",
      "14 ans",
      "12 ans",
      "18 ans"
    ],
    "answer": 0,
    "explanation": "L'age legal general pour travailler est 16 ans."
  },
  {
    "id": "K039",
    "type": "knowledge",
    "tracks": [
      "csp",
      "cr"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "official_csp",
    "question": "Jusqu'a quel age l'instruction est-elle obligatoire ?",
    "options": [
      "16 ans",
      "14 ans",
      "18 ans",
      "12 ans"
    ],
    "answer": 0,
    "explanation": "L'instruction est obligatoire jusqu'a 16 ans."
  },
  {
    "id": "K040",
    "type": "knowledge",
    "tracks": [
      "csp",
      "cr"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "official_csp",
    "question": "Quel est le diplome obtenu a la fin du lycee ?",
    "options": [
      "Le baccalaureat",
      "Le brevet",
      "La licence",
      "Le CAP"
    ],
    "answer": 0,
    "explanation": "Le diplome de fin de lycee est le baccalaureat."
  },
  {
    "id": "S001",
    "type": "situation",
    "tracks": [
      "csp",
      "cr"
    ],
    "theme": "Mises en situation",
    "source": "exam_rules",
    "question": "Vous voyez une personne inconsciente. Que devez-vous faire en premier ?",
    "options": [
      "Appeler les secours (15, 18 ou 112)",
      "Filmer la scene",
      "Partir immediatement",
      "Attendre 30 minutes"
    ],
    "answer": 0,
    "explanation": "En urgence, il faut alerter rapidement les secours."
  },
  {
    "id": "S002",
    "type": "situation",
    "tracks": [
      "csp",
      "cr"
    ],
    "theme": "Mises en situation",
    "source": "exam_rules",
    "question": "Un employeur vous propose un travail sans contrat ni declaration. Que faire ?",
    "options": [
      "Refuser, c'est illegal",
      "Accepter si le salaire est eleve",
      "Accepter seulement les week-ends",
      "Accepter sans poser de questions"
    ],
    "answer": 0,
    "explanation": "Le travail non declare est illegal."
  },
  {
    "id": "S003",
    "type": "situation",
    "tracks": [
      "csp",
      "cr"
    ],
    "theme": "Mises en situation",
    "source": "exam_rules",
    "question": "Un parent veut retirer son enfant des cours obligatoires de sport mixte a l'ecole publique. Que dit la regle ?",
    "options": [
      "L'enfant doit suivre les enseignements obligatoires",
      "Le parent choisit toutes les matieres",
      "L'ecole doit supprimer la mixite",
      "L'enfant peut rester a la maison librement"
    ],
    "answer": 0,
    "explanation": "A l'ecole publique, les cours obligatoires doivent etre suivis."
  },
  {
    "id": "S004",
    "type": "situation",
    "tracks": [
      "csp",
      "cr"
    ],
    "theme": "Mises en situation",
    "source": "exam_rules",
    "question": "Vous etes temoin de violences conjugales. Quelle est la bonne reaction ?",
    "options": [
      "Alerter la police ou la gendarmerie (17)",
      "Ne rien faire",
      "Diffuser la scene sur les reseaux sociaux",
      "Intervenir seul avec violence"
    ],
    "answer": 0,
    "explanation": "Il faut prevenir les autorites pour proteger la victime."
  },
  {
    "id": "S005",
    "type": "situation",
    "tracks": [
      "csp",
      "cr"
    ],
    "theme": "Mises en situation",
    "source": "exam_rules",
    "question": "Un ami vous demande de voter a sa place. Que devez-vous faire ?",
    "options": [
      "Refuser, le vote est personnel",
      "Accepter si vous votez pareil",
      "Accepter si c'est un proche",
      "Laisser quelqu'un d'autre voter pour lui"
    ],
    "answer": 0,
    "explanation": "Le vote est personnel et encadre par la loi."
  },
  {
    "id": "S006",
    "type": "situation",
    "tracks": [
      "csp",
      "cr"
    ],
    "theme": "Mises en situation",
    "source": "exam_rules",
    "question": "Vous avez une forte douleur thoracique soudaine. Quel reflexe adopter ?",
    "options": [
      "Appeler le 15",
      "Attendre quelques jours",
      "Chercher un avis sur les reseaux sociaux uniquement",
      "Prendre la voiture seul"
    ],
    "answer": 0,
    "explanation": "Une douleur thoracique peut etre une urgence vitale."
  },
  {
    "id": "S007",
    "type": "situation",
    "tracks": [
      "csp",
      "cr"
    ],
    "theme": "Mises en situation",
    "source": "exam_rules",
    "question": "Probleme de sante non urgent: a qui s'adresser en premier ?",
    "options": [
      "Au medecin traitant",
      "Aux urgences systematiquement",
      "A un voisin",
      "Au tribunal"
    ],
    "answer": 0,
    "explanation": "Le medecin traitant est le premier interlocuteur hors urgence."
  },
  {
    "id": "S008",
    "type": "situation",
    "tracks": [
      "csp",
      "cr"
    ],
    "theme": "Mises en situation",
    "source": "exam_rules",
    "question": "Vous recevez un message haineux visant une origine. Que faire ?",
    "options": [
      "Le signaler et ne pas le relayer",
      "Le partager",
      "Repondre avec des menaces",
      "Publier les coordonnees de l'auteur"
    ],
    "answer": 0,
    "explanation": "Les contenus haineux doivent etre signales."
  },
  {
    "id": "S009",
    "type": "situation",
    "tracks": [
      "csp",
      "cr"
    ],
    "theme": "Mises en situation",
    "source": "exam_rules",
    "question": "Vous cassez une bouteille en verre sur le trottoir. Que faire ?",
    "options": [
      "Nettoyer et jeter dans un conteneur adapte",
      "Laisser sur place",
      "Cacher les debris",
      "Les jeter dans la rue voisine"
    ],
    "answer": 0,
    "explanation": "Il faut garder l'espace public propre et securise."
  },
  {
    "id": "S010",
    "type": "situation",
    "tracks": [
      "csp",
      "cr"
    ],
    "theme": "Mises en situation",
    "source": "exam_rules",
    "question": "Vous achetez une voiture. Quelle condition est indispensable pour rouler ?",
    "options": [
      "Avoir une assurance valide",
      "Avoir un pass de parking",
      "Avoir un accord de l'employeur",
      "Avoir un pass Navigo"
    ],
    "answer": 0,
    "explanation": "L'assurance automobile est obligatoire."
  },
  {
    "id": "S011",
    "type": "situation",
    "tracks": [
      "csp",
      "cr"
    ],
    "theme": "Mises en situation",
    "source": "exam_rules",
    "question": "Votre employeur refuse d'embaucher des femmes. Cette pratique est :",
    "options": [
      "Une discrimination interdite",
      "Autorisee en entreprise privee",
      "Autorisee en CDD",
      "Autorisee si les salaries sont d'accord"
    ],
    "answer": 0,
    "explanation": "La discrimination a l'embauche est interdite."
  },
  {
    "id": "S012",
    "type": "situation",
    "tracks": [
      "csp",
      "cr"
    ],
    "theme": "Mises en situation",
    "source": "exam_rules",
    "question": "Vous etes controle par la police. Quelle attitude est correcte ?",
    "options": [
      "Rester calme et respecter les instructions legales",
      "Prendre la fuite",
      "Refuser tout echange",
      "Insulter les agents"
    ],
    "answer": 0,
    "explanation": "Le respect des forces de l'ordre et des procedures est obligatoire."
  },
  {
    "id": "S013",
    "type": "situation",
    "tracks": [
      "csp",
      "cr"
    ],
    "theme": "Mises en situation",
    "source": "exam_rules",
    "question": "Des parents refusent d'envoyer leur enfant a l'ecole sans motif legal. Que risque-t-on ?",
    "options": [
      "Des sanctions car l'instruction est obligatoire",
      "Rien, c'est toujours libre",
      "Seulement un avertissement oral sans suite",
      "Une prime de la mairie"
    ],
    "answer": 0,
    "explanation": "L'instruction obligatoire est une obligation legale."
  },
  {
    "id": "S014",
    "type": "situation",
    "tracks": [
      "csp",
      "cr"
    ],
    "theme": "Mises en situation",
    "source": "exam_rules",
    "question": "Un salaire propose est inferieur au SMIC pour un temps plein legal. Que faire ?",
    "options": [
      "Contester et demander l'application de la loi",
      "Accepter sans contrat",
      "Payer pour garder l'emploi",
      "Travailler gratuitement pendant un mois"
    ],
    "answer": 0,
    "explanation": "Le salaire minimum legal doit etre respecte."
  },
  {
    "id": "S015",
    "type": "situation",
    "tracks": [
      "csp",
      "cr"
    ],
    "theme": "Mises en situation",
    "source": "exam_rules",
    "question": "Vous etes temoin de propos racistes au travail. Que faire ?",
    "options": [
      "Signaler les faits (RH, representants, autorites)",
      "Ne rien faire",
      "Partager les propos pour rire",
      "Repondre par des menaces"
    ],
    "answer": 0,
    "explanation": "Les propos discriminatoires doivent etre signales."
  },
  {
    "id": "S016",
    "type": "situation",
    "tracks": [
      "csp",
      "cr"
    ],
    "theme": "Mises en situation",
    "source": "exam_rules",
    "question": "Vous etes temoin d'un accident de la route. Comportement conforme ?",
    "options": [
      "Porter assistance et alerter les secours",
      "Partir pour eviter des questions",
      "Filmer sans prevenir personne",
      "Ignorer la situation"
    ],
    "answer": 0,
    "explanation": "L'assistance a personne en danger est un devoir."
  }
];

const SUGGESTED_QCM_BANK = [
  {
    "id": "A001",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Principes et valeurs",
    "source": "suggested_leqcm_csp",
    "question": "Quel est l'un des symboles de la Republique francaise ?",
    "options": [
      "Le drapeau europeen",
      "La Tour Eiffel",
      "Le livre",
      "La Marseillaise"
    ],
    "answer": 3,
    "explanation": "La Marseillaise est l'hymne national. C'est un symbole de la Republique francaise, comme le drapeau tricolore, Marianne et la devise 'Liberte, Egalite, Fraternite'."
  },
  {
    "id": "A002",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Principes et valeurs",
    "source": "suggested_leqcm_csp",
    "question": "Le principe d'egalite signifie que :",
    "options": [
      "Tous les citoyens gagnent le meme salaire.",
      "La loi est la meme pour tout le monde.",
      "Tous les citoyens doivent avoir les memes idees.",
      "Tous les citoyens font le meme travail."
    ],
    "answer": 1,
    "explanation": "C'est l'egalite devant la loi. Que l'on soit riche ou pauvre, puissant ou inconnu, les regles et les punitions sont les memes pour tous."
  },
  {
    "id": "A003",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Principes et valeurs",
    "source": "suggested_leqcm_csp",
    "question": "\"Liberte, Egalite, Fraternite\", c'est :",
    "options": [
      "Le titre de l'hymne national.",
      "Une phrase ecrite par Victor Hugo.",
      "La devise de la Republique francaise.",
      "Le nom du President de la Republique."
    ],
    "answer": 2,
    "explanation": "C'est la devise de la France. Ces trois mots sont ecrits sur les mairies, les ecoles et sur les pieces de monnaie."
  },
  {
    "id": "A004",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Principes et valeurs",
    "source": "suggested_leqcm_csp",
    "question": "A-t-on le droit d'insulter publiquement quelqu'un parce qu'il est different (handicap, apparence physique, sexe...) ?",
    "options": [
      "Oui, si c'est pour rire.",
      "Non, c'est interdit par la loi et puni par la justice.",
      "Oui, mais seulement sur Internet.",
      "Oui, si on est en colere."
    ],
    "answer": 1,
    "explanation": "C'est interdit par la loi. On ne peut pas insulter une personne parce qu'elle est differente. La justice punit ces actes.."
  },
  {
    "id": "A005",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "suggested_leqcm_csp",
    "question": "Le regime de la France est :",
    "options": [
      "Une monarchie",
      "Un empire",
      "Une republique",
      "Une dictature"
    ],
    "answer": 2,
    "explanation": "La France est une republique. Cela veut dire que le chef de l'Etat n'est pas un roi et qu'il est choisi par les citoyens."
  },
  {
    "id": "A006",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Principes et valeurs",
    "source": "suggested_leqcm_csp",
    "question": "Lequel de ces symboles represente officiellement la Republique francaise ?",
    "options": [
      "La Tour Eiffel",
      "Le coq gaulois",
      "Le drapeau tricolore",
      "Le Palais de Versailles"
    ],
    "answer": 2,
    "explanation": "Le drapeau tricolore (bleu, blanc, rouge) est le symbole officiel de la Republique francaise."
  },
  {
    "id": "A007",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Principes et valeurs",
    "source": "suggested_leqcm_csp",
    "question": "Ou peut-on voir la devise de la Republique ?",
    "options": [
      "Uniquement dans les livres d'histoire",
      "Sur tous les btiments publics (mairies, coles, palais de justice...)",
      "Seulement a l'Assemblee Nationale",
      "Elle n'est inscrite nulle part officiellement"
    ],
    "answer": 1,
    "explanation": "La devise 'Libert, galit, Fraternit' est inscrite sur les btiments publics : les mairies, les coles, les palais de justice."
  },
  {
    "id": "A008",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Principes et valeurs",
    "source": "suggested_leqcm_csp",
    "question": "Quels sont des symboles officiels de la Republique francaise ?",
    "options": [
      "La Tour Eiffel, le Louvre, le vin",
      "Le drapeau tricolore, Marianne, la Marseillaise",
      "Le beret, la baguette, le fromage",
      "La Statue de la Liberte, les Champs-Elysees, l'Arc de Triomphe"
    ],
    "answer": 1,
    "explanation": "Les symboles officiels de la Republique francaise sont le drapeau tricolore, Marianne et l'hymne national, la Marseillaise."
  },
  {
    "id": "A009",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Principes et valeurs",
    "source": "suggested_leqcm_csp",
    "question": "Qu'est-ce que l'egalite ?",
    "options": [
      "Le droit d'avoir les memes objets que les autres",
      "Avoir les memes droits et etre protege de la meme facon par la loi",
      "L'obligation de gagner le meme salaire que tout le monde",
      "L'obligation de donner sa maison a l'Etat"
    ],
    "answer": 1,
    "explanation": "L'egalite signifie que tous les citoyens ont les memes droits. La loi est la meme pour tout le monde."
  },
  {
    "id": "A010",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Principes et valeurs",
    "source": "suggested_leqcm_csp",
    "question": "Que signifie la liberte ?",
    "options": [
      "Faire tout ce que l'on veut sans aucune regle",
      "Pouvoir faire ce que l'on veut si on respecte la loi et les autres",
      "Ne jamais devoir obeir a la police",
      "Avoir le droit de ne pas payer ses factures"
    ],
    "answer": 1,
    "explanation": "La liberte est le droit de faire ce que l'on veut, mais il faut respecter la loi et ne pas deranger les autres."
  },
  {
    "id": "A011",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Principes et valeurs",
    "source": "suggested_leqcm_csp",
    "question": "Que signifie le mot \"fraternite\" dans la devise francaise ?",
    "options": [
      "L'obligation de partager son argent",
      "La solidarite et l'aide entre les citoyens",
      "Le respect de tous les membres de sa famille",
      "Aimer seulement ses amis proches"
    ],
    "answer": 1,
    "explanation": "La fraternite, c'est la solidarite et l'aide entre les citoyens. C'est vivre ensemble dans le respect."
  },
  {
    "id": "A012",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Principes et valeurs",
    "source": "suggested_leqcm_csp",
    "question": "Quel animal est un symbole de la France ?",
    "options": [
      "Le lion",
      "L'aigle",
      "Le coq",
      "Le dauphin"
    ],
    "answer": 2,
    "explanation": "Le coq est un symbole traditionnel de la France."
  },
  {
    "id": "A013",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "suggested_leqcm_csp",
    "question": "Quel est l'un des roles des associations ?",
    "options": [
      "Aider uniquement les Francais.",
      "Aider les personnes ou partager un loisir.",
      "Punir les gens qui ne respectent pas la loi.",
      "Fixer le montant des impots."
    ],
    "answer": 1,
    "explanation": "Les associations servent a etre ensemble et a faire des projets (sport, culture, aide). Elles sont ouvertes a tout le monde, pas seulement aux Francais."
  },
  {
    "id": "A014",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Principes et valeurs",
    "source": "suggested_leqcm_csp",
    "question": "Quel est le nom de l'hymne national ?",
    "options": [
      "Le Chant des Partisans",
      "La Marseillaise",
      "La France est belle",
      "L'hymne de la joie"
    ],
    "answer": 1,
    "explanation": "La Marseillaise est la chanson officielle de la France. C'est l'hymne national."
  },
  {
    "id": "A015",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Principes et valeurs",
    "source": "suggested_leqcm_csp",
    "question": "Quel symbole de la Republique francaise est tricolore ?",
    "options": [
      "Marianne",
      "La devise",
      "Le drapeau",
      "La Marseillaise"
    ],
    "answer": 2,
    "explanation": "Le drapeau francais est bleu, blanc, rouge. C'est le symbole tricolore de la France."
  },
  {
    "id": "A016",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Principes et valeurs",
    "source": "suggested_leqcm_csp",
    "question": "Quelle est la date de la fete nationale francaise ?",
    "options": [
      "Le 8 mai",
      "Le 11 novembre",
      "Le 14 juillet",
      "Le 1er mai"
    ],
    "answer": 2,
    "explanation": "La fete nationale francaise est le 14 juillet."
  },
  {
    "id": "A017",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Principes et valeurs",
    "source": "suggested_leqcm_csp",
    "question": "Quelle est la langue officielle de la Republique francaise ?",
    "options": [
      "L'anglais",
      "Le francais",
      "L'espagnol",
      "L'allemand"
    ],
    "answer": 1,
    "explanation": "En France, la seule langue officielle est le francais. C'est la langue utilisee par l'Etat."
  },
  {
    "id": "A018",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Principes et valeurs",
    "source": "suggested_leqcm_csp",
    "question": "Quelle est la place de la langue francaise dans la Republique ?",
    "options": [
      "C'est une langue interdite a l'ecole.",
      "C'est la langue officielle de la France.",
      "C'est une langue etrangere.",
      "On la parle seulement a Paris."
    ],
    "answer": 1,
    "explanation": "Le francais est la langue officielle. C'est la langue de l'ecole, du travail, de la loi et de l'administration."
  },
  {
    "id": "A019",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Principes et valeurs",
    "source": "suggested_leqcm_csp",
    "question": "Quelle liberte permet a chacun d'exprimer ses idees ?",
    "options": [
      "La liberte de voyager",
      "La liberte de travailler",
      "La liberte d'expression",
      "La liberte de choisir son sport"
    ],
    "answer": 2,
    "explanation": "La liberte d'expression est le droit de dire ou d'ecrire ce que l'on pense."
  },
  {
    "id": "A020",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Principes et valeurs",
    "source": "suggested_leqcm_csp",
    "question": "La liberte d'expression :",
    "options": [
      "Elle permet de tout dire, meme des insultes.",
      "Elle permet de s'exprimer, mais elle a des limites.",
      "C'est un droit reserve uniquement aux journalistes.",
      "Elle autorise les propos racistes."
    ],
    "answer": 1,
    "explanation": "En France, on est libre de donner son avis. Mais il est interdit par la loi de diffuser de la haine, du racisme ou d'insulter les gens."
  },
  {
    "id": "A021",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Principes et valeurs",
    "source": "suggested_leqcm_csp",
    "question": "Quelles sont les couleurs du drapeau francais ?",
    "options": [
      "Rouge, blanc, or",
      "Bleu, blanc, rouge",
      "Vert, blanc, bleu",
      "Jaune, rouge, noir"
    ],
    "answer": 1,
    "explanation": "Le drapeau francais, appele drapeau tricolore, est compose des couleurs bleu, blanc et rouge."
  },
  {
    "id": "A022",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Principes et valeurs",
    "source": "suggested_leqcm_csp",
    "question": "Qu'est-ce que la Marseillaise ?",
    "options": [
      "Un monument historique",
      "Un plat traditionnel francais",
      "L'hymne national de la France",
      "Le surnom de Paris"
    ],
    "answer": 2,
    "explanation": "La Marseillaise est la chanson officielle (l'hymne) de la France."
  },
  {
    "id": "A023",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Principes et valeurs",
    "source": "suggested_leqcm_csp",
    "question": "Qu'est ce qui est traditionnellement organise sur les Champs Elysees le 14 juillet pour celebrer la fete nationale ?",
    "options": [
      "Un grand pique-nique populaire",
      "Un defile militaire",
      "Un concert de musique classique",
      "Une exposition d'art"
    ],
    "answer": 1,
    "explanation": "Le 14 juillet, c'est un grand defile militaire sur les Champs-Elysees."
  },
  {
    "id": "A024",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Principes et valeurs",
    "source": "suggested_leqcm_csp",
    "question": "Qui est Marianne ?",
    "options": [
      "Une reine de France celebre",
      "Une actrice de cinema",
      "Le symbole de la Republique francaise",
      "Une chanteuse connue"
    ],
    "answer": 2,
    "explanation": "Marianne est le symbole de la Republique francaise."
  },
  {
    "id": "A025",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Principes et valeurs",
    "source": "suggested_leqcm_csp",
    "question": "Une personne peut-elle changer librement de religion ?",
    "options": [
      "Non, on garde la meme religion toute sa vie.",
      "Oui, chacun est libre de choisir sa religion ou de n'en avoir aucune.",
      "Oui, mais seulement une fois dans sa vie.",
      "Non, cela est interdit par la loi."
    ],
    "answer": 1,
    "explanation": "En France, la loi dit que chacun est libre de choisir sa religion, d'en changer ou de ne pas avoir de religion."
  },
  {
    "id": "A026",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Principes et valeurs",
    "source": "suggested_leqcm_csp",
    "question": "\"La France est une Republique indivisible, ..., democratique et sociale\". Completez cette phrase extraite de l'article 1er de la Constitution :",
    "options": [
      "chretienne",
      "laique",
      "royale",
      "riche"
    ],
    "answer": 1,
    "explanation": "Le mot manquant est \"laique\". Cela veut dire que la France est un pays neutre envers les religions. L'Etat et la religion sont separes."
  },
  {
    "id": "A027",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Principes et valeurs",
    "source": "suggested_leqcm_csp",
    "question": "Que permet le principe de laicite ?",
    "options": [
      "Obliger tout le monde a avoir la meme religion",
      "La liberte de choisir sa religion ou de ne pas avoir de religion",
      "Enseigner une religion officielle a l'ecole",
      "Interdire toutes les fetes religieuses"
    ],
    "answer": 1,
    "explanation": "La laicite garantit la liberte de chacun. On peut choisir une religion ou ne pas croire en Dieu. L'Etat ne finance aucune religion."
  },
  {
    "id": "A028",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Principes et valeurs",
    "source": "suggested_leqcm_csp",
    "question": "Quel droit est garanti par la laicite ?",
    "options": [
      "Le droit d'imposer sa religion aux autres",
      "La liberte de croire ou de ne pas croire",
      "Le droit d'interdire toutes les religions",
      "Le droit de refuser les lois de la Republique"
    ],
    "answer": 1,
    "explanation": "La laicite permet a chacun de choisir librement sa religion ou de ne pas en avoir. Mais elle impose de respecter la loi et les autres."
  },
  {
    "id": "A029",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Principes et valeurs",
    "source": "suggested_leqcm_csp",
    "question": "Pourquoi le principe de laicite doit-il etre respecte a l'ecole ?",
    "options": [
      "Pour que tous les eleves apprennent la meme religion",
      "Pour que l'ecole soit neutre et accueille tous les eleves",
      "Pour que les professeurs imposent leurs idees",
      "Pour supprimer les cours d'histoire"
    ],
    "answer": 1,
    "explanation": "A l'ecole, la laicite protege les eleves. L'enseignement est neutre et tous les enfants sont bienvenus, peu importe leurs croyances."
  },
  {
    "id": "A030",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Principes et valeurs",
    "source": "suggested_leqcm_csp",
    "question": "Qu'est-ce que la laicite ?",
    "options": [
      "L'obligation pour tous de pratiquer une religion",
      "La separation de l'Etat et des religions. L'Etat est neutre et ne choisit aucune religion.",
      "La promotion d'une religion unique",
      "L'interdiction de toute pratique religieuse"
    ],
    "answer": 1,
    "explanation": "La laicite veut dire que l'Etat et les religions sont separes. L'Etat ne choisit aucune religion. On est libre de croire ou de ne pas croire."
  },
  {
    "id": "A031",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Principes et valeurs",
    "source": "suggested_leqcm_csp",
    "question": "Un enfant peut-il refuser d'aller a l'ecole pour une raison religieuse ?",
    "options": [
      "Oui, la religion est plus importante.",
      "Non, l'ecole est obligatoire pour tous.",
      "Oui, si les parents sont d'accord.",
      "Oui, mais seulement le vendredi."
    ],
    "answer": 1,
    "explanation": "En France, l'ecole est obligatoire pour tous les enfants. On ne peut pas refuser d'aller a l'ecole a cause d'une religion."
  },
  {
    "id": "A032",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Principes et valeurs",
    "source": "suggested_leqcm_csp",
    "question": "Une personne a-t-elle le droit de ne pas croire en une religion ?",
    "options": [
      "Non, avoir une religion est obligatoire.",
      "Oui, chacun est libre de choisir ses idees.",
      "Oui, mais il faut le declarer a la police.",
      "Non, c'est interdit par la loi."
    ],
    "answer": 1,
    "explanation": "En France, vous etes libre. Vous pouvez avoir une religion, changer de religion, ou ne pas avoir de religion."
  },
  {
    "id": "A033",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "suggested_leqcm_csp",
    "question": "Qu'est-ce que le pouvoir executif ? Le pouvoir :",
    "options": [
      "de voter les lois.",
      "de juger les crimes.",
      "d'appliquer les lois.",
      "de changer la Constitution."
    ],
    "answer": 2,
    "explanation": "Le pouvoir executif (le President et le Gouvernement) sert a diriger le pays et a faire appliquer les lois."
  },
  {
    "id": "A034",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "suggested_leqcm_csp",
    "question": "Les dirigeants sont elus par les citoyens dans :",
    "options": [
      "Une dictature",
      "Une democratie",
      "Une monarchie absolue",
      "Un empire"
    ],
    "answer": 1,
    "explanation": "En democratie, les citoyens votent pour choisir leurs representants."
  },
  {
    "id": "A035",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "suggested_leqcm_csp",
    "question": "A-t-on le droit de ne pas respecter une loi ?",
    "options": [
      "Oui, si la loi nous deplait.",
      "Non, le respect de la loi est un devoir de tous les citoyens.",
      "Oui, mais seulement pour les lois impopulaires.",
      "Non, sauf si l'on est un etranger."
    ],
    "answer": 1,
    "explanation": "Le respect de la loi est un devoir fondamental pour tous ceux qui habitent en France. Ne pas respecter la loi peut entrainer des sanctions."
  },
  {
    "id": "A036",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "suggested_leqcm_csp",
    "question": "Qui doit respecter la loi ?",
    "options": [
      "Seulement les citoyens francais.",
      "Seulement les etrangers.",
      "Tout le monde (Francais et etrangers).",
      "Seulement la police et les juges."
    ],
    "answer": 2,
    "explanation": "La loi s'applique a toute personne qui se trouve en France : les citoyens, les residents etrangers, et meme les touristes."
  },
  {
    "id": "A037",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "suggested_leqcm_csp",
    "question": "Quel est le role de l'autorite judiciaire ?",
    "options": [
      "Commander la police",
      "Organiser les elections",
      "Juger les personnes qui ne respectent pas la loi",
      "Ecrire les lois"
    ],
    "answer": 2,
    "explanation": "La justice (les juges) decide si une personne a respecte la loi ou non."
  },
  {
    "id": "A038",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "suggested_leqcm_csp",
    "question": "Quel pouvoir detient un juge ? Le pouvoir :",
    "options": [
      "Executif, car il dirige le pays",
      "Legislatif, car il fait les lois",
      "Judiciaire, car il juge les conflits et applique la loi",
      "Administratif, car il gere les services publics"
    ],
    "answer": 2,
    "explanation": "Un juge a le pouvoir judiciaire. Il est charge de juger les conflits et de faire respecter la loi."
  },
  {
    "id": "A039",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "suggested_leqcm_csp",
    "question": "L'autorite judiciaire est exercee par :",
    "options": [
      "Les policiers et les gendarmes",
      "Les juges et les magistrats",
      "Les avocats et les notaires",
      "Le President de la Republique"
    ],
    "answer": 1,
    "explanation": "En France, ce sont les juges (aussi appeles magistrats) qui rendent la justice au tribunal."
  },
  {
    "id": "A040",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "suggested_leqcm_csp",
    "question": "Que se passe-t-il si un ministre ne respecte pas la loi ?",
    "options": [
      "Rien, il a le droit de ne pas respecter la loi.",
      "Il peut perdre son poste et etre juge au tribunal.",
      "Il doit juste payer une petite amende.",
      "Il recoit un avertissement du President."
    ],
    "answer": 1,
    "explanation": "Tout le monde doit respecter la loi, meme les ministres. S'ils font une faute grave, ils peuvent etre juges comme les autres citoyens."
  },
  {
    "id": "A041",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "suggested_leqcm_csp",
    "question": "Qui est elu lors des elections legislatives ?",
    "options": [
      "Le President de la Republique",
      "Les conseillers municipaux",
      "Les deputes",
      "Les senateurs"
    ],
    "answer": 2,
    "explanation": "Les elections legislatives permettent d'elire les deputes qui siegent a l'Assemblee Nationale."
  },
  {
    "id": "A042",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "suggested_leqcm_csp",
    "question": "Quand sont elus les senateurs ?",
    "options": [
      "Tous les 3 ans",
      "Tous les 5 ans",
      "Tous les 4 ans",
      "Une seule fois pour toute la vie"
    ],
    "answer": 0,
    "explanation": "Il y a des elections pour le Senat tous les 3 ans. On ne change pas tous les senateurs en meme temps."
  },
  {
    "id": "A043",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "suggested_leqcm_csp",
    "question": "Qui est elu lors des elections municipales ?",
    "options": [
      "Le President de la Republique",
      "Les conseillers municipaux",
      "Les deputes europeens",
      "Les prefets"
    ],
    "answer": 1,
    "explanation": "Les conseillers municipaux sont elus lors des elections municipales."
  },
  {
    "id": "A044",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "suggested_leqcm_csp",
    "question": "Qui est elu lors des elections presidentielles ?",
    "options": [
      "Les deputes",
      "Le Premier Ministre",
      "Le President de la Republique",
      "Les senateurs"
    ],
    "answer": 2,
    "explanation": "Le President de la Republique est elu lors des elections presidentielles."
  },
  {
    "id": "A045",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "suggested_leqcm_csp",
    "question": "partir de quel ge a-t-on le droit de voter ?",
    "options": [
      "16 ans",
      "18 ans",
      "21 ans",
      "25 ans"
    ],
    "answer": 1,
    "explanation": "En France, il faut avoir 18 ans pour voter."
  },
  {
    "id": "A046",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "suggested_leqcm_csp",
    "question": "Pour combien de temps est elu le president de la Republique francaise ?",
    "options": [
      "7 ans",
      "5 ans",
      "6 ans",
      "4 ans"
    ],
    "answer": 1,
    "explanation": "Le President de la Republique francaise est elu pour 5 ans."
  },
  {
    "id": "A047",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "suggested_leqcm_csp",
    "question": "Qui possede le pouvoir executif ?",
    "options": [
      "Le Parlement",
      "Les citoyens",
      "Le President de la Republique et le gouvernement",
      "Les juges"
    ],
    "answer": 2,
    "explanation": "En France, le President de la Republique et le gouvernement dirigent le pays. C'est le pouvoir executif."
  },
  {
    "id": "A048",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "suggested_leqcm_csp",
    "question": "Quelle condition est necessaire pour voter aux elections ?",
    "options": [
      "Etre proprietaire",
      "Etre francais et avoir 18 ans ou plus",
      "Avoir un emploi stable",
      "Etre marie"
    ],
    "answer": 1,
    "explanation": "Pour voter, il faut etre de nationalite francaise et avoir au moins 18 ans."
  },
  {
    "id": "A049",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "suggested_leqcm_csp",
    "question": "Qui peut voter aux elections en France ?",
    "options": [
      "Uniquement les hommes",
      "Les citoyens francais de 18 ans et plus",
      "Toutes les personnes qui travaillent",
      "Les touristes"
    ],
    "answer": 1,
    "explanation": "En France, les hommes et les femmes de nationalite francaise peuvent voter a partir de 18 ans."
  },
  {
    "id": "A050",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "suggested_leqcm_csp",
    "question": "Que signifie suffrage universel ?",
    "options": [
      "Seules les personnes qui ont etudie peuvent voter",
      "Tous les citoyens majeurs (hommes et femmes) peuvent voter",
      "Le vote est obligatoire pour tout le monde",
      "Seuls les chefs de l'Etat peuvent voter"
    ],
    "answer": 1,
    "explanation": "Le suffrage universel veut dire que tous les citoyens francais de 18 ans et plus ont le droit de voter."
  },
  {
    "id": "A051",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "suggested_leqcm_csp",
    "question": "Concernant les partis politiques, quelle proposition est correcte ?",
    "options": [
      "Ils sont interdits en France car ils divisent.",
      "Ils proposent des idees et des candidats pour les elections.",
      "Ils ne peuvent pas avoir de membres",
      "Ils sont tous finances par l'Etat."
    ],
    "answer": 1,
    "explanation": "Les partis politiques aident les citoyens a choisir pour qui voter. Ils proposent des idees et des candidats."
  },
  {
    "id": "A052",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "suggested_leqcm_csp",
    "question": "Quel est le role des deputes ?",
    "options": [
      "Ils dirigent le pays au quotidien.",
      "Ils votent les lois et surveillent le gouvernement.",
      "Ils jugent les affaires judiciaires.",
      "Ils representent la France a l'etranger."
    ],
    "answer": 1,
    "explanation": "Les deputes sont elus par les citoyens. Ils votent les lois. Ils surveillent le travail du gouvernement."
  },
  {
    "id": "A053",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "suggested_leqcm_csp",
    "question": "La separation des pouvoirs est un principe fondamental. Quels sont les trois pouvoirs concernes ?",
    "options": [
      "Le pouvoir executif, le pouvoir militaire, le pouvoir legislatif",
      "Le pouvoir executif, le pouvoir legislatif et le pouvoir judiciaire",
      "Le pouvoir royal, le pouvoir du peuple et le pouvoir des juges",
      "Le pouvoir du President, le pouvoir du Premier Ministre et le pouvoir du Parlement"
    ],
    "answer": 1,
    "explanation": "En France, les trois pouvoirs sont separes. Ce sont : le pouvoir executif (le Gouvernement), le pouvoir legislatif (le Parlement) et le pouvoir judiciaire (les juges)."
  },
  {
    "id": "A054",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "suggested_leqcm_csp",
    "question": "Qui possede le pouvoir legislatif ?",
    "options": [
      "Le President de la Republique",
      "Le Gouvernement",
      "Le Parlement (Assemblee Nationale et Senat)",
      "Le Conseil Constitutionnel"
    ],
    "answer": 2,
    "explanation": "Le Parlement fait les lois. Il est compose de l'Assemblee Nationale et du Senat."
  },
  {
    "id": "A055",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "suggested_leqcm_csp",
    "question": "Qui elit les deputes ?",
    "options": [
      "Les senateurs",
      "Les citoyens francais",
      "Le President de la Republique",
      "Les conseillers municipaux"
    ],
    "answer": 1,
    "explanation": "Les citoyens francais votent pour choisir les deputes."
  },
  {
    "id": "A056",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "suggested_leqcm_csp",
    "question": "Qui reside au palais de l'Elysee ?",
    "options": [
      "Le Premier Ministre",
      "Le President de la Republique",
      "Le President de l'Assemblee Nationale",
      "Un juge"
    ],
    "answer": 1,
    "explanation": "Le Palais de l'Elysee est le bureau et la maison du President de la Republique."
  },
  {
    "id": "A057",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "suggested_leqcm_csp",
    "question": "Combien y a-t-il de departements en France ?",
    "options": [
      "83",
      "90",
      "101",
      "95"
    ],
    "answer": 2,
    "explanation": "La France a 101 departements. Ce nombre inclut les departements d'outre-mer."
  },
  {
    "id": "A058",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "suggested_leqcm_csp",
    "question": "Qui dirige la commune ?",
    "options": [
      "Le Prefet",
      "Le President de la Republique",
      "Le Maire",
      "Le Conseiller Departemental"
    ],
    "answer": 2,
    "explanation": "Le Maire est la personne qui dirige la commune. Il est elu par le conseil municipal."
  },
  {
    "id": "A059",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "suggested_leqcm_csp",
    "question": "Est-ce que le President de la Republique a tous les pouvoirs ?",
    "options": [
      "Oui, il decide de tout, comme un roi.",
      "Non, il partage le pouvoir avec le Gouvernement et le Parlement.",
      "Non, il a seulement un role symbolique.",
      "Oui, il peut changer toutes les lois tout seul."
    ],
    "answer": 1,
    "explanation": "En France, le President ne decide pas seul. Il travaille avec le Gouvernement et le Parlement (ceux qui votent les lois). C'est une democratie."
  },
  {
    "id": "A060",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "suggested_leqcm_csp",
    "question": "Qui est le prefet ?",
    "options": [
      "Le representant du peuple au niveau local.",
      "Le representant de l'Etat dans un departement ou une region.",
      "Le chef de la police municipale.",
      "Le maire de la plus grande ville."
    ],
    "answer": 1,
    "explanation": "Le prefet represente l'Etat dans un departement ou une region. Il travaille pour que les lois soient respectees."
  },
  {
    "id": "A061",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "suggested_leqcm_csp",
    "question": "Quel est le role du Parlement ?",
    "options": [
      "Il applique les lois.",
      "Il discute et vote les lois.",
      "Il represente la France a l'etranger.",
      "Il juge les personnes qui ne respectent pas la loi."
    ],
    "answer": 1,
    "explanation": "Le Parlement est compose de l'Assemblee nationale et du Senat. Son role principal est de discuter et de voter les lois."
  },
  {
    "id": "A062",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "suggested_leqcm_csp",
    "question": "Quel est le regime politique de la France aujourd'hui ?",
    "options": [
      "Une monarchie (un roi).",
      "Une Republique.",
      "Un empire.",
      "Une dictature."
    ],
    "answer": 1,
    "explanation": "La France est une Republique. Le pouvoir n'est pas transmis de pere en fils comme dans une monarchie, mais par le vote des citoyens."
  },
  {
    "id": "A063",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "suggested_leqcm_csp",
    "question": "Combien d'Etats font partie de l'Union europeenne au 1er janvier 2025 ?",
    "options": [
      "27",
      "28",
      "26",
      "29"
    ],
    "answer": 0,
    "explanation": "Au 1er janvier 2025, 27 Etats membres font partie de l'Union europeenne."
  },
  {
    "id": "A064",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "suggested_leqcm_csp",
    "question": "Quel Etat n'est pas membre de l'Union europeenne ?",
    "options": [
      "L'Allemagne",
      "La Suisse",
      "L'Italie",
      "L'Espagne"
    ],
    "answer": 1,
    "explanation": "La Suisse n'est pas un pays de l'Union europeenne."
  },
  {
    "id": "A065",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "suggested_leqcm_csp",
    "question": "Pour voter aux elections europeennes en France, il faut :",
    "options": [
      "Etre obligatoirement de nationalite francaise",
      "Avoir 18 ans et etre citoyen d'un pays de l'Union europeenne",
      "Avoir juste une carte de sejour",
      "Travailler en France"
    ],
    "answer": 1,
    "explanation": "Un citoyen d'un autre pays de l'Union europeenne qui habite en France peut voter aux elections europeennes."
  },
  {
    "id": "A066",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "suggested_leqcm_csp",
    "question": "A quelle frequence les elections europeennes sont-elles organisees ?",
    "options": [
      "Tous les 4 ans",
      "Tous les 5 ans",
      "Tous les 6 ans",
      "Tous les ans"
    ],
    "answer": 1,
    "explanation": "Les elections europeennes sont organisees tous les 5 ans."
  },
  {
    "id": "A067",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "suggested_leqcm_csp",
    "question": "Quel pays est un pays fondateur de l'Union europeenne ?",
    "options": [
      "Le Royaume-Uni",
      "L'Irlande",
      "L'Allemagne",
      "La Pologne"
    ],
    "answer": 2,
    "explanation": "L'Allemagne est l'un des premiers pays a avoir cree l'Union europeenne."
  },
  {
    "id": "A068",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Principes et valeurs",
    "source": "suggested_leqcm_csp",
    "question": "Quelle est la monnaie utilisee en France ?",
    "options": [
      "Le dollar",
      "La livre sterling",
      "Le franc suisse",
      "L'euro"
    ],
    "answer": 3,
    "explanation": "En France, on utilise l'euro. C'est aussi la monnaie de beaucoup de pays en Europe."
  },
  {
    "id": "A069",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "suggested_leqcm_csp",
    "question": "Qui elit les deputes europeens ?",
    "options": [
      "Le President de la Republique.",
      "Les citoyens de l'Union europeenne.",
      "Les maires des grandes villes.",
      "Les juges du tribunal."
    ],
    "answer": 1,
    "explanation": "Ce sont les citoyens des pays de l'Union europeenne qui votent directement pour les choisir. L'election a lieu tous les 5 ans."
  },
  {
    "id": "A070",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Principes et valeurs",
    "source": "suggested_leqcm_csp",
    "question": "Quand celebre-t-on la journee de l'Europe ?",
    "options": [
      "Le 1er janvier",
      "Le 1er mai",
      "Le 9 mai",
      "Le 14 juillet"
    ],
    "answer": 2,
    "explanation": "On fete la journee de l'Europe le 9 mai. C'est une date importante pour l'histoire de l'Europe."
  },
  {
    "id": "A071",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "suggested_leqcm_csp",
    "question": "Comment s'appelle la Constitution actuelle de la France ?",
    "options": [
      "La Constitution de 1900",
      "La Constitution de la IVe Republique",
      "La Constitution de la Ve Republique",
      "Le Code civil"
    ],
    "answer": 2,
    "explanation": "C'est la Constitution de la Ve (5e) Republique. Elle a ete ecrite en 1958. C'est le texte qui donne les regles principales pour le pays."
  },
  {
    "id": "A072",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Principes et valeurs",
    "source": "suggested_leqcm_csp",
    "question": "Quel texte de 1789 a fixe les libertes en France ?",
    "options": [
      "La Marseillaise (l'hymne national).",
      "La Declaration des Droits de l'Homme et du Citoyen.",
      "Le Code de la route.",
      "Le contrat de travail."
    ],
    "answer": 1,
    "explanation": "C'est la Declaration des Droits de l'Homme et du Citoyen. Elle affirme que 'Les hommes naissent et demeurent libres et egaux en droits'."
  },
  {
    "id": "A073",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Droits et devoirs",
    "source": "suggested_leqcm_csp",
    "question": "Concernant les droits individuels, quelle proposition est correcte ?",
    "options": [
      "Le gouvernement peut les supprimer.",
      "Ils sont pour chaque personne et proteges par la loi.",
      "Ils sont seulement pour les personnes nees en France.",
      "Il faut payer pour avoir ces droits."
    ],
    "answer": 1,
    "explanation": "Chaque personne a des droits. La loi protege ces droits pour tout le monde."
  },
  {
    "id": "A074",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Droits et devoirs",
    "source": "suggested_leqcm_csp",
    "question": "Lequel de ces droits est un droit fondamental ?",
    "options": [
      "Le droit d'avoir une maison gratuite",
      "Le droit d'obliger les autres a etre d'accord",
      "Le droit a la vie privee",
      "Le droit de conduire une voiture"
    ],
    "answer": 2,
    "explanation": "Le droit a la vie privee est un droit tres important. Il protege votre vie personnelle et vos secrets."
  },
  {
    "id": "A075",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "suggested_leqcm_csp",
    "question": "Parmi ces textes, lequel garantit les droits et libertes en France ?",
    "options": [
      "Le Code de la Route",
      "Le Code du Travail",
      "La Constitution et la Declaration des Droits de l'Homme et du Citoyen",
      "Le Reglement interieur des ecoles"
    ],
    "answer": 2,
    "explanation": "En France, la Constitution et la Declaration des Droits de l'Homme et du Citoyen sont les textes qui protegent nos droits et nos libertes."
  },
  {
    "id": "A076",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Droits et devoirs",
    "source": "suggested_leqcm_csp",
    "question": "Qu'est-ce que la liberte d'expression ?",
    "options": [
      "Le droit de dire seulement ce que le gouvernement veut.",
      "Dire ou ecrire ce que l'on pense, en respectant les autres et la loi.",
      "Le droit d'avoir toujours raison.",
      "Le droit de dire des mensonges sur tout le monde."
    ],
    "answer": 1,
    "explanation": "On peut dire son opinion, mais on doit respecter la loi et les autres."
  },
  {
    "id": "A077",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Droits et devoirs",
    "source": "suggested_leqcm_csp",
    "question": "Quel droit permet a une personne de se defendre devant la justice ?",
    "options": [
      "Le droit d'etre innocent",
      "Le droit de savoir pourquoi on est accuse et d'avoir un avocat",
      "Le droit de ne pas parler",
      "Le droit de choisir son juge"
    ],
    "answer": 1,
    "explanation": "Pour se defendre, on doit comprendre l'accusation et on a le droit d'etre aide par un avocat."
  },
  {
    "id": "A078",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "suggested_leqcm_csp",
    "question": "Quel est le texte fondateur etablissant en France les droits et les devoirs de chaque citoyen ?",
    "options": [
      "Le Code Civil",
      "La Constitution",
      "Le Code du Travail",
      "Le Reglement interieur de l'Assemblee"
    ],
    "answer": 1,
    "explanation": "La Constitution est le texte le plus important en France. Elle explique les droits et les devoirs de chaque citoyen."
  },
  {
    "id": "A079",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "suggested_leqcm_csp",
    "question": "Quel texte a ete adopte pendant la Revolution francaise ?",
    "options": [
      "La Constitution de la Ve Republique",
      "La Declaration des Droits de l'Homme et du Citoyen",
      "La Charte des Nations Unies",
      "Le traite de Maastricht"
    ],
    "answer": 1,
    "explanation": "La Declaration des Droits de l'Homme et du Citoyen a ete adoptee en 1789, pendant la periode de la Revolution francaise."
  },
  {
    "id": "A080",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Principes et valeurs",
    "source": "suggested_leqcm_csp",
    "question": "Quelle liberte permet a une personne de ne pas avoir de religion ?",
    "options": [
      "La liberte d'opinion",
      "La liberte de reunion",
      "La liberte de conscience",
      "La liberte d'association"
    ],
    "answer": 2,
    "explanation": "La liberte de conscience est le droit de choisir sa religion ou de ne pas en avoir. On peut aussi changer de religion."
  },
  {
    "id": "A081",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Droits et devoirs",
    "source": "suggested_leqcm_csp",
    "question": "Est-il toujours possible de divorcer ?",
    "options": [
      "Non, le divorce a ete aboli.",
      "Oui, le divorce est une procedure legale qui permet aux couples de se separer.",
      "Oui, mais seulement apres 20 ans de mariage.",
      "Non, sauf en cas de faute grave."
    ],
    "answer": 1,
    "explanation": "Oui, en France, le divorce est une solution legale pour qu'un couple marie se separe."
  },
  {
    "id": "A082",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Droits et devoirs",
    "source": "suggested_leqcm_csp",
    "question": "Concernant les limites aux libertes individuelles, quelle proposition est correcte ?",
    "options": [
      "Les libertes sont totales et sans aucune limite.",
      "La loi peut limiter les libertes pour proteger les autres citoyens.",
      "Il n'y a pas de libertes en France.",
      "Les libertes dependent de la religion."
    ],
    "answer": 1,
    "explanation": "En France, on est libre, mais la loi peut mettre des limites pour proteger la securite et les droits de tout le monde."
  },
  {
    "id": "A083",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Droits et devoirs",
    "source": "suggested_leqcm_csp",
    "question": "En France, est-ce legal d'etre marie a plusieurs personnes en meme temps ?",
    "options": [
      "Oui, c'est autorise par la loi.",
      "Non, on peut etre marie a une seule personne a la fois.",
      "Oui, mais seulement apres 60 ans.",
      "Oui, si tout le monde est d'accord."
    ],
    "answer": 1,
    "explanation": "C'est interdit. En France, la polygamie n'est pas autorisee. On ne peut avoir qu'un seul epoux ou une seule epouse."
  },
  {
    "id": "A084",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "suggested_leqcm_csp",
    "question": "Faut-il reduire ses dechets ?",
    "options": [
      "Non, ce n'est pas important.",
      "Oui, pour proteger la nature et la planete.",
      "Seulement si on habite dans une grande ville.",
      "Non, c'est le travail de la mairie."
    ],
    "answer": 1,
    "explanation": "Il faut produire moins de dechets pour moins polluer et proteger l'environnement."
  },
  {
    "id": "A085",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "suggested_leqcm_csp",
    "question": "Jeter une bouteille dans la rue est :",
    "options": [
      "Un geste autorise.",
      "Une faute interdite par la loi.",
      "Une action normale.",
      "Un droit de chaque citoyen."
    ],
    "answer": 1,
    "explanation": "Il est interdit de jeter des dechets dans la rue. C'est mauvais pour l'environnement et on peut recevoir une amende."
  },
  {
    "id": "A086",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Droits et devoirs",
    "source": "suggested_leqcm_csp",
    "question": "Pourquoi les libertes individuelles peuvent-elles etre limitees ?",
    "options": [
      "Pour punir les citoyens.",
      "Pour respecter la liberte des autres et la securite.",
      "Pour donner tous les pouvoirs au President.",
      "C'est faux, la liberte est totale et sans limite."
    ],
    "answer": 1,
    "explanation": "La liberte n'est pas totale. Elle a des limites pour proteger la securite de tous et respecter les autres."
  },
  {
    "id": "A087",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "suggested_leqcm_csp",
    "question": "Que doit faire une personne en cas d'accident ?",
    "options": [
      "Partir si elle n'est pas responsable de l'accident.",
      "Alerter les secours et aider si possible.",
      "Ne rien faire si elle n'est pas medecin.",
      "Filmer la scene avec son telephone."
    ],
    "answer": 1,
    "explanation": "La loi oblige a porter assistance a une personne en danger. Il faut securiser la zone et appeler le 15 (SAMU), le 18 (Pompiers) ou le 112 (Urgence europeenne)."
  },
  {
    "id": "A088",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "suggested_leqcm_csp",
    "question": "Que permet la citoyennete francaise ?",
    "options": [
      "D'avoir un emploi garanti par l'Etat.",
      "De voter et d'etre elu aux elections.",
      "De ne pas payer d'impots.",
      "De voyager gratuitement dans les transports."
    ],
    "answer": 1,
    "explanation": "Etre citoyen francais donne le droit de voter et de se presenter aux elections (etre elu). En revanche, cela ne donne pas d'avantages financiers (logement, travail ou transports gratuits)."
  },
  {
    "id": "A089",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "suggested_leqcm_csp",
    "question": "Que risque une personne qui ne respecte pas la loi ?",
    "options": [
      "Rien du tout.",
      "Une amende ou une peine de prison.",
      "Une simple excuse suffit.",
      "De recevoir un cadeau de l'Etat."
    ],
    "answer": 1,
    "explanation": "En France, si on ne respecte pas la loi, un juge peut decider d'une amende (argent a payer) ou d'une peine de prison."
  },
  {
    "id": "A090",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "suggested_leqcm_csp",
    "question": "Quel est le role de la gendarmerie ?",
    "options": [
      "Juger les personnes au tribunal.",
      "Proteger la population, surtout a la campagne.",
      "Voter les lois a l'Assemblee.",
      "Eteindre les incendies."
    ],
    "answer": 1,
    "explanation": "Comme la police, la gendarmerie assure la securite et arrete les criminels. La difference principale est qu'elle travaille surtout dans les zones rurales (campagne) et les petites villes."
  },
  {
    "id": "A091",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "suggested_leqcm_csp",
    "question": "Quel est le role de la police ?",
    "options": [
      "Juger les personnes au tribunal.",
      "Proteger la population, surtout dans les villes.",
      "Decider des nouvelles lois.",
      "Soigner les malades."
    ],
    "answer": 1,
    "explanation": "La police nationale assure la securite, arrete les delinquants et protege les citoyens. Contrairement a la gendarmerie (campagne), elle travaille principalement dans les grandes villes."
  },
  {
    "id": "A092",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "suggested_leqcm_csp",
    "question": "Qu'est-ce qu'une infraction ?",
    "options": [
      "Une action autorisee par la loi.",
      "Une action interdite par la loi.",
      "Une punition donnee par le juge.",
      "Une nouvelle loi votee."
    ],
    "answer": 1,
    "explanation": "Une infraction est un acte contre la loi (voler, conduire trop vite, ne pas respecter les regles). Celui qui fait une infraction risque une punition."
  },
  {
    "id": "A093",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "suggested_leqcm_csp",
    "question": "Comment peut-on reduire ses dechets ?",
    "options": [
      "En achetant beaucoup de produits en plastique.",
      "En triant les emballages et en reparant les objets.",
      "En brulant ses poubelles dans le jardin.",
      "En jetant tout dans la nature."
    ],
    "answer": 1,
    "explanation": "Pour moins jeter, il faut trier (poubelle jaune, verre) et essayer de reparer les objets casses au lieu de les jeter. Bruler ses dechets est interdit (pollution)."
  },
  {
    "id": "A094",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "suggested_leqcm_csp",
    "question": "Deposer une machine a laver cassee sur le trottoir est :",
    "options": [
      "Autorise si c'est devant votre maison.",
      "Interdit, il faut l'emmener a la decheterie.",
      "Obligatoire pour le recyclage.",
      "Un cadeau pour les voisins."
    ],
    "answer": 1,
    "explanation": "Il est interdit de laisser des gros objets dans la rue. Il faut les apporter a la decheterie ou appeler le service des encombrants de la mairie."
  },
  {
    "id": "A095",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "suggested_leqcm_csp",
    "question": "En quoi consiste la traite des etres humains ?",
    "options": [
      "C'est le fait d'echanger des objets.",
      "C'est exploiter une personne de force.",
      "C'est le commerce d'animaux.",
      "C'est la vente de produits interdits."
    ],
    "answer": 1,
    "explanation": "La traite, c'est exploiter quelqu'un de force. La personne n'est pas libre de choisir et doit travailler contre sa volonte."
  },
  {
    "id": "A096",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "suggested_leqcm_csp",
    "question": "Que doit faire une victime de violences ?",
    "options": [
      "Avoir peur et ne rien dire.",
      "Appeler la police et porter plainte.",
      "Attendre que ca passe.",
      "Se venger par la violence."
    ],
    "answer": 1,
    "explanation": "Il ne faut jamais rester seul face a la violence. La victime doit appeler le 17 (Police) et porter plainte. La loi la protege."
  },
  {
    "id": "A097",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "suggested_leqcm_csp",
    "question": "Qui etait Napoleon Ier ?",
    "options": [
      "Un roi de France du Moyen ge.",
      "Un empereur francais tres celebre.",
      "Un President de la Republique.",
      "Un chef de la Resistance."
    ],
    "answer": 1,
    "explanation": "Napoleon Bonaparte etait un chef militaire. Il est devenu Empereur des Francais apres la Revolution."
  },
  {
    "id": "A098",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "suggested_leqcm_csp",
    "question": "Lequel de ces personnages historiques est francais ?",
    "options": [
      "Christophe Colomb",
      "Leonard de Vinci",
      "Victor Hugo",
      "Albert Einstein"
    ],
    "answer": 2,
    "explanation": "Victor Hugo est un ecrivain tres important. Il a ecrit le livre 'Les Miserables' et 'Notre-Dame de Paris'."
  },
  {
    "id": "A099",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "suggested_leqcm_csp",
    "question": "Dans quelle Republique est-on aujourd'hui ?",
    "options": [
      "La Premiere Republique",
      "La Deuxieme Republique",
      "La Troisieme Republique",
      "La Cinquieme Republique"
    ],
    "answer": 3,
    "explanation": "La France est dans la Cinquieme Republique. Elle a commence en 1958."
  },
  {
    "id": "A100",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "suggested_leqcm_csp",
    "question": "Qu'est-ce que la Shoah ?",
    "options": [
      "La Premiere Guerre mondiale",
      "La guerre d'Algerie",
      "Le genocide des Juifs",
      "La Revolution francaise"
    ],
    "answer": 2,
    "explanation": "Pendant la Seconde Guerre mondiale, les nazis ont tue des millions de Juifs. On appelle cet evenement la Shoah."
  },
  {
    "id": "A101",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "suggested_leqcm_csp",
    "question": "Quel pays ou region du monde a ete colonise par la France ?",
    "options": [
      "Le Japon",
      "La Suede",
      "Le Senegal",
      "L'Australie"
    ],
    "answer": 2,
    "explanation": "Le Senegal a ete une colonie francaise en Afrique de l'Ouest jusqu'en 1960."
  },
  {
    "id": "A102",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "suggested_leqcm_csp",
    "question": "Qui a rendu l'ecole gratuite, laique et obligatoire ?",
    "options": [
      "Napoleon Bonaparte",
      "Jules Ferry",
      "Charles de Gaulle",
      "Louis XIV"
    ],
    "answer": 1,
    "explanation": "C'est Jules Ferry. Il a fait voter les lois pour l'ecole gratuite, laique et obligatoire en 1881-1882."
  },
  {
    "id": "A103",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "suggested_leqcm_csp",
    "question": "En quelle annee a ete creee la Communaute Economique Europeenne (CEE) ?",
    "options": [
      "1957",
      "1945",
      "1989",
      "1973"
    ],
    "answer": 0,
    "explanation": "C'est en 1957. C'est le debut de la construction europeenne."
  },
  {
    "id": "A104",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "suggested_leqcm_csp",
    "question": "Le 11 novembre est un jour ferie. A quoi correspond cette date ?",
    "options": [
      "La fin de la Seconde Guerre mondiale.",
      "L'armistice de la Premiere Guerre mondiale.",
      "La Fete du Travail.",
      "La Fete Nationale."
    ],
    "answer": 1,
    "explanation": "Le 11 novembre est le jour de la fin de la Premiere Guerre mondiale (1918)."
  },
  {
    "id": "A105",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "suggested_leqcm_csp",
    "question": "Qui a ete le premier President elu sous la Ve Republique ?",
    "options": [
      "Francois Mitterrand",
      "Georges Pompidou",
      "Charles de Gaulle",
      "Valery Giscard d'Estaing"
    ],
    "answer": 2,
    "explanation": "Charles de Gaulle a ete le premier President de la Ve Republique, elu en 1959."
  },
  {
    "id": "A106",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "suggested_leqcm_csp",
    "question": "Depuis quelle annee l'ecole publique est-elle gratuite ?",
    "options": [
      "1882",
      "1958",
      "1789",
      "1905"
    ],
    "answer": 0,
    "explanation": "En France, l'ecole publique est gratuite depuis 1882."
  },
  {
    "id": "A107",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "suggested_leqcm_csp",
    "question": "Combien y a-t-il eu de republiques en France ?",
    "options": [
      "5",
      "3",
      "4",
      "6"
    ],
    "answer": 0,
    "explanation": "La France a connu 5 Republiques. Nous sommes aujourd'hui dans la 5eme (Ve)."
  },
  {
    "id": "A108",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "suggested_leqcm_csp",
    "question": "Qui etait le roi de France au moment de la Revolution francaise ?",
    "options": [
      "Louis XVI",
      "Napoleon Bonaparte",
      "Henri IV",
      "Louis XIV"
    ],
    "answer": 0,
    "explanation": "Louis XVI etait le roi de France au debut de la Revolution francaise en 1789."
  },
  {
    "id": "A109",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "suggested_leqcm_csp",
    "question": "Qui a fonde la Ve Republique ?",
    "options": [
      "Charles de Gaulle",
      "Francois Mitterrand",
      "Valery Giscard d'Estaing",
      "Jacques Chirac"
    ],
    "answer": 0,
    "explanation": "Le general Charles de Gaulle a cree la Ve Republique en 1958."
  },
  {
    "id": "A110",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "suggested_leqcm_csp",
    "question": "Que celebre-t-on le 14 juillet ?",
    "options": [
      "La Fete Nationale",
      "Le jour de la Victoire",
      "La Fete du Travail",
      "L'Armistice de 1918"
    ],
    "answer": 0,
    "explanation": "Le 14 juillet est la Fete Nationale de la France. C'est un jour important pour l'histoire du pays."
  },
  {
    "id": "A111",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "suggested_leqcm_csp",
    "question": "Quelle guerre a eu lieu entre 1914 et 1918 ?",
    "options": [
      "La Premiere Guerre mondiale",
      "La Seconde Guerre mondiale",
      "La Guerre de Cent Ans",
      "La Guerre d'Algerie"
    ],
    "answer": 0,
    "explanation": "La Premiere Guerre mondiale s'est deroulee de 1914 a 1918."
  },
  {
    "id": "A112",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "suggested_leqcm_csp",
    "question": "Pourquoi l'annee 1958 est importante pour la France ?",
    "options": [
      "Le debut de la Ve Republique",
      "La fin de la Premiere Guerre mondiale",
      "La Liberation de Paris",
      "La creation de l'Union Europeenne"
    ],
    "answer": 0,
    "explanation": "En 1958, la France change de Constitution. C'est le debut de l'actuelle Ve (5e) Republique."
  },
  {
    "id": "A113",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "suggested_leqcm_csp",
    "question": "Quel fleuve coule en France ?",
    "options": [
      "La Seine",
      "Le Nil",
      "L'Amazone",
      "Le Danube"
    ],
    "answer": 0,
    "explanation": "La Seine est un fleuve important qui traverse la France, notamment Paris."
  },
  {
    "id": "A114",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "suggested_leqcm_csp",
    "question": "Quelle ville est francaise ?",
    "options": [
      "Marseille",
      "Barcelone",
      "Rome",
      "Berlin"
    ],
    "answer": 0,
    "explanation": "Marseille est une grande ville francaise."
  },
  {
    "id": "A115",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "suggested_leqcm_csp",
    "question": "Quel ocean borde la cote ouest francaise ?",
    "options": [
      "L'Ocean Atlantique",
      "L'Ocean Indien",
      "L'Ocean Arctique",
      "L'Ocean Pacifique"
    ],
    "answer": 0,
    "explanation": "L'Ocean Atlantique borde la cote ouest de la France metropolitaine."
  },
  {
    "id": "A116",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "suggested_leqcm_csp",
    "question": "Qu'est-ce que Paris ?",
    "options": [
      "La capitale de la France",
      "Un port maritime",
      "Une chaine de montagnes",
      "Un departement d'outre-mer"
    ],
    "answer": 0,
    "explanation": "Paris est la capitale de la France."
  },
  {
    "id": "A117",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "suggested_leqcm_csp",
    "question": "Sur quel continent se situe la France metropolitaine ?",
    "options": [
      "L'Europe",
      "L'Asie",
      "L'Afrique",
      "L'Amerique"
    ],
    "answer": 0,
    "explanation": "La France metropolitaine se situe sur le continent europeen."
  },
  {
    "id": "A118",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "suggested_leqcm_csp",
    "question": "Quelle ile est un departement d'outre-mer francais ?",
    "options": [
      "La Guadeloupe",
      "La Sicile",
      "La Sardaigne",
      "La Crete"
    ],
    "answer": 0,
    "explanation": "La Guadeloupe est une ile et un departement francais situe outre-mer."
  },
  {
    "id": "A119",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "suggested_leqcm_csp",
    "question": "Combien y a-t-il de regions en France metropolitaine ?",
    "options": [
      "13",
      "10",
      "15",
      "12"
    ],
    "answer": 0,
    "explanation": "Il y a 13 regions en France metropolitaine."
  },
  {
    "id": "A120",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "suggested_leqcm_csp",
    "question": "Quelle ville est un grand port maritime ?",
    "options": [
      "Le Havre",
      "Paris",
      "Lille",
      "Strasbourg"
    ],
    "answer": 0,
    "explanation": "Le Havre est un grand port maritime francais situe sur la Manche."
  },
  {
    "id": "A121",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "suggested_leqcm_csp",
    "question": "Quelle est la mer au sud de la France metropolitaine ?",
    "options": [
      "La Mer Mediterranee",
      "La Mer du Nord",
      "La Manche",
      "L'Ocean Atlantique"
    ],
    "answer": 0,
    "explanation": "La Mer Mediterranee se trouve au sud de la France metropolitaine."
  },
  {
    "id": "A122",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "suggested_leqcm_csp",
    "question": "Quelle ville est situee au bord de la mer Mediterranee ?",
    "options": [
      "Nice",
      "Brest",
      "Nantes",
      "Rouen"
    ],
    "answer": 0,
    "explanation": "Nice est une ville francaise situee sur la cote de la mer Mediterranee."
  },
  {
    "id": "A123",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "suggested_leqcm_csp",
    "question": "Ou se situe la Corse ?",
    "options": [
      "En mer Mediterranee",
      "Dans l'Ocean Atlantique",
      "Au large de l'Afrique",
      "Pres de la Grande-Bretagne"
    ],
    "answer": 0,
    "explanation": "La Corse est une ile francaise situee dans la mer Mediterranee."
  },
  {
    "id": "A124",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "suggested_leqcm_csp",
    "question": "Quelle chaine de montagnes est situee entre la France et l'Italie ?",
    "options": [
      "Les Alpes",
      "Les Pyrenees",
      "Le Jura",
      "Les Vosges"
    ],
    "answer": 0,
    "explanation": "C'est les Alpes. Cette chaine de montagnes marque la frontiere avec l'Italie. C'est la que se trouve le Mont Blanc (le plus haut sommet)."
  },
  {
    "id": "A125",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Principes et valeurs",
    "source": "suggested_leqcm_csp",
    "question": "Qui etait Moliere ?",
    "options": [
      "Un crivain de thtre et un acteur.",
      "Un roi de France.",
      "Un peintre celebre.",
      "Un president de la Republique."
    ],
    "answer": 0,
    "explanation": "C'est un tres celebre artiste francais qui vivait a l'epoque du roi Louis XIV. Il ecrivait des comedies (pour faire rire) et jouait lui-meme sur scene."
  },
  {
    "id": "A126",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Principes et valeurs",
    "source": "suggested_leqcm_csp",
    "question": "Qui etait Charles Baudelaire ?",
    "options": [
      "Un poete francais celebre.",
      "Un president de la Republique.",
      "Un medecin.",
      "Un architecte."
    ],
    "answer": 0,
    "explanation": "Charles Baudelaire est un grand ecrivain francais du 19e siecle. Il est tres connu pour ses livres de poemes."
  },
  {
    "id": "A127",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Principes et valeurs",
    "source": "suggested_leqcm_csp",
    "question": "Qui etait George Sand ?",
    "options": [
      "Une ecrivaine celebre.",
      "Une reine de France.",
      "Une chanteuse d'opera.",
      "Une championne de sport."
    ],
    "answer": 0,
    "explanation": "Attention, George Sand etait une femme (malgre son prenom). C'est une ecrivaine tres celebre en France."
  },
  {
    "id": "A128",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Principes et valeurs",
    "source": "suggested_leqcm_csp",
    "question": "Qui etait Simone de Beauvoir ?",
    "options": [
      "Une ecrivaine et une philosophe celebre.",
      "Une reine de France.",
      "Une chanteuse de variete.",
      "Une championne de sport."
    ],
    "answer": 0,
    "explanation": "Simone de Beauvoir est une grande ecrivaine francaise. Elle est tres importante car elle s'est battue pour les droits et la liberte des femmes."
  },
  {
    "id": "A129",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Principes et valeurs",
    "source": "suggested_leqcm_csp",
    "question": "Qui etait Albert Camus ?",
    "options": [
      "Un ecrivain et philosophe",
      "Un scientifique",
      "Un homme politique",
      "Un sportif"
    ],
    "answer": 0,
    "explanation": "Albert Camus etait un ecrivain et philosophe francais."
  },
  {
    "id": "A130",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Principes et valeurs",
    "source": "suggested_leqcm_csp",
    "question": "Qui etait Paul Cezanne ?",
    "options": [
      "Un peintre",
      "Un ecrivain",
      "Un musicien",
      "Un architecte"
    ],
    "answer": 0,
    "explanation": "Paul Cezanne etait un peintre francais."
  },
  {
    "id": "A131",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Principes et valeurs",
    "source": "suggested_leqcm_csp",
    "question": "Qui etait Marc Chagall ?",
    "options": [
      "Un peintre",
      "Un medecin",
      "Un danseur",
      "Un ecrivain"
    ],
    "answer": 0,
    "explanation": "Marc Chagall etait un peintre celebre ne en Russie et devenu francais."
  },
  {
    "id": "A132",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Principes et valeurs",
    "source": "suggested_leqcm_csp",
    "question": "Qui etait Josephine Baker ?",
    "options": [
      "Une artiste et une resistante",
      "Une scientifique",
      "Une femme politique",
      "Une reine"
    ],
    "answer": 0,
    "explanation": "Josephine Baker etait une artiste. Elle a aide la France pendant la guerre."
  },
  {
    "id": "A133",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Principes et valeurs",
    "source": "suggested_leqcm_csp",
    "question": "Qui etait une chanteuse francaise celebre ?",
    "options": [
      "Madonna",
      "Edith Piaf",
      "Coco Chanel",
      "Marie Curie"
    ],
    "answer": 1,
    "explanation": "Edith Piaf est une celebre chanteuse francaise."
  },
  {
    "id": "A134",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Principes et valeurs",
    "source": "suggested_leqcm_csp",
    "question": "Qu'est-ce que le Louvre ?",
    "options": [
      "Un grand musee d'art",
      "Une montagne",
      "Un fleuve",
      "Une gare"
    ],
    "answer": 0,
    "explanation": "Le Louvre est un grand musee d'art tres celebre a Paris."
  },
  {
    "id": "A135",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Principes et valeurs",
    "source": "suggested_leqcm_csp",
    "question": "Qui etait Jean de la Fontaine ?",
    "options": [
      "Un ecrivain de fables",
      "Un explorateur",
      "Un roi",
      "Un inventeur"
    ],
    "answer": 0,
    "explanation": "Jean de la Fontaine est un celebre ecrivain francais. Il a ecrit des fables connues."
  },
  {
    "id": "A136",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Principes et valeurs",
    "source": "suggested_leqcm_csp",
    "question": "Quel ecrivain est francais ?",
    "options": [
      "Victor Hugo",
      "William Shakespeare",
      "J.K. Rowling",
      "Stephen King"
    ],
    "answer": 0,
    "explanation": "Victor Hugo est l'un des plus celebres ecrivains francais."
  },
  {
    "id": "A137",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Principes et valeurs",
    "source": "suggested_leqcm_csp",
    "question": "Quand celebre-t-on Noel ?",
    "options": [
      "Le 25 decembre",
      "Le 1er janvier",
      "Le 14 juillet",
      "Le 1er mai"
    ],
    "answer": 0,
    "explanation": "Noel est celebre le 25 decembre. C'est une fete importante."
  },
  {
    "id": "A138",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "suggested_leqcm_csp",
    "question": "Quel numero d'urgence permet d'appeler le SAMU ?",
    "options": [
      "Le 15",
      "Le 18",
      "Le 112",
      "Le 17"
    ],
    "answer": 0,
    "explanation": "Le 15 est le numero pour appeler le SAMU (urgence medicale)."
  },
  {
    "id": "A139",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "suggested_leqcm_csp",
    "question": "Quel numero d'urgence permet d'appeler les pompiers ?",
    "options": [
      "Le 18",
      "Le 15",
      "Le 112",
      "Le 17"
    ],
    "answer": 0,
    "explanation": "Le numero d'urgence pour appeler les pompiers est le 18."
  },
  {
    "id": "A140",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "suggested_leqcm_csp",
    "question": "Apres avoir obtenu le permis de conduire, que faut-il faire pour pouvoir conduire sa voiture ?",
    "options": [
      "Prendre une assurance pour la voiture",
      "Faire un controle technique",
      "Passer un examen pratique supplementaire",
      "Obtenir une autorisation de la mairie"
    ],
    "answer": 0,
    "explanation": "Il est obligatoire d'avoir une assurance pour conduire une voiture en France."
  },
  {
    "id": "A141",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "suggested_leqcm_csp",
    "question": "A quelles conditions un mariage est-il reconnu juridiquement ?",
    "options": [
      "La ceremonie doit avoir lieu a la mairie",
      "Le consentement des parents",
      "Une dot versee par le mari",
      "L'approbation d'un chef religieux"
    ],
    "answer": 0,
    "explanation": "En France, seul le mariage civil a la mairie est reconnu officiellement."
  },
  {
    "id": "A142",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "suggested_leqcm_csp",
    "question": "Quand faut-il declarer son enfant au service d'etat civil de la mairie ?",
    "options": [
      "Dans les 5 jours qui suivent sa naissance",
      "Dans le mois qui suit sa naissance",
      "Avant sa naissance",
      "Dans les 24 heures qui suivent sa naissance"
    ],
    "answer": 0,
    "explanation": "La declaration de naissance d'un enfant doit etre faite a la mairie dans les 5 jours qui suivent sa naissance."
  },
  {
    "id": "A143",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "suggested_leqcm_csp",
    "question": "Que doit faire un employeur pour fixer un salaire ?",
    "options": [
      "Respecter le salaire minimum (le SMIC).",
      "Payer le montant qu'il veut.",
      "Payer moins que le SMIC si l'employe est d'accord.",
      "Demander la permission au maire de la ville."
    ],
    "answer": 0,
    "explanation": "En France, un employeur ne peut pas payer moins que le SMIC. C'est le salaire minimum fixe par la loi."
  },
  {
    "id": "A144",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "suggested_leqcm_csp",
    "question": "Qu'est-ce que le SMIC ?",
    "options": [
      "Le salaire minimum legal",
      "Un impot sur le revenu",
      "Une prime de fin d'annee",
      "Un regime de retraite"
    ],
    "answer": 0,
    "explanation": "Le SMIC est le salaire minimum legal en France."
  },
  {
    "id": "A145",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "suggested_leqcm_csp",
    "question": "Quelle est la premiere demarche a realiser pour chercher un emploi ?",
    "options": [
      "S'inscrire a France Travail (ex Pole emploi)",
      "Attendre chez soi qu'une entreprise appelle",
      "Demander de l'argent a la banque",
      "Partir en vacances"
    ],
    "answer": 0,
    "explanation": "Il faut s'inscrire a France Travail pour recevoir des offres d'emploi et etre aide."
  },
  {
    "id": "A146",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "suggested_leqcm_csp",
    "question": "Qui est aide par France Travail ?",
    "options": [
      "Les demandeurs d'emploi",
      "Uniquement les jeunes diplomes",
      "Les retraites",
      "Les etudiants a temps plein"
    ],
    "answer": 0,
    "explanation": "France Travail (anciennement Pole emploi) accompagne les demandeurs d'emploi dans leurs recherches."
  },
  {
    "id": "A147",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "suggested_leqcm_csp",
    "question": "Une personne etrangere en situation reguliere peut creer son entreprise :",
    "options": [
      "Oui, selon son titre de sejour",
      "Non, c'est reserve aux Francais",
      "Seulement si elle est mariee a un Francais",
      "Uniquement si elle a vecu plus de 10 ans en France"
    ],
    "answer": 0,
    "explanation": "Oui, c'est possible si le titre de sejour autorise de travailler."
  },
  {
    "id": "A148",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "suggested_leqcm_csp",
    "question": "Une femme peut-elle creer son entreprise ?",
    "options": [
      "Oui, librement",
      "Seulement avec l'accord de son mari",
      "Non, c'est une activite reservee aux hommes",
      "Uniquement si elle a plus de 40 ans"
    ],
    "answer": 0,
    "explanation": "En France, les femmes et les hommes ont les memes droits pour travailler et creer une entreprise."
  },
  {
    "id": "A149",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "suggested_leqcm_csp",
    "question": "partir de quel ge un mineur peut-il travailler ?",
    "options": [
      "A partir de 16 ans",
      "A partir de 18 ans",
      "A partir de 10 ans",
      "A partir de 12 ans"
    ],
    "answer": 0,
    "explanation": "En principe, un mineur peut travailler a partir de 16 ans, quand l'ecole n'est plus obligatoire."
  },
  {
    "id": "A150",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "suggested_leqcm_csp",
    "question": "Aupres de quel organisme faut-il demander le remboursement des frais de sante ?",
    "options": [
      "La Securite Sociale",
      "Le tresor public",
      "La CAF (Caisse d'Allocations Familiales)",
      "La banque"
    ],
    "answer": 0,
    "explanation": "Le remboursement des frais de sante est principalement assure par la Securite Sociale."
  },
  {
    "id": "A151",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "suggested_leqcm_csp",
    "question": "Qu'est-ce qu'un numero d'urgence ?",
    "options": [
      "Un numero a composer en cas de danger ou de besoin de secours rapide",
      "Un numero pour prendre rendez-vous chez le medecin",
      "Un numero pour obtenir des informations administratives",
      "Un numero pour appeler un ami ou un membre de la famille"
    ],
    "answer": 0,
    "explanation": "Un numero d'urgence sert a appeler a l'aide tres vite en cas de danger (par exemple, la police ou les pompiers)."
  },
  {
    "id": "A152",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "suggested_leqcm_csp",
    "question": "Concernant l'acces aux soins, quelle proposition est correcte ?",
    "options": [
      "Chacun a droit a la protection de la sante",
      "Seuls les riches ont acces aux soins",
      "Les soins sont reserves aux Francais",
      "Les soins sont payants pour tous"
    ],
    "answer": 0,
    "explanation": "En France, tout le monde a le droit a la protection de sa sante. Ainsi, chacun peut avoir acces aux soins."
  },
  {
    "id": "A153",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "suggested_leqcm_csp",
    "question": "En cas de probleme de sante non urgent, a qui faut-il s'adresser en premier ?",
    "options": [
      "Au medecin traitant",
      "Directement aux urgences de l'hopital",
      "Au SAMU",
      "A son pharmacien"
    ],
    "answer": 0,
    "explanation": "Pour un probleme de sante qui n'est pas urgent, on doit d'abord voir son medecin traitant."
  },
  {
    "id": "A154",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "suggested_leqcm_csp",
    "question": "Quel est le role du medecin traitant ?",
    "options": [
      "Vendre les medicaments aux patients.",
      "Suivre la sante et envoyer voir un specialiste.",
      "Operer les patients a l'hopital.",
      "S'occuper uniquement des accidents graves."
    ],
    "answer": 1,
    "explanation": "C'est le medecin qu'on voit d'habitude. Il nous soigne et nous envoie chez un autre medecin specialiste si c'est necessaire."
  },
  {
    "id": "A155",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "suggested_leqcm_csp",
    "question": "Dans quelle situation faut-il aller aux urgences ?",
    "options": [
      "Seulement pour un accident grave ou un danger de mort.",
      "Pour soigner un simple rhume ou une fatigue.",
      "Pour demander une ordonnance de medicaments.",
      "Pour faire un vaccin ou une visite de controle."
    ],
    "answer": 0,
    "explanation": "Les urgences sont reservees aux accidents graves. Pour les petites maladies comme un rhume, il faut aller chez son medecin."
  },
  {
    "id": "A156",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "suggested_leqcm_csp",
    "question": "Quel est l'objectif des vaccinations obligatoires ?",
    "options": [
      "Proteger la population contre des maladies graves.",
      "Guerir une personne qui est deja malade.",
      "Permettre de voyager dans tous les pays du monde.",
      "Remplacer les visites chez le medecin."
    ],
    "answer": 0,
    "explanation": "Le vaccin sert a eviter d'attraper et de transmettre des maladies tres graves. Il protege la personne vaccinee, mais aussi toute la population."
  },
  {
    "id": "A157",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "suggested_leqcm_csp",
    "question": "A quoi sert la carte Vitale ?",
    "options": [
      "Pour se faire rembourser les frais de sante (medecin, pharmacie).",
      "Pour payer les courses comme une carte bancaire.",
      "Pour prouver son identite a la police.",
      "Pour voyager a l'etranger."
    ],
    "answer": 0,
    "explanation": "La carte Vitale est la carte de l'Assurance Maladie (Securite sociale). Elle sert a etre rembourse de vos frais de sante. Elle ne sert pas a payer et n'est pas une piece d'identite."
  },
  {
    "id": "A158",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "suggested_leqcm_csp",
    "question": "A quoi sert une mutuelle sante ?",
    "options": [
      "A completer les remboursements de la Securite sociale.",
      "A remplacer la Securite sociale.",
      "A passer devant tout le monde aux urgences.",
      "A acheter des medicaments sans ordonnance."
    ],
    "answer": 0,
    "explanation": "La Securite sociale ne rembourse pas toutes les depenses de sante. La mutuelle (ou complementaire sante) paie la partie qui reste a votre charge."
  },
  {
    "id": "A159",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "suggested_leqcm_csp",
    "question": "Jusqu' quel ge l'cole est-elle obligatoire ?",
    "options": [
      "16 ans",
      "18 ans",
      "15 ans",
      "12 ans"
    ],
    "answer": 0,
    "explanation": "En France, l'ecole est obligatoire pour tous les enfants, de 3 ans jusqu'a leurs 16 ans."
  },
  {
    "id": "A160",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "suggested_leqcm_csp",
    "question": "L'autorite parentale prevoit l'obligation :",
    "options": [
      "D'assurer l'education de son enfant",
      "De ne jamais laisser son enfant seul",
      "De choisir la carriere de son enfant",
      "De fournir une residence a l'enfant jusqu'a 25 ans"
    ],
    "answer": 0,
    "explanation": "L'autorite parentale veut dire que les parents doivent eduquer et proteger leur enfant."
  },
  {
    "id": "A161",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "suggested_leqcm_csp",
    "question": "Pour qui l'ecole est-elle obligatoire ?",
    "options": [
      "Pour tous les enfants",
      "Uniquement pour les garcons",
      "Seulement pour les enfants francais",
      "Pour les enfants qui ne travaillent pas"
    ],
    "answer": 0,
    "explanation": "En France, l'ecole est obligatoire pour tous les enfants. Ils vont a l'ecole de 3 ans a 16 ans."
  },
  {
    "id": "A162",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "suggested_leqcm_csp",
    "question": "Quel diplome obtient-on a la fin du lycee ?",
    "options": [
      "Le Baccalaureat",
      "Le Brevet des colleges",
      "Un Certificat d'aptitude",
      "Un diplome d'ingenieur"
    ],
    "answer": 0,
    "explanation": "Le Baccalaureat est le diplome de fin de lycee. Il permet de faire des etudes apres le lycee."
  },
  {
    "id": "A163",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "suggested_leqcm_csp",
    "question": "Dans quels etablissements scolaires vont les eleves apres l'ecole elementaire ?",
    "options": [
      "Au college",
      "Au lycee professionnel",
      "A l'universite",
      "En ecole maternelle"
    ],
    "answer": 0,
    "explanation": "Apres l'ecole elementaire (ou ecole primaire), les eleves vont au college."
  },
  {
    "id": "A164",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "suggested_leqcm_csp",
    "question": "Un enfant inscrit a l'ecole :",
    "options": [
      "A le droit d'apprendre et d'etudier.",
      "Peut faire tout ce qu'il veut en classe.",
      "N'a pas le droit d'aller a l'ecole.",
      "Peut rester a la maison s'il est fatigue."
    ],
    "answer": 0,
    "explanation": "En France, l'ecole est un droit pour tous les enfants. Ils doivent apprendre et etudier."
  },
  {
    "id": "A165",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "suggested_leqcm_csp",
    "question": "Les enfants qui ne parlent pas francais :",
    "options": [
      "Vont a l'ecole et recoivent de l'aide pour apprendre.",
      "Sont refuses a l'ecole publique.",
      "Doivent payer pour aller a l'ecole.",
      "Doivent attendre de bien parler francais avant de s'inscrire."
    ],
    "answer": 0,
    "explanation": "En France, l'ecole est obligatoire et gratuite pour tous. Les enfants qui ne parlent pas francais vont a l'ecole et suivent des cours pour apprendre la langue."
  },
  {
    "id": "A166",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Principes et valeurs",
    "source": "suggested_leqcm_cr",
    "question": "Parmi les propositions suivantes, laquelle constitue une participation citoyenne ?",
    "options": [
      "Acheter un logement.",
      "Travailler dans une entreprise.",
      "Ouvrir un compte bancaire.",
      "Voter aux elections."
    ],
    "answer": 3,
    "explanation": "Le vote est l'acte principal par lequel un citoyen participe a la vie politique et aux decisions de son pays."
  },
  {
    "id": "A167",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Principes et valeurs",
    "source": "suggested_leqcm_cr",
    "question": "Que garantit la liberte d'expression ?",
    "options": [
      "La possibilite de tenir des propos haineux.",
      "La possibilite de diffuser des informations fausses.",
      "La possibilite de critiquer les institutions.",
      "La possibilite de tenir des propos diffamatoires."
    ],
    "answer": 2,
    "explanation": "La liberte d'expression garantit la possibilite de critiquer les institutions et d'exprimer ses opinions, dans le respect des lois."
  },
  {
    "id": "A168",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "suggested_leqcm_cr",
    "question": "A quoi sert un titre de sejour ?",
    "options": [
      "A prouver sa nationalite.",
      "A permettre a un etranger de sejourner en France.",
      "A obtenir la nationalite francaise.",
      "A voter aux elections nationales."
    ],
    "answer": 1,
    "explanation": "Un titre de sejour permet a un ressortissant etranger de sejourner legalement en France."
  },
  {
    "id": "A169",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Principes et valeurs",
    "source": "suggested_leqcm_cr",
    "question": "La liberte de circulation permet a toute personne de :",
    "options": [
      "Voyager dans le monde entier sans visa.",
      "Se deplacer librement partout en France.",
      "Refuser de montrer ses papiers d'identite.",
      "S'installer dans n'importe quel pays d'Europe."
    ],
    "answer": 1,
    "explanation": "En France, la liberte d'aller et venir est un droit fondamental. On peut voyager ou demenager librement sur tout le territoire national."
  },
  {
    "id": "A170",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Principes et valeurs",
    "source": "suggested_leqcm_cr",
    "question": "Sur quel site internet peut-on retrouver le symbole de la Republique francaise ?",
    "options": [
      "lemonde.fr",
      "service-public.fr",
      "lefigaro.fr",
      "facebook.com"
    ],
    "answer": 1,
    "explanation": "Le site service-public.fr est le portail officiel de l'administration. Il utilise les symboles de la Republique pour certifier son caractere officiel."
  },
  {
    "id": "A171",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "suggested_leqcm_cr",
    "question": "Completez ces paroles de la Marseillaise : \"Aux armes [...] ! Formez vos bataillons\"",
    "options": [
      "Francais",
      "Citoyens",
      "Soldats",
      "Patriotes"
    ],
    "answer": 1,
    "explanation": "Les paroles correctes sont \"Aux armes citoyens ! Formez vos bataillons\"."
  },
  {
    "id": "A172",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "suggested_leqcm_cr",
    "question": "Completez les paroles de la Marseillaise : \"Allons enfants de la patrie [...]\"",
    "options": [
      "Et de France",
      "Le jour de gloire est arrive",
      "Vers les armes",
      "Nous irons"
    ],
    "answer": 1,
    "explanation": "Les paroles correctes sont \"Allons enfants de la patrie, le jour de gloire est arrive\"."
  },
  {
    "id": "A173",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Principes et valeurs",
    "source": "suggested_leqcm_cr",
    "question": "En application de la liberte individuelle, quelle proposition est correcte ? Une personne peut :",
    "options": [
      "Ne pas respecter les lois.",
      "Refuser de payer ses impots.",
      "Choisir sa religion.",
      "Interdire a ses enfants d'aller a l'ecole."
    ],
    "answer": 2,
    "explanation": "La liberte individuelle inclut la liberte de conscience, qui permet a une personne de croire ou de ne pas croire, et de pratiquer la religion de son choix, dans le respect de la loi."
  },
  {
    "id": "A174",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Principes et valeurs",
    "source": "suggested_leqcm_cr",
    "question": "Concernant la pratique de la religion, quelle proposition est correcte ?",
    "options": [
      "La religion est obligatoire en France.",
      "Seule la religion catholique est autorisee.",
      "La France garantit la liberte de croire et de pratiquer sa religion.",
      "La pratique religieuse est interdite dans l'espace public."
    ],
    "answer": 2,
    "explanation": "La France garantit la liberte de conscience et de culte, permettant a chacun de croire et de pratiquer la religion de son choix, dans le respect de la loi."
  },
  {
    "id": "A175",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Principes et valeurs",
    "source": "suggested_leqcm_cr",
    "question": "En tant que parent, peut-on refuser que son enfant participe aux cours de sport a l'ecole car ils sont mixtes ?",
    "options": [
      "Oui, c'est un droit fondamental.",
      "Non, l'ecole publique est laique et mixte.",
      "Seulement si la religion le demande.",
      "Oui, si l'enfant est gene."
    ],
    "answer": 1,
    "explanation": "L'ecole publique francaise est laique et les enseignements, y compris le sport, sont mixtes. Les parents ne peuvent refuser cette mixite."
  },
  {
    "id": "A176",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Principes et valeurs",
    "source": "suggested_leqcm_cr",
    "question": "Quelle est la devise de la France ?",
    "options": [
      "Liberte, Egalite, Fraternite",
      "Travail, Famille, Patrie",
      "Liberte, Justice, Ordre",
      "Unite, Progres, Solidarite"
    ],
    "answer": 0,
    "explanation": "La devise de la France est Liberte, Egalite, Fraternite."
  },
  {
    "id": "A177",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Principes et valeurs",
    "source": "suggested_leqcm_cr",
    "question": "La repudiation de sa femme est :",
    "options": [
      "Un droit du mari.",
      "Une pratique autorisee en France.",
      "Interdite en France.",
      "Une pratique toleree dans certains cas."
    ],
    "answer": 2,
    "explanation": "En France, un homme n'a pas le droit de decider seul de rompre le mariage sans passer par un juge. L'homme et la femme ont les memes droits."
  },
  {
    "id": "A178",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "suggested_leqcm_cr",
    "question": "Les impots permettent de financer les depenses publiques. Quelle proposition est correcte ?",
    "options": [
      "Les impots sont volontaires.",
      "Chaque citoyen decide de ses impots.",
      "Les impots servent au financement des services publics.",
      "Seuls les riches paient des impots."
    ],
    "answer": 2,
    "explanation": "Les impots sont une contribution obligatoire qui permet de financer le fonctionnement des services publics (education, sante, securite, etc.)."
  },
  {
    "id": "A179",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Principes et valeurs",
    "source": "suggested_leqcm_cr",
    "question": "Peut-on bruler publiquement un drapeau francais ?",
    "options": [
      "Oui, c'est la liberte d'expression.",
      "Non, c'est un outrage puni par la loi.",
      "Oui, si on l'a achete avec son propre argent.",
      "Seulement s'il est vieux et abime."
    ],
    "answer": 1,
    "explanation": "C'est interdit. La loi francaise punit l'outrage au drapeau tricolore, par exemple le detruire ou l'abimer en public. C'est une infraction."
  },
  {
    "id": "A180",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Principes et valeurs",
    "source": "suggested_leqcm_cr",
    "question": "Que fait l'Etat pour lutter contre les discriminations ?",
    "options": [
      "Il encourage les discriminations.",
      "Il ignore les discriminations.",
      "Il prend des lois et met en place des organismes.",
      "Il laisse les citoyens regler les conflits."
    ],
    "answer": 2,
    "explanation": "L'Etat cree des lois pour interdire les inegalites et installe des services publics pour proteger les citoyens victimes de ces actes."
  },
  {
    "id": "A181",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Principes et valeurs",
    "source": "suggested_leqcm_cr",
    "question": "Que represente Marianne ?",
    "options": [
      "La royaute.",
      "La Republique.",
      "L'Empire.",
      "La Revolution."
    ],
    "answer": 1,
    "explanation": "Marianne est un symbole de la Republique francaise, representant les idees de liberte, d'egalite et de fraternite."
  },
  {
    "id": "A182",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Principes et valeurs",
    "source": "suggested_leqcm_cr",
    "question": "Qu'est-ce que la liberte d'association ?",
    "options": [
      "Le droit de choisir librement sa religion.",
      "Le droit de creer des groupes pour des activites communes.",
      "Le droit de refuser de payer ses impots.",
      "Le droit de travailler sans contrat."
    ],
    "answer": 1,
    "explanation": "La liberte d'association est le droit fondamental de toute personne de creer ou d'adherer a une association afin de defendre des interets communs ou de partager des activites."
  },
  {
    "id": "A183",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Principes et valeurs",
    "source": "suggested_leqcm_cr",
    "question": "Qu'est-ce que la liberte ?",
    "options": [
      "Pouvoir faire tout ce que l'on veut, sans limite.",
      "Pouvoir faire tout ce qui ne nuit pas aux autres.",
      "Pouvoir refuser de respecter les lois.",
      "Pouvoir imposer ses idees aux autres."
    ],
    "answer": 1,
    "explanation": "Selon la Declaration des droits de l'homme, la liberte consiste a pouvoir faire tout ce qui ne fait pas de mal aux autres (ne pas nuire a autrui)."
  },
  {
    "id": "A184",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "suggested_leqcm_cr",
    "question": "Qu'est-ce que la Marseillaise ?",
    "options": [
      "L'hymne national francais.",
      "L'hymne de l'Union europeenne.",
      "Une chanson populaire.",
      "La devise de la France."
    ],
    "answer": 0,
    "explanation": "La Marseillaise est l'hymne national de la France. Elle a ete ecrite par Rouget de Lisle en 1792. L'hymne europeen est l'Ode a la Joie."
  },
  {
    "id": "A185",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Principes et valeurs",
    "source": "suggested_leqcm_cr",
    "question": "Sur quel document peut-on voir Marianne ?",
    "options": [
      "Sur les billets en euros.",
      "Sur les timbres-poste.",
      "Sur les cartes bancaires.",
      "Sur les tickets de caisse."
    ],
    "answer": 1,
    "explanation": "Marianne est un symbole de la Republique. Son visage figure sur les timbres et sa statue est dans les mairies. Elle n'est pas sur les billets en euros (c'est de l'architecture)."
  },
  {
    "id": "A186",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Principes et valeurs",
    "source": "suggested_leqcm_cr",
    "question": "Un employeur refuse d'embaucher des femmes dans son entreprise. Que dit la loi ?",
    "options": [
      "La loi l'autorise dans les entreprises privees.",
      "La loi l'interdit.",
      "La loi l'autorise si l'employeur est un homme.",
      "La loi ne dit rien sur ce sujet."
    ],
    "answer": 1,
    "explanation": "La loi interdit toute discrimination a l'embauche. Un employeur ne peut pas refuser d'embaucher une personne en raison de son sexe ou de son origine."
  },
  {
    "id": "A187",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Principes et valeurs",
    "source": "suggested_leqcm_cr",
    "question": "Une des valeurs de la devise republicaine est l'egalite. Qu'est-ce que cela signifie ?",
    "options": [
      "Que tous les hommes sont identiques.",
      "Que tous les citoyens ont les memes droits et les memes devoirs.",
      "Que les plus faibles doivent payer pour les plus forts.",
      "Que les femmes et les hommes ont les memes salaires."
    ],
    "answer": 1,
    "explanation": "L'egalite, dans la devise republicaine, signifie que tous les citoyens sont egaux devant la loi, qu'ils ont les memes droits et les memes devoirs."
  },
  {
    "id": "A188",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Principes et valeurs",
    "source": "suggested_leqcm_cr",
    "question": "Quelle est la place de la langue francaise dans la Republique ?",
    "options": [
      "Elle est facultative.",
      "Elle est la langue de la Republique.",
      "Elle est une langue parmi d'autres.",
      "Elle est reservee a l'administration."
    ],
    "answer": 1,
    "explanation": "La langue francaise est la langue officielle de la Republique et est utilisee dans toutes les administrations, l'education et la vie publique."
  },
  {
    "id": "A189",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Principes et valeurs",
    "source": "suggested_leqcm_cr",
    "question": "Quels sont des symboles officiels de la Republique francaise ?",
    "options": [
      "La Tour Eiffel, le Moulin Rouge, le beret.",
      "Le drapeau tricolore, Marianne, la Marseillaise.",
      "La baguette, le fromage, la mariniere.",
      "Le General de Gaulle, Napoleon, Jeanne d'Arc."
    ],
    "answer": 1,
    "explanation": "Les symboles officiels de la Republique francaise incluent le drapeau tricolore, Marianne et la Marseillaise."
  },
  {
    "id": "A190",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Principes et valeurs",
    "source": "suggested_leqcm_cr",
    "question": "A-t-on le droit d'insulter publiquement quelqu'un parce qu'il est different (handicap, apparence physique, sexe...) ?",
    "options": [
      "Oui, c'est la liberte d'expression.",
      "Non, c'est un delit puni par la loi.",
      "Oui, si on le fait sur Internet.",
      "Seulement si la personne est d'accord."
    ],
    "answer": 1,
    "explanation": "C'est interdit. La liberte d'expression a des limites. Le racisme, le sexisme ou les moqueries sur le handicap ne sont pas des opinions, ce sont des delits sanctionnes par la justice."
  },
  {
    "id": "A191",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "suggested_leqcm_cr",
    "question": "Le regime de la France est :",
    "options": [
      "Une monarchie constitutionnelle.",
      "Une dictature.",
      "Une republique semi-presidentielle.",
      "Un empire"
    ],
    "answer": 2,
    "explanation": "La France est une republique semi-presidentielle. Cela signifie qu'elle a un President elu par les citoyens et un Premier ministre qui dirige le gouvernement."
  },
  {
    "id": "A192",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Principes et valeurs",
    "source": "suggested_leqcm_cr",
    "question": "Pourquoi le principe de laicite doit-il etre respecte a l'ecole ?",
    "options": [
      "Pour imposer une religion.",
      "Pour garantir la neutralite de l'enseignement et l'egalite de tous les eleves.",
      "Pour interdire toute forme de croyance.",
      "Pour favoriser une religion specifique."
    ],
    "answer": 1,
    "explanation": "Le principe de laicite a l'ecole garantit que l'enseignement est neutre et que tous les eleves, quelles que soient leurs croyances, sont traites de maniere egale."
  },
  {
    "id": "A193",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Principes et valeurs",
    "source": "suggested_leqcm_cr",
    "question": "Une personne a-t-elle le droit de ne pas croire en une religion ?",
    "options": [
      "Non, la croyance est obligatoire.",
      "Oui, c'est la liberte de conscience.",
      "Seulement si elle est etrangere.",
      "Oui, mais elle doit le cacher."
    ],
    "answer": 1,
    "explanation": "Oui, une personne a le droit de ne pas croire en une religion, c'est le principe de la liberte de conscience, garanti par la laicite."
  },
  {
    "id": "A194",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Principes et valeurs",
    "source": "suggested_leqcm_cr",
    "question": "Quel droit est garanti par la laicite ?",
    "options": [
      "Le droit de discriminer.",
      "Le droit d'imposer sa religion aux autres.",
      "La liberte de conscience.",
      "Le droit de ne pas respecter les lois de la Republique."
    ],
    "answer": 2,
    "explanation": "La laicite garantit la liberte de conscience, c'est-a-dire le droit de croire ou de ne pas croire. En revanche, elle interdit d'imposer ses croyances et exige le respect des lois de la Republique."
  },
  {
    "id": "A195",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Principes et valeurs",
    "source": "suggested_leqcm_cr",
    "question": "A l'ecole publique, qui peut porter des signes religieux tres visibles ?",
    "options": [
      "Les enseignants.",
      "Les eleves.",
      "Les parents d'eleves.",
      "Le directeur de l'ecole."
    ],
    "answer": 2,
    "explanation": "Les agents de l'Etat (enseignants, directeurs) doivent etre neutres. Les eleves ne peuvent porter que des signes discrets (loi de 2004). Seuls les parents, en tant qu'usagers, conservent leur liberte religieuse."
  },
  {
    "id": "A196",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Principes et valeurs",
    "source": "suggested_leqcm_cr",
    "question": "Selon le principe de laicite, que signifie la neutralite de l'Etat ?",
    "options": [
      "Que l'Etat n'a pas de religion.",
      "Que l'Etat favorise une religion.",
      "Que l'Etat impose une religion.",
      "Que l'Etat n'a pas de devoir."
    ],
    "answer": 0,
    "explanation": "La neutralite de l'Etat, dans le cadre de la laicite, signifie que l'Etat ne privilegie aucune religion et garantit la liberte de culte pour tous."
  },
  {
    "id": "A197",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "suggested_leqcm_cr",
    "question": "Que peut faire un usager du service public dans une mairie ?",
    "options": [
      "Demander une inscription sur les listes electorales.",
      "Se marier.",
      "Declarer une naissance.",
      "Toutes ces reponses."
    ],
    "answer": 3,
    "explanation": "La mairie gere les etapes importantes de la vie citoyenne : la naissance, le mariage et le droit de vote."
  },
  {
    "id": "A198",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Principes et valeurs",
    "source": "suggested_leqcm_cr",
    "question": "Qui doit respecter le principe de neutralite religieuse dans une prefecture ?",
    "options": [
      "Seulement les fonctionnaires.",
      "Tous les agents publics.",
      "Uniquement le prefet.",
      "Les usagers."
    ],
    "answer": 1,
    "explanation": "Tous les agents publics travaillant dans une prefecture doivent respecter le principe de neutralite religieuse dans l'exercice de leurs fonctions."
  },
  {
    "id": "A199",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Principes et valeurs",
    "source": "suggested_leqcm_cr",
    "question": "La laicite impose-t-elle aux agents publics d'etre neutres vis-a-vis des usagers ?",
    "options": [
      "Non, ils peuvent montrer leurs convictions.",
      "Oui, ils doivent faire preuve de neutralite.",
      "Seulement s'ils le souhaitent.",
      "Non, sauf dans les lieux de culte."
    ],
    "answer": 1,
    "explanation": "L'agent public ne doit pas montrer ses opinions religieuses pour garantir un traitement egal a chaque citoyen."
  },
  {
    "id": "A200",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Principes et valeurs",
    "source": "suggested_leqcm_cr",
    "question": "Que garantit le principe de laicite ?",
    "options": [
      "La suprematie de la religion d'Etat.",
      "La liberte de conscience et la separation des institutions.",
      "L'obligation de pratiquer une religion.",
      "La primaute de l'Eglise sur l'Etat."
    ],
    "answer": 1,
    "explanation": "Le principe de laicite garantit la liberte de conscience pour tous, la separation des Eglises et de l'Etat, et la neutralite de l'Etat en matiere religieuse."
  },
  {
    "id": "A201",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Principes et valeurs",
    "source": "suggested_leqcm_cr",
    "question": "A-t-on le droit de changer de religion ?",
    "options": [
      "Non, une fois baptise, c'est definitif.",
      "Oui, c'est un droit fondamental.",
      "Seulement une fois dans sa vie.",
      "Non, cela est contraire a la loi."
    ],
    "answer": 1,
    "explanation": "Oui, le droit de changer de religion est garanti par la liberte de conscience et fait partie des libertes fondamentales."
  },
  {
    "id": "A202",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Principes et valeurs",
    "source": "suggested_leqcm_cr",
    "question": "Que represente la laicite ?",
    "options": [
      "L'indifference de l'Etat a la religion.",
      "Le respect de toutes les religions et l'absence d'une religion d'Etat.",
      "L'obligation de ne pas croire.",
      "La religion comme seule source de loi."
    ],
    "answer": 1,
    "explanation": "La laicite represente l'organisation d'une societe ou l'Etat est neutre vis-a-vis des religions, garantissant la liberte de croire ou de ne pas croire."
  },
  {
    "id": "A203",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Principes et valeurs",
    "source": "suggested_leqcm_cr",
    "question": "Qu'est-ce qui est interdit aux eleves par la Charte de la laicite a l'ecole ?",
    "options": [
      "Etudier l'histoire des religions en classe.",
      "Avoir des croyances religieuses personnelles.",
      "Porter des signes religieux tres visibles (ostentatoires).",
      "Porter un symbole religieux discret."
    ],
    "answer": 2,
    "explanation": "A l'ecole publique, il est interdit de porter des signes religieux tres visibles (comme le voile, la kippa ou une grande croix). On a cependant le droit de croire et d'etudier l'histoire des religions."
  },
  {
    "id": "A204",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "suggested_leqcm_cr",
    "question": "Que dit l'article 1er de la Constitution francaise ?",
    "options": [
      "La France est une Republique chretienne et traditionnelle.",
      "La France est une Republique indivisible, laique, democratique et sociale.",
      "La France est une federation d'Etats autonomes.",
      "La France est une monarchie parlementaire."
    ],
    "answer": 1,
    "explanation": "La France est une Republique laique (pas religieuse) et indivisible (c'est un seul Etat unitaire, pas une federation de regions autonomes)."
  },
  {
    "id": "A205",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "suggested_leqcm_cr",
    "question": "Qu'est-ce que l'Etat de droit ?",
    "options": [
      "Un regime ou le monarque a tous les pouvoirs.",
      "Un systeme ou les citoyens sont au-dessus des lois.",
      "Un systeme ou les gouvernants sont soumis aux lois.",
      "Une absence de lois."
    ],
    "answer": 2,
    "explanation": "L'Etat de droit est un systeme politique ou les gouvernants, comme les gouvernes, sont soumis aux lois et ou les droits fondamentaux sont garantis."
  },
  {
    "id": "A206",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "suggested_leqcm_cr",
    "question": "Le president de la Republique a commis un crime. Quelle proposition est correcte ?",
    "options": [
      "Il est au-dessus des lois.",
      "Il pourra etre juge par la justice apres la fin de son mandat.",
      "Il beneficie d'une immunite totale et definitive.",
      "Il ne peut etre juge que par les citoyens lors d'un referendum."
    ],
    "answer": 1,
    "explanation": "Le President n'est pas au-dessus des lois. Cependant, la Constitution le protege temporairement (immunite) : les poursuites sont suspendues durant son mandat et reprennent a la fin de celui-ci."
  },
  {
    "id": "A207",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "suggested_leqcm_cr",
    "question": "La loi est l'expression de :",
    "options": [
      "La volonte du gouvernement.",
      "La volonte du peuple.",
      "La volonte du President.",
      "La volonte des juges."
    ],
    "answer": 1,
    "explanation": "Dans une democratie, la loi est consideree comme l'expression de la volonte generale, c'est-a-dire du peuple."
  },
  {
    "id": "A208",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "suggested_leqcm_cr",
    "question": "Quelle est la duree du mandat du conseil municipal et du maire ?",
    "options": [
      "3 ans",
      "5 ans",
      "6 ans",
      "4 ans"
    ],
    "answer": 2,
    "explanation": "Le mandat du conseil municipal et du maire est de 6 ans."
  },
  {
    "id": "A209",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "suggested_leqcm_cr",
    "question": "Que garantit l'Etat de droit ?",
    "options": [
      "L'autorisation de ne pas respecter la loi.",
      "L'absence de droits pour les citoyens.",
      "La protection des droits fondamentaux des citoyens.",
      "Le pouvoir illimite des gouvernants."
    ],
    "answer": 2,
    "explanation": "L'Etat de droit garantit que tout le monde, y compris l'Etat et le gouvernement, doit respecter la loi. Il protege ainsi les libertes des citoyens."
  },
  {
    "id": "A210",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "suggested_leqcm_cr",
    "question": "Une personne peut-elle voter a la place d'une autre ?",
    "options": [
      "Oui, avec une simple lettre signee.",
      "Non, c'est impossible.",
      "Oui, avec une procuration officielle.",
      "Oui, avec la carte d'identite de l'autre personne."
    ],
    "answer": 2,
    "explanation": "C'est possible grce au vote par 'procuration'. C'est un document officiel qu'il faut faire avant l'lection (au commissariat ou la gendarmerie). Une simple lettre ou la carte d'identit ne suffisent pas."
  },
  {
    "id": "A211",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "suggested_leqcm_cr",
    "question": "Est-ce que le vote est obligatoire ?",
    "options": [
      "Oui, pour tous les citoyens.",
      "Non, c'est un droit et un devoir civique.",
      "Seulement pour les fonctionnaires.",
      "Oui, sauf pour les jeunes de moins de 25 ans."
    ],
    "answer": 1,
    "explanation": "Le vote n'est pas obligatoire en France, mais c'est un droit et un devoir civique important pour le fonctionnement de la democratie."
  },
  {
    "id": "A212",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "suggested_leqcm_cr",
    "question": "A la fin de son mandat, le President peut-il decider de rester au pouvoir sans election ?",
    "options": [
      "Oui, s'il est tres populaire.",
      "Non, il doit obligatoirement etre reelu par les citoyens.",
      "Oui, il peut prolonger son mandat de 2 ans.",
      "Oui, car c'est le chef de l'Etat."
    ],
    "answer": 1,
    "explanation": "Non. En France, le President est elu pour 5 ans. Pour rester au pouvoir, il doit obligatoirement se presenter a une nouvelle election et la gagner."
  },
  {
    "id": "A213",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "suggested_leqcm_cr",
    "question": "Qui dirige l'action du Gouvernement ?",
    "options": [
      "Le President de la Republique.",
      "Le Premier ministre.",
      "Le Ministre de l'Interieur.",
      "Le Parlement."
    ],
    "answer": 1,
    "explanation": "Le Premier ministre dirige l'action du Gouvernement et assure l'execution des lois."
  },
  {
    "id": "A214",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "suggested_leqcm_cr",
    "question": "Quelle est l'organisation administrative de la France ?",
    "options": [
      "Unitaire.",
      "Federale.",
      "Confederale.",
      "Independante."
    ],
    "answer": 0,
    "explanation": "La France est un Etat unitaire. Cela signifie que les lois sont les memes pour tout le territoire, meme si les regions et les villes ont un pouvoir de decision (decentralisation)."
  },
  {
    "id": "A215",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "suggested_leqcm_cr",
    "question": "Qu'est-ce que le pouvoir legislatif ? Le pouvoir :",
    "options": [
      "D'executer les lois.",
      "De juger les personnes qui ne respectent pas la loi.",
      "De faire les lois.",
      "De nommer les fonctionnaires."
    ],
    "answer": 2,
    "explanation": "Le pouvoir legislatif appartient au Parlement (Assemblee nationale et Senat). Son role principal est de voter les lois."
  },
  {
    "id": "A216",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "suggested_leqcm_cr",
    "question": "Pourquoi separer les trois pouvoirs dans une democratie ?",
    "options": [
      "Pour qu'un seul pouvoir soit plus fort.",
      "Pour eviter la concentration du pouvoir et garantir les libertes.",
      "Pour rendre l'Etat moins efficace.",
      "Pour que les juges dirigent le pays."
    ],
    "answer": 1,
    "explanation": "Separer les pouvoirs (executif, legislatif et judiciaire) permet d'eviter qu'une seule personne ou institution ait tout le pouvoir. Cela protege la liberte des citoyens."
  },
  {
    "id": "A217",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "suggested_leqcm_cr",
    "question": "Quel est le role du gouvernement ?",
    "options": [
      "Faire les lois.",
      "Executer les lois et diriger l'administration.",
      "Juger les citoyens.",
      "Verifier que les lois respectent la Constitution."
    ],
    "answer": 1,
    "explanation": "Le Gouvernement applique les lois votees par le Parlement et dirige l'administration (les services de l'Etat)."
  },
  {
    "id": "A218",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "suggested_leqcm_cr",
    "question": "Que se passe-t-il si un ministre ne respecte pas la loi ?",
    "options": [
      "Rien, il est protege.",
      "Il peut etre demis de ses fonctions et poursuivi en justice.",
      "Il doit juste s'excuser.",
      "C'est le President qui decide."
    ],
    "answer": 1,
    "explanation": "Un ministre qui ne respecte pas la loi peut perdre son poste (etre demis) et etre juge par un tribunal, comme tout citoyen."
  },
  {
    "id": "A219",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "suggested_leqcm_cr",
    "question": "Qui peut voter aux elections en France ?",
    "options": [
      "Tous les etrangers qui habitent en France.",
      "Les citoyens francais majeurs.",
      "Toutes les personnes qui paient des impots.",
      "Les personnes qui ont un diplome."
    ],
    "answer": 1,
    "explanation": "Pour voter, il faut avoir la nationalite francaise et avoir 18 ans. Payer des impots ou habiter en France ne suffit pas (sauf pour les citoyens europeens aux elections locales)."
  },
  {
    "id": "A220",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "suggested_leqcm_cr",
    "question": "La separation des pouvoirs est un principe fondamental. Quels sont les trois pouvoirs concernes ?",
    "options": [
      "Legislatif, executif, militaire.",
      "Legislatif, executif, judiciaire.",
      "Politique, economique, social.",
      "Central, regional, local."
    ],
    "answer": 1,
    "explanation": "La France separe les pouvoirs pour garantir la democratie : le legislatif (faire les lois), l'executif (appliquer les lois) et le judiciaire (juger)."
  },
  {
    "id": "A221",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "suggested_leqcm_cr",
    "question": "Est-ce que le president de la Republique a tous les pouvoirs ?",
    "options": [
      "Oui, il est le chef supreme.",
      "Non, ses pouvoirs sont encadres par la Constitution et la separation des pouvoirs.",
      "Seulement en periode de crise.",
      "Oui, mais il doit consulter le Parlement."
    ],
    "answer": 1,
    "explanation": "Non, le president de la Republique a des pouvoirs importants, mais ils sont encadres par la Constitution et le principe de separation des pouvoirs."
  },
  {
    "id": "A222",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "suggested_leqcm_cr",
    "question": "Qui est le prefet ?",
    "options": [
      "Le maire de la ville.",
      "Le representant de l'Etat dans le departement.",
      "Le juge qui decide des peines au tribunal.",
      "Le responsable des impots."
    ],
    "answer": 1,
    "explanation": "Le prefet represente l'Etat. Il veille au respect des lois et a la securite des citoyens dans son departement."
  },
  {
    "id": "A223",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "suggested_leqcm_cr",
    "question": "Quelle condition est necessaire pour voter aux elections ?",
    "options": [
      "Etre majeur et citoyen francais.",
      "Avoir plus de 21 ans.",
      "Etre marie.",
      "Etre proprietaire."
    ],
    "answer": 0,
    "explanation": "Pour pouvoir voter en France, il faut etre majeur et de nationalite francaise, et etre inscrit sur les listes electorales."
  },
  {
    "id": "A224",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "suggested_leqcm_cr",
    "question": "Qui dirige la commune ?",
    "options": [
      "Le Prefet.",
      "Le Conseil municipal.",
      "Le Maire.",
      "Le President du conseil departemental"
    ],
    "answer": 2,
    "explanation": "Le Maire dirige la commune, assiste par le conseil municipal."
  },
  {
    "id": "A225",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "suggested_leqcm_cr",
    "question": "Quel est le regime politique de la France aujourd'hui ?",
    "options": [
      "Une monarchie constitutionnelle.",
      "Une Republique democratique.",
      "Une Republique federale.",
      "Un regime totalitaire."
    ],
    "answer": 1,
    "explanation": "La France est une Republique democratique et laique. Ce n'est pas une monarchie (comme l'Espagne ou le Royaume-Uni) ni une federation (comme l'Allemagne ou les USA)."
  },
  {
    "id": "A226",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "suggested_leqcm_cr",
    "question": "Qu'est-ce que l'Hotel de Matignon ?",
    "options": [
      "Le siege du President de la Republique.",
      "Le siege du Premier ministre et du Gouvernement.",
      "Le siege du Parlement.",
      "Le siege de la Cour de cassation."
    ],
    "answer": 1,
    "explanation": "L'Hotel de Matignon est la residence officielle et le lieu de travail du Premier ministre et du Gouvernement francais."
  },
  {
    "id": "A227",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "suggested_leqcm_cr",
    "question": "Quel est le role principal du president de la Republique ?",
    "options": [
      "Voter les lois.",
      "Juger les crimes.",
      "Etre le Chef de l'Etat et des Armees.",
      "Diriger la Mairie."
    ],
    "answer": 2,
    "explanation": "Le President de la Republique est le Chef de l'Etat. Il represente la France et commande les armees. Le vote des lois appartient au Parlement."
  },
  {
    "id": "A228",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "suggested_leqcm_cr",
    "question": "Quel est le role du Premier ministre ?",
    "options": [
      "Chef de l'Etat.",
      "Diriger le Gouvernement et sa politique.",
      "Juger les delits.",
      "Voter les lois."
    ],
    "answer": 1,
    "explanation": "Le Premier ministre dirige l'action du Gouvernement, il est responsable de la mise en uvre des lois et de la politique nationale."
  },
  {
    "id": "A229",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "suggested_leqcm_cr",
    "question": "Qui est le chef du Gouvernement ?",
    "options": [
      "Le President de la Republique.",
      "Le Premier Ministre.",
      "Le Ministre de l'Interieur.",
      "Le President du Senat."
    ],
    "answer": 1,
    "explanation": "Le Premier ministre est le chef du Gouvernement en France."
  },
  {
    "id": "A230",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "suggested_leqcm_cr",
    "question": "Combien y a-t-il de regions en France ?",
    "options": [
      "13",
      "15",
      "18",
      "22"
    ],
    "answer": 2,
    "explanation": "Il y a 18 regions en France : 13 en metropole et 5 en outre-mer (Guadeloupe, Martinique, Guyane, La Reunion, Mayotte)."
  },
  {
    "id": "A231",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "suggested_leqcm_cr",
    "question": "Quel est le role du Defenseur des droits ?",
    "options": [
      "Proteger le droit d'auteur des ecrivains et artistes.",
      "Defendre les citoyens contre les abus de l'administration.",
      "Juger les fonctionnaires.",
      "Organiser les elections."
    ],
    "answer": 1,
    "explanation": "Le Defenseur des droits est une autorite independante chargee de defendre les droits et libertes des citoyens face aux administrations."
  },
  {
    "id": "A232",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "suggested_leqcm_cr",
    "question": "Depuis quand l'euro est-elle la monnaie unique ?",
    "options": [
      "2000",
      "2002",
      "2007",
      "1989"
    ],
    "answer": 1,
    "explanation": "L'euro est devenu la monnaie utilisee par les Francais le 1er janvier 2002 avec l'arrivee des billets et des pieces."
  },
  {
    "id": "A233",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "suggested_leqcm_cr",
    "question": "Quel est le role principal du departement ?",
    "options": [
      "Defendre le pays.",
      "Representer l'Etat dans le departement.",
      "Gerer les routes departementales et l'action sociale.",
      "Organiser les elections nationales."
    ],
    "answer": 2,
    "explanation": "Le dpartement est une collectivit territoriale dont les comptences principales concernent les routes dpartementales, l'action sociale (aide aux personnes ges, handicapes, enfants) et les collges."
  },
  {
    "id": "A234",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "suggested_leqcm_cr",
    "question": "Quel est le role principal des communes ?",
    "options": [
      "La defense nationale.",
      "L'organisation des elections europeennes.",
      "La gestion des services de proximite (etat civil, urbanisme, ecoles primaires).",
      "La politique etrangere."
    ],
    "answer": 2,
    "explanation": "Les communes sont responsables des services de proximite essentiels pour les citoyens, tels que l'etat civil, l'urbanisme, la gestion des ecoles primaires, les cimetieres, etc."
  },
  {
    "id": "A235",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "suggested_leqcm_cr",
    "question": "Combien de communes environ existe-t-il en France ?",
    "options": [
      "5 000",
      "10 000",
      "35 000",
      "50 000"
    ],
    "answer": 2,
    "explanation": "La France compte environ 35 000 communes."
  },
  {
    "id": "A236",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "suggested_leqcm_cr",
    "question": "Quel traite concerne la construction de l'Union europeenne ?",
    "options": [
      "Le Traite de Versailles.",
      "Le Traite de Maastricht.",
      "L'Edit de Nantes.",
      "Le Code Civil."
    ],
    "answer": 1,
    "explanation": "C'est le Traite de Maastricht (1992). Il a cree l'Union europeenne et prepare l'arrivee de l'Euro. Le Traite de Versailles marque la fin de la Premiere Guerre mondiale."
  },
  {
    "id": "A237",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "suggested_leqcm_cr",
    "question": "Quel Etat a quitte l'Union europeenne en 2020 ?",
    "options": [
      "La Suisse",
      "Le Royaume-Uni",
      "La Norvege",
      "L'Islande"
    ],
    "answer": 1,
    "explanation": "Le Royaume-Uni a quitte l'Union europeenne en 2020, un evenement connu sous le nom de 'Brexit'."
  },
  {
    "id": "A238",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Principes et valeurs",
    "source": "suggested_leqcm_cr",
    "question": "Quelle est la devise de l'Union europeenne ?",
    "options": [
      "Unie dans la diversite.",
      "Liberte, Egalite, Fraternite.",
      "Paix et Prosperite.",
      "Solidarite et Justice."
    ],
    "answer": 0,
    "explanation": "La devise de l'Union europeenne est \"Unie dans la diversite\"."
  },
  {
    "id": "A239",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "suggested_leqcm_cr",
    "question": "Quel est l'hymne de l'Union europeenne ?",
    "options": [
      "La Marseillaise.",
      "L'Ode a la Joie.",
      "Le Chant des Partisans.",
      "Va, pensiero."
    ],
    "answer": 1,
    "explanation": "L'hymne de l'Union europeenne est l'Ode a la Joie, tiree de la Neuvieme Symphonie de Beethoven."
  },
  {
    "id": "A240",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Principes et valeurs",
    "source": "suggested_leqcm_cr",
    "question": "De quoi est compose le drapeau europeen ?",
    "options": [
      "De bandes bleues et jaunes.",
      "D'etoiles sur fond bleu.",
      "D'un aigle sur fond blanc.",
      "De rayures rouges et blanches."
    ],
    "answer": 1,
    "explanation": "Le drapeau europeen est compose de douze etoiles jaunes disposees en cercle sur fond bleu."
  },
  {
    "id": "A241",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Principes et valeurs",
    "source": "suggested_leqcm_cr",
    "question": "De quelle couleur est le drapeau europeen ?",
    "options": [
      "Rouge",
      "Vert",
      "Bleu",
      "Jaune"
    ],
    "answer": 2,
    "explanation": "Le drapeau europeen est de couleur bleue, avec douze etoiles jaunes formant un cercle."
  },
  {
    "id": "A242",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "suggested_leqcm_cr",
    "question": "En quelle annee le traite de Maastricht, qui marque la fondation de l'Union europeenne, a-t-il ete signe ?",
    "options": [
      "1985",
      "1992",
      "2002",
      "1997"
    ],
    "answer": 1,
    "explanation": "Le Traite de Maastricht, qui a fonde l'Union europeenne, a ete signe en 1992."
  },
  {
    "id": "A243",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "suggested_leqcm_cr",
    "question": "Ou est le siege du Parlement europeen ?",
    "options": [
      "Bruxelles",
      "Strasbourg",
      "Luxembourg",
      "Berlin"
    ],
    "answer": 1,
    "explanation": "Le siege officiel du Parlement europeen se situe a Strasbourg, en France."
  },
  {
    "id": "A244",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "suggested_leqcm_cr",
    "question": "Ou est le siege de la Commission europeenne ?",
    "options": [
      "Strasbourg",
      "Luxembourg",
      "Bruxelles",
      "Francfort"
    ],
    "answer": 2,
    "explanation": "Le siege de la Commission europeenne est a Bruxelles."
  },
  {
    "id": "A245",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "suggested_leqcm_cr",
    "question": "Quel Etat n'est pas membre de l'Union europeenne ?",
    "options": [
      "L'Italie",
      "L'Espagne",
      "La Norvege",
      "La Suede"
    ],
    "answer": 2,
    "explanation": "La Norvege n'est pas membre de l'Union europeenne, bien qu'elle participe a l'espace economique europeen."
  },
  {
    "id": "A246",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "suggested_leqcm_cr",
    "question": "Quand celebre-t-on la journee de l'Europe ?",
    "options": [
      "Le 1er janvier",
      "Le 9 mai",
      "Le 14 juillet",
      "Le 4 juillet"
    ],
    "answer": 1,
    "explanation": "La journee de l'Europe est celebree le 9 mai, commemorant la declaration Schuman de 1950 qui a pose les bases de la construction europeenne."
  },
  {
    "id": "A247",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "suggested_leqcm_cr",
    "question": "A quelle frequence les elections europeennes sont-elles organisees ?",
    "options": [
      "Tous les 3 ans",
      "Tous les 4 ans",
      "Tous les 5 ans",
      "Tous les 6 ans"
    ],
    "answer": 2,
    "explanation": "Les elections europeennes sont organisees tous les 5 ans pour elire les deputes du Parlement europeen."
  },
  {
    "id": "A248",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "suggested_leqcm_cr",
    "question": "Quelle condition est necessaire pour voter aux elections europeennes ?",
    "options": [
      "Etre citoyen d'un pays de l'Union europeenne et avoir 18 ans.",
      "Etre obligatoirement de nationalite francaise.",
      "Avoir un travail en France depuis 5 ans.",
      "Savoir parler anglais couramment."
    ],
    "answer": 0,
    "explanation": "Il n'est pas necessaire d'etre Francais. Pour voter aux elections europeennes en France, il faut avoir la nationalite d'un pays de l'UE (comme l'Italie ou l'Espagne), habiter en France et etre inscrit sur la liste electorale."
  },
  {
    "id": "A249",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "suggested_leqcm_cr",
    "question": "Quel pays est un pays fondateur de l'Union europeenne ?",
    "options": [
      "Le Royaume-Uni",
      "La Suisse",
      "L'Allemagne",
      "La Pologne"
    ],
    "answer": 2,
    "explanation": "C'est l'Allemagne. Elle a fonde la construction europeenne en 1957 avec 5 autres pays : la France, l'Italie, la Belgique, les Pays-Bas et le Luxembourg."
  },
  {
    "id": "A250",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Principes et valeurs",
    "source": "suggested_leqcm_cr",
    "question": "A quelle liberte la PMA fait-elle reference ?",
    "options": [
      "Liberte d'aller et venir.",
      "Liberte de choisir sa vie sexuelle.",
      "Liberte de se marier.",
      "Liberte de fonder une famille."
    ],
    "answer": 3,
    "explanation": "La PMA (Procreation Medicalement Assistee) est une aide medicale pour avoir un enfant. Elle permet aux couples de femmes et aux femmes celibataires de fonder une famille."
  },
  {
    "id": "A251",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Principes et valeurs",
    "source": "suggested_leqcm_cr",
    "question": "Au nom de quoi l'Etat justifie-t-il la restriction des droits ?",
    "options": [
      "Au nom de la volonte du monarque.",
      "Au nom de la securite publique et de la protection des droits d'autrui.",
      "Au nom de l'interet d'une minorite.",
      "Au nom de l'ordre arbitraire."
    ],
    "answer": 1,
    "explanation": "L'Etat peut limiter certains droits pour des raisons importantes comme la securite, la sante publique ou pour proteger les droits des autres citoyens."
  },
  {
    "id": "A252",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Principes et valeurs",
    "source": "suggested_leqcm_cr",
    "question": "Concernant le droit de se marier, quelle proposition est correcte ?",
    "options": [
      "Le mariage est reserve aux hommes.",
      "Le mariage est un contrat civil et peut etre contracte par deux personnes majeures de meme sexe ou de sexe different.",
      "Seules les personnes religieuses peuvent se marier.",
      "Le mariage est obligatoire."
    ],
    "answer": 1,
    "explanation": "Le droit de se marier est un droit civil en France. Le mariage est un contrat entre deux personnes majeures, independamment de leur sexe."
  },
  {
    "id": "A253",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Principes et valeurs",
    "source": "suggested_leqcm_cr",
    "question": "Est-il toujours possible de divorcer ?",
    "options": [
      "Non, le divorce est interdit.",
      "Oui, le divorce est possible et encadre par la loi.",
      "Seulement si les deux epoux sont d'accord.",
      "Uniquement en cas d'adultere."
    ],
    "answer": 1,
    "explanation": "Oui, le divorce est possible en France et est encadre par la loi, avec differentes procedures possibles selon la situation des epoux."
  },
  {
    "id": "A254",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "suggested_leqcm_cr",
    "question": "Laquelle de ces citations est inscrite dans la Declaration des Droits de l'homme et du Citoyen de 1789 ?",
    "options": [
      "\"Que tout rentre dans l'ordre.\"",
      "\"Les hommes naissent et demeurent libres et egaux en droits.\"",
      "\"La patrie en danger.\"",
      "\"Liberte, Egalite, Fraternite.\""
    ],
    "answer": 1,
    "explanation": "L'article 1er de la Declaration des Droits de l'homme et du Citoyen de 1789 stipule : \"Les hommes naissent et demeurent libres et egaux en droits.\""
  },
  {
    "id": "A255",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Principes et valeurs",
    "source": "suggested_leqcm_cr",
    "question": "Le recours a l'avortement est-il autorise ?",
    "options": [
      "Non, c'est interdit.",
      "Oui, sous conditions et dans le respect de la loi.",
      "Seulement en cas de viol.",
      "Oui, sans aucune restriction."
    ],
    "answer": 1,
    "explanation": "Oui, le recours a l'interruption volontaire de grossesse (IVG) est autorise en France, sous certaines conditions medicales et de delai."
  },
  {
    "id": "A256",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "suggested_leqcm_cr",
    "question": "Que contient la Constitution ?",
    "options": [
      "Le detail des depenses et des recettes de l'Etat pour l'annee.",
      "Les principes fondamentaux de l'organisation de l'Etat et les droits des citoyens.",
      "La liste des lois en vigueur.",
      "Le programme du gouvernement."
    ],
    "answer": 1,
    "explanation": "La Constitution est le texte fondateur d'un Etat ; elle definit l'organisation des pouvoirs publics, les droits et libertes fondamentaux des citoyens."
  },
  {
    "id": "A257",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Principes et valeurs",
    "source": "suggested_leqcm_cr",
    "question": "Que garantit la liberte de la presse ?",
    "options": [
      "Le droit de diffuser n'importe quelle fausse information.",
      "Une censure systematique des articles par le gouvernement.",
      "La liberte de publier des informations sans controle prealable.",
      "L'autorisation de publier des secrets de defense nationale."
    ],
    "answer": 2,
    "explanation": "Ce principe garantit le droit de publier et de diffuser des informations, des opinions et des analyses sans censure prealable, tout en respectant les lois."
  },
  {
    "id": "A258",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "suggested_leqcm_cr",
    "question": "Que prevoit la Charte de l'environnement ?",
    "options": [
      "Le droit de vivre dans un environnement equilibre et respectueux de la sante.",
      "Que la protection de la nature est facultative pour les particuliers.",
      "Que seules les grandes entreprises sont responsables de la pollution.",
      "L'interdiction totale de l'industrie en France."
    ],
    "answer": 0,
    "explanation": "Elle fait partie de la Constitution francaise. Elle declare que chacun a le droit de vivre dans un environnement sain, mais aussi le devoir de le proteger."
  },
  {
    "id": "A259",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Principes et valeurs",
    "source": "suggested_leqcm_cr",
    "question": "Que signifie la dignite humaine ?",
    "options": [
      "Le respect de la force physique.",
      "La reconnaissance de la valeur intrinseque de chaque personne, independamment de ses caracteristiques.",
      "La superiorite de certaines personnes.",
      "Le droit de traiter les autres comme on le souhaite."
    ],
    "answer": 1,
    "explanation": "La dignite humaine signifie que chaque personne, sans distinction, possede une valeur intrinseque qui doit etre respectee et protegee."
  },
  {
    "id": "A260",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Principes et valeurs",
    "source": "suggested_leqcm_cr",
    "question": "Que signifie le droit de manifester ?",
    "options": [
      "Le droit de bloquer toutes les routes.",
      "Le droit d'exprimer publiquement son opinion, souvent en groupe, pour attirer l'attention sur une cause.",
      "Le droit de detruire des biens publics.",
      "Le droit de faire greve."
    ],
    "answer": 1,
    "explanation": "Le droit de manifester est le droit de se rassembler publiquement pour exprimer des opinions, des revendications ou des protestations, dans le respect de la loi."
  },
  {
    "id": "A261",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Principes et valeurs",
    "source": "suggested_leqcm_cr",
    "question": "Que signifie PMA ?",
    "options": [
      "Procreation Maximale Assistee",
      "Programme de Maintien Agricole",
      "Procreation Medicalement Assistee",
      "Politique Mutuelle d'Assurance"
    ],
    "answer": 2,
    "explanation": "PMA est l'acronyme de Procreation Medicalement Assistee, qui designe les techniques medicales permettant de concevoir un enfant."
  },
  {
    "id": "A262",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "suggested_leqcm_cr",
    "question": "Quel texte est le plus difficile a modifier ?",
    "options": [
      "Une loi ordinaire.",
      "Un decret.",
      "La Constitution.",
      "Une ordonnance."
    ],
    "answer": 2,
    "explanation": "La Constitution est le texte le plus fondamental et le plus difficile a modifier, necessitant des procedures specifiques et souvent un referendum ou un vote du Congres."
  },
  {
    "id": "A263",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Principes et valeurs",
    "source": "suggested_leqcm_cr",
    "question": "Quelle liberte permet a une personne de croire en la religion de son choix ?",
    "options": [
      "La liberte d'association.",
      "La liberte de conscience.",
      "La liberte de circulation.",
      "La liberte d'expression."
    ],
    "answer": 1,
    "explanation": "La liberte de conscience est le droit de choisir ses convictions religieuses ou philosophiques, ou de ne pas avoir de religion."
  },
  {
    "id": "A264",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Principes et valeurs",
    "source": "suggested_leqcm_cr",
    "question": "Qu'est-ce que le droit de greve ?",
    "options": [
      "Le droit de faire fermer une entreprise.",
      "Le droit pour les salaries de cesser collectivement le travail pour defendre leurs interets.",
      "Le droit de bloquer les transports.",
      "Le droit de manifester pacifiquement."
    ],
    "answer": 1,
    "explanation": "Le droit de greve est le droit des salaries de cesser collectivement leur travail pour appuyer des revendications professionnelles, dans un cadre legal."
  },
  {
    "id": "A265",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "suggested_leqcm_cr",
    "question": "Qu'est-ce que la Constitution ?",
    "options": [
      "C'est le reglement interieur des mairies.",
      "C'est le texte supreme qui organise les pouvoirs et les droits.",
      "C'est le livre qui contient les lois sur le mariage (Code Civil).",
      "C'est un livre d'histoire sur la Revolution francaise."
    ],
    "answer": 1,
    "explanation": "C'est la loi la plus importante de France (la loi supreme). Elle definit comment fonctionne l'Etat (President, Gouvernement) et protege les droits des citoyens."
  },
  {
    "id": "A266",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Principes et valeurs",
    "source": "suggested_leqcm_cr",
    "question": "Qui peut demander a avorter ?",
    "options": [
      "Seulement les femmes mariees.",
      "Seulement les femmes majeures.",
      "Toute femme enceinte, sous conditions legales.",
      "Uniquement sur decision medicale."
    ],
    "answer": 2,
    "explanation": "Toute femme enceinte, qu'elle soit majeure ou mineure, peut demander a avorter en France, dans le respect des procedures legales et des delais etablis."
  },
  {
    "id": "A267",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "suggested_leqcm_cr",
    "question": "Une femme majeure de nationalite francaise a-t-elle le droit de voter aux elections ?",
    "options": [
      "Non, seulement les hommes le peuvent.",
      "Oui, a condition d'etre inscrite sur les listes electorales.",
      "Seulement si elle est mariee.",
      "Non, sauf pour les elections locales."
    ],
    "answer": 1,
    "explanation": "Oui, une femme majeure de nationalite francaise a le droit de voter a toutes les elections, a condition d'etre inscrite sur les listes electorales."
  },
  {
    "id": "A268",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Principes et valeurs",
    "source": "suggested_leqcm_cr",
    "question": "Concernant l'utilisation des reseaux sociaux, quelle proposition est correcte ?",
    "options": [
      "On peut y dire tout ce que l'on veut sans aucune limite.",
      "Il faut respecter la vie privee d'autrui et ne pas tenir de propos haineux.",
      "Les reseaux sociaux ne sont pas soumis aux lois francaises.",
      "On a le droit d'utiliser l'identite de quelqu'un d'autre."
    ],
    "answer": 1,
    "explanation": "La loi s'applique aussi sur Internet : les injures, la diffamation et le partage de contenus haineux sont interdits et punis."
  },
  {
    "id": "A269",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Droits et devoirs",
    "source": "suggested_leqcm_cr",
    "question": "Jeter un megot par terre est :",
    "options": [
      "Sans consequence.",
      "Une petite pollution.",
      "Une infraction et une atteinte a l'environnement.",
      "Tolere dans les zones non urbaines."
    ],
    "answer": 2,
    "explanation": "Jeter un megot par terre est une infraction, car cela pollue l'environnement et peut entrainer une amende."
  },
  {
    "id": "A270",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Principes et valeurs",
    "source": "suggested_leqcm_cr",
    "question": "L'Etat peut-il limiter les droits et libertes ?",
    "options": [
      "Non, jamais.",
      "Oui, si la loi le prevoit pour des raisons d'interet general.",
      "Seulement pour les etrangers.",
      "Uniquement sur decision du President."
    ],
    "answer": 1,
    "explanation": "Oui, l'Etat peut legalement limiter certains droits et libertes, mais uniquement lorsque la loi le prevoit et pour des motifs d'interet general (securite, sante publique, etc.)."
  },
  {
    "id": "A271",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Droits et devoirs",
    "source": "suggested_leqcm_cr",
    "question": "Parmi ces actions, laquelle permet d'adopter une attitude respectueuse de l'environnement ?",
    "options": [
      "Utiliser systematiquement sa voiture pour de courts trajets.",
      "Jeter tous ses dechets dans la meme poubelle.",
      "Trier ses dechets et reduire sa consommation d'eau.",
      "Acheter des produits a usage unique en grande quantite."
    ],
    "answer": 2,
    "explanation": "Trier ses dechets, reduire sa consommation d'eau et privilegier les transports en commun sont des actions concretes pour respecter l'environnement."
  },
  {
    "id": "A272",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Principes et valeurs",
    "source": "suggested_leqcm_cr",
    "question": "Quelle proposition constitue une obligation ?",
    "options": [
      "Se marier.",
      "Payer ses impots.",
      "Participer a des manifestations.",
      "Etre benevole."
    ],
    "answer": 1,
    "explanation": "Payer ses impots est une obligation legale pour les citoyens afin de financer les services publics."
  },
  {
    "id": "A273",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Principes et valeurs",
    "source": "suggested_leqcm_cr",
    "question": "Pour quel motif peut-on limiter la liberte d'expression ?",
    "options": [
      "Pour critiquer une idee politique.",
      "Pour dire que l'on n'est pas d'accord avec quelqu'un.",
      "Pour tenir des propos racistes ou injurieux.",
      "Pour exprimer son desaccord avec le gouvernement."
    ],
    "answer": 2,
    "explanation": "La liberte d'expression est un droit, mais elle est limitee par la loi : il est interdit de tenir des propos racistes, de pratiquer l'insulte ou la diffamation."
  },
  {
    "id": "A274",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Droits et devoirs",
    "source": "suggested_leqcm_cr",
    "question": "Pourquoi doit-on trier ses dechets ?",
    "options": [
      "Pour ne pas deranger les voisins.",
      "Pour recycler les materiaux et proteger l'environnement.",
      "Pour gagner de l'argent directement en vendant ses poubelles.",
      "Parce que le tri est facultatif et depend de la volonte de chacun."
    ],
    "answer": 1,
    "explanation": "Le tri permet de transformer les materiaux (verre, papier, plastique) pour fabriquer de nouveaux objets. Cela protege la nature et limite le gaspillage."
  },
  {
    "id": "A275",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Principes et valeurs",
    "source": "suggested_leqcm_cr",
    "question": "Que doit faire une victime de violences ?",
    "options": [
      "Se taire et ignorer.",
      "Porter plainte et se faire aider par les autorites et les associations.",
      "Se faire justice soi-meme.",
      "Attendre que ca passe."
    ],
    "answer": 1,
    "explanation": "Une victime de violences doit porter plainte aupres des forces de l'ordre et peut chercher du soutien aupres d'associations specialisees et des services de sante."
  },
  {
    "id": "A276",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "suggested_leqcm_cr",
    "question": "Que doit-on faire face aux ordres des policiers ou gendarmes ?",
    "options": [
      "Les ignorer completement.",
      "Les contester par la force",
      "Leur obeir et respecter leurs consignes.",
      "S'enfuir pour eviter le controle."
    ],
    "answer": 2,
    "explanation": "En France, on doit respecter les forces de l'ordre. Si l'on n'est pas d'accord, on peut contester plus tard devant un tribunal, mais on ne doit pas desobeir sur le moment."
  },
  {
    "id": "A277",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "suggested_leqcm_cr",
    "question": "Quel est le role de la police ?",
    "options": [
      "Punir les coupables.",
      "Proteger les citoyens, maintenir l'ordre public et faire respecter la loi.",
      "Decider des lois.",
      "Juger les delits."
    ],
    "answer": 1,
    "explanation": "Le role de la police est d'assurer la securite publique, de maintenir l'ordre, de prevenir la criminalite et de faire respecter la loi."
  },
  {
    "id": "A278",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Principes et valeurs",
    "source": "suggested_leqcm_cr",
    "question": "Quel est un exemple d'assistance a personne en danger ?",
    "options": [
      "Ignorer quelqu'un qui se noie.",
      "Appeler les secours pour une personne qui a un malaise.",
      "Laisser une personne blessee sans aide.",
      "Faire du bruit pour attirer l'attention."
    ],
    "answer": 1,
    "explanation": "Appeler les secours (pompiers, SAMU) pour une personne en danger est un acte d'assistance a personne en danger."
  },
  {
    "id": "A279",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Principes et valeurs",
    "source": "suggested_leqcm_cr",
    "question": "Quel exemple illustre une limitation de liberte pour proteger l'interet general ?",
    "options": [
      "La liberte de manifester.",
      "Le droit de propriete.",
      "Le port du masque en periode epidemique.",
      "La liberte d'expression."
    ],
    "answer": 2,
    "explanation": "Le port du masque, meme s'il limite une liberte individuelle, peut etre rendu obligatoire pour proteger la sante publique et donc l'interet general."
  },
  {
    "id": "A280",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "suggested_leqcm_cr",
    "question": "Quelle est l'attitude a avoir lorsque qu'on est temoin de violences ?",
    "options": [
      "Ignorer la situation.",
      "Intervenir physiquement sans reflechir.",
      "Apporter les premiers secours et appeler les secours si necessaire.",
      "Filmer la scene pour la diffuser sur les reseaux sociaux."
    ],
    "answer": 2,
    "explanation": "En France, tout citoyen a le devoir d'aider une personne en danger. Il faut porter secours si c'est possible sans risque et alerter immediatement la police ou les pompiers."
  },
  {
    "id": "A281",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "suggested_leqcm_cr",
    "question": "Quelle obligation concerne toutes les personnes residant en France quelle que soit leur nationalite ?",
    "options": [
      "Avoir un compte bancaire francais.",
      "Respecter la loi francaise.",
      "Parler exclusivement la langue francaise.",
      "Se declarer aupres de sa mairie."
    ],
    "answer": 1,
    "explanation": "Toutes les personnes qui vivent sur le territoire francais, qu'elles soient francaises ou etrangeres, doivent obligatoirement respecter les lois de la Republique."
  },
  {
    "id": "A282",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "suggested_leqcm_cr",
    "question": "Quelle proposition represente un exemple de crime ?",
    "options": [
      "Un exces de vitesse.",
      "Un meurtre.",
      "Le vol d'un sac a main.",
      "Une insulte a un policier."
    ],
    "answer": 1,
    "explanation": "EEn France, le crime est l'infraction la plus grave (comme le meurtre). Le vol ou l'insulte sont des delits, et l'exces de vitesse est une contravention."
  },
  {
    "id": "A283",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "suggested_leqcm_cr",
    "question": "Parmi ces infractions, laquelle est un delit ?",
    "options": [
      "Un assassinat.",
      "Un vol.",
      "Un stationnement interdit.",
      "Faire du tapage nocturne (bruit la nuit)."
    ],
    "answer": 1,
    "explanation": "Le vol est un delit (puni de prison). L'assassinat est un crime (tres grave). Le stationnement et le tapage nocturne sont des contraventions (amendes)."
  },
  {
    "id": "A284",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "suggested_leqcm_cr",
    "question": "Qui veille au maintien de l'ordre public ?",
    "options": [
      "Les deputes (l'Assemblee nationale).",
      "Le president de la Republique.",
      "Les forces de l'ordre (police et gendarmerie).",
      "Les associations de quartier."
    ],
    "answer": 2,
    "explanation": "Ce sont la Police nationale (en ville) et la Gendarmerie (a la campagne) qui assurent la securite et font respecter l'ordre public."
  },
  {
    "id": "A285",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "suggested_leqcm_cr",
    "question": "S'agissant des dechets, quelle proposition est correcte ?",
    "options": [
      "Tous les dechets peuvent etre jetes dans la nature.",
      "Il est important de trier ses dechets pour le recyclage.",
      "Seuls les dechets organiques doivent etre recycles.",
      "Les dechets menagers n'ont pas d'impact sur l'environnement."
    ],
    "answer": 1,
    "explanation": "Le tri des dechets permet leur recyclage. Cela aide a reduire la pollution et a proteger l'environnement."
  },
  {
    "id": "A286",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "suggested_leqcm_cr",
    "question": "Quel etait le surnom de Louis XIV ?",
    "options": [
      "Le Sage.",
      "Le Roi Soleil.",
      "Le Bien-Aime.",
      "Le Conquerant."
    ],
    "answer": 1,
    "explanation": "Louis XIV est surnomme le 'Roi Soleil'. Son regne est l'un des plus longs de l'histoire de France."
  },
  {
    "id": "A287",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "suggested_leqcm_cr",
    "question": "Quel roi de France a ete execute pendant la Revolution francaise ?",
    "options": [
      "Louis XV.",
      "Louis XVIII.",
      "Louis XVI.",
      "Charles X."
    ],
    "answer": 2,
    "explanation": "Louis XVI a ete guillotine en 1793, pendant la Revolution francaise. Il a ete juge et condamne avant son execution."
  },
  {
    "id": "A288",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "suggested_leqcm_cr",
    "question": "En quelle annee Napoleon Ier est-il devenu empereur ?",
    "options": [
      "1799",
      "1804",
      "1815",
      "1800"
    ],
    "answer": 1,
    "explanation": "Napoleon Bonaparte est devenu empereur des Francais en 1804. C'est le debut du Premier Empire."
  },
  {
    "id": "A289",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "suggested_leqcm_cr",
    "question": "Lequel de ces personnages a un lien avec la Republique francaise ?",
    "options": [
      "Louis XIV.",
      "Francois Ier.",
      "Charles de Gaulle.",
      "Henri IV."
    ],
    "answer": 2,
    "explanation": "C'est Charles de Gaulle. Il a fonde la Ve Republique (le regime actuel). Les trois autres personnages (Louis XIV, Francois Ier, Henri IV) etaient des Rois de France."
  },
  {
    "id": "A290",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "suggested_leqcm_cr",
    "question": "De quand date l'appel a la resistance du general de Gaulle ?",
    "options": [
      "18 juin 1940.",
      "8 mai 1945.",
      "6 juin 1944.",
      "2 septembre 1939."
    ],
    "answer": 0,
    "explanation": "L'appel a la resistance lance par le General de Gaulle depuis Londres date du 18 juin 1940, suite a l'appel du Marechal Petain a cesser les combats."
  },
  {
    "id": "A291",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "suggested_leqcm_cr",
    "question": "Pourquoi la Shoah est-elle etudiee a l'ecole ?",
    "options": [
      "Pour sa dimension historique uniquement.",
      "Pour comprendre l'antisemitisme et prevenir de futures atrocites.",
      "Pour le role des pays allies.",
      "Pour etudier la vie quotidienne pendant la guerre."
    ],
    "answer": 1,
    "explanation": "L'etude de la Shoah permet de comprendre le genocide des Juifs pendant la Seconde Guerre mondiale. C'est important pour lutter contre le racisme et l'antisemitisme aujourd'hui."
  },
  {
    "id": "A292",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "suggested_leqcm_cr",
    "question": "Quel pays a ete colonise par la France ?",
    "options": [
      "Le Japon.",
      "La Russie.",
      "L'Algerie.",
      "L'Allemagne."
    ],
    "answer": 2,
    "explanation": "L'Algerie a ete une colonie francaise pendant 132 ans (de 1830 a 1962). La France n'a jamais colonise le Japon, la Russie ou l'Allemagne."
  },
  {
    "id": "A293",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "suggested_leqcm_cr",
    "question": "Depuis quand les Francais elisent-ils le president de la Republique au suffrage universel direct ?",
    "options": [
      "1958",
      "1945",
      "1962",
      "1875"
    ],
    "answer": 2,
    "explanation": "C'est depuis 1962, grce un rfrendum du Gnral de Gaulle. Avant cette date, les Franais ne votaient pas directement pour le prsident."
  },
  {
    "id": "A294",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "suggested_leqcm_cr",
    "question": "Quelle est la premiere etape de la construction europeenne en 1951 ?",
    "options": [
      "Le traite de Rome.",
      "La creation de la Communaute europeenne du charbon et de l'acier (CECA).",
      "Le traite de Maastricht.",
      "La creation de l'Union europeenne."
    ],
    "answer": 1,
    "explanation": "En 1951, la CECA est creee. C'est la premiere etape de l'Europe : six pays decident de partager leur production de charbon et d'acier pour garantir la paix."
  },
  {
    "id": "A295",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "suggested_leqcm_cr",
    "question": "Durant le mandat de quel president la peine de mort a-t-elle ete abolie ?",
    "options": [
      "Charles de Gaulle",
      "Francois Mitterrand",
      "Emmanuel Macron",
      "Napoleon Bonaparte"
    ],
    "answer": 1,
    "explanation": "C'est Franois Mitterrand (en 1981, grce son ministre Robert Badinter). De Gaulle tait prsident avant, et Emmanuel Macron est prsident bien aprs."
  },
  {
    "id": "A296",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "suggested_leqcm_cr",
    "question": "Quel regime politique a ete mis en place pendant la Revolution francaise en 1792 ?",
    "options": [
      "La Monarchie constitutionnelle.",
      "L'Empire.",
      "La Premiere Republique.",
      "Le Directoire."
    ],
    "answer": 2,
    "explanation": "En 1792, la France supprime la monarchie (le roi) et proclame la Premiere Republique. C'est un moment tres important de l'histoire de France."
  },
  {
    "id": "A297",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "suggested_leqcm_cr",
    "question": "Qui etait une figure de la Resistance francaise pendant la Seconde Guerre mondiale ?",
    "options": [
      "Philippe Petain.",
      "Pierre Laval.",
      "Jean Moulin.",
      "Emile Zola."
    ],
    "answer": 2,
    "explanation": "Jean Moulin fut un resistant emblematique, envoye par le General de Gaulle pour unifier les mouvements de Resistance en France occupee. Petain et Laval collaboraient avec l'occupant."
  },
  {
    "id": "A298",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "suggested_leqcm_cr",
    "question": "En 1944, qu'est-ce qui a change pour les femmes ?",
    "options": [
      "Elles ont obtenu le droit de vote.",
      "Elles ont accede a tous les emplois.",
      "Elles ont obtenu le droit de divorcer facilement.",
      "Elles ont acces a l'education superieure."
    ],
    "answer": 0,
    "explanation": "En 1944, les femmes francaises ont obtenu le droit de vote et d'eligibilite, une avancee majeure pour leur participation a la vie politique du pays."
  },
  {
    "id": "A299",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "suggested_leqcm_cr",
    "question": "Quelle organisation internationale a ete creee en 1945 apres la Seconde Guerre mondiale ?",
    "options": [
      "L'OTAN.",
      "L'Union Europeenne.",
      "L'Organisation des Nations Unies (ONU).",
      "L'Organisation Mondiale du Commerce (OMC)."
    ],
    "answer": 2,
    "explanation": "L'ONU a ete fondee en 1945 par 51 pays dans le but de maintenir la paix et la securite internationales, de developper des relations amicales entre les nations et de promouvoir le progres social."
  },
  {
    "id": "A300",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "suggested_leqcm_cr",
    "question": "Quelle peine a ete supprimee en 1981 ?",
    "options": [
      "L'emprisonnement a vie.",
      "La peine de mort.",
      "Les travaux forces",
      "La deportation."
    ],
    "answer": 1,
    "explanation": "La peine de mort a ete abolie en France par la loi du 9 octobre 1981, sous la presidence de Francois Mitterrand."
  },
  {
    "id": "A301",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "suggested_leqcm_cr",
    "question": "En quelle annee l'euro est-elle devenue la monnaie utilisee en France ?",
    "options": [
      "2002",
      "1999",
      "2000",
      "1995"
    ],
    "answer": 0,
    "explanation": "L'euro est devenu la monnaie officielle utilisee par les Francais le 1er janvier 2002, en remplacement du franc."
  },
  {
    "id": "A302",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "suggested_leqcm_cr",
    "question": "En quelle annee a commence la Premiere Guerre mondiale ?",
    "options": [
      "1918",
      "1914",
      "1939",
      "1905"
    ],
    "answer": 1,
    "explanation": "La Premiere Guerre mondiale a eclate en juillet 1914, suite a l'assassinat de l'archiduc Francois-Ferdinand."
  },
  {
    "id": "A303",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "suggested_leqcm_cr",
    "question": "Ou a eu lieu le debarquement en 1944 ?",
    "options": [
      "Sur les cotes de l'Italie.",
      "En Normandie.",
      "Sur les cotes de la Bretagne.",
      "Sur les cotes de la Grece."
    ],
    "answer": 1,
    "explanation": "Le debarquement allie majeur de juin 1944, qui a marque un tournant dans la liberation de la France, a eu lieu sur les plages de Normandie."
  },
  {
    "id": "A304",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "suggested_leqcm_cr",
    "question": "Quel continent a ete le plus concerne par la decolonisation francaise apres la Seconde Guerre mondiale ?",
    "options": [
      "L'Europe.",
      "L'Asie.",
      "L'Afrique.",
      "L'Amerique du Nord."
    ],
    "answer": 2,
    "explanation": "Apres 1945, la France a accorde l'independance a de nombreux pays, principalement sur le continent africain (comme l'Algerie, le Maroc ou le Senegal)."
  },
  {
    "id": "A305",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "suggested_leqcm_cr",
    "question": "Que fete-t-on le 8 mai ?",
    "options": [
      "La Fete Nationale.",
      "La Victoire de 1945.",
      "La fete du Travail.",
      "La fin de la Premiere Guerre mondiale."
    ],
    "answer": 1,
    "explanation": "Le 8 mai celebre la fin de la Seconde Guerre mondiale en Europe et la victoire des Allies sur l'Allemagne nazie."
  },
  {
    "id": "A306",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "suggested_leqcm_cr",
    "question": "Quelle mer ou ocean borde la France metropolitaine ?",
    "options": [
      "La mer Baltique.",
      "L'ocean Atlantique.",
      "La mer Rouge.",
      "La mer Noire."
    ],
    "answer": 1,
    "explanation": "La France metropolitaine est bordee par l'ocean Atlantique a l'ouest, la Manche au nord, et la mer Mediterranee au sud."
  },
  {
    "id": "A307",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "suggested_leqcm_cr",
    "question": "Quel pays a une frontiere terrestre avec la France metropolitaine ?",
    "options": [
      "Le Portugal.",
      "La Suisse.",
      "L'Irlande.",
      "Le Royaume-Uni."
    ],
    "answer": 1,
    "explanation": "La France partage des frontieres terrestres avec plusieurs pays, dont la Suisse. Le Portugal est voisin de l'Espagne, l'Irlande est une ile, et le Royaume-Uni est separe par la Manche."
  },
  {
    "id": "A308",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "suggested_leqcm_cr",
    "question": "Quelle ville francaise est un port maritime ?",
    "options": [
      "Lyon.",
      "Marseille.",
      "Paris.",
      "Toulouse."
    ],
    "answer": 1,
    "explanation": "Marseille est un grand port maritime francais, situe sur la mer Mediterranee. C'est le plus grand port de France."
  },
  {
    "id": "A309",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "suggested_leqcm_cr",
    "question": "Quelle mer se situe entre la France et l'Angleterre ?",
    "options": [
      "La mer Baltique.",
      "La mer Noire.",
      "La Manche.",
      "La mer Tyrrhenienne."
    ],
    "answer": 2,
    "explanation": "La Manche est la mer qui separe la France de l'Angleterre (Grande-Bretagne)."
  },
  {
    "id": "A310",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "suggested_leqcm_cr",
    "question": "Qu'est ce que la France d'outre-mer ?",
    "options": [
      "Les regions francaises situees dans l'ocean Atlantique.",
      "L'ensemble des territoires francais situes hors de l'Europe.",
      "Les pays francophones ayant une alliance avec la France.",
      "Les territoires d'outre-mer appartenant a des pays voisins de la France."
    ],
    "answer": 1,
    "explanation": "La France d'outre-mer designe les territoires qui appartiennent a la France mais qui ne sont pas sur le continent europeen (comme la Guadeloupe, la Martinique ou la Reunion)."
  },
  {
    "id": "A311",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "suggested_leqcm_cr",
    "question": "Quelle chaine de montagnes est situee entre la France et l'Espagne ?",
    "options": [
      "Les Alpes.",
      "Les Vosges.",
      "Les Pyrenees.",
      "Le Jura."
    ],
    "answer": 2,
    "explanation": "Les Pyrenees forment une chaine de montagnes naturelle qui marque la frontiere entre la France et l'Espagne."
  },
  {
    "id": "A312",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "suggested_leqcm_cr",
    "question": "Quelle ile francaise se trouve dans l'ocean Indien ?",
    "options": [
      "La Corse.",
      "La Reunion.",
      "Madagascar.",
      "La Sardaigne."
    ],
    "answer": 1,
    "explanation": "C'est La Reunion. Madagascar est bien dans l'ocean Indien mais c'est un pays independant. La Corse et la Sardaigne sont en Mediterranee."
  },
  {
    "id": "A313",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "suggested_leqcm_cr",
    "question": "Quelle est la population approximative de la France en 2025 ?",
    "options": [
      "Moins de 50 millions d'habitants.",
      "Environ 70 millions d'habitants.",
      "Plus de 100 millions d'habitants.",
      "Environ 20 millions d'habitants."
    ],
    "answer": 1,
    "explanation": "Selon l'INSEE, la France comptait environ 68,4 millions d'habitants au 1er janvier 2025. La reponse la plus proche est donc 70 millions. C'est le deuxieme pays le plus peuple de l'UE."
  },
  {
    "id": "A314",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "suggested_leqcm_cr",
    "question": "Quel fleuve traverse Paris ?",
    "options": [
      "La Loire.",
      "La Seine.",
      "Le Rhone.",
      "La Garonne."
    ],
    "answer": 1,
    "explanation": "La Seine est le fleuve emblematique qui traverse la capitale francaise, Paris, et la divise en deux parties : la Rive Gauche et la Rive Droite."
  },
  {
    "id": "A315",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "suggested_leqcm_cr",
    "question": "Lequel de ces pays partage des frontieres terrestres avec la France ?",
    "options": [
      "L'Italie.",
      "La Pologne.",
      "Le Maroc.",
      "Le Portugal."
    ],
    "answer": 0,
    "explanation": "La France partage des frontieres terrestres avec l'Italie (par les Alpes). La Pologne est a l'est de l'Allemagne, le Maroc est en Afrique du Nord et le Portugal est a l'ouest de l'Espagne."
  },
  {
    "id": "A316",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "suggested_leqcm_cr",
    "question": "Quel pays a une frontiere avec la France metropolitaine au nord-est ?",
    "options": [
      "L'Espagne.",
      "L'Allemagne.",
      "Le Royaume-Uni.",
      "La Suisse."
    ],
    "answer": 1,
    "explanation": "Au nord-est, la France metropolitaine partage une frontiere terrestre avec l'Allemagne. L'Espagne est au sud-ouest, le Royaume-Uni est separe par la Manche, et la Suisse est au sud-est."
  },
  {
    "id": "A317",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "suggested_leqcm_cr",
    "question": "Ou se trouvent les principales activites economiques en France ?",
    "options": [
      "Dans les zones rurales reculees.",
      "Principalement dans les grandes metropoles et les zones industrielles.",
      "Uniquement dans les regions montagneuses.",
      "Essentiellement dans les zones cotieres."
    ],
    "answer": 1,
    "explanation": "L'activite economique et les emplois sont surtout concentres dans les grandes villes (comme Paris, Lyon ou Marseille) et dans les zones industrielles."
  },
  {
    "id": "A318",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "suggested_leqcm_cr",
    "question": "Parmi ces pays, lequel attire le plus de visiteurs chaque annee ?",
    "options": [
      "L'Espagne.",
      "L'Italie.",
      "La France.",
      "Le Royaume-Uni."
    ],
    "answer": 2,
    "explanation": "La France est la premiere destination touristique mondiale, attirant le plus grand nombre de visiteurs internationaux chaque annee."
  },
  {
    "id": "A319",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "suggested_leqcm_cr",
    "question": "Ou habite la majorite des Francais ?",
    "options": [
      "Dans les campagnes.",
      "Dans les petites villes de moins de 10 000 habitants.",
      "Dans les grandes villes et leurs peripheries (zones urbaines).",
      "Dans les zones montagneuses."
    ],
    "answer": 2,
    "explanation": "La plupart des Francais vivent dans les grandes villes ou autour des villes car c'est la que l'on trouve le plus de travail et de services (ecoles, transports, hopitaux)."
  },
  {
    "id": "A320",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "suggested_leqcm_cr",
    "question": "Quelle region est la plus peuplee ?",
    "options": [
      "La Bretagne.",
      "L'Occitanie.",
      "L'Ile-de-France.",
      "La Nouvelle-Aquitaine."
    ],
    "answer": 2,
    "explanation": "L'Ile-de-France, qui englobe Paris et sa region, est la region la plus peuplee de France en raison de sa forte concentration de population et d'activites economiques."
  },
  {
    "id": "A321",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "suggested_leqcm_cr",
    "question": "Quelle ville francaise fait partie des 10 plus grandes metropoles du pays ?",
    "options": [
      "Limoges.",
      "Poitiers.",
      "Lyon.",
      "Besancon."
    ],
    "answer": 2,
    "explanation": "Lyon est l'une des plus grandes metropoles francaises, tant en termes de population que d'influence economique et culturelle."
  },
  {
    "id": "A322",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "suggested_leqcm_cr",
    "question": "Lequel de ces departements de France est le plus touristique ?",
    "options": [
      "La Lozere.",
      "La Creuse.",
      "Paris.",
      "La Haute-Marne."
    ],
    "answer": 2,
    "explanation": "Paris est le dpartement qui attire le plus de touristes en France, grce ses monuments, ses muses, sa vie culturelle et son patrimoine exceptionnel."
  },
  {
    "id": "A323",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "suggested_leqcm_cr",
    "question": "Quand peut-on visiter gratuitement des lieux culturels en France ?",
    "options": [
      "Uniquement en janvier.",
      "Lors des Journees Europeennes du Patrimoine.",
      "Uniquement pendant la nuit",
      "Tous les jours de la semaine."
    ],
    "answer": 1,
    "explanation": "Chaque annee en septembre, les Journees Europeennes du Patrimoine permettent de visiter gratuitement de nombreux monuments et musees partout en France."
  },
  {
    "id": "A324",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "suggested_leqcm_cr",
    "question": "Combien de personnes parlent francais dans le monde ?",
    "options": [
      "Environ 50 millions.",
      "Environ 100 millions.",
      "Environ 300 millions.",
      "Plus d'un milliard."
    ],
    "answer": 2,
    "explanation": "On estime qu'environ 300 millions de personnes parlent francais dans le monde, en faisant l'une des langues les plus parlees et la seule parlee sur les cinq continents."
  },
  {
    "id": "A325",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "suggested_leqcm_cr",
    "question": "Qui etait Marguerite Yourcenar ?",
    "options": [
      "Une chanteuse celebre.",
      "Une exploratrice.",
      "Une femme politique.",
      "Une ecrivaine."
    ],
    "answer": 3,
    "explanation": "Marguerite Yourcenar etait une grande ecrivaine francaise. Elle a ete la premiere femme elue a l'Academie francaise en 1980."
  },
  {
    "id": "A326",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "suggested_leqcm_cr",
    "question": "Quel peintre est francais ?",
    "options": [
      "Salvador Dali.",
      "Vincent van Gogh.",
      "Claude Monet.",
      "Pablo Picasso."
    ],
    "answer": 2,
    "explanation": "Claude Monet est un peintre francais, pionnier de la peinture impressionniste. Dali etait espagnol, Van Gogh neerlandais et Picasso espagnol."
  },
  {
    "id": "A327",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "suggested_leqcm_cr",
    "question": "Quel musee est situe a Paris ?",
    "options": [
      "Le musee du Louvre.",
      "Le musee d'Orsay.",
      "Le Centre Pompidou.",
      "Tous ces musees."
    ],
    "answer": 3,
    "explanation": "Le musee du Louvre, le musee d'Orsay et le Centre Pompidou sont trois des plus grands et des plus celebres musees situes a Paris."
  },
  {
    "id": "A328",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "suggested_leqcm_cr",
    "question": "Qui etait Auguste Rodin ?",
    "options": [
      "Un compositeur.",
      "Un sculpteur.",
      "Un ecrivain.",
      "Un philosophe."
    ],
    "answer": 1,
    "explanation": "Auguste Rodin est un sculpteur francais renomme, connu pour ses uvres comme 'Le Penseur' et 'La Porte de l'Enfer'."
  },
  {
    "id": "A329",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "suggested_leqcm_cr",
    "question": "Quel est le classement de la langue francaise parmi les langues les plus parlees dans le monde ?",
    "options": [
      "Cinquieme.",
      "Deuxieme.",
      "Dixieme.",
      "Troisieme."
    ],
    "answer": 0,
    "explanation": "Le francais est la cinquieme langue la plus parlee au monde, apres le mandarin, l'anglais, l'espagnol et l'hindi."
  },
  {
    "id": "A330",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "suggested_leqcm_cr",
    "question": "Quelle cathedrale celebre a ete en partie detruite par un incendie en 2019 ?",
    "options": [
      "La cathedrale de Chartres.",
      "La cathedrale de Reims.",
      "La cathedrale Notre-Dame de Paris.",
      "La cathedrale d'Amiens."
    ],
    "answer": 2,
    "explanation": "La cathdrale Notre-Dame de Paris a subi un grave incendie en avril 2019, qui a caus d'importants dgts sa structure et sa toiture."
  },
  {
    "id": "A331",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "suggested_leqcm_cr",
    "question": "Qui etait une ecrivaine francaise celebre ?",
    "options": [
      "Simone de Beauvoir.",
      "Edith Piaf.",
      "Brigitte Bardot.",
      "Marie Curie."
    ],
    "answer": 0,
    "explanation": "Simone de Beauvoir etait une philosophe, romanciere et essayiste francaise, figure majeure du feminisme du XXe siecle. Edith Piaf etait chanteuse, Brigitte Bardot actrice et Marie Curie scientifique."
  },
  {
    "id": "A332",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "suggested_leqcm_cr",
    "question": "Qui etait un celebre musicien francais ?",
    "options": [
      "Luciano Pavarotti.",
      "Wolfgang Amadeus Mozart.",
      "Claude Debussy.",
      "Ludwig van Beethoven."
    ],
    "answer": 2,
    "explanation": "Claude Debussy est un grand compositeur francais. Il est celebre pour sa musique originale et moderne pour son epoque. Les autres artistes cites ne sont pas francais."
  },
  {
    "id": "A333",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "suggested_leqcm_cr",
    "question": "Qui etait Auguste Renoir ?",
    "options": [
      "Un musicien",
      "Un ecrivain.",
      "Un peintre.",
      "Un architecte."
    ],
    "answer": 2,
    "explanation": "Auguste Renoir etait un peintre francais celebre, figure du mouvement impressionniste."
  },
  {
    "id": "A334",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "suggested_leqcm_cr",
    "question": "Quelle fete est francaise ?",
    "options": [
      "La Saint-Patrick.",
      "Le 14 juillet.",
      "Thanksgiving.",
      "Le 4 juillet."
    ],
    "answer": 1,
    "explanation": "Le 14 juillet est la fete nationale francaise, commemorant la prise de la Bastille en 1789 et la Fete de la Federation en 1790."
  },
  {
    "id": "A335",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "suggested_leqcm_cr",
    "question": "Quel mariage est reconnu par l'Etat ?",
    "options": [
      "Le mariage religieux uniquement.",
      "Le mariage civil celebre a la mairie.",
      "L'union libre (concubinage).",
      "Le PACS (Pacte Civil de Solidarite)."
    ],
    "answer": 1,
    "explanation": "En France, seul le mariage civil (a la mairie) est reconnu par la loi. Le mariage religieux est symbolique et doit obligatoirement avoir lieu apres la mairie. Le PACS est une union officielle, mais ce n'est pas un mariage."
  },
  {
    "id": "A336",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "suggested_leqcm_cr",
    "question": "Aupres de quelle institution les parents peuvent-ils inscrire leur enfant a l'ecole publique ?",
    "options": [
      "La prefecture.",
      "La mairie.",
      "La securite sociale.",
      "Le tribunal."
    ],
    "answer": 1,
    "explanation": "L'inscription des enfants a l'ecole publique se fait a la mairie du lieu de residence. La mairie gere les demarches administratives."
  },
  {
    "id": "A337",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "suggested_leqcm_cr",
    "question": "En cas de divorce, qui exerce l'autorite parentale ?",
    "options": [
      "Uniquement le parent qui a la garde principale.",
      "Les deux parents, sauf decision contraire du juge.",
      "Seulement la mere.",
      "Le juge aux affaires familiales."
    ],
    "answer": 1,
    "explanation": "En principe, l'autorite parentale est exercee conjointement par les deux parents, meme apres un divorce, sauf si le juge en a decide autrement pour des raisons graves concernant l'interet de l'enfant."
  },
  {
    "id": "A338",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "suggested_leqcm_cr",
    "question": "Quelle aide permet aux personnes qui ont des difficultes financieres d'avoir un avocat ?",
    "options": [
      "L'aide juridictionnelle.",
      "Le cheque emploi service universel (CESU).",
      "La prestation de compensation du handicap (PCH).",
      "Le RSA (Revenu de Solidarite Active)."
    ],
    "answer": 0,
    "explanation": "L'aide juridictionnelle est un dispositif qui prend en charge tout ou partie des frais d'avocat et de procedure pour les personnes dont les ressources sont insuffisantes."
  },
  {
    "id": "A339",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "suggested_leqcm_cr",
    "question": "Ou faut-il declarer la naissance d'un enfant ?",
    "options": [
      "A la CAF (Caisse d'Allocations Familiales).",
      "A la mairie du lieu de naissance.",
      "A l'hopital.",
      "Aupres de son employeur."
    ],
    "answer": 1,
    "explanation": "La declaration de naissance est obligatoire. Elle doit etre faite a la mairie du lieu de naissance dans les 5 jours qui suivent l'accouchement."
  },
  {
    "id": "A340",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "suggested_leqcm_cr",
    "question": "Quelle est l'une des conditions pour passer l'examen du permis de conduire ?",
    "options": [
      "Avoir plus de 21 ans.",
      "Avoir suivi une formation obligatoire.",
      "Etre marie.",
      "Avoir une profession."
    ],
    "answer": 1,
    "explanation": "Pour passer l'examen du permis de conduire, il est obligatoire d'avoir suivi une formation theorique (code de la route) et pratique (conduite) dispensee par une auto-ecole agreee."
  },
  {
    "id": "A341",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "suggested_leqcm_cr",
    "question": "Un bail locatif est valide s'il est :",
    "options": [
      "Oral (deconseille).",
      "Ecrit et signe par les deux parties.",
      "Signe par le locataire uniquement.",
      "Sans signature."
    ],
    "answer": 1,
    "explanation": "Pour etre valide et securisant, un bail locatif doit etre ecrit et signe par le proprietaire et le locataire."
  },
  {
    "id": "A342",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "suggested_leqcm_cr",
    "question": "Ou peut-on deposer un lave-vaisselle casse ?",
    "options": [
      "Dans la poubelle d'ordures menageres.",
      "Aupres d'un centre de recyclage ou d'une dechetterie.",
      "Dans la nature.",
      "Dans la rue."
    ],
    "answer": 1,
    "explanation": "Les appareils electriques ne doivent pas etre jetes avec les ordures menageres. Il faut les deposer en dechetterie pour qu'ils soient recycles et pour proteger l'environnement."
  },
  {
    "id": "A343",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "suggested_leqcm_cr",
    "question": "Quel numero d'urgence permet d'appeler la police ?",
    "options": [
      "15",
      "17",
      "18",
      "115"
    ],
    "answer": 1,
    "explanation": "Le numero d'urgence pour contacter la police ou la gendarmerie en France est le 17. Le 15 concerne le SAMU (urgences medicales), le 18 les sapeurs-pompiers, et le 112 est le numero d'urgence europeen."
  },
  {
    "id": "A344",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "suggested_leqcm_cr",
    "question": "Concernant l'acces aux soins, quelle proposition est correcte ?",
    "options": [
      "L'acces aux soins est reserve aux personnes ayant une bonne mutuelle.",
      "L'Assurance Maladie rembourse une partie des frais de sante.",
      "Les medecins peuvent refuser de soigner un patient sans raison valable.",
      "Seuls les Francais peuvent beneficier de soins medicaux."
    ],
    "answer": 1,
    "explanation": "L'Assurance Maladie, regime de base de protection sociale en France, vise a rembourser une partie significative des depenses de sante des assures, garantissant ainsi un acces aux soins pour tous."
  },
  {
    "id": "A345",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "suggested_leqcm_cr",
    "question": "A qui est accessible la contraception ?",
    "options": [
      "Uniquement aux femmes mariees.",
      "toutes les personnes, quel que soit leur ge ou leur situation.",
      "Uniquement aux personnes majeures.",
      "Uniquement aux couples."
    ],
    "answer": 1,
    "explanation": "La contraception est accessible toutes les personnes souhaitant l'utiliser, indpendamment de leur ge, de leur sexe ou de leur statut marital, dans le respect de la sant et de la vie prive."
  },
  {
    "id": "A346",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "suggested_leqcm_cr",
    "question": "Qu'est-ce que le principe de confidentialite dans le domaine de la sante ?",
    "options": [
      "Le droit du patient de choisir son medecin.",
      "Le secret medical concernant les informations de sante d'un patient.",
      "La gratuite des soins pour tous.",
      "Le droit de refuser un traitement."
    ],
    "answer": 1,
    "explanation": "Le principe de confidentialite, ou secret medical, impose aux professionnels de sante de ne pas divulguer les informations relatives a la sante d'un patient sans son consentement ou sans y etre legalement contraints."
  },
  {
    "id": "A347",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "suggested_leqcm_cr",
    "question": "L'inscription a l'Assurance maladie est :",
    "options": [
      "Volontaire et optionnelle.",
      "Obligatoire pour toute personne residant en France.",
      "Soumise a un examen medical prealable.",
      "Uniquement pour les fonctionnaires."
    ],
    "answer": 1,
    "explanation": "L'affiliation a l'Assurance maladie est un droit et une obligation pour toute personne residant en France de maniere stable et reguliere, afin de garantir la couverture de ses frais de sante."
  },
  {
    "id": "A348",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "suggested_leqcm_cr",
    "question": "Qui peut demander un conge parental d'education ?",
    "options": [
      "Uniquement les meres.",
      "Les peres et les meres salaries qui elevent un enfant.",
      "Uniquement les peres.",
      "Les retraites ayant des petits-enfants."
    ],
    "answer": 1,
    "explanation": "Le conge parental d'education est un droit ouvert aux salaries, qu'ils soient peres ou meres, ayant au moins un an d'anciennete dans l'entreprise, pour s'occuper de leur enfant apres la naissance ou l'adoption."
  },
  {
    "id": "A349",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "suggested_leqcm_cr",
    "question": "Quelles sont les affaires traitees par le conseil de prud'hommes ?",
    "options": [
      "Les litiges familiaux.",
      "Les litiges entre un salarie et son employeur.",
      "Les infractions penales.",
      "Les conflits de voisinage."
    ],
    "answer": 1,
    "explanation": "Le conseil de prud'hommes est une juridiction specialisee dans la resolution des conflits individuels du travail, c'est-a-dire les litiges survenant entre un salarie et son employeur."
  },
  {
    "id": "A350",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "suggested_leqcm_cr",
    "question": "Travailler sans etre declare est :",
    "options": [
      "Une pratique toleree.",
      "Un travail au noir, illegal et puni par la loi.",
      "Un moyen d'eviter les impots.",
      "Une exception pour les etudiants."
    ],
    "answer": 1,
    "explanation": "Travailler sans declaration est qualifie de travail dissimule ou 'travail au noir'. C'est une infraction grave qui expose l'employeur a des sanctions penales et financieres, et le salarie a des risques sociaux."
  },
  {
    "id": "A351",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "suggested_leqcm_cr",
    "question": "Lorsqu'un employeur veut qu'un salarie travaille plus longtemps que la duree prevue dans le contrat de travail :",
    "options": [
      "Le salarie peut toujours refuser sans motif.",
      "L'employeur doit respecter la loi (duree maximum) et payer ces heures plus cher.",
      "Cela est interdit par le Code du travail.",
      "Le salaire horaire diminue car on travaille plus."
    ],
    "answer": 1,
    "explanation": "L'employeur peut demander des heures supplementaires dans le respect des durees maximales de travail. Ces heures donnent obligatoirement droit a une remuneration plus elevee (majoration) ou a un repos compensateur."
  },
  {
    "id": "A352",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "suggested_leqcm_cr",
    "question": "Quelle est la mission de France Travail ?",
    "options": [
      "Delivrer des permis de conduire.",
      "Gerer les allocations familiales.",
      "Accompagner les demandeurs d'emploi et les employeurs.",
      "Organiser les elections."
    ],
    "answer": 2,
    "explanation": "France Travail (anciennement Pole emploi) a pour mission principale d'accompagner les personnes en recherche d'emploi dans leurs demarches d'insertion professionnelle et de proposer des services aux entreprises pour leurs recrutements."
  },
  {
    "id": "A353",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "suggested_leqcm_cr",
    "question": "Dans une entreprise, le droit syndical permet :",
    "options": [
      "D'interdire toute discussion sur le travail.",
      "Aux salaries de se regrouper pour defendre leurs droits et interets professionnels.",
      "A l'employeur de decider seul des conditions de travail.",
      "De refuser toute negociation collective."
    ],
    "answer": 1,
    "explanation": "Le droit syndical permet aux salaries de se constituer en syndicats, de negocier collectivement avec l'employeur et de defendre leurs interets communs."
  },
  {
    "id": "A354",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "suggested_leqcm_cr",
    "question": "Dans une entreprise, le droit de greve autorise :",
    "options": [
      "Le blocage de tous les acces a l'entreprise.",
      "L'arret collectif et concerte du travail pour soutenir des revendications professionnelles.",
      "La destruction de materiel.",
      "Le refus de toute communication avec la direction."
    ],
    "answer": 1,
    "explanation": "Le droit de greve est un droit fondamental des salaries qui leur permet d'arreter collectivement et simultanement le travail afin d'appuyer des revendications professionnelles."
  },
  {
    "id": "A355",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "suggested_leqcm_cr",
    "question": "Quelles sont les conditions pour toucher les allocations chomage ?",
    "options": [
      "Etre retraite.",
      "Avoir perdu involontairement son emploi et remplir certaines conditions d'activite anterieure.",
      "Etre etudiant sans activite.",
      "Etre fonctionnaire."
    ],
    "answer": 1,
    "explanation": "Pour beneficier des allocations chomage (indemnisation du chomage), il faut avoir ete salarie, avoir perdu involontairement son emploi, et avoir cotise suffisamment au prealable. Il faut egalement rechercher activement un emploi."
  },
  {
    "id": "A356",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "suggested_leqcm_cr",
    "question": "Qu'est-ce que l'ecole maternelle ?",
    "options": [
      "L'ecole pour les etudiants.",
      "Le premier cycle de l'enseignement scolaire pour les enfants avant l'ge de 6 ans.",
      "Une garderie uniquement.",
      "L'ecole pour les adultes."
    ],
    "answer": 1,
    "explanation": "L'ecole maternelle accueille les enfants de moins de 6 ans et constitue le premier cycle de l'enseignement scolaire obligatoire, visant leur developpement et leur preparation a l'ecole elementaire."
  },
  {
    "id": "A357",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "suggested_leqcm_cr",
    "question": "Comment s'appelle le diplome passe par les eleves a la fin du college ?",
    "options": [
      "Le baccalaureat.",
      "Le brevet des colleges.",
      "Le CAP.",
      "Le BTS."
    ],
    "answer": 1,
    "explanation": "Le diplome qui valide la fin de la scolarite au college est le Diplome National du Brevet (DNB), souvent appele simplement 'le brevet'."
  },
  {
    "id": "A358",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "suggested_leqcm_cr",
    "question": "Les parents d'eleve ont le droit de :",
    "options": [
      "Entrer dans la salle de classe pendant les cours.",
      "Demander un rendez-vous avec les enseignants pour discuter de la scolarite de leur enfant.",
      "Evaluer les enseignants.",
      "Interrompre les cours a leur convenance."
    ],
    "answer": 1,
    "explanation": "Les parents d'eleves ont le droit d'etre informes de la scolarite de leur enfant et de dialoguer avec les enseignants et la direction de l'ecole, notamment par des rencontres et des rendez-vous."
  },
  {
    "id": "A359",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "suggested_leqcm_cr",
    "question": "Qui peut manger a la cantine scolaire ?",
    "options": [
      "Uniquement les eleves de primaire.",
      "Les eleves et le personnel de l'etablissement scolaire.",
      "Uniquement les enseignants.",
      "Uniquement les parents."
    ],
    "answer": 1,
    "explanation": "La cantine scolaire est generalement ouverte aux eleves de l'etablissement, ainsi qu'au personnel (enseignants, personnel administratif et de service), sous reserve des regles specifiques de chaque etablissement."
  },
  {
    "id": "A360",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "suggested_leqcm_cr",
    "question": "quel ge commence l'instruction obligatoire des enfants ?",
    "options": [
      "3 ans",
      "6 ans",
      "16 ans",
      "18 ans"
    ],
    "answer": 0,
    "explanation": "L'instruction est obligatoire pour tous les enfants rsidant en France, ds l'ge de 3 ans, jusqu' l'ge de 16 ans rvolus. Cela inclut l'cole maternelle."
  },
  {
    "id": "A361",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "suggested_leqcm_cr",
    "question": "Quel est l'ge de la majorit ?",
    "options": [
      "16 ans",
      "18 ans",
      "21 ans",
      "25 ans"
    ],
    "answer": 1,
    "explanation": "La majorit civile en France est fixe 18 ans. cet ge, une personne acquiert la pleine capacit juridique et est considre comme responsable de ses actes."
  },
  {
    "id": "A362",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "suggested_leqcm_cr",
    "question": "A l'ecole, il est interdit aux parents de :",
    "options": [
      "Participer aux sorties scolaires.",
      "Organiser des reunions avec la direction.",
      "Faire du bruit dans les couloirs pendant les heures de classe.",
      "S'informer sur le reglement interieur."
    ],
    "answer": 2,
    "explanation": "Les parents doivent respecter le bon deroulement de la vie scolaire. Faire du bruit ou perturber les cours est interdit pour ne pas gener les eleves et le personnel enseignant."
  },
  {
    "id": "A363",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "suggested_leqcm_cr",
    "question": "Quel motif d'absence est accepte par l'ecole ?",
    "options": [
      "Un voyage pendant la periode scolaire.",
      "Une maladie de l'enfant.",
      "Une fete familiale sans autorisation.",
      "Une convenance personnelle des parents."
    ],
    "answer": 1,
    "explanation": "La maladie de l'enfant est un motif legitime. Les parents doivent prevenir l'ecole et justifier l'absence. Les autres motifs (vacances, fetes) ne sont pas acceptes."
  },
  {
    "id": "A364",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "suggested_leqcm_cr",
    "question": "Des parents ne respectent pas l'obligation d'instruction pour leurs enfants. Quelle sanction maximale risquent-ils ?",
    "options": [
      "Une simple amende de 135 euros.",
      "Une amende de 7 500 euros et 6 mois d'emprisonnement.",
      "La suppression definitive des allocations familiales.",
      "Une interdiction de sortie du territoire."
    ],
    "answer": 1,
    "explanation": "Ne pas respecter l'obligation d'instruction est un delit grave. Les parents peuvent etre condamnes a une amende allant jusqu'a 7 500 euros et a une peine d'emprisonnement pouvant aller jusqu'a 6 mois."
  },
  {
    "id": "A365",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "suggested_leqcm_cr",
    "question": "Quand ont lieu les vacances scolaires de Noel ?",
    "options": [
      "En fevrier.",
      "En avril.",
      "Fin decembre et debut janvier.",
      "En octobre."
    ],
    "answer": 2,
    "explanation": "Les vacances scolaires de Noel ont lieu traditionnellement a la fin du mois de decembre et se prolongent jusqu'au debut du mois de janvier de l'annee suivante."
  },
  {
    "id": "A366",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "suggested_leqcm_cr",
    "question": "A l'ecole, un enfant en situation de handicap :",
    "options": [
      "Peut etre exclu si son handicap gene.",
      "A les memes droits a l'education que tous les enfants.",
      "Doit etre scolarise dans une ecole speciale uniquement.",
      "Ne peut pas participer aux activites sportives."
    ],
    "answer": 1,
    "explanation": "Tous les enfants ont le droit d'aller a l'ecole. L'etablissement doit s'adapter pour accueillir les eleves en situation de handicap et les aider a reussir comme les autres."
  },
  {
    "id": "A367",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Principes et valeurs",
    "source": "suggested_leqcm_csp_bridge",
    "question": "Quelle proposition est correcte ? La liberte d'expression :",
    "options": [
      "Elle permet de tout dire, meme des insultes.",
      "Elle permet de s'exprimer, mais elle a des limites.",
      "C'est un droit reserve uniquement aux journalistes.",
      "Elle autorise les propos racistes."
    ],
    "answer": 1,
    "explanation": "En France, on est libre de donner son avis. Mais il est interdit par la loi de diffuser de la haine, du racisme ou d'insulter les gens."
  },
  {
    "id": "A368",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "suggested_leqcm_csp_bridge",
    "question": "Quelle condition est necessaire pour voter aux elections europeennes ?",
    "options": [
      "Etre obligatoirement de nationalite francaise",
      "Avoir 18 ans et etre citoyen d'un pays de l'Union europeenne",
      "Avoir juste une carte de sejour",
      "Travailler en France"
    ],
    "answer": 1,
    "explanation": "Un citoyen d'un autre pays de l'Union europeenne qui habite en France peut voter aux elections europeennes."
  },
  {
    "id": "A369",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Droits et devoirs",
    "source": "suggested_leqcm_csp_bridge",
    "question": "Comment s'appelle le texte qui enonce les droits et devoirs des personnes residant en France ?",
    "options": [
      "Le Code Civil",
      "La Constitution",
      "Le Code du Travail",
      "Le Reglement interieur de l'Assemblee"
    ],
    "answer": 1,
    "explanation": "La Constitution est le texte le plus important en France. Elle explique les droits et les devoirs de chaque citoyen."
  },
  {
    "id": "A370",
    "type": "knowledge_suggested",
    "tracks": [
      "csp"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "suggested_leqcm_csp_bridge",
    "question": "Dans quelles situations doit-on se rendre aux urgences de l'hopital ?",
    "options": [
      "Seulement pour un accident grave ou un danger de mort.",
      "Pour soigner un simple rhume ou une fatigue.",
      "Pour demander une ordonnance de medicaments.",
      "Pour faire un vaccin ou une visite de controle."
    ],
    "answer": 0,
    "explanation": "Les urgences sont reservees aux accidents graves. Pour les petites maladies comme un rhume, il faut aller chez son medecin."
  },
  {
    "id": "A371",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Principes et valeurs",
    "source": "suggested_leqcm_cr_bridge",
    "question": "Qu'est ce qui est interdit par la Charte de la laicite a l'ecole ?",
    "options": [
      "Etudier l'histoire des religions en classe.",
      "Avoir des croyances religieuses personnelles.",
      "Porter des signes religieux tres visibles (ostentatoires).",
      "Porter un symbole religieux discret."
    ],
    "answer": 2,
    "explanation": "A l'ecole publique, il est interdit de porter des signes religieux tres visibles (comme le voile, la kippa ou une grande croix). On a cependant le droit de croire et d'etudier l'histoire des religions."
  },
  {
    "id": "A372",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "suggested_leqcm_cr_bridge",
    "question": "A la fin de son mandat, le president de la Republique peut-il decider de rester au pouvoir ?",
    "options": [
      "Oui, s'il est tres populaire.",
      "Non, il doit obligatoirement etre reelu par les citoyens.",
      "Oui, il peut prolonger son mandat de 2 ans.",
      "Oui, car c'est le chef de l'Etat."
    ],
    "answer": 1,
    "explanation": "Non. En France, le President est elu pour 5 ans. Pour rester au pouvoir, il doit obligatoirement se presenter a une nouvelle election et la gagner."
  },
  {
    "id": "A373",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "suggested_leqcm_cr_bridge",
    "question": "Quel est le role du president de la Republique ?",
    "options": [
      "Voter les lois.",
      "Juger les crimes.",
      "Etre le Chef de l'Etat et des Armees.",
      "Diriger la Mairie."
    ],
    "answer": 2,
    "explanation": "Le President de la Republique est le Chef de l'Etat. Il represente la France et commande les armees. Le vote des lois appartient au Parlement."
  },
  {
    "id": "A374",
    "type": "knowledge_suggested",
    "tracks": [
      "cr"
    ],
    "theme": "Droits et devoirs",
    "source": "suggested_leqcm_cr_bridge",
    "question": "Quelle proposition represente un exemple de delit ?",
    "options": [
      "Un assassinat.",
      "Un vol.",
      "Un stationnement interdit.",
      "Faire du tapage nocturne (bruit la nuit)."
    ],
    "answer": 1,
    "explanation": "Le vol est un delit (puni de prison). L'assassinat est un crime (tres grave). Le stationnement et le tapage nocturne sont des contraventions (amendes)."
  }
];

const OFFICIAL_PROMPT_BANK = [];

export const QUESTION_BANK = [...BASE_QUESTION_BANK, ...SUGGESTED_QCM_BANK, ...OFFICIAL_PROMPT_BANK];
