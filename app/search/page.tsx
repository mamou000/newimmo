import Button from '../../components/common/Button'
import Card from '../../components/common/Card'

export default function SearchPage() {
  return (
    <main className="min-h-screen bg-black pt-24">
      {/* Search Header */}
      <section className="bg-gradient-to-b from-[#111] to-black">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <h1 className="text-4xl font-bold mb-6">
            <span className="text-gradient">Recherche immobilière</span>
          </h1>
          
          {/* Search Filters */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <select className="glass-effect px-4 py-3 rounded-xl text-white">
              <option value="">Type de bien</option>
              <option value="apartment">Appartement</option>
              <option value="house">Maison</option>
              <option value="villa">Villa</option>
            </select>
            
            <select className="glass-effect px-4 py-3 rounded-xl text-white">
              <option value="">Budget</option>
              <option value="0-200000">0 - 200 000 €</option>
              <option value="200000-500000">200 000 - 500 000 €</option>
              <option value="500000+">500 000 € +</option>
            </select>
            
            <select className="glass-effect px-4 py-3 rounded-xl text-white">
              <option value="">Surface</option>
              <option value="0-50">0 - 50 m²</option>
              <option value="50-100">50 - 100 m²</option>
              <option value="100+">100 m² +</option>
            </select>
            
            <Button variant="primary">Rechercher</Button>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          {/* Results Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Property Cards */}
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="card-gradient rounded-2xl overflow-hidden card-hover">
                <div className="relative h-48 bg-gray-800">
                  {/* Image placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center text-gray-600">
                    Image {item}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Appartement moderne</h3>
                  <p className="text-gray-400 mb-4">Paris 16e - 85m²</p>
                  <div className="flex justify-between items-center">
                    <span className="text-[#FF4500] font-bold">850 000 €</span>
                    <Button variant="secondary" size="small">Voir détails</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}