export default function AboutSection({ t, theme }) {
  return (
    <section id="apropos" className="theme-fade max-w-2xl mx-auto px-6 sm:px-0 py-24 scroll-mt-20">
      <h2 className="font-display text-4xl sm:text-5xl font-black mb-8">{t.title}</h2>
      <div className="font-body text-[17px] leading-relaxed space-y-5" style={{ color: theme.textBody }}>
        {t.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </section>
  );
}
