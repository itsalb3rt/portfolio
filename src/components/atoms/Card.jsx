import React from "react"

const Card = ({
  className = "",
  heading,
  paragraph,
  tags = [],
  imgUrl,
  projectLink,
  loading = "lazy",
  fetchPriority = "auto",
}) => {
  const hasProjectLink = Boolean(projectLink)

  const content = (
    <>
      <img
        className="card-image"
        src={imgUrl}
        alt={`${heading} preview`}
        loading={loading}
        fetchPriority={fetchPriority}
        decoding="async"
        width="640"
        height="360"
      />
      <div className="card-shade" aria-hidden="true" />
      <div className="card-content">
        <div className="card-tags">
          {tags.map((tag) => (
            <span className="card-tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
        <h2 className="card-title">{heading}</h2>
        <p className="card-text">{paragraph}</p>
      </div>
      <span className="card-arrow" aria-hidden="true">
        ↗
      </span>
    </>
  )

  return (
    <article className={`card ${className}`.trim()}>
      {hasProjectLink ? (
        <a
          className="card-link"
          href={projectLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${heading} — ${paragraph}`}
        >
          {content}
        </a>
      ) : (
        <span className="card-link" aria-disabled="true">
          {content}
        </span>
      )}
    </article>
  )
}

export default Card
