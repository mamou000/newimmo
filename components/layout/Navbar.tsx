import Link from 'next/link';

const Navbar = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="text-2xl font-bold text-[#FF4500]">NewImmo</Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/buy" className="text-white hover:text-[#FF4500] transition-colors">
              Découvrir
            </Link>
            <Link href="/services" className="text-white hover:text-[#FF4500] transition-colors">
              Services
            </Link>
            <Link href="/about" className="text-white hover:text-[#FF4500] transition-colors">
              À propos
            </Link>
            <Link href="/contact" className="text-white hover:text-[#FF4500] transition-colors">
              Contact
            </Link>
          </div>
          
          <button className="md:hidden text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;