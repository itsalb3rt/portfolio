import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
// Components
import Header from "../components/Header"
import Work from "../components/Work"
import About from "../components/about"
import Skills from "../components/skills"
import Footer from "../components/Footer"

const IndexPage = () => (
  <Layout>
    <SEO 
    title="Albert Hidalgo" 
    description={'docker, quasar framework, vue, react, postgres, wordpress, static site, web developer, applications, mobile, ios, android, javascript, nodejs, ci/cd, pipeline, github actions, linux, servers, seo'} 
    lang="en"
    />
    <Header />
    <Work />
    <About />
    <Skills />
    <Footer />
  </Layout>
)

export default IndexPage
