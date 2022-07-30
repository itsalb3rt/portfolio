import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"

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
                <img src={sponsor.img} alt="sponsor"></img>
              </a>
            ))}
          </div>
        </div>
        
        <div className="footer-container">
          <Fade bottom cascade>
            <h1>Contact</h1>
            <h2>{data.contactSubHeading}</h2>
          </Fade>
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
              >
                <img src={socialLink.img} alt="icons"></img>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
