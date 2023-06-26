import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from "gatsby-image"

import Layout from "../../components/layout-v2"
import SEO from "../../components/seo"
import SupportCaseStudySlider from "../../components/support-case-study-slider"

const SupportPage = () => {

    const data = useStaticQuery(graphql`
      query {
        allWpPage(filter: {databaseId: {eq: 1327}}) {
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
              SupportPageContent {
                supportSectionOne
                supportOverviewParagraph
                supportOverviewList
                supportMainImage {
                  title
                    localFile {
                      childImageSharp {
                        fluid(maxWidth: 800) {
                          ...GatsbyImageSharpFluid_withWebp
                        }
                      }
                    }
                }
                supportSectionThree
                supportSectionTwo
                supportSectionTwoBackgroundImage {
                  title
                    localFile {
                      childImageSharp {
                        fluid(maxWidth: 800) {
                          ...GatsbyImageSharpFluid_withWebp
                        }
                      }
                    }
                }
                supportTopIcon {
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
              <h1>{post.node.title}</h1>
              <div class="service-menu" dangerouslySetInnerHTML={{ __html: post.node.SupportPageContent.supportOverviewList }} />
          </HeaderSection>
          <SectionOne>
            <div class="flex-row">
              <div class="left-col">
                <div class="overview-paragraph" dangerouslySetInnerHTML={{ __html: post.node.SupportPageContent.supportOverviewParagraph }}/>
                <Img fluid={post.node.SupportPageContent.supportTopIcon.localFile.childImageSharp.fluid} alt={post.node.SupportPageContent.supportTopIcon.title} />
              </div>
              <div class="right-col">
                <Img fluid={post.node.SupportPageContent.supportMainImage.localFile.childImageSharp.fluid} alt={post.node.SupportPageContent.supportMainImage.title} />
                <div class="overview-list">
                  <h2>Overview of Services</h2>
                  <div dangerouslySetInnerHTML={{ __html: post.node.SupportPageContent.supportOverviewList }} />
                </div>
              </div>
            </div>
          </SectionOne>
          <SectionTwo>
            <div class="flex-row">
              <div class="left-col" dangerouslySetInnerHTML={{ __html: post.node.SupportPageContent.supportSectionTwo }}/>
              <div class="right-col">
                <Img fluid={post.node.SupportPageContent.supportSectionTwoBackgroundImage.localFile.childImageSharp.fluid} alt={post.node.SupportPageContent.supportSectionTwoBackgroundImage.title} />
              </div>
            </div>
          </SectionTwo>
          <SectionThree>
            <div class="section-three-main" dangerouslySetInnerHTML={{ __html: post.node.SupportPageContent.supportSectionThree }}/>
            <SupportCaseStudySlider />
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
    font-size: 28px;
    text-transform: uppercase;
    margin-top: 0;
    margin-bottom: 10px;
    border-top: 2px solid #828587;
    padding-top: 40px;
    padding-left: 100px;
  }

  h1 {
    font-family: "Balboa Medium";
    color: #828587;
    font-size: 50px;
    line-height: 1;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 100px;
    padding-bottom: 30px;
  }

  ul {
    border-top: 2px solid #828587;
    border-bottom: 2px solid #828587;
    padding: 15px 10px;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;

    li {
      color: #828587;
      font-family: "Kessel Light";
      line-height: 1.5;
      font-size: 16px;
      margin-bottom: 0;

    }
  }
  @media(max-width: 767px) {
    h1 {
      padding-left: 0;
      text-align: center;
    }
    h2 {
      padding-left: 0;
      text-align: center;
    }
    ul {
      flex-wrap: wrap;
      justify-content: center;

      li {
        margin: 5px 20px;
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
    font-weight: 400;
    margin-bottom: 0;
  }
  .flex-row {
    display: flex;
    gap: 40px;

    .left-col {
      width: calc(50% - 20px);

      .gatsby-image-wrapper {
        max-width: 450px ;
        width: 100% !important;
        margin: 0 auto !important;
      }

     
    }

    .right-col {
      width: calc(50% - 20px);

      h2 {
        font-family: "Balboa Medium";
        color: #828587;
        font-size: 50px;
        line-height: 1;
        letter-spacing: 1px;
        text-transform: uppercase;
        margin-top: 30px;
        margin-bottom: 0;
      }

      ul {
        list-style: none;

        li {
          font-family: "Kessel Light";
          line-height: 1.5;
          font-size: 18px;
          color: #828587;
          font-weight: 400;
          margin-bottom: 0;
        }
      }
    }
    @media(max-width: 767px) {
      flex-wrap: wrap;
      gap: 0;
      .left-col {
        width: 100%;
      }
      .right-col {
        width: 100%;
        text-align: center;
      }
    }
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
  .flex-row {
    max-width: 1140px;
    padding: 0 20px;
    margin: 0px auto;
    display: flex;
  }
  .left-col {
    width: 65%;
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
  .right-col {
    width: 35%;
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

    .flex-row {
      flex-wrap: wrap;
      .left-col {
        width: 100%;
      }
      .right-col {
        width: 100%;
      }
    }
  }
`

const SectionThree = styled.section`
  max-width: 1140px;
  padding: 0 20px;
  margin: 80px auto;
  margin-top: 20px;
  .section-three-main {
    text-align: center;
    p {
      font-family: "Kessel Light";
      color: rgb(210,35,42);
      font-weight: 400;
      line-height: 1.2;
      span.fancy {
        font-family: "Madelyn";
        font-weight: 400;
        font-size: 40px;
        bottom: 0px;
        position: relative;
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
  
export default SupportPage