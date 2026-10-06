import React from "react"
import data from "../yourdata"
import Reveal from "./atoms/Reveal"

const Promotion = () => {
  return (
    <section className="section" id="elsewhere">
      <div className="container">
        <div className="promotion-container">
          <Reveal>
            <div className="section-head">
              <div>
                <p className="section-eyebrow">05 · Activity</p>
                <h2 className="section-title">{data.promotionHeading}</h2>
              </div>
              <p className="work-intro">{data.promotionPara}</p>
            </div>
          </Reveal>

          <div className="activity-grid">
            {data.activity.map((item, index) => (
              <Reveal key={item.name} delay={index * 90}>
                <a
                  className="activity-card"
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="activity-top">
                    <span className="activity-index">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="activity-arrow" aria-hidden="true">
                      ↗
                    </span>
                  </div>
                  <h2 className="activity-name">{item.name}</h2>
                  <p className="activity-desc">{item.desc}</p>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Promotion
