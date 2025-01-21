'use client';
import React from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Navigation - Style Apple */}
      <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-[1120px] mx-auto">
          <div className="flex items-center justify-between h-12">
            <a href="/" className="text-xl font-bold">NewImmo.</a>
            <div className="flex space-x-8 text-sm">
              <a href="/discover" className="hover:text-[#FF4500] transition-colors">Découvrir</a>
              <a href="/buy" className="hover:text-[#FF4500] transition-colors">Acheter</a>
              <a href="/sell" className="hover:text-[#FF4500] transition-colors">Vendre</a>
              <a href="/contact" className="hover:text-[#FF4500] transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Style Apple */}
      <section className="pt-32 pb-24">
        <div className="max-w-[1120px] mx-auto px-4">
          <div className="text-center">
            <h1 className="text-[120px] font-bold leading-none tracking-tight">
              Immobilier.
              <span className="bg-gradient-to-r from-[#FF4500] to-[#FF7A50] text-transparent bg-clip-text">
                Réinventé.
              </span>
            </h1>
            <p className="mt-8 text-xl text-neutral-400 max-w-xl mx-auto">
              Une nouvelle approche de l'immobilier, combinant technologie de pointe et expertise humaine.
            </p>
          </div>

          <div className="mt-16 h-[600px] relative rounded-3xl overflow-hidden bg-neutral-900">
            <div className="absolute inset-0 bg-gradient-to-br from-[#FF4500]/20 to-transparent" />
          </div>
        </div>
      </section>

      {/* Features Section - Style Micron Labs */}
      <section className="py-24 bg-neutral-950">
        <div className="max-w-[1120px] mx-auto px-4">
          <div className="grid grid-cols-3 gap-6">
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
              <div
                key={index}
                className="p-8 rounded-2xl bg-black border border-neutral-800 hover:border-[#FF4500]/50 transition-colors"
              >
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-neutral-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Properties Section - Style Apple Products */}
      <section className="py-24">
        <div className="max-w-[1120px] mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Biens d'exception</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map((i) => (
              <div
                key={i}
                className="group relative h-[600px] rounded-3xl overflow-hidden bg-neutral-900 hover:scale-[1.02] transition-transform duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl font-bold mb-2">Villa Contemporaine</h3>
                  <p className="text-neutral-400">Paris 16e - 280m²</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-2xl font-bold">2.850.000 €</span>
                    <button className="px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-[#FF4500] hover:text-white transition-colors">
                      Découvrir
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#FF4500]">
        <div className="max-w-[1120px] mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Prêt à commencer ?</h2>
          <p className="text-xl mb-8 opacity-90">Laissez-nous vous guider dans votre projet immobilier.</p>
          <button className="px-8 py-4 bg-black text-white rounded-full font-medium hover:bg-neutral-900 transition-colors">
            Nous contacter
          </button>
        </div>
      </section>
    </div>
  );
}