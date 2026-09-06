import { useState } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import { scrollToId, scrollToPosition } from "../theme.js";
import { LANGS, LANG_LABEL, LANG_NAME } from "../hooks/useTranslation.js";

const NAV_IDS = ["apropos", "competences", "projets", "parcours", "quiz", "contact"];

export default function NavBar({ lang, setLang, dark, setDark, theme, labels, translating }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const items = NAV_IDS.map((id) => labels[id]);

  const closeAndScroll = (e, id) => {
    e.preventDefault();
    setMobileOpen(false);
    requestAnimationFrame(() => scrollToPosition(id));
  };

  return (
    <nav
      aria-label="Navigation principale"
      className="sticky top-0 z-40 backdrop-blur border-b px-4 sm:px-8"
      style={{ backgroundColor: `${theme.bg}E6`, borderColor: theme.border }}
    >
      <div className="max-w-5xl mx-auto flex items-center h-14 gap-4">
        <button
          type="button"
          onClick={(e) => scrollToId(e, "accueil")}
          className="font-display text-lg shrink-0"
          style={{ color: theme.text }}
          aria-label="Thomas Martin — retour en haut"
        >
          TM
        </button>

        {/* Liens de navigation — visibles à partir de md, cachés en dessous (menu hamburger) */}
        <ul className="hidden md:flex gap-5 font-body text-sm whitespace-nowrap overflow-x-auto flex-1" style={{ color: theme.textMuted }}>
          {NAV_IDS.map((id, i) => (
            <li key={id}>
              <a href={`#${id}`} onClick={(e) => scrollToId(e, id)} className="hover:opacity-100 transition-opacity" style={{ opacity: 0.85 }}>
                {items[i]}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex-1 md:hidden" />

        <div className="flex items-center gap-2 shrink-0">
          <div className="flex items-center rounded-full border overflow-hidden" style={{ borderColor: theme.border }}>
            {LANGS.map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                disabled={translating}
                aria-pressed={lang === l}
                aria-label={`Langue : ${LANG_NAME[l]}`}
                className="font-body text-[11px] font-semibold px-2 py-1.5 transition-colors disabled:opacity-50"
                style={{
                  backgroundColor: lang === l ? theme.text : "transparent",
                  color: lang === l ? theme.bg : theme.textMuted,
                }}
              >
                {LANG_LABEL[l]}
              </button>
            ))}
          </div>
          <button
            onClick={() => setDark((d) => !d)}
            aria-label={dark ? "Passer en mode clair" : "Passer en mode sombre"}
            className="w-8 h-8 rounded-full border flex items-center justify-center shrink-0"
            style={{ borderColor: theme.border, color: theme.text }}
          >
            {dark ? <Sun className="w-4 h-4" aria-hidden="true" /> : <Moon className="w-4 h-4" aria-hidden="true" />}
          </button>

          {/* Bouton hamburger — visible uniquement en dessous de md */}
          <button
            onClick={() => setMobileOpen((o) => !o)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-menu"
            aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
            className="md:hidden w-8 h-8 rounded-full border flex items-center justify-center shrink-0"
            style={{ borderColor: theme.border, color: theme.text }}
          >
            {mobileOpen ? <X className="w-4 h-4" aria-hidden="true" /> : <Menu className="w-4 h-4" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Panneau du menu mobile */}
      {mobileOpen && (
        <div id="mobile-nav-menu" className="md:hidden border-t" style={{ borderColor: theme.border, backgroundColor: theme.bg }}>
          <ul className="max-w-5xl mx-auto flex flex-col px-4 py-2 font-body text-sm" style={{ color: theme.textMuted }}>
            {NAV_IDS.map((id, i) => (
              <li key={id} className="border-b last:border-b-0" style={{ borderColor: theme.border }}>
                <a href={`#${id}`} onClick={(e) => closeAndScroll(e, id)} className="block py-3">
                  {items[i]}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
