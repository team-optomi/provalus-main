import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from "../../components/layout-v2"
import SEO from "../../components/seo"

const TrainingPage = () => {

    const data = useStaticQuery(graphql`
      query {
        allWpPage(filter: {databaseId: {eq: 188}}) {
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
              TrainingContent {
                  tSectionOneContent
                  tSectionTwoContent
                  tSectionThreeContent
                  tSectionFourContent
                  tSectionFiveContent
                  tSectionSixContent
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
                data-sal="fade"
                data-sal-duration="1000"
                data-sal-easing="ease"
                dangerouslySetInnerHTML={{ __html: post.node.TrainingContent.tSectionOneContent }}/>
                <div 
                data-sal="slide-up"
                data-sal-duration="1000"
                data-sal-easing="ease"
                dangerouslySetInnerHTML={{ __html: post.node.TrainingContent.tSectionTwoContent }}/>
            </SectionOne>
            <SectionTwo>
            <div 
            data-sal="slide-right"
            data-sal-duration="1000"
            data-sal-easing="ease"
            dangerouslySetInnerHTML={{ __html: post.node.TrainingContent.tSectionThreeContent }}/>
            <div 
            data-sal="slide-right"
            data-sal-duration="1000"
            data-sal-easing="ease"
            dangerouslySetInnerHTML={{ __html: post.node.TrainingContent.tSectionFourContent }}/>
            <div 
            data-sal="slide-right"
            data-sal-duration="1000"
            data-sal-easing="ease"
            dangerouslySetInnerHTML={{ __html: post.node.TrainingContent.tSectionFiveContent }}/>
            <div 
            data-sal="slide-right"
            data-sal-duration="1000"
            data-sal-easing="ease"
            dangerouslySetInnerHTML={{ __html: post.node.TrainingContent.tSectionSixContent }}/>
            </SectionTwo>
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
    margin-bottom: 100px;
    > div {
        width: 100%;
        max-width: 970px;
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
    h3 {
        font-family: "Kessel Light";
        color: rgb(210,35,42);
        font-size: 30px;
        margin-top: 0px;
        font-weight: normal;
        letter-spacing: 1px;
        line-height: 1.3;
        text-align: center;
    }
    @media(max-width:1000px) {
      p {
        br {
          display: none;
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
      p {
        font-size: 14px;
        br {
          display: none;
        }
      }
    }
  `

  const SectionTwo = styled.section`
    width: 100%;
    max-width: 970px;
    margin: 0 auto;
    > div {
        margin-bottom: 50px;
    }
    h3 {
        font-family: "Kessel Light";
        color: rgb(210,35,42);
        font-size: 42px;
        margin-top: 0px;
        margin-bottom: 8px;
        font-weight: normal;
        letter-spacing: 1px;
        line-height: 1.3;
        display: flex;
        align-items: center;
        .gatsby-image-wrapper {
            max-height: 47px;
            margin-right: 10px;
            img {
                object-fit: contain !important;
            }
        }
    }
    p {
        font-family: "Kessel Light";
        font-size: 18px;
        color: #f1f2f2;
        padding-top: 0;
        line-height: 1.7;
        letter-spacing: 1px;
    }
    @media(max-width:767px) {
      h3 {
        font-size: 28px;
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
  
  export default TrainingPage