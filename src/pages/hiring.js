import React from "react"
import { useStaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'
import Img from "gatsby-image"

import Layout from "../components/layout-v2"
import SEO from "../components/seo"

const HiringV2Page = () => {

    const data = useStaticQuery(graphql`
      query {
        allWpPage(filter: {databaseId: {eq: 2490}}) {
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
              hiringTwo {
                h2BannerImage {
                  title
                  localFile {
                    childImageSharp {
                        fluid(maxWidth: 1920) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                  }
                }
                h2BannerContent
                h2SectionOneContent
                h2SectionTwoContent
                h2SectionTwoImage {
                  title
                  localFile {
                    childImageSharp {
                        fluid(maxWidth: 1000) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                  }
                }
                h2SectionThreeContent
                h2SectionThreeImage {
                  title
                  localFile {
                    childImageSharp {
                        fluid(maxWidth: 1000) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                  }
                }
                h2SectionFourContent
                h2SectionFiveTitle
                h2SectionFiveBackground {
                  title
                  localFile {
                    childImageSharp {
                        fluid(maxWidth: 1920) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                  }
                }
                h2HiringIcons {
                  h2IconTitle
                  h2Icon {
                    title
                    localFile {
                      childImageSharp {
                        fluid(maxWidth: 600) {
                            ...GatsbyImageSharpFluid
                        }
                      }
                    }
                  }
                }
                h2FormTitle
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
                <div 
                data-sal="fade"
                data-sal-duration="1000"
                data-sal-easing="ease"
                class="background">
                    <Img fluid={post.node.hiringTwo.h2BannerImage.localFile.childImageSharp.fluid} alt={post.node.hiringTwo.h2BannerImage.title} />
                </div>
                <div 
                data-sal="slide-up"
                data-sal-duration="1000"
                data-sal-easing="ease"
                class="hero-banner" dangerouslySetInnerHTML={{ __html: post.node.hiringTwo.h2BannerContent }} />
            </HeroSection>
           <MainSection>
               <div 
               data-sal="slide-up"
               data-sal-duration="1000"
               data-sal-easing="ease"
               class="row-one row">
                    <div dangerouslySetInnerHTML={{ __html: post.node.hiringTwo.h2SectionOneContent }} />
               </div>
               <div 
               data-sal="slide-up"
               data-sal-duration="1000"
               data-sal-easing="ease"
               class="row-two row">
                    <div class="row-two-content" dangerouslySetInnerHTML={{ __html: post.node.hiringTwo.h2SectionTwoContent }} />
                    <Img className={"row-two-image"} fluid={post.node.hiringTwo.h2SectionTwoImage.localFile.childImageSharp.fluid} alt={post.node.hiringTwo.h2SectionTwoImage.title} />
               </div>
               <div 
               data-sal="slide-up"
               data-sal-duration="1000"
               data-sal-easing="ease"
               class="row-three row">
                    <Img className={"row-three-image"} fluid={post.node.hiringTwo.h2SectionThreeImage.localFile.childImageSharp.fluid} alt={post.node.hiringTwo.h2SectionThreeImage.title} />
                    <div class="row-three-content" dangerouslySetInnerHTML={{ __html: post.node.hiringTwo.h2SectionThreeContent }} />
               </div>
               <div 
               data-sal="slide-up"
               data-sal-duration="1000"
               data-sal-easing="ease"
               class="row-four row">
                    <div dangerouslySetInnerHTML={{ __html: post.node.hiringTwo.h2SectionFourContent }} />
               </div>
               <div class="row-five row">
                    <div class="background">
                        <Img fluid={post.node.hiringTwo.h2SectionFiveBackground.localFile.childImageSharp.fluid} alt={post.node.hiringTwo.h2SectionFiveBackground.title} />
                    </div>
                    <div class="main-row">
                        <h2 
                        data-sal="slide-up"
                        data-sal-duration="1000"
                        data-sal-easing="ease"
                        dangerouslySetInnerHTML={{ __html: post.node.hiringTwo.h2SectionFiveTitle }} />
                        <div class="icon-row">
                            {post.node.hiringTwo.h2HiringIcons.map(iconSrc => (
                                <div 
                                data-sal="slide-up"
                                data-sal-duration="1000"
                                data-sal-easing="ease"
                                class="icon-col">
                                    <Img fluid={iconSrc.h2Icon.localFile.childImageSharp.fluid} alt={iconSrc.h2Icon.title} />
                                    <h3 dangerouslySetInnerHTML={{ __html: iconSrc.h2IconTitle }} />
                                </div>
                            ))}
                        </div>
                    </div>
               </div>
           </MainSection>
           <FormSection>
               <div dangerouslySetInnerHTML={{ __html: post.node.hiringTwo.h2FormTitle }} />
                <form name="Carolina Career Fair Registration" method="POST" netlify-honeypot="bot-field" action="/thank-you/" data-netlify="true">
                    <input type="hidden" name="form-name" value="Carolina Career Fair Registration" aria-label="Input" />
                    <p class="hidden">
                        <label>Don’t fill this out if you're human: <input name="bot-field" aria-label="Input" /></label>
                    </p>
                    <p class="full-row">
                        <label htmlFor="name">Full Name* <input type="text" name="name" aria-label="Input" required/></label>   
                    </p>
                    <p  class="full-row">
                        <label htmlFor="phone">Phone* <input type="text" name="phone" aria-label="Input" required/></label>   
                    </p>
                    <p class="full-row">
                        <label htmlFor="email">Email Address* <input type="email" name="email" aria-label="Input" required/></label>   
                    </p>
                    <p class="full-row">
                        <label htmlFor="address">Street Address* <input type="text" name="address" aria-label="Input" required/></label>
                    </p>
                    <p class="one-third">
                        <label htmlFor="city">City* <input type="text" name="city" aria-label="Input" required/></label>   
                    </p>
                    <p class="one-third">
                        <label htmlFor="state">State* <input type="text" name="state" aria-label="Input" required/></label>   
                    </p>
                    <p class="one-third">
                        <label htmlFor="zip">Zip* <input type="text" name="zip" aria-label="Input" required/></label>   
                    </p>
                    <p class="full-row">
                        <label htmlFor="your-message">DO YOU KNOW ANYONE CURRENTLY WORKING AT PROVALUS?
                            <textarea name="your-message" cols="40" rows="10" maxLength="140" minLength="0" aria-label="Input"/>
                        </label>   
                    </p>
                    <p class={"button"}>
                        <button type="submit" name="submit" class={"submit"}  aria-label="Send">Submit</button>
                    </p>
                </form>
                <div class="apply">
                    <h2><a href="/apply/" target="_blank">Apply Now</a></h2>
                </div>
           </FormSection>
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
    height: 550px;
    width: 100%;
    padding-top: 100px;
    .background {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 550px;
        .gatsby-image-wrapper {
            height: 550px;
            width: 100%;
        }
        .img {
            height: 550px;
            width: 100%;
        }
    }
    .hero-banner {
        width: 100%;
        height: 100%;
        padding: 20px;
        position: relative;
        z-index: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        transition-delay: 1.2s;
        h1 {
            font-family: "Balboa Medium";
            width: 100%;
            text-align: center;
            margin: 0;
            text-transform: uppercase;
            font-size: 100px;
            letter-spacing: 3px;
            line-height: 1;
            color: #d2232a;
            text-shadow: 3px 3px 6px rgba(0,0,0,.5);
        }
    }
    @media(max-width:1000px) {
        .hero-banner {
            h1 {
                font-size: 72px;
            }
        }
    }
    @media(max-width:767px) {
        padding-top: 150px;
        .hero-banner {
            h1 {
                font-size: 54px;
                letter-spacing: 3px;
            }
        }
    }
  `

  const MainSection = styled.section`
    .row {
        width: 100%;
        margin: 0 auto;
        padding-bottom: 30px;
    }
    .row-one {
        max-width: 1200px;
        text-align: center;
        padding: 0 20px;
        padding-bottom: 50px;
        .gatsby-image-wrapper {
            width: 200px !important;
            height: 200px;
            margin: 0 auto;
            margin-top: -100px;
        }
        h2 {
            font-family: Madelyn;
            font-size: 200px;
            font-weight: 100;
            color: #d2232a;
        }
        h3 {
            font-family: "Balboa Medium";
            font-size: 72px;
            letter-spacing: 5px;
            color: #fff;
            margin-top: -40px;
            span {
                color: #d2232a;
            }
        }
        h4 {
            font-family: "Balboa Medium";
            color: #fff;
            font-size: 44px;
            letter-spacing: 3px;
            margin-bottom: 10px;
        }
        p {
            font-family: "Kessel Light";
            color: #d2232a;
            font-size: 38px;
            font-weight: 700;
            letter-spacing: 1px;
            line-height: 1.4;
            a {
                color: #d2232a;
                text-decoration: none;
            }
        }
        @media(max-width:1000px) {
            h2 {
                font-size: 140px;
            }
            h3 {
                font-size: 44px;
            }
            h4 {
                font-size: 24px;
            }
        }
        @media(max-width:767px) {
            h3 {
                font-size: 24px;
            }
            p {
                font-size: 24px;
            }
        }
    }
    .row-two {
        display: flex;
        align-items: center;
        border-top: 1px solid #d2232a;
        padding-bottom: 0px;
        .row-two-content {
            width: 45%;
            padding: 50px;
            text-align: right;
            h2 {
                font-family: Madelyn;
                font-size: 200px;
                font-weight: 100;
                color: #fff;
                line-height: 1;
                margin-bottom: -40px;
                margin-top: 20px;
            }
            p {
                font-family: "Kessel Light";
                color: #fff;
                font-size: 28px;
                font-weight: 400;
                line-height: 1.3;
            }
        }
        .row-two-image {
            width: 55%;
            height: 100%;
            img {
                margin-bottom: 0px;
            }
        }
    }
    @media(max-width:1600px) {
        .row-two {
            .row-two-image {
                height: 500px;
            }
            .row-two-content {
                h2 {
                    font-size: 120px;
                    margin-bottom: 0px;
                }
                p {
                    font-size: 26px;
                }
            }
        }
    }
    @media(max-width:1400px) {
        .row-two {
            .row-two-content {
                padding: 35px;
                h2 {
                    font-size: 120px;
                    margin-bottom: 0px;
                }
                p {
                    font-size: 22px;
                }
            }
        }
    }
    @media(max-width:767px) {
        .row-two {
            flex-wrap: wrap;
            .row-two-content {
                width: 100%;
                padding: 35px;
                text-align: center;
                h2 {
                    text-align: center;
                }
                p {
                    text-align: center;
                }
            }
            .row-two-image {
                width: 100%;
                height: 350px;
            }
        }
    }
    .row-three {
        display: flex;
        align-items: center;
        padding-bottom: 0px;
        border-bottom: 1px solid #d2232a;
        overflow: hidden;
        .row-three-content {
            width: 45%;
            padding: 50px;
            h3 {
                span.red {
                    font-family: "Balboa Medium";
                    font-size: 48px;
                    letter-spacing: 3px;
                    color: #d2232a;
                }
                span.white-spaced {
                    font-family: "Kessel Light";
                    color: rgb(255, 255, 255);
                    letter-spacing: 10px;
                    font-size: 60px;
                    font-style: italic;
                }
            }
        }
        .row-three-image {
            width: 55%;
            height: 100%;
            margin-bottom: -2px;
            img {
                margin-bottom: 0px;
            }
        }
    }
    @media(max-width:1600px) {
        .row-three {
            .row-three-image {
                height: 500px;
            }
        }
    }
    @media(max-width:1400px) {
        .row-three {
            .row-three-content {
                padding: 35px;
                h3 {
                    span.red {
                        font-size: 42px;
                        letter-spacing: 3px;
                    }
                    span.white-spaced {
                        letter-spacing: 7px;
                        font-size: 50px;
                    } 
                }
            }
        }
    }
    @media(max-width:767px) {
        .row-three {
            flex-wrap: wrap;
            .row-three-content {
                order: 1;
                width: 100%;
                padding: 35px;
                text-align: center;
                h3 {
                    text-align: center;
                    span.white-spaced {
                        font-size: 32px;
                    }
                }
            }
            .row-three-image {
                order: 2;
                width: 100%;
                height: 350px;
            }
        }
    }
    .row-four {
        max-width: 1200px;
        text-align: center;
        padding: 50px 20px;
        h2 {
            font-family: "Balboa Medium";
            font-size: 54px;
            letter-spacing: 3px;
            color: #fff;
            text-align: center;
        }
        ul.job-openings {
            display: flex;
            flex-wrap: wrap;
            list-style: none;
            max-width: 800px;
            margin: 0 auto;
            margin-bottom: 70px;
            li {
                width: 50%;
                font-family: "Kessel Light";
                color: #fff;
                font-size: 32px;
                font-weight: 400;
                line-height: 1.3;
                text-align: left;
                margin-bottom: 0px;
                &:last-child {
                    font-weight: 700;
                }
            }
        }
        
    }
    @media(max-width:991px) {
        .row-four {
            ul.job-openings {
                li {
                    width: 100%;
                    text-align: center;
                }
            }
        }
    }
    @media(max-width:767px) {
        .row-four {
            h2 {
                font-size: 36px;
            }
            ul.job-openings {
                li {
                    font-size: 20px;
                }
            }
        }
    }
    .row-five {
        position: relative;
        padding-top: 30px;
        display: flex;
        border-top: 1px solid #d2232a;
        border-bottom: 1px solid #d2232a;
        .background {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 0;
            .gatsby-image-wrapper {
                height: 100%;
            }
        }
        .main-row {
            max-width: 1240px;
            width: 100%;
            padding: 0 20px;
            margin: 0 auto;
            position: relative;
            z-index: 1;
            h2 {
                font-family: Madelyn;
                font-size: 140px;
                font-weight: 100;
                color: #fff;
                line-height: 1;
                text-align: left;
                margin-bottom: 0px;
            }
            .icon-row {
                display: flex;
                > div {
                    width: 20%;
                    padding: 10px;
                    h3 {
                        font-family: "Kessel Light";
                        color: #fff;
                        font-size: 28px;
                        text-align: center;
                        font-weight: 100;
                        margin-top: 0px;
                    }
                    &:nth-child(1) {
                        transition-delay: .3s;
                    }
                    &:nth-child(2) {
                        transition-delay: .6s;
                    }
                    &:nth-child(3) {
                        transition-delay: .9s;
                    }
                    &:nth-child(4) {
                        transition-delay: 1.2s;
                    }
                    &:nth-child(5) {
                        transition-delay: 1.5s;
                    }
                }
            }
        }
    }
    @media(max-width:991px) {
        .row-five {
            .main-row {
                h2 {
                    text-align: center;
                }
                .icon-row {
                    flex-wrap: wrap;
                    justify-content: center;
                    > div {
                        width: 33.33%;
                        &:nth-child(1) {
                            transition-delay: .3s;
                        }
                        &:nth-child(2) {
                            transition-delay: .3s;
                        }
                        &:nth-child(3) {
                            transition-delay: .3s;
                        }
                        &:nth-child(4) {
                            transition-delay: .3s;
                        }
                        &:nth-child(5) {
                            transition-delay: .3s;
                        }
                    }
                }
            }
        }
    }
    @media(max-width:767px) {
        .row-five {
            .main-row {
                .icon-row {
                    > div {
                        width: 50%;
                        h3 {
                            font-size: 20px;
                            letter-spacing: 1px;
                        }
                    }
                }
            }
        }
    }
  `
 
const FormSection = styled.section`
    width: 100%;
    max-width: 1080px;
    margin: 0 auto;
    h2 {
        font-family: Madelyn;
        font-size: 160px;
        font-weight: 100;
        color: #d2232a;
        position: relative;
        max-width: 700px;
        margin: 50px auto;
        text-align: center;
        span {
            font-family: "Balboa Medium";
            font-size: 60px;
            letter-spacing: 3px;
            line-height: 1.1;
            text-align: center;
            margin-bottom: 0px;
            margin-top: 50px;
            color: #fff;
            position: absolute;
            right: -30px;
            bottom: -20px;
        }
    }
    div.apply {
        text-align: center;
        margin-bottom: 50px;
        h2 {
            margin-top: 0px;
            margin-bottom: 0px;
        }
        a {
            font-family: Madelyn;
            font-size: 90px;
            letter-spacing: 3px;
            line-height: 1.1;
            text-align: center;
            margin-bottom: 0px;
            margin-top: 50px;
            color: #d2232a;
            text-decoration: none;
        }
    }
    form {
        max-width: 800px;
        width: 100%;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 0 20px;
    }
    p {
    label {
        font-family: "Kessel Light";
        color: #fff;
        font-size: 20px;
        padding-bottom: 10px;
        padding-top: 22px;
        text-transform: uppercase;
        display: flex;
        flex-direction: column;
    }
    input,
    select,
    textarea {
        font-size: 22px;
        padding: 0 0.65em;
        color: #555;
        height: 60px;
        margin-top: 10px;
        outline: 0;
    }
    textarea {
        height: 300px;
        padding: 15px;
    }
    input[type="file"] {
        padding: 0;
        font-size: 16px;
        color: #fff;
    }
    &.button {
        text-align: center;
        width: 100%;
    }
    button[type="submit"] {
        font-family: "Kessel Light";
        color: rgb(255, 255, 255);
        font-size: 20px;
        text-align: center;
        font-weight: 400;
        padding: 10px 25px;
        padding-bottom: 8px;
        text-align: center;
        text-transform: uppercase;
        background-color: #d2232a;
        border: 1px solid #fff;
        border-radius: 10px;
        outline: 0;
        transition-duration: .3s;
        &:hover {
            cursor: pointer;
            background-color: #cc6e73;
        }
    }
    &.hidden {
        opacity: 0;
        position: absolute;
        top: 0;
        left: 0;
        height: 0;
        width: 0;
        z-index: -1;
    }
    &.two-thirds {
        width: calc(66.66% - 15px);
    }
    &.one-third {
        width: calc(33.33% - 15px);
    }
    &.one-half {
        width: 47.5%;
        margin-right: 5%;
        &.last {
        margin-right: 0;
        }
    }
    &.full-row {
        width: 100%;
    }
    }
    .optional {
    width: 100%;
    p {
        font-family: "Kessel Light";
        text-transform: uppercase;
        color: rgb(210,35,42);
        font-size: 24px;
        letter-spacing: 1px;
        font-weight: bold;
        padding-top: 20px;
        border-bottom: 1px solid;
        margin-bottom: 20px;
    }
    }
    @media(max-width:1000px) {
        h2 {
            font-size: 100px;
            span {
                position: relative;
                right: auto;
                top: auto;
                font-size: 36px;
            }
        }
        a {
            font-size: 36px;
        }
    form {
        p {
        &.two-thirds {
            width: 100%;
            margin-right: 0;
        }
        }
    }
    }
    @media(max-width:600px) {
    form {
        p {
        &.one-third {
            width: 100%;
            margin-right: 0;
        }
        &.one-half {
            width: 100%;
            margin-right: 0;
        }
        }
    }
    }
`

  export default HiringV2Page