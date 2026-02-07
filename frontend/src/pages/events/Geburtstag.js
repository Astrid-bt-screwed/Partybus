import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Cake, Gift, Music, Camera } from 'lucide-react';
import { buses } from '../../data/siteData';
import BusCard from '../../components/BusCard';

const Geburtstag = () => {
  const birthdayBuses = buses.filter(bus => bus.idealFor.includes('Geburtstag')).slice(0, 3);

  return (
    <div className="pt-32 pb-24" data-testid="geburtstag-page">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6">
            <Cake size={18} className="text-primary-main" />
            <span className="text-secondary-main font-unbounded text-sm">Feiere deinen Tag</span>
          </div>
          <h1 className="font-anton text-5xl md:text-6xl tracking-wider text-white uppercase mb-6">
            Geburtstagsparty im <span className="text-primary-main neon-text">Partybus</span>
          </h1>
          <p className="text-text-secondary text-lg font-manrope max-w-3xl mx-auto">
            Feiere deinen Geburtstag wie nie zuvor! Mit Freunden, Musik und der besten 
            Stimmung auf Rädern wird dein Ehrentag unvergesslich.
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
            { icon: Cake, title: 'Dein Tag', desc: 'Alles dreht sich um dich' },
            { icon: Music, title: 'Deine Musik', desc: 'Spiel was du willst' },
            { icon: Gift, title: 'Deine Gäste', desc: 'Alle zusammen feiern' },
            { icon: Camera, title: 'Deine Fotos', desc: 'Fotobox inklusive' }
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
            Warum Geburtstag im <span className="text-secondary-main">Partybus</span>?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-text-secondary font-manrope">
            <div className="space-y-4">
              <p>
                Vergiss langweilige Locations! Im Partybus bist du und deine Freunde 
                mitten im Geschehen – mit Soundsystem, LED-Lichtshow und allem, 
                was du für eine epische Feier brauchst.
              </p>
              <p>
                Egal ob 18., 30. oder 50. Geburtstag – wir machen jeden 
                Geburtstag zu einem unvergesslichen Erlebnis.
              </p>
            </div>
            <div className="space-y-4">
              <p>
                Bring deine eigenen Getränke mit oder nutze unsere Bar – 
                Kühlschränke sind inklusive! Und das Beste: Ihr könnt 
                die Route selbst bestimmen.
              </p>
              <p>
                Von der Abholung bis zur Rückkehr kümmern wir uns um alles. 
                Du musst nur feiern!
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
            Perfekt für <span className="text-primary-main">Geburtstage</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {birthdayBuses.map((bus, index) => (
              <BusCard key={bus.id} bus={bus} index={index} />
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="gradient-border rounded-3xl p-12 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/20 to-transparent" />
          <div className="relative z-10">
            <h2 className="font-anton text-3xl md:text-4xl tracking-wider text-white uppercase mb-4">
              Geburtstag planen?
            </h2>
            <p className="text-text-secondary font-manrope mb-8 max-w-2xl mx-auto">
              Sag uns Bescheid und wir machen deinen Geburtstag zum besten Tag des Jahres!
            </p>
            <Link to="/kontakt" className="btn-primary" data-testid="geburtstag-cta">
              Geburtstagsparty anfragen
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Geburtstag;
