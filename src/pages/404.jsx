import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO
      title="404: Not found"
      pathname="/404"
      meta={[{ name: "robots", content: "noindex, nofollow" }]}
    />
    <section className="section" style={{ minHeight: "70vh" }}>
      <div className="container" style={{ paddingTop: "10rem", textAlign: "center" }}>
        <p
          className="section-eyebrow"
          style={{ justifyContent: "center" }}
        >
          404 · page not found
        </p>
        <h1
          style={{
            fontSize: "clamp(4rem, 14vw, 9rem)",
            lineHeight: 1,
            margin: "1rem 0",
            color: "var(--accent)",
          }}
        >
          404
        </h1>
        <p
          style={{
            color: "var(--ink-muted)",
            maxWidth: "44ch",
            margin: "0 auto 2rem",
            fontFamily: "var(--font-mono)",
            fontSize: "0.95rem",
          }}
        >
          That route doesn't exist. The page you're looking for moved, never
          existed, or was deleted — like the features I cut in scope meetings.
        </p>
        <a className="primary-btn" href="/">
          Back to home
        </a>
      </div>
    </section>
  </Layout>
)

export default NotFoundPage
