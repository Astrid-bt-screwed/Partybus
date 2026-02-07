import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { packages } from '../data/siteData';

const Preise = () => {
  return (
    <div className="pt-32 pb-24" data-testid="preise-page">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="font-anton text-5xl md:text-6xl tracking-wider text-white uppercase mb-6">
            Preise & <span className="text-primary-main neon-text">Pakete</span>
          </h1>
          <p className="text-text-secondary text-lg font-manrope max-w-3xl mx-auto">
            Transparente Preise für deine Party. Der genaue Preis hängt von Personenanzahl, 
            Datum, Dauer und Route ab. Wir erstellen dir gerne ein individuelles Angebot.
          </p>
        </motion.div>

        {/* Packages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative ${
                pkg.popular 
                  ? 'p-[2px] bg-gradient-to-br from-primary-main to-secondary-main rounded-2xl'
                  : ''
              }`}
              data-testid={`package-${pkg.name.toLowerCase().replace(' ', '-')}`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary-main px-4 py-1 rounded-full flex items-center gap-2 z-10">
                  <Star size={14} fill="white" />
                  <span className="text-white text-sm font-bold">BELIEBT</span>
                </div>
              )}
              <div className={`glass rounded-2xl p-8 h-full ${
                pkg.popular ? 'bg-bg-surface' : ''
              }`}>
                <h3 className="font-unbounded font-bold text-2xl text-white mb-2">
                  {pkg.name}
                </h3>
                <p className="text-text-secondary font-manrope mb-4">{pkg.duration}</p>
                <div className="mb-6">
                  <span className="font-anton text-4xl text-primary-main">{pkg.price}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <Check size={18} className="text-secondary-main flex-shrink-0" />
                      <span className="text-text-secondary font-manrope">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link 
                  to="/kontakt" 
                  className={pkg.popular ? 'btn-primary w-full text-center block' : 'btn-secondary w-full text-center block'}
                >
                  Anfragen
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Info Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-8 md:p-12"
        >
          <h2 className="font-anton text-3xl tracking-wider text-white uppercase mb-6">
            So berechnen wir den <span className="text-secondary-main">Preis</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-unbounded font-bold text-white mb-3">Faktoren für dein Angebot:</h3>
              <ul className="space-y-2 text-text-secondary font-manrope">
                <li>• Anzahl der Personen</li>
                <li>• Datum und Uhrzeit</li>
                <li>• Dauer der Fahrt</li>
                <li>• Strecke und Route</li>
                <li>• Gewählter Bus</li>
                <li>• Zusatzleistungen (DJ, Catering, etc.)</li>
              </ul>
            </div>
            <div>
              <h3 className="font-unbounded font-bold text-white mb-3">Was ist inklusive?</h3>
              <ul className="space-y-2 text-text-secondary font-manrope">
                <li>• Soundsystem & LED-Lichtsteuerung</li>
                <li>• Bar mit Kühlschränken</li>
                <li>• Fotobox & Spielebereich</li>
                <li>• Professioneller, geprüfter Fahrer</li>
                <li>• Grundreinigung</li>
                <li>• Flexible Routenplanung</li>
              </ul>
            </div>
          </div>
          <p className="mt-8 text-text-muted font-manrope text-sm">
            Keine versteckten Kosten! Bei großen Verschmutzungen oder Schäden gibt es eine separate Abrechnung.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Preise;
