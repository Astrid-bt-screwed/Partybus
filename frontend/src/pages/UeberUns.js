import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Heart, Sparkles, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const UeberUns = () => {
  const values = [
    {
      icon: Sparkles,
      title: 'Leidenschaft',
      description: 'Wir lieben Partys genauso wie ihr! Deshalb geben wir alles, um eure Feier unvergesslich zu machen.'
    },
    {
      icon: Shield,
      title: 'Sicherheit',
      description: 'Alle unsere Fahrer sind geprüft und professionell. Ihr könnt sorglos feiern – wir kümmern uns um den Rest.'
    },
    {
      icon: Heart,
      title: 'Service',
      description: 'Persönliche Beratung, flexible Routenplanung und individuelle Pakete – bei uns seid ihr keine Nummer.'
    },
    {
      icon: Users,
      title: 'Erfahrung',
      description: 'Tausende zufriedene Gäste und unzählige unvergessliche Partys – wir wissen, wie man feiert!'
    }
  ];

  return (
    <div className="pt-32 pb-24" data-testid="ueber-uns-page">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="font-anton text-5xl md:text-6xl tracking-wider text-white uppercase mb-6">
            Über <span className="text-primary-main neon-text">PARTYBOSS</span>
          </h1>
          <p className="text-text-secondary text-lg font-manrope max-w-3xl mx-auto">
            Wir sind dein Partner für Firmenfeiern, Events & Party!
          </p>
        </motion.div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-8 md:p-12 mb-16"
        >
          <h2 className="font-anton text-3xl tracking-wider text-white uppercase mb-6">
            Unsere <span className="text-secondary-main">Story</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-text-secondary font-manrope leading-relaxed space-y-4">
              <p>
                PARTYBOSS ist dein Partner für unvergessliche Feiern auf Rädern. 
                Mit unserer coolen Partybus & Limousinen-Flotte haben wir für jeden das Richtige dabei.
              </p>
              <p>
                Du willst feiern und hast noch keinen Plan was, wo, wie – aber ein Partybus darf nicht fehlen? 
                Dann bist du bei uns richtig! Wir erstellen dir kostenlos ein tolles Programm.
              </p>
            </div>
            <div className="text-text-secondary font-manrope leading-relaxed space-y-4">
              <p>
                Unsere Partybusse sind mehr als nur Fahrzeuge – sie sind mobile Clubs! 
                Ausgestattet mit hochwertigen Soundsystemen, LED-Lichtsteuerung, DJ-Pult, 
                Lounge-Bereichen und Tanzflächen wird jede Fahrt zu einem echten Erlebnis.
              </p>
              <p>
                Von Linz, Wien und Salzburg aus sind wir in ganz Österreich für euch unterwegs.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-2xl p-8 card-hover"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-main/20 to-accent-purple/20 flex items-center justify-center mb-6">
                <value.icon size={24} className="text-primary-main" />
              </div>
              <h3 className="font-unbounded font-bold text-xl text-white mb-3">
                {value.title}
              </h3>
              <p className="text-text-secondary font-manrope">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Equipment */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-8 md:p-12 mb-16"
        >
          <h2 className="font-anton text-3xl tracking-wider text-white uppercase mb-6">
            Unsere <span className="text-primary-main">Ausstattung</span>
          </h2>
          <p className="text-text-secondary font-manrope mb-8">
            Unsere Partybusse sind mit allem ausgestattet, was ihr für eine unvergessliche Party braucht:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'Fotobox', 'Alkomat', 'Karaokeanlage', 'PlayStation',
              'WLAN', 'Dancefloor', 'Pokertisch', 'Roulettetisch',
              'Soundsystem', 'LED-Licht', 'Bar', 'Kühlschränke'
            ].map((item, i) => (
              <div key={i} className="bg-accent-dark rounded-xl px-4 py-3 text-center">
                <span className="text-primary-main font-manrope font-semibold text-sm">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-text-muted font-manrope text-sm mt-6">
            Die gesamte Ausstattung ist für euch kostenlos nutzbar. Bitte beim Buchen angeben, 
            was ihr nutzen möchtet, damit wir den richtigen Partybus einteilen.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="gradient-border rounded-3xl p-12 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/20 to-transparent" />
          <div className="relative z-10">
            <h2 className="font-anton text-3xl md:text-4xl tracking-wider text-white uppercase mb-6">
              Lerne uns kennen!
            </h2>
            <p className="text-text-secondary font-manrope mb-8 max-w-2xl mx-auto">
              Hast du Fragen oder möchtest du mehr über uns erfahren? 
              Wir freuen uns auf deine Nachricht!
            </p>
            <Link to="/kontakt" className="btn-primary" data-testid="ueber-uns-cta">
              Kontakt aufnehmen
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default UeberUns;
