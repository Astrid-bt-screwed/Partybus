import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Users, Music, Lightbulb, Wine, Shield, MapPin, Check, ArrowRight, Heart, Briefcase, Cake, GraduationCap, Star } from 'lucide-react';
import { buses, busFleetFaq } from '../data/siteData';
import BusCard from '../components/BusCard';
import FAQ from '../components/FAQ';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

// Table row sorted by capacity for the comparison table
const sortedBuses = [...buses].sort((a, b) => a.capacity - b.capacity);

const Partybusse = () => {
  const standardEquipment = [
    { icon: Music, text: 'Professionelles Soundsystem (PR-Sound oder vergleichbar)' },
    { icon: Lightbulb, text: 'LED-Lichtsteuerung für Party-Atmosphäre' },
    { icon: Wine, text: 'Bar-Bereich mit Getränkehaltern' },
    { icon: Shield, text: 'Erfahrener Chauffeur mit österreichischem Führerschein' },
    { icon: MapPin, text: 'Flexible Routen durch Wien, Oberösterreich und ganz Österreich' },
    { icon: Check, text: 'Versicherung und Sicherheitsausstattung' },
  ];

  const bookingSteps = [
    { step: '1', title: 'Bus wählen', desc: 'Entscheide dich anhand der Gruppengröße und deines Anlasses' },
    { step: '2', title: 'Anfrage senden', desc: 'Teile uns Datum, Personenanzahl und Wunschroute mit' },
    { step: '3', title: 'Angebot erhalten', desc: 'Wir prüfen Verfügbarkeit und erstellen ein unverbindliches Angebot' },
    { step: '4', title: 'Feiern!', desc: 'Wir kümmern uns um den Rest, du genießt die Fahrt' },
  ];

  return (
    <div className="pt-32 pb-24" data-testid="partybusse-page">
      {/* Schema.org JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Partybus Flotte Wien & Oberösterreich",
        "description": "10 Partybusse von 8 bis 50 Personen zur Miete in Wien und Oberösterreich",
        "itemListElement": buses.map((bus, i) => ({
          "@type": "ListItem",
          "position": i + 1,
          "item": {
            "@type": "Vehicle",
            "name": `Partybus ${bus.shortName}`,
            "vehicleSeatingCapacity": String(bus.capacity),
            "description": bus.description,
            "offers": {
              "@type": "Offer",
              "availability": "https://schema.org/InStock",
              "areaServed": "Wien, Oberösterreich, Österreich"
            }
          }
        }))
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": busFleetFaq.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      })}} />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        {/* ====== H1 + QUICK ANSWER BLOCK ====== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20"
          data-testid="fleet-header"
        >
          <h1 className="font-anton text-4xl sm:text-5xl lg:text-6xl tracking-wider text-white uppercase mb-6">
            Partybus Flotte <span className="text-primary-main neon-text">Wien</span> — 10 Partybusse von 8 bis 50 Personen
          </h1>
          <div className="glass rounded-2xl p-6 md:p-8" data-testid="quick-answer">
            <p className="text-text-secondary font-manrope leading-relaxed text-base md:text-lg">
              Partyboss Wien vermietet <strong className="text-white">10 Partybusse für 8–50 Personen</strong>.
              Von kompakten 8-Sitzer Crazybus bis zum 50-Sitzer Dark Thunder mit Dancefloor.
              Alle Busse mit Soundsystem, Bar und Licht. Ideal für Junggesellenabschiede, Geburtstage,
              Firmenevents in Wien, Oberösterreich und ganz Österreich.
            </p>
          </div>
        </motion.div>

        {/* ====== COMPARISON TABLE ====== */}
        <motion.section {...fadeUp} className="mb-24" data-testid="comparison-table-section">
          <h2 className="font-anton text-3xl sm:text-4xl tracking-wider text-white uppercase mb-8">
            Welcher Partybus passt zu <span className="text-primary-main">deiner Gruppengröße</span>?
          </h2>
          <div className="overflow-x-auto glass rounded-2xl">
            <table className="w-full text-left" data-testid="comparison-table">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="px-4 py-4 font-unbounded font-bold text-sm text-white">Bus Name</th>
                  <th className="px-4 py-4 font-unbounded font-bold text-sm text-white">Kapazität</th>
                  <th className="px-4 py-4 font-unbounded font-bold text-sm text-white hidden md:table-cell">Kategorie</th>
                  <th className="px-4 py-4 font-unbounded font-bold text-sm text-white hidden lg:table-cell">Besondere Ausstattung</th>
                  <th className="px-4 py-4 font-unbounded font-bold text-sm text-white hidden md:table-cell">Ideal für</th>
                  <th className="px-4 py-4"></th>
                </tr>
              </thead>
              <tbody>
                {sortedBuses.map((bus, i) => (
                  <tr key={bus.id} className={`border-b border-white/5 hover:bg-white/5 transition-colors duration-200 ${i % 2 === 0 ? 'bg-white/[0.02]' : ''}`}>
                    <td className="px-4 py-4">
                      <Link to={`/partybus/${bus.id}`} className="text-white font-manrope font-semibold hover:text-primary-main transition-colors duration-200">
                        {bus.shortName}
                      </Link>
                    </td>
                    <td className="px-4 py-4">
                      <span className="inline-flex items-center gap-2">
                        <Users size={14} className="text-secondary-main" />
                        <span className="text-text-secondary font-manrope">{bus.capacityLabel}</span>
                      </span>
                    </td>
                    <td className="px-4 py-4 hidden md:table-cell">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-manrope font-semibold ${
                        bus.category === 'Mini' ? 'bg-green-500/10 text-green-400' :
                        bus.category === 'Mittel' ? 'bg-blue-500/10 text-blue-400' :
                        bus.category === 'Groß' ? 'bg-purple-500/10 text-purple-400' :
                        bus.category === 'XL' ? 'bg-orange-500/10 text-orange-400' :
                        'bg-red-500/10 text-red-400'
                      }`}>
                        {bus.category}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-text-secondary text-sm font-manrope hidden lg:table-cell">{bus.specialEquipment}</td>
                    <td className="px-4 py-4 hidden md:table-cell">
                      <div className="flex flex-wrap gap-1">
                        {bus.idealFor.slice(0, 2).map((item, j) => (
                          <span key={j} className="text-xs px-2 py-1 rounded-full bg-accent-dark text-primary-main font-manrope">{item}</span>
                        ))}
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <Link to={`/partybus/${bus.id}`} className="text-primary-main hover:text-white text-sm font-semibold transition-colors duration-200">
                        Details
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.section>

        {/* ====== RECOMMENDATIONS BY OCCASION ====== */}
        <motion.section {...fadeUp} className="mb-24" data-testid="occasion-recommendations">
          <h2 className="font-anton text-3xl sm:text-4xl tracking-wider text-white uppercase mb-10">
            Partybusse nach <span className="text-secondary-main">Anlass</span> empfohlen
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* JGA */}
            <div className="glass rounded-2xl p-6 md:p-8" data-testid="occasion-jga">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary-main/10 flex items-center justify-center">
                  <Star size={20} className="text-primary-main" />
                </div>
                <h3 className="font-unbounded font-bold text-white text-lg">Junggesellenabschiede (JGA)</h3>
              </div>
              <ul className="space-y-3 font-manrope text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-primary-main font-bold mt-0.5">Top:</span>
                  <span className="text-text-secondary"><Link to="/partybus/schoolbus-new-york" className="text-white hover:text-primary-main transition-colors">Schoolbus New York III</Link> (42 Pers.) — authentischer USA-Charme</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary-main font-bold mt-0.5">Alt:</span>
                  <span className="text-text-secondary"><Link to="/partybus/schoolbus-las-vegas" className="text-white hover:text-primary-main transition-colors">Schoolbus Las Vegas IV</Link> (42 Pers.) — Vegas-Flair</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 font-bold mt-0.5">Klein:</span>
                  <span className="text-text-secondary"><Link to="/partybus/crazybus" className="text-white hover:text-primary-main transition-colors">Crazybus VIII</Link> (8 Pers.) — intim und privat</span>
                </li>
              </ul>
            </div>

            {/* Firmenevents */}
            <div className="glass rounded-2xl p-6 md:p-8" data-testid="occasion-firmen">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary-main/10 flex items-center justify-center">
                  <Briefcase size={20} className="text-primary-main" />
                </div>
                <h3 className="font-unbounded font-bold text-white text-lg">Firmenevents & Teambuilding</h3>
              </div>
              <ul className="space-y-3 font-manrope text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-primary-main font-bold mt-0.5">Top:</span>
                  <span className="text-text-secondary"><Link to="/partybus/doppeldecker-england" className="text-white hover:text-primary-main transition-colors">Nostalgie Doppeldecker IX</Link> (40+ Pers.) — einzigartiges Erlebnis</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary-main font-bold mt-0.5">Alt:</span>
                  <span className="text-text-secondary"><Link to="/partybus/doppeldecker-schottland" className="text-white hover:text-primary-main transition-colors">Doppeldecker Schottland X</Link> (40+ Pers.) — in Österreich einzigartig</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 font-bold mt-0.5">Tour:</span>
                  <span className="text-text-secondary"><Link to="/partybus/der-zeus" className="text-white hover:text-primary-main transition-colors">Der Zeus II</Link> (38 Pers.) — mit Schlafplätzen für Mehrtagestouren</span>
                </li>
              </ul>
            </div>

            {/* Geburtstage */}
            <div className="glass rounded-2xl p-6 md:p-8" data-testid="occasion-geburtstag">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary-main/10 flex items-center justify-center">
                  <Cake size={20} className="text-primary-main" />
                </div>
                <h3 className="font-unbounded font-bold text-white text-lg">Geburtstagsfeiern</h3>
              </div>
              <ul className="space-y-3 font-manrope text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-primary-main font-bold mt-0.5">bis 20:</span>
                  <span className="text-text-secondary"><Link to="/partybus/crazybus" className="text-white hover:text-primary-main transition-colors">Crazybus VIII</Link> oder <Link to="/partybus/der-zeus" className="text-white hover:text-primary-main transition-colors">Der Zeus II</Link></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary-main font-bold mt-0.5">20–40:</span>
                  <span className="text-text-secondary"><Link to="/partybus/der-zerstoerer" className="text-white hover:text-primary-main transition-colors">Der Zerstörer I</Link>, <Link to="/partybus/the-beast" className="text-white hover:text-primary-main transition-colors">The Beast VI</Link> oder Schoolbusse</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 font-bold mt-0.5">40+:</span>
                  <span className="text-text-secondary"><Link to="/partybus/dark-thunder" className="text-white hover:text-primary-main transition-colors">Dark Thunder VII</Link> (50 Pers.) mit Dancefloor</span>
                </li>
              </ul>
            </div>

            {/* Hochzeiten */}
            <div className="glass rounded-2xl p-6 md:p-8" data-testid="occasion-hochzeit">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary-main/10 flex items-center justify-center">
                  <Heart size={20} className="text-primary-main" />
                </div>
                <h3 className="font-unbounded font-bold text-white text-lg">Hochzeiten</h3>
              </div>
              <ul className="space-y-3 font-manrope text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-primary-main font-bold mt-0.5">Top:</span>
                  <span className="text-text-secondary"><Link to="/partybus/doppeldecker-england" className="text-white hover:text-primary-main transition-colors">Nostalgie Doppeldecker IX</Link> — stilvoll und fotogen</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary-main font-bold mt-0.5">Alt:</span>
                  <span className="text-text-secondary"><Link to="/partybus/doppeldecker-schottland" className="text-white hover:text-primary-main transition-colors">Doppeldecker Schottland X</Link> — einzigartiger Hingucker</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* ====== STANDARD EQUIPMENT ====== */}
        <motion.section {...fadeUp} className="mb-24" data-testid="standard-equipment">
          <h2 className="font-anton text-3xl sm:text-4xl tracking-wider text-white uppercase mb-8">
            Standardausstattung <span className="text-primary-main">aller Partybusse</span>
          </h2>
          <p className="text-text-secondary font-manrope mb-8">
            Jeder Partybus bei Partyboss bietet:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {standardEquipment.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-center gap-4 glass rounded-xl p-4"
              >
                <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0">
                  <item.icon size={18} className="text-green-400" />
                </div>
                <span className="text-text-secondary font-manrope text-sm">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ====== DETAILED BUS DESCRIPTIONS ====== */}
        <motion.section {...fadeUp} className="mb-24" data-testid="bus-details-section">
          <h2 className="font-anton text-3xl sm:text-4xl tracking-wider text-white uppercase mb-10">
            Detaillierte <span className="text-secondary-main">Bus-Beschreibungen</span>
          </h2>
          <div className="space-y-6">
            {buses.map((bus, index) => (
              <motion.div
                key={bus.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="glass rounded-2xl overflow-hidden"
                data-testid={`bus-detail-${bus.id}`}
              >
                <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-0">
                  {/* Image */}
                  <Link to={`/partybus/${bus.id}`} className="block">
                    <img
                      src={bus.image}
                      alt={bus.name}
                      className="w-full h-48 md:h-full object-cover"
                      loading="lazy"
                    />
                  </Link>
                  {/* Content */}
                  <div className="p-6">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <Link to={`/partybus/${bus.id}`}>
                        <h3 className="font-unbounded font-bold text-white hover:text-primary-main transition-colors">{bus.name} {bus.number}</h3>
                      </Link>
                      <span className="text-text-muted font-manrope text-sm">— {bus.tagline}</span>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm font-manrope mb-3">
                      <span className="text-secondary-main"><strong>Kapazität:</strong> Bis {bus.capacity} Gäste</span>
                      <span className="text-text-secondary"><strong className="text-white">Highlights:</strong> {bus.specialEquipment}</span>
                    </div>
                    <p className="text-text-secondary font-manrope text-sm mb-3">
                      <strong className="text-white">Bestens geeignet für:</strong> {bus.bestFor}
                    </p>
                    <p className="text-text-muted font-manrope text-sm italic">
                      {bus.detailDescription}
                    </p>
                    <Link to={`/partybus/${bus.id}`} className="inline-flex items-center gap-2 text-primary-main hover:text-white text-sm font-semibold mt-3 transition-colors duration-200">
                      Mehr Details <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ====== BUS CARDS GRID ====== */}
        <motion.section {...fadeUp} className="mb-24" data-testid="bus-grid-section">
          <h2 className="font-anton text-3xl sm:text-4xl tracking-wider text-white uppercase mb-10">
            Alle <span className="text-primary-main">Partybusse</span> im Überblick
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {buses.map((bus, index) => (
              <BusCard key={bus.id} bus={bus} index={index} />
            ))}
          </div>
        </motion.section>

        {/* ====== FAQ ====== */}
        <motion.section {...fadeUp} className="mb-24" data-testid="fleet-faq-section">
          <h2 className="font-anton text-3xl sm:text-4xl tracking-wider text-white uppercase mb-10">
            Häufig gestellte Fragen <span className="text-primary-main">zu unseren Partybussen</span>
          </h2>
          <FAQ faqs={busFleetFaq} />
        </motion.section>

        {/* ====== BOOKING PROCESS ====== */}
        <motion.section {...fadeUp} className="mb-24" data-testid="booking-process">
          <h2 className="font-anton text-3xl sm:text-4xl tracking-wider text-white uppercase mb-10">
            Partybus mieten — <span className="text-secondary-main">so einfach geht's</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bookingSteps.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="glass rounded-2xl p-6 text-center relative"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-main to-accent-purple flex items-center justify-center mx-auto mb-4">
                  <span className="font-anton text-xl text-white">{item.step}</span>
                </div>
                <h3 className="font-unbounded font-bold text-white mb-2">{item.title}</h3>
                <p className="text-text-secondary font-manrope text-sm">{item.desc}</p>
                {i < bookingSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRight size={20} className="text-primary-main/30" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ====== CTA ====== */}
        <motion.div
          {...fadeUp}
          className="gradient-border rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
          data-testid="fleet-cta"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/20 to-transparent" />
          <div className="relative z-10">
            <h2 className="font-anton text-3xl sm:text-4xl tracking-wider text-white uppercase mb-4">
              Jetzt Partybus anfragen
            </h2>
            <p className="text-text-secondary font-manrope mb-8 max-w-2xl mx-auto">
              Antwort innerhalb 24 Stunden. Wir holen dich an jedem beliebigen Ort ab und
              fahren nach deinen Wünschen durch Wien, Oberösterreich und ganz Österreich.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/kontakt" className="btn-primary" data-testid="fleet-cta-contact">
                Jetzt unverbindlich anfragen
              </Link>
              <a href="tel:06602081542" className="btn-secondary" data-testid="fleet-cta-phone">
                0660 2081 542
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Partybusse;
