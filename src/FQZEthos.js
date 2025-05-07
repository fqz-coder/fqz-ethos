import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

export default function FQZEthos() {
  const controls = useAnimation();
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    controls.start({ opacity: 1, y: 0, transition: { duration: 1 } });
  }, [controls]);

  const toggleTheme = () => setIsDark(!isDark);
  const bgClass = isDark ? "bg-black text-white" : "bg-white text-black";
  const accentText = isDark ? "text-cyan-300" : "text-blue-700";
  const sectionBg = isDark ? "bg-[#0F1E2F]" : "bg-gray-100";

  return (
    <main className={`font-sans scroll-smooth ${bgClass}`}>
      <header className={`fixed top-0 left-0 w-full z-50 shadow-lg p-4 flex justify-between items-center px-6 ${isDark ? "bg-black/80" : "bg-white/90"}`}>
        <div className="space-x-4">
          <a href="#hero" className={`font-bold text-xl ${accentText}`}>FQZ</a>
          <a href="#manifeste" className="hover:underline">Manifeste</a>
          <a href="#valeurs" className="hover:underline">Valeurs</a>
          <a href="#actus" className="hover:underline">Actus</a>
        </div>
        <button
          onClick={toggleTheme}
          className="text-sm px-3 py-1 rounded border hover:bg-opacity-30 border-cyan-400"
        >
          {isDark ? "☀️ Light" : "🌙 Dark"}
        </button>
      </header>

      <section id="hero" className="h-screen flex flex-col items-center justify-center text-center p-6 bg-gradient-to-b from-[#0A0F2C] to-black pt-32">
        <motion.img
          src="FQZ_Ethos_Nocturne_PrintReady.png"
          alt="Logo FQZ"
          className="w-48 h-48 mb-6"
          initial={{ opacity: 0, y: -30 }}
          animate={controls}
        />
        <motion.h1
          className="text-5xl font-extrabold tracking-widest text-cyan-400"
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
        >
          FQZ ETHOS
        </motion.h1>
        <motion.p
          className="mt-4 text-lg text-yellow-300"
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
        >
          Run Your Path. Marche ton chemin, trace ta ligne, dépasse-toi.
        </motion.p>
      </section>

      <section id="manifeste" className={`py-20 px-6 ${sectionBg}`}>
        <h2 className={`text-3xl font-bold mb-4 ${accentText}`}>Manifeste</h2>
        <p className="text-lg max-w-3xl mx-auto">
          FQZ ETHOS est né de la faille. C’est le cri silencieux de celles et ceux qui avancent quand personne ne regarde. Pas une marque. Un état d’esprit. Courir dans la nuit, grimper en soi, tracer sa ligne. FQZ, c’est la fracture qu’on ne cache pas. ETHOS, c’est la force qu’on y met.
        </p>
      </section>

      <section id="valeurs" className={`py-20 px-6 ${bgClass}`}>
        <h2 className={`text-3xl font-bold mb-4 ${accentText}`}>Nos valeurs</h2>
        <ul className="text-lg max-w-3xl mx-auto space-y-4">
          <li>🎯 Discipline mentale et résilience physique</li>
          <li>🌌 Solitude choisie et mouvement sincère</li>
          <li>🧭 Liberté, altitude, conscience</li>
          <li>🛠️ Sobriété, autonomie, engagement</li>
        </ul>
      </section>

      <section id="actus" className={`py-20 px-6 ${sectionBg}`}>
        <h2 className={`text-3xl font-bold mb-4 ${accentText}`}>Actus</h2>
        <p className="text-lg max-w-3xl mx-auto">
          🚧 Des prototypes textiles sont en cours. Premiers visuels à venir.  
          <br/>📍Suivez les futurs tests trail, workshops et activations locales dès l’automne 2025.
        </p>
      </section>

      <footer className="py-10 text-center text-sm text-gray-500">
        © 2025 — fqz-coder — Contact : <a href="mailto:contact@fqzethos.com" className="underline">fake-contact@fqzethos.com</a>
      </footer>
    </main>
  );
}
