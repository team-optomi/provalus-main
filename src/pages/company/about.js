import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from "gatsby-image"

import Layout from "../../components/layout-v2"
import AboutVideo from '../../videos/provalus-outro-about-company.mp4'

const AboutPage = () => {

    const data = useStaticQuery(graphql`
      query {
        allWpPage(filter: {databaseId: {eq: 34}}) {
          edges {
            node {
              title
              content
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
          <PageMain>
            <h1>{post.node.title} </h1>
            <VideoSection>
                <video
                className="video-player"
                height="100%"
                width="100%"
                loop
                muted
                autoPlay
                >
                <source
                    src={AboutVideo}
                    type="video/mp4"
                />
                </video>
            </VideoSection>
            <SectionContent 
            data-sal="fade"
            data-sal-duration="1000"
            data-sal-easing="ease"
            dangerouslySetInnerHTML={{ __html: post.node.content }}/>
            <ImageSection>
                <Img sizes={post.node.featuredImage.node.localFile.childImageSharp.sizes} alt={post.node.title} />
            </ImageSection>
          </PageMain>
        </Layout>
      ))
    )
  
  }
  
  
  const PageMain = styled.div`
    width: 100%;
    padding: 200px;
    h1 {
      font-family: "Madelyn";
      font-size: 185px;
      font-weight: normal;
      text-transform: lowercase;
      line-height: 35px;
      color: #d2232a;
      text-align: center;
    }
  `

  const VideoSection = styled.section`
    max-width: 1000px;
    width: 100%;
    margin: 50px auto;
  `

  const SectionContent = styled.section`
    p {
        font-family: "Kessel Light";
        line-height: 38px;
        padding-top: 30px;
        font-size: 28px;
        color: #fff;
        text-align: center;
    }
  `

  const ImageSection = styled.section`
    max-width: 600px;
    width: 100%;
    margin: 35px auto;
    opacity: .22;
  `
  
  export default AboutPage