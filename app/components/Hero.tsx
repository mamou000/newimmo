interface HeroProps {
  title: string[];
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

const Hero = ({ title, subtitle, ctaText, ctaLink }: HeroProps) => {
  return (
    <section className="relative min-h-[80vh] flex items-center py-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-[#FF4500]/10 via-transparent to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold space-y-4">
            {title.map((line, index) => (
              <span
                key={index}
                className={`block ${index === 1 ? 'text-[#FF4500]' : 'text-white'}`}
              >
                {line}
              </span>
            ))}
          </h1>
          
          <p className="mt-8 text-xl text-gray-400">
            {subtitle}
          </p>

          <div className="mt-12 flex space-x-4">
            <a
              href={ctaLink}
              className="inline-flex items-center px-8 py-4 rounded-xl bg-[#FF4500] text-white transition-all duration-300 hover:bg-[#FF5722] transform hover:scale-105"
            >
              {ctaText}
              <svg
                className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            
            <a
              href="/discover"
              className="inline-flex items-center px-8 py-4 rounded-xl border border-[#333333] text-white transition-all duration-300 hover:border-[#FF4500] transform hover:scale-105"
            >
              En savoir plus
            </a>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1/3 h-2/3 bg-gradient-to-l from-[#FF4500]/5 to-transparent" />
    </section>
  );
};

export default Hero;