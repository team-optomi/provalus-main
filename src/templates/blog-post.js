import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import styled from 'styled-components'
import parse from "html-react-parser"

import Layout from "../components/layout-v2"
import SEO from "../components/seo"

const BlogPostTemplate = ({ data: { previous, next, post } }) => {
  const featuredImage = {
    fluid: post.BlogPostSingle?.blogSingleHeaderImage?.localFile?.childImageSharp?.fluid || post.featuredImage?.node?.localFile?.childImageSharp?.fluid,
    alt:  post.BlogPostSingle?.blogSingleHeaderImage?.title || post.featuredImage?.node?.title || ``,
  }

  return (
    <Layout>
      <SEO title={post.title} description={post.excerpt} />

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
            </header>
            {!!post.content && (
            <section itemProp="articleBody">{parse(post.content)}</section>
            )}
          </div>

        </MainArticle>

        {/* <nav className="blog-post-nav">
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              {previous && (
                <Link to={previous.uri} rel="prev">
                  ← {parse(previous.title)}
                </Link>
              )}
            </li>

            <li>
              {next && (
                <Link to={next.uri} rel="next">
                  {parse(next.title)} →
                </Link>
              )}
            </li>
          </ul>
        </nav> */}
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
  background-color: #000;
  .gatsby-image-wrapper {
    margin-bottom: 0;
  }
  .entry-content {
    padding: 60px;
    h1 {
      font-family: "Kessel Light";
      font-size: 25px;
      color: #fffffd;
      letter-spacing: 1px;
      line-height: 30px;
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
  @media(max-width:767px) {
    .entry-content {
      padding: 20px;
    }
  }
`

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostById(
    # these variables are passed in via createPage.pageContext in gatsby-node.js
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    # selecting the current post by id
    post: wpPost(id: { eq: $id }) {
      id
      excerpt
      content
      title
      date(formatString: "MMMM DD, YYYY")

      featuredImage {
        node {
          altText
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
      BlogPostSingle {
        blogSingleHeaderImage {
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
    }

    # this gets us the previous post by id (if it exists)
    previous: wpPost(id: { eq: $previousPostId }) {
      uri
      title
    }

    # this gets us the next post by id (if it exists)
    next: wpPost(id: { eq: $nextPostId }) {
      uri
      title
    }
  }
`
