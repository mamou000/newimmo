import Link from 'next/link';

const Navigation = () => {
  return (
    <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="text-2xl font-bold text-[#FF4500]">
            NewImmo
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link href="/discover" className="text-white hover:text-[#FF4500] transition-colors duration-300">
              Découvrir
            </Link>
            <Link href="/services" className="text-white hover:text-[#FF4500] transition-colors duration-300">
              Services
            </Link>
            <Link href="/properties" className="text-white hover:text-[#FF4500] transition-colors duration-300">
              Biens
            </Link>
            <Link href="/contact" className="text-white hover:text-[#FF4500] transition-colors duration-300">
              Contact
            </Link>
          </div>

          <button className="md:hidden text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;