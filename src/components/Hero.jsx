import Starfield from "./Starfield.jsx";

export default function Hero({ t, loaded }) {
  return (
    <header
      id="accueil"
      className="relative px-6 sm:px-16 py-20 overflow-hidden flex items-center"
      style={{ backgroundColor: "#0B0C0E", minHeight: "100vh" }}
    >
      <div style={{ opacity: loaded ? 1 : 0, transition: "opacity 1000ms" }}>
        <Starfield />
      </div>
      <div className="max-w-5xl mx-auto relative w-full">
        <h1
          className="font-display text-white font-black tracking-tight transition-all duration-700 delay-150"
          style={{ opacity: loaded ? 1 : 0, transform: loaded ? "translateY(0)" : "translateY(20px)", lineHeight: 1.05, textAlign: "left" }}
        >
          <span style={{ display: "block", fontSize: "clamp(3.5rem, 14vw, 10rem)" }}>Thomas</span>
          <span style={{ display: "block", fontSize: "clamp(3.5rem, 14vw, 10rem)" }}>Martin</span>
        </h1>
        <p className="font-body text-sm tracking-widest uppercase text-white/50 mt-10 transition-opacity duration-700 delay-300" style={{ opacity: loaded ? 1 : 0 }}>
          {t.eyebrow}
        </p>
        <p className="font-body text-lg sm:text-xl text-white/70 max-w-xl mt-3 leading-relaxed transition-opacity duration-700 delay-[450ms]" style={{ opacity: loaded ? 1 : 0 }}>
          {t.tagline}
        </p>
      </div>
    </header>
  );
}
