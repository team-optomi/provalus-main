import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from "../../components/layout-v2"

const CoreValuesPage = () => {

    const data = useStaticQuery(graphql`
      query {
        allWpPage(filter: {databaseId: {eq: 164}}) {
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
  `
  
  export default CoreValuesPage