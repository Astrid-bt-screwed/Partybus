import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Calendar, FileText, PartyPopper } from 'lucide-react';
import { Link } from 'react-router-dom';

const Ablauf = () => {
  const steps = [
    {
      number: '01',
      icon: MessageCircle,
      title: 'Anfrage',
      description: 'Schick uns deine Anfrage per Formular, WhatsApp oder ruf uns einfach an. Egal wie – wir freuen uns auf dich!'
    },
    {
      number: '02',
      icon: Calendar,
      title: 'Abstimmung',
      description: 'Wir besprechen alle Details: Datum, Route, Musik, Ausstattung und alles, was ihr euch wünscht.'
    },
    {
      number: '03',
      icon: FileText,
      title: 'Angebot & Fixierung',
      description: 'Du erhältst ein individuelles Angebot. Gefällt es dir? Dann fixieren wir den Termin!'
    },
    {
      number: '04',
      icon: PartyPopper,
      title: 'Partyday!',
      description: 'Wir holen euch ab, fahren eure Wunschroute und ihr feiert die beste Party auf Rädern!'
    }
  ];

  return (
    <div className="pt-32 pb-24" data-testid="ablauf-page">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="font-anton text-5xl md:text-6xl tracking-wider text-white uppercase mb-6">
            So funktioniert's
          </h1>
          <p className="text-text-secondary text-lg font-manrope max-w-3xl mx-auto">
            In nur 4 einfachen Schritten zu deiner unvergesslichen Party auf Rädern.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-main via-secondary-main to-primary-main opacity-30" />

          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className={`lg:flex items-center gap-12 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } ${index > 0 ? 'lg:mt-24' : ''}`}
              >
                {/* Content */}
                <div className={`lg:w-5/12 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                  <div className="glass rounded-2xl p-8">
                    <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? 'lg:justify-end' : ''}`}>
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-main/20 to-accent-purple/20 flex items-center justify-center">
                        <step.icon size={24} className="text-primary-main" />
                      </div>
                      <span className="font-anton text-5xl text-white/10">{step.number}</span>
                    </div>
                    <h3 className="font-unbounded font-bold text-2xl text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-text-secondary font-manrope">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Center Point */}
                <div className="hidden lg:flex lg:w-2/12 justify-center">
                  <div className="w-6 h-6 rounded-full bg-primary-main shadow-neon" />
                </div>

                {/* Spacer */}
                <div className="lg:w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-12 text-center mt-24"
        >
          <h2 className="font-anton text-3xl md:text-4xl tracking-wider text-white uppercase mb-4">
            Bereit loszulegen?
          </h2>
          <p className="text-text-secondary font-manrope mb-8 max-w-2xl mx-auto">
            Starte jetzt mit Schritt 1 und schick uns deine Anfrage. Wir freuen uns auf deine Party!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/kontakt" className="btn-primary" data-testid="ablauf-cta">
              Jetzt anfragen
            </Link>
            <a href="tel:06602081542" className="btn-secondary">
              0660 2081 542
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Ablauf;
