import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check, PartyPopper, Users, Music, MapPin } from 'lucide-react';
import { buses } from '../../data/siteData';
import BusCard from '../../components/BusCard';

const JGA = () => {
  const jgaBuses = buses.filter(bus => bus.idealFor.includes('JGA')).slice(0, 3);

  const benefits = [
    'Keine Öffis – alle zusammen im Partybus',
    'Musik & Drinks im Bus',
    'Fixe Pauschalen & Pakete',
    'Flexible Routen nach Wunsch',
    'Bar-Hopping ohne Stress',
    'Unvergessliche Erinnerungen'
  ];

  const packages = [
    { name: '3-Stunden Trip', desc: 'Perfekt für den Start in den Abend', price: 'ab 850€' },
    { name: '5-Stunden Paket', desc: 'Für eine ausgedehnte Tour durch die Stadt', price: 'ab 1.200€' },
    { name: 'Nachtpaket', desc: 'Die ganze Nacht durchfeiern', price: 'auf Anfrage' }
  ];

  return (
    <div className="pt-32 pb-24" data-testid="jga-page">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6">
            <PartyPopper size={18} className="text-primary-main" />
            <span className="text-secondary-main font-unbounded text-sm">Polterabend & JGA</span>
          </div>
          <h1 className="font-anton text-5xl md:text-6xl tracking-wider text-white uppercase mb-6">
            Partybus für <span className="text-primary-main neon-text">Junggesellenabschied</span>
          </h1>
          <p className="text-text-secondary text-lg font-manrope max-w-3xl mx-auto">
            Die ultimative Feier vor dem großen Tag! Mit dem PARTYBOSS wird euer JGA 
            zu einem unvergesslichen Erlebnis. Bar-Hopping, Club-Tour oder individuelle Route – 
            wir fahren euch, wohin ihr wollt.
          </p>
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-8 md:p-12 mb-16"
        >
          <h2 className="font-anton text-3xl tracking-wider text-white uppercase mb-8">
            Vorteile für deinen <span className="text-secondary-main">JGA</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {benefits.map((benefit, i) => (
              <div key={i} className="flex items-center gap-3">
                <Check size={20} className="text-primary-main flex-shrink-0" />
                <span className="text-text-secondary font-manrope">{benefit}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Scenario */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-anton text-3xl tracking-wider text-white uppercase mb-8">
            So läuft euer <span className="text-primary-main">JGA</span> ab
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: Users, title: 'Abholung', desc: 'Wir holen euch am Treffpunkt ab' },
              { icon: Music, title: 'Vorglühen', desc: 'Party startet direkt im Bus' },
              { icon: MapPin, title: 'Tour', desc: 'Bar-Hopping oder Club-Route' },
              { icon: PartyPopper, title: 'Feiern', desc: 'Unvergessliche Erinnerungen' }
            ].map((step, i) => (
              <div key={i} className="glass rounded-2xl p-6 text-center">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-main/20 to-accent-purple/20 flex items-center justify-center mx-auto mb-4">
                  <step.icon size={20} className="text-primary-main" />
                </div>
                <h3 className="font-unbounded font-bold text-white mb-2">{step.title}</h3>
                <p className="text-text-secondary font-manrope text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Packages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-anton text-3xl tracking-wider text-white uppercase mb-8">
            JGA <span className="text-secondary-main">Pakete</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((pkg, i) => (
              <div key={i} className="glass rounded-2xl p-6 card-hover">
                <h3 className="font-unbounded font-bold text-xl text-white mb-2">{pkg.name}</h3>
                <p className="text-text-secondary font-manrope text-sm mb-4">{pkg.desc}</p>
                <p className="font-anton text-2xl text-primary-main">{pkg.price}</p>
              </div>
            ))}
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
            Empfohlene <span className="text-primary-main">Busse</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {jgaBuses.map((bus, index) => (
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
            JGA planen?
          </h2>
          <p className="text-text-secondary font-manrope mb-8 max-w-2xl mx-auto">
            Schick uns deine Anfrage und wir erstellen dir ein individuelles Angebot für den perfekten JGA!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/kontakt" className="btn-primary" data-testid="jga-cta">
              JGA Anfrage senden
            </Link>
            <a href="tel:06602081542" className="btn-secondary">
              0660 2081 542
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default JGA;
