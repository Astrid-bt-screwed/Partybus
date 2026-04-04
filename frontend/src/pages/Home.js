import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Music, Lightbulb, Gamepad2, Settings, MapPin, Star, Users, Euro, MessageSquare, Quote, ChevronRight } from 'lucide-react';
import EventCard from '../components/EventCard';
import BusCard from '../components/BusCard';
import FAQ from '../components/FAQ';
import { buses, eventTypes, faqData, cities } from '../data/siteData';

const HERO_IMAGE = 'https://customer-assets.emergentagent.com/job_2f76f164-136b-422a-ab2e-323f91ed41f1/artifacts/hws4pfos_bus1.jpeg';
const SCHOOL_BUS_IMAGE = 'https://customer-assets.emergentagent.com/job_2f76f164-136b-422a-ab2e-323f91ed41f1/artifacts/rol6rqe1_1775310423742-019d58be-8e6e-794f-a341-3ecd1c47be49.png';
const DOUBLE_DECKER_IMAGE = 'https://customer-assets.emergentagent.com/job_2f76f164-136b-422a-ab2e-323f91ed41f1/artifacts/0c6noyb8_%D0%A1%D1%82%D1%8E%D0%B0%D1%80%D0%B4%D0%B5%D1%81%D1%81%D0%B0%20%D0%BD%D0%B0%20%D0%B0%D0%B2%D1%81%D1%82%D1%80%D0%B8%D0%B9%D1%81%D0%BA%D0%BE%D0%BC%20%D0%BB%D1%83%D0%B3%D1%83.png';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const Home = () => {
  const featuredBuses = buses.slice(0, 3);

  const advantages = [
    { icon: Music, title: 'Bestes Soundsystem', desc: 'Leistungsstarke Subwoofer und DJ-Pult, damit ganz Linz deine Party hört.' },
    { icon: Lightbulb, title: 'Lichtshow', desc: 'LED-Beleuchtung, die Nachtclub-Atmosphäre mitten in Wels erzeugt.' },
    { icon: Gamepad2, title: 'Gaming-Zone', desc: 'PlayStation und Amazon Fire TV für Gäste, die eine Tanzpause brauchen.' },
    { icon: Settings, title: 'Flexibilität', desc: 'Geeignet für jede Veranstaltung — vom Junggesellenabschied bis zur Hochzeit in Oberösterreich.' },
  ];

  const locations = [
    { city: 'Linz', label: 'Linz', desc: 'Ideale Wahl für Jugendpartys, Abschlussfeiern und Firmenevents. Hol deine Gäste von jedem Punkt der Landeshauptstadt ab.', link: '/partybus-linz' },
    { city: 'Wels', label: 'Wels', desc: 'Wir organisieren unvergessliche mobile Feiern mit Möglichkeit zum Aussteigen bei den beliebtesten Lokalen der Stadt.', link: '/partybus-wels' },
    { city: 'Steyr', label: 'Steyr', desc: 'Für alle, die Stil und Komfort schätzen. Unsere gemütlichen Lounge-Bereiche sind perfekt für private Feiern.', link: '/partybus-steyr' },
    { city: 'Braunau am Inn', label: 'Braunau am Inn', desc: 'Wir arbeiten im gesamten Gebiet Oberösterreichs. Wo auch immer du bist — wir kommen zu dir.', link: '/kontakt' },
  ];

  const whyUs = [
    { icon: Users, title: 'Persönlicher Ansatz', desc: 'Du erhältst einen persönlichen Manager, der die Besonderheiten der Eventorganisation in Oberösterreich kennt.' },
    { icon: Euro, title: 'Transparente Preise', desc: 'Keine versteckten Gebühren für "Fahrten außerhalb Wiens". Wir sind direkt vor Ort.' },
    { icon: MessageSquare, title: 'Kostenlose Anfrage', desc: 'Verschwende keine Zeit mit langer Suche. Hinterlasse einfach eine Anfrage und wir besprechen die Details deiner Feier.' },
  ];

  return (
    <div className="relative" data-testid="home-page">
      {/* ====== HERO SECTION ====== */}
      <section className="min-h-screen flex items-center relative overflow-hidden pt-24" data-testid="hero-section">
        <div className="absolute inset-0 z-0">
          <img
            src={HERO_IMAGE}
            alt="PARTYBOSS Partybus Oberösterreich"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-bg-main via-bg-main/85 to-bg-main/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-main via-transparent to-bg-main/60" />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-block px-4 py-2 rounded-full glass text-secondary-main font-unbounded text-sm mb-8"
            >
              Oberösterreich | Linz | Wels | Steyr
            </motion.span>

            <h1 className="font-anton text-4xl sm:text-5xl lg:text-6xl tracking-wider mb-6 uppercase leading-tight" data-testid="hero-h1">
              <span className="text-white">Partybus mieten in </span>
              <span className="text-primary-main neon-text">Oberösterreich</span>
              <br />
              <span className="text-white text-3xl sm:text-4xl lg:text-5xl">Dein Fest auf Rädern in Linz, Wels & Steyr</span>
            </h1>

            <p className="text-text-secondary text-base md:text-lg max-w-2xl mb-10 font-manrope leading-relaxed" data-testid="hero-subtitle">
              Mobiler Club für dein Fest. Einzigartige Partybusse in Linz, Wels, Steyr und ganz Oberösterreich.
              Vergiss die Fahrten nach Wien — veranstalte eine unvergessliche Party direkt bei dir zuhause!
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/kontakt" className="btn-primary flex items-center gap-3" data-testid="hero-cta-primary">
                Partykosten berechnen
                <ArrowRight size={20} />
              </Link>
              <Link to="/partybusse" className="btn-secondary" data-testid="hero-cta-secondary">
                Unsere Busse entdecken
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

      {/* ====== BLOCK 1: ABOUT US & UNIQUENESS ====== */}
      <section className="py-24 md:py-32" data-testid="about-section">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <motion.div {...fadeUp}>
              <h2 className="font-anton text-4xl sm:text-5xl tracking-wider text-white uppercase mb-6 leading-tight">
                Partybusse in <span className="text-primary-main">Oberösterreich</span> von PARTYBOSS
              </h2>
              <p className="text-text-secondary font-manrope leading-relaxed mb-4">
                Planst du einen Junggesellenabschied in Linz, einen Geburtstag in Wels oder eine Firmenfeier in Steyr?
                Du musst nicht mehr nach Wien fahren, um die Atmosphäre einer großstädtischen Party zu erleben.
                Wir bieten exklusive Partybusse direkt hier, in Oberösterreich.
              </p>
              <p className="text-text-secondary font-manrope leading-relaxed mb-8">
                Unsere Busse sind nicht nur Transportmittel — sie sind echte mobile Clubs. Wir sind stolz darauf,
                der lokale Experte für Feiern auf Rädern für die Bewohner von Linz, Wels, Braunau am Inn und der
                gesamten Region zu sein. Jeder unserer Busse ist mit modernster Technik ausgestattet, damit deine
                Fahrt durch die Straßen Oberösterreichs zum Highlight des Jahres wird.
              </p>

              {/* Advantages Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {advantages.map((adv, index) => (
                  <motion.div
                    key={adv.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary-main/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <adv.icon size={20} className="text-primary-main" />
                    </div>
                    <div>
                      <h3 className="font-unbounded font-bold text-white text-sm mb-1">{adv.title}</h3>
                      <p className="text-text-secondary text-sm font-manrope leading-relaxed">{adv.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden gradient-border">
                <img
                  src={SCHOOL_BUS_IMAGE}
                  alt="Partybus Schoolbus Las Vegas"
                  className="w-full h-[500px] object-cover"
                  data-testid="about-image"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 glass rounded-2xl p-4 hidden lg:block">
                <p className="font-unbounded font-bold text-primary-main text-2xl">10+</p>
                <p className="text-text-secondary text-sm font-manrope">Partybusse</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ====== BLOCK 2: GEOGRAPHIC FOCUS (SEO KEY) ====== */}
      <section className="py-24 md:py-32 bg-bg-secondary" data-testid="locations-section">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image - left on desktop */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative order-2 lg:order-1"
            >
              <div className="rounded-2xl overflow-hidden gradient-border">
                <img
                  src={DOUBLE_DECKER_IMAGE}
                  alt="Nostalgie Doppeldecker in Oberösterreich"
                  className="w-full h-[500px] object-cover"
                  data-testid="locations-image"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 glass rounded-2xl p-4 hidden lg:block">
                <p className="font-unbounded font-bold text-secondary-main text-2xl">4+</p>
                <p className="text-text-secondary text-sm font-manrope">Standorte in OÖ</p>
              </div>
            </motion.div>

            {/* Text - right on desktop */}
            <motion.div {...fadeUp} className="order-1 lg:order-2">
              <h2 className="font-anton text-4xl sm:text-5xl tracking-wider text-white uppercase mb-6 leading-tight">
                Dein Fest beginnt hier: <span className="text-secondary-main">ganz Oberösterreich</span>
              </h2>
              <p className="text-text-secondary font-manrope leading-relaxed mb-8">
                Wir wissen, wie wichtig es ist, ein Fest ohne lange Anreise zu organisieren. Unser Team sitzt in
                Oberösterreich, daher bieten wir dir die besten Konditionen für die Partybus-Miete direkt in deiner Stadt.
              </p>

              {/* Locations */}
              <div className="space-y-5">
                {locations.map((loc, index) => (
                  <motion.div
                    key={loc.city}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={loc.link}
                      className="group flex gap-4 p-4 rounded-xl glass hover:border-primary-main/50 transition-all duration-300"
                      data-testid={`location-${loc.city.toLowerCase().replace(/ /g, '-')}`}
                    >
                      <div className="w-10 h-10 rounded-lg bg-secondary-main/10 flex items-center justify-center flex-shrink-0">
                        <MapPin size={20} className="text-secondary-main" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-unbounded font-bold text-white group-hover:text-primary-main transition-colors duration-300">
                          {loc.label}
                        </h3>
                        <p className="text-text-secondary text-sm font-manrope leading-relaxed mt-1">{loc.desc}</p>
                      </div>
                      <ChevronRight size={20} className="text-text-muted self-center opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ====== BLOCK 3: SOCIAL PROOF ====== */}
      <section className="py-24 md:py-32" data-testid="social-proof-section">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="font-anton text-4xl sm:text-5xl tracking-wider text-white uppercase mb-4">
              Über 100 zufriedene Kunden <span className="text-primary-main">in Oberösterreich</span>
            </h2>
          </motion.div>

          {/* Testimonial */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mb-16"
          >
            <div className="gradient-border rounded-2xl p-8 md:p-12 relative">
              <Quote size={48} className="text-primary-main/20 absolute top-6 left-6" />
              <blockquote className="text-text-secondary font-manrope text-lg leading-relaxed italic pl-8 relative z-10" data-testid="testimonial-quote">
                Wir wollten unsere Hochzeitsgäste in Oberösterreich überraschen und haben beschlossen,
                keinen Bus aus Wien kommen zu lassen. PARTYBOSS war direkt vor Ort! Das Team aus Linz hat
                alles erstklassig gemacht: Sound, Licht, Atmosphäre — unsere Gäste sind immer noch begeistert.
              </blockquote>
              <div className="mt-6 pl-8 flex items-center gap-3">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-primary-main fill-primary-main" />
                  ))}
                </div>
                <span className="text-text-muted text-sm font-manrope">— Hochzeitsfeier in Oberösterreich</span>
              </div>
            </div>
          </motion.div>

          {/* Why locals choose us */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="glass rounded-2xl p-8 card-hover text-center"
                data-testid={`why-us-${index}`}
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-main/20 to-accent-purple/20 flex items-center justify-center mb-6 mx-auto">
                  <item.icon size={24} className="text-primary-main" />
                </div>
                <h3 className="font-unbounded font-bold text-white mb-3">{item.title}</h3>
                <p className="text-text-secondary font-manrope text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== EVENT TYPES ====== */}
      <section className="py-24 md:py-32 bg-bg-secondary" data-testid="events-section">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="font-anton text-4xl sm:text-5xl tracking-wider text-white uppercase mb-4">
              Für jede Art von <span className="text-primary-main">Feier</span>
            </h2>
            <p className="text-text-secondary font-manrope max-w-2xl mx-auto">
              Egal ob Junggesellenabschied in Linz, Geburtstag in Wels oder Firmenfeier in Steyr —
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

      {/* ====== FEATURED BUSES ====== */}
      <section className="py-24 md:py-32" data-testid="buses-section">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <motion.div
            {...fadeUp}
            className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6"
          >
            <div>
              <h2 className="font-anton text-4xl sm:text-5xl tracking-wider text-white uppercase mb-4">
                Unsere <span className="text-primary-main">Partybusse</span>
              </h2>
              <p className="text-text-secondary font-manrope max-w-xl">
                Von luxuriösen Reisebussen bis hin zu nostalgischen Doppeldeckern —
                bei uns findest du den perfekten Partybus für Oberösterreich.
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

      {/* ====== REGIONS ====== */}
      <section className="py-24 md:py-32 bg-bg-secondary" data-testid="regions-section">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="font-anton text-4xl sm:text-5xl tracking-wider text-white uppercase mb-4">
              Partybus in <span className="text-secondary-main">ganz Österreich</span>
            </h2>
            <p className="text-text-secondary font-manrope max-w-2xl mx-auto">
              Wir sind in Oberösterreich, Niederösterreich, Wien, Salzburg, Steiermark und Bayern für euch unterwegs.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {cities.map((city, index) => (
              <motion.div
                key={city.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <Link
                  to={city.link}
                  className="block glass rounded-2xl p-6 text-center card-hover group"
                  data-testid={`city-${city.name.toLowerCase().replace(/ /g, '-')}`}
                >
                  <h3 className="font-unbounded font-bold text-lg text-white group-hover:text-primary-main transition-colors duration-300">
                    {city.name}
                  </h3>
                  <p className="text-text-secondary text-xs mt-2 font-manrope">
                    Partybus mieten
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== FAQ ====== */}
      <section className="py-24 md:py-32" data-testid="faq-home-section">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="font-anton text-4xl sm:text-5xl tracking-wider text-white uppercase mb-4">
              Häufig gestellte <span className="text-primary-main">Fragen</span>
            </h2>
          </motion.div>
          <FAQ faqs={faqData.slice(0, 5)} />
        </div>
      </section>

      {/* ====== CTA ====== */}
      <section className="py-24 md:py-32" data-testid="cta-section">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <motion.div
            {...fadeUp}
            className="gradient-border rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/20 to-transparent" />
            <div className="relative z-10">
              <h2 className="font-anton text-4xl sm:text-5xl tracking-wider text-white uppercase mb-6">
                Nicht nach Wien fahren — <span className="text-primary-main">feiere bei dir!</span>
              </h2>
              <p className="text-text-secondary font-manrope mb-10 max-w-2xl mx-auto">
                Hol dir die Party direkt in deinen Ort. Schick uns deine Anfrage — wir melden uns
                innerhalb von 24 Stunden und erstellen dir ein individuelles Angebot für Oberösterreich.
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
