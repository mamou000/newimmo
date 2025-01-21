export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-effect">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between h-20 px-6">
            <a href="/" className="text-2xl font-bold text-gradient">NewImmo</a>
            <div className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Découvrir</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Services</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">À propos</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 hero-gradient">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Redéfinir 
              <span className="text-gradient block">l'immobilier</span> 
              de demain
            </h1>
            <p className="text-xl text-gray-400 mb-12">
              Une approche moderne et transparente pour tous vos projets immobiliers.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#" className="px-8 py-4 bg-[#ff4500] text-white rounded-xl hover:bg-[#ff5722] transition-colors duration-300">
                Commencer
              </a>
              <a href="#" className="px-8 py-4 border border-gray-700 text-white rounded-xl hover:border-[#ff4500] transition-colors duration-300">
                En savoir plus
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="gradient-border card-shine p-8">
              <div className="flex flex-col h-full">
                <h3 className="text-2xl font-bold mb-4">Recherche Intelligente</h3>
                <p className="text-gray-400 mb-6 flex-grow">
                  Trouvez le bien idéal grâce à notre algorithme de matching avancé.
                </p>
                <a href="#" className="text-[#ff4500] group flex items-center">
                  Explorer 
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Service Card 2 */}
            <div className="gradient-border card-shine p-8">
              <div className="flex flex-col h-full">
                <h3 className="text-2xl font-bold mb-4">Estimation Précise</h3>
                <p className="text-gray-400 mb-6 flex-grow">
                  Obtenez une estimation détaillée basée sur les données du marché.
                </p>
                <a href="#" className="text-[#ff4500] group flex items-center">
                  Calculer 
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Service Card 3 */}
            <div className="gradient-border card-shine p-8">
              <div className="flex flex-col h-full">
                <h3 className="text-2xl font-bold mb-4">Visites Virtuelles</h3>
                <p className="text-gray-400 mb-6 flex-grow">
                  Visitez les biens depuis chez vous en réalité virtuelle.
                </p>
                <a href="#" className="text-[#ff4500] group flex items-center">
                  Découvrir 
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlight */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="glass-card rounded-3xl p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">Innovation Immobilière</h2>
                <p className="text-gray-400 mb-8">
                  NewImmo combine technologie et expertise humaine pour vous offrir une expérience immobilière exceptionnelle.
                </p>
                <button className="px-8 py-4 bg-[#ff4500] text-white rounded-xl hover:bg-[#ff5722] transition-colors duration-300">
                  Démarrer un projet
                </button>
              </div>
              <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden">
                {/* Placeholder pour une future image ou animation */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#ff4500]/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}