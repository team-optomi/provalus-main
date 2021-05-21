import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from "gatsby-image"

import Layout from "../../components/layout-v2"
import SEO from "../../components/seo"
import VideoEmbed from "../../components/video-embed"

const TeamVuePage = () => {

    const data = useStaticQuery(graphql`
      query {
        teamVue: file(relativePath: { eq: "Provalus-TeamVueOptomi-lined.png" }) {
            childImageSharp {
                sizes(maxWidth: 587) {
                    ...GatsbyImageSharpSizes_withWebp
                }
            }
          }
        teamVueLens: file(relativePath: { eq: "Provalus-TeamVue-lens.png" }) {
            childImageSharp {
                sizes(maxWidth: 922) {
                    ...GatsbyImageSharpSizes_withWebp
                }
            }
          }
        teamVueSmall: file(relativePath: { eq: "Provalus-TeamVueOptomi-lined-Small.png" }) {
            childImageSharp {
                sizes(maxWidth: 350) {
                    ...GatsbyImageSharpSizes_withWebp
                }
            }
          }
        allWpPage(filter: {databaseId: {eq: 1616}}) {
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
              content
              featuredImage {
                node {
                  localFile {
                    childImageSharp {
                        sizes(maxWidth: 1920) {
                            ...GatsbyImageSharpSizes_withWebp
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
          
        <Layout>
        {data.allWpPage.edges.map(post => (
          <SEO 
          title={post.node.seo.title} 
          description={post.node.seo.metaDesc}
          metaImage={post.node.seo.opengraphImage.localFile.childImageSharp.fluid}
          />
          ))}
          <PageMain>
            <SectionOne>
                <Img sizes={data.teamVue.childImageSharp.sizes} />
                {data.allWpPage.edges.map(post => (
                <div dangerouslySetInnerHTML={{ __html: post.node.content }} />
                ))}
            </SectionOne>
            <SectionTwo>
                {data.allWpPage.edges.map(post => (
                <Img sizes={post.node.featuredImage.node.localFile.childImageSharp.sizes} />
                ))}
            </SectionTwo>
            <SectionThree>
                <div class="col-left">
                <VideoEmbed
                    videoSrcURL="https://player.vimeo.com/video/226464229"
                    videoTitle="The Value of Provalus"
                />
                </div>
                <div class="col-right">
                    <Img sizes={data.teamVueLens.childImageSharp.sizes} />
                    <Img sizes={data.teamVueSmall.childImageSharp.sizes} />
                </div>
            </SectionThree>
          </PageMain>
        </Layout>
    )

  }
  
  
  const PageMain = styled.div`
    width: 100%;
    padding: 100px 0;
    padding-bottom: 50px;
    h1 {
      font-family: "Madelyn";
      font-size: 185px;
      font-weight: normal;
      text-transform: lowercase;
      line-height: 35px;
      color: #d2232a;
      text-align: center;
      position: relative;
    }
    @media(max-width:1000px) {
      padding: 200px 20px;
      padding-bottom: 50px;
    }
    @media(max-width:767px) {
      padding-top: 100px;
      h1 {
        font-size: 100px;
      }
    }
  `

  const SectionOne = styled.section`
    padding: 0 20px;
    .gatsby-image-wrapper {
        max-width: 587px;
        width: 100%;
        height: auto;
        margin: 0 auto;
        margin-bottom: 50px;
    }
    div {
        margin: 0 auto;
    }
    p {
        font-family: "Kessel Light";
        line-height: 1.5;
        font-size: 18px;
        color: #fff;
        font-weight: 400;
        text-align: center;
        &.entire {
            font-family: "Madelyn";
            font-weight: 400;
            font-size: 50px;
            margin-bottom: 0;
            line-height: 1;
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

  const SectionTwo = styled.section``

  const SectionThree = styled.section`
    max-width: 1040px;
    width: 100%;
    padding: 0 20px;
    padding-top: 50px;
    margin: 0 auto;
    display: flex; 
    align-items: center;
    justify-content: space-between;
    > div {
        width: 50%;
    }
    iframe {
        width: 100%;
        height: 350px;
    }
    .col-right {
        .gatsby-image-wrapper {
            &:last-child {
                max-width: 250px;
                margin-left: 50px;
                margin-top: -100px;
            }
        }
    }
    @media(max-width:767px) {
        flex-wrap:wrap;
        > div {
            width: 100%;
        }
    }
  `
  
  export default TeamVuePage