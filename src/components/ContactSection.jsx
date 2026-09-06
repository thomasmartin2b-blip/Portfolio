import { Mail, Github, Linkedin } from "lucide-react";
import { LINKS } from "../data/projects.js";

export default function ContactSection({ t }) {
  return (
    <footer id="contact" className="px-6 sm:px-16 py-24 scroll-mt-20" style={{ backgroundColor: "#0B0C0E" }}>
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-white text-5xl sm:text-7xl font-black leading-[0.9] mb-10">{t.title}</h2>
        <div className="flex flex-wrap gap-4 font-body">
          <a href={`mailto:${LINKS.email}`} className="flex items-center gap-2 px-5 py-3 rounded-full text-sm" style={{ backgroundColor: "#FFFFFF", color: "#0B0C0E" }}>
            <Mail className="w-4 h-4" aria-hidden="true" /> {LINKS.email}
          </a>
          <a href={LINKS.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-3 rounded-full border border-white/30 text-white text-sm hover:border-white transition-colors">
            <Github className="w-4 h-4" aria-hidden="true" /> GitHub
          </a>
          <a href={LINKS.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-3 rounded-full border border-white/30 text-white text-sm hover:border-white transition-colors">
            <Linkedin className="w-4 h-4" aria-hidden="true" /> LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
