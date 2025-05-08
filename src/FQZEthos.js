import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

export default function FQZEthos() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, y: 0, transition: { duration: 1 } });
  }, [controls]);

  const valeurs = [
    { label: "Discipline", emoji: "🎯" },
    { label: "Résilience", emoji: "💪" },
    { label: "Altitude", emoji: "⛰️" },
    { label: "Clarté", emoji: "🧠" }
  ];

  const actus = [
    "📍 Lancement terrain de la première ligne textile (été 2025)",
    "🧢 Prototypes : casquettes & vestes ultra-légères",
    "📚 Manifesto FQZ — édition papier en préparation",
    "🏃‍♂️ Partenariat testeurs trail sur 3 pays"
  ];

  return (
    <main className="font-sans bg-[#0a0f2c] text-white scroll-smooth">
      <header className="w-full py-4 px-6 fixed top-0 left-0 bg-black/70 backdrop-blur-md z-50 flex justify-between items-center">
        <h1 className="text-xl font-bold tracking-widest text-cyan-300">FQZ</h1>
        <nav className="space-x-6 text-sm uppercase font-medium tracking-wide">
          <a href="#manifeste" className="hover:text-cyan-300">Manifeste</a>
          <a href="#valeurs" className="hover:text-cyan-300">Valeurs</a>
          <a href="#actus" className="hover:text-cyan-300">Actus</a>
        </nav>
      </header>

      <section id="hero" className="min-h-screen pt-28 pb-16 px-6 flex flex-col items-center justify-center text-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("FQZ_Ethos_Hero_Background.png")', backgroundBlendMode: "multiply", backgroundColor: "#0a0f2c" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={controls} className="space-y-5">
          <h2 className="text-xl sm:text-2xl tracking-wide text-gray-200 font-light">Ce n’est pas une marque.</h2>
          <h2 className="text-xl sm:text-2xl tracking-wide text-gray-200 font-light">C’est une ligne de fracture.</h2>
          <h2 className="text-xl sm:text-2xl tracking-wide text-gray-200 font-light">Un tracé invisible, une volonté brute.</h2>
          <h1 className="text-5xl sm:text-6xl font-bold tracking-widest text-white mt-8">FQZ ETHOS</h1>
          <p className="text-cyan-300 text-lg mt-2">Run Your Path</p>
        </motion.div>
      </section>

      <section id="manifeste" className="py-20 px-6 bg-[#111827] text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-cyan-400">Manifeste</h2>
          <p className="text-lg text-gray-300">
            FQZ ETHOS n’est pas un logo. C’est une ligne de fracture. Une philosophie pour ceux qui avancent sans bruit, sans flash, sans faux pas.
            Ceux qui tracent. Ceux qui chutent. Ceux qui recommencent. Ce que tu portes doit parler de ce que tu traverses. Pas pour être vu. Pour ne pas t’oublier.
          </p>
        </div>
      </section>

      <section id="valeurs" className="py-20 px-6 bg-[#0f172a] text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-12">Nos Valeurs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {valeurs.map((val, i) => (
            <div key={i} className="border border-cyan-400 p-6 rounded-md">
              <div className="text-3xl mb-2">{val.emoji}</div>
              <div className="text-xl font-semibold">{val.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="actus" className="py-20 px-6 bg-[#111827] text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-8">Actualités</h2>
        <ul className="space-y-4 text-lg text-gray-200 max-w-2xl mx-auto text-left list-disc list-inside">
          {actus.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>

      <footer className="text-center text-sm text-gray-500 py-10 px-6">
        © 2025 — fqz-coder • contact@fqzethos.com
        <div className="text-xs text-gray-600 mt-1">Version FQZ ETHOS v1.1.1</div>
      </footer>
    </main>
  );
}