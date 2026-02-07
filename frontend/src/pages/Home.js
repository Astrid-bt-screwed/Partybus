import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Music, Lightbulb, Wine, Camera, Sofa, Shield } from 'lucide-react';
import EventCard from '../components/EventCard';
import BusCard from '../components/BusCard';
import FAQ from '../components/FAQ';
import { buses, eventTypes, faqData, cities } from '../data/siteData';

const Home = () => {
  const featuredBuses = buses.slice(0, 3);

  const features = [
    { icon: Music, title: 'Soundsystem & DJ-Pult', desc: 'Professionelle Soundsysteme mit iPad und WLAN' },
    { icon: Lightbulb, title: 'LED-Lichtsteuerung', desc: 'Atemberaubende Lichtshows für die perfekte Stimmung' },
    { icon: Wine, title: 'Bar mit Kühlschränken', desc: 'Gekühlte Getränke die ganze Fahrt über' },
    { icon: Camera, title: 'Fotobox & Spiele', desc: 'Poker, Roulette, PlayStation und mehr' },
    { icon: Sofa, title: 'Chill-Area & Lounge', desc: 'Komfortable Sitzbereiche zum Entspannen' },
    { icon: Shield, title: 'Geprüfte Fahrer', desc: 'Sichere Fahrt – ihr feiert, wir fahren' },
  ];

  return (
    <div className="relative" data-testid="home-page">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1545185105-a81262517cf4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1OTV8MHwxfHNlYXJjaHwzfHxwYXJ0eSUyMGJ1cyUyMGludGVyaW9yJTIwbmVvbiUyMGxpZ2h0cyUyMHBlb3BsZSUyMGRhbmNpbmd8ZW58MHx8fHwxNzcwNDc1NzI5fDA&ixlib=rb-4.1.0&q=85"
            alt="Party Bus Interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-bg-main via-bg-main/80 to-bg-main" />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-block px-4 py-2 rounded-full glass text-secondary-main font-unbounded text-sm mb-8"
            >
              Ab 650€ für 2 Stunden
            </motion.span>
            
            <h1 className="font-anton text-5xl md:text-7xl lg:text-8xl tracking-wider mb-6 uppercase">
              <span className="text-white">Partybus mieten</span>
              <br />
              <span className="text-primary-main neon-text">Linz, Wien, Salzburg</span>
            </h1>
            
            <p className="text-text-secondary text-lg md:text-xl max-w-3xl mx-auto mb-10 font-manrope">
              PARTYBOSS – dein Partybus für unvergessliche Feiern. Mobile Club-Ausstattung mit 
              Soundsystem, LED-Licht, DJ-Pult, Bar, Fotobox und Chill-Area.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/kontakt" className="btn-primary" data-testid="hero-cta-primary">
                Jetzt anfragen
              </Link>
              <Link to="/partybusse" className="btn-secondary" data-testid="hero-cta-secondary">
                Unsere Busse
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2"
          >
            <motion.div className="w-1 h-2 bg-primary-main rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Event Types Section */}
      <section className="py-24 md:py-32" data-testid="events-section">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-anton text-4xl md:text-5xl tracking-wider text-white uppercase mb-4">
              Für jede Art von <span className="text-primary-main">Feier</span>
            </h2>
            <p className="text-text-secondary font-manrope max-w-2xl mx-auto">
              Egal ob Junggesellenabschied, Geburtstag oder Firmenfeier – 
              unsere Partybusse sind für jede Art von Event geeignet.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eventTypes.map((event, index) => (
              <EventCard key={event.id} event={event} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Buses Section */}
      <section className="py-24 md:py-32 bg-bg-secondary" data-testid="buses-section">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6"
          >
            <div>
              <h2 className="font-anton text-4xl md:text-5xl tracking-wider text-white uppercase mb-4">
                Unsere <span className="text-primary-main">Partybusse</span>
              </h2>
              <p className="text-text-secondary font-manrope max-w-xl">
                Von luxuriösen Reisebussen bis hin zu nostalgischen Doppeldeckern – 
                bei uns findest du den perfekten Partybus.
              </p>
            </div>
            <Link 
              to="/partybusse" 
              className="flex items-center gap-2 text-secondary-main hover:text-white transition-colors duration-300 font-unbounded font-bold"
              data-testid="view-all-buses"
            >
              Alle Busse <ArrowRight size={20} />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredBuses.map((bus, index) => (
              <BusCard key={bus.id} bus={bus} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 md:py-32" data-testid="features-section">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-anton text-4xl md:text-5xl tracking-wider text-white uppercase mb-4">
              Warum mit <span className="text-primary-main">PARTYBOSS</span> feiern?
            </h2>
            <p className="text-text-secondary font-manrope max-w-2xl mx-auto">
              Unsere Partybusse sind mehr als nur Fahrzeuge – sie sind mobile Clubs!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-2xl p-8 card-hover"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-main/20 to-accent-purple/20 flex items-center justify-center mb-6">
                  <feature.icon size={24} className="text-primary-main" />
                </div>
                <h3 className="font-unbounded font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-text-secondary font-manrope">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Regions Section */}
      <section className="py-24 md:py-32 bg-bg-secondary" data-testid="regions-section">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-anton text-4xl md:text-5xl tracking-wider text-white uppercase mb-4">
              Partybus in <span className="text-secondary-main">ganz Österreich</span>
            </h2>
            <p className="text-text-secondary font-manrope max-w-2xl mx-auto">
              Wir sind in Oberösterreich, Niederösterreich, Wien, Salzburg, Steiermark und Bayern für euch unterwegs.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {cities.map((city, index) => (
              <motion.div
                key={city.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link 
                  to={city.link}
                  className="block glass rounded-2xl p-8 text-center card-hover group"
                  data-testid={`city-${city.name.toLowerCase()}`}
                >
                  <h3 className="font-unbounded font-bold text-2xl text-white group-hover:text-primary-main transition-colors duration-300">
                    {city.name}
                  </h3>
                  <p className="text-text-secondary text-sm mt-2 font-manrope">
                    Partybus mieten
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 md:py-32" data-testid="faq-home-section">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-anton text-4xl md:text-5xl tracking-wider text-white uppercase mb-4">
              Häufig gestellte <span className="text-primary-main">Fragen</span>
            </h2>
          </motion.div>

          <FAQ faqs={faqData.slice(0, 5)} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32" data-testid="cta-section">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="gradient-border rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/20 to-transparent" />
            <div className="relative z-10">
              <h2 className="font-anton text-4xl md:text-5xl tracking-wider text-white uppercase mb-6">
                Bereit für deine <span className="text-primary-main">Party</span>?
              </h2>
              <p className="text-text-secondary font-manrope mb-10 max-w-2xl mx-auto">
                Schick uns deine Anfrage – wir melden uns innerhalb von 24 Stunden 
                und erstellen dir ein individuelles Angebot.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/kontakt" className="btn-primary" data-testid="cta-contact">
                  Jetzt unverbindlich anfragen
                </Link>
                <a href="tel:06602081542" className="btn-secondary" data-testid="cta-phone">
                  0660 2081 542
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
