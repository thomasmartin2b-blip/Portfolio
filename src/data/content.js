// Tout le texte du site, en français. C'est la SEULE langue écrite en dur :
// EN / DE / ZH sont générées à la demande par l'IA (voir src/hooks/useTranslation.js),
// qui traduit cet objet en entier tout en gardant exactement la même structure.
// -> Pour changer un texte du site, c'est ici et nulle part ailleurs.

export const content = {
  skipLink: "Aller au contenu",

  nav: {
    apropos: "À propos",
    competences: "Compétences",
    projets: "Projets",
    parcours: "Parcours",
    quiz: "Quiz",
    contact: "Contact",
  },

  hero: {
    eyebrow: "Développeur web Junior — Full-Stack",
    tagline: "Développeur full-stack junior, toujours en quête de savoir et de nouveaux défis à relever.",
  },

  about: {
    title: "À propos",
    paragraphs: [
      "Thomas Martin, développeur web débutant mais animé par une grande curiosité — j'aime comprendre comment les choses fonctionnent et apprendre en continu.",
      "Après 4 ans passés au CERN, à Genève, dans le domaine de la logistique, j'ai eu envie d'explorer des horizons plus stimulants. Le développement m'ayant toujours intrigué, c'est donc naturellement que je me suis inscrit à la formation OpenClassrooms.",
      "Je maîtrise JavaScript, React et l'écosystème Node.js / Express / MongoDB — du DOM manipulé en vanilla JS jusqu'à la construction d'API REST sécurisées.",
      "Je travaille avec rigueur et autonomie, en accordant une attention particulière à la qualité du code et à l'expérience utilisateur.",
      "Je suis aujourd'hui à la recherche d'une première expérience dans le développement web, pour continuer à apprendre et progresser aux côtés de professionnels du secteur.",
    ],
  },

  skills: {
    title: "Compétences",
    categories: { "Front-end": "Front-end", "Back-end": "Back-end", Outils: "Outils" },
    descriptions: {
      JavaScript: "Langage",
      React: "Librairie UI",
      HTML5: "Structure",
      Sass: "Styles",
      "Node.js": "Runtime",
      Express: "Serveur",
      MongoDB: "Base de données",
      JWT: "Authentification",
      Git: "Versioning",
      GitHub: "Hébergement",
      Notion: "Organisation",
      Figma: "Maquettage",
    },
  },

  projects: {
    codeLink: "Voir le code",
    demoLink: "Démo",
    detailShow: "Voir le détail du projet",
    detailHide: "Réduire",
    labelObjectifs: "Objectifs — ",
    labelCompetences: "Compétences développées — ",
    labelResultats: "Résultats — ",
    screenshotAlt: "Capture d'écran du site",
    items: {
      Kasa: {
        subtitle: "Location immobilière",
        context: "Projet de formation visant à reconstruire le front-end d'une plateforme de location de logements entre particuliers.",
        objectifs: "Reproduire fidèlement une maquette Figma en composants réutilisables, avec une navigation fluide entre les annonces.",
        competences: "Découpage en composants (Slideshow, Collapse, Card, Banner), routage avec React Router, gestion du responsive avec Sass.",
        resultats: "Application fonctionnelle et responsive, du mobile au desktop, avec une base de composants réutilisable pour d'autres écrans.",
      },
      "Mon Vieux Grimoire": {
        subtitle: "Notation de livres",
        context: "Développement d'une API REST complète pour un site de notation de livres.",
        objectifs: "Construire une architecture MVC propre, sécuriser les échanges et gérer l'upload d'images de couvertures.",
        competences: "Authentification JWT, upload et optimisation d'images (Multer + Sharp, conversion WebP), prévention des injections et rate-limiting.",
        resultats: "API stable avec système de notation et calcul de moyenne, bugs de CORS et de dépréciation Mongoose résolus, présentée en soutenance.",
      },
    },
  },

  parcours: {
    title: "Parcours",
    steps: [
      { title: "Bac ES", date: "2018", detail: ["Économie et Social"] },
      { title: "BTS NDRC", date: "2020", detail: ["Négociation et Digitalisation de la Relation Client"] },
      { title: "Logistique – CERN", date: "2020 à 2024", detail: ["Description : Travaux sur expériences nucléaires", "Expérience professionnelle avant la reconversion"] },
      { title: "Reconversion", date: "2026", detail: ["Décision de se réorienter vers le développement web"] },
      { title: "Formation développeur web", date: "2026", detail: ["OpenClassrooms"] },
    ],
  },

  quiz: {
    title: "T'es cultivé ?",
    subtitle: "Une question, une chance. Rate et tu vas le regretter.",
    launch: "Lancer une question",
    thinking: "Réflexion…",
    placeholder: "Ta réponse…",
    validate: "Valider",
    checking: "Vérification…",
    correctLabel: "Bonne réponse : ",
    next: "Question suivante",
  },

  contact: {
    title: "On en parle ?",
  },
};
