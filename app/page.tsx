export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-1 flex justify-between items-center">
              <div className="flex-shrink-0">
                <span className="text-2xl font-bold gradient-text">NewImmo</span>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-center space-x-8">
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">Acheter</a>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">Vendre</a>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">Louer</a>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">Contact</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              <span className="gradient-text">Trouvez votre</span>
              <br />
              futur chez-vous
            </h1>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              La nouvelle génération d'agence immobilière, pour une expérience moderne et transparente.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature Card 1 */}
            <div className="hover-card p-8 rounded-3xl card-gradient">
              <h3 className="text-2xl font-bold mb-4">Acheter</h3>
              <p className="text-gray-400 mb-6">
                Découvrez des propriétés uniques sélectionnées pour vous.
              </p>
              <a href="#" className="text-[#FF4500] flex items-center">
                Explorer →
              </a>
            </div>

            {/* Feature Card 2 */}
            <div className="hover-card p-8 rounded-3xl card-gradient">
              <h3 className="text-2xl font-bold mb-4">Vendre</h3>
              <p className="text-gray-400 mb-6">
                Vendez votre bien au meilleur prix avec notre expertise.
              </p>
              <a href="#" className="text-[#FF4500] flex items-center">
                Commencer →
              </a>
            </div>

            {/* Feature Card 3 */}
            <div className="hover-card p-8 rounded-3xl card-gradient">
              <h3 className="text-2xl font-bold mb-4">Estimer</h3>
              <p className="text-gray-400 mb-6">
                Estimation gratuite de votre bien en quelques clics.
              </p>
              <a href="#" className="text-[#FF4500] flex items-center">
                Estimer →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 bg-gradient-to-r from-gray-900 to-black p-12 rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-[#FF4500]/10 mix-blend-multiply"></div>
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Prêt à commencer votre recherche ?
              </h2>
              <p className="text-gray-400 mb-8 max-w-2xl">
                Nos experts sont là pour vous accompagner dans votre projet immobilier.
              </p>
              <a href="#" className="inline-block bg-[#FF4500] text-white px-8 py-4 rounded-xl hover:bg-[#CC3700] transition-colors">
                Nous contacter
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}