import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"

const About = () => {
  return (
    <div className="secion" id="about">
      <div className="container">
        <div className="about-section">
          <div className="content">
            <Fade bottom cascade>
              <h1>About Me</h1>
            </Fade>
            <p>
              {data.aboutParaOne}
              <br></br>
              <br></br>
              {data.aboutParaTwo}
              <br></br>
              <br></br>
              {data.aboutParaThree}
            </p>
          </div>
          <div className="image-wrapper">
            <img
              className="about-image"
              src={data.aboutImage}
              alt="Albert Hidalgo portrait"
              loading="lazy"
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
