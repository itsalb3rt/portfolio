import React from "react"
import data from "../yourdata"
import useScrollReveal from "./hooks/useScrollReveal"

const Skills = () => {
  const [ref, visible] = useScrollReveal()

  return (
    <div className="section" ref={ref}>
      <div className="container">
        <div className={`skills-container ${visible ? "visible" : ""}`}>
          <h1>Skills</h1>
          <div className="skills-grid">
            {data.skills.map((skill, index) => (
              <div className="skill" key={`skill-${index}`}>
                <img style={{objectFit: "contain"}} src={skill.img} alt={`Skill icon ${index + 1}`} width="48" height="48" />
                <p>{skill.para}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills