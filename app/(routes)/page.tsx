export default function HomePage() {
  return (
    <main className="min-h-screen bg-black">
      {/* Section Hero */}
      <section className="h-screen relative flex items-center">
        <div className="container mx-auto px-4">
          <h1 className="text-8xl font-bold text-white">
            NewImmo
            <span className="block text-orange-500">Immobilier</span>
          </h1>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <p className="text-white/60">Scroll pour découvrir</p>
        </div>
      </section>

      {/* Section Propriétés en vedette */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white mb-12">En vedette</h2>
        </div>
      </section>
    </main>
  )
}