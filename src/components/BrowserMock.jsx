// Fenêtre de navigateur factice autour de la capture d'écran d'un projet
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
          <img src={image} alt={alt} width={1100} height={600} className="w-full h-auto block" />
        </div>
      ) : (
        <div className="p-4">
          <div className="rounded-lg" style={{ height: 140, backgroundColor: color }} />
        </div>
      )}
    </div>
  );
}
