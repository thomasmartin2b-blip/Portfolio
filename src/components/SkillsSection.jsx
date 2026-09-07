import { STACK } from "../data/stack.js";
import { SVG_LOGOS, LUCIDE_ICONS } from "./Logos.jsx";
import { PALETTE_TEXT } from "../theme.js";

const CATEGORY_ORDER = ["Front-end", "Back-end", "Outils"];

export default function SkillsSection({ t, theme }) {
  return (
    <section id="competences" className="theme-fade px-6 sm:px-16 py-24 scroll-mt-20" style={{ backgroundColor: theme.bgAlt }}>
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display text-4xl sm:text-5xl font-black mb-10">{t.title}</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 items-start">
          {STACK.map((tech) => (
            <StackCard key={tech.name} tech={tech} t={t} theme={theme} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StackCard({ tech, t, theme }) {
  const LucideIcon = tech.type === "lucide" ? LUCIDE_ICONS[tech.iconName] : null;
  const SvgIcon = tech.type === "svg" ? SVG_LOGOS[tech.svgName] : null;
  const categoryColor = PALETTE_TEXT[CATEGORY_ORDER.indexOf(tech.category) % PALETTE_TEXT.length];

  return (
    <div
      className="rounded-xl border p-5 flex flex-col items-center justify-center text-center gap-3 min-h-[168px]"
      style={{ backgroundColor: theme.card, borderColor: theme.border }}
    >
      {tech.type === "lucide" ? (
        <LucideIcon className="w-8 h-8 shrink-0" style={{ color: tech.color || theme.text }} aria-hidden="true" />
      ) : tech.type === "svg" ? (
        <SvgIcon color={tech.color} />
      ) : (
        <div
          className="rounded-md flex items-center justify-center font-display text-xs font-black shrink-0 whitespace-nowrap"
          style={{ background: tech.bg, color: tech.color, height: 32, minWidth: 32, padding: "0 6px" }}
        >
          {tech.label}
        </div>
      )}
      <div>
        <h3 className="font-display text-lg font-black leading-none">{tech.name}</h3>
        <p className="font-body text-sm mt-1" style={{ color: theme.textMuted }}>
          {t.descriptions[tech.name]}
        </p>
      </div>
      <span className="font-body text-xs uppercase tracking-widest font-semibold w-fit" style={{ color: categoryColor }}>
        {t.categories[tech.category]}
      </span>
    </div>
  );
}
