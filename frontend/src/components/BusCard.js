import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';

const BusCard = ({ bus, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
      data-testid={`bus-card-${bus.id}`}
    >
      <Link to={`/partybus/${bus.id}`} className="block">
        <div className="glass rounded-2xl overflow-hidden card-hover">
          {/* Image Container */}
          <div className="relative aspect-[4/3] overflow-hidden">
            <img
              src={bus.image}
              alt={bus.name}
              className="w-full h-full object-cover img-zoom"
              loading="lazy"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-bg-main/90 via-transparent to-transparent" />
            
            {/* Capacity Badge */}
            <div className="absolute top-4 right-4 glass rounded-full px-3 py-1 flex items-center gap-2">
              <Users size={14} className="text-secondary-main" />
              <span className="text-sm font-semibold text-white">{bus.capacity}</span>
            </div>
            
            {/* Name Overlay */}
            <div className="absolute bottom-4 left-4 right-4">
              <h3 className="font-unbounded font-bold text-lg text-white mb-1">
                {bus.name}
              </h3>
              <p className="text-text-secondary text-sm font-manrope">
                {bus.tagline}
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <p className="text-text-secondary text-sm font-manrope line-clamp-2 mb-4">
              {bus.description}
            </p>
            
            {/* Features Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {bus.features.slice(0, 3).map((feature, i) => (
                <span 
                  key={i} 
                  className="text-xs px-3 py-1 rounded-full bg-accent-dark text-primary-main font-manrope"
                >
                  {feature}
                </span>
              ))}
            </div>
            
            {/* CTA */}
            <div className="flex items-center justify-between">
              <span className="text-primary-main font-unbounded font-bold text-sm group-hover:translate-x-2 transition-transform duration-300">
                Details ansehen →
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default BusCard;
