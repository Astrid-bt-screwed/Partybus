import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Users, ArrowLeft, Check } from 'lucide-react';
import { buses } from '../data/siteData';

const BusDetail = () => {
  const { busId } = useParams();
  const bus = buses.find(b => b.id === busId);

  if (!bus) {
    return (
      <div className="pt-32 pb-24 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-anton text-4xl text-white mb-4">Bus nicht gefunden</h1>
          <Link to="/partybusse" className="btn-primary">Zurück zu allen Bussen</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24" data-testid="bus-detail-page">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        {/* Back Link */}
        <Link 
          to="/partybusse" 
          className="inline-flex items-center gap-2 text-text-secondary hover:text-white transition-colors duration-300 mb-8 font-manrope"
          data-testid="back-to-buses"
        >
          <ArrowLeft size={20} />
          Zurück zu allen Bussen
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass rounded-2xl overflow-hidden"
          >
            <img
              src={bus.image}
              alt={bus.name}
              className="w-full h-full object-cover aspect-[4/3]"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="glass rounded-full px-4 py-2 inline-flex items-center gap-2 mb-6">
              <Users size={18} className="text-secondary-main" />
              <span className="text-white font-semibold">Bis zu {bus.capacity} Personen</span>
            </div>

            <h1 className="font-anton text-4xl md:text-5xl tracking-wider text-white uppercase mb-2">
              {bus.name}
            </h1>
            <p className="text-secondary-main font-unbounded text-lg mb-6">
              {bus.tagline}
            </p>

            <p className="text-text-secondary font-manrope text-lg leading-relaxed mb-8">
              {bus.description}
            </p>

            {/* Features */}
            <div className="mb-8">
              <h3 className="font-unbounded font-bold text-white mb-4">Ausstattung</h3>
              <div className="grid grid-cols-2 gap-3">
                {bus.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check size={18} className="text-primary-main" />
                    <span className="text-text-secondary font-manrope">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Ideal For */}
            <div className="mb-10">
              <h3 className="font-unbounded font-bold text-white mb-4">Ideal für</h3>
              <div className="flex flex-wrap gap-2">
                {bus.idealFor.map((item, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 rounded-full bg-accent-dark text-primary-main font-manrope text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/kontakt" className="btn-primary" data-testid="bus-detail-cta">
                Jetzt "{bus.name.replace('Partybus ', '').replace('"', '').replace('"', '')}" anfragen
              </Link>
              <a href="tel:06602081542" className="btn-secondary">
                0660 2081 542
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BusDetail;
