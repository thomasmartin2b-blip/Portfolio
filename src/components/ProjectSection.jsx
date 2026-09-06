import { useState } from "react";
import { Github, ArrowUpRight, ChevronDown } from "lucide-react";
import { PALETTE } from "../theme.js";
import { PROJECT_IMAGES } from "../data/projects.js";
import BrowserMock from "./BrowserMock.jsx";

export default function ProjectSection({ project, index, t }) {
  const text = t.items[project.name];
  const [open, setOpen] = useState(false);
  const color = PALETTE[index % PALETTE.length];
  const detailId = `detail-${index}`;

  return (
    <section
      id={`projet-${index}`}
      className="relative py-24 px-6 sm:px-16 scroll-mt-20 flex items-center"
      style={{ backgroundColor: color, minHeight: "100vh" }}
    >
      <div className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-12 items-start w-full">
        <div>
          <span className="font-display text-white text-lg tracking-widest">{String(index + 1).padStart(2, "0")}</span>
          <h2 className="font-display text-white text-6xl sm:text-7xl font-black leading-[0.9] mt-2 mb-1">{project.name}</h2>
          <p className="font-body text-white text-lg mb-8">{text.subtitle}</p>

          <p className="font-body text-white text-lg leading-relaxed mb-8">{text.context}</p>

          <div className="flex flex-wrap gap-2 mb-8">
            {project.stack.map((s) => (
              <span key={s} className="font-body text-xs px-3 py-1.5 rounded-full border border-white/30 text-white">
                {s}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-6 font-body text-white text-sm mb-6">
            <a href={project.repo} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:opacity-70 transition-opacity underline underline-offset-4">
              <Github className="w-4 h-4" aria-hidden="true" /> {t.codeLink}
            </a>
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:opacity-70 transition-opacity underline underline-offset-4">
                {t.demoLink} <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </a>
            )}
          </div>

          <button
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls={detailId}
            className="flex items-center gap-1.5 font-body text-sm text-white hover:opacity-80 transition-opacity"
          >
            {open ? t.detailHide : t.detailShow}
            <ChevronDown className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`} aria-hidden="true" />
          </button>

          {open && (
            <div id={detailId} className="mt-6 space-y-4 font-body text-white text-sm leading-relaxed border-t border-white/20 pt-6">
              <p><strong>{t.labelObjectifs}</strong>{text.objectifs}</p>
              <p><strong>{t.labelCompetences}</strong>{text.competences}</p>
              <p><strong>{t.labelResultats}</strong>{text.resultats}</p>
            </div>
          )}
        </div>

        <BrowserMock color="#ffffff" image={PROJECT_IMAGES[project.name]} alt={`${t.screenshotAlt} ${project.name}`} />
      </div>
    </section>
  );
}
