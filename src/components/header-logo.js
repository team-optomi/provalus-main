import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const HeaderLogo = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "provalus-logo.png" }) {
        childImageSharp {
          fixed(width: 200, height: 58) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return <Img fluid={data.placeholderImage.childImageSharp.fixed} />
}

export default HeaderLogo
