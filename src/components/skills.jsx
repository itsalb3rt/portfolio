import React from "react"
import data from "../yourdata"
import Reveal from "./atoms/Reveal"

const Skills = () => {
  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="skills-container">
          <Reveal>
            <div className="section-head">
              <div>
                <p className="section-eyebrow">04 · Capabilities</p>
                <h2 className="section-title">Skills</h2>
              </div>
              <p className="work-intro">
                The tools and disciplines I reach for daily — from language
                fundamentals to production infrastructure.
              </p>
            </div>
          </Reveal>

          <div className="skills-list">
            {data.skills.map((skill, index) => (
              <Reveal key={`skill-${index}`} delay={index * 40}>
                <div className="skill">
                  <span className="skill-index">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <img
                    className="skill-icon"
                    src={skill.img}
                    alt={`${skill.name} icon`}
                    width="36"
                    height="36"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="skill-copy">
                    <h2 className="skill-name">{skill.name}</h2>
                    <p className="skill-para">{skill.para}</p>
                  </div>
                  <span className="skill-arrow" aria-hidden="true">
                    →
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
