import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';

const EventCard = ({ event, index }) => {
  const IconComponent = Icons[event.icon] || Icons.PartyPopper;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      data-testid={`event-card-${event.id}`}
    >
      <Link to={event.link} className="block group">
        <div className="glass rounded-2xl p-8 card-hover h-full">
          {/* Icon */}
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-main/20 to-accent-purple/20 flex items-center justify-center mb-6 group-hover:shadow-neon transition-shadow duration-300">
            <IconComponent size={28} className="text-primary-main" />
          </div>
          
          {/* Content */}
          <h3 className="font-unbounded font-bold text-xl text-white mb-1">
            {event.title}
          </h3>
          <p className="text-secondary-main text-sm font-manrope mb-3">
            {event.subtitle}
          </p>
          <p className="text-text-secondary font-manrope">
            {event.description}
          </p>
          
          {/* CTA */}
          <div className="mt-6 flex items-center gap-2 text-primary-main font-unbounded font-bold text-sm group-hover:gap-4 transition-all duration-300">
            <span>Mehr erfahren</span>
            <span>→</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default EventCard;
