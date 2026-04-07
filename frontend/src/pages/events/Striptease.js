import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Flame, Check, MapPin, Music, Wine, Phone, ArrowRight, Star, Quote, Shield, Sparkles, Eye } from 'lucide-react';
import { buses } from '../../data/siteData';
import BusCard from '../../components/BusCard';

const STRIP_IMAGE = 'https://customer-assets.emergentagent.com/job_2f76f164-136b-422a-ab2e-323f91ed41f1/artifacts/5h4t4saf_%D0%9F%D0%BE%D0%B6%D0%B0%D1%80%D0%BD%D1%8B%D0%B5-%D1%81%D1%82%D1%80%D0%B8%D0%BF%D0%BF%D0%B5%D1%80%D1%8B%20%D0%B2%20%D0%B0%D0%B2%D1%82%D0%BE%D0%B1%D1%83%D1%81%D0%B5.png';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const Striptease = () => {
  const partyBuses = buses.filter(bus =>
    bus.idealFor.includes('JGA') || bus.idealFor.includes('Private Feiern')
  ).slice(0, 3);

  const services = [
    { icon: Shield, title: 'Diskrete & professionelle Organisation', desc: 'Wir kümmern uns um alles: Kontaktaufnahme mit dem Stripper, Koordination des Treffpunkts und eine absolut diskrete Abwicklung – damit die Überraschung perfekt gelingt.' },
    { icon: Eye, title: 'VIP-Bereich an Bord', desc: 'Unser Bus verfügt über einen separaten „VIP-Bereich" hinten – perfekt für die Stripper-Einlage. Genug Platz, Privatsphäre und die richtige Atmosphäre.' },
    { icon: Sparkles, title: 'Pinkes Neonlicht & Partystimmung', desc: 'Auf Wunsch verwandeln wir den Innenraum in eine glamouröse Disco – mit farbigem Neonlicht, Soundsystem und einer voll ausgestatteten Bar.' },
    { icon: MapPin, title: 'Individuelle Route mit Fotostopps', desc: 'Los geht\'s bei Ihnen zu Hause, dann Fotos am Traunsee in Gmunden, Zwischenstopp in Bad Hall für die Show, und weiter durch Vöcklabruck, Wels oder Steyr – Sie bestimmen die Route.' },
    { icon: Music, title: 'Eure Musik – eure Power', desc: 'Ob 2000er-Frauen-Power mit Britney, Beyoncé, Rihanna und Lady Gaga oder österreichische Klassiker wie Christina Stürmer – Sie erstellen die Playlist.' },
    { icon: Wine, title: 'Bar & Drinks an Bord', desc: 'Wir mixen: Sex on the Beach, Swimmingpool, Aperol Spritz, Prosecco – alles mit Eis, Gläsern und guter Laune.' },
  ];

  return (
    <div className="pt-32 pb-24" data-testid="striptease-page">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6">
            <Flame size={18} className="text-primary-main" />
            <span className="text-secondary-main font-unbounded text-sm">Junggesellinnenabschied</span>
          </div>
          <h1 className="font-anton text-4xl sm:text-5xl md:text-6xl tracking-wider text-white uppercase mb-6">
            Stripper im <span className="text-primary-main neon-text">Partybus</span>
          </h1>
          <p className="text-text-secondary text-base md:text-lg font-manrope max-w-3xl mx-auto">
            Ihre Route: Linz – Oberösterreich – Salzburg – Gmunden – Vöcklabruck – Wels – Steyr – Bad Hall
          </p>
        </motion.div>

        {/* ====== IMAGE + INTRO ====== */}
        <motion.div
          {...fadeUp}
          className="mb-24"
          data-testid="strip-story"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
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
                  src={STRIP_IMAGE}
                  alt="Partybus Innenraum mit Neonlicht"
                  className="w-full h-[400px] lg:h-[520px] object-cover"
                  data-testid="strip-story-image"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 glass rounded-2xl p-4 hidden lg:block">
                <p className="font-unbounded font-bold text-primary-main text-xl">VIP</p>
                <p className="text-text-secondary text-sm font-manrope">Party Beast</p>
              </div>
            </motion.div>

            {/* Intro Text */}
            <div className="space-y-6">
              <h2 className="font-anton text-3xl sm:text-4xl tracking-wider text-white uppercase leading-tight">
                Der ultimative <span className="text-primary-main">Überraschungseffekt</span>
              </h2>
              <p className="text-text-secondary font-manrope leading-relaxed">
                Sie planen einen unvergesslichen Junggesellinnenabschied oder einen runden Geburtstag?
                Mit unserem Party Beast wird Ihre Feier zur heißen Partynacht auf Rädern – inklusive
                männlichem Stripper ganz nach Ihren Wünschen.
              </p>
              <p className="text-text-secondary font-manrope leading-relaxed">
                Unser Fahrer macht auf Wunsch sogar einen Stopp bei McDonald's oder einem anderen
                Imbiss – für die Mitternachts-Mahlzeit. Alles ist möglich!
              </p>

              <div className="grid grid-cols-2 gap-4 mt-4">
                {[
                  { icon: Shield, title: 'Diskret', desc: 'Professionelle Abwicklung' },
                  { icon: Sparkles, title: 'Neonlicht', desc: 'Glamouröse Disco' },
                  { icon: Wine, title: 'Cocktails', desc: 'Bar an Bord' },
                  { icon: Music, title: 'Eure Playlist', desc: 'Power-Sound' }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-primary-main/10 flex items-center justify-center flex-shrink-0">
                      <item.icon size={16} className="text-primary-main" />
                    </div>
                    <div>
                      <h3 className="font-unbounded font-bold text-white text-sm">{item.title}</h3>
                      <p className="text-text-secondary font-manrope text-xs">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* ====== SERVICES ====== */}
        <motion.div
          {...fadeUp}
          className="mb-24"
          data-testid="strip-services"
        >
          <h2 className="font-anton text-3xl sm:text-4xl tracking-wider text-white uppercase mb-10">
            Was Sie bei Ihrer Stripper-Tour <span className="text-secondary-main">mit uns erwartet</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass rounded-2xl p-6 flex gap-5"
              >
                <div className="w-10 h-10 rounded-lg bg-primary-main/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <item.icon size={20} className="text-primary-main" />
                </div>
                <div>
                  <h3 className="font-unbounded font-bold text-white mb-2 text-sm">{item.title}</h3>
                  <p className="text-text-secondary font-manrope leading-relaxed text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ====== TESTIMONIAL ====== */}
        <motion.div
          {...fadeUp}
          className="mb-24"
          data-testid="strip-testimonial"
        >
          <div className="gradient-border rounded-2xl p-8 md:p-12 relative">
            <Quote size={48} className="text-primary-main/20 absolute top-6 left-6" />
            <blockquote className="text-text-secondary font-manrope text-lg leading-relaxed italic pl-8 relative z-10">
              Meine beste Freundin wurde 30 – und wir haben den Party Beast mit Stripper gebucht.
              Die beste Entscheidung ever! Die Freundin hat geschrien, gelacht und geweint vor
              Verlegenheit – perfekt! Die Jungs von Partyboss haben alles diskret organisiert,
              der Fahrer war super geduldig mit unserem Chaos. Wir haben direkt für den nächsten
              Geburtstag wieder gebucht!
            </blockquote>
            <div className="mt-6 pl-8 flex items-center gap-3">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-primary-main fill-primary-main" />
                ))}
              </div>
              <span className="text-text-muted text-sm font-manrope">— 30. Geburtstag in Oberösterreich</span>
            </div>
          </div>
        </motion.div>

        {/* Recommended Buses */}
        <motion.div
          {...fadeUp}
          className="mb-16"
        >
          <h2 className="font-anton text-3xl tracking-wider text-white uppercase mb-8">
            Empfohlene <span className="text-primary-main">Busse</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partyBuses.map((bus, index) => (
              <BusCard key={bus.id} bus={bus} index={index} />
            ))}
          </div>
        </motion.div>

        {/* ====== CTA ====== */}
        <motion.div
          {...fadeUp}
          className="gradient-border rounded-3xl p-10 md:p-14 relative overflow-hidden"
          data-testid="strip-cta-section"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/20 to-transparent" />
          <div className="relative z-10">
            <div className="text-center mb-8">
              <h2 className="font-anton text-3xl sm:text-4xl tracking-wider text-white uppercase mb-4">
                Bereit für die <span className="text-primary-main">heißeste Party</span> des Jahres?
              </h2>
              <p className="text-text-secondary font-manrope max-w-2xl mx-auto">
                Sichern Sie sich jetzt Ihren Wunschtermin für den perfekten Junggesellinnenabschied!
                Egal ob Linz, Salzburg, Gmunden, Wels, Steyr oder Bad Hall – wir bringen die Party zu Ihnen.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-4xl mx-auto">
              {[
                'Diskretes Stripper-Organisation',
                'Freie Routenwahl durch OÖ',
                'Angebot innerhalb 24h',
                'Einfache Buchung'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 justify-center">
                  <Check size={16} className="text-green-400 flex-shrink-0" />
                  <span className="text-text-secondary font-manrope text-sm">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/kontakt" className="btn-primary flex items-center gap-3" data-testid="strip-cta">
                Jetzt online anfragen
                <ArrowRight size={20} />
              </Link>
              <a href="tel:06602081542" className="btn-secondary flex items-center gap-2 justify-center">
                <Phone size={18} />
                0660 2081 542
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Striptease;
