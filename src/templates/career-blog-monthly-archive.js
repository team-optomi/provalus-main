import React from "react"
import { Link, graphql } from "gatsby"
import parse from "html-react-parser"
import styled from 'styled-components'
import Img from "gatsby-image"

import Layout from "../components/layout-v2"
import SEO from "../components/seo"
import CareerBlogSidebar from "../components/career-blog-sidebar"

const CareerBlogMonthlyArchive = ({data}) => {

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
                    <CareerBlogSidebar/>
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
                            <Link to={`/career-blog/${post.slug}`} itemProp="url">
                                <Img fluid={post.featuredImage.node.localFile.childImageSharp.fluid} alt={post.title} />
                                <div class="entry-wrap">
                                    <header>
                                        <h2><span itemProp="headline">{parse(title)}</span></h2>
                                    </header>
                                    <div class="bottom-flex">
                                        <p>{post.date}</p>
                                    </div>
                                </div>
                            </Link>
                            </article>
                        </li>
                        )
                    })}

                </BlogLoop>
            </MainPage>
        </Layout>
    )

}


const MainPage = styled.div`
    background-image: url(../images/blog-bg.png);
    background-size: 100%;
    background-position: top center;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    flex-wrap: wrap;
    padding-top: 100px;
    h1 {
        width: 100%;
        font-family: Madelyn;
        font-size: 145px;
        font-weight: normal;
        line-height: 1;
        color: rgb(210, 35, 42);
        text-align: center;
        position: relative;
        margin-bottom: 80px;
    }
    @media(max-width:540px) {
      h1 {
        font-size: 100px;
        margin-bottom: 40px;
      }
    }
`

const Sidebar = styled.div`
    max-width: 350px;
    width: 100%;
    @media(max-width:1080px) {
      order: 2;
      max-width: 100%;
    }
`

const BlogLoop = styled.ul`
    max-width: calc(100% - 350px);
    width: 75%;
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    > li {
        width: 33.33%;
        margin: 0;
        article {
            margin: 0;
        }
        a {
            display: block;
            width: 100%;
            height: 100%;
            position: relative;
            .entry-wrap {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0,0,0,.5);
                display: flex;
                flex-direction: column;
                justify-content: flex-end;
                padding: 30px;
                transition-duration: .3s;
                h2 {
                    font-family: "Kessel Light";
                    color: #fff;
                    font-weight: 400;
                    line-height: 1.3;
                    font-size: 20px;
                    letter-spacing: 1px;
                    text-transform: uppercase;
                    margin-top: 0px;
                }
                p {
                    font-family: Madelyn;
                    font-size: 28px;
                    font-weight: 100;
                    line-height: 1;
                    color: #fff;
                }
            }
        }
        &:hover {
            a {
                .entry-wrap {
                    background-color: rgba(210, 35, 42, .5);
                }
            }
        }
    }
    @media(max-width:1200px) {
      > li {
        width: 50%;
      }
    }
    @media(max-width:1080px) {
      order: 1;
      max-width: 100%;
      width: 100%;
      > li {
        width: 33.33%;
      }
    }
    @media(max-width:980px) {
      > li {
        width: 50%;
      }
    }
    @media(max-width:660px) {
      > li {
        width: 100%;
      }
    }
`

export default CareerBlogMonthlyArchive

export const pageQuery = graphql`
  query WordPressCareerPostMonthlyArchive($pubDate: String) {
    allWpCareerPost(
      filter: {MonthlyArchive: {archiveSlug: {eq: $pubDate}}}
      sort: { fields: [date], order: DESC }
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