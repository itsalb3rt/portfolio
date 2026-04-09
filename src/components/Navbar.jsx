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
          <div
            role="button"
            className="name"
            tabIndex={0}
            onClick={() => smoothScrollTo("home")}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault()
                smoothScrollTo("home")
              }
            }}
          >
            Portfolio.
          </div>
          <div className="links-wrapper">
            <button onClick={() => smoothScrollTo("work")}>Work</button>
            <button onClick={() => smoothScrollTo("about")}>About</button>
            <button onClick={() => smoothScrollTo("contact")}>Contact</button>
            <button onClick={() => (window.location.href = "https://blog.albert.do")}>
              Blog <img style={{ width: 10 }} src={externalLinkIcon} alt="Open blog" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
