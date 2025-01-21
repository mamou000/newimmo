'use client';

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main>
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass">
        <div className="max-w-[1120px] mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <a href="/" className="text-xl font-bold text-gradient">
              NewImmo
            </a>
            <div className="hidden md:flex items-center space-x-8">
              <a href="/buy" className="text-sm text-gray-300 hover:text-white transition-colors duration-300">Acheter</a>
              <a href="/sell" className="text-sm text-gray-300 hover:text-white transition-colors duration-300">Vendre</a>
              <a href="/rent" className="text-sm text-gray-300 hover:text-white transition-colors duration-300">Louer</a>
              <a href="/contact" className="text-sm text-gray-300 hover:text-white transition-colors duration-300">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen pt-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="grid-bg w-full h-full"/>
        </div>
        
        <div className="max-w-[1120px] mx-auto px-4 pt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-[8vw] md:text-[6vw] font-bold tracking-tight leading-none mb-8">
              <span className="text-gradient">Le futur</span><br/>
              de l'immobilier.
            </h1>
            <p className="text-xl text-gray-400 max-w-xl mx-auto mb-12">
              Une nouvelle approche de l'immobilier, où technologie et expertise se rencontrent.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-colors"
              >
                Explorer
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-white/10 text-white rounded-full font-medium hover:bg-white/5 transition-colors"
              >
                En savoir plus
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 relative">
        <div className="max-w-[1120px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Recherche intelligente",
                description: "Trouvez le bien idéal grâce à notre algorithme de matching avancé."
              },
              {
                title: "Estimation précise",
                description: "Obtenez une estimation détaillée basée sur les données du marché."
              },
              {
                title: "Visite virtuelle",
                description: "Visitez les biens depuis chez vous en réalité virtuelle."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass p-8 rounded-2xl card-hover"
              >
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Properties Showcase */}
      <section className="py-32 bg-secondary/50">
        <div className="max-w-[1120px] mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl font-bold mb-16"
          >
            Biens d'exception
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="glass rounded-2xl overflow-hidden"
              >
                <div className="aspect-[4/3] bg-neutral-900 relative">
                  {/* Image placeholder */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2">Villa Contemporaine</h3>
                  <p className="text-gray-400 mb-4">Paris 16e - 280m²</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold">2.850.000 €</span>
                    <button className="px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-primary hover:text-white transition-colors">
                      Découvrir
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32">
        <div className="max-w-[1120px] mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-12 text-center"
          >
            <h2 className="text-4xl font-bold mb-6">Prêt à commencer ?</h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Laissez-nous vous guider dans votre projet immobilier.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-colors"
            >
              Nous contacter
            </motion.button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}