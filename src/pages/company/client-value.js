import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from "gatsby-image"

import Layout from "../../components/layout-v2"

const ClientValuePage = () => {

    const data = useStaticQuery(graphql`
      query {
        allWpPage(filter: {databaseId: {eq: 37}}) {
          edges {
            node {
              title
              content
              featuredImage {
                node {
                  localFile {
                    childImageSharp {
                        sizes(maxWidth: 1200) {
                            ...GatsbyImageSharpSizes
                        }
                    }
                  }
                }
              }
              ClientValueContent {
                sectionOne {
                    colOneImage {
                        localFile {
                            childImageSharp {
                                fluid(maxWidth: 100) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                      }
                    colOneCopy
                    colTwoImage {
                        localFile {
                            childImageSharp {
                                fluid(maxWidth: 100) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                      }
                    colTwoCopy
                    colThreeImage {
                        localFile {
                            childImageSharp {
                                fluid(maxWidth: 100) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                      }
                    colThreeCopy
                    colFourImage {
                        localFile {
                            childImageSharp {
                                fluid(maxWidth: 100) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                      }
                    colFourCopy
                    colFiveImage {
                        localFile {
                            childImageSharp {
                                fluid(maxWidth: 100) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                      }
                    colFiveCopy
                    colSixImage {
                        localFile {
                            childImageSharp {
                                fluid(maxWidth: 100) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                      }
                    colSixCopy
                    colSevenImage {
                        localFile {
                            childImageSharp {
                                fluid(maxWidth: 100) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                      }
                    colSevenCopy
                    colEightImage {
                        localFile {
                            childImageSharp {
                                fluid(maxWidth: 100) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                      }
                    colEightCopy
                    colNineImage {
                        localFile {
                            childImageSharp {
                                fluid(maxWidth: 100) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                      }
                    colNineCopy
                }
                sectionTwo {
                    sectionCopy
                    sectionImage {
                        localFile {
                            childImageSharp {
                                fluid(maxWidth: 2467) {
                                    ...GatsbyImageSharpFluid
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
          <PageMain>
            <SectionContent 
            data-sal="fade"
            data-sal-duration="1000"
            data-sal-easing="ease"
            dangerouslySetInnerHTML={{ __html: post.node.content }}/>
            <IconSection
            data-sal="fade"
            data-sal-duration="1000"
            data-sal-easing="ease"
            >
                <IconCol>
                    <Img fluid={post.node.ClientValueContent.sectionOne.colOneImage.localFile.childImageSharp.fluid} alt={post.node.title} />
                    <p dangerouslySetInnerHTML={{ __html: post.node.ClientValueContent.sectionOne.colOneCopy }} />
                </IconCol>
                <IconCol>
                    <Img fluid={post.node.ClientValueContent.sectionOne.colTwoImage.localFile.childImageSharp.fluid} alt={post.node.title} />
                    <p dangerouslySetInnerHTML={{ __html: post.node.ClientValueContent.sectionOne.colTwoCopy }} />
                </IconCol>
                <IconCol>
                    <Img fluid={post.node.ClientValueContent.sectionOne.colThreeImage.localFile.childImageSharp.fluid} alt={post.node.title} />
                    <p dangerouslySetInnerHTML={{ __html: post.node.ClientValueContent.sectionOne.colThreeCopy }} />
                </IconCol>
                <IconCol>
                    <Img fluid={post.node.ClientValueContent.sectionOne.colFourImage.localFile.childImageSharp.fluid} alt={post.node.title} />
                    <p dangerouslySetInnerHTML={{ __html: post.node.ClientValueContent.sectionOne.colFourCopy }} />
                </IconCol>
                <IconCol>
                    <Img fluid={post.node.ClientValueContent.sectionOne.colFiveImage.localFile.childImageSharp.fluid} alt={post.node.title} />
                    <p dangerouslySetInnerHTML={{ __html: post.node.ClientValueContent.sectionOne.colFiveCopy }} />
                </IconCol>
                <IconCol>
                    <Img fluid={post.node.ClientValueContent.sectionOne.colSixImage.localFile.childImageSharp.fluid} alt={post.node.title} />
                    <p dangerouslySetInnerHTML={{ __html: post.node.ClientValueContent.sectionOne.colSixCopy }} />
                </IconCol>
                <IconCol>
                    <Img fluid={post.node.ClientValueContent.sectionOne.colSevenImage.localFile.childImageSharp.fluid} alt={post.node.title} />
                    <p dangerouslySetInnerHTML={{ __html: post.node.ClientValueContent.sectionOne.colSevenCopy }} />
                </IconCol>
                <IconCol>
                    <Img fluid={post.node.ClientValueContent.sectionOne.colEightImage.localFile.childImageSharp.fluid} alt={post.node.title} />
                    <p dangerouslySetInnerHTML={{ __html: post.node.ClientValueContent.sectionOne.colEightCopy }} />
                </IconCol>
                <IconCol>
                    <Img fluid={post.node.ClientValueContent.sectionOne.colNineImage.localFile.childImageSharp.fluid} alt={post.node.title} />
                    <p dangerouslySetInnerHTML={{ __html: post.node.ClientValueContent.sectionOne.colNineCopy }} />
                </IconCol>
            </IconSection>
            <SectionContent 
            data-sal="fade"
            data-sal-duration="1000"
            data-sal-easing="ease"
            dangerouslySetInnerHTML={{ __html: post.node.ClientValueContent.sectionTwo.sectionCopy }}/>
            <ImageSection
            data-sal="fade"
            data-sal-duration="1000"
            data-sal-easing="ease"
            >
                <Img fluid={post.node.ClientValueContent.sectionTwo.sectionImage.localFile.childImageSharp.fluid} alt={post.node.title} />
            </ImageSection>
          </PageMain>
        </Layout>
      ))
    )
  
  }
  
  
  const PageMain = styled.div`
    width: 100%;
    padding: 200px;
    h1 {
        font-family: "Madelyn";
        font-size: 185px;
        font-weight: normal;
        text-transform: lowercase;
        line-height: 35px;
        color: #d2232a;
        text-align: center;
    }
  `

  const SectionContent = styled.section`
    p {
        font-family: "Kessel Light";
        padding-top: 30px;
        font-size: 18px;
        line-height: 25px;
        color: #fff;
        text-align: center;
    }
  `

  const IconSection = styled.section`
    max-width: 1400px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  `

  const IconCol = styled.div`
    width: 20%;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .gatsby-image-wrapper {
        max-width: 100px;
        width: 100%;
        height: 100px;
        margin: 0 auto;
    }
    img {
        max-width: 100px;
        width: 100% !important;
        object-fit: contain !important;
    }
    p {
        font-family: "Kessel Light";
        padding-top: 30px;
        font-size: 18px;
        line-height: 25px;
        color: #fff;
        text-align: center;
    }
  `

  const ImageSection = styled.section`
    max-width: 1180px;
    width: 100%;
    margin: 35px auto;
  `
  
  export default ClientValuePage