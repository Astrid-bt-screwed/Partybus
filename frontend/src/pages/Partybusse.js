import React from 'react';
import { motion } from 'framer-motion';
import BusCard from '../components/BusCard';
import { buses } from '../data/siteData';
import { Link } from 'react-router-dom';

const Partybusse = () => {
  return (
    <div className="pt-32 pb-24" data-testid="partybusse-page">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="font-anton text-5xl md:text-6xl tracking-wider text-white uppercase mb-6">
            Unsere <span className="text-primary-main neon-text">Partybusse</span>
          </h1>
          <p className="text-text-secondary text-lg font-manrope max-w-3xl mx-auto">
            Von luxuriösen Reisebussen bis hin zu nostalgischen Doppeldeckern – 
            bei uns findest du den perfekten Partybus für dein Event. Jeder unserer 
            Busse ist ein fahrender Club mit allem, was du für eine unvergessliche Feier brauchst.
          </p>
        </motion.div>

        {/* Bus Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {buses.map((bus, index) => (
            <BusCard key={bus.id} bus={bus} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-12 text-center"
        >
          <h2 className="font-anton text-3xl md:text-4xl tracking-wider text-white uppercase mb-4">
            Nicht sicher, welcher Bus?
          </h2>
          <p className="text-text-secondary font-manrope mb-8 max-w-2xl mx-auto">
            Kein Problem! Sag uns einfach, wie viele Personen ihr seid und was für ein Event ihr plant. 
            Wir empfehlen dir den perfekten Bus für deine Party.
          </p>
          <Link to="/kontakt" className="btn-primary" data-testid="buses-cta">
            Jetzt anfragen
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Partybusse;
