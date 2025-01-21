export default function PropertiesPage() {
  return (
    <main className="min-h-screen pt-24">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-white mb-8">Nos propriétés</h1>
        
        {/* Grid de propriétés */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Propriété */}
          <div className="card">
            <div className="aspect-video bg-gray-800 rounded-lg mb-4">
              {/* Image placeholder */}
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Villa Moderne</h3>
            <p className="text-gray-400">Paris 16e - 200m²</p>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-orange-500 font-bold">1 250 000 €</span>
              <button className="btn-secondary">Voir plus</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}