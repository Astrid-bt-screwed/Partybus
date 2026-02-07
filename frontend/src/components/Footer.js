import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';
import { cities, eventTypes } from '../data/siteData';

const Footer = () => {
  return (
    <footer className="relative bg-bg-secondary border-t border-white/10 mt-32" data-testid="footer">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div>
            <Link to="/" className="inline-block mb-6">
              <span className="font-anton text-3xl tracking-wider text-primary-main neon-text">
                PARTYBOSS
              </span>
            </Link>
            <p className="text-text-secondary mb-6 font-manrope">
              Feiert unvergessliche Partys mit uns – wir von PARTYBOSS kümmern uns gern um alles.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/partybus_oesterreich?igsh=cml0b2s2eHIyOHNo&utm_source=qr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-text-secondary hover:text-primary-main hover:border-primary-main transition-colors duration-300"
                data-testid="footer-instagram"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://www.facebook.com/share/1AsLH199du/?mibextid=wwXIfr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-text-secondary hover:text-primary-main hover:border-primary-main transition-colors duration-300"
                data-testid="footer-facebook"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Events Column */}
          <div>
            <h4 className="font-unbounded font-bold text-white mb-6">Events</h4>
            <ul className="space-y-3">
              {eventTypes.map((event) => (
                <li key={event.id}>
                  <Link 
                    to={event.link} 
                    className="text-text-secondary hover:text-primary-main transition-colors duration-300 font-manrope"
                  >
                    {event.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Regions Column */}
          <div>
            <h4 className="font-unbounded font-bold text-white mb-6">Regionen</h4>
            <ul className="space-y-3">
              {cities.map((city) => (
                <li key={city.name}>
                  <Link 
                    to={city.link} 
                    className="text-text-secondary hover:text-primary-main transition-colors duration-300 font-manrope"
                  >
                    Partybus {city.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link 
                  to="/preise" 
                  className="text-text-secondary hover:text-primary-main transition-colors duration-300 font-manrope"
                >
                  Preise & Pakete
                </Link>
              </li>
              <li>
                <Link 
                  to="/ablauf" 
                  className="text-text-secondary hover:text-primary-main transition-colors duration-300 font-manrope"
                >
                  So funktioniert es
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-unbounded font-bold text-white mb-6">Kontakt</h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href="tel:06602081542" 
                  className="flex items-center gap-3 text-text-secondary hover:text-secondary-main transition-colors duration-300"
                  data-testid="footer-phone"
                >
                  <Phone size={18} className="text-secondary-main" />
                  <span className="font-manrope">0660 2081 542</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:manager@partybus-oesterreich.at" 
                  className="flex items-center gap-3 text-text-secondary hover:text-secondary-main transition-colors duration-300"
                  data-testid="footer-email"
                >
                  <Mail size={18} className="text-secondary-main" />
                  <span className="font-manrope">manager@partybus-oesterreich.at</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-text-secondary">
                  <MapPin size={18} className="text-secondary-main mt-1" />
                  <span className="font-manrope">
                    Kimmersdorfer Straße 16<br />
                    4502 Sankt Marien, Austria
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-muted text-sm font-manrope">
            © {new Date().getFullYear()} PARTYBOSS. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-6 text-sm">
            <Link to="/impressum" className="text-text-muted hover:text-white transition-colors duration-300">
              Impressum
            </Link>
            <Link to="/datenschutz" className="text-text-muted hover:text-white transition-colors duration-300">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
