import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { GraduationCap, Users, Music, Sparkles } from 'lucide-react';
import { buses } from '../../data/siteData';
import BusCard from '../../components/BusCard';

const Maturaball = () => {
  const maturaBuses = buses.filter(bus => 
    bus.idealFor.includes('Maturaball') || bus.idealFor.includes('Studentenpartys') || bus.capacity >= 40
  ).slice(0, 3);

  return (
    <div className="pt-32 pb-24" data-testid="maturaball-page">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6">
            <GraduationCap size={18} className="text-primary-main" />
            <span className="text-secondary-main font-unbounded text-sm">Schüler- & Studentenpartys</span>
          </div>
          <h1 className="font-anton text-5xl md:text-6xl tracking-wider text-white uppercase mb-6">
            Maturaball <span className="text-primary-main neon-text">Afterparty</span>
          </h1>
          <p className="text-text-secondary text-lg font-manrope max-w-3xl mx-auto">
            Die ganze Klasse im Partybus! Nach dem offiziellen Teil geht die Party erst richtig los. 
            Holt das Maximum aus eurem großen Abend heraus!
          </p>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16"
        >
          {[
            { icon: Users, title: 'Ganze Klasse', desc: 'Alle zusammen feiern' },
            { icon: Music, title: 'Eure Musik', desc: 'Playlist nach Wunsch' },
            { icon: Sparkles, title: 'Afterparty', desc: 'Die Nacht ist jung' },
            { icon: GraduationCap, title: 'Matura geschafft', desc: 'Das muss gefeiert werden!' }
          ].map((item, i) => (
            <div key={i} className="glass rounded-2xl p-6 text-center card-hover">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-main/20 to-accent-purple/20 flex items-center justify-center mx-auto mb-4">
                <item.icon size={20} className="text-primary-main" />
              </div>
              <h3 className="font-unbounded font-bold text-white mb-2">{item.title}</h3>
              <p className="text-text-secondary font-manrope text-sm">{item.desc}</p>
            </div>
          ))}
        </motion.div>

        {/* Info Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-8 md:p-12 mb-16"
        >
          <h2 className="font-anton text-3xl tracking-wider text-white uppercase mb-6">
            Matura geschafft – <span className="text-secondary-main">jetzt wird gefeiert!</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-text-secondary font-manrope">
            <div className="space-y-4">
              <p>
                Der Maturaball ist der perfekte Anlass für eine unvergessliche Party. 
                Aber warum nach dem Ball aufhören, wenn die Nacht noch jung ist?
              </p>
              <p>
                Mit unserem Partybus könnt ihr die Afterparty direkt nach dem Ball 
                starten – mit der ganzen Klasse, eurer Lieblingsmusik und einer 
                Atmosphäre wie im Club.
              </p>
            </div>
            <div className="space-y-4">
              <p>
                Unsere großen Busse bieten Platz für bis zu 50 Personen – 
                perfekt für die ganze Stufe!
              </p>
              <p>
                Auch für Vorpartys, Abifahrten oder Studentenpartys 
                sind unsere Partybusse die perfekte Wahl.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Recommended Buses */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-anton text-3xl tracking-wider text-white uppercase mb-8">
            Für große <span className="text-primary-main">Gruppen</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {maturaBuses.map((bus, index) => (
              <BusCard key={bus.id} bus={bus} index={index} />
            ))}
          </div>
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
            <h2 className="font-anton text-3xl md:text-4xl tracking-wider text-white uppercase mb-4">
              Maturaball Afterparty?
            </h2>
            <p className="text-text-secondary font-manrope mb-8 max-w-2xl mx-auto">
              Fragt jetzt ein Angebot für eure Klasse an!
            </p>
            <Link to="/kontakt" className="btn-primary" data-testid="maturaball-cta">
              Anfrage für Klasse senden
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Maturaball;
