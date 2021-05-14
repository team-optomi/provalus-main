import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from "../../components/layout-v2"
import SEO from "../../components/seo"
import Checkmark from "../../images/checkmark.png"

const JobsPage = () => {

    const data = useStaticQuery(graphql`
      query {
        allWpPage(filter: {databaseId: {eq: 176}}) {
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
              JobsContent {
                  jSectionOneContent
                  jSectionTwoContent
                  jSectionThreeContent
                  jContactSection
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
            <SectionOne>
                <h1
                data-sal="fade"
                data-sal-duration="1000"
                data-sal-easing="ease"
                >{post.node.title} </h1>
                <div 
                data-sal="slide-up"
                data-sal-duration="1000"
                data-sal-easing="ease"
                dangerouslySetInnerHTML={{ __html: post.node.JobsContent.jSectionOneContent }}/>
            </SectionOne>
            <SectionTwo>
                <SectionLeft
                data-sal="slide-right"
                data-sal-duration="1000"
                data-sal-easing="ease"
                >
                    <div dangerouslySetInnerHTML={{ __html: post.node.JobsContent.jSectionTwoContent }}/>
                </SectionLeft>
                <SectionRight
                data-sal="slide-left"
                data-sal-duration="1000"
                data-sal-easing="ease"
                >
                    <div dangerouslySetInnerHTML={{ __html: post.node.JobsContent.jSectionThreeContent }}/>
                </SectionRight>
            </SectionTwo>
            <ContactSection>
                <div 
                data-sal="slide-up"
                data-sal-duration="1000"
                data-sal-easing="ease"
                dangerouslySetInnerHTML={{ __html: post.node.JobsContent.jContactSection }}/>
            </ContactSection>
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
      margin-bottom: 120px;
    }
    @media(max-width:1000px) {
      max-width: 640px;
      padding: 100px 20px;
      margin: 0 auto;
      h1 {
        font-size: 100px;
      }
    }
    @media(max-width:390px) {
      h1 {
        font-size: 80px;
      }
    }
  `

  const SectionOne = styled.section`
    > div {
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
    }
    p {
        font-family: "Kessel Light";
        font-size: 18px;
        color: #f1f2f2;
        text-align: center;
        padding-top: 0;
        line-height: 26px;
        letter-spacing: 1px;
    }
    p.join-text {
        font-family: "Madelyn";
        font-size: 50px;
        margin-bottom: 80px;
    }
    @media(max-width:1000px) {
      p {
        br {
          display: none;
        }
      }
    }
  `

  const SectionTwo = styled.section`
    display: flex;
    align-items: flex-start;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    h2 {
        font-family: "Kessel Light";
        color: #fffffd;
        letter-spacing: 1px;
        font-size: 30px;
        font-weight: 400;
        margin-bottom: 18px;
        text-transform: uppercase;
        text-align: center;
    }
    p,
    li {
        font-family: "Kessel Light";
        line-height: 25px;
        font-size: 15px;
        letter-spacing: 1px;
        color: #f1f2f2;
        padding-top: 0;
        margin: 0;
    }
    ul {
        margin-left: 1.5em;
        list-style-image: url(${Checkmark});
    }
    p.red {
        color: rgb(210,35,42);
        font-size: 20px;
        padding-top: 15px;
        font-weight: bold;
        letter-spacing: 1px;
        margin: 0;
    }
    a {
        font-family: "Madelyn";
        padding-right: 45px;
        color: rgb(210,35,42);
        font-size: 75px;
        display: block;
        width: 100%;
        text-align: right;
        text-decoration: none !important;
        transition-duration: .3s;
        &:hover {
            color: #fff;
        }
    }
    @media(max-width:1000px) {
      flex-wrap: wrap;
      p {
        br {
          display: none;
        }
      }
    }
  `

  const SectionLeft = styled.div`
    width: 47.5%;
    margin-right: 2.5%;
    @media(max-width:1000px) {
      width: 100%;
      margin-right: 0;
    }
  `

  const SectionRight = styled.div`
    width: 47.5%;
    margin-left: 2.5%;
    @media(max-width:1000px) {
      width: 100%;
      margin-left: 0;
    }
  `

  const ContactSection = styled.section`
    width: 88%;
      max-width: 1200px;
      margin: 0 auto;
      margin-top: 200px;
      > div {
        max-width: 500px;
        margin: 0 auto;
        padding-bottom: 100px;
      }
      h3 {
        font-family: "Kessel Light";
        font-weight: normal;
        letter-spacing: 1px;
        font-size: 30px;
        margin-bottom: 18px;
        text-transform: uppercase;
        color: red;
        text-align: center;
      }
      p {
        font-family: "Kessel Light";
        color: #f1f2f2;
        margin: 0px;
        line-height: 1.7;
        font-size: 22px;
        a {
          color: #f1f2f2;
          text-decoration: none !important;
          &:hover {
            color: red;
          }
        }
      }
      .gatsby-image-wrapper {
        width: 150px !important;
        float: left;
        margin-right: 17px;
      }
      @media(max-width:1000px) {
        width: 100%;
      }
  `
  
  export default JobsPage