import React from "react"
import { useStaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'
import Img from "gatsby-image"
import Slider from "react-slick"

import Layout from "../components/layout-v2"
import SEO from "../components/seo"
import HomeVideo from '../videos/provalus-home.mp4'

import scrollTo from 'gatsby-plugin-smoothscroll';
import { FaChevronDown } from 'react-icons/fa'

const IndexPage = () => {

  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const data = useStaticQuery(graphql`
    query {
      allWpPage(filter: {databaseId: {eq: 86}}) {
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
            HomePageContent {
              homeHeroSection {
                homeBackgroundImage {
                  title
                  localFile {
                    childImageSharp {
                      fluid(maxWidth: 1920) {
                        ...GatsbyImageSharpFluid_withWebp
                      }
                    }
                  }
                }
                homeVTwoLogoImage {
                  title
                  localFile {
                    childImageSharp {
                      fluid(maxWidth: 824) {
                        ...GatsbyImageSharpFluid_withWebp
                      }
                    }
                  }
                }
                homeHeroSubheader
              }
              homeStatisticsSection {
                homeFirstStat
                homeSecondStat
                homeThirdStat
                homeFourthStat
                homeFifthStat
                homeSixthStat
              }
              homeSectionTwoContent
              homeSectionThree {
                homeSectionThreeTitle
                homeColumnOneIcon {
                  title
                  localFile {
                    childImageSharp {
                      fluid(maxWidth: 800) {
                        ...GatsbyImageSharpFluid_withWebp
                      }
                    }
                  }
                }
                homeColumnOneContent
                homeColumnTwoIcon {
                  title
                  localFile {
                    childImageSharp {
                      fluid(maxWidth: 800) {
                        ...GatsbyImageSharpFluid_withWebp
                      }
                    }
                  }
                }
                homeColumnTwoContent
                homeColumnThreeIcon {
                  title
                  localFile {
                    childImageSharp {
                      fluid(maxWidth: 800) {
                        ...GatsbyImageSharpFluid_withWebp
                      }
                    }
                  }
                }
                homeColumnThreeContent
                homeColumnFourIcon {
                  title
                  localFile {
                    childImageSharp {
                      fluid(maxWidth: 800) {
                        ...GatsbyImageSharpFluid_withWebp
                      }
                    }
                  }
                }
                homeColumnFourContent
              }
              homeSectionFour {
                homeFourFirstContent
                homeFourMiddleContent
                homeFourImage {
                  title
                  localFile {
                    childImageSharp {
                      fluid(maxWidth: 1920) {
                        ...GatsbyImageSharpFluid_withWebp
                      }
                    }
                  }
                }
                homeFourBottomContent
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
        <HomeHero>
          <Img className={"hero-bg"} fluid={post.node.HomePageContent.homeHeroSection.homeBackgroundImage.localFile.childImageSharp.fluid} alt={post.node.HomePageContent.homeHeroSection.homeBackgroundImage.title} />
          <Img className={"hero-logo"} fluid={post.node.HomePageContent.homeHeroSection.homeVTwoLogoImage.localFile.childImageSharp.fluid} alt={post.node.HomePageContent.homeHeroSection.homeVTwoLogoImage.title} />
          <div className={"hero-sub"} dangerouslySetInnerHTML={{ __html: post.node.HomePageContent.homeHeroSection.homeHeroSubheader }} />
          {/* <MobileStatistics>
            <Slider {...settings}>
              <div dangerouslySetInnerHTML={{ __html: post.node.HomePageContent.homeStatisticsSection.homeFirstStat }} />
              <div dangerouslySetInnerHTML={{ __html: post.node.HomePageContent.homeStatisticsSection.homeSecondStat }} />
              <div dangerouslySetInnerHTML={{ __html: post.node.HomePageContent.homeStatisticsSection.homeThirdStat }} />
              <div dangerouslySetInnerHTML={{ __html: post.node.HomePageContent.homeStatisticsSection.homeFourthStat }} />
              <div dangerouslySetInnerHTML={{ __html: post.node.HomePageContent.homeStatisticsSection.homeFifthStat }} />
              <div dangerouslySetInnerHTML={{ __html: post.node.HomePageContent.homeStatisticsSection.homeSixthStat }} />
            </Slider>
          </MobileStatistics> */}
          <button onClick={() => scrollTo('#home_section_two')}><FaChevronDown size={36}/></button>
        </HomeHero>
        <SectionTwo id="home_section_two">
          <div dangerouslySetInnerHTML={{ __html: post.node.HomePageContent.homeSectionTwoContent }} />
          <Statistics>
            <div dangerouslySetInnerHTML={{ __html: post.node.HomePageContent.homeStatisticsSection.homeFourthStat }} />
            <div dangerouslySetInnerHTML={{ __html: post.node.HomePageContent.homeStatisticsSection.homeFirstStat }} />
            <div dangerouslySetInnerHTML={{ __html: post.node.HomePageContent.homeStatisticsSection.homeSecondStat }} />
            <div dangerouslySetInnerHTML={{ __html: post.node.HomePageContent.homeStatisticsSection.homeThirdStat }} /> 
            <div dangerouslySetInnerHTML={{ __html: post.node.HomePageContent.homeStatisticsSection.homeFifthStat }} />
            <div dangerouslySetInnerHTML={{ __html: post.node.HomePageContent.homeStatisticsSection.homeSixthStat }} />
          </Statistics>
        </SectionTwo>
        <SectionThree>
          <h2 dangerouslySetInnerHTML={{ __html: post.node.HomePageContent.homeSectionThree.homeSectionThreeTitle }} />
            <div class="one-fourth-col">
              <Link to="/services/support/">
                <div class="icon-block">
                    <Img className={"home-icon"} fluid={post.node.HomePageContent.homeSectionThree.homeColumnOneIcon.localFile.childImageSharp.fluid} alt={post.node.HomePageContent.homeSectionThree.homeColumnOneIcon.title} />
                </div>
                <div dangerouslySetInnerHTML={{ __html: post.node.HomePageContent.homeSectionThree.homeColumnOneContent }} />
              </Link>
            </div>
            <div class="one-fourth-col">
              <Link to="/services/run/">
                <div class="icon-block">
                  <Img className={"home-icon"} fluid={post.node.HomePageContent.homeSectionThree.homeColumnTwoIcon.localFile.childImageSharp.fluid} alt={post.node.HomePageContent.homeSectionThree.homeColumnTwoIcon.title} />
                </div>
                <div dangerouslySetInnerHTML={{ __html: post.node.HomePageContent.homeSectionThree.homeColumnTwoContent }} />
              </Link>
            </div>
            <div class="one-fourth-col">
              <Link to="/services/build/">
                <div class="icon-block">
                    <Img className={"home-icon"} fluid={post.node.HomePageContent.homeSectionThree.homeColumnThreeIcon.localFile.childImageSharp.fluid} alt={post.node.HomePageContent.homeSectionThree.homeColumnThreeIcon.title} />
                </div>
                <div dangerouslySetInnerHTML={{ __html: post.node.HomePageContent.homeSectionThree.homeColumnThreeContent }} />
              </Link>
            </div>
            <div class="one-fourth-col">
              <Link to="/services/security/">
                <div class="icon-block">
                    <Img className={"home-icon"} fluid={post.node.HomePageContent.homeSectionThree.homeColumnFourIcon.localFile.childImageSharp.fluid} alt={post.node.HomePageContent.homeSectionThree.homeColumnFourIcon.title} />
                </div>
                <div dangerouslySetInnerHTML={{ __html: post.node.HomePageContent.homeSectionThree.homeColumnFourContent }} />
              </Link>
            </div>
        </SectionThree>
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
                src={HomeVideo}
                type="video/mp4"
            />
          </video>
        </VideoSection>
        <SectionFour>
          <div dangerouslySetInnerHTML={{ __html: post.node.HomePageContent.homeSectionFour.homeFourFirstContent }} />
          <div dangerouslySetInnerHTML={{ __html: post.node.HomePageContent.homeSectionFour.homeFourMiddleContent }} />
          <Link to="/contact/contact-us/" className={"home-map"}>
            <Img className={"home-map"} fluid={post.node.HomePageContent.homeSectionFour.homeFourImage.localFile.childImageSharp.fluid} alt={post.node.HomePageContent.homeSectionFour.homeFourImage.title} />
          </Link>
          <div dangerouslySetInnerHTML={{ __html: post.node.HomePageContent.homeSectionFour.homeFourBottomContent }} />
        </SectionFour>
      </Layout>
    ))
  )

}

const HomeHero = styled.section`
  min-height: 100vh;
  width: 100%;
  margin: 0;
  padding: 0;
  position: relative;
  padding-top: 80px;
  .hero-bg {
    position: absolute !important;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .hero-logo {
    position: relative;
    max-width: 650px;
    width: 100%;
    margin: 0 auto;
    margin-top: 100px;
  }
  .hero-sub {
    position: relative;
    h1 {
      font-family: "Kessel Light";
      color: rgb(210,35,42);
      font-weight: 700;
      line-height: 1.2;
      font-size: 26px;
      text-align: center;
      margin-top: 20px;
      span.madelyn {
        font-family: "Madelyn";
        font-weight: 400;
        font-size: 60px;
        bottom: 6px;
        position: relative;
      }
    }
  }
  button {
    position: absolute;
    bottom: 10px;
    left: calc(50% - 26px);
    background-color: transparent;
    border: none;
    color: #fff;
    &:hover {
      cursor: pointer;
    }
  }
  @media(max-width: 1000px) {
    .hero-logo {
      margin-top: 100px;
    }
  }
  @media(max-width:767px) {
    .hero-logo {
      max-width: 400px;
      margin: 20px auto;
      margin-top: 20px;
    }
    .hero-sub {
      h1 {
        font-size: 20px;
        span.madelyn {
          font-size: 40px;
        }
      }
    }
  }
`

const Statistics = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  padding: 20px;
  > div {
    &:nth-child(1) {
      width: 20%;
    }
    &:nth-child(2),
    &:nth-child(3),
    &:nth-child(4) {
      width: 16%;
    }
    &:nth-child(5) {
      width: 25%;
    }
    &:nth-child(6) {
      width: 100%;
      p {
        flex-direction: row;
        span.large {
          margin-right: 20px;
          margin-bottom: 6px;
        }
      }
    }
    padding: 20px;
    p {
      font-family: "Kessel Light";
      color: rgb(210,35,42);
      font-weight: 700;
      line-height: 1.5;
      font-size: 20px;
      margin-bottom: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      span.large {
        font-size: 36px;
        margin-right: 0px;
        line-height: 2;
        text-transform: uppercase;
      }
    }
  }
  @media(max-width:1100px) {
    flex-wrap: wrap;
    > div {
      width: 50% !important;
      display: flex;
      justify-content: center;
      margin-bottom: 10px;
      &:nth-child(6) {
        width: 100%;
        p {
          flex-direction: column;
          span.large {
            margin-right: 0px;
          }
        }
      }
    }
  }
  @media(max-width:767px) {
    > div {
      width: 100% !important;
    }
  }
`

const MobileStatistics = styled.div`
  display: none;
  position: absolute;
  bottom: 100px;
  width: 100%;
  background-color: rgba(255, 255, 255, .6);
  padding: 20px;
  p {
    font-family: "Kessel Light";
    color: rgb(210,35,42);
    font-weight: 700;
    line-height: 1.2;
    font-size: 16px;
    margin-bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    span.large {
      font-size: 28px;
      margin-right: 10px;
      line-height: 1;
      text-transform: uppercase;
    }
  }
  @media(max-width:767px) {
    display: block;
  }
  @media(max-width:320px) {
    p {
      font-size: 12px;
      span.large {
        font-size: 20px;
      }
    }
  }
`

const SectionTwo = styled.section`
  max-width: 1540px;
  width: 100%;
  padding: 0 20px;
  margin: 0 auto;
  padding-top: 70px;
  h2 {
    font-family: "Kessel Light";
    color: rgb(210,35,42);
    font-weight: 400;
    line-height: 1.2;
    font-size: 38px;
    text-transform: uppercase;
    margin-top: 0;
    margin-bottom: 10px;
    text-align: center;
  }
  p {
    font-family: "Kessel Light";
    line-height: 1.5;
    font-size: 18px;
    color: #fff;
    max-width: 1050px;
    font-weight: 400;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }
  a {
    padding: 12px 35px 10px;
    display: inline-block;
    text-decoration: none;
    color: #fff;
    background-color: #c01e2e;
    text-transform: uppercase;
    letter-spacing: 1px;
    border-radius: 5px;
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

const SectionThree = styled.section`
  max-width: 1340px;
  padding: 0 20px;
  margin: 50px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  h2 {
    font-family: "Kessel Light";
    color: rgb(210,35,42);
    font-weight: 400;
    line-height: 1.2;
    font-size: 38px;
    text-transform: uppercase;
    margin-bottom: 35px;
    width: 100%;
    text-align: center;
  }
  a {
    text-decoration: none;
  }
  .one-fourth-col {
    width: 25%;
    padding: 0 35px;
    border-right: 2px solid #aaa;
    &:nth-child(2) {
      padding-left: 0;
    }
    &:nth-child(4) {
      padding-bottom: 62px;
    }
    &:last-child {
      padding-right: 0;
      border-right: none;
    }
    .icon-block {
      height: 200px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      a {
        display: flex;
        height: 100%;
        width: 100%;
        justify-content: center;
        align-items: center;
      }
      .home-icon {
        width: 100%;
        max-height: 150px;
        img {
          object-fit: contain !important;
        }
      }
    }
    h3 {
      font-family: "Balboa Medium";
      color: #828587;
      font-size: 30px;
      line-height: 1;
      letter-spacing: 1px;
      text-transform: uppercase;
      text-align: center;
      margin-bottom: 0;
    }
    p {
      font-family: "Kessel Light";
      line-height: 1.5;
      font-size: 14px;
      color: #fff;
      max-width: 650px;
      font-weight: 400;
      margin-bottom: 0;
      text-align: center;
    }
  }
  @media(max-width:1160px) {
    max-width: 800px;
    .one-fourth-col {
      width: 50%;
      padding: 0 35px !important;
      border-right: none;
      margin-bottom: 35px;
      .icon-block {
        height: 100px;
        .home-icon {
          max-height: 100px;
          max-width: 200px;
        }
      }
    }
  }
  @media(max-width:767px) {
    max-width: 700px;
    width: 100%;
    .one-fourth-col {
      width: 100%;
      padding: 0 20px !important;
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
    max-height: 80vh;
    overflow: hidden;
    margin: 0px auto;
    margin-top: 100px;
    display: flex;
    align-items: center;
  `

const SectionFour = styled.section`
  max-width: 1140px;
  padding: 0 20px;
  margin: 100px auto;
  .video-section {
    position: relative;
    overflow: hidden;
    width: 100%;
    padding-top: 56.25%;
    iframe {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      width: 100%;
      height: 100%;
    }
  }
  .home-map {
    max-width: 800px;
    margin: 0 auto;
  }
  h2 {
    font-family: "Kessel Light";
    color: rgb(210,35,42);
    font-weight: 400;
    line-height: 1.2;
    font-size: 38px;
    text-transform: uppercase;
    margin-bottom: 35px;
    width: 100%;
  }
  p {
    font-family: "Kessel Light";
    line-height: 1.5;
    font-size: 18px;
    color: #fff;
    font-weight: 400;
  }
  a.linkedin-button {
    padding: 12px 35px 10px;
    display: inline-block;
    text-decoration: none;
    color: #fff;
    background-color: #c01e2e;
    text-transform: uppercase;
    letter-spacing: 1px;
    border-radius: 5px;
  }
  div {
    &:first-child {
      p {
        max-width: 650px;
      }
    }
    &:nth-child(2) {
      p {
        text-align: center;
      }
    }
    &:nth-child(3) {
      max-width: 800px;
      margin: 0 auto;
    }
    &:nth-child(4) {
      p {
        text-align: center;
        margin-top: 50px;
      }
    }
  }
  @media(max-width:1150px) {
    h2 {
      text-align: center;
    }
    div:first-child p {
      text-align: center;
      margin-left: auto;
      margin-right: auto;
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

export default IndexPage