import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Loader } from 'lucide-react';
import emailjs from '@emailjs/browser';
import axios from 'axios';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    event_type: '',
    person_count: '',
    date: '',
    city: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const eventTypes = [
    'Junggesellenabschied',
    'Geburtstagsparty',
    'Firmenfeier',
    'Maturaball',
    'Hochzeit',
    'Sonstiges'
  ];

  const cities = ['Wien', 'Linz', 'Salzburg', 'Graz', 'Andere'];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      // Save to backend
      const backendUrl = process.env.REACT_APP_BACKEND_URL;
      await axios.post(`${backendUrl}/api/contact`, {
        ...formData,
        person_count: parseInt(formData.person_count) || 0
      });

      // Send email via EmailJS if configured
      const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
      const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

      if (serviceId && templateId && publicKey) {
        await emailjs.send(serviceId, templateId, {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          event_type: formData.event_type,
          person_count: formData.person_count,
          date: formData.date,
          city: formData.city,
          message: formData.message,
        }, publicKey);
      }

      setStatus({
        type: 'success',
        message: 'Danke für deine Anfrage! Wir melden uns innerhalb von 24 Stunden.'
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        event_type: '',
        person_count: '',
        date: '',
        city: '',
        message: ''
      });
    } catch (error) {
      console.error('Error:', error);
      setStatus({
        type: 'error',
        message: 'Es gab einen Fehler. Bitte versuche es erneut oder ruf uns direkt an.'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      onSubmit={handleSubmit}
      className="glass rounded-2xl p-8"
      data-testid="contact-form"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <label className="block text-text-secondary text-sm mb-2 font-manrope">Name *</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Dein Name"
            data-testid="contact-name"
          />
        </div>
        <div>
          <label className="block text-text-secondary text-sm mb-2 font-manrope">E-Mail *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="deine@email.at"
            data-testid="contact-email"
          />
        </div>
        <div>
          <label className="block text-text-secondary text-sm mb-2 font-manrope">Telefon *</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="+43 ..."
            data-testid="contact-phone"
          />
        </div>
        <div>
          <label className="block text-text-secondary text-sm mb-2 font-manrope">Eventtyp *</label>
          <select
            name="event_type"
            value={formData.event_type}
            onChange={handleChange}
            required
            data-testid="contact-event-type"
            className="bg-transparent"
          >
            <option value="" disabled className="bg-bg-main">Wähle einen Eventtyp</option>
            {eventTypes.map((type) => (
              <option key={type} value={type} className="bg-bg-main">{type}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-text-secondary text-sm mb-2 font-manrope">Personenanzahl *</label>
          <input
            type="number"
            name="person_count"
            value={formData.person_count}
            onChange={handleChange}
            required
            min="1"
            placeholder="Anzahl der Gäste"
            data-testid="contact-person-count"
          />
        </div>
        <div>
          <label className="block text-text-secondary text-sm mb-2 font-manrope">Wunschdatum *</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            data-testid="contact-date"
          />
        </div>
        <div>
          <label className="block text-text-secondary text-sm mb-2 font-manrope">Stadt/Region *</label>
          <select
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
            data-testid="contact-city"
            className="bg-transparent"
          >
            <option value="" disabled className="bg-bg-main">Wähle eine Stadt</option>
            {cities.map((city) => (
              <option key={city} value={city} className="bg-bg-main">{city}</option>
            ))}
          </select>
        </div>
      </div>
      
      <div className="mt-8">
        <label className="block text-text-secondary text-sm mb-2 font-manrope">Nachricht</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="4"
          placeholder="Erzähl uns mehr über deine Party..."
          data-testid="contact-message"
        />
      </div>

      {status.message && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`mt-6 p-4 rounded-xl ${
            status.type === 'success' 
              ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
              : 'bg-red-500/20 text-red-400 border border-red-500/30'
          }`}
          data-testid="form-status"
        >
          {status.message}
        </motion.div>
      )}

      <div className="mt-8">
        <button
          type="submit"
          disabled={loading}
          className="btn-primary w-full md:w-auto flex items-center justify-center gap-3"
          data-testid="contact-submit"
        >
          {loading ? (
            <>
              <Loader className="animate-spin" size={20} />
              Wird gesendet...
            </>
          ) : (
            <>
              <Send size={20} />
              Anfrage senden
            </>
          )}
        </button>
      </div>

      <p className="mt-4 text-text-muted text-sm font-manrope">
        Wir melden uns innerhalb von 24 Stunden bei dir.
      </p>
    </motion.form>
  );
};

export default ContactForm;
