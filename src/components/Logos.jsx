import { Github } from "lucide-react";

// Logos dessinés en SVG inline — aucune police ni image externe, donc garantis de s'afficher.
export function LogoReact({ color }) {
  return (
    <svg viewBox="0 0 24 24" width="32" height="32" style={{ flexShrink: 0 }} aria-hidden="true">
      <circle cx="12" cy="12" r="2.2" fill={color} />
      <g fill="none" stroke={color} strokeWidth="1.4">
        <ellipse cx="12" cy="12" rx="10" ry="4.2" />
        <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)" />
      </g>
    </svg>
  );
}

export function LogoNode({ color }) {
  return (
    <svg viewBox="0 0 24 24" width="32" height="32" style={{ flexShrink: 0 }} aria-hidden="true">
      <polygon points="12,2 21,7 21,17 12,22 3,17 3,7" fill={color} />
    </svg>
  );
}

export function LogoMongo({ color }) {
  return (
    <svg viewBox="0 0 24 24" width="32" height="32" style={{ flexShrink: 0 }} aria-hidden="true">
      <path d="M12 2c4 3 6 7 6 11a6 6 0 0 1-12 0c0-4 2-8 6-11z" fill={color} />
      <line x1="12" y1="13" x2="12" y2="22" stroke={color} strokeWidth="1" />
    </svg>
  );
}

export function LogoGit({ color }) {
  return (
    <svg viewBox="0 0 24 24" width="32" height="32" style={{ flexShrink: 0 }} aria-hidden="true">
      <line x1="6" y1="4" x2="18" y2="20" stroke={color} strokeWidth="2" />
      <rect x="3.5" y="2" width="5" height="5" rx="1" transform="rotate(45 6 4.5)" fill={color} />
      <rect x="15.5" y="17.5" width="5" height="5" rx="1" transform="rotate(45 18 20)" fill={color} />
    </svg>
  );
}

// Associe le nom stocké dans data/stack.js au composant réel.
export const SVG_LOGOS = { LogoReact, LogoNode, LogoMongo, LogoGit };
export const LUCIDE_ICONS = { Github };
