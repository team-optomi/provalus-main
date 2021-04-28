import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from "gatsby-image"

import Layout from "../../components/layout-v2"

const ContactUsPage = () => {

    const data = useStaticQuery(graphql`
      query {
        locationImage: file(relativePath: { eq: "location_tag.png" }) {
          childImageSharp {
            fixed(width: 50, height: 73) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        phoneImage: file(relativePath: { eq: "phone.png" }) {
            childImageSharp {
              fixed(width: 50, height: 52) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        allWpPage(filter: {databaseId: {eq: 215}}) {
          edges {
            node {
              title
              content
              featuredImage {
                node {
                  localFile {
                    childImageSharp {
                        sizes(maxWidth: 1920) {
                            ...GatsbyImageSharpSizes
                        }
                    }
                  }
                }
              }
              ContactUsContent {
                contactSectionOneBackground {
                    localFile {
                        childImageSharp {
                            fluid(maxWidth: 1800) {
                                ...GatsbyImageSharpFluid_withWebp
                            }
                        }
                    }
                }
                contactSectionOneCopy
                contactLocationOne
                contactLocationThree
                contactLocationTwo
                contactScrollImages {
                    localFile {
                        childImageSharp {
                            fluid(maxWidth: 800) {
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
    `)

    return(
        data.allWpPage.edges.map(post => (
            <Layout>
                <SectionOne>
                    <h1>Contact Us</h1>
                </SectionOne>
                <SectionTwo>
                    <div class="background-image">
                        <Img fluid={post.node.ContactUsContent.contactSectionOneBackground.localFile.childImageSharp.fluid} alt={"Background Building"} />
                    </div>
                    <div class="section-content" dangerouslySetInnerHTML={{ __html: post.node.ContactUsContent.contactSectionOneCopy }} />
                </SectionTwo>
                <SectionThree>
                    <h2>Locations</h2>
                    <div class="location-flex">
                        <div>
                            <Img fluid={data.locationImage.childImageSharp.fixed} />
                            <div class="location-content" dangerouslySetInnerHTML={{ __html: post.node.ContactUsContent.contactLocationOne }} />
                        </div>
                        <div>
                            <Img fluid={data.locationImage.childImageSharp.fixed} />
                            <div class="location-content" dangerouslySetInnerHTML={{ __html: post.node.ContactUsContent.contactLocationTwo }} />
                        </div>
                        <div>
                            <Img fluid={data.locationImage.childImageSharp.fixed} />
                            <div class="location-content" dangerouslySetInnerHTML={{ __html: post.node.ContactUsContent.contactLocationThree }} />
                        </div>
                    </div>
                </SectionThree>
                <SectionFour>
                    {post.node.ContactUsContent.contactScrollImages.map(image => (
                        <Img fluid={image.localFile.childImageSharp.fluid} alt={"scroll image"} />
                    ))}
                    <div class="phone-content">
                        <Img fluid={data.phoneImage.childImageSharp.fixed} />
                        <p>888.689.0872</p>
                    </div>
                </SectionFour>
            </Layout>
        ))
    )
}

const SectionOne = styled.section`
    width: 100%;
    padding: 200px 0 100px;
    h1 {
        font-family: "Madelyn";
        font-size: 185px;
        font-weight: normal;
        line-height: 35px;
        color: #d2232a;
        text-align: center;
    }
`

const SectionTwo = styled.section`
    width: 100%;
    position: relative;

`

const SectionThree = styled.section`

`

const SectionFour = styled.section``

export default ContactUsPage