import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from "gatsby-image"

import Layout from "../components/layout-v2"
import SEO from "../components/seo"

const AwardsPage = () => {

    const data = useStaticQuery(graphql`
      query {
        allWpPage(filter: {databaseId: {eq: 3004}}) {
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
              AwardsPage {
                awardRow {
                  awardRowLayout
                  awardRowContent
                  awardRowImage {
                    title
                    localFile {
                        childImageSharp {
                            fluid {
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
          <PageMain>
            <header>
                <h1>Awards</h1>
            </header>
            <div class="awards-flex">
                {post.node.AwardsPage.awardRow.map(award => (
                    <div 
                    data-sal="fade"
                    data-sal-duration="1000"
                    data-sal-easing="ease"
                    className={`award-row-${award.awardRowLayout}`}>
                        <Img className={"award-image"} fluid={award.awardRowImage.localFile.childImageSharp.fluid} alt={award.awardRowImage.title} />
                        <div class="award-content" dangerouslySetInnerHTML={{ __html: award.awardRowContent }} />
                    </div>
                ))}
            </div>
          </PageMain>
        </Layout>
      ))
    )
  
}

const PageMain = styled.section`
    max-width: 1170px;
    width: 100%;
    padding: 100px 20px;
    margin: 0 auto;
    header {
        text-align: center;
        margin-bottom: 80px;
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
    }
    .awards-flex {
        p {
            font-family: "Kessel Light";
            line-height: 1.5;
            padding-top: 0px;
            font-size: 18px;
            color: #fff;
            margin-bottom: 0;
        }
        .award-row-image-left {
            display: flex;
            align-items: center;
            margin-bottom: 30px;
            .award-image {
                width: 250px;
                order: 1;
            }
            .award-content {
                order: 2;
                width: calc(100% - 250px);
                padding-left: 30px;
            }
        }
        .award-row-image-right {
            display: flex;
            align-items: center;
            margin-bottom: 30px;
            .award-image {
                width: 250px;
                order: 2;
            }
            .award-content {
                order: 1;
                width: calc(100% - 250px);
                padding-right: 30px;
            }
        }
        .award-row-full-width {
            .award-image {
                margin-bottom: 30px;
            }
            .award-content {
                margin-bottom: 30px;
            }
        }
    }
    @media(max-width: 767px) {
        .awards-flex {
            .award-row-image-left {
                flex-direction: column;
                justify-content: center;
                .award-image {
                    margin-bottom: 30px;
                }
                .award-content {
                    width: 100%;
                    padding-left: 0;
                }
            }
            .award-row-image-right {
                flex-direction: column;
                justify-content: center;

                .award-image {
                    order: 1;
                    margin-bottom: 30px;
                }
                .award-content {
                    order: 2;
                    width: 100%;
                    padding-right: 0;
                }
            }
        }
    }
`

export default AwardsPage