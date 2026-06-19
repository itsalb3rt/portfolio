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
      setError('Contact form is not configured yet. Please email us directly.');
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

    // Reset form fields
    setName('');
    setEmail('');
    setMessage('');
  };

  const resetForm = () => {
    setSuccess(false);
    setError('');
  };

  return (<>
    {success ?
      <div className="success-banner" role="status" aria-live="polite">
        <span className="success-message">
          <span role="img" aria-label="celebrating emoji">🎉</span> Thank you! Your message has been submitted successfully. We will be in touch very soon. <span role="img" aria-label="smile emoji">😊</span>
        </span>
        <div style={{ marginTop: '10px' }}>
          <button type="button" className="primary-btn" onClick={resetForm} style={{ fontSize: '0.85rem', padding: '8px 18px' }}>
            Send another message
          </button>
        </div>
      </div>
      :
      <form onSubmit={handleSubmit}>
        <div>
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
        <div>
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
        <div>
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
        <div style={{ textAlign: 'center' }}>
          <button
            className="primary-btn"
            disabled={loading}
            type="submit"
            style={{ minWidth: '140px' }}
          >
            {loading ? <Spinner /> : 'Send Message'}
          </button>
        </div>
      </form>
    }
  </>

  );
};

export default ContactForm;