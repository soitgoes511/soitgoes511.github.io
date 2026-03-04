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
  "exam_rules": "https://www.service-public.fr/particuliers/actualites/A18713"
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

const OFFICIAL_PROMPT_BANK = [
  {
    "id": "O001",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Principes et valeurs",
    "source": "official_csp",
    "question": "Quel est l'un des symboles de la Republique francaise ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O002",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Principes et valeurs",
    "source": "official_csp",
    "question": "Le principe d'egalite signifie que :",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O003",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Principes et valeurs",
    "source": "official_csp",
    "question": "\"Liberte, egalite, fraternite\", c'est :",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O004",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Principes et valeurs",
    "source": "official_csp",
    "question": "A-t-on le droit d'insulter publiquement quelqu'un parce qu'il est different (handicap, apparence physique, sexe...) ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O005",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Principes et valeurs",
    "source": "official_csp",
    "question": "Le regime de la France est :",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O006",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Principes et valeurs",
    "source": "official_csp",
    "question": "Lequel de ces symboles represente officiellement la Republique francaise ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O007",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Principes et valeurs",
    "source": "official_csp",
    "question": "Ou peut-on voir la devise de la Republique ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O008",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Principes et valeurs",
    "source": "official_csp",
    "question": "Quels sont des symboles officiels de la Republique francaise ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O009",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Principes et valeurs",
    "source": "official_csp",
    "question": "Qu'est-ce que l'egalite ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O010",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Principes et valeurs",
    "source": "official_csp",
    "question": "Que signifie la liberte ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O011",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Principes et valeurs",
    "source": "official_csp",
    "question": "Que signifie le mot \"fraternite\" dans la devise francaise ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O012",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Principes et valeurs",
    "source": "official_csp",
    "question": "Quel animal est un symbole de la France ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O013",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Principes et valeurs",
    "source": "official_csp",
    "question": "Quel est l'un des roles des associations ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O014",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Principes et valeurs",
    "source": "official_csp",
    "question": "Quel est le nom de l'hymne national ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O015",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Principes et valeurs",
    "source": "official_csp",
    "question": "Quel symbole de la Republique francaise est tricolore ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O016",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Principes et valeurs",
    "source": "official_csp",
    "question": "Quelle est la date de la fete nationale francaise ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O017",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Principes et valeurs",
    "source": "official_csp",
    "question": "Quelle est la langue officielle de la Republique francaise ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O018",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Principes et valeurs",
    "source": "official_csp",
    "question": "Quelle est la place de la langue francaise dans la Republique ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O019",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Principes et valeurs",
    "source": "official_csp",
    "question": "Quelle liberte permet a chacun d'exprimer ses idees ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O020",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Principes et valeurs",
    "source": "official_csp",
    "question": "Quelle proposition est correcte ? La liberte d'expression :",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O021",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Principes et valeurs",
    "source": "official_csp",
    "question": "Quelles sont les couleurs du drapeau francais ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O022",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Principes et valeurs",
    "source": "official_csp",
    "question": "Qu'est-ce que la Marseillaise ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O023",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Principes et valeurs",
    "source": "official_csp",
    "question": "Qu'est ce qui est traditionnellement organise sur les Champs Elysees le 14 juillet pour celebrer la fete nationale ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O024",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Principes et valeurs",
    "source": "official_csp",
    "question": "Qui est Marianne ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O025",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Principes et valeurs",
    "source": "official_csp",
    "question": "Une personne peut-elle changer librement de religion ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O026",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Principes et valeurs",
    "source": "official_csp",
    "question": "\"La France est une Republique indivisible, ..., democratique et sociale\". Completez cette phrase extraite de l'article 1er de la Constitution :",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O027",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Principes et valeurs",
    "source": "official_csp",
    "question": "Que permet le principe de laicite ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O028",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Principes et valeurs",
    "source": "official_csp",
    "question": "Quel droit est garanti par la laicite ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O029",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Principes et valeurs",
    "source": "official_csp",
    "question": "Pourquoi le principe de laicite doit-il etre respecte a l'ecole ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O030",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Principes et valeurs",
    "source": "official_csp",
    "question": "Qu'est-ce que la laicite ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O031",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Principes et valeurs",
    "source": "official_csp",
    "question": "Un enfant peut-il refuser d'aller a l'ecole pour une raison religieuse ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O032",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Principes et valeurs",
    "source": "official_csp",
    "question": "Une personne a-t-elle le droit de ne pas croire en une religion ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O033",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "official_csp",
    "question": "Qu'est-ce que le pouvoir executif ? Le pouvoir :",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O034",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "official_csp",
    "question": "Les dirigeants sont elus par les citoyens dans :",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O035",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "official_csp",
    "question": "A-t-on le droit de ne pas respecter une loi ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O036",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "official_csp",
    "question": "Qui doit respecter la loi ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O037",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "official_csp",
    "question": "Quel est le role de l'autorite judiciaire ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O038",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "official_csp",
    "question": "Quel pouvoir detient un juge ? Le pouvoir :",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O039",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "official_csp",
    "question": "L'autorite judiciaire est exercee par :",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O040",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "official_csp",
    "question": "Que se passe-t-il si un ministre ne respecte pas la loi ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O041",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "official_csp",
    "question": "Qui est elu lors des elections legislatives ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O042",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "official_csp",
    "question": "Quand sont elus les senateurs ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O043",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "official_csp",
    "question": "Qui est elu lors des elections municipales ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O044",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "official_csp",
    "question": "Qui est elu lors des elections presidentielles ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O045",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "official_csp",
    "question": "Pour combien de temps est elu le president de la Republique francaise ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O046",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "official_csp",
    "question": "Qui possede le pouvoir executif ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O047",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "official_csp",
    "question": "Quelle condition est necessaire pour voter aux elections ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O048",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "official_csp",
    "question": "Qui peut voter aux elections en France ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O049",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "official_csp",
    "question": "Que signifie suffrage universel ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O050",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "official_csp",
    "question": "Concernant les partis politiques, quelle proposition est correcte ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O051",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "official_csp",
    "question": "Quel est le role des deputes ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O052",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "official_csp",
    "question": "La separation des pouvoirs est un principe fondamental. Quels sont les trois pouvoirs concernes ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O053",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "official_csp",
    "question": "Qui possede le pouvoir legislatif ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O054",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "official_csp",
    "question": "Qui elit les deputes ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O055",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "official_csp",
    "question": "Qui reside au palais de l'Elysee ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O056",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "official_csp",
    "question": "Combien y a-t-il de departements en France ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O057",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "official_csp",
    "question": "Qui dirige la commune ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O058",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "official_csp",
    "question": "Est-ce que le president de la Republique a tous les pouvoirs ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O059",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "official_csp",
    "question": "Qui est le prefet ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O060",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "official_csp",
    "question": "Quel est le role du Parlement ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O061",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "official_csp",
    "question": "Quel est le regime politique de la France aujourd'hui ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O062",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "official_csp",
    "question": "Combien d'Etats font partie de l'Union europeenne au 1er janvier 2025 ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O063",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "official_csp",
    "question": "Quel Etat n'est pas membre de l'Union europeenne ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O064",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "official_csp",
    "question": "Quelle condition est necessaire pour voter aux elections europeennes ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O065",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "official_csp",
    "question": "A quelle frequence les elections europeennes sont-elles organisees ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O066",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "official_csp",
    "question": "Quel pays est un pays fondateur de l'Union europeenne ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O067",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "official_csp",
    "question": "Quelle est la monnaie utilisee en France ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O068",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "official_csp",
    "question": "Qui elit les deputes europeens ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O069",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "official_csp",
    "question": "Quand celebre-t-on la journee de l'Europe ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O070",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Droits et devoirs",
    "source": "official_csp",
    "question": "Comment s'appelle la Constitution actuelle de la France ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O071",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Droits et devoirs",
    "source": "official_csp",
    "question": "Comment s'appelle le texte qui enonce les droits et devoirs des personnes residant en France ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O072",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Droits et devoirs",
    "source": "official_csp",
    "question": "Concernant les droits individuels, quelle proposition est correcte ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O073",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Droits et devoirs",
    "source": "official_csp",
    "question": "Lequel de ces droits est un droit fondamental ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O074",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Droits et devoirs",
    "source": "official_csp",
    "question": "Parmi ces textes, lequel garantit les droits et libertes en France ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O075",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Droits et devoirs",
    "source": "official_csp",
    "question": "Qu'est-ce que la liberte d'expression ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O076",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Droits et devoirs",
    "source": "official_csp",
    "question": "Quel droit permet a une personne de se defendre devant la justice ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O077",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Droits et devoirs",
    "source": "official_csp",
    "question": "Quel est le texte fondateur etablissant en France les droits et les devoirs de chaque citoyen ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O078",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Droits et devoirs",
    "source": "official_csp",
    "question": "Quel texte a ete adopte pendant la Revolution francaise ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O079",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Droits et devoirs",
    "source": "official_csp",
    "question": "Quelle liberte permet a une personne de ne pas avoir de religion ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O080",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Droits et devoirs",
    "source": "official_csp",
    "question": "Est-il toujours possible de divorcer ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O081",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Droits et devoirs",
    "source": "official_csp",
    "question": "Concernant les limites aux libertes individuelles, quelle proposition est correcte ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O082",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Droits et devoirs",
    "source": "official_csp",
    "question": "En France, est-ce legal d'etre marie a plusieurs personnes en meme temps ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O083",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Droits et devoirs",
    "source": "official_csp",
    "question": "Faut-il reduire ses dechets ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O084",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Droits et devoirs",
    "source": "official_csp",
    "question": "Jeter une bouteille dans la rue est :",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O085",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Droits et devoirs",
    "source": "official_csp",
    "question": "Pourquoi les libertes individuelles peuvent-elles etre limitees ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O086",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Droits et devoirs",
    "source": "official_csp",
    "question": "Que doit faire une personne en cas d'accident ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O087",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Droits et devoirs",
    "source": "official_csp",
    "question": "Que permet la citoyennete francaise ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O088",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Droits et devoirs",
    "source": "official_csp",
    "question": "Que risque une personne qui ne respecte pas la loi ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O089",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Droits et devoirs",
    "source": "official_csp",
    "question": "Quel est le role de la gendarmerie ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O090",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Droits et devoirs",
    "source": "official_csp",
    "question": "Quel est le role de la police ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O091",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Droits et devoirs",
    "source": "official_csp",
    "question": "Qu'est-ce qu'une infraction ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O092",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Droits et devoirs",
    "source": "official_csp",
    "question": "Comment peut-on reduire ses dechets ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O093",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Droits et devoirs",
    "source": "official_csp",
    "question": "Deposer une machine a laver cassee sur le trottoir est :",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O094",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Droits et devoirs",
    "source": "official_csp",
    "question": "En quoi consiste la traite des etres humains ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O095",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Droits et devoirs",
    "source": "official_csp",
    "question": "Que doit faire une victime de violences ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O096",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "official_csp",
    "question": "Qui etait Napoleon Ier ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O097",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "official_csp",
    "question": "Lequel de ces personnages historiques est francais ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O098",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "official_csp",
    "question": "Dans quelle Republique est-on aujourd'hui ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O099",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "official_csp",
    "question": "Qu'est-ce que la Shoah ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O100",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "official_csp",
    "question": "Quel pays ou region du monde a ete colonise par la France ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O101",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "official_csp",
    "question": "Qui a rendu l'ecole gratuite, laique et obligatoire ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O102",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "official_csp",
    "question": "En quelle annee a ete creee la Communaute Economique Europeenne (CEE) ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O103",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "official_csp",
    "question": "Le 11 novembre est un jour ferie. A quoi correspond cette date ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O104",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "official_csp",
    "question": "Qui a ete le premier President elu sous la Ve Republique ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O105",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "official_csp",
    "question": "Depuis quelle annee l'ecole publique est-elle gratuite ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O106",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "official_csp",
    "question": "Combien y a-t-il eu de republiques en France ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O107",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "official_csp",
    "question": "Qui etait le roi de France au moment de la Revolution francaise ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O108",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "official_csp",
    "question": "Qui a fonde la Ve Republique ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O109",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "official_csp",
    "question": "Que celebre-t-on le 14 juillet ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O110",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "official_csp",
    "question": "Quelle guerre a eu lieu entre 1914 et 1918 ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O111",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "official_csp",
    "question": "Pourquoi l'annee 1958 est importante pour la France ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O112",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "official_csp",
    "question": "Quel fleuve coule en France ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O113",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "official_csp",
    "question": "Quelle ville est francaise ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O114",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "official_csp",
    "question": "Quel ocean borde la cote ouest francaise ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O115",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "official_csp",
    "question": "Qu'est-ce que Paris ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O116",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "official_csp",
    "question": "Sur quel continent se situe la France metropolitaine ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O117",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "official_csp",
    "question": "Quelle ile est un departement d'outre-mer francais ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O118",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "official_csp",
    "question": "Combien y a-t-il de regions en France metropolitaine ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O119",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "official_csp",
    "question": "Quelle ville est un grand port maritime ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O120",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "official_csp",
    "question": "Quelle est la mer au sud de la France metropolitaine ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O121",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "official_csp",
    "question": "Quelle ville est situee au bord de la mer Mediterranee ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O122",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "official_csp",
    "question": "Ou se situe la Corse ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O123",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "official_csp",
    "question": "Quelle chaine de montagnes est situee entre la France et l'Italie ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O124",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "official_csp",
    "question": "Qui etait Moliere ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O125",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "official_csp",
    "question": "Qui etait Charles Baudelaire ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O126",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "official_csp",
    "question": "Qui etait George Sand ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O127",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "official_csp",
    "question": "Qui etait Simone de Beauvoir ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O128",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "official_csp",
    "question": "Qui etait Albert Camus ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O129",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "official_csp",
    "question": "Qui etait Paul Cezanne ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O130",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "official_csp",
    "question": "Qui etait Marc Chagall ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O131",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "official_csp",
    "question": "Qui etait Josephine Baker ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O132",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "official_csp",
    "question": "Qui etait une chanteuse francaise celebre ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O133",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "official_csp",
    "question": "Qu'est-ce que le Louvre ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O134",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "official_csp",
    "question": "Qui etait Jean de la Fontaine ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O135",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "official_csp",
    "question": "Quel ecrivain est francais ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O136",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "official_csp",
    "question": "Quand celebre-t-on Noel ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O137",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "official_csp",
    "question": "Quel numero d'urgence permet d'appeler le SAMU ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O138",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "official_csp",
    "question": "Quel numero d'urgence permet d'appeler les pompiers ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O139",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "official_csp",
    "question": "Apres avoir obtenu le permis de conduire, que faut-il faire pour pouvoir conduire sa voiture ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O140",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "official_csp",
    "question": "A quelles conditions un mariage est-il reconnu juridiquement ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O141",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "official_csp",
    "question": "Quand faut-il declarer son enfant au service d'etat civil de la mairie ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O142",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "official_csp",
    "question": "Que doit faire un employeur pour fixer un salaire ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O143",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "official_csp",
    "question": "Qu'est-ce que le SMIC ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O144",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "official_csp",
    "question": "Quelle est la premiere demarche a realiser pour chercher un emploi ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O145",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "official_csp",
    "question": "Qui est aide par France Travail ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O146",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "official_csp",
    "question": "Une personne etrangere en situation reguliere peut creer son entreprise :",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O147",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "official_csp",
    "question": "Une femme peut-elle creer son entreprise ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O148",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "official_csp",
    "question": "A partir de quel age un mineur peut-il travailler ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O149",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "official_csp",
    "question": "Aupres de quel organisme faut-il demander le remboursement des frais de sante ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O150",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "official_csp",
    "question": "Qu'est-ce qu'un numero d'urgence ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O151",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "official_csp",
    "question": "Concernant l'acces aux soins, quelle proposition est correcte ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O152",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "official_csp",
    "question": "En cas de probleme de sante non urgent, a qui faut-il s'adresser en premier ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O153",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "official_csp",
    "question": "Quel est le role du medecin traitant ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O154",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "official_csp",
    "question": "Dans quelles situations doit-on se rendre aux urgences de l'hopital ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O155",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "official_csp",
    "question": "Quel est l'objectif des vaccinations obligatoires ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O156",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "official_csp",
    "question": "A quoi sert la carte Vitale ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O157",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "official_csp",
    "question": "A quoi sert une mutuelle sante ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O158",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "official_csp",
    "question": "Jusqu'a quel age l'ecole est-elle obligatoire ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O159",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "official_csp",
    "question": "L'autorite parentale prevoit l'obligation :",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O160",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "official_csp",
    "question": "Pour qui l'ecole est-elle obligatoire ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O161",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "official_csp",
    "question": "Quel diplome obtient-on a la fin du lycee ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O162",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "official_csp",
    "question": "Dans quels etablissements scolaires vont les eleves apres l'ecole elementaire ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O163",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "official_csp",
    "question": "Un enfant inscrit a l'ecole :",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O164",
    "type": "knowledge_open",
    "tracks": [
      "csp"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "official_csp",
    "question": "Les enfants qui ne parlent pas francais :",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O165",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Principes et valeurs",
    "source": "official_cr",
    "question": "Parmi les propositions suivantes, laquelle constitue une participation citoyenne ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O166",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Principes et valeurs",
    "source": "official_cr",
    "question": "Que garantit la liberte d'expression ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O167",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Principes et valeurs",
    "source": "official_cr",
    "question": "A quoi sert un titre de sejour ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O168",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Principes et valeurs",
    "source": "official_cr",
    "question": "La liberte de circulation permet a toute personne de :",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O169",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Principes et valeurs",
    "source": "official_cr",
    "question": "Sur quel site internet peut-on retrouver le symbole de la Republique francaise ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O170",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Principes et valeurs",
    "source": "official_cr",
    "question": "Completez ces paroles de la Marseillaise : \"Aux armes [...] ! Formez vos bataillons\"",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O171",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Principes et valeurs",
    "source": "official_cr",
    "question": "Completez les paroles de la Marseillaise : \"Allons enfants de la patrie [...]\"",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O172",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Principes et valeurs",
    "source": "official_cr",
    "question": "En application de la liberte individuelle, quelle proposition est correcte ? Une personne peut :",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O173",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Principes et valeurs",
    "source": "official_cr",
    "question": "Concernant la pratique de la religion, quelle proposition est correcte ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O174",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Principes et valeurs",
    "source": "official_cr",
    "question": "En tant que parent, peut-on refuser que son enfant participe aux cours de sport a l'ecole car ils sont mixtes ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O175",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Principes et valeurs",
    "source": "official_cr",
    "question": "Quelle est la devise de la France ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O176",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Principes et valeurs",
    "source": "official_cr",
    "question": "La repudiation de sa femme est :",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O177",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Principes et valeurs",
    "source": "official_cr",
    "question": "Les impots permettent de financer les depenses publiques. Quelle proposition est correcte ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O178",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Principes et valeurs",
    "source": "official_cr",
    "question": "Peut-on bruler publiquement un drapeau francais ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O179",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Principes et valeurs",
    "source": "official_cr",
    "question": "Que fait l'Etat pour lutter contre les discriminations ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O180",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Principes et valeurs",
    "source": "official_cr",
    "question": "Que represente Marianne ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O181",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Principes et valeurs",
    "source": "official_cr",
    "question": "Qu'est-ce que la liberte d'association ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O182",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Principes et valeurs",
    "source": "official_cr",
    "question": "Qu'est-ce que la liberte ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O183",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Principes et valeurs",
    "source": "official_cr",
    "question": "Qu'est-ce que la Marseillaise ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O184",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Principes et valeurs",
    "source": "official_cr",
    "question": "Sur quel document peut-on voir Marianne ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O185",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Principes et valeurs",
    "source": "official_cr",
    "question": "Un employeur refuse d'embaucher des femmes dans son entreprise. Que dit la loi ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O186",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Principes et valeurs",
    "source": "official_cr",
    "question": "Une des valeurs de la devise republicaine est l'egalite. Qu'est-ce que cela signifie ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O187",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Principes et valeurs",
    "source": "official_cr",
    "question": "Quelle est la place de la langue francaise dans la Republique ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O188",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Principes et valeurs",
    "source": "official_cr",
    "question": "Quels sont des symboles officiels de la Republique francaise ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O189",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Principes et valeurs",
    "source": "official_cr",
    "question": "A-t-on le droit d'insulter publiquement quelqu'un parce qu'il est different (handicap, apparence physique, sexe...) ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O190",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Principes et valeurs",
    "source": "official_cr",
    "question": "Le regime de la France est :",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O191",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Principes et valeurs",
    "source": "official_cr",
    "question": "Pourquoi le principe de laicite doit-il etre respecte a l'ecole ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O192",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Principes et valeurs",
    "source": "official_cr",
    "question": "Une personne a-t-elle le droit de ne pas croire en une religion ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O193",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Principes et valeurs",
    "source": "official_cr",
    "question": "Quel droit est garanti par la laicite ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O194",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Principes et valeurs",
    "source": "official_cr",
    "question": "A l'ecole publique, qui peut porter des signes religieux tres visibles ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O195",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Principes et valeurs",
    "source": "official_cr",
    "question": "Selon le principe de laicite, que signifie la neutralite de l'Etat ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O196",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Principes et valeurs",
    "source": "official_cr",
    "question": "Que peut faire un usager du service public dans une mairie ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O197",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Principes et valeurs",
    "source": "official_cr",
    "question": "Qui doit respecter le principe de neutralite religieuse dans une prefecture ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O198",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Principes et valeurs",
    "source": "official_cr",
    "question": "La laicite impose-t-elle aux agents publics d'etre neutres vis-a-vis des usagers ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O199",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Principes et valeurs",
    "source": "official_cr",
    "question": "Que garantit le principe de laicite ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O200",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Principes et valeurs",
    "source": "official_cr",
    "question": "A-t-on le droit de changer de religion ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O201",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Principes et valeurs",
    "source": "official_cr",
    "question": "Que represente la laicite ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O202",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Principes et valeurs",
    "source": "official_cr",
    "question": "Qu'est ce qui est interdit par la Charte de la laicite a l'ecole ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O203",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Principes et valeurs",
    "source": "official_cr",
    "question": "Que dit l'article 1er de la Constitution francaise ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O204",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "official_cr",
    "question": "Qu'est-ce que l'Etat de droit ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O205",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "official_cr",
    "question": "Le president de la Republique a commis un crime. Quelle proposition est correcte ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O206",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "official_cr",
    "question": "La loi est l'expression de :",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O207",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "official_cr",
    "question": "Quelle est la duree du mandat du conseil municipal et du maire ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O208",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "official_cr",
    "question": "Que garantit l'Etat de droit ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O209",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "official_cr",
    "question": "Une personne peut-elle voter a la place d'une autre ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O210",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "official_cr",
    "question": "Est-ce que le vote est obligatoire ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O211",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "official_cr",
    "question": "A la fin de son mandat, le president de la Republique peut-il decider de rester au pouvoir ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O212",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "official_cr",
    "question": "Qui dirige l'action du Gouvernement ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O213",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "official_cr",
    "question": "Quelle est l'organisation administrative de la France ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O214",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "official_cr",
    "question": "Qu'est-ce que le pouvoir legislatif ? Le pouvoir :",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O215",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "official_cr",
    "question": "Pourquoi separer les trois pouvoirs dans une democratie ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O216",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "official_cr",
    "question": "Quel est le role du gouvernement ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O217",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "official_cr",
    "question": "Que se passe-t-il si un ministre ne respecte pas la loi ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O218",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "official_cr",
    "question": "Qui peut voter aux elections en France ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O219",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "official_cr",
    "question": "La separation des pouvoirs est un principe fondamental. Quels sont les trois pouvoirs concernes ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O220",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "official_cr",
    "question": "Est-ce que le president de la Republique a tous les pouvoirs ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O221",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "official_cr",
    "question": "Qui est le prefet ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O222",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "official_cr",
    "question": "Quelle condition est necessaire pour voter aux elections ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O223",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "official_cr",
    "question": "Qui dirige la commune ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O224",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "official_cr",
    "question": "Quel est le regime politique de la France aujourd'hui ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O225",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "official_cr",
    "question": "Qu'est-ce que l'Hotel de Matignon ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O226",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "official_cr",
    "question": "Quel est le role du president de la Republique ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O227",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "official_cr",
    "question": "Quel est le role du Premier ministre ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O228",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "official_cr",
    "question": "Qui est le chef du Gouvernement ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O229",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "official_cr",
    "question": "Combien y a-t-il de regions en France ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O230",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "official_cr",
    "question": "Quel est le role du Defenseur des droits ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O231",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "official_cr",
    "question": "Depuis quand l'euro est-elle la monnaie unique ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O232",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "official_cr",
    "question": "Quel est le role principal du departement ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O233",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "official_cr",
    "question": "Quel est le role principal des communes ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O234",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "official_cr",
    "question": "Combien de communes environ existe-t-il en France ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O235",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "official_cr",
    "question": "Quel traite concerne la construction de l'Union europeenne ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O236",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "official_cr",
    "question": "Quel Etat a quitte l'Union europeenne en 2020 ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O237",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "official_cr",
    "question": "Quelle est la devise de l'Union europeenne ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O238",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "official_cr",
    "question": "Quel est l'hymne de l'Union europeenne ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O239",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "official_cr",
    "question": "De quoi est compose le drapeau europeen ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O240",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "official_cr",
    "question": "De quelle couleur est le drapeau europeen ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O241",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "official_cr",
    "question": "En quelle annee le traite de Maastricht, qui marque la fondation de l'Union europeenne, a-t-il ete signe ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O242",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "official_cr",
    "question": "Ou est le siege du Parlement europeen ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O243",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "official_cr",
    "question": "Ou est le siege de la Commission europeenne ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O244",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "official_cr",
    "question": "Quel Etat n'est pas membre de l'Union europeenne ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O245",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "official_cr",
    "question": "Quand celebre-t-on la journee de l'Europe ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O246",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "official_cr",
    "question": "A quelle frequence les elections europeennes sont-elles organisees ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O247",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "official_cr",
    "question": "Quelle condition est necessaire pour voter aux elections europeennes ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O248",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Systeme institutionnel et politique",
    "source": "official_cr",
    "question": "Quel pays est un pays fondateur de l'Union europeenne ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O249",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Droits et devoirs",
    "source": "official_cr",
    "question": "A quelle liberte la PMA fait-elle reference ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O250",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Droits et devoirs",
    "source": "official_cr",
    "question": "Au nom de quoi l'Etat justifie-t-il la restriction des droits ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O251",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Droits et devoirs",
    "source": "official_cr",
    "question": "Concernant le droit de se marier, quelle proposition est correcte ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O252",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Droits et devoirs",
    "source": "official_cr",
    "question": "Est-il toujours possible de divorcer ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O253",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Droits et devoirs",
    "source": "official_cr",
    "question": "Laquelle de ces citations est inscrite dans la Declaration des Droits de l'homme et du Citoyen de 1789 ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O254",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Droits et devoirs",
    "source": "official_cr",
    "question": "Le recours a l'avortement est-il autorise ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O255",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Droits et devoirs",
    "source": "official_cr",
    "question": "Que contient la Constitution ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O256",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Droits et devoirs",
    "source": "official_cr",
    "question": "Que garantit la liberte de la presse ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O257",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Droits et devoirs",
    "source": "official_cr",
    "question": "Que prevoit la Charte de l'environnement ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O258",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Droits et devoirs",
    "source": "official_cr",
    "question": "Que signifie la dignite humaine ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O259",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Droits et devoirs",
    "source": "official_cr",
    "question": "Que signifie le droit de manifester ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O260",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Droits et devoirs",
    "source": "official_cr",
    "question": "Que signifie PMA ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O261",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Droits et devoirs",
    "source": "official_cr",
    "question": "Quel texte est le plus difficile a modifier ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O262",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Droits et devoirs",
    "source": "official_cr",
    "question": "Quelle liberte permet a une personne de croire en la religion de son choix ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O263",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Droits et devoirs",
    "source": "official_cr",
    "question": "Qu'est-ce que le droit de greve ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O264",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Droits et devoirs",
    "source": "official_cr",
    "question": "Qu'est-ce que la Constitution ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O265",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Droits et devoirs",
    "source": "official_cr",
    "question": "Qui peut demander a avorter ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O266",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Droits et devoirs",
    "source": "official_cr",
    "question": "Une femme majeure de nationalite francaise a-t-elle le droit de voter aux elections ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O267",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Droits et devoirs",
    "source": "official_cr",
    "question": "Concernant l'utilisation des reseaux sociaux, quelle proposition est correcte ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O268",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Droits et devoirs",
    "source": "official_cr",
    "question": "Jeter un megot par terre est :",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O269",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Droits et devoirs",
    "source": "official_cr",
    "question": "L'Etat peut-il limiter les droits et libertes ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O270",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Droits et devoirs",
    "source": "official_cr",
    "question": "Parmi ces actions, laquelle permet d'adopter une attitude respectueuse de l'environnement ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O271",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Droits et devoirs",
    "source": "official_cr",
    "question": "Quelle proposition constitue une obligation ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O272",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Droits et devoirs",
    "source": "official_cr",
    "question": "Pour quel motif peut-on limiter la liberte d'expression ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O273",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Droits et devoirs",
    "source": "official_cr",
    "question": "Pourquoi doit-on trier ses dechets ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O274",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Droits et devoirs",
    "source": "official_cr",
    "question": "Que doit faire une victime de violences ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O275",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Droits et devoirs",
    "source": "official_cr",
    "question": "Que doit-on faire face aux ordres des policiers ou gendarmes ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O276",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Droits et devoirs",
    "source": "official_cr",
    "question": "Quel est le role de la police ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O277",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Droits et devoirs",
    "source": "official_cr",
    "question": "Quel est un exemple d'assistance a personne en danger ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O278",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Droits et devoirs",
    "source": "official_cr",
    "question": "Quel exemple illustre une limitation de liberte pour proteger l'interet general ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O279",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Droits et devoirs",
    "source": "official_cr",
    "question": "Quelle est l'attitude a avoir lorsque qu'on est temoin de violences ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O280",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Droits et devoirs",
    "source": "official_cr",
    "question": "Quelle obligation concerne toutes les personnes residant en France quelle que soit leur nationalite ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O281",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Droits et devoirs",
    "source": "official_cr",
    "question": "Quelle proposition represente un exemple de crime ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O282",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Droits et devoirs",
    "source": "official_cr",
    "question": "Quelle proposition represente un exemple de delit ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O283",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Droits et devoirs",
    "source": "official_cr",
    "question": "Qui veille au maintien de l'ordre public ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O284",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Droits et devoirs",
    "source": "official_cr",
    "question": "S'agissant des dechets, quelle proposition est correcte ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O285",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "official_cr",
    "question": "Quel etait le surnom de Louis XIV ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O286",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "official_cr",
    "question": "Quel roi de France a ete execute pendant la Revolution francaise ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O287",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "official_cr",
    "question": "En quelle annee Napoleon Ier est-il devenu empereur ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O288",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "official_cr",
    "question": "Lequel de ces personnages a un lien avec la Republique francaise ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O289",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "official_cr",
    "question": "De quand date l'appel a la resistance du general de Gaulle ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O290",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "official_cr",
    "question": "Pourquoi la Shoah est-elle etudiee a l'ecole ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O291",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "official_cr",
    "question": "Quel pays a ete colonise par la France ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O292",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "official_cr",
    "question": "Depuis quand les Francais elisent-ils le president de la Republique au suffrage universel direct ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O293",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "official_cr",
    "question": "Quelle est la premiere etape de la construction europeenne en 1951 ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O294",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "official_cr",
    "question": "Durant le mandat de quel president la peine de mort a-t-elle ete abolie ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O295",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "official_cr",
    "question": "Quel regime politique a ete mis en place pendant la Revolution francaise en 1792 ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O296",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "official_cr",
    "question": "Qui etait une figure de la Resistance francaise pendant la Seconde Guerre mondiale ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O297",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "official_cr",
    "question": "En 1944, qu'est-ce qui a change pour les femmes ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O298",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "official_cr",
    "question": "Quelle organisation internationale a ete creee en 1945 apres la Seconde Guerre mondiale ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O299",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "official_cr",
    "question": "Quelle peine a ete supprimee en 1981 ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O300",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "official_cr",
    "question": "En quelle annee l'euro est-elle devenue la monnaie utilisee en France ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O301",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "official_cr",
    "question": "En quelle annee a commence la Premiere Guerre mondiale ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O302",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "official_cr",
    "question": "Ou a eu lieu le debarquement en 1944 ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O303",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "official_cr",
    "question": "Quel continent a ete le plus concerne par la decolonisation francaise apres la Seconde Guerre mondiale ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O304",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "official_cr",
    "question": "Que fete-t-on le 8 mai ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O305",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "official_cr",
    "question": "Quelle mer ou ocean borde la France metropolitaine ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O306",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "official_cr",
    "question": "Quel pays a une frontiere terrestre avec la France metropolitaine ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O307",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "official_cr",
    "question": "Quelle ville francaise est un port maritime ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O308",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "official_cr",
    "question": "Quelle mer se situe entre la France et l'Angleterre ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O309",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "official_cr",
    "question": "Qu'est ce que la France d'outre-mer ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O310",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "official_cr",
    "question": "Quelle chaine de montagnes est situee entre la France et l'Espagne ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O311",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "official_cr",
    "question": "Quelle ile francaise se trouve dans l'ocean Indien ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O312",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "official_cr",
    "question": "Quelle est la population approximative de la France en 2025 ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O313",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "official_cr",
    "question": "Quel fleuve traverse Paris ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O314",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "official_cr",
    "question": "Lequel de ces pays partage des frontieres terrestres avec la France ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O315",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "official_cr",
    "question": "Quel pays a une frontiere avec la France metropolitaine au nord-est ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O316",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "official_cr",
    "question": "Ou se trouvent les principales activites economiques en France ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O317",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "official_cr",
    "question": "Parmi ces pays, lequel attire le plus de visiteurs chaque annee ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O318",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "official_cr",
    "question": "Ou habite la majorite des Francais ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O319",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "official_cr",
    "question": "Quelle region est la plus peuplee ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O320",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "official_cr",
    "question": "Quelle ville francaise fait partie des 10 plus grandes metropoles du pays ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O321",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "official_cr",
    "question": "Lequel de ces departements de France est le plus touristique ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O322",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "official_cr",
    "question": "Quand peut-on visiter gratuitement des lieux culturels en France ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O323",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "official_cr",
    "question": "Combien de personnes parlent francais dans le monde ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O324",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "official_cr",
    "question": "Qui etait Marguerite Yourcenar ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O325",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "official_cr",
    "question": "Quel peintre est francais ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O326",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "official_cr",
    "question": "Quel musee est situe a Paris ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O327",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "official_cr",
    "question": "Qui etait Auguste Rodin ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O328",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "official_cr",
    "question": "Quel est le classement de la langue francaise parmi les langues les plus parlees dans le monde ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O329",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "official_cr",
    "question": "Quelle cathedrale celebre a ete en partie detruite par un incendie en 2019 ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O330",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "official_cr",
    "question": "Qui etait une ecrivaine francaise celebre ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O331",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "official_cr",
    "question": "Qui etait un celebre musicien francais ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O332",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "official_cr",
    "question": "Qui etait Auguste Renoir ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O333",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Histoire, geographie et culture",
    "source": "official_cr",
    "question": "Quelle fete est francaise ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O334",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "official_cr",
    "question": "Quel mariage est reconnu par l'Etat ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O335",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "official_cr",
    "question": "Aupres de quelle institution les parents peuvent-ils inscrire leur enfant a l'ecole publique ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O336",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "official_cr",
    "question": "En cas de divorce, qui exerce l'autorite parentale ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O337",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "official_cr",
    "question": "Quelle aide permet aux personnes qui ont des difficultes financieres d'avoir un avocat ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O338",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "official_cr",
    "question": "Ou faut-il declarer la naissance d'un enfant ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O339",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "official_cr",
    "question": "Quelle est l'une des conditions pour passer l'examen du permis de conduire ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O340",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "official_cr",
    "question": "Un bail locatif est valide s'il est :",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O341",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "official_cr",
    "question": "Ou peut-on deposer un lave-vaisselle casse ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O342",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "official_cr",
    "question": "Quel numero d'urgence permet d'appeler la police ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O343",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "official_cr",
    "question": "Concernant l'acces aux soins, quelle proposition est correcte ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O344",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "official_cr",
    "question": "A qui est accessible la contraception ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O345",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "official_cr",
    "question": "Qu'est-ce que le principe de confidentialite dans le domaine de la sante ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O346",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "official_cr",
    "question": "L'inscription a l'Assurance maladie est :",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O347",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "official_cr",
    "question": "Qui peut demander un conge parental d'education ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O348",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "official_cr",
    "question": "Quelles sont les affaires traitees par le conseil de prud'hommes ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O349",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "official_cr",
    "question": "Travailler sans etre declare est :",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O350",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "official_cr",
    "question": "Lorsqu'un employeur veut qu'un salarie travaille plus longtemps que la duree prevue dans le contrat de travail :",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O351",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "official_cr",
    "question": "Quelle est la mission de France Travail ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O352",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "official_cr",
    "question": "Dans une entreprise, le droit syndical permet :",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O353",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "official_cr",
    "question": "Dans une entreprise, le droit de greve autorise :",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O354",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "official_cr",
    "question": "Quelles sont les conditions pour toucher les allocations chomage ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O355",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "official_cr",
    "question": "Qu'est-ce que l'ecole maternelle ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O356",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "official_cr",
    "question": "Comment s'appelle le diplome passe par les eleves a la fin du college ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O357",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "official_cr",
    "question": "Les parents d'eleve ont le droit de :",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O358",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "official_cr",
    "question": "Qui peut manger a la cantine scolaire ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O359",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "official_cr",
    "question": "A quel age commence l'instruction obligatoire des enfants ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O360",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "official_cr",
    "question": "Quel est l'age de la majorite ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O361",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "official_cr",
    "question": "A l'ecole, il est interdit aux parents de :",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O362",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "official_cr",
    "question": "Quel motif d'absence est accepte par l'ecole ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O363",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "official_cr",
    "question": "Des parents ne respectent pas l'obligation d'instruction pour leurs enfants. Quelle sanction maximale risquent-ils ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O364",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "official_cr",
    "question": "Quand ont lieu les vacances scolaires de Noel ?",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  },
  {
    "id": "O365",
    "type": "knowledge_open",
    "tracks": [
      "cr"
    ],
    "theme": "Vivre dans la societe francaise",
    "source": "official_cr",
    "question": "A l'ecole, un enfant en situation de handicap :",
    "options": [
      "Je connais la reponse",
      "A revoir"
    ],
    "answer": null,
    "explanation": "Question officielle publique (intitule). La correction QCM officielle n'est pas publiee."
  }
];

export const QUESTION_BANK = [...BASE_QUESTION_BANK, ...OFFICIAL_PROMPT_BANK];
