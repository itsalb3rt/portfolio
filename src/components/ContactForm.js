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

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_22tltyn';
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_wt3snog';
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '-qFHvZCxvKML4Pcwg';

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!name.trim() || !email.trim() || !message.trim()) {
      setError('Please complete all required fields.');
      return;
    }

    setLoading(true);

    const templateParams = {
      name,
      email,
      message
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setSuccess(true);
      }, (err) => {
        console.log('FAILED...', err);
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

  return (<>
    {success ?
      <div className="success-banner" role="status" aria-live="polite">
        <span className="success-message"><span role="img" aria-label="celebrating emoji">🎉</span> Thank you! Your message has been submitted successfully. We will be in touch very soon. <span role="img" aria-label="smile emoji">😊</span></span>
      </div>
      :
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <div>
            <label htmlFor="name">Name</label>
          </div>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <div>
            <label htmlFor="email" className="block mb-2" required>Email</label>
          </div>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <div>
            <label htmlFor="message" className="block mb-2">Message</label>
          </div>
          <textarea
            id="message"
            value={message}
            rows={8}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        {error ? <p role="alert">{error}</p> : null}
        <div style={{ textAlign: 'center' }}>
          <button
            style={{ textAlign: 'center', minWidth: '116px', maxHeight: '46px' }}
            className="primary-btn"
            disabled={loading}
            type="submit"
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