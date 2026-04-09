/**
 * SEO metadata component for Vite + React.
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import siteMetadata from "../config/siteMetadata"

function SEO({ description, lang, meta, title, pathname, image }) {
  const site = siteMetadata

  const metaDescription = description || site.description
  const defaultTitle = site?.title
  const canonicalUrl = `${site.siteUrl}${pathname || ""}`
  const seoImage = image || `${site.siteUrl}${site.defaultImage}`
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.title,
    url: site.siteUrl,
    description: metaDescription,
    sameAs: [
      "https://github.com/itsalb3rt",
      "https://www.linkedin.com/in/alhidalgodev",
      "https://twitter.com/alhidalgodev",
    ],
  }

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `robots`,
          content: `index, follow`,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:url`,
          content: canonicalUrl,
        },
        {
          property: `og:site_name`,
          content: site.title,
        },
        {
          property: `og:image`,
          content: seoImage,
        },
        {
          property: `og:image:width`,
          content: `1200`,
        },
        {
          property: `og:image:height`,
          content: `630`,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:creator`,
          content: site?.author || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:image`,
          content: seoImage,
        },
        {
          name: `theme-color`,
          content: `#111111`,
        },
      ].concat(meta)}
      link={[
        {
          rel: `canonical`,
          href: canonicalUrl,
        },
      ]}
    >
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
  pathname: `/`,
  image: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  pathname: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
}

export default SEO
