import React from "react"
import { useStaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'
import Img from "gatsby-image"

import Layout from "../components/layout-v2"
import SEO from "../components/seo"


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
        </HomeHero>
        <SectionTwo>
          <div dangerouslySetInnerHTML={{ __html: post.node.HomePageContent.homeSectionTwoContent }} />
        </SectionTwo>
        <SectionThree>
          <h2 dangerouslySetInnerHTML={{ __html: post.node.HomePageContent.homeSectionThree.homeSectionThreeTitle }} />
            <div class="one-fourth-col">
              <Img className={"home-icon"} fluid={post.node.HomePageContent.homeSectionThree.homeColumnOneIcon.localFile.childImageSharp.fluid} alt={post.node.HomePageContent.homeSectionThree.homeColumnOneIcon.title} />
              <div dangerouslySetInnerHTML={{ __html: post.node.HomePageContent.homeSectionThree.homeColumnOneContent }} />
            </div>
            <div class="one-fourth-col">
              <Img className={"home-icon"} fluid={post.node.HomePageContent.homeSectionThree.homeColumnTwoIcon.localFile.childImageSharp.fluid} alt={post.node.HomePageContent.homeSectionThree.homeColumnTwoIcon.title} />
              <div dangerouslySetInnerHTML={{ __html: post.node.HomePageContent.homeSectionThree.homeColumnTwoContent }} />
            </div>
            <div class="one-fourth-col">
              <Img className={"home-icon"} fluid={post.node.HomePageContent.homeSectionThree.homeColumnThreeIcon.localFile.childImageSharp.fluid} alt={post.node.HomePageContent.homeSectionThree.homeColumnThreeIcon.title} />
              <div dangerouslySetInnerHTML={{ __html: post.node.HomePageContent.homeSectionThree.homeColumnThreeContent }} />
            </div>
            <div class="one-fourth-col">
              <Img className={"home-icon"} fluid={post.node.HomePageContent.homeSectionThree.homeColumnFourIcon.localFile.childImageSharp.fluid} alt={post.node.HomePageContent.homeSectionThree.homeColumnFourIcon.title} />
              <div dangerouslySetInnerHTML={{ __html: post.node.HomePageContent.homeSectionThree.homeColumnFourContent }} />
            </div>
        </SectionThree>
        <SectionFour>
          <div dangerouslySetInnerHTML={{ __html: post.node.HomePageContent.homeSectionFour.homeFourFirstContent }} />
          <div dangerouslySetInnerHTML={{ __html: post.node.HomePageContent.homeSectionFour.homeFourMiddleContent }} />
          <Img className={"home-map"} fluid={post.node.HomePageContent.homeSectionFour.homeFourImage.localFile.childImageSharp.fluid} alt={post.node.HomePageContent.homeSectionFour.homeFourImage.title} />
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
  padding-top: 120px;
  .hero-bg {
    position: absolute !important;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .hero-logo {
    position: relative;
    max-width: 800px;
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
      font-size: 32px;
      text-align: center;
      span.madelyn {
        font-family: "Madelyn";
        font-weight: 400;
        font-size: 60px;
        bottom: 6px;
        position: relative;
      }
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
      font-size: 18px;
      margin-bottom: 0;
      display: flex;
      align-items: flex-end;
      span.large {
        font-size: 36px;
        margin-right: 10px;
        line-height: 1;
        text-transform: uppercase;
      }
    }
  }
`

const SectionTwo = styled.section``

const SectionThree = styled.section``

const SectionFour = styled.section``

export default IndexPage