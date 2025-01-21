interface FeaturedProps {
  title: string;
  subtitle: string;
  items: {
    id: number;
    title: string;
    description: string;
    price: string;
    location: string;
    image: string;
  }[];
}

const Featured = ({ title, subtitle, items }: FeaturedProps) => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">{title}</h2>
          <p className="text-gray-400">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-b from-[#111111] to-black transition-all duration-500 hover:scale-[1.02]"
            >
              <div className="aspect-w-16 aspect-h-9 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
                <img
                  src={item.image || '/api/placeholder/400/320'}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>

              <div className="relative z-20 p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.location}</p>
                  </div>
                  <span className="text-[#FF4500] font-bold">{item.price}</span>
                </div>

                <p className="text-gray-400 text-sm mb-4">{item.description}</p>

                <button className="w-full py-3 px-4 bg-[#FF4500]/10 text-[#FF4500] rounded-xl transition-all duration-300 hover:bg-[#FF4500] hover:text-white group">
                  Découvrir
                  <svg
                    className="inline-block w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF4500]/0 via-[#FF4500]/0 to-[#FF4500]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;