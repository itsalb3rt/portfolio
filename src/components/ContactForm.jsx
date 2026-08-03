import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import Spinner from './spinner';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!name.trim() || !email.trim() || !message.trim()) {
      setError('Please complete all required fields.');
      return;
    }

    if (!serviceId || !templateId || !publicKey) {
      setError('Contact form is not configured yet. Please email me directly.');
      return;
    }

    setLoading(true);

    const templateParams = {
      name,
      email,
      message
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then(() => {
        setSuccess(true);
      }, () => {
        setError('Unable to send your message right now. Please try again in a moment.');
      })
      .finally(() => {
        setLoading(false);
      })

    setName('');
    setEmail('');
    setMessage('');
  };

  const resetForm = () => {
    setSuccess(false);
    setError('');
  };

  return (
    <>
      {success ? (
        <div className="success-banner" role="status" aria-live="polite">
          <p className="success-title">Thank you — your message has been sent.</p>
          <p className="success-sub">I'll get back to you shortly.</p>
          <button type="button" className="primary-btn success-reset" onClick={resetForm}>
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="form-field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              placeholder="Tell me about your project or idea..."
              value={message}
              rows={7}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          {error ? <p className="form-error" role="alert">{error}</p> : null}
          <div className="form-submit">
            <button className="primary-btn" disabled={loading} type="submit">
              {loading ? <Spinner /> : 'Send Message'}
            </button>
          </div>
        </form>
      )}
    </>
  );
};

export default ContactForm;
