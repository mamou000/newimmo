'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-black/80 backdrop-blur">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between px-4 py-5">
          {/* Logo */}
          <Link 
            href="/" 
            className="text-2xl font-bold text-orange-500"
          >
            NewImmo
          </Link>

          {/* Navigation - Desktop */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/properties" className="text-white hover:text-orange-500 transition">
              Propriétés
            </Link>
            <Link href="/about" className="text-white hover:text-orange-500 transition">
              À propos
            </Link>
            <Link href="/contact" className="text-white hover:text-orange-500 transition">
              Contact
            </Link>
            <button className="btn-primary">
              Estimation gratuite
            </button>
          </div>

          {/* Menu mobile */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            Menu
          </button>
        </div>

        {/* Menu mobile - Panel */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-4 py-3 space-y-4">
              <Link href="/properties" className="block text-white hover:text-orange-500">
                Propriétés
              </Link>
              <Link href="/about" className="block text-white hover:text-orange-500">
                À propos
              </Link>
              <Link href="/contact" className="block text-white hover:text-orange-500">
                Contact
              </Link>
              <button className="btn-primary w-full">
                Estimation gratuite
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}