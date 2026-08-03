import React from "react"
import { scroller } from "react-scroll"

const NAV_LINKS = [
  { id: "home", label: "Home", index: "01" },
  { id: "work", label: "Work", index: "02" },
  { id: "about", label: "About", index: "03" },
  { id: "contact", label: "Contact", index: "04" },
]

const Navbar = () => {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [activeSection, setActiveSection] = React.useState("home")

  const smoothScrollTo = (sectionName) => {
    scroller.scrollTo(sectionName, {
      duration: 700,
      delay: 0,
      smooth: true,
      offset: -72,
    })
  }

  const handleNavClick = (event, sectionName) => {
    event.preventDefault()
    setActiveSection(sectionName)
    smoothScrollTo(sectionName)
  }

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)

      const sectionIds = ["home", "work", "about", "contact"]
      let current = "home"
      const scrollY = window.scrollY + 120

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
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [activeSection])

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`} aria-label="Primary">
      <div className="container">
        <div className="navbar-wrapper">
          <a
            href="#home"
            className="name"
            onClick={(event) => handleNavClick(event, "home")}
          >
            albert<span className="name-accent">.</span>do
          </a>

          <div className="links-wrapper">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={activeSection === link.id ? "active" : ""}
                aria-current={activeSection === link.id ? "page" : undefined}
                onClick={(event) => handleNavClick(event, link.id)}
              >
                <span className="nav-index">{link.index}</span>
                {link.label}
              </a>
            ))}
            <a
              href="https://blog.albert.do"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-external"
            >
              <span className="nav-index">05</span>
              Blog <span className="nav-arrow" aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
