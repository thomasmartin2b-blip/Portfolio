import { lazy, Suspense, useEffect, useState } from "react";
import { getTheme, scrollToId } from "./theme.js";
import { useTranslation } from "./hooks/useTranslation.js";
import { PROJECTS } from "./data/projects.js";
import NavBar from "./components/NavBar.jsx";
import Hero from "./components/Hero.jsx";
import AboutSection from "./components/AboutSection.jsx";
import SkillsSection from "./components/SkillsSection.jsx";
import ProjectSection from "./components/ProjectSection.jsx";
import ParcoursSection from "./components/ParcoursSection.jsx";
import ContactSection from "./components/ContactSection.jsx";

// Le quiz n'est utile qu'en bas de page : on le charge a la demande
// plutot que de l'inclure dans le JS initial de la page.
const QuizGame = lazy(() => import("./components/QuizGame.jsx"));

export default function App() {
  // Etat global du site : langue, mode sombre, animation d'entree du hero
  const [loaded, setLoaded] = useState(false);
  const [lang, setLang] = useState("fr");
  const [dark, setDark] = useState(false);
  const theme = getTheme(dark);
  const { content: t, loading: translating } = useTranslation(lang);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 80);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="theme-fade-self" style={{ backgroundColor: theme.bg, color: theme.text }}>
      {/* Lien d'accessibilite, invisible sauf navigation au clavier */}
      <a
        href="#contenu"
        onClick={(e) => scrollToId(e, "contenu")}
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-white focus:text-[#0B0C0E] focus:px-4 focus:py-2 focus:rounded-full"
      >
        {t.skipLink}
      </a>

      <NavBar lang={lang} setLang={setLang} dark={dark} setDark={setDark} theme={theme} labels={t.nav} translating={translating} />

      <Hero t={t.hero} loaded={loaded} />

      <main id="contenu">
        <AboutSection t={t.about} theme={theme} />
        <SkillsSection t={t.skills} theme={theme} />

        {/* Une section par projet, generee a partir de PROJECTS */}
        <div id="projets">
          {PROJECTS.map((project, i) => (
            <ProjectSection key={project.name} project={project} index={i} t={t.projects} />
          ))}
        </div>

        <ParcoursSection t={t.parcours} theme={theme} />
        <Suspense fallback={null}>
          <QuizGame t={t.quiz} theme={theme} lang={lang} />
        </Suspense>
      </main>

      <ContactSection t={t.contact} />
    </div>
  );
}
