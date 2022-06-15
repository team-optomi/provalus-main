import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import styled from 'styled-components'
import parse from "html-react-parser"

import Layout from "../components/layout-v2"
import SEO from "../components/seo"

const CareerBlogPost = ({ data: { post } }) => {

    const featuredImage = {
        fluid: post.CareerPostSingle?.careerSingleHeaderImage?.localFile?.childImageSharp?.fluid,
        alt: post.CareerPostSingle?.careerSingleHeaderImage?.alt || ``,
    }

    return (
        <Layout>
          <SEO 
            title={post.seo.title} 
            description={post.seo.metaDesc}
            metaImage={post.seo.opengraphImage.localFile.childImageSharp.fluid}
            />
          <MainBackground>
            <MainArticle
              className="blog-post"
              itemScope
              itemType="http://schema.org/Article"
            >
                {/* if we have a featured image for this post let's display it */}
                {featuredImage?.fluid && (
                  <Image
                    fluid={featuredImage.fluid}
                    alt={featuredImage.alt}
                  />
                )}
    
              <div class="entry-content">
                <header>
                  <h1 itemProp="headline">{parse(post.title)}</h1>
                  <p class="date">{post.date}</p>
                </header>
                {!!post.content && (
                <section itemProp="articleBody">{parse(post.content)}</section>
                )}
              </div>
    
            </MainArticle>
    
          </MainBackground>
    
        </Layout>
      )

}


const MainBackground = styled.div`
  width: 100%;
  background-color: #000;
  padding: 100px 20px;
`

const MainArticle = styled.article`
  max-width: 1080px;
  width: 100%;
  padding: 0px;
  margin: 0 auto;
  .gatsby-image-wrapper {
    margin-bottom: 0;
    max-height: 300px;
  }
  .entry-content {
    padding: 30px 0px 60px;
    h1 {
      font-family: "Kessel Light";
      font-size: 25px;
      color: #fffffd;
      letter-spacing: 1px;
      line-height: 30px;
      margin-top: 0px;
      margin-bottom: 20px;
    }
    p.date {
        font-family: Madelyn;
        font-size: 34px;
        font-weight: 100;
        line-height: 1;
        color: rgb(210,35,42);
        margin-bottom: 20px;
    }
    p {
      font-family: "Kessel Light";
      font-size: 14px;
      color: #f1f2f2;
      line-height: 1.6;
      margin-bottom: 20px;
      a {
        color: #d2232a;
        text-decoration: none;
      }
    }
  }
  @media(max-width:767px) {
    .entry-content {
      padding: 20px;
    }
  }
`

export default CareerBlogPost

export const pageQuery = graphql`
  query CareerPostById(
    # these variables are passed in via createPage.pageContext in gatsby-node.js
    $id: String!
  ) {
    # selecting the current post by id
    post: wpCareerPost(id: { eq: $id }) {
      id
      content
      title
      date(formatString: "MMMM DD, YYYY")
      CareerPostSingle {
        careerSingleHeaderImage {
          title
          localFile {
            childImageSharp {
              fluid(maxWidth: 1000, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
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
  }
`