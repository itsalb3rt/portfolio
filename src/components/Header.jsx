import React from "react"
import data from "../yourdata"
import Reveal from "./atoms/Reveal"

const STATS = [
  { value: "10+", label: "years full-stack" },
  { value: "18+", label: "products shipped" },
  { value: "20+", label: "automation workflows" },
]

const Header = () => {
  return (
    <section className="section hero" id="home">
      <div className="container">
        <div className="hero-main">
          <Reveal>
            <p className="section-eyebrow">
              albert hidalgo — full-stack · 10+ yrs
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="hero-title">
              {data.headerTagline[0] && (
                <span className="hero-line">{data.headerTagline[0]}</span>
              )}
              {data.headerTagline[1] && (
                <span className="hero-line">{data.headerTagline[1]}</span>
              )}
              {data.headerTagline[2] && (
                <span className="hero-line hero-accent">
                  {data.headerTagline[2]}
                </span>
              )}
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="hero-paragraph">{data.headerParagraph}</p>
          </Reveal>

          <Reveal delay={240}>
            <div className="hero-actions">
              <a className="primary-btn" href="#contact">
                Start a project
              </a>
              <a className="btn-ghost" href="#work">
                View selected work
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={300}>
          <div className="hero-stats">
            {STATS.map((stat) => (
              <div className="hero-stat" key={stat.label}>
                <span className="hero-stat-value">{stat.value}</span>
                <span className="hero-stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Header
