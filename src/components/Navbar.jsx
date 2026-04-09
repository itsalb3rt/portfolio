import React from "react"
import { scroller } from "react-scroll"
import externalLinkIcon from "../images/external-link.png"

const Navbar = () => {
  const [isScrolled, setIsScrolled] = React.useState(false)

  const smoothScrollTo = (sectionName) => {
    scroller.scrollTo(sectionName, {
      duration: 550,
      delay: 0,
      smooth: true,
      offset: -70,
    })
  }

  const handleNavClick = (event, sectionName) => {
    event.preventDefault()
    smoothScrollTo(sectionName)
  }

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className={`section navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="container">
        <div className="navbar-wrapper">
          <a
            href="#home"
            className="name"
            onClick={(event) => handleNavClick(event, "home")}
          >
            Portfolio.
          </a>
          <div className="links-wrapper">
            <a href="#work" onClick={(event) => handleNavClick(event, "work")}>Work</a>
            <a href="#about" onClick={(event) => handleNavClick(event, "about")}>About</a>
            <a href="#contact" onClick={(event) => handleNavClick(event, "contact")}>Contact</a>
            <a href="https://blog.albert.do" target="_blank" rel="noopener noreferrer">
              Blog <img style={{ width: 10 }} src={externalLinkIcon} alt="Open blog" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
