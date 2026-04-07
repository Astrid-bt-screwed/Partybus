import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Heart, Sparkles, Camera, Music, Check, MapPin, Phone, Mail, ArrowRight, Star, Quote } from 'lucide-react';
import { buses } from '../../data/siteData';
import BusCard from '../../components/BusCard';

const HOCHZEIT_IMAGE = 'https://customer-assets.emergentagent.com/job_2f76f164-136b-422a-ab2e-323f91ed41f1/artifacts/hyy2qrve_%D0%A1%D0%B2%D0%B0%D0%B4%D0%B5%D0%B1%D0%BD%D0%B0%D1%8F%20%D1%84%D0%BE%D1%82%D0%BE%D1%81%D0%B5%D1%81%D1%81%D0%B8%D1%8F%20%D0%B2%20%D0%B0%D0%B2%D1%82%D0%BE%D0%B1%D1%83%D1%81%D0%B5.png';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const Hochzeit = () => {
  const hochzeitBuses = buses.filter(bus =>
    bus.idealFor.includes('Hochzeit') || bus.idealFor.includes('Besondere Anlässe')
  ).slice(0, 3);

  const services = [
    { title: 'Entspannte Anreise für alle Gäste', desc: 'Niemand muss selbst fahren oder sich um Parkplätze kümmern. Wir holen Ihre Gäste pünktlich an der Kirche ab und bringen sie sicher zur Feier – und nachts wieder nach Hause (inklusive Zwischenstopps in Linz, Steyr, Wels u.v.m.).' },
    { title: 'Ein Hingucker, der in Erinnerung bleibt', desc: 'Unsere roten Doppeldecker sind einzigartig. Zwei Etagen, offener Blick auf die oberösterreichische Landschaft – oben feiern die Jüngeren, unten genießen die Älteren die Fahrt.' },
    { title: 'Ihre Musik – Ihre Stimmung', desc: 'Sie erstellen vorab eine persönliche Playlist. Ob romantischer Start mit Ed Sheeran, emotionale ABBA-Momente, klassische Klänge von Johann Strauss für die Großeltern oder Partysound mit Imagine Dragons – bei uns läuft genau das, was zu Ihnen passt.' },
    { title: 'Kulinarik an Bord', desc: 'Wir kümmern uns um die Verpflegung: österreichischer Sekt, Holler-Schorle, Bier – alles perfekt gekühlt. Gläser und Eiswürfel sind natürlich an Bord.' },
    { title: 'Professioneller, herzlicher Service', desc: 'Unser Fahrer begrüßt Ihre Gäste namentlich, steht 30 Minuten vor der Kirche bereit, macht bei Bedarf Durchsagen und bringt auch nach 3 Uhr morgens alle sicher nach Hause.' },
  ];

  return (
    <div className="pt-32 pb-24" data-testid="hochzeit-page">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6">
            <Heart size={18} className="text-primary-main" />
            <span className="text-secondary-main font-unbounded text-sm">Hochzeits-Shuttle</span>
          </div>
          <h1 className="font-anton text-4xl sm:text-5xl md:text-6xl tracking-wider text-white uppercase mb-6">
            Hochzeits-Shuttle: <span className="text-primary-main neon-text">Der schönste Tag</span> im Doppeldecker
          </h1>
          <p className="text-text-secondary text-base md:text-lg font-manrope max-w-3xl mx-auto mb-4">
            Ihre Route: Linz – Oberösterreich – Salzburg – Steyr – Enns – St. Florian – Kremsmünster – Wels
          </p>
        </motion.div>

        {/* ====== IMAGE + INTRO ====== */}
        <motion.div
          {...fadeUp}
          className="mb-24"
          data-testid="hochzeit-story"
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
                  src={HOCHZEIT_IMAGE}
                  alt="Hochzeits-Doppeldecker mit Brautpaar in Oberösterreich"
                  className="w-full h-[400px] lg:h-[520px] object-cover"
                  data-testid="hochzeit-story-image"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 glass rounded-2xl p-4 hidden lg:block">
                <p className="font-unbounded font-bold text-primary-main text-xl">Just Married</p>
                <p className="text-text-secondary text-sm font-manrope">Doppeldecker</p>
              </div>
            </motion.div>

            {/* Intro Text */}
            <div className="space-y-6">
              <h2 className="font-anton text-3xl sm:text-4xl tracking-wider text-white uppercase leading-tight">
                Der perfekte Shuttle für <span className="text-primary-main">Ihre Hochzeit</span>
              </h2>
              <p className="text-text-secondary font-manrope leading-relaxed">
                Sie haben Ihre Traumlocation gefunden – aber Kirche und Feierort liegen 40 Minuten auseinander?
                Kein Problem. Mit unserem roten Doppeldecker wird genau diese Fahrt zu einem der schönsten
                Momente Ihres großen Tages.
              </p>

              {/* Quick Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                {[
                  { icon: Heart, title: 'Ihr Tag', desc: 'Alles perfekt für Sie' },
                  { icon: Sparkles, title: 'Stilvoll', desc: 'Premium Ausstattung' },
                  { icon: Camera, title: 'Fotobox', desc: 'Erinnerungen festhalten' },
                  { icon: Music, title: 'Ihre Playlist', desc: 'Persönliche Musik' }
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
          data-testid="hochzeit-services"
        >
          <h2 className="font-anton text-3xl sm:text-4xl tracking-wider text-white uppercase mb-10">
            Was Sie bei Ihrer Hochzeit <span className="text-secondary-main">mit uns erwartet</span>
          </h2>
          <div className="space-y-6">
            {services.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-2xl p-6 md:p-8 flex gap-5"
              >
                <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <Check size={20} className="text-green-400" />
                </div>
                <div>
                  <h3 className="font-unbounded font-bold text-white mb-2">{item.title}</h3>
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
          data-testid="hochzeit-testimonial"
        >
          <div className="gradient-border rounded-2xl p-8 md:p-12 relative">
            <Quote size={48} className="text-primary-main/20 absolute top-6 left-6" />
            <blockquote className="text-text-secondary font-manrope text-lg leading-relaxed italic pl-8 relative z-10">
              Wir haben den Doppeldecker von Partyboss gebucht – die beste Entscheidung des ganzen Tages!
              Unsere Gäste reden heute noch davon, dass die Busfahrt zwischen Kirche und Feier einer der
              schönsten Momente war. Der Doppeldecker hat alles noch majestätischer gemacht.
            </blockquote>
            <div className="mt-6 pl-8 flex items-center gap-3">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-primary-main fill-primary-main" />
                ))}
              </div>
              <span className="text-text-muted text-sm font-manrope">— Brautpaar aus Oberösterreich</span>
            </div>
          </div>
        </motion.div>

        {/* Recommended Buses */}
        <motion.div
          {...fadeUp}
          className="mb-16"
        >
          <h2 className="font-anton text-3xl tracking-wider text-white uppercase mb-8">
            Premium <span className="text-primary-main">Auswahl</span> für Hochzeiten
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {hochzeitBuses.map((bus, index) => (
              <BusCard key={bus.id} bus={bus} index={index} />
            ))}
          </div>
        </motion.div>

        {/* ====== CTA ====== */}
        <motion.div
          {...fadeUp}
          className="gradient-border rounded-3xl p-10 md:p-14 relative overflow-hidden"
          data-testid="hochzeit-cta-section"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/20 to-transparent" />
          <div className="relative z-10">
            <div className="text-center mb-8">
              <h2 className="font-anton text-3xl sm:text-4xl tracking-wider text-white uppercase mb-4">
                Bereit für den schönsten Tag <span className="text-primary-main">Ihres Lebens?</span>
              </h2>
              <p className="text-text-secondary font-manrope max-w-2xl mx-auto">
                Sichern Sie sich jetzt Ihren Wunschtermin! Beliebte Termine sind schnell ausgebucht.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 max-w-3xl mx-auto">
              <div className="flex items-center gap-3 justify-center">
                <Check size={18} className="text-green-400" />
                <span className="text-text-secondary font-manrope text-sm">Kostenlose Erstberatung</span>
              </div>
              <div className="flex items-center gap-3 justify-center">
                <Check size={18} className="text-green-400" />
                <span className="text-text-secondary font-manrope text-sm">Individuelle Route</span>
              </div>
              <div className="flex items-center gap-3 justify-center">
                <Check size={18} className="text-green-400" />
                <span className="text-text-secondary font-manrope text-sm">Angebot in 24 Stunden</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/kontakt" className="btn-primary flex items-center gap-3" data-testid="hochzeit-cta">
                Verfügbarkeit prüfen
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

export default Hochzeit;
