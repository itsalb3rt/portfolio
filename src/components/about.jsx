import React from "react"
import data from "../yourdata"
import Reveal from "./atoms/Reveal"

const About = () => {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="about-section">
          <div className="about-copy">
            <Reveal>
              <p className="section-eyebrow">03 · About</p>
              <h1 className="section-title">About</h1>
              <p className="about-statement">{data.aboutParaOne}</p>
              <p className="about-body">{data.aboutParaTwo}</p>
              <p className="about-body">{data.aboutParaThree}</p>
            </Reveal>
          </div>

          <Reveal delay={150} className="about-visual">
            <figure className="about-figure">
              <img
                className="about-image"
                src={data.aboutImage}
                alt="Albert Hidalgo portrait"
                loading="lazy"
                fetchPriority="low"
                decoding="async"
              />
              <figcaption className="about-caption">
                <span className="about-caption-dot" aria-hidden="true" />
                albert hidalgo — santo domingo, dr
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default About
