import React from "react"
import { scroller } from "react-scroll"
import externalLinkIcon from "../images/external-link.png"

const Navbar = () => {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [activeSection, setActiveSection] = React.useState('home')

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
    setActiveSection(sectionName)
    smoothScrollTo(sectionName)
  }

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Lightweight active section detection
      const sectionIds = ['home', 'work', 'about', 'contact']
      let current = 'home'
      const scrollY = window.scrollY + 110 // account for nav + a bit of offset

      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= scrollY) {
          current = id
        }
      }
      if (current !== activeSection) {
        setActiveSection(current)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    // run once on mount
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [activeSection])

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
            <a
              href="#work"
              className={activeSection === 'work' ? 'active' : ''}
              aria-current={activeSection === 'work' ? 'page' : undefined}
              onClick={(event) => handleNavClick(event, "work")}
            >
              Work
            </a>
            <a
              href="#about"
              className={activeSection === 'about' ? 'active' : ''}
              aria-current={activeSection === 'about' ? 'page' : undefined}
              onClick={(event) => handleNavClick(event, "about")}
            >
              About
            </a>
            <a
              href="#contact"
              className={activeSection === 'contact' ? 'active' : ''}
              aria-current={activeSection === 'contact' ? 'page' : undefined}
              onClick={(event) => handleNavClick(event, "contact")}
            >
              Contact
            </a>
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
