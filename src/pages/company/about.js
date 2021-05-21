import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from "../../components/layout-v2"
import SEO from "../../components/seo"
import AboutVideo from '../../videos/fullwidth-video.mp4'
import AboutScrollingImages from "../../components/about-scrolling-images"

const AboutPage = () => {

    const data = useStaticQuery(graphql`
      query {
        allWpPage(filter: {databaseId: {eq: 34}}) {
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
          <SEO 
          title={post.node.seo.title} 
          description={post.node.seo.metaDesc}
          metaImage={post.node.seo.opengraphImage.localFile.childImageSharp.fluid}
          />
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
                playsInline
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
            {/* <ImageSection>
                <Img sizes={post.node.featuredImage.node.localFile.childImageSharp.sizes} alt={post.node.title} />
            </ImageSection> */}
            <ScrollingImages>
              <AboutScrollingImages />
            </ScrollingImages>
          </PageMain>
        </Layout>
      ))
    )
  
  }
  
  
  const PageMain = styled.div`
    width: 100%;
    padding: 200px 0;
    padding-bottom: 50px;
    h1 {
      font-family: "Madelyn";
      font-size: 185px;
      font-weight: normal;
      text-transform: lowercase;
      line-height: 35px;
      color: #d2232a;
      text-align: center;
      position: relative;
    }
    @media(max-width:1000px) {
      padding: 200px 20px;
      padding-bottom: 50px;
    }
    @media(max-width:767px) {
      padding-top: 100px;
      h1 {
        font-size: 100px;
      }
    }
    @media(max-width:767px) {
      h2 {
        font-size: 28px;
      }
      p {
        font-size: 14px;
        br {
          display: none;
        }
      }
    }
  `

  const VideoSection = styled.section`
    max-width: 100%;
    width: 100%;
    margin: 50px auto;
  `

  const SectionContent = styled.section`
    max-width: 1040px;
    padding: 0 20px;
    margin: 0 auto;
    p {
        font-family: "Kessel Light";
        line-height: 1.5;
        padding-top: 30px;
        font-size: 18px;
        color: #fff;
        text-align: center;
    }
    @media(max-width:767px) {
      opacity: 1 !important;
    }
    @media(max-width:767px) {
      h2 {
        font-size: 28px;
      }
      p {
        font-size: 14px;
        br {
          display: none;
        }
      }
    }
  `

  // const ImageSection = styled.section`
  //   max-width: 600px;
  //   width: 100%;
  //   margin: 35px auto;
  //   opacity: .22;
  // `

  const ScrollingImages = styled.section`
    padding-top: 50px;
  `
  
  export default AboutPage