import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check, PartyPopper, Users, Music, MapPin, ArrowRight } from 'lucide-react';
import { buses } from '../../data/siteData';
import BusCard from '../../components/BusCard';

const JGA_IMAGE = 'https://customer-assets.emergentagent.com/job_2f76f164-136b-422a-ab2e-323f91ed41f1/artifacts/4be1gtfj_schoolbus%20with%20girls-1.png';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const JGA = () => {
  const jgaBuses = buses.filter(bus => bus.idealFor.includes('JGA')).slice(0, 3);

  const benefits = [
    'Keine Öffis – alle zusammen im Partybus',
    'Musik & Drinks im Bus',
    'Fixe Pauschalen & Pakete',
    'Flexible Routen nach Wunsch',
    'Bar-Hopping ohne Stress',
    'Unvergessliche Erinnerungen'
  ];

  const packages = [
    { name: '3-Stunden Trip', desc: 'Perfekt für den Start in den Abend', price: 'ab 850€' },
    { name: '5-Stunden Paket', desc: 'Für eine ausgedehnte Tour durch die Stadt', price: 'ab 1.200€' },
    { name: 'Nachtpaket', desc: 'Die ganze Nacht durchfeiern', price: 'auf Anfrage' }
  ];

  return (
    <div className="pt-32 pb-24" data-testid="jga-page">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6">
            <PartyPopper size={18} className="text-primary-main" />
            <span className="text-secondary-main font-unbounded text-sm">Polterabend & JGA</span>
          </div>
          <h1 className="font-anton text-5xl md:text-6xl tracking-wider text-white uppercase mb-6">
            Partybus für <span className="text-primary-main neon-text">Junggesellenabschied</span>
          </h1>
          <p className="text-text-secondary text-lg font-manrope max-w-3xl mx-auto">
            Die ultimative Feier vor dem großen Tag! Mit dem PARTYBOSS wird euer JGA
            zu einem unvergesslichen Erlebnis. Bar-Hopping, Club-Tour oder individuelle Route –
            wir fahren euch, wohin ihr wollt.
          </p>
        </motion.div>

        {/* ====== STORY SECTION WITH IMAGE ====== */}
        <motion.div
          {...fadeUp}
          className="mb-24"
          data-testid="jga-story"
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
                  src={JGA_IMAGE}
                  alt="Schoolbus Party mit Cheerleaderinnen"
                  className="w-full h-[400px] lg:h-[520px] object-cover"
                  data-testid="jga-story-image"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 glass rounded-2xl p-4 hidden lg:block">
                <p className="font-unbounded font-bold text-primary-main text-xl">JGA</p>
                <p className="text-text-secondary text-sm font-manrope">Der letzte Ritt</p>
              </div>
            </motion.div>

            {/* Story Opening */}
            <div className="space-y-6">
              <h2 className="font-anton text-3xl sm:text-4xl tracking-wider text-white uppercase leading-tight">
                Der letzte Ritt <span className="text-primary-main">als freier Mann</span>
              </h2>
              <p className="text-text-secondary font-manrope leading-relaxed">
                Sechzehn Freunde. Seit der Schulzeit. Fußballmannschaft. Arbeitskollegen. 24 bis 32 Jahre alt.
                Und eine Mission: Den Bräutigam gebührend in die Ehe zu verabschieden.
              </p>
              <p className="text-text-secondary font-manrope leading-relaxed">
                Der gelbe School Bus steht bereit. Dieses Monster aus amerikanischen Filmen, jetzt vor der
                Haustür in Linz. Die Leute drehen sich um. Finger zeigen. Handys werden gezückt. Schon
                bevor die Tür aufgeht, ist die Stimmung da.
              </p>
            </div>
          </div>
        </motion.div>

        {/* ====== STORY CONTINUATION ====== */}
        <motion.div
          {...fadeUp}
          className="mb-24"
          data-testid="jga-story-continued"
        >
          <div className="glass rounded-2xl p-8 md:p-12 space-y-8">
            <div>
              <h3 className="font-anton text-2xl sm:text-3xl tracking-wider text-white uppercase mb-4">
                Drinnen wartet <span className="text-secondary-main">eine andere Welt</span>
              </h3>
              <p className="text-text-secondary font-manrope leading-relaxed">
                Neonlichter flackern. Ledersitze warten. Eine Bar, die aussieht wie aus einem Club,
                nicht aus einem Bus. Der Fahrer nickt. Er weiß, was kommt. Er hat es schon hundertmal
                gesehen – und jedes Mal ist es anders. Jeder Bräutigam ist anders. Jede Geschichte ist anders.
              </p>
            </div>

            <div>
              <p className="text-text-secondary font-manrope leading-relaxed">
                Die Playlist brennt. Sido, Bushido, Kontra K – die Hymnen der Jugend. Capital Bra für den
                Vibe. Raf Camora für die Melancholie. Und dann, irgendwann zwischen Mondsee und Bad Ischl:
                "Narcotic". "Torn". Diese Lieder, die niemand mehr auf dem Schirm hat, aber jeder mitgrölt.
                Weil sie dazugehören. Weil ein JGA ohne sie nicht komplett ist.
              </p>
            </div>

            <div>
              <p className="text-text-secondary font-manrope leading-relaxed">
                Bier aus der Dose. Wodka-Energy. Und ein Pferdeschwanz für den Held der Nacht.
              </p>
              <p className="text-text-secondary font-manrope leading-relaxed mt-3">
                Der Bus rollt durchs Salzkammergut. Mondsee blinkt vorbei. Ein Foto, alle zusammen,
                der See im Hintergrund, der Bräutigam in der Mitte – noch lächelnd, noch ahnungslos.
                Dann weiter. Richtung Bad Ischl. Richtung dem, worauf alle warten.
              </p>
            </div>

            <div>
              <h3 className="font-anton text-2xl sm:text-3xl tracking-wider text-white uppercase mb-4">
                Der Moment, auf den sechzehn Männer <span className="text-primary-main">warten</span>
              </h3>
              <p className="text-text-secondary font-manrope leading-relaxed">
                Zwei Stripperinnen warten schon. Im Bus. Im "privaten Bereich" hinten, wo die Neonlichter
                rot werden und die Musik lauter. Der Bräutigam wird hereingebracht. Die Tür geht zu. Was
                drinnen passiert, bleibt drinnen – aber die Geräusche dringen nach vorne. Gelächter.
                Kreischen. Musik, die fast untergeht.
              </p>
              <p className="text-white font-manrope font-semibold leading-relaxed mt-3">
                Es ist peinlich. Es ist laut. Es ist genau das, was ein JGA sein muss.
              </p>
            </div>

            <div>
              <h3 className="font-anton text-2xl sm:text-3xl tracking-wider text-white uppercase mb-4">
                Die Rückfahrt ist <span className="text-secondary-main">Stille und Erinnerung</span>
              </h3>
              <p className="text-text-secondary font-manrope leading-relaxed">
                Bad Ischl liegt hinter ihnen. Die Stripperinnen sind weg. Der Bus rollt Richtung Linz,
                und drinnen ist es ruhiger geworden. Einige schlafen. Andere starren aus dem Fenster,
                noch immer grinsend. Die besten Hits aus den 2000ern laufen leise. Nostalgie pur.
              </p>
              <p className="text-text-secondary font-manrope leading-relaxed mt-3">
                Der Bus sieht aus wie ein Schlachtfeld. Bierdosen, leere Flaschen, Konfetti, Erinnerungen.
                Genau so muss es sein. Der Fahrer sagt nichts. Er lächelt nur. Er hat es wieder einmal
                geschafft: Sechzehn Fremde rein, sechzehn Brüder raus.
              </p>
            </div>

            <div className="pt-6 border-t border-white/10">
              <h3 className="font-anton text-2xl sm:text-3xl tracking-wider text-white uppercase mb-4">
                Das ist kein Transfer. <span className="text-primary-main">Das ist ein Ritual.</span>
              </h3>
              <p className="text-text-secondary font-manrope leading-relaxed">
                Der letzte Tag als freier Mann verdient mehr als eine Kneipentour. Er verdient ein Erlebnis,
                das man nicht vergisst. Eine Geschichte, die bei jeder Hochzeit wiedererzählt wird. Einen
                Bus, der zum Schauplatz wird.
              </p>
              <p className="text-text-secondary font-manrope leading-relaxed mt-3 italic">
                Und am Ende steht einer da, der morgen heiratet – und sich an den Tag vor zehn Jahren
                erinnert, als sechzehn Freunde mit ihm durch Oberösterreich gefahren sind, um ihn
                gebührend zu verabschieden.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Benefits */}
        <motion.div
          {...fadeUp}
          className="glass rounded-2xl p-8 md:p-12 mb-16"
        >
          <h2 className="font-anton text-3xl tracking-wider text-white uppercase mb-8">
            Vorteile für deinen <span className="text-secondary-main">JGA</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {benefits.map((benefit, i) => (
              <div key={i} className="flex items-center gap-3">
                <Check size={20} className="text-primary-main flex-shrink-0" />
                <span className="text-text-secondary font-manrope">{benefit}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Scenario */}
        <motion.div
          {...fadeUp}
          className="mb-16"
        >
          <h2 className="font-anton text-3xl tracking-wider text-white uppercase mb-8">
            So läuft euer <span className="text-primary-main">JGA</span> ab
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: Users, title: 'Abholung', desc: 'Wir holen euch am Treffpunkt ab' },
              { icon: Music, title: 'Vorglühen', desc: 'Party startet direkt im Bus' },
              { icon: MapPin, title: 'Tour', desc: 'Bar-Hopping oder Club-Route' },
              { icon: PartyPopper, title: 'Feiern', desc: 'Unvergessliche Erinnerungen' }
            ].map((step, i) => (
              <div key={i} className="glass rounded-2xl p-6 text-center">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-main/20 to-accent-purple/20 flex items-center justify-center mx-auto mb-4">
                  <step.icon size={20} className="text-primary-main" />
                </div>
                <h3 className="font-unbounded font-bold text-white mb-2">{step.title}</h3>
                <p className="text-text-secondary font-manrope text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Packages */}
        <motion.div
          {...fadeUp}
          className="mb-16"
        >
          <h2 className="font-anton text-3xl tracking-wider text-white uppercase mb-8">
            JGA <span className="text-secondary-main">Pakete</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((pkg, i) => (
              <div key={i} className="glass rounded-2xl p-6 card-hover">
                <h3 className="font-unbounded font-bold text-xl text-white mb-2">{pkg.name}</h3>
                <p className="text-text-secondary font-manrope text-sm mb-4">{pkg.desc}</p>
                <p className="font-anton text-2xl text-primary-main">{pkg.price}</p>
              </div>
            ))}
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
            {jgaBuses.map((bus, index) => (
              <BusCard key={bus.id} bus={bus} index={index} />
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          {...fadeUp}
          className="gradient-border rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
          data-testid="jga-cta-section"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/20 to-transparent" />
          <div className="relative z-10">
            <h2 className="font-anton text-3xl sm:text-4xl tracking-wider text-white uppercase mb-4">
              Jetzt JGA planen
            </h2>
            <p className="text-text-secondary font-manrope mb-8 max-w-2xl mx-auto">
              Wir organisieren den Abschied, den der Bräutigam verdient.
              Inklusive aller Extras, die das Ritual komplett machen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/kontakt" className="btn-primary flex items-center gap-3" data-testid="jga-cta">
                JGA Anfrage senden
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

export default JGA;
