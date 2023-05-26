import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import Spinner from './spinner';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Perform form submission logic here (e.g., send data to backend)
    const templateParams = {
      name,
      email,
      message
    };

    emailjs.send('service_22tltyn', 'template_wt3snog', templateParams, '-qFHvZCxvKML4Pcwg')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setSuccess(true);
      }, (err) => {
        console.log('FAILED...', err);
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
      <div class="success-banner">
        <span class="success-message"><span role="img" aria-label="celebrating emoji">🎉</span> Thank you! Your message has been submitted successfully. we will be in touch very soon <span role="img" aria-label="smile emoji">😊</span></span>
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
        <div style={{ textAlign: 'center' }}>
          <button
            style={{ textAlign: 'center', minWidth: '116px', maxHeight: '36px' }}
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