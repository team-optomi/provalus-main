import React from "react"
import { Link, graphql } from "gatsby"
import parse from "html-react-parser"
import styled from 'styled-components'
import Img from "gatsby-image"

import Layout from "../components/layout-v2"
import SEO from "../components/seo"

import { FaChevronLeft } from 'react-icons/fa'
import { FaChevronRight } from 'react-icons/fa'

const NewsIndex = ({
  data,
  pageContext: { nextPagePath, previousPagePath },
}) => {
  const posts = data.allWpNewsSingle.nodes

  if (!posts.length) {
    return (
      <Layout isHomePage>
        <SEO title="All posts" />
        <p>
          No blog posts found. Add posts to your WordPress site and they'll
          appear here!
        </p>
      </Layout>
    )
  }

  return (
    <Layout isHomePage>
      <SEO title="All posts" />

      <MainBackground>
        <MainLoop>
          {posts.map(post => {
            const title = post.title

            return (
              <li key={post.uri}>
                <article
                  className="post-list-item"
                  itemScope
                  itemType="http://schema.org/Article"
                >
                  <Img fluid={post.featuredImage.node.localFile.childImageSharp.fluid} alt={post.title} />
                  <div class="entry-wrap">
                    <header>
                      <h2>
                        <Link to={post.uri} itemProp="url">
                          <span itemProp="headline">{parse(title)}</span>
                        </Link>
                      </h2>
                    </header>
                    <section itemProp="description">{parse(post.excerpt)}</section>
                    <div class="bottom-flex">
                      <p><Link to={post.uri} itemProp="url">Read More</Link></p>
                      <p>{post.date}</p>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </MainLoop>

        <Pagination>
          {previousPagePath && (
            <>
              <Link to={previousPagePath}><FaChevronLeft size={36}/></Link>
              <br />
            </>
          )}
          {nextPagePath && <Link to={nextPagePath}><FaChevronRight size={36}/></Link>}
        </Pagination>
      </MainBackground>
      
    </Layout>
  )
}

const MainBackground = styled.div`
  width: 100%;
  background-color: #353431;
  padding-top: 100px;
`

const MainLoop = styled.ol`
  list-style: none;
  max-width: 1080px;
  width: 100%;
  margin: 0px auto;
  display: flex;
  flex-wrap: wrap;
  > li {
    width: 33.33%;
    padding: 15px;
    article {
      background-color: #000;
      .entry-wrap {
        padding: 15px;
        h2 {
          font-family: "Kessel Light";
          font-size: 25px;
          letter-spacing: 1px;
          line-height: 30px;
          a {
            color: #d2232a;
            transition-duration: .3s;
            &:hover {
              color: #fff;
            }
          }
        }
        p {
          font-family: "Kessel Light";
          font-size: 14px;
          color: #f1f2f2;
          line-height: 1.6;
        }
        .bottom-flex {
          margin-top: 35px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          p:first-child {
            font-weight: 700;
            letter-spacing: 1px;
            font-size: 15.4px;
            a {
              color: #fff;
              text-decoration: none;
              transition-duration: .3s;
              &:hover {
                color: #d2232a;
              }
            }
          }
          p:last-child {
            color: #d2232a;
            font-weight: 700;
            letter-spacing: 1px;
            font-size: 15.4px;
          }
        }
      }
    }
  }
`

const Pagination = styled.div`
  margin: 0px auto;
  padding: 50px 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    color: #fff;
  }
`

export default NewsIndex

export const pageQuery = graphql`
  query WordPressNewsArchive($offset: Int!, $postsPerPage: Int!) {
    allWpNewsSingle(
      sort: { fields: [date], order: DESC }
      limit: $postsPerPage
      skip: $offset
    ) {
      nodes {
        excerpt
        uri
        date(formatString: "MMMM DD, YYYY")
        title
        excerpt
        featuredImage {
          node {
            localFile {
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid_withWebp
              }
              }
            }
          }
        }
      }
    }
  }
`