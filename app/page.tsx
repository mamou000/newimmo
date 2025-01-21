export default function Home() {
  return (
    <main className="bg-[#030303] text-white min-h-screen">
      {/* Section Hero avec grand visuel */}
      <section className="relative h-screen">
        {/* Fond avec un grand dégradé */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#030303] via-[#0a0a0a] to-[#030303]" />
        
        {/* Contenu Hero */}
        <div className="relative z-10 max-w-screen-2xl mx-auto px-6 h-full flex flex-col justify-center">
          <nav className="absolute top-0 left-0 right-0 h-20">
            <div className="max-w-screen-2xl mx-auto px-6 h-full flex items-center justify-between">
              <a href="/" className="text-xl font-bold tracking-tighter">NEWIMMO</a>
              <div className="flex gap-8 text-sm">
                <a href="/buy">ACHETER</a>
                <a href="/sell">VENDRE</a>
                <a href="/estimate">ESTIMER</a>
                <a href="/contact">CONTACT</a>
              </div>
            </div>
          </nav>

          <div className="max-w-4xl">
            <h1 className="text-[8rem] font-bold leading-none tracking-tighter mb-8">
              <span className="block text-[#FF4500]">Future</span>
              <span className="block">of Real Estate</span>
            </h1>
            <p className="text-2xl text-gray-400 max-w-xl mb-12">
              Une nouvelle expérience immobilière, où technologie et expertise se rencontrent.
            </p>
            <div className="flex gap-6">
              <button className="bg-[#FF4500] text-white px-12 py-4 rounded-full text-lg font-medium">
                Découvrir
              </button>
              <button className="border border-white/10 text-white px-12 py-4 rounded-full text-lg font-medium">
                En savoir plus
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section Propriétés en vedette */}
      <section className="py-32 px-6">
        <div className="max-w-screen-2xl mx-auto">
          <h2 className="text-5xl font-bold mb-16">Propriétés <span className="text-[#FF4500]">Premium</span></h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="group bg-[#0a0a0a] rounded-xl overflow-hidden border border-white/5">
                <div className="aspect-video bg-[#111] mb-6" />
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-3">Villa Contemporaine</h3>
                  <p className="text-gray-400 mb-6">Paris 16e - 280m²</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-[#FF4500]">2.850.000 €</span>
                    <button className="text-sm font-medium px-6 py-3 rounded-full border border-white/10 group-hover:border-[#FF4500] transition-colors">
                      Voir plus
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
