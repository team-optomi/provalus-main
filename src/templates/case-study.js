import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import styled from 'styled-components'
import parse from "html-react-parser"

import Layout from "../components/layout-v2"
import SEO from "../components/seo"

const CaseStudyTemplate = ({ data: { caseStudy } }) => {

  return (
    <Layout>
      <SEO 
      title={caseStudy.seo.title} 
      description={caseStudy.seo.metaDesc} 
      metaImage={caseStudy.seo.opengraphImage.localFile.childImageSharp.fluid}
      />
      <MainArticle
        className="case-study"
        itemScope
        itemType="http://schema.org/Article"
      >
        <MainHeader>
          <Img fluid={caseStudy.featuredImage.node.localFile.childImageSharp.fluid} className={caseStudy.featuredImage.node.title} />
          <h1 itemProp="headline"><span class="bold">Client: </span>{parse(caseStudy.title)}</h1>
        </MainHeader>
        <MainSection itemProp="articleBody">
          <div class="section-one">
            <div class="flex-row">
              <div class="overview" dangerouslySetInnerHTML={{ __html: caseStudy.CaseStudy.caseStudySectionOne.caseStudyOverview }} />
              <div class="services" dangerouslySetInnerHTML={{ __html: caseStudy.CaseStudy.caseStudySectionOne.caseStudyServicesDelivered }} />
            </div>
          </div>
          <div class="section-two">
            <div class="section-two-copy" dangerouslySetInnerHTML={{ __html: caseStudy.CaseStudy.caseStudySectionTwo }} />
          </div>
          <div class="section-three">
            <div class="section-three-copy" dangerouslySetInnerHTML={{ __html: caseStudy.CaseStudy.caseStudySectionThree }} />
          </div>
        </MainSection>

      </MainArticle>

    </Layout>
  )
}

const MainArticle = styled.article`
  
`

const MainHeader = styled.header`
position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  .gatsby-image-wrapper {
    position: absolute !important;
    height: 100vh;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 1;
  }
  &:before {
    content: '';
    position: absolute;
    height: 100vh;
    width: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0, .7);
    z-index: 2;
  }
  h1 {
    position: relative;
    font-family: "Kessel Light";
    letter-spacing: 2px;
    max-width: 840px;
    width: 100%;
    padding: 0 20px;
    text-align: center;
    color: #fff;
    z-index: 3;
  }
`

const MainSection = styled.section`
  .section-one {
    background-color: rgba(212,219,221);
    padding: 100px 20px;
    .flex-row {
      max-width: 1200px;
      width: 100%;
      margin: 0 auto;
      display: flex;
      .overview {
        width: 70%;
        padding-right: 20px;
        h2 {
          font-family: Madelyn;
          font-weight: 400;
          font-size: 40px;
          margin-top: 0;
          margin-bottom: 0;
          text-transform: capitalize;
        }
        h3 {
          font-family: "Balboa Medium";
          letter-spacing: 1px;
          font-size: 20px;
          text-transform: capitalize;
          font-size: 14px;
          margin-top: 10px;
          margin-bottom: 5px;
        }
        p {
          font-family: "Kessel Light";
          line-height: 1.5;
          letter-spacing: 1px;
          font-size: 18px;
          color: rgba(9,9,28);
          font-weight: 400;
        }
      }
      .services {
        width: 30%;
        h2 {
          font-family: Madelyn;
          font-weight: 400;
          font-size: 40px;
          margin-top: 0;
          margin-bottom: 0;
        }
        h3 {
          font-family: "Balboa Medium";
          letter-spacing: 1px;
          font-size: 20px;
          text-transform: capitalize;
          font-size: 18px;
          margin-top: 0px;
          margin-bottom: 0px;
          margin-left: 10px;
        }
        > div {
          display: flex;
          align-items: center;
          margin-bottom: 10px;
          .gatsby-image-wrapper {
            img {
              object-fit: contain !important;
            }
          }
        }
      }
    }
  }
  .section-two {
    background-color: rgb(11, 40, 58);
    padding: 100px 20px;
    > div {
      max-width: 800px;
      width: 100%;
      margin: 0 auto;
      h2 {
        font-family: Madelyn;
        font-weight: 400;
        font-size: 60px;
        margin-top: 0;
        margin-bottom: 0;
        color: rgb(208,213,217);
        text-transform: capitalize;
      }
      h3 {
        font-family: "Balboa Medium";
        color: rgb(208, 213, 217);
        letter-spacing: 1px;
        font-size: 20px;
        text-transform: capitalize;
        font-size: 18px;
        margin-top: 10px;
        margin-bottom: 10px;
      }
      p, ul {
        font-family: "Kessel Light";
        line-height: 1.5;
        letter-spacing: 1px;
        font-size: 18px;
        color: rgb(208, 213, 217);
        font-weight: 400;
      }
      ul {
        margin-left: 20px;
      }
      .gatsby-image-wrapper {
        margin: 0 auto;
        display: block;
      }
    }
  }
  .section-three {
    background-color: rgba(212,219,221);
    padding: 100px 20px;
    > div {
      max-width: 800px;
      width: 100%;
      margin: 0 auto;
      h2 {
        font-family: "Balboa Medium";
        letter-spacing: 1px;
        text-transform: capitalize;
        font-size: 24px;
        margin-top: 10px;
        margin-bottom: 5px;
      }
      h3 {
        font-family: "Balboa Medium";
        letter-spacing: 1px;
        text-transform: capitalize;
        font-size: 14px;
        margin-top: 10px;
        margin-bottom: 5px;
      }
      p, ul {
        font-family: "Kessel Light";
        line-height: 1.5;
        letter-spacing: 1px;
        font-size: 18px;
        color: rgba(9,9,28);
        font-weight: 400;
      }
      ul {
        margin-left: 20px;
      }
      .gatsby-image-wrapper {
        margin: 0 auto;
        display: block;
        img {
          object-fit: contain !important;
        }
      }
      .back-button {
        a {
          display: block;
          font-family: "Kessel Light";
          width: 180px;
          text-align: center;
          margin: 20px auto;
          background-color: #0b283a;
          color: #fff;
          text-decoration: none;
          padding: 10px 0;
          letter-spacing: 1px;
        }
      }
    }
  }
  @media(max-width:767px) {
    .section-one {
      .flex-row {
        flex-wrap: wrap;
        .overview,
        .services {
          width: 100%;
          padding-right: 0;
        }
      }
    }
  }
`

export default CaseStudyTemplate

export const pageQuery = graphql`
  query CaseStudyById(
    # these variables are passed in via createPage.pageContext in gatsby-node.js
    $id: String!
  ) {
    # selecting the current case study by id
    caseStudy: wpCaseStudy(id: { eq: $id }) {
      id
      excerpt
      content
      title
      date(formatString: "MMMM DD, YYYY")
      featuredImage {
        node {
          title
          altText
          localFile {
            childImageSharp {
              fluid(maxWidth: 1800, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
      categories {
        nodes {
          slug
          databaseId
        }
      }
      CaseStudy {
        caseStudySectionOne {
          caseStudyOverview
          caseStudyServicesDelivered
        }
        caseStudySectionTwo
        caseStudySectionThree
      }
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
    }
    caseStudyIcon: file(relativePath: { eq: "case-study-icon.png" }) {
        childImageSharp {
            fixed(width: 192, height: 128) {
                ...GatsbyImageSharpFixed
            }
        }
    }
  }
`