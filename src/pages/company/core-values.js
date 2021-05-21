import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from "../../components/layout-v2"
import SEO from "../../components/seo"

const CoreValuesPage = () => {

    const data = useStaticQuery(graphql`
      query {
        allWpPage(filter: {databaseId: {eq: 164}}) {
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
                            ...GatsbyImageSharpSizes
                        }
                    }
                  }
                }
              }
              WhatWeValue {
                  valueOne
                  valueTwo
                  valueThree
                  valueFour
                  valueFive
                  valueSix
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
            <h1>{post.node.title} </h1>
           <SectionOne>
                <div
                data-sal="fade"
                data-sal-duration="1000"
                data-sal-easing="ease"
                dangerouslySetInnerHTML={{ __html: post.node.content }} />
           </SectionOne>
           <SectionTwo>
               <h2
               data-sal="fade"
               data-sal-duration="1000"
               data-sal-easing="ease"
               >We are:</h2>
                <div 
                data-sal="slide-up"
                data-sal-duration="1000"
                data-sal-easing="ease"
                class="row-one">
                    <div dangerouslySetInnerHTML={{ __html: post.node.WhatWeValue.valueOne }} />
                </div>
                <div 
                data-sal="slide-up"
                data-sal-duration="1000"
                data-sal-easing="ease"
                class="row-two">
                    <div dangerouslySetInnerHTML={{ __html: post.node.WhatWeValue.valueTwo }} />
                    <div dangerouslySetInnerHTML={{ __html: post.node.WhatWeValue.valueThree }} />
                </div>
                <div 
                data-sal="slide-up"
                data-sal-duration="1000"
                data-sal-easing="ease"
                class="row-three">
                    <div dangerouslySetInnerHTML={{ __html: post.node.WhatWeValue.valueFour }} />
                    <div dangerouslySetInnerHTML={{ __html: post.node.WhatWeValue.valueFive }} />
                    <div dangerouslySetInnerHTML={{ __html: post.node.WhatWeValue.valueSix }} />
                </div>
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

  const SectionOne = styled.div`
    > div {
      width: 100%;
      max-width: 1400px;
      margin: 0 auto;
      padding-bottom: 50px;
      border-bottom: 1px solid #fff;
    }
    p {
      font-family: "Kessel Light";
      color: #fff;
      line-height: 25px;
      font-size: 18px;
      text-align: center;
      &.values {
        span {
          color: rgb(210,35,42);
          font-size: 35px;
        }
      }
    }
    @media(max-width:767px) {
      > div {
        opacity: 1 !important;
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
    @media(max-width:550px) {
      p {
        br {
          display: none;
        }
      }
    }
  `

  const SectionTwo = styled.div`
    > div {
      width: 100%;
      max-width: 1400px;
      margin: 0 auto;
      padding-bottom: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    h2 {
      font-family: "Kessel Light";
      color: rgb(210,35,42);
      font-size: 40px;
      margin-top: 35px;
      font-weight: normal;
      text-align: center;
    }
    h3 {
      font-family: "Madelyn";
      font-size: 65px;
      color: #fff;
      margin-top: 25px;
      font-weight: normal;
      letter-spacing: 1px;
      line-height: 25px;
      margin-bottom: 0px;
    }
    p {
      font-family: "Kessel Light";
      font-size: 14px;
      color: #fff;
      letter-spacing: 1px;
    }
    .row-one {
      > div {
        text-align: center;
      }
    }
    .row-two {
      > div {
        width: 50%;
        text-align: center;
      }
    }
    .row-three {
      > div {
        width: 33.33%;
        text-align: center;
      }
    }
    @media(max-width:550px) {
      > div {
        flex-wrap: wrap;
        &.row-one {
          padding-bottom: 0;
        }
        &.row-two {
          padding-bottom: 0;
          > div {
            width: 100%;
          }
        }
        &.row-three {
          > div {
            width: 100%;
          }
        }
      }
    }
  `
  
  export default CoreValuesPage