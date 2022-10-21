import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
import externalLinkIcon from "../images/external-link.png"

const Navbar = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="navbar-wrapper">
          <div
            role="button"
            className="name"
            tabIndex={0}
          >
            Portfolio.
          </div>
          <div className="links-wrapper">
            <button onClick={() => scrollTo("#work")}>Work</button>
            <button onClick={() => scrollTo("#about")}>About</button>
            <button onClick={() => scrollTo("#contact")}>Contact</button>
            <button onClick={() => window.location.href = "https://blog.albert.do"}>
              Blog <img style={{ width: 10 }} src={externalLinkIcon} alt="sponsor"></img>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
