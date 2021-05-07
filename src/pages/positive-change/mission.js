import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from "gatsby-image"

import Layout from "../../components/layout-v2"

const MissionPage = () => {

    const data = useStaticQuery(graphql`
      query {
        allWpPage(filter: {databaseId: {eq: 1262}}) {
          edges {
            node {
              title
              MissionContent {
                mpCommunityImpactVideo
                mpHeroCopy
                mpHeroImage {
                  title
                  localFile {
                    childImageSharp {
                      fluid(maxWidth: 2048) {
                        ...GatsbyImageSharpFluid_withWebp
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
          <HeroImage>
            <Img fluid={post.node.MissionContent.mpHeroImage.localFile.childImageSharp.fluid} alt={post.node.MissionContent.mpHeroImage.title} />
            <div class="hero-content">
                <div dangerouslySetInnerHTML={{ __html: post.node.MissionContent.mpHeroCopy }}/>
            </div>
          </HeroImage>
          <VideoSection>
            <div dangerouslySetInnerHTML={{ __html: post.node.MissionContent.mpCommunityImpactVideo }}/>
          </VideoSection>
        </Layout>
      ))
    )
  
  }
  
const HeroImage = styled.section`
  height: 100vh;
  width: 100%;
  position: relative;
  .gatsby-image-wrapper {
      position: absolute;
      height: 100vh;
      width: 100%;
      img {
          object-position: top center;
      }
  }
  div.hero-content {
      position: absolute;
      top: 25vh;
      width: 100%;
      > div {
          max-width: 1200px;
          width: 100%;
          padding: 0 20px;
          margin: 0 auto;
          p.content1 {
            font-family: "Kessel Light";
            color: #000;
            font-size: 45px;
            line-height: 30px;
            margin-bottom: 0;
          }
          h1.redhead {
            color: rgb(210, 35, 42);
            font-family: "Madelyn";
            font-size: 150px;
            font-style: normal;
            font-weight: normal;
            letter-spacing: 0;
            line-height: 174px;
            margin: 0;
            margin-left: 40px;
            text-transform: none;
          }
          p.content2 {
            font-family: "Kessel Light";
            font-size: 30px;
            line-height: 1;
            color: #000;
            margin-top: -60px;
            margin-left: 65px;
          }
          p.subtitle {
            font-family: "Kessel Light";
            color: #000;
            font-size: 24px;
            line-height: 24px;
            width: 40%;
            margin-left: 100px;
            margin-top: 30px;
          }
      }
  }
`

const VideoSection = styled.section`
    max-width: 1000px;
    width: 100%;
    margin: 50px auto;
    .wp-video {
        max-width: 1000px;
        width: 100%;
        height: auto;
        video {
            max-width: 1000px !important;
            width: 100% !important;
            height: auto;
        }
    }
`
  
export default MissionPage