import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from "gatsby-image"

import Layout from "../../components/layout-v2"
import SEO from "../../components/seo"
import BuildCaseStudySlider from "../../components/build-case-study-slider"

const RunPage = () => {

    const data = useStaticQuery(graphql`
      query {
        allWpPage(filter: {databaseId: {eq: 1308}}) {
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
              BuildPageContent {
                buildSectionOne
                buildSectionThree
                buildSectionTwo
                buildTopIcon {
                    title
                    localFile {
                      childImageSharp {
                        fluid(maxWidth: 800) {
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
            <HeaderSection>
                <h2>Service Offerings</h2>
                <hr/>
                <div>
                  <Img fluid={post.node.BuildPageContent.buildTopIcon.localFile.childImageSharp.fluid} alt={post.node.BuildPageContent.buildTopIcon.title} />
                  <h1>Build</h1>
                </div>
            </HeaderSection>
          <SectionOne>
            <div dangerouslySetInnerHTML={{ __html: post.node.BuildPageContent.buildSectionOne }}/>
          </SectionOne>
          <SectionTwo>
            <div dangerouslySetInnerHTML={{ __html: post.node.BuildPageContent.buildSectionTwo }}/>
          </SectionTwo>
          <SectionThree>
            <BuildCaseStudySlider/>
          </SectionThree>
        </Layout>
      ))
    )
  
  }

const HeaderSection = styled.header`
  max-width: 1140px;
  padding: 0 20px;
  padding-top: 100px;
  margin: 0 auto;
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
  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 40px;
    .gatsby-image-wrapper {
      max-width: 200px;
      width: 100%;
    }
    h1 {
      font-family: "Balboa Medium";
      color: #828587;
      font-size: 50px;
      line-height: 1;
      letter-spacing: 1px;
      text-transform: uppercase;
      text-align: center;
      margin-top: 0;
      margin-left: 20px;
      margin-bottom: 0;
    }
  }
  @media(max-width: 767px) {
    > div {
      h1 {
        font-size: 36px;
      }
      .gatsby-image-wrapper {
        max-width: 140px;
      }
    }
  }
`
  
const SectionOne = styled.section`
  max-width: 1140px;
  padding: 0 20px;
  margin: 40px auto;
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
    max-width: 650px;
    font-weight: 400;
    margin-bottom: 0;
  }
  .row-2 {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    padding-top: 60px;
    > div {
      &:first-child {
        width: 55%;
      }
      &:last-child {
        width: 45%;
        padding-left: 30px;
      }
    }
  }
  @media(max-width:767px) {
    .row-2 {
      flex-wrap: wrap;
      > div {
        &:first-child {
          width: 100%;
          order: 2;
        }
        &:last-child {
          width: 100%;
          order: 1;
          padding-left: 0;
          margin-bottom: 30px;
        }
      }
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

const SectionTwo = styled.section`
  padding: 50px 20px;
  background-color: #0b283a;
  > div {
    max-width: 1140px;
    padding: 0 20px;
    margin: 0px auto;
    > div {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin-bottom: 20px;
      p {
        font-family: "Kessel Light";
        line-height: 1.5;
        font-size: 18px;
        color: #fff;
        font-weight: 400;
        margin-bottom: 0;
      }
      .gatsby-image-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        max-width: 30px !important;
        max-height: 30px;
        margin-right: 20px;
        img {
          object-fit: contain !important;
          max-width: 30px;
          max-height: 30px;
        }
      }
    }
  }
  @media(max-width:767px) {
    > div {
      > div {
        align-items: flex-start;
      }
    }
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
  max-width: 1140px;
  padding: 0 20px;
  margin: 80px auto;
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
  
export default RunPage