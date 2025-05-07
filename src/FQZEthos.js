import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

export default function FQZEthos() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, y: 0, transition: { duration: 1 } });
  }, [controls]);

  const sections = [
    {
      id: "manifeste",
      title: "Manifeste",
      content: "FQZ ETHOS est un appel à l’élévation. Né d’une fracture intérieure et extérieure, c’est une marque mentale. Elle ne vend pas un produit, elle véhicule une trajectoire : celle de la solitude choisie, du mouvement sincère et du dépassement conscient.",
    },
    {
      id: "valeurs",
      title: "Valeurs",
      content: "Liberté. Résilience. Altitude. Sobriété. Chaque foulée dans un sentier, chaque respiration sur une arête nous rappelle que la vérité ne se trouve pas dans le confort, mais dans le chaos maîtrisé. FQZ croit en l’humain brut, pas en le héros décoré.",
    },
    {
      id: "actus",
      title: "Actualités",
      content: "📍 2025 — Lancement de la ligne textile en test terrain.\n🧭 Développement du manifeste imprimé.\n🏃‍♂️ Participation à des événements outdoor confidentiels.\n🧢 Prototypes de casquettes et vestes en édition minimale."
    }
  ];

  return (
    <main className="font-sans bg-[#0a0f2c] text-white scroll-smooth">
      <header className="w-full py-6 px-6 fixed top-0 left-0 bg-black/70 backdrop-blur-sm z-50 flex justify-between items-center">
        <h1 className="text-xl font-bold tracking-widest text-cyan-300">FQZ</h1>
        <nav className="space-x-4 text-sm">
          {sections.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="hover:text-cyan-300 transition-colors duration-200">
              {s.title}
            </a>
          ))}
        </nav>
      </header>

      <section id="hero" className="min-h-screen pt-32 pb-12 px-6 flex flex-col items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: 'url("FQZ_Ethos_Nocturne_PrintReady.png")', backgroundBlendMode: "multiply", backgroundColor: "#0a0f2c" }}>
        <motion.div
          className="space-y-3 mb-10"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.7
              }
            }
          }}
        >
          {[
            "Ce n’est pas une marque.",
            "C’est un état d’esprit.",
            "Un tracé invisible, une fracture choisie."
          ].map((line, index) => (
            <motion.p
              key={index}
              className="text-xl sm:text-2xl text-white font-light"
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              {line}
            </motion.p>
          ))}
        </motion.div>

        <motion.h1
          className="text-5xl font-extrabold tracking-widest text-white mb-4 drop-shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
        >
          FQZ ETHOS
        </motion.h1>
        <motion.p
          className="text-cyan-300 text-lg max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
        >
          Run Your Path. Marche ton chemin, trace ta ligne, dépasse-toi.
        </motion.p>
      </section>

      {sections.map(({ id, title, content }) => (
        <section key={id} id={id} className="py-24 px-6 bg-[#111827] text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-semibold text-cyan-400 mb-6">{title}</h2>
            <p className="text-lg text-gray-200 whitespace-pre-line">{content}</p>
          </div>
        </section>
      ))}

      <footer className="text-center text-sm text-gray-400 py-10 px-6">
        © 2025 — fqz-coder • contact@fqzethos.com
      
      <div className="text-center text-xs text-gray-500 py-2">
        Version : FQZ ETHOS v1.0.1
      </div>
    </footer>
    </main>
  );
}