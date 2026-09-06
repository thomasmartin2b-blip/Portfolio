// Simule une fenêtre de navigateur autour de la capture d'écran d'un projet.
// Si `image` est fourni, affiche la vraie capture d'écran ; sinon affiche un
// aperçu abstrait de la couleur du projet (utile pour un nouveau projet ajouté
// avant d'avoir sa capture d'écran).
export default function BrowserMock({ color, image, alt }) {
  return (
    <div className="rounded-xl bg-white/95 shadow-2xl overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-black/5">
        <span className="w-2.5 h-2.5 rounded-full bg-black/15" />
        <span className="w-2.5 h-2.5 rounded-full bg-black/15" />
        <span className="w-2.5 h-2.5 rounded-full bg-black/15" />
        <span className="ml-3 h-5 rounded-full bg-black/5 w-1/2" />
      </div>
      {image ? (
        <div className="overflow-hidden">
          <img src={image} alt={alt} className="w-full h-auto block" />
        </div>
      ) : (
        <div className="p-4">
          <div className="rounded-lg" style={{ height: 140, backgroundColor: color }} />
        </div>
      )}
    </div>
  );
}
