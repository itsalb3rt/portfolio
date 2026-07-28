import React from "react"
import data from "../yourdata"

const Header = () => {
  return (
    <div className="section" id="home">
      <div className="container">
        <div className="header-wrapper">
          <p className="header-greeting">Hi, I'm {data.name}</p>
          <div className="heading-wrapper">
            <h1>{data.headerTagline[0] ? data.headerTagline[0] : "Building digital"}</h1>
            <h1>{data.headerTagline[1] ? data.headerTagline[1] : "products, brands"}</h1>
            <h1>{data.headerTagline[2] ? data.headerTagline[2] : "and experience"}</h1>
          </div>
          <p className="header-subtitle">{data.headerParagraph}</p>
          <a className="primary-btn" href="#contact">
            Get in touch
          </a>
        </div>
      </div>
    </div>
  )
}

export default Header
