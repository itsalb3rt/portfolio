/**
 * Page-level SEO metadata (title/description) for Vite + React.
 *
 * Static social/SEO tags (Open Graph, Twitter Card, canonical, JSON-LD,
 * robots) live in index.html so crawlers that don't execute JavaScript
 * can see them. This component only handles per-route overrides after
 * hydration — keep it in sync with index.html's default values.
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

function SEO({ description, lang, meta, title }) {
  // The static <meta name="description"> lives in index.html and covers every
  // route — only emit a Helmet override when a page explicitly passes one.
  const metaOverrides = description
    ? [{ name: `description`, content: description }]
    : []

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      meta={metaOverrides.concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
