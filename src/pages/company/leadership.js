import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from "../../components/layout-v2"
import SEO from "../../components/seo"
import LeadershipSlider from "../../components/leadership-slider"

const LeadershipPage = () => {

    const data = useStaticQuery(graphql`
      query {
        allWpPage(filter: {databaseId: {eq: 271}}) {
          edges {
            node {
              seo {
                title
                metaDesc
                opengraphImage {
                  localFile {
                    childImageSharp {
                      fluid(maxWidth: 1920) {
                        ...GatsbyImageSharpFluid_withWebp
                      }
                    }
                  }
                }
              }
              title
              featuredImage {
                node {
                  localFile {
                    childImageSharp {
                        sizes(maxWidth: 1920) {
                            ...GatsbyImageSharpSizes
                        }
                    }
                  }
                }
              }
            }
          }
        }
      }
    `)
  
    return(
          
      data.allWpPage.edges.map(post => (
        <Layout>
          <SEO 
          title={post.node.seo.title} 
          description={post.node.seo.metaDesc}
          metaImage={post.node.seo.opengraphImage.localFile.childImageSharp.fluid}
          />
          <PageMain>
            <h1>{post.node.title} </h1>
            <LeadershipSlider/>
          </PageMain>
        </Layout>
      ))
    )
  
  }
  
  
  const PageMain = styled.div`
    width: 100%;
    padding-top: 200px;
    h1 {
      font-family: "Madelyn";
      font-size: 185px;
      font-weight: normal;
      text-transform: lowercase;
      line-height: 35px;
      color: #d2232a;
      text-align: center;
      margin-bottom: 100px;
    }
  `
  
  export default LeadershipPage