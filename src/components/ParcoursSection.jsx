import { PALETTE, PALETTE_TEXT } from "../theme.js";

export default function ParcoursSection({ t, theme }) {
  return (
    <section id="parcours" className="theme-fade max-w-3xl mx-auto px-6 sm:px-0 py-24 scroll-mt-20">
      <h2 className="font-display text-4xl sm:text-5xl font-black mb-10">{t.title}</h2>
      <ol className="list-none space-y-8 border-l pl-6" style={{ borderColor: theme.border }}>
        {t.steps.map((step, i) => (
          <li key={step.title} className="relative">
            <span
              className="absolute rounded-full"
              style={{ left: "-31px", top: "6px", width: "12px", height: "12px", backgroundColor: PALETTE[i % PALETTE.length] }}
              aria-hidden="true"
            />
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h3 className="font-display text-xl font-black">{step.title}</h3>
              <span
                className="font-body text-xs font-semibold px-2 py-0.5 rounded-full"
                style={{ color: PALETTE_TEXT[i % PALETTE_TEXT.length], backgroundColor: `${PALETTE[i % PALETTE.length]}1A` }}
              >
                {step.date}
              </span>
            </div>
            {step.detail.map((line) => (
              <p key={line} className="font-body text-sm mt-1" style={{ color: theme.textMuted }}>
                {line}
              </p>
            ))}
          </li>
        ))}
      </ol>
    </section>
  );
}
