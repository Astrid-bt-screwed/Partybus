import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, Music, Users, Clock } from 'lucide-react';
import { buses, eventTypes } from '../../data/siteData';
import BusCard from '../../components/BusCard';

const Salzburg = () => {
  const featuredBuses = buses.slice(0, 3);

  const routes = [
    'Pickup Salzburg → Altstadt → Festung Hohensalzburg → Club-Tour',
    'Getreidegasse → Mirabell → Salzach-Promenade → Partymeile',
    'Ausflüge ins Salzburger Land möglich'
  ];

  return (
    <div className="pt-32 pb-24" data-testid="salzburg-page">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6">
            <MapPin size={18} className="text-primary-main" />
            <span className="text-secondary-main font-unbounded text-sm">Mozartstadt</span>
          </div>
          <h1 className="font-anton text-5xl md:text-6xl tracking-wider text-white uppercase mb-6">
            Partybus <span className="text-primary-main neon-text">Salzburg</span>
          </h1>
          <p className="text-text-secondary text-lg font-manrope max-w-3xl mx-auto">
            Feiere mobil in Salzburg: Partybus ab 650€/2h mit LED-Licht, DJ-Pult, Bar & Entertainment. 
            Ideal für Geburtstage, Firmenevents oder Tagestouren ab 1800€.
          </p>
        </motion.div>

        {/* Quick Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {[
            { icon: MapPin, title: 'Salzburg', desc: 'Stadt & Land' },
            { icon: Users, title: '8-50', desc: 'Personen' },
            { icon: Clock, title: 'ab 650€', desc: '2 Stunden' },
            { icon: Music, title: 'Premium', desc: 'Ausstattung' }
          ].map((item, i) => (
            <div key={i} className="glass rounded-2xl p-6 text-center">
              <item.icon size={24} className="text-primary-main mx-auto mb-3" />
              <h3 className="font-unbounded font-bold text-white">{item.title}</h3>
              <p className="text-text-secondary font-manrope text-sm">{item.desc}</p>
            </div>
          ))}
        </motion.div>

        {/* Routes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-8 md:p-12 mb-16"
        >
          <h2 className="font-anton text-3xl tracking-wider text-white uppercase mb-6">
            Beliebte <span className="text-secondary-main">Routen in Salzburg</span>
          </h2>
          <ul className="space-y-4">
            {routes.map((route, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-primary-main font-bold">{i + 1}.</span>
                <span className="text-text-secondary font-manrope">{route}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Events */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-anton text-3xl tracking-wider text-white uppercase mb-8">
            Events in <span className="text-primary-main">Salzburg</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {eventTypes.map((event) => (
              <Link 
                key={event.id}
                to={event.link}
                className="glass rounded-xl p-4 text-center hover:border-primary-main/50 transition-colors duration-300"
              >
                <span className="text-white font-manrope text-sm">{event.title}</span>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Buses */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-anton text-3xl tracking-wider text-white uppercase mb-8">
            Verfügbar in <span className="text-secondary-main">Salzburg</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredBuses.map((bus, index) => (
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
              Partybus Salzburg anfragen
            </h2>
            <p className="text-text-secondary font-manrope mb-8 max-w-2xl mx-auto">
              Die Mozartstadt rocken – mit PARTYBOSS!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/kontakt" className="btn-primary" data-testid="salzburg-cta">
                Anfrage für Salzburg
              </Link>
              <a href="tel:06602081542" className="btn-secondary">
                0660 2081 542
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Salzburg;
