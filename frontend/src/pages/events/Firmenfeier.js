import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Building, Users, Award, Calendar, ArrowRight } from 'lucide-react';
import { buses } from '../../data/siteData';
import BusCard from '../../components/BusCard';

const FIRMEN_IMAGE = 'https://customer-assets.emergentagent.com/job_2f76f164-136b-422a-ab2e-323f91ed41f1/artifacts/v248sf51_%D0%9A%D0%BE%D0%BC%D0%B0%D0%BD%D0%B4%D0%BD%D0%B0%D1%8F%20%D0%B2%D0%B5%D1%87%D0%B5%D1%80%D0%B8%D0%BD%D0%BA%D0%B0%20%D0%B2%20%D0%B0%D0%B2%D1%82%D0%BE%D0%B1%D1%83%D1%81%D0%B5.jpg';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const Firmenfeier = () => {
  const firmaBuses = buses.filter(bus => bus.idealFor.includes('Firmenfeier')).slice(0, 3);

  return (
    <div className="pt-32 pb-24" data-testid="firmenfeier-page">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6">
            <Building size={18} className="text-primary-main" />
            <span className="text-secondary-main font-unbounded text-sm">Teambuilding auf Rädern</span>
          </div>
          <h1 className="font-anton text-5xl md:text-6xl tracking-wider text-white uppercase mb-6">
            Firmenfeier & <span className="text-primary-main neon-text">Weihnachtsfeier</span>
          </h1>
          <p className="text-text-secondary text-lg font-manrope max-w-3xl mx-auto">
            Mal was anderes! Ob Teambuilding, Weihnachtsfeier oder Firmenjubiläum –
            mit PARTYBOSS wird euer Firmenevent garantiert unvergesslich.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16"
        >
          {[
            { icon: Users, title: 'Teambuilding', desc: 'Stärkt den Zusammenhalt' },
            { icon: Building, title: 'Professionell', desc: 'Geprüfte Fahrer' },
            { icon: Award, title: 'Premium', desc: 'Top Ausstattung' },
            { icon: Calendar, title: 'Flexibel', desc: 'Individuelle Planung' }
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

        {/* ====== STORY SECTION WITH IMAGE ====== */}
        <motion.div
          {...fadeUp}
          className="mb-24"
          data-testid="firmen-story"
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
                  src={FIRMEN_IMAGE}
                  alt="Partybus Schoolbus in österreichischer Landschaft"
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                  data-testid="firmen-story-image"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 glass rounded-2xl p-4 hidden lg:block">
                <p className="font-unbounded font-bold text-primary-main text-xl">100+</p>
                <p className="text-text-secondary text-sm font-manrope">Firmenevents</p>
              </div>
            </motion.div>

            {/* Story Text */}
            <div className="space-y-6">
              <h2 className="font-anton text-3xl sm:text-4xl tracking-wider text-white uppercase leading-tight">
                Wenn der Chef sagt: <span className="text-primary-main">"Wir machen das Büro dicht"</span>
              </h2>

              <p className="text-text-secondary font-manrope leading-relaxed">
                Es ist Freitag. 17:00 Uhr. Eine Woche voller Deadlines, Kundenmeetings, Überstunden –
                und dann steht er da. Der Bus. Nicht irgendein Bus. Ein rollender Club, der direkt vor
                der Bürotür wartet.
              </p>
              <p className="text-text-secondary font-manrope leading-relaxed">
                Die Tür geht auf. Schwarze Lederbänke. Eine Bar, die sofort einlädt. Musik, die nicht
                aus dem Radio kommt, sondern aus eurer Playlist – die ihr vorher zusammengestellt habt.
                Helene Fischer für die, die es zugeben. Marteria für die, die es lauter haben wollen.
                Und irgendwann singen alle gemeinsam "Anton aus Tirol", ob sie wollen oder nicht.
              </p>
            </div>
          </div>
        </motion.div>

        {/* ====== STORY CONTINUATION ====== */}
        <motion.div
          {...fadeUp}
          className="mb-24"
          data-testid="firmen-story-continued"
        >
          <div className="glass rounded-2xl p-8 md:p-12 space-y-8">
            <div>
              <h3 className="font-anton text-2xl sm:text-3xl tracking-wider text-white uppercase mb-4">
                Das ist der Moment, wo Arbeit zu <span className="text-secondary-main">"Wir"</span> wird
              </h3>
              <p className="text-text-secondary font-manrope leading-relaxed">
                Zwölf Menschen. 28 bis 52 Jahre. Normalerweise sitzen sie in getrennten Etagen,
                schreiben Mails, die sich im Kreis drehen. Jetzt sitzen sie nebeneinander, stoßen
                mit Aperol an, lachen über Geschichten, die sie nie erzählt hätten.
              </p>
            </div>

            <div>
              <p className="text-text-secondary font-manrope leading-relaxed">
                Der Bus rollt. Richtung Attersee. Richtung Freiheit.
              </p>
              <p className="text-text-secondary font-manrope leading-relaxed mt-3">
                Die Jüngeren legen auf. Die Älteren singen mit. Irgendwer hat Grüner Veltliner bestellt –
                für die Chefs, gekühlt, bereit. Mike, der Fahrer, grüßt jeden mit Namen. Professionell,
                aber locker. Er weiß, wann er da ist und wann er verschwindet.
              </p>
            </div>

            <div>
              <h3 className="font-anton text-2xl sm:text-3xl tracking-wider text-white uppercase mb-4">
                Die Party beginnt nicht am Ziel. <span className="text-primary-main">Sie beginnt jetzt.</span>
              </h3>
              <p className="text-text-secondary font-manrope leading-relaxed">
                Im normalen Leben fährt man zu einem Event. Hier ist man im Event. Die Straße unter den
                Rädern, der See am Horizont, die Kollegen, die plötzlich anders aussehen – entspannter,
                echter, menschlicher.
              </p>
            </div>

            <div>
              <p className="text-text-secondary font-manrope leading-relaxed">
                Ankunft in Gmunden. Der Seewirt wartet. Aber ehrlich? Der halbe Spaß ist schon gehabt.
                Der Bus hat seine Arbeit gemacht: Er hat zwölf Einzelkämpfer zu einem Team gemacht,
                das gemeinsam aussteigt und gemeinsam zurückkommt.
              </p>
            </div>

            <div>
              <p className="text-text-secondary font-manrope leading-relaxed">
                Um 23:00 Uhr Rückkehr in Linz. Keiner muss fahren. Keiner muss nachdenken. Am Montag
                erzählt die halbe Kanzlei davon. Nicht vom Essen. Nicht vom See.
                <strong className="text-white"> Von der Fahrt. Von dem Bus. Von diesem einen Abend, wo alles anders war.</strong>
              </p>
            </div>

            <div className="pt-4 border-t border-white/10">
              <p className="text-white font-unbounded font-bold text-lg mb-2">
                Das ist keine Teambuilding-Maßnahme. Das ist eine Erinnerung, die bleibt.
              </p>
              <p className="text-text-secondary font-manrope italic">
                Und genau deshalb wird der nächste Termin gebucht, bevor der erste vorbei ist.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Recommended Buses */}
        <motion.div
          {...fadeUp}
          className="mb-16"
        >
          <h2 className="font-anton text-3xl tracking-wider text-white uppercase mb-8">
            Empfohlen für <span className="text-primary-main">Firmen</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {firmaBuses.map((bus, index) => (
              <BusCard key={bus.id} bus={bus} index={index} />
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          {...fadeUp}
          className="gradient-border rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
          data-testid="firmenfeier-cta-section"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/20 to-transparent" />
          <div className="relative z-10">
            <h2 className="font-anton text-3xl sm:text-4xl tracking-wider text-white uppercase mb-4">
              Jetzt Anfrage stellen
            </h2>
            <p className="text-text-secondary font-manrope mb-8 max-w-2xl mx-auto">
              Wir machen aus Ihrem nächsten Firmenevent etwas, worüber noch Jahre gesprochen wird.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/kontakt" className="btn-primary flex items-center gap-3" data-testid="firmenfeier-cta">
                Firmenanfrage senden
                <ArrowRight size={20} />
              </Link>
              <a href="tel:06602081542" className="btn-secondary">
                0660 2081 542
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Firmenfeier;
