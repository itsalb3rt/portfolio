import React from "react"
import Navbar from "./Navbar"
import "../styles/mains.scss"

const Layout = ({ children }) => {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <main id="main">{children}</main>
    </>
  )
}
export default Layout
