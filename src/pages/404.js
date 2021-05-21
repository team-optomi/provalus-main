import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout-v2"
import SEO from "../components/seo"

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="404: Not Found" />
      <h1 style={{textAlign: "center", color: "#fff", marginTop: "0", paddingTop: "20vh"}}>404: Not Found</h1>
      <p style={{textAlign: "center", marginBottom: "20vh"}}><Link to="/" style={{color: "#fff"}}>Return Home</Link></p>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
