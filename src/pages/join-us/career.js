import React from "react"
import { useStaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'
import Img from "gatsby-image"

import Layout from "../../components/layout-v2"
import SEO from "../../components/seo"
import CareerScrollingImages from "../../components/career-scrolling-images"
import CareerTestimonialSlider from "../../components/career-testimonial-slider"
import CareerScrollingBlog from "../../components/career-scrolling-blog"
import CareerMapSection from "../../components/career-map-section"

const CareerPage = () => {

    const data = useStaticQuery(graphql`
      query {
        allWpPage(filter: {databaseId: {eq: 2154}}) {
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
              CareerPage {
                careerOne
                careerTwo
                careerColOneIcon {
                  title
                  localFile {
                    childImageSharp {
                        fluid(maxWidth: 1920) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                  }
                }
                careerColOneContent
                careerColOneLink
                careerColTwoIcon {
                    title
                    localFile {
                      childImageSharp {
                          fluid(maxWidth: 1920) {
                              ...GatsbyImageSharpFluid_withWebp
                          }
                      }
                    }
                  }
                careerColTwoContent
                careerColTwoLink
                careerColThreeIcon {
                    title
                    localFile {
                      childImageSharp {
                          fluid(maxWidth: 1920) {
                              ...GatsbyImageSharpFluid_withWebp
                          }
                      }
                    }
                  }
                careerColThreeContent
                careerColThreeLink
                careerColFourIcon {
                    title
                    localFile {
                      childImageSharp {
                          fluid(maxWidth: 1920) {
                              ...GatsbyImageSharpFluid_withWebp
                          }
                      }
                    }
                  }
                careerColFourContent
                careerColFourLink
                careerGallerySection {
                    title
                    localFile {
                        childImageSharp {
                            fluid(maxWidth: 1920) {
                                ...GatsbyImageSharpFluid_withWebp
                            }
                        }
                    }
                }
                careerTestimonialsHeader
                careerTestimonialSection {
                    careerSingleTestimonial
                }
                careerLargeWordsHeader
                careerLargeWordSection {
                    careerWordImage {
                        title
                        localFile {
                            childImageSharp {
                                fluid(maxWidth: 1920) {
                                    ...GatsbyImageSharpFluid_withWebp
                                }
                            }
                        }
                    }
                }
                careerMilitarySection
                careerAwards {
                  careerAwardsRowLayout
                  careerAwardContent
                  careerAwardImage {
                    title
                    localFile {
                        childImageSharp {
                            fluid {
                                ...GatsbyImageSharpFluid_withWebp
                            }
                        }
                      }
                  }
                }
                careerBenefitsHeader
                careerBenefitsIcons {
                    careerBenefitsIcon {
                        title
                        localFile {
                            childImageSharp {
                                fluid(maxWidth: 1920) {
                                    ...GatsbyImageSharpFluid_withWebp
                                }
                            }
                        }
                    }
                    careerBenefitsIconLink
                    careerIconTitle
                }
                careerMapLocations {
                  careerMapIcon {
                    title
                    localFile {
                        childImageSharp {
                            fluid(maxWidth: 1920) {
                                ...GatsbyImageSharpFluid_withWebp
                            }
                        }
                    }
                  }
                  careerMapLocation
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
          <SEO 
          title={post.node.seo.title} 
          description={post.node.seo.metaDesc}
          metaImage={post.node.seo.opengraphImage.localFile.childImageSharp.fluid}
          />
          <SectionOne>
            <div 
              data-sal="slide-up"
              data-sal-duration="1000"
              data-sal-easing="ease"
              dangerouslySetInnerHTML={{ __html: post.node.CareerPage.careerOne }}/>
          </SectionOne>
          <SectionTwo>
            <div 
            data-sal="slide-up"
            data-sal-duration="1000"
            data-sal-easing="ease"
            class="section-two-header"
            dangerouslySetInnerHTML={{ __html: post.node.CareerPage.careerTwo }} />
              <div 
              data-sal="slide-up"
              data-sal-duration="1000"
              data-sal-easing="ease"
              class="one-fourth-col">
                <Link to={post.node.CareerPage.careerColOneLink}>
                  <div class="icon-block">
                      <Img className={"home-icon"} fluid={post.node.CareerPage.careerColOneIcon.localFile.childImageSharp.fluid} alt={post.node.CareerPage.careerColOneIcon.title} />
                  </div>
                  <div dangerouslySetInnerHTML={{ __html: post.node.CareerPage.careerColOneContent }} />
                </Link>
              </div>
              <div 
              data-sal="slide-up"
              data-sal-duration="1000"
              data-sal-easing="ease"
              class="one-fourth-col">
                <Link to={post.node.CareerPage.careerColTwoLink}>
                  <div class="icon-block">
                    <Img className={"home-icon"} fluid={post.node.CareerPage.careerColTwoIcon.localFile.childImageSharp.fluid} alt={post.node.CareerPage.careerColTwoIcon.title} />
                  </div>
                  <div dangerouslySetInnerHTML={{ __html: post.node.CareerPage.careerColTwoContent }} />
                </Link>
              </div>
              <div 
              data-sal="slide-up"
              data-sal-duration="1000"
              data-sal-easing="ease"
              class="one-fourth-col">
                <Link to={post.node.CareerPage.careerColThreeLink}>
                  <div class="icon-block">
                      <Img className={"home-icon"} fluid={post.node.CareerPage.careerColThreeIcon.localFile.childImageSharp.fluid} alt={post.node.CareerPage.careerColThreeIcon.title} />
                  </div>
                  <div dangerouslySetInnerHTML={{ __html: post.node.CareerPage.careerColThreeContent }} />
                </Link>
              </div>
              <div 
              data-sal="slide-up"
              data-sal-duration="1000"
              data-sal-easing="ease"
              class="one-fourth-col">
                <Link to={post.node.CareerPage.careerColFourLink}>
                  <div class="icon-block">
                      <Img className={"home-icon"} fluid={post.node.CareerPage.careerColFourIcon.localFile.childImageSharp.fluid} alt={post.node.CareerPage.careerColFourIcon.title} />
                  </div>
                  <div dangerouslySetInnerHTML={{ __html: post.node.CareerPage.careerColFourContent }} />
                </Link>
              </div>
          </SectionTwo>
          <ScrollingImages>
            <div
            data-sal="slide-up"
            data-sal-duration="1000"
            data-sal-easing="ease"
            >
              <CareerScrollingImages />
            </div>
          </ScrollingImages>
          <TestimonialSection>
            <div 
            data-sal="slide-up"
            data-sal-duration="1000"
            data-sal-easing="ease"
            class="testimonial-header" dangerouslySetInnerHTML={{ __html: post.node.CareerPage.careerTestimonialsHeader }} />
            <div
            data-sal="slide-up"
            data-sal-duration="1000"
            data-sal-easing="ease"
            >
              <CareerTestimonialSlider />
            </div>
          </TestimonialSection>
          <WordsSection>
            <div
            data-sal="slide-up"
            data-sal-duration="1000"
            data-sal-easing="ease"
            class="words-header" dangerouslySetInnerHTML={{ __html: post.node.CareerPage.careerLargeWordsHeader }} />
            <div class="words-relative">
              {post.node.CareerPage.careerLargeWordSection.map((imgSrc, i) => (
              <div 
              data-sal={i % 2 == 0 ? "slide-right" : "slide-left"}
              data-sal-duration="1000"
              data-sal-easing="ease"
              className={`word-image-${imgSrc.careerWordImage.title}`}>
                <Img fluid={imgSrc.careerWordImage.localFile.childImageSharp.fluid} alt={imgSrc.careerWordImage.title} />
              </div>
              ))}
            </div>
          </WordsSection>
          <BlogSection>
            <h2
            data-sal="slide-up"
            data-sal-duration="1000"
            data-sal-easing="ease"
            >OUR TEAM'S <span class="fancy">Stories</span></h2>
            <div
            data-sal="slide-up"
            data-sal-duration="1000"
            data-sal-easing="ease"
            >
            <CareerScrollingBlog />
            </div>
            <div
            data-sal="slide-up"
            data-sal-duration="1000"
            data-sal-easing="ease"
            class="blog-button">
              <a href='/career-blog/' target="_blank">See Blog</a>
            </div>
          </BlogSection>
          <MilitarySection>
            <div 
            data-sal="slide-up"
            data-sal-duration="1000"
            data-sal-easing="ease"
            class="military-content" dangerouslySetInnerHTML={{ __html: post.node.CareerPage.careerMilitarySection }} />
            <div class="awards-flex">
                {post.node.CareerPage.careerAwards.map(award => (
                    <div 
                    data-sal="fade"
                    data-sal-duration="1000"
                    data-sal-easing="ease"
                    className={`award-row-${award.careerAwardsRowLayout}`}>
                        <Img className={"award-image"} fluid={award.careerAwardImage.localFile.childImageSharp.fluid} alt={award.careerAwardImage.title} />
                        <div class="award-content" dangerouslySetInnerHTML={{ __html: award.careerAwardContent }} />
                    </div>
                ))}
            </div>
          </MilitarySection>
          <BenefitsSection>
            <div 
            data-sal="slide-up"
            data-sal-duration="1000"
            data-sal-easing="ease"
            class="benefits-content" dangerouslySetInnerHTML={{ __html: post.node.CareerPage.careerBenefitsHeader }} />
            <div class="benefits-flex">
              {post.node.CareerPage.careerBenefitsIcons.map(iconSrc => (
              <Link 
              data-sal="slide-up"
              data-sal-duration="1000"
              data-sal-easing="ease"
              to={iconSrc.careerBenefitsIconLink}>
                <Img fluid={iconSrc.careerBenefitsIcon.localFile.childImageSharp.fluid} alt={iconSrc.careerBenefitsIcon.title} />
                <p class="tooltip">{iconSrc.careerIconTitle}</p>
              </Link>
              ))}
            </div>
          </BenefitsSection>
          <CareerMapSection />
        </Layout>
      ))
    )
  
  }
  
const SectionOne = styled.section`
  padding: 150px 20px 0px;
  > div {
    max-width: 750px;
    width: 100%;
    margin: 0 auto;
    h1 {
      font-family: Madelyn;
      font-size: 172px;
      font-weight: normal;
      text-transform: lowercase;
      line-height: 35px;
      color: rgb(210, 35, 42);
      text-align: center;
      position: relative;
      margin-bottom: 100px;
    }
    p {
      font-family: "Kessel Light";
      line-height: 1.5;
      font-size: 26px;
      color: rgb(255, 255, 255);
      text-align: center;
      span.fancy {
        font-family: Madelyn;
        font-size: 40px;
        line-height: 0;
        color: rgb(210, 35, 42);
      }
    }
  }
  @media(max-width:620px) {
    > div {
      h1 {
        font-size: 100px;
        margin-bottom: 50px;
      }
    }
  }
`

const SectionTwo = styled.section`
  max-width: 1340px;
  padding: 0 20px;
  margin: 50px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  .section-two-header {
    width: 100%;
  }
  h2 {
    font-family: "Kessel Light";
    color: rgb(210,35,42);
    font-weight: 400;
    line-height: 1.2;
    font-size: 38px;
    text-transform: uppercase;
    margin-bottom: 35px;
    width: 100%;
    text-align: center;
  }
  a {
    text-decoration: none;
  }
  .one-fourth-col {
    width: 25%;
    padding: 0 35px;
    border-right: 2px solid #aaa;
    &:nth-child(2) {
      padding-left: 0;
    }
    &:nth-child(4) {
      padding-bottom: 62px;
    }
    &:last-child {
      padding-right: 0;
      border-right: none;
    }
    .icon-block {
      height: 200px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      a {
        display: flex;
        height: 100%;
        width: 100%;
        justify-content: center;
        align-items: center;
      }
      .home-icon {
        width: 100%;
        max-height: 150px;
        img {
          object-fit: contain !important;
        }
      }
    }
    h3 {
      font-family: "Balboa Medium";
      color: #828587;
      font-size: 30px;
      line-height: 1;
      letter-spacing: 1px;
      text-transform: uppercase;
      text-align: center;
      margin-bottom: 0;
    }
    p {
      font-family: "Kessel Light";
      line-height: 1.5;
      font-size: 14px;
      color: #fff;
      max-width: 650px;
      font-weight: 400;
      margin-bottom: 0;
      text-align: center;
    }
  }
  @media(max-width:1160px) {
    max-width: 800px;
    .one-fourth-col {
      width: 50%;
      padding: 0 35px !important;
      border-right: none;
      margin-bottom: 35px;
      .icon-block {
        height: 100px;
        .home-icon {
          max-height: 100px;
          max-width: 200px;
        }
      }
    }
  }
  @media(max-width:767px) {
    max-width: 700px;
    width: 100%;
    .one-fourth-col {
      width: 100%;
      padding: 0 20px !important;
    }
  }
  @media(max-width:767px) {
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

const ScrollingImages = styled.section`
  padding-top: 50px;
`

const TestimonialSection = styled.section`
  padding: 20px;
  .testimonial-header {
    h2 {
      font-family: "Kessel Light";
      color: rgb(255, 255, 255);
      font-size: 32px;
      font-weight: 100;
      letter-spacing: 2px;
      line-height: 1.1;
      text-align: center;
      margin-bottom: 0px;
      span.fancy {
        font-family: Madelyn;
        font-size: 100px;
        line-height: 1;
        color: rgb(210, 35, 42);
      }
    }
  }
  @media(max-width:700px) {
    .testimonial-header {
      h2 {
        font-size: 24px;
      }
    }
  }
`

const WordsSection = styled.section`
  padding: 20px;
  .words-header {
    h2 {
      font-family: "Kessel Light";
      color: rgb(255, 255, 255);
      font-size: 32px;
      font-weight: 100;
      letter-spacing: 2px;
      line-height: 1.1;
      text-align: center;
      margin-bottom: 50px;
      span.fancy {
        font-family: Madelyn;
        font-size: 100px;
        line-height: 0;
        color: rgb(210, 35, 42);
      }
    }
  }
  .words-relative {
    position: relative;
    max-width: 1200px;
    width: 100%;
    height: 550px;
    margin: 0 auto;
  }
  .word-image-dedicated {
    position: absolute;
    max-width: 745px;
    width: 100%;
    top: 0;
    left: 30px;
    transition-delay: .3s;
  }
  .word-image-innovative {
    position: absolute;
    max-width: 470px;
    width: 100%;
    top: 27px;
    right: 60px;
    transition-delay: .6s;
  }
  .word-image-respectful {
    position: absolute;
    max-width: 470px;
    width: 100%;
    top: 154px;
    left: 137px;
    transition-delay: .9s;
  }
  .word-image-connected {
    position: absolute;
    max-width: 688px;
    width: 100%;
    top: 229px;
    right: 0px;
    transition-delay: 1.2s;
  }
  .word-image-passionate {
    position: absolute;
    max-width: 716px;
    width: 100%;
    top: 271px;
    left: 0px;
    transition-delay: 1.5s;
  }
  .word-image-genuine {
    position: absolute;
    max-width: 335px;
    width: 100%;
    top: 294px;
    right: 90px;
    transition-delay: 1.8s;
  }
  @media(max-width:1260px) {
    .words-relative {
      max-width: 1000px;
      height: 350px;
    }
    .word-image-dedicated {
      max-width: 550px;
      top: -25px;
    }
    .word-image-innovative {
      max-width: 438px;
      top: -2px;
    }
    .word-image-respectful {
      max-width: 330px;
      top: 109px;
      left: 108px;
    }
    .word-image-connected {
      max-width: 628px;
      top: 151px;
    }
    .word-image-passionate {
      max-width: 543px;
      top: 197px;
    }
    .word-image-genuine {
      max-width: 282px;
      top: 214px;
    }
  }
  @media(max-width:1060px) {
    .words-relative {
      max-width: 800px;
      height: 250px;
    }
    .word-image-dedicated {
      max-width: 450px;
      top: -25px;
    }
    .word-image-innovative {
      max-width: 321px;
      top: -2px;
    }
    .word-image-respectful {
      max-width: 257px;
      top: 75px;
      left: 108px;
    }
    .word-image-connected {
      max-width: 489px;
      top: 105px;
    }
    .word-image-passionate {
      max-width: 446px;
      top: 139px;
    }
    .word-image-genuine {
      max-width: 195px;
      top: 156px;
      right: 78px;
    }
  }
  @media(max-width:860px) {
    .words-relative {
      max-width: 600px;
      height: 190px;
    }
    .word-image-dedicated {
      max-width: 350px;
      top: -25px;
    }
    .word-image-innovative {
      max-width: 258px;
      top: -10px;
      right: 10px;
    }
    .word-image-respectful {
      max-width: 210px;
      top: 50px;
      left: 86px;
    }
    .word-image-connected {
      max-width: 345px;
      top: 76px;
    }
    .word-image-passionate {
      max-width: 356px;
      top: 97px;
    }
    .word-image-genuine {
      max-width: 155px;
      top: 111px;
      right: 50px;
    }
  }
  @media(max-width:767px) {
    .words-relative {
      max-width: 100%;
      height: auto;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .word-image-dedicated {
      position: relative;
      max-width: 350px;
      left: auto;
      top: auto;;
    }
    .word-image-innovative {
      position: relative;
      max-width: 258px;
      top: auto;
      right: auto;
      margin-bottom: 20px;
    }
    .word-image-respectful {
      position: relative;
      max-width: 210px;
      top: auto;
      left: auto;
      margin-bottom: 20px;
    }
    .word-image-connected {
      position: relative;
      max-width: 345px;
      right: auto;
      top: auto;
    }
    .word-image-passionate {
      position: relative;
      max-width: 356px;
      top: auto;
      left: auto;
      margin-bottom: -40px;
    }
    .word-image-genuine {
      position: relative;
      max-width: 155px;
      top: auto;
      right: auto;
    }
  }
`

const BlogSection = styled.section`
  h2 {
    font-family: "Kessel Light";
    color: rgb(255, 255, 255);
    font-size: 32px;
    font-weight: 100;
    letter-spacing: 2px;
    line-height: 1.1;
    text-align: center;
    margin-bottom: 0px;
    span.fancy {
      font-family: Madelyn;
      font-size: 100px;
      line-height: 1;
    }
  }
  .blog-button {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    a {
      font-family: "Kessel Light";
      color: #fff;
      background-color: rgb(210,35,42);
      padding: 10px 20px;
      border: 2px solid #fff;
      letter-spacing: 1px;
      text-transform: uppercase;
      text-decoration: none;
      border-radius: 10px;
    }
  }
`

const MilitarySection = styled.section`
  padding: 50px 20px;
  width: 100%;
  max-width: 1170px;
  margin: 0 auto;
  h2 {
    color: #fff;
    font-family: Madelyn;
    font-weight: 100;
    font-size: 100px;
    line-height: 1;
  }
  .awards-flex {
    p {
        font-family: "Kessel Light";
        line-height: 1.5;
        padding-top: 0px;
        font-size: 18px;
        color: #fff;
        margin-bottom: 0;
    }
    .award-row-image-left {
        display: flex;
        align-items: center;
        margin-bottom: 30px;
        .award-image {
            width: 250px;
            order: 1;
        }
        .award-content {
            order: 2;
            width: calc(100% - 250px);
            padding-left: 30px;
        }
    }
    .award-row-image-right {
        display: flex;
        align-items: center;
        margin-bottom: 30px;
        .award-image {
            width: 250px;
            order: 2;
        }
        .award-content {
            order: 1;
            width: calc(100% - 250px);
            padding-right: 30px;
        }
    }
    .award-row-full-width {
        .award-image {
            margin-bottom: 30px;
        }
        .award-content {
            margin-bottom: 30px;
        }
    }
}
@media(max-width: 767px) {
    .awards-flex {
        .award-row-image-left {
            flex-direction: column;
            justify-content: center;
            .award-image {
                margin-bottom: 30px;
            }
            .award-content {
                width: 100%;
                padding-left: 0;
            }
        }
        .award-row-image-right {
            flex-direction: column;
            justify-content: center;

            .award-image {
                order: 1;
                margin-bottom: 30px;
            }
            .award-content {
                order: 2;
                width: 100%;
                padding-right: 0;
            }
        }
    }
}
  
  .mil-flex-row {
    max-width: 1360px;
    width: 100%;
    margin: 0 auto;
    margin-bottom: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    .left-col {
      width: 55%;
      padding-right: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      p:last-child {
        width: 50%;
        margin-left: 30px;
      }
    }
    .right-col {
      width: 45%;
      padding-left: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      p:last-child {
        width: 50%;
        margin-left: 30px;
      }
    }
    p {
      font-family: "Kessel Light";
      color: #fff;
      font-size: 12px;
      margin: 0;
    }
  }
  .mil-bottom-row {
    max-width: 1260px;
    width: 100%;
    margin: 0 auto;
    p {
      font-family: "Kessel Light";
      color: #fff;
      font-size: 12px;
      margin: 0;
    }
    .gatsby-image-wrapper {
      display: block;
      margin: 0 auto;
      margin-bottom: 20px;
      img {
        object-fit: contain !important;
      }
    }
  }
  @media(max-width:1160px) {
    .mil-flex-row {
      flex-wrap: wrap;
      .left-col {
        width: 100%;
        padding-right: 0px;
        margin-bottom: 35px;
      }
      .right-col {
        width: 100%;
        padding-left: 0px;
      }
    }
  }
  @media(max-width:767px) {
    .mil-flex-row {
      .left-col {
        flex-direction: column;
        .gatsby-image-wrapper {
          margin-bottom: 20px;
        }
        p {
          width: 100% !important;
          margin-left: 0 !important;
        }
      }
      .right-col {
        flex-direction: column;
        .gatsby-image-wrapper {
          margin-bottom: 20px;
        }
        p {
          width: 100% !important;
          margin-left: 0 !important;
        }
      }
    }
  }
`

const BenefitsSection = styled.section`
  background-color: rgb(210,35,42);
  padding: 20px;
  padding-bottom: 60px;
  h2 {
    font-family: "Kessel Light";
    color: rgb(255, 255, 255);
    font-size: 32px;
    font-weight: 100;
    letter-spacing: 2px;
    line-height: 2;
    text-align: center;
    margin-bottom: 50px;
    span.fancy {
      font-family: Madelyn;
      font-size: 100px;
      line-height: 0;
    }
  }
  .benefits-flex {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    > a {
      position: relative;
      width: 20%;
      color: #fff;
      text-decoration: none;
      p.tooltip {
        position: absolute;
        top: -50px;
        left: 0;
        width: 100%;
        height: auto;
        font-family: "Kessel Light";
        font-weight: 700;
        letter-spacing: 1px;
        text-align: center;
        padding: 20px;
        background-color: #8e9191;
        border-radius: 10px;
        opacity: 0;
        transition-duration: .3s;
        &:after {
          content: '';
          position: absolute;
          bottom: -50px;
          left: calc(50% - 25px);
          width: 50px;
          height: 50px;
          border-top: 25px solid #8e9191;
          border-left: 25px solid transparent;
          border-right: 25px solid transparent;
        }
      }
      &:hover {
        p.tooltip {
          opacity: 1;
        }
      }
    }
  }
  @media(max-width:767px) {
    h2 {
      font-size: 24px;
      span.fancy {
        font-size: 72px;
      }
    }
    .benefits-flex {
      flex-wrap: wrap;
      > a {
        width: 33.33%;
      }
    }
  }
  @media(max-width:420px) {
    .benefits-flex {
      > a {
        width: 50%;
      }
    }
  }
`
  
export default CareerPage