'use client';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Background avec grille et bruit */}
      <div className="fixed inset-0 grid-background -z-10"/>
      <div className="fixed inset-0 noise-bg -z-10"/>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 gradient-blur"/>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-[8vw] md:text-[6vw] font-bold leading-tight mb-8">
              <span className="heading-gradient">L'immobilier</span>
              <br/>
              réinventé
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl">
              Une expérience immobilière moderne et transparente pour tous vos projets.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="btn-primary">
                Explorer
              </button>
              <button className="btn-secondary">
                En savoir plus
              </button>
            </div>
          </div>
        </div>
        
        {/* Éléments flottants */}
        <div className="absolute right-0 top-1/4 w-1/3 aspect-square float hidden md:block">
          <div className="w-full h-full relative">
            <Image 
              src="/images/property1.jpg"
              alt="Property 1"
              layout="fill"
              objectFit="cover"
              className="rounded-3xl"
            />
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12">
            <span className="heading-gradient">Découvertes</span>
          </h2>
          <div className="modern-grid">
            {/* Cartes de propriétés */}
            {[1, 2, 3].map((i) => (
              <div key={i} className="modern-card p-6 h-[400px] flex flex-col">
                <div className="relative w-full aspect-video mb-6 rounded-xl overflow-hidden">
                  <Image 
                    src={`/images/property${i}.jpg`}
                    alt={`Property ${i}`}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">Villa Contemporaine</h3>
                  <p className="text-gray-400">Paris 16e - 280m²</p>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold heading-gradient">2 850 000 €</span>
                  <button className="btn-secondary">Découvrir</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="glass-panel rounded-3xl p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">
                  <span className="heading-gradient">Services Premium</span>
                </h2>
                <p className="text-xl text-gray-400 mb-8">
                  Une approche personnalisée de l'immobilier, combinant expertise humaine et technologie avancée.
                </p>
                <button className="btn-primary">Contacter un expert</button>
              </div>
              <div className="relative h-[400px] rounded-2xl overflow-hidden">
                <Image 
                  src="/images/service.jpg"
                  alt="Service"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}