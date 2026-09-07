// Fond du hero : l'image est affichée deux fois côte à côte et défile en
// boucle vers la gauche, ce qui donne un défilement infini sans coupure.
export default function Starfield() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div className="sky-drift" style={{ display: "flex", width: "200%", height: "100%" }}>
        <img src="/images/starfield.jpg" alt="" width={1920} height={1080} style={{ width: "50%", height: "100%", objectFit: "cover" }} />
        <img src="/images/starfield.jpg" alt="" width={1920} height={1080} style={{ width: "50%", height: "100%", objectFit: "cover" }} />
      </div>
    </div>
  );
}
