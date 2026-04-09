import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"
import { Link } from 'react-scroll'

const Header = () => {

  return (
    <div className="section" id="home">
      <div className="container">
        <div className="header-wrapper">
          <Fade bottom>
            <h2>
              Hi, I'm {data.name}{" "}
              <span role="img" aria-label="Emoji">
                👋
              </span>
            </h2>
          </Fade>
          <Fade bottom cascade>
            <div className="heading-wrapper">
              <h1>
                {data.headerTagline[0]
                  ? data.headerTagline[0]
                  : "Building digital"}
              </h1>
              <h1>
                {" "}
                {data.headerTagline[1]
                  ? data.headerTagline[1]
                  : "products, brands"}
              </h1>
              <h1>
                {" "}
                {data.headerTagline[2]
                  ? data.headerTagline[2]
                  : "and experience"}
              </h1>
            </div>
          </Fade>
          <Fade bottom>
            <p>{data.headerParagraph}</p>
          </Fade>
          <Fade bottom>
            <Link
              offset={70}
              to="contact"
              smooth={true}
              duration={1000}
            >
              <button className="primary-btn">CONNECT WITH ME</button>
            </Link>
          </Fade>
        </div>
      </div>
    </div>
  )
}

export default Header
