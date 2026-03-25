import { useState } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X } from 'lucide-react';
import logoRayo from '../../assets/logo-rayo.png';
import nombreRayo from '../../assets/ElRayo_SinFondo.png';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Inicio' },
    { path: '/autos', label: 'Autos' },
    { path: '/motos', label: 'Motos' },
    { path: '/servicios', label: 'Servicios' },
    { path: '/contacto', label: 'Contacto' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-[#0C2340] text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-4 hover:opacity-90 transition-opacity">
          <img src={logoRayo} alt="Logo El Rayo" className="w-14 h-14 object-contain" />
          <img src={nombreRayo} alt="El Rayo" className="h-7 object-contain" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`text-lg font-medium transition-colors hover:text-[#85B7EB] ${
                    isActive(link.path) ? 'text-[#85B7EB] font-bold underline underline-offset-8' : 'text-white'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Hamburger Menu Button (Mobile Only) */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 hover:bg-[#1E5FA0] rounded-lg transition-colors md:hidden"
          aria-label="Menú"
        >
          {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="border-t border-[#1E5FA0] bg-[#0C2340] md:hidden">
          <ul className="py-2">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-4 hover:bg-[#1E5FA0] transition-colors ${
                    isActive(link.path) ? 'text-[#85B7EB] font-bold bg-[#142e4d]' : 'text-white'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
