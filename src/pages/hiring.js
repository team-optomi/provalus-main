import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from "gatsby-image"

import Layout from "../components/layout-v2"
import SEO from "../components/seo"

const GrillChillPage = () => {

    const data = useStaticQuery(graphql`
      query {
        iconOne: file(relativePath: { eq: "Icons-01.png" }) {
            childImageSharp {
              fixed(width: 500, height: 500) {
                ...GatsbyImageSharpFixed
              }
            }
        }
        iconThree: file(relativePath: { eq: "Icons-03.png" }) {
            childImageSharp {
              fixed(width: 500, height: 500) {
                ...GatsbyImageSharpFixed
              }
            }
        }
        iconFour: file(relativePath: { eq: "Icons-04.png" }) {
            childImageSharp {
              fixed(width: 500, height: 500) {
                ...GatsbyImageSharpFixed
              }
            }
        }
        iconWheel: file(relativePath: { eq: "Prize Wheel-09.png" }) {
            childImageSharp {
              fixed(width: 500, height: 500) {
                ...GatsbyImageSharpFixed
              }
            }
        }
        allWpPage(filter: {databaseId: {eq: 2078}}) {
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
              grillChill {
                chillHeroBackground { 
                    title
                    localFile {
                        childImageSharp {
                            fluid(maxWidth: 1800) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
                chillHeroIcon { 
                    title
                    localFile {
                        childImageSharp {
                            fluid(maxWidth: 662) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
                chillRowOneContent
                chillRowTwoContent
                chillRowThreeContent
                chillRowFourContent
                chillRowFiveContent
                chillRowSixContent
                chillRowSevenContent
                chillRowEightContent
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
            <HeroSection>
                <div class="background">
                    <Img fluid={post.node.grillChill.chillHeroBackground.localFile.childImageSharp.fluid} alt={post.node.grillChill.chillHeroBackground.title} />
                </div>
                <div class="hero-icon">
                    <Img fluid={post.node.grillChill.chillHeroIcon.localFile.childImageSharp.fluid} alt={post.node.grillChill.chillHeroIcon.title} />
                </div>
                <div class="hero-banner">
                    <h1>Hiring Fair<span> | </span>Family Fun</h1>
                </div>
            </HeroSection>
           <MainSection>
               <div class="row-one row">
                    <Img fluid={data.iconThree.childImageSharp.fixed} />
                    <div dangerouslySetInnerHTML={{ __html: post.node.grillChill.chillRowOneContent }} />
               </div>
               <div class="row-two row">
                    <div dangerouslySetInnerHTML={{ __html: post.node.grillChill.chillRowTwoContent }} />
               </div>
               <div class="row-three row">
                    <div dangerouslySetInnerHTML={{ __html: post.node.grillChill.chillRowThreeContent }} />
               </div>
               <div class="row-four row">
                    <div dangerouslySetInnerHTML={{ __html: post.node.grillChill.chillRowFourContent }} />
               </div>
               <div class="row-five row">
                    <Img fluid={data.iconFour.childImageSharp.fixed} />
                    <div dangerouslySetInnerHTML={{ __html: post.node.grillChill.chillRowFiveContent }} />
               </div>
               <div class="row-six row">
                    <div dangerouslySetInnerHTML={{ __html: post.node.grillChill.chillRowSixContent }} />
                   <Img fluid={data.iconOne.childImageSharp.fixed} />
               </div>
               <div class="row-seven row">
                    <Img fluid={data.iconWheel.childImageSharp.fixed} />
                    <div dangerouslySetInnerHTML={{ __html: post.node.grillChill.chillRowSevenContent }} />
               </div>
               <div class="row-eight row">
                    <div dangerouslySetInnerHTML={{ __html: post.node.grillChill.chillRowEightContent }} />
               </div>
           </MainSection>
           
          </PageMain>
        </Layout>
      ))
    )
  
  }
  
  
  const PageMain = styled.div`
    width: 100%;
  `

  const HeroSection = styled.section`
    position: relative;
    height: 100vh;
    width: 100%;
    padding-top: 100px;
    .background {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100vh;
        .gatsby-image-wrapper {
            height: 100vh;
            width: 100%;
        }
        .img {
            height: 100vh;
            width: 100%;
        }
    }
    .hero-icon {
        max-width: 350px;
        width: 100%;
        margin: 0 auto;
    }
    .hero-banner {
        width: 100%;
        background-color: #d2232a99;
        padding: 60px 20px;
        position: relative;
        z-index: 1;
        margin-top: 50px;
        h1 {
            font-family: "Balboa Medium";
            width: 100%;
            text-align: center;
            margin: 0;
            text-transform: uppercase;
            font-size: 72px;
            letter-spacing: 10px;
            color: #fff;
            span {
                color: #000;
            }
        }
    }
    @media(max-width:1000px) {
        .hero-banner {
            h1 {
                font-size: 44px;
            }
        }
    }
    @media(max-width:767px) {
        padding-top: 150px;
        .hero-banner {
            h1 {
                font-size: 32px;
                letter-spacing: 3px;
            }
        }
    }
  `

  const MainSection = styled.section`
    padding: 0 20px;
    .row {
        max-width: 1200px;
        width: 100%;
        margin: 0 auto;
        border-bottom: 1px solid #d2232a;
        padding-bottom: 30px;
    }
    .row-one {
        text-align: center;
        .gatsby-image-wrapper {
            width: 200px;
            height: 200px;
            margin: 0 auto;
        }
        h2 {
            font-family: Madelyn;
            font-size: 200px;
            font-weight: 100;
            color: #d2232a;
            margin-top: -100px;
        }
        h3 {
            font-family: "Balboa Medium";
            font-size: 60px;
            letter-spacing: 3px;
            color: #fff;
            margin-top: 0px;
            span {
                color: #d2232a;
            }
        }
        h4 {
            font-family: "Kessel Light";
            color: #d2232a;
            font-size: 32px;
            letter-spacing: 1px;
            margin-top: 10px;
        }
        @media(max-width:1000px) {
            h2 {
                font-size: 140px;
                margin-top: -60px;
            }
            h3 {
                font-size: 44px;
            }
            h4 {
                font-size: 24px;
            }
        }
    }
    .row-two {
        padding-top: 200px;
        p:first-child {
            font-family: "Kessel Light";
            color: #fff;
            font-size: 32px;
            letter-spacing: 1px;
            text-align: center;
            position: relative;
            @media(max-width:1300px) {
                max-width: 900px;
                margin: 0 auto;
                margin-bottom: 40px;
            }
            span {
                font-family: Madelyn;
                font-size: 200px;
                font-weight: 100;
                position: absolute;
                top: -200px;
                left: -80px;  
                @media(max-width:1100px) {
                    font-size: 140px;
                    width: 100%;
                    left: 0;
                    top: -150px;
                }          
            }
        }
        p:last-child {
            font-family: "Kessel Light";
            color: #fff;
            letter-spacing: 5px;
            font-size: 50px;
            text-align: center;
            font-style: italic;
            span {
                font-family: "Balboa Medium";
                font-size: 44px;
                color: #d2232a;
                font-style: normal;
            }
        }
        @media(max-width:1000px) {
            p:last-child {
                font-size: 32px;
                span {
                    font-size: 32px;
                }
            }
        }
    }
    .row-three {
        padding-top: 30px;
        p {
            font-family: "Kessel Light";
            color: #fff;
            font-size: 36px;
            line-height: 1.1;
            &:last-child {
                text-align: center;
            }
        }
        @media(max-width:1000px) {
            p {
                text-align: center;
                font-size: 28px;
                line-height: 1.2;
            }
        }
    }
    .row-four {
        padding-top: 30px;
        p {
            font-family: "Balboa Medium";
            font-size: 76px;
            letter-spacing: 3px;
            line-height: 1.1;
            text-align: center;
            margin-bottom: 0px;
            color: #d2232a;
            span {
                color: #fff;
            }
        }
        @media(max-width:1000px) {
            p {
                font-size: 44px;
            }
        }
    }
    .row-five {
        padding-top: 30px;
        display: flex;
        .gatsby-image-wrapper {
            width: 300px;
            height: 300px;
        }
        h3 {
            font-family: Madelyn;
            font-size: 200px;
            font-weight: 100;
            color: #d2232a;
            position: relative;
            span {
                right: -200px;
                position: absolute;
                top: 115px;
            }
        }
        p {
            font-family: "Balboa Medium";
            font-size: 76px;
            letter-spacing: 3px;
            line-height: 1.1;
            text-align: center;
            margin-bottom: 0px;
            margin-top: 50px;
            color: #fff;
        }
        @media(max-width:1000px) {
            h3 {
                font-size: 100px;
                span {
                    right: -105px;
                    top: 60px;
                }
            }
            p {
                font-size: 44px;
            }
        }
        @media(max-width:767px) {
            flex-wrap: wrap;
            .gatsby-image-wrapper {
                margin-left: auto;
                margin-right: auto;
            }
            > div {
                width: 100%;
            }
            h3 {
                font-size: 70px;
                text-align: center;
                margin-bottom: 0px;
                span {
                    position: relative;
                    right: auto;
                    top: auto;
                }
            }
        }
    }
    .row-six {
        padding-top: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        .gatsby-image-wrapper {
            width: 300px;
            height: 300px;
        }
        p {
            font-family: "Kessel Light";
            color: #fff;
            font-size: 36px;
            line-height: 1;
            text-align: right;
            margin-left: 100px;
            span {
                font-family: Madelyn;
                font-size: 160px;
                font-weight: 100;
                color: #fff;
            }
        }
        @media(max-width:1000px) {
            p {
                font-size: 28px;
                margin-left: 20px;
                span {
                    font-size: 100px;
                }
            }
        }
        @media(max-width:767px) {
            flex-wrap: wrap;
            .gatsby-image-wrapper {
                margin-left: auto;
                margin-right: auto;
            }
            > div {
                width: 100%;
            }
            > div:first-child {
                order: 2;
            }
            > div:last-child {
                order: 1;
            }
            p {
                text-align: center;
                span {
                    font-size: 80px;
                }
            }
        }
    }
    .row-seven {
        padding-top: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        .gatsby-image-wrapper {
            width: 300px;
            height: 300px;
            margin-right: 100px;
        }
        h3 {
            font-family: "Balboa Medium";
            font-size: 44px;
            letter-spacing: 2px;
            line-height: 1.2;
            margin-bottom: 5px;
            color: #fff;
        }
        p {
            font-family: "Kessel Light";
            color: #fff;
            font-size: 32px;
            line-height: 1.2;
        }
        @media(max-width:1000px) {
            h3 {
                font-size: 32px;
            }
            p {
                font-size: 28px;
            }
        }
        @media(max-width:767px) {
            flex-wrap: wrap;
            .gatsby-image-wrapper {
                margin-left: auto;
                margin-right: auto;
            }
            > div {
                width: 100%;
            }
            h3 {
                text-align: center;
            }
            p {
                text-align: center;
            }
        }
    }
    .row-eight {
        padding-top: 60px;
        padding-bottom: 60px;
        position: relative;
        h2 {
            font-family: Madelyn;
            font-size: 100px;
            font-weight: 100;
            line-height: 1;
            color: #d2232a;
            margin-top: 40px;
            margin-bottom: 0px;
            width: 100%;
            text-align: right;
            position: relative;
        }
        h3 {
            font-family: "Balboa Medium";
            font-size: 66px;
            letter-spacing: 2px;
            line-height: 1.2;
            margin-top: -20px;
            color: #fff;
            text-align: center;
            position: relative;
        }
        &:before {
            content: '';
            position: absolute;
            top: 60px;
            left: -60px;
            width: 300px;
            height: 300px;
            background-color: #460c0f;
            border-radius: 50%;
        }
        @media(max-width:1000px) {
            h2 {
                font-size: 72px;
                text-align: center;
            }
            h3 {
                font-size: 44px;
                margin-top: 0px;
            }
        }
        @media(max-width:767px) {
            h2 {
                font-size: 60px;
            }
            h3 {
                font-size: 32px;
            }
        }
    }
  `

  export default GrillChillPage