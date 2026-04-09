import React from "react"
import Card from "./atoms/Card"

import data from "../yourdata"

const Work = () => {
  return (
    <div className="section" id="work">
      <div className="container">
        <div className="work-wrapper">
          <h1>Work</h1>

          <div className="grid project-container">
            {data.projects.map((project, index) => (
              <Card
                key={`project-${index}`}
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
