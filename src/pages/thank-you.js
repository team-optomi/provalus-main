import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout-v2"
import SEO from "../components/seo"

const ThankYouPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="404: Not Found" />
      <h1 style={{textAlign: "center", color: "#fff", marginTop: "0", paddingTop: "20vh"}}>Thank you for your submission. One of our representatives will reach out to you shortly.</h1>
      <p style={{textAlign: "center", marginBottom: "20vh"}}><Link to="/" style={{color: "#fff"}}>Return Home</Link></p>
    </Layout>
  )
}

export default ThankYouPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`