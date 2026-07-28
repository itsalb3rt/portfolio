import React from "react"
import Card from "./atoms/Card"

import data from "../yourdata"

const Work = () => {
  const getCardVariant = (index) => {
    if (index === 0) return "card--featured"
    if (index % 5 === 0) return "card--wide"
    return "card--standard"
  }

  return (
    <div className="section" id="work">
      <div className="container">
        <div className="work-wrapper">
          <h1>Work</h1>
          <p className="work-intro">
            Selected projects focused on product quality, business impact, and clean execution.
          </p>

          <div className="grid project-container">
            {data.projects.map((project, index) => (
              <Card
                key={`project-${index}`}
                className={getCardVariant(index)}
                heading={project.title}
                paragraph={project.para}
                imgUrl={project.imageSrc}
                projectLink={project.url}
                loading={index === 0 ? "eager" : "lazy"}
                fetchPriority={index === 0 ? "high" : "auto"}
              ></Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work
