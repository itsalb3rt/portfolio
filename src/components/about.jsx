import React from "react"
import data from "../yourdata"

const About = () => {
  return (
    <div className="section" id="about">
      <div className="container">
        <div className="about-section">
          <div className="content">
            <h1>About Me</h1>
            <p>{data.aboutParaOne}</p>
            <p>{data.aboutParaTwo}</p>
            <p>{data.aboutParaThree}</p>
          </div>
          <div className="image-wrapper">
            <img
              className="about-image"
              src={data.aboutImage}
              alt="Albert Hidalgo portrait"
              loading="lazy"
              fetchPriority="low"
              decoding="async"
              width="300"
              height="300"
            ></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
