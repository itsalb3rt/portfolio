import React from "react"
import Card from "./atoms/Card"
import Reveal from "./atoms/Reveal"
import data from "../yourdata"

const Work = () => {
  const getCardVariant = (index) => {
    if (index === 0) return "card--featured"
    if (index % 5 === 0) return "card--wide"
    return "card--standard"
  }

  return (
    <section className="section" id="work">
      <div className="container">
        <div className="work-wrapper">
          <Reveal>
            <div className="section-head">
              <div>
                <p className="section-eyebrow">02 · Selected work</p>
                <h1 className="section-title">Work</h1>
              </div>
              <p className="work-intro">
                Selected projects focused on product quality, business impact,
                and clean execution. Hover any card for the story.
              </p>
            </div>
          </Reveal>

          <div className="grid project-container">
            {data.projects.map((project, index) => {
              const variant = getCardVariant(index)
              return (
                <Reveal
                  key={`project-${index}`}
                  delay={(index % 3) * 70}
                  className={`grid-reveal ${variant}`}
                >
                  <Card
                    className={variant}
                    heading={project.title}
                    paragraph={project.para}
                    tags={project.tags}
                    imgUrl={project.imageSrc}
                    projectLink={project.url}
                    loading={index === 0 ? "eager" : "lazy"}
                    fetchPriority={index === 0 ? "high" : "auto"}
                  />
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Work
