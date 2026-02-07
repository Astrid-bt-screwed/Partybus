import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Instagram, Facebook } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const Kontakt = () => {
  return (
    <div className="pt-32 pb-24" data-testid="kontakt-page">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="font-anton text-5xl md:text-6xl tracking-wider text-white uppercase mb-6">
            Kontakt & <span className="text-primary-main neon-text">Anfrage</span>
          </h1>
          <p className="text-text-secondary text-lg font-manrope max-w-3xl mx-auto">
            Schick uns deine Anfrage – wir melden uns innerhalb von 24 Stunden 
            und erstellen dir ein individuelles, unverbindliches Angebot.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-1"
          >
            <div className="glass rounded-2xl p-8 h-full">
              <h2 className="font-unbounded font-bold text-xl text-white mb-8">
                Kontaktdaten
              </h2>

              <div className="space-y-6">
                <a 
                  href="tel:06602081542" 
                  className="flex items-start gap-4 group"
                  data-testid="contact-phone-link"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-main/20 to-accent-purple/20 flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-primary-main" />
                  </div>
                  <div>
                    <p className="text-text-secondary text-sm font-manrope mb-1">Telefon</p>
                    <p className="text-white font-semibold group-hover:text-primary-main transition-colors duration-300">
                      0660 2081 542
                    </p>
                  </div>
                </a>

                <a 
                  href="mailto:manager@partybus-oesterreich.at" 
                  className="flex items-start gap-4 group"
                  data-testid="contact-email-link"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-main/20 to-accent-purple/20 flex items-center justify-center flex-shrink-0">
                    <Mail size={20} className="text-primary-main" />
                  </div>
                  <div>
                    <p className="text-text-secondary text-sm font-manrope mb-1">E-Mail</p>
                    <p className="text-white font-semibold group-hover:text-primary-main transition-colors duration-300 break-all">
                      manager@partybus-oesterreich.at
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-main/20 to-accent-purple/20 flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-primary-main" />
                  </div>
                  <div>
                    <p className="text-text-secondary text-sm font-manrope mb-1">Adresse</p>
                    <p className="text-white font-semibold">
                      Kimmersdorfer Straße 16<br />
                      4502 Sankt Marien<br />
                      Austria
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-main/20 to-accent-purple/20 flex items-center justify-center flex-shrink-0">
                    <Clock size={20} className="text-primary-main" />
                  </div>
                  <div>
                    <p className="text-text-secondary text-sm font-manrope mb-1">Einsatzgebiet</p>
                    <p className="text-white font-semibold">
                      Ganz Österreich<br />
                      Bayern auf Anfrage
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-10 pt-8 border-t border-white/10">
                <p className="text-text-secondary text-sm font-manrope mb-4">Folge uns</p>
                <div className="flex gap-4">
                  <a 
                    href="https://www.instagram.com/partybus_oesterreich?igsh=cml0b2s2eHIyOHNo&utm_source=qr" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl glass flex items-center justify-center text-text-secondary hover:text-primary-main hover:border-primary-main transition-colors duration-300"
                    data-testid="contact-instagram"
                    aria-label="Instagram"
                  >
                    <Instagram size={22} />
                  </a>
                  <a 
                    href="https://www.facebook.com/share/1AsLH199du/?mibextid=wwXIfr" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl glass flex items-center justify-center text-text-secondary hover:text-primary-main hover:border-primary-main transition-colors duration-300"
                    data-testid="contact-facebook"
                    aria-label="Facebook"
                  >
                    <Facebook size={22} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2"
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Kontakt;
