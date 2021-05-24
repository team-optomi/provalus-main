import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from "gatsby-image"

import Layout from "../../components/layout-v2"
import ScrollingImages from "../../components/scrolling-images"

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
                          <a href="https://goo.gl/maps/UmhVNFV67BGUz2xg7" target="_blank">
                            <Img fluid={data.locationImage.childImageSharp.fixed} />
                            <div class="location-content" dangerouslySetInnerHTML={{ __html: post.node.ContactUsContent.contactLocationOne }} />
                          </a>
                        </div>
                        <div>
                          <a href="https://g.page/Provalus?share" target="_blank">
                            <Img fluid={data.locationImage.childImageSharp.fixed} />
                            <div class="location-content" dangerouslySetInnerHTML={{ __html: post.node.ContactUsContent.contactLocationTwo }} />
                          </a>
                        </div>
                        <div>
                          <a href="https://goo.gl/maps/kMCGGCgVdb31pMKz6" target="_blank">
                            <Img fluid={data.locationImage.childImageSharp.fixed} />
                            <div class="location-content" dangerouslySetInnerHTML={{ __html: post.node.ContactUsContent.contactLocationThree }} />
                          </a>
                        </div>
                    </div>
                </SectionThree>
                <SectionFour>
                  <ScrollingImages/>
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
    padding: 200px 0 20px;
    h1 {
        font-family: "Madelyn";
        font-size: 185px;
        font-weight: normal;
        line-height: 35px;
        color: #d2232a;
        text-align: center;
    }
    @media(max-width:767px) {
      padding-top: 100px;
      padding-bottom: 0px;
      h1 {
        font-size: 100px;
      }
    }
    @media(max-width: 400px) {
      h1 {
        font-size: 80px;
      }
    }
`

const SectionTwo = styled.section`
    width: 100%;
    position: relative;
    overflow: hidden;
    padding: 40px 0;
    .background-image {
      position: relative;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      &:after {
        content: '';
        background-color: rgba(0,0,0,.75);
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
      }
      .gatsby-image-wrapper {
        height: 100%;
      }
    }
    .section-content {
      position: absolute;
      z-index: 10;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      p {
        font-family: "Kessel Light";
        line-height: 2;
        font-size: 18px;
        color: #fff;
        font-weight: 400;
        text-align: center;
        margin-bottom: 0;
      }
    }
    @media(max-width:1000px) {
      .section-content {
        p {
          br {
            display: none;
          }
        }
      }
    }
    @media(max-width:767px) {
      padding: 30px 0;
      .section-content {
        position: relative;
        padding: 30px 20px 0;
      }
    }
    @media(max-width:767px) {
      > div {
        opacity: 1 !important;
        transform: none !important;
      }
      h2 {
        font-size: 28px;
      }
      .section-content {
        p {
          font-size: 14px;
          br {
            display: none;
          }
        }
      }
      
    }
`

const SectionThree = styled.section`
    width: 100%;
    padding: 50px 20px;
    h2 {
      font-family: "Kessel Light";
      font-size: 60px;
      color: #fff;
      font-weight: 400;
      text-align: center;
      margin-top: 0;
      margin-bottom: 35px;
      text-transform: uppercase;
    }
    .location-flex {
      max-width: 1000px;
      width: 100%;
      display: flex;
      margin: 0 auto;
      a {
        text-decoration: none;
      }
      > div {
        width: 33.33%;
        text-align: center;
        .gatsby-image-wrapper {
          width: 35px;
          height: 50px;
          margin: 0 auto;
        }
        h3 {
          font-family: "Madelyn";
          font-size: 85px;
          font-weight: normal;
          line-height: 35px;
          color: #d2232a;
          text-align: center;
        }
        p {
          font-family: "Kessel Light";
          line-height: 1.5;
          font-size: 18px;
          color: #fff;
          font-weight: 400;
          text-align: center;
          margin-bottom: 0;
        }
        .location-content {
          margin-top: -30px;
        }
      }
    }
    @media(max-width: 767px) {
      h2 {
        font-size: 32px;
      }
      .location-flex {
        flex-wrap: wrap;
        > div {
          width: 100%;
          margin-bottom: 40px;
        }
      }
    }
    @media(max-width:767px) {
      > div {
        opacity: 1 !important;
        transform: none !important;
      }
      h2 {
        font-size: 28px;
      }
      .location-flex {
        > div {
          p {
            font-size: 14px;
          }
        }
      }
    }
`

const SectionFour = styled.section`
  width: 100%;
  .phone-content {
    width: 100%;
    padding: 50px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    .gatsby-image-wrapper {
      width: 50px;
      height: 53px;
      margin-right: 20px;
      img {
        width: 50px !important;
        height: auto !important;
        object-fit: contain !important;
      }
    }
    p {
      font-family: "Kessel Light";
      line-height: 1.5;
      font-size: 18px;
      color: #fff;
      font-weight: 400;
      text-align: center;
      margin-bottom: 0;
    }
  }
  @media(max-width:767px) {
    > div {
      opacity: 1 !important;
      transform: none !important;
    }
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

export default ContactUsPage