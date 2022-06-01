import React from "react"
import { Link, graphql } from "gatsby"
import parse from "html-react-parser"
import styled from 'styled-components'
import Img from "gatsby-image"

import Layout from "../components/layout-v2"
import SEO from "../components/seo"

import { FaChevronLeft } from 'react-icons/fa'
import { FaChevronRight } from 'react-icons/fa'

const CareerBlogArchive = ({
    data,
    pageContext: { nextPagePath, previousPagePath },
  }) => {

    const posts = data.allWpCareerPost.nodes
    const seoMeta = data.allWpPage.edges

    return(
        <Layout>
            {seoMeta.map(page => (
            <SEO 
            title={page.node.seo.title} 
            description={page.node.seo.metaDesc}
            metaImage={page.node.seo.opengraphImage.localFile.childImageSharp.fluid}
            />
            ))}
            <MainPage>
                <h1>Career Blog</h1>
                <Sidebar>

                </Sidebar>
                <BlogLoop>
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
                                    <Link to={`/insights/${post.slug}`} itemProp="url">
                                    <span itemProp="headline">{parse(title)}</span>
                                    </Link>
                                </h2>
                                </header>
                                <div class="bottom-flex">
                                <p><Link to={`/insights/${post.slug}`} itemProp="url">Read More</Link></p>
                                <p>{post.date}</p>
                                </div>
                            </div>
                            </article>
                        </li>
                        )
                    })}

                    <Pagination>
                        {previousPagePath && (
                            <>
                            <Link to={previousPagePath}><FaChevronLeft size={36}/></Link>
                            <br />
                            </>
                        )}
                        {nextPagePath && <Link to={nextPagePath}><FaChevronRight size={36}/></Link>}
                    </Pagination>
                </BlogLoop>
            </MainPage>
        </Layout>
    )

}

const MainPage = styled.div``

const Sidebar = styled.div``

const BlogLoop = styled.div``

const Pagination = styled.div``

export default CareerBlogArchive

export const pageQuery = graphql`
  query WordPressCareerPostArchive($offset: Int!, $postsPerPage: Int!) {
    allWpCareerPost(
      sort: { fields: [date], order: DESC }
      limit: $postsPerPage
      skip: $offset
    ) {
      nodes {
        uri
        slug
        date(formatString: "MMMM DD, YYYY")
        title
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
    allWpPage(filter: {databaseId: {eq: 2298}}) {
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
        }
      }
    }
  }
`