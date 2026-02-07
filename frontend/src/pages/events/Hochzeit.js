import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Heart, Sparkles, Camera, Music } from 'lucide-react';
import { buses } from '../../data/siteData';
import BusCard from '../../components/BusCard';

const Hochzeit = () => {
  const hochzeitBuses = buses.filter(bus => 
    bus.idealFor.includes('Hochzeit') || bus.idealFor.includes('VIP-Events')
  ).slice(0, 3);

  return (
    <div className="pt-32 pb-24" data-testid="hochzeit-page">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6">
            <Heart size={18} className="text-primary-main" />
            <span className="text-secondary-main font-unbounded text-sm">After-Wedding-Party</span>
          </div>
          <h1 className="font-anton text-5xl md:text-6xl tracking-wider text-white uppercase mb-6">
            Hochzeit & <span className="text-primary-main neon-text">Partybus</span>
          </h1>
          <p className="text-text-secondary text-lg font-manrope max-w-3xl mx-auto">
            Stilvoll von Location zu Location! Ob Gästetransfer, Fotobus oder 
            After-Wedding-Party – macht eure Hochzeit noch unvergesslicher.
          </p>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16"
        >
          {[
            { icon: Heart, title: 'Euer Tag', desc: 'Alles perfekt für euch' },
            { icon: Sparkles, title: 'Stilvoll', desc: 'Premium Ausstattung' },
            { icon: Camera, title: 'Fotobox', desc: 'Erinnerungen festhalten' },
            { icon: Music, title: 'Party', desc: 'Die After-Wedding-Feier' }
          ].map((item, i) => (
            <div key={i} className="glass rounded-2xl p-6 text-center card-hover">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-main/20 to-accent-purple/20 flex items-center justify-center mx-auto mb-4">
                <item.icon size={20} className="text-primary-main" />
              </div>
              <h3 className="font-unbounded font-bold text-white mb-2">{item.title}</h3>
              <p className="text-text-secondary font-manrope text-sm">{item.desc}</p>
            </div>
          ))}
        </motion.div>

        {/* Info Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-8 md:p-12 mb-16"
        >
          <h2 className="font-anton text-3xl tracking-wider text-white uppercase mb-6">
            Hochzeit mit <span className="text-secondary-main">PARTYBOSS</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-text-secondary font-manrope">
            <div className="space-y-4">
              <p>
                Eure Hochzeit verdient das Beste! Mit unserem Partybus wird der 
                Transport zwischen Locations zum Erlebnis für eure Gäste.
              </p>
              <p>
                Unsere nostalgischen Doppeldecker-Busse sind perfekt für 
                Hochzeitsfotos und sorgen für unvergessliche Momente.
              </p>
            </div>
            <div className="space-y-4">
              <p>
                Nach der Feier geht die Party erst richtig los! Die After-Wedding-Party 
                im Partybus ist der perfekte Abschluss für euren großen Tag.
              </p>
              <p>
                Auch Tagestouren für die gesamte Hochzeitsgesellschaft sind möglich – 
                von Location zu Location mit Stil.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Recommended Buses */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-anton text-3xl tracking-wider text-white uppercase mb-8">
            Premium <span className="text-primary-main">Auswahl</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {hochzeitBuses.map((bus, index) => (
              <BusCard key={bus.id} bus={bus} index={index} />
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-12 text-center"
        >
          <h2 className="font-anton text-3xl md:text-4xl tracking-wider text-white uppercase mb-4">
            Hochzeit planen?
          </h2>
          <p className="text-text-secondary font-manrope mb-8 max-w-2xl mx-auto">
            Lasst uns gemeinsam eure perfekte Hochzeitsfahrt planen!
          </p>
          <Link to="/kontakt" className="btn-primary" data-testid="hochzeit-cta">
            Hochzeitsanfrage senden
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Hochzeit;
