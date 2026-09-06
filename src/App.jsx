import { useEffect, useState } from "react";
import { getTheme, scrollToId } from "./theme.js";
import { useTranslation } from "./hooks/useTranslation.js";
import { PROJECTS } from "./data/projects.js";
import NavBar from "./components/NavBar.jsx";
import Hero from "./components/Hero.jsx";
import AboutSection from "./components/AboutSection.jsx";
import SkillsSection from "./components/SkillsSection.jsx";
import ProjectSection from "./components/ProjectSection.jsx";
import ParcoursSection from "./components/ParcoursSection.jsx";
import QuizGame from "./components/QuizGame.jsx";
import ContactSection from "./components/ContactSection.jsx";

export default function App() {
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

        <div id="projets">
          {PROJECTS.map((project, i) => (
            <ProjectSection key={project.name} project={project} index={i} t={t.projects} />
          ))}
        </div>

        <ParcoursSection t={t.parcours} theme={theme} />
        <QuizGame t={t.quiz} theme={theme} lang={lang} />
      </main>

      <ContactSection t={t.contact} />
    </div>
  );
}
