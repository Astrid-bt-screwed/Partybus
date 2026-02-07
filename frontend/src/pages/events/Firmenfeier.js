import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Building, Users, Award, Calendar } from 'lucide-react';
import { buses } from '../../data/siteData';
import BusCard from '../../components/BusCard';

const Firmenfeier = () => {
  const firmaBuses = buses.filter(bus => bus.idealFor.includes('Firmenfeier')).slice(0, 3);

  return (
    <div className="pt-32 pb-24" data-testid="firmenfeier-page">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6">
            <Building size={18} className="text-primary-main" />
            <span className="text-secondary-main font-unbounded text-sm">Teambuilding auf Rädern</span>
          </div>
          <h1 className="font-anton text-5xl md:text-6xl tracking-wider text-white uppercase mb-6">
            Firmenfeier & <span className="text-primary-main neon-text">Weihnachtsfeier</span>
          </h1>
          <p className="text-text-secondary text-lg font-manrope max-w-3xl mx-auto">
            Mal was anderes! Ob Teambuilding, Weihnachtsfeier oder Firmenjubiläum – 
            mit PARTYBOSS wird euer Firmenevent garantiert unvergesslich.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16"
        >
          {[
            { icon: Users, title: 'Teambuilding', desc: 'Stärkt den Zusammenhalt' },
            { icon: Building, title: 'Professionell', desc: 'Geprüfte Fahrer' },
            { icon: Award, title: 'Premium', desc: 'Top Ausstattung' },
            { icon: Calendar, title: 'Flexibel', desc: 'Individuelle Planung' }
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

        {/* Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-8 md:p-12 mb-16"
        >
          <h2 className="font-anton text-3xl tracking-wider text-white uppercase mb-6">
            Perfekt für <span className="text-secondary-main">Unternehmen</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-text-secondary font-manrope">
            <div className="space-y-4">
              <p>
                Weihnachtsfeier im Büro war gestern! Mit dem Partybus erlebt euer Team 
                ein Event, über das noch lange gesprochen wird.
              </p>
              <p>
                Unsere Busse bieten Platz für bis zu 50 Personen und sind mit allem 
                ausgestattet, was ihr für einen perfekten Abend braucht.
              </p>
            </div>
            <div className="space-y-4">
              <p>
                Individuelle Routenplanung, flexible Zeitgestaltung und professioneller 
                Service – wir passen uns euren Wünschen an.
              </p>
              <p>
                Auch Tagestouren ab 1.800€ sind möglich – perfekt für Betriebsausflüge 
                und Team-Events.
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
            Empfohlen für <span className="text-primary-main">Firmen</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {firmaBuses.map((bus, index) => (
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
            Firmenfeier planen?
          </h2>
          <p className="text-text-secondary font-manrope mb-8 max-w-2xl mx-auto">
            Kontaktiert uns für ein individuelles Angebot für eure Firma!
          </p>
          <Link to="/kontakt" className="btn-primary" data-testid="firmenfeier-cta">
            Firmenanfrage senden
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Firmenfeier;
