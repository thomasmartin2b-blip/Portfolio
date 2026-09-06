// Palette qui tourne automatiquement (projets, parcours, quiz).
export const PALETTE = ["#2542F5", "#B33A1D", "#0E8F6E", "#7C3AED", "#D4A017"];

// Variante foncée de la palette, utilisée uniquement quand la couleur sert de texte
// sur fond clair (garantit un contraste WCAG AA ≥ 4.5:1, contrairement aux teintes
// vives ci-dessus, qui sont pensées pour du texte blanc sur fond coloré).
export const PALETTE_TEXT = ["#1D3FD1", "#8C2E15", "#0B6E56", "#5B21B6", "#8A5A0C"];

export function getTheme(dark) {
  return dark
    ? { bg: "#0B0C0E", bgAlt: "#17181C", card: "#1C1D22", border: "#2A2B30", text: "#F5F4F1", textMuted: "#9A9CA3", textBody: "#D5D6DA" }
    : { bg: "#FFFFFF", bgAlt: "#F5F4F1", card: "#FFFFFF", border: "#ECEBE6", text: "#0B0C0E", textMuted: "#6B6D76", textBody: "#3A3B42" };
}

const NAV_HEIGHT = 56; // hauteur de la barre de nav (h-14)

export function scrollToPosition(id) {
  if (id === "accueil") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT;
  window.scrollTo({ top, behavior: "smooth" });
}

export function scrollToId(e, id) {
  e.preventDefault();
  scrollToPosition(id);
}
