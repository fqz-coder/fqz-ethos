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
          <a href="#origines" className="hover:underline">Origine</a>
          <a href="#ethos" className="hover:underline">Ethos</a>
          <a href="#visuel" className="hover:underline">Visuel</a>
          <a href="#philosophie" className="hover:underline">Philosophie</a>
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

      <section id="origines" className={`py-20 px-6 ${sectionBg}`}>
        <h2 className={`text-3xl font-bold mb-4 ${accentText}`}>Origine du nom FQZ</h2>
        <ul className="text-lg max-w-3xl mx-auto space-y-3">
          <li><strong>F</strong> = Feel / Force / Fracture — l'émotion brute, la force mentale, la faille intérieure</li>
          <li><strong>Q</strong> = Quest / Question / Quête — la recherche de sens, d’altitude, de vérité</li>
          <li><strong>Z</strong> = Zone / Zénith / Zéro — l’état de flow, la zone de performance, le recommencement perpétuel</li>
        </ul>
      </section>

      <section id="ethos" className={`py-20 px-6 ${bgClass}`}>
        <h2 className={`text-3xl font-bold mb-4 ${accentText}`}>ETHOS</h2>
        <p className="text-lg max-w-3xl mx-auto">
          ETHOS représente la philosophie, la discipline, l’identité intérieure. Ce mot grec désigne l’ensemble des valeurs, des principes et du caractère d’un individu ou d’un collectif. Ici, il incarne la culture de dépassement, d’humilité, de silence et d’ancrage dans le réel.
        </p>
      </section>

      <section id="visuel" className={`py-20 px-6 ${sectionBg}`}>
        <h2 className={`text-3xl font-bold mb-4 ${accentText}`}>Concept visuel</h2>
        <p className="text-lg max-w-3xl mx-auto">
          Le logo représente une montagne fracturée — la ligne de fracture. C’est la faille qu’on traverse, celle qui révèle notre résilience. La typographie moderne et la palette Nocturne Digital évoquent un esprit trail à la fois technique et introspectif. Chaque ligne symbolise une étape, une chute, une montée. C’est une carte mentale du corps en mouvement.
        </p>
      </section>

      <section id="philosophie" className={`py-20 px-6 ${bgClass}`}>
        <h2 className={`text-3xl font-bold mb-4 ${accentText}`}>Applications & Philosophie</h2>
        <p className="text-lg max-w-3xl mx-auto">
          Ce logo est pensé pour être porté, vécu, imprimé. Sur une casquette, un t-shirt, un sticker ou dans une app, il reste lisible, puissant, universel. FQZ ETHOS, c’est une marque mentale : pas un logo commercial, mais une boussole personnelle.
        </p>
      </section>

      <section id="contact" className={`py-20 px-6 ${sectionBg}`}>
        <h2 className={`text-3xl font-bold mb-4 ${accentText}`}>Contact</h2>
        <p className="text-lg max-w-xl mx-auto text-center">
          Pour collaborer, discuter ou soutenir le projet :<br />
          <a href="mailto:contact@fqzethos.com" className="underline text-cyan-400">contact@fqzethos.com</a>
        </p>
      </section>

      <footer className="py-10 text-center text-sm text-gray-500">
        © 2025 — fqz-coder — Hébergé via GitHub Pages
      </footer>
    </main>
  );
}