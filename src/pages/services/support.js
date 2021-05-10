import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from "gatsby-image"

import Layout from "../../components/layout-v2"
import SupportCaseStudySlider from "../../components/support-case-study-slider"

const SupportPage = () => {

    const data = useStaticQuery(graphql`
      query {
        allWpPage(filter: {databaseId: {eq: 1327}}) {
          edges {
            node {
              title
              SupportPageContent {
                supportSectionOne
                supportSectionThree
                supportSectionTwo
                supportTopIcon {
                    title
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
            <HeaderSection>
                <h2>Service Offerings</h2>
                <hr/>
                <div>
                  <Img fluid={post.node.SupportPageContent.supportTopIcon.localFile.childImageSharp.fluid} alt={post.node.SupportPageContent.supportTopIcon.title} />
                  <h1>Support</h1>
                </div>
            </HeaderSection>
          <SectionOne>
            <div dangerouslySetInnerHTML={{ __html: post.node.SupportPageContent.supportSectionOne }}/>
          </SectionOne>
          <SectionTwo>
            <div dangerouslySetInnerHTML={{ __html: post.node.SupportPageContent.supportSectionTwo }}/>
          </SectionTwo>
          <SectionThree>
            <SupportCaseStudySlider />
          </SectionThree>
        </Layout>
      ))
    )
  
  }

const HeaderSection = styled.header`
  max-width: 1140px;
  padding: 0 20px;
  padding-top: 100px;
  margin: 0 auto;
  h2 {
    font-family: "Kessel Light";
    color: rgb(210,35,42);
    font-weight: 400;
    line-height: 1.2;
    font-size: 38px;
    text-transform: uppercase;
    margin-top: 0;
    margin-bottom: 10px;
    text-align: center;
  }
  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 40px;
    .gatsby-image-wrapper {
      max-width: 200px;
      width: 100%;
    }
    h1 {
      font-family: "Balboa Medium";
      color: #828587;
      font-size: 50px;
      line-height: 1;
      letter-spacing: 1px;
      text-transform: uppercase;
      text-align: center;
      margin-top: 0;
      margin-left: 20px;
      margin-bottom: 0;
    }
  }
`
  
const SectionOne = styled.section`
  max-width: 1140px;
  padding: 0 20px;
  margin: 40px auto;
  h2 {
    font-family: "Kessel Light";
    color: rgb(210,35,42);
    font-weight: 400;
    line-height: 1.2;
    font-size: 38px;
    text-transform: uppercase;
    margin-top: 0;
    margin-bottom: 10px;
  }
  p {
    font-family: "Kessel Light";
    line-height: 1.5;
    font-size: 18px;
    color: #fff;
    max-width: 650px;
    font-weight: 400;
    margin-bottom: 0;
  }
  .row-2 {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    padding-top: 60px;
    > div {
      &:first-child {
        width: 55%;
      }
      &:last-child {
        width: 45%;
        padding-left: 30px;
      }
    }
  }
`

const SectionTwo = styled.section`
  padding: 50px 20px;
  background-color: rgb(210,35,42);
  > div {
    max-width: 1140px;
    padding: 0 20px;
    margin: 0px auto;
    > div {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin-bottom: 10px;
      p {
        font-family: "Kessel Light";
        line-height: 1.5;
        font-size: 18px;
        color: #fff;
        font-weight: 400;
        margin-bottom: 0;
      }
      .gatsby-image-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        max-width: 30px;
        max-height: 30px;
        img {
          object-fit: contain !important;
          max-width: 30px;
          max-height: 30px;
        }
      }
    }
  }
`

const SectionThree = styled.section`
  max-width: 1140px;
  padding: 0 20px;
  margin: 80px auto;
  margin-bottom: 120px;
`
  
export default SupportPage