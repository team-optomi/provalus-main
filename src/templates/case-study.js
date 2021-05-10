import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled from 'styled-components'
import parse from "html-react-parser"

import Layout from "../components/layout-v2"
import SEO from "../components/seo"

const CaseStudyTemplate = ({ data: { caseStudy, caseStudyIcon } }) => {

  return (
    <Layout>
      <SEO title={caseStudy.title} description={caseStudy.excerpt} />

      <MainBackground>
        <MainArticle
          className="case-study"
          itemScope
          itemType="http://schema.org/Article"
        >
        <Img fluid={caseStudyIcon.childImageSharp.fixed} className={"case-study-icon"} />
          <div class="entry-content">
            <header>
              <h1 itemProp="headline"><span class="bold">Client:</span>{parse(caseStudy.title)}</h1>
            </header>
            {!!caseStudy.content && (
            <section itemProp="articleBody">{parse(caseStudy.content)}</section>
            )}
          </div>

        </MainArticle>

      </MainBackground>

    </Layout>
  )
}

const MainBackground = styled.div`
  width: 100%;
  background-color: #353431;
  padding: 100px 20px;
`

const MainArticle = styled.article`
  max-width: 1080px;
  width: 100%;
  padding: 0px;
  margin: 0 auto;
  background-color: #eee;
  .case-study-icon {
    width: 192px;
    height: 128px;
    margin-left: auto;
    margin-bottom: 0;
  }
  .entry-content {
    padding: 60px;
    padding-top: 10px;
    header {
        background-color: #bd1e2b;
        box-shadow: 5px 5px 5px rgba(0,0,0,.5);
        padding: 10px 25px;
    }
    h1 {
      font-family: "Kessel Light";
      font-size: 22px;
      color: #fffffd;
      letter-spacing: 1px;
      line-height: 1;
      margin-top: 0;
      margin-bottom: 0;
      span.bold {
        font-family: "Balboa Medium";
        text-transform: uppercase;
        margin-right: 30px;
        font-size: 30px;
        position: relative;
        top: 2px;
      }
    }
    .top-row {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        .top-left {
            padding: 25px;
            background-color: #a6a3a6;
            box-shadow: 5px 5px 5px rgba(0,0,0,.5);
            width: 25%;
            h2 {
                font-family: "Balboa Medium";
                text-transform: uppercase;
                margin-top: 0;
                margin-bottom: 0;
            }
        }
        .top-right {
            width: 75%;
            padding: 20px;
            text-align: center;
            h3 {
                font-family: "Kessel Light";
                font-size: 22px;
                margin-top: 0;
                margin-bottom: 10px;
                text-align: center;
            }
            img {
              object-fit: contain !important;
            }
            &.flex {
              display: flex;
              justify-content: space-between;
              > div {
                width: calc(33.33% - 10px);
              }
            }
        }
    }
    .case-study-main {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        .main-left {
            width: calc(50% - 20px);
        }
        .main-right {
            width: calc(50% - 20px);
        }
        h2 {
            margin-top: 30px;
            &.madelyn {
                font-family: "Madelyn";
                font-weight: 400;
                font-size: 60px;
                color: rgb(210,35,42);
                margin-top: 0;
                margin-bottom: 0;
            }
            &.balboa {
                font-family: "Balboa Medium";
                text-transform: uppercase;
                margin-top: 0;
                margin-bottom: 0;
                color: rgb(210,35,42);
            }
        }
        h3 {
            font-family: "Kessel Light";
            font-size: 22px;
            font-weight: 400;
            margin-top: 0;
            margin-bottom: 0px;
            text-transform: uppercase;
            &.underlined {
                text-decoration: underline;
            }
        }
        p, ul {
            font-family: "Kessel Light";
            font-size: 18px;
            line-height: 1.3;
            margin-bottom: 20px;
        }
        ul {
            margin-left: 20px;
        }
    }
    .case-study-full {
        text-align: center;
    }
  }
  iframe {
    max-width: 1000px;
    width: 100%;
    height: 500px;
  }
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
          altText
          localFile {
            childImageSharp {
              fluid(maxWidth: 1000, quality: 100) {
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