import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
import externalLinkIcon from "../images/external-link.png"

const Navbar = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`section navbar ${isScrolled ? 'scrolled' : ''}`}>
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
