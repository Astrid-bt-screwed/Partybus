import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Partybusse', path: '/partybusse' },
    { name: 'Events', path: '/junggesellenabschied', dropdown: [
      { name: 'JGA', path: '/junggesellenabschied' },
      { name: 'Geburtstag', path: '/geburtstag' },
      { name: 'Firmenfeier', path: '/firmenfeier' },
      { name: 'Maturaball', path: '/maturaball' },
      { name: 'Hochzeit', path: '/hochzeit' },
    ]},
    { name: 'Preise', path: '/preise' },
    { name: 'Ablauf', path: '/ablauf' },
    { name: 'Über uns', path: '/ueber-uns' },
  ];

  return (
    <nav 
      data-testid="navbar"
      className={`fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-5xl z-50 transition-all duration-300 ${
        scrolled ? 'py-2' : 'py-4'
      }`}
    >
      <div className="glass rounded-full px-6 md:px-8 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2" data-testid="logo-link">
          <span className="font-anton text-2xl tracking-wider text-primary-main neon-text">
            PARTYBOSS
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              <Link
                to={link.path}
                data-testid={`nav-${link.name.toLowerCase().replace(' ', '-')}`}
                className={`font-manrope font-semibold text-sm tracking-wide transition-colors duration-300 ${
                  location.pathname === link.path ? 'text-primary-main' : 'text-text-secondary hover:text-white'
                }`}
              >
                {link.name}
              </Link>
              {link.dropdown && (
                <div className="absolute top-full left-0 mt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="rounded-xl p-2 min-w-[180px] bg-[#111111] border border-white/10 shadow-2xl shadow-black/60">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        className="block px-4 py-2 text-sm text-text-secondary hover:text-white hover:bg-white/5 rounded-lg transition-colors duration-200"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Button - Desktop */}
        <div className="hidden lg:flex items-center gap-4">
          <a 
            href="tel:06602081542" 
            className="flex items-center gap-2 text-secondary-main hover:text-white transition-colors duration-300"
            data-testid="nav-phone"
          >
            <Phone size={18} />
            <span className="font-manrope font-semibold text-sm">0660 2081 542</span>
          </a>
          <Link 
            to="/kontakt" 
            className="btn-primary text-sm py-2 px-6"
            data-testid="nav-cta"
          >
            Anfragen
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white p-2"
          data-testid="mobile-menu-toggle"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden glass rounded-2xl mt-4 p-6"
            data-testid="mobile-menu"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <Link
                    to={link.path}
                    className={`block font-manrope font-semibold text-lg ${
                      location.pathname === link.path ? 'text-primary-main' : 'text-white'
                    }`}
                  >
                    {link.name}
                  </Link>
                  {link.dropdown && (
                    <div className="ml-4 mt-2 flex flex-col gap-2">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          className="text-text-secondary text-sm hover:text-white transition-colors duration-200"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-white/10">
                <a 
                  href="tel:06602081542" 
                  className="flex items-center gap-2 text-secondary-main mb-4"
                >
                  <Phone size={18} />
                  <span className="font-semibold">0660 2081 542</span>
                </a>
                <Link to="/kontakt" className="btn-primary w-full text-center block">
                  Jetzt anfragen
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
