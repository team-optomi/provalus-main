import React from "react"
import { useStaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'
import Img from "gatsby-image"

import Layout from "../components/layout-v2"
import SEO from "../components/seo"

import scrollTo from 'gatsby-plugin-smoothscroll';
import { FaChevronDown } from 'react-icons/fa'

const IndexPage = () => {

  const data = useStaticQuery(graphql`
    query {
      allWpPage(filter: {databaseId: {eq: 86}}) {
        edges {
          node {
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
        <SEO title="Home" />
        <HomeHero>
          <Img className={"hero-bg"} fluid={post.node.HomePageContent.homeHeroSection.homeBackgroundImage.localFile.childImageSharp.fluid} alt={post.node.HomePageContent.homeHeroSection.homeBackgroundImage.title} />
          <Img className={"hero-logo"} fluid={post.node.HomePageContent.homeHeroSection.homeVTwoLogoImage.localFile.childImageSharp.fluid} alt={post.node.HomePageContent.homeHeroSection.homeVTwoLogoImage.title} />
          <div className={"hero-sub"} dangerouslySetInnerHTML={{ __html: post.node.HomePageContent.homeHeroSection.homeHeroSubheader }} />
          <Statistics>
            <div dangerouslySetInnerHTML={{ __html: post.node.HomePageContent.homeStatisticsSection.homeFirstStat }} />
            <div dangerouslySetInnerHTML={{ __html: post.node.HomePageContent.homeStatisticsSection.homeSecondStat }} />
            <div dangerouslySetInnerHTML={{ __html: post.node.HomePageContent.homeStatisticsSection.homeThirdStat }} />
            <div dangerouslySetInnerHTML={{ __html: post.node.HomePageContent.homeStatisticsSection.homeFourthStat }} />
            <div dangerouslySetInnerHTML={{ __html: post.node.HomePageContent.homeStatisticsSection.homeFifthStat }} />
            <div dangerouslySetInnerHTML={{ __html: post.node.HomePageContent.homeStatisticsSection.homeSixthStat }} />
          </Statistics>
          <button onClick={() => scrollTo('#home_section_two')}><FaChevronDown size={36}/></button>
        </HomeHero>
        <SectionTwo id="home_section_two">
          <div dangerouslySetInnerHTML={{ __html: post.node.HomePageContent.homeSectionTwoContent }} />
        </SectionTwo>
        <SectionThree>
          <h2 dangerouslySetInnerHTML={{ __html: post.node.HomePageContent.homeSectionThree.homeSectionThreeTitle }} />
            <div class="one-fourth-col">
              <div class="icon-block">
                <Img className={"home-icon"} fluid={post.node.HomePageContent.homeSectionThree.homeColumnOneIcon.localFile.childImageSharp.fluid} alt={post.node.HomePageContent.homeSectionThree.homeColumnOneIcon.title} />
              </div>
              <div dangerouslySetInnerHTML={{ __html: post.node.HomePageContent.homeSectionThree.homeColumnOneContent }} />
            </div>
            <div class="one-fourth-col">
              <div class="icon-block">
              <Img className={"home-icon"} fluid={post.node.HomePageContent.homeSectionThree.homeColumnTwoIcon.localFile.childImageSharp.fluid} alt={post.node.HomePageContent.homeSectionThree.homeColumnTwoIcon.title} />
              </div>
              <div dangerouslySetInnerHTML={{ __html: post.node.HomePageContent.homeSectionThree.homeColumnTwoContent }} />
            </div>
            <div class="one-fourth-col">
              <div class="icon-block">
              <Img className={"home-icon"} fluid={post.node.HomePageContent.homeSectionThree.homeColumnThreeIcon.localFile.childImageSharp.fluid} alt={post.node.HomePageContent.homeSectionThree.homeColumnThreeIcon.title} />
              </div>
              <div dangerouslySetInnerHTML={{ __html: post.node.HomePageContent.homeSectionThree.homeColumnThreeContent }} />
            </div>
            <div class="one-fourth-col">
              <div class="icon-block">
              <Img className={"home-icon"} fluid={post.node.HomePageContent.homeSectionThree.homeColumnFourIcon.localFile.childImageSharp.fluid} alt={post.node.HomePageContent.homeSectionThree.homeColumnFourIcon.title} />
              </div>
              <div dangerouslySetInnerHTML={{ __html: post.node.HomePageContent.homeSectionThree.homeColumnFourContent }} />
            </div>
        </SectionThree>
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
    max-width: 600px;
    width: 100%;
    margin: 0 auto;
  }
  .hero-sub {
    position: relative;
    h1 {
      font-family: "Kessel Light";
      color: rgb(210,35,42);
      font-weight: 700;
      line-height: 1.2;
      font-size: 28px;
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
`

const Statistics = styled.div`
  position: absolute;
  bottom: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, .6);
  padding: 20px;
  > div {
    margin: 0 20px;
    p {
      font-family: "Kessel Light";
      color: rgb(210,35,42);
      font-weight: 700;
      line-height: 1.2;
      font-size: 16px;
      margin-bottom: 0;
      display: flex;
      align-items: center;
      span.large {
        font-size: 28px;
        margin-right: 10px;
        line-height: 1;
        text-transform: uppercase;
      }
    }
  }
`

const SectionTwo = styled.section`
  max-width: 1140px;
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
  }
  p {
    font-family: "Kessel Light";
    line-height: 1.5;
    font-size: 18px;
    color: #fff;
    max-width: 550px;
    font-weight: 400;
  }
`

const SectionThree = styled.section`
  max-width: 1140px;
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
  .one-fourth-col {
    width: 25%;
    padding: 0 35px;
    border-right: 2px solid #aaa;
    &:nth-child(2) {
      padding-left: 0;
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
`

const SectionFour = styled.section`
  max-width: 1140px;
  padding: 0 20px;
  margin: 100px auto;
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
`

export default IndexPage