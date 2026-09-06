// Fond du hero : une seule image de ciel étoilé, affichée deux fois côte à côte
// dans un conteneur deux fois plus large que l'écran, qui glisse vers la gauche
// en continu (animation "sky-drift" définie dans index.css). Comme les deux
// copies sont identiques, quand la première sort de l'écran la seconde est déjà
// à sa place : ça donne un défilement infini sans coupure visible.
export default function Starfield() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div className="sky-drift" style={{ display: "flex", width: "200%", height: "100%" }}>
        <img src="/images/starfield.jpg" alt="" style={{ width: "50%", height: "100%", objectFit: "cover" }} />
        <img src="/images/starfield.jpg" alt="" style={{ width: "50%", height: "100%", objectFit: "cover" }} />
      </div>
    </div>
  );
}
