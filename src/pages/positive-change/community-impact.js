import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from "gatsby-image"

import Layout from "../../components/layout-v2"
import SEO from "../../components/seo"
import ImpactVideo from '../../videos/Impact_Infographic.mp4'
import ImpactScrollingImages from "../../components/impact-scrolling-images"

const MissionPage = () => {

    const data = useStaticQuery(graphql`
      query {
        allWpPage(filter: {databaseId: {eq: 1262}}) {
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
          <SEO 
          title={post.node.seo.title} 
          description={post.node.seo.metaDesc}
          metaImage={post.node.seo.opengraphImage.localFile.childImageSharp.fluid}
          />
          <HeroImage>
            <Img fluid={post.node.MissionContent.mpHeroImage.localFile.childImageSharp.fluid} alt={post.node.MissionContent.mpHeroImage.title} />
            <div class="hero-content">
                <div dangerouslySetInnerHTML={{ __html: post.node.MissionContent.mpHeroCopy }}/>
            </div>
          </HeroImage>
          <VideoSection>
            <div class="col-left">
              <video
                className="video-player"
                height="100%"
                width="100%"
                loop
                autoPlay
                >
                <source
                    src={ImpactVideo}
                    type="video/mp4"
                />
              </video>
            </div>
            <div class="col-right">
              <div dangerouslySetInnerHTML={{ __html: post.node.MissionContent.mpCommunityImpactVideo }}/>
            </div>
          </VideoSection>
          <ScrollingImages>
            <ImpactScrollingImages/>
          </ScrollingImages>
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
          object-position: top center !important;
      }
  }
  div.hero-content {
      position: absolute;
      top: 145px;
      width: 100%;
      > div {
          max-width: 1300px;
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
  @media(max-width:1000px) {
    div.hero-content { 
      top: auto;
      bottom: 0;
      width: 100%;
      background-color: rgba(0,0,0,.5);
      padding: 35px;
      > div {
        p.content1 {
          color: #fff;
        }
        h1.redhead {
          font-size: 125px;
        }
        p.content2 {
          color: #fff;
        }
        p.subtitle {
          color: #fff;
          width: 100%;
          margin-left: 0;
          margin-top: 0;
        }
      }
    }
  }
  @media(max-width:767px) {
    div.hero-content { 
      > div {
        p.content1 {
          font-size: 20px;
        }
        h1.redhead {
          font-size: 75px;
          line-height: 2.2;
          margin-top: -30px;
        }
        p.content2 {
          font-size: 20px;
        }
        p.subtitle {
          font-size: 18px;
        }
      }
    }
  }
  @media(max-width:500px) {
    div.hero-content { 
      padding: 0;
      height: 100vh;
      padding-top: 140px;
      > div {
        h1.redhead {
          font-size: 60px;
          margin-left: 0;
        }
        p.content2 {
          margin-left: 20px;
          margin-top: -40px;
        }
      }
    }
  }
`

const VideoSection = styled.section`
    max-width: 1240px;
    width: 100%;
    padding: 0 20px;
    margin: 70px auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    > div {
      width: calc(50% - 15px);
      p {
        font-family: "Kessel Light";
        line-height: 1.5;
        font-size: 18px;
        color: #fff;
        max-width: 550px;
        font-weight: 400;
        text-align: right;
      }
    }
    .wp-video {
        max-width: 1000px;
        width: 100% !important;
        height: auto;
        video {
            max-width: 1000px !important;
            width: 100% !important;
            height: auto;
        }
    }
    @media(max-width: 1000px) {
      flex-wrap: wrap;
      > div {
        width: 100%;
        p {
          text-align: center;
          margin: 20px auto;
        }
      }
      .wp-video {
        max-width: 600px;
        margin: 0 auto;
      }
    }
    @media(max-width:767px) {
      h2 {
        font-size: 28px;
      }
      > div {
        p {
          font-size: 14px;
        }
      }
      p {
        font-size: 14px;
        br {
          display: none;
        }
      }
    }
    @media(max-width: 650px) {
      .wp-video {
        max-width: 400px;
        margin: 0 auto;
      }
    }
    @media(max-width: 450px) {
      .wp-video {
        max-width: 300px;
        margin: 0 auto;
      }
    }
`

const ScrollingImages = styled.section``
  
export default MissionPage