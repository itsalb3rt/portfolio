import React from "react"

const Card = ({ heading, paragraph, imgUrl, projectLink, loading = "lazy" }) => {
  const hasProjectLink = Boolean(projectLink)

  return (
    <article className="card" style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}>
      <img
        className="card-image"
        src={imgUrl}
        alt={`${heading} preview`}
        loading={loading}
        decoding="async"
        width="640"
        height="360"
      />
      <div className="content">
        <h1 className="header">{heading}</h1>
        <p className="text">{paragraph}</p>
        {hasProjectLink ? (
          <a
            href={projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            Explore
          </a>
        ) : (
          <span className="btn btn-disabled" aria-disabled="true">
            Explore
          </span>
        )}
      </div>
    </article>
  )
}

export default Card
