import Button from '../components/common/Button'
import Card from '../components/common/Card'

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FF4500]/10 via-black to-black"/>
        <div className="max-w-7xl mx-auto px-6 relative">
          <h1 className="text-7xl font-bold mb-6">
            <span className="text-white">Découvrez</span>
            <br/>
            <span className="text-[#FF4500]">l'immobilier</span>
            <br/>
            <span className="text-white">autrement</span>
          </h1>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl">
            Une nouvelle approche de l'immobilier, alliant technologie et expertise humaine.
          </p>
          <div className="flex gap-4">
            <Button size="large">Découvrir</Button>
            <Button variant="secondary" size="large">En savoir plus</Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card
              title="Recherche Intelligente"
              description="Trouvez le bien idéal grâce à notre algorithme de matching avancé."
              link="/search"
            />
            <Card
              title="Estimation Précise"
              description="Obtenez une estimation détaillée basée sur les données du marché."
              link="/estimate"
            />
            <Card
              title="Visite Virtuelle"
              description="Visitez les biens depuis chez vous en réalité virtuelle."
              link="/virtual"
            />
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative bg-gradient-to-br from-black to-[#111] border border-white/10 rounded-3xl p-12 overflow-hidden">
            <div className="absolute inset-0 bg-[#FF4500]/5"/>
            <div className="relative">
              <h2 className="text-4xl font-bold mb-6">Découvrez nos biens d'exception</h2>
              <p className="text-gray-400 mb-8 max-w-2xl">
                Une sélection unique de propriétés, choisie avec soin pour répondre à vos exigences.
              </p>
              <Button>Explorer la collection</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '2K+', label: 'Biens disponibles' },
              { number: '98%', label: 'Clients satisfaits' },
              { number: '24/7', label: 'Support client' },
              { number: '10+', label: 'Années d\'expérience' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-[#FF4500] mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}