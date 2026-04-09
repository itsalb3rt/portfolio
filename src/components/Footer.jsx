import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"
import ContactForm from "./ContactForm"

const Footer = () => {
  return (
    <div className="section" id="contact">
      <div className="container">

        <div>
          <h1>Special Sponsors</h1>
          <div className="sponsors-container">
            {data.sponsors.map((sponsor, index) => (
              <a
                key={`sponsor-${index}`}
                href={sponsor.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={sponsor.img}
                  alt={sponsor.name || `Sponsor ${index + 1}`}
                  loading="lazy"
                  decoding="async"
                ></img>
              </a>
            ))}
          </div>
        </div>
        
        <div className="footer-container">
          <Fade bottom cascade>
            <h1 id="contact">Contact</h1>
            <h2>{data.contactSubHeading}</h2>
          </Fade>
          <ContactForm />
          <a className="email-link" href={`mailto:${data.contactEmail}`}>
            {data.contactEmail}
          </a>
          <div className="social-icons">
            {data.social.map((socialLink, index) => (
              <a
                key={`social-${index}`}
                href={socialLink.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={socialLink.name}
              >
                <img src={socialLink.img} alt={socialLink.name} loading="lazy" decoding="async"></img>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
