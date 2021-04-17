import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from "gatsby-image"

import Layout from "../components/layout-v2"

import ReactPlayer from 'react-player'
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

const HiringHeroesPage = () => {

    const data = useStaticQuery(graphql`
      query {
        arrowImage: file(relativePath: { eq: "arrow.png" }) {
          childImageSharp {
            fixed(width: 69, height: 69) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        allWpPage(filter: {databaseId: {eq: 89}}) {
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
              HiringHeroesContent {
                  hhSectionOne {
                      hhSectionTitle
                      hhPopulationNumber
                  }
                  hhSectionTwo {
                      armyPopulation
                      armyIcon { 
                        localFile {
                            childImageSharp {
                                fluid(maxWidth: 160) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                      }
                      navyPopulation
                      navyIcon {
                        localFile {
                            childImageSharp {
                                fluid(maxWidth: 145) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                      }
                      airForcePopulation
                      airForceIcon {
                        localFile {
                            childImageSharp {
                                fluid(maxWidth: 166) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                      }
                      marinesPopulation
                      marinesIcon {
                        localFile {
                            childImageSharp {
                                fluid(maxWidth: 201) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                      }
                  }
                  hhSectionThree {
                      hhThreeContent
                  }
                  hhSectionFour {
                    internshipImage {
                      localFile {
                          childImageSharp {
                              fluid(maxWidth: 431) {
                                  ...GatsbyImageSharpFluid
                              }
                          }
                      }
                    }
                    internshipNumber
                    internshipContent
                  }
                  hhSectionFive {
                    centersMap
                    centersColumnOne
                    centersColumnTwo
                    centersColumnThree
                    centersColumnFour
                  }
                  hhSectionSix {
                    arrowOne
                    arrowTwo
                    arrowThree
                  }
                  hhSectionSeven {
                    applyContent
                    contactInfo
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
          <PageMain>
            <h1>Hiring <span>Heroes</span></h1>
            <VideoSection>
              <ReactPlayer 
                className={'react-player'}
                url={'https://fast.wistia.net/embed/iframe/j9xeiqyw81'} 
                playing={true}
                loop={true}
                width='100%'
                height='650px'
              />
            </VideoSection>
            <SectionOne>
                <h2 
                data-sal="fade"
                data-sal-duration="1000"
                data-sal-easing="ease"
                dangerouslySetInnerHTML={{ __html: post.node.HiringHeroesContent.hhSectionOne.hhSectionTitle }} />
                <PopSection>
                  <PopLeft
                  data-sal="slide-right"
                  data-sal-duration="1000"
                  data-sal-easing="ease"
                  >
                    <p><span>Our veteran</span> population:</p>
                    <div class="arrow-line"><Img fluid={data.arrowImage.childImageSharp.fixed} /></div>
                  </PopLeft>
                  <PopRight
                  data-sal="slide-left"
                  data-sal-duration="1000"
                  data-sal-easing="ease"
                  >
                    <CountUp end={post.node.HiringHeroesContent.hhSectionOne.hhPopulationNumber} redraw={true}>
                      {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                          <p><span ref={countUpRef} />%</p>
                        </VisibilitySensor>
                      )}
                    </CountUp>
                  </PopRight>
                </PopSection>
            </SectionOne>
            <SectionTwo>
                <div 
                data-sal="slide-down"
                data-sal-duration="1000"
                data-sal-easing="ease"
                class="four-col">
                    <CountUp end={post.node.HiringHeroesContent.hhSectionTwo.armyPopulation} redraw={true}>
                      {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                          <h3><span ref={countUpRef} />%</h3>
                        </VisibilitySensor>
                      )}
                    </CountUp>
                    <Img fluid={post.node.HiringHeroesContent.hhSectionTwo.armyIcon.localFile.childImageSharp.fluid} alt={"Army Icon"} />
                    <h4>Army</h4>
                </div>
                <div 
                data-sal="slide-down"
                data-sal-duration="1000"
                data-sal-easing="ease"
                class="four-col">
                    <CountUp end={post.node.HiringHeroesContent.hhSectionTwo.navyPopulation} redraw={true}>
                      {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                          <h3><span ref={countUpRef} />%</h3>
                        </VisibilitySensor>
                      )}
                    </CountUp>
                    <Img fluid={post.node.HiringHeroesContent.hhSectionTwo.navyIcon.localFile.childImageSharp.fluid} alt={"Navy Icon"} />
                    <h4>Navy</h4>
                </div>
                <div 
                data-sal="slide-down"
                data-sal-duration="1000"
                data-sal-easing="ease"
                class="four-col">
                    <CountUp end={post.node.HiringHeroesContent.hhSectionTwo.airForcePopulation} redraw={true}>
                      {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                          <h3><span ref={countUpRef} />%</h3>
                        </VisibilitySensor>
                      )}
                    </CountUp>
                    <Img fluid={post.node.HiringHeroesContent.hhSectionTwo.airForceIcon.localFile.childImageSharp.fluid} alt={"Air Force Icon"} />
                    <h4>Air Force</h4>
                </div>
                <div 
                data-sal="slide-down"
                data-sal-duration="1000"
                data-sal-easing="ease"
                class="four-col">
                    <CountUp end={post.node.HiringHeroesContent.hhSectionTwo.marinesPopulation} redraw={true}>
                      {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                          <h3><span ref={countUpRef} />%</h3>
                        </VisibilitySensor>
                      )}
                    </CountUp>
                    <Img fluid={post.node.HiringHeroesContent.hhSectionTwo.marinesIcon.localFile.childImageSharp.fluid} alt={"Marines Icon"} />
                    <h4>Marines</h4>
                </div>
            </SectionTwo>
            <SectionThree>
                <div 
                data-sal="slide-up"
                data-sal-duration="1000"
                data-sal-easing="ease"
                dangerouslySetInnerHTML={{ __html: post.node.HiringHeroesContent.hhSectionThree.hhThreeContent }} />
            </SectionThree>
            <SectionFour>
                <InternSection>
                  <LeftBox
                  data-sal="slide-right"
                  data-sal-duration="1000"
                  data-sal-easing="ease"
                  >
                    <Img fluid={post.node.HiringHeroesContent.hhSectionFour.internshipImage.localFile.childImageSharp.fluid} alt={"Interns"} />
                      <CountUp end={post.node.HiringHeroesContent.hhSectionFour.internshipNumber} redraw={true}>
                        {({ countUpRef, start }) => (
                          <VisibilitySensor onChange={start} delayedCall>
                            <h3><span ref={countUpRef} /><span>%</span></h3>
                          </VisibilitySensor>
                        )}
                      </CountUp>
                  </LeftBox>
                  <RightBox
                  data-sal="slide-left"
                  data-sal-duration="1000"
                  data-sal-easing="ease"
                  >
                    <div class="arrow-line"><Img fluid={data.arrowImage.childImageSharp.fixed} /></div>
                    <div dangerouslySetInnerHTML={{ __html: post.node.HiringHeroesContent.hhSectionFour.internshipContent }} />
                  </RightBox>
                </InternSection>
            </SectionFour>
            <SectionFive>
              <div class="s5-main">
                <div 
                data-sal="slide-up"
                data-sal-duration="1000"
                data-sal-easing="ease"
                dangerouslySetInnerHTML={{ __html: post.node.HiringHeroesContent.hhSectionFive.centersMap }} />
                <div 
                data-sal="slide-right"
                data-sal-duration="1000"
                data-sal-easing="ease"
                class="half-col" dangerouslySetInnerHTML={{ __html: post.node.HiringHeroesContent.hhSectionFive.centersColumnOne }} />
                <div 
                data-sal="slide-left"
                data-sal-duration="1000"
                data-sal-easing="ease"
                class="half-col" dangerouslySetInnerHTML={{ __html: post.node.HiringHeroesContent.hhSectionFive.centersColumnTwo }} />
                <div 
                data-sal="slide-right"
                data-sal-duration="1000"
                data-sal-easing="ease"
                class="half-col" dangerouslySetInnerHTML={{ __html: post.node.HiringHeroesContent.hhSectionFive.centersColumnThree }} />
                <div 
                data-sal="slide-left"
                data-sal-duration="1000"
                data-sal-easing="ease"
                class="half-col" dangerouslySetInnerHTML={{ __html: post.node.HiringHeroesContent.hhSectionFive.centersColumnFour }} />
              </div>
            </SectionFive>
            <SectionSix>
              <div 
              data-sal="slide-left"
              data-sal-duration="1000"
              data-sal-easing="ease"
              class="arrow-row arrow-row-one"><div class="arrow-line"><Img fluid={data.arrowImage.childImageSharp.fixed} /><p>{post.node.HiringHeroesContent.hhSectionSix.arrowOne}</p></div></div>
              <div 
              data-sal="slide-right"
              data-sal-duration="1000"
              data-sal-easing="ease"
              class="arrow-row arrow-row-two"><div class="arrow-line"><Img fluid={data.arrowImage.childImageSharp.fixed} /><p>{post.node.HiringHeroesContent.hhSectionSix.arrowTwo}</p></div></div>
              <div 
              data-sal="slide-left"
              data-sal-duration="1000"
              data-sal-easing="ease"
              class="arrow-row arrow-row-three"><div class="arrow-line"><Img fluid={data.arrowImage.childImageSharp.fixed} /><p>{post.node.HiringHeroesContent.hhSectionSix.arrowThree}</p></div></div>
            </SectionSix>
            <SectionSeven>
              <div class="s7-main">
                <div dangerouslySetInnerHTML={{ __html: post.node.HiringHeroesContent.hhSectionSeven.applyContent }} />
              </div>
              <div class="s7-contact">
                <div dangerouslySetInnerHTML={{ __html: post.node.HiringHeroesContent.hhSectionSeven.contactInfo }} />
              </div>
            </SectionSeven>
          </PageMain>
        </Layout>
      ))
    )
  
  }
  
  
  const PageMain = styled.div`
    width: 100%;
    padding: 200px 0;
    h1 {
      font-family: "Balboa Medium";
      font-size: 170px;
      text-transform: uppercase;
      vertical-align: middle;
      font-weight: normal;
      color: #fff;
      text-align: center;
      span {
        font-family: "Madelyn";
        font-size: 400px;
        font-weight: 100;
        margin-left: -20px;
        line-height: 200px;
        text-transform: capitalize;
      }
    }
    .countup-number {
      color: #fff;
    }
  `

  const VideoSection = styled.section`
    max-width: 1000px;
    width: 100%;
    margin: 50px auto;
    margin-bottom: 100px;
  `
  
  const SectionOne = styled.section`
    background-color: #231f20;
    padding: 35px 0;
    padding-bottom: 70px;
    h2 {
      font-family: "Kessel Light";
      color: #25408f;
      font-weight: bold;
      font-size: 50px;
      text-align: center;
      max-width: 1200px;
      width: 88%;
      margin: 20px auto;
      margin-bottom: 80px;
      span {
        font-family: "Madelyn";
        font-weight: 100;
        font-size: 110px;
        line-height: 1;
      }
    }
    
  `

  const PopSection = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-end;
  `

  const PopLeft = styled.div`
    position: relative;
    width: 58.4%;
    background-color: rgb(37, 64, 143);
    padding: 20px 0;
    margin-bottom: 100px;
    margin-right: -4%;
    p {
      font-family: "Kessel Light";
      font-size: 87px;
      font-weight: bold;
      color: #fff;
      line-height: 0;
      max-width: 500px;
      height: 200px;
      margin-bottom: 0;
      margin-left: auto;
      margin-right: 120px;
      span {
        font-family: "Madelyn";
        font-weight: 100;
        font-size: 150px;
        line-height: 1;
        margin-bottom: -87px;
      }
    }
    .arrow-line {
      border: 5px solid #25408f;
      width: 500px;
      height: 40px;
      position: absolute;
      border-top-width: 0px;
      border-right-width: 0px;
      right: 140px;
      bottom: -40px;
      .gatsby-image-wrapper {
        width: 44px;
        height: 44px;
        position: absolute !important;
        right: -40px;
        top: 15px;
      }
    }
  `

  const PopRight = styled.div`
    border-style: solid;
    border-width: 5px 0px 5px 5px;
    border-color: rgb(37, 64, 143);
    width: 45%;
    height: 190px;
    padding: 35px 15px 15px 100px;
    display: flex;
    align-items: center;
    p {
      font-family: "Balboa Medium";
      color: #fff;
      font-size: 100px;
      line-height: 1;
      margin-bottom: 0;
    }
  `

  const SectionTwo = styled.section`
    background-color: #161614;
    padding: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    .four-col {
        width: 25%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        h3 {
          font-family: "Balboa Medium";
          color: #fff;
          font-size: 100px;
          line-height: 1;
          letter-spacing: 3px;
          margin-top: 0;
          margin-bottom: 20px;
        }
        .gatsby-image-wrapper {
          max-height: 125px;
          width: 100%;
          img {
            object-fit: contain !important;

          }
        }
        h4 {
          font-family: "Balboa Medium";
          color: #fff;
          font-size: 30px;
          line-height: 1;
          letter-spacing: 1px;
          margin-top: 20px;
          margin-bottom: 0;
          text-transform: uppercase;
        }
    }
  `

  const SectionThree = styled.section`
    background-color: #1f1e1d;
    padding: 45px 0;
    > div {
      max-width: 1200px;
      width: 88%;
      margin: 0 auto;
      h2 {
        font-family: "Balboa Medium";
        color: #25408f;
        letter-spacing: 3px;
        font-size: 50px;
        line-height: 1.2;
        margin-top: 35px;
        margin-bottom: 35px;
      }
      p {
        font-family: "Kessel Light";
        color: #25408f;
        font-size: 40px;
        color: #25408f;
        font-weight: 600;
        letter-spacing: 3px;
      }
      .gatsby-image-wrapper {
        max-width: 720px !important;
        width: 100% !important;
        height: 160px;
        margin: 0 auto;
        margin-bottom: 35px;
        display: block;
        img {
          object-fit: contain !important;
        }
      }
    }
  `

  const SectionFour = styled.section`
    background-color: #231f20;
    padding: 45px 0;
  `

  const InternSection = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
  `

  const LeftBox = styled.div`
    border-style: solid;
    border-width: 5px 5px 5px 0px;
    border-color: rgb(37, 64, 143);
    width: 45%;
    height: 220px;
    padding: 35px 15px 15px 100px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .gatsby-image-wrapper {
      width: 100%;
      max-width: 375px;
      height: 153px;
      img {
        object-fit: contain !important;
      }
    }
    h3 {
      font-family: "Balboa Medium";
      color: #fff;
      font-size: 120px;
      line-height: 1;
      margin-top: 0;
      margin-bottom: 0;
      margin-left: 50px;
      display: flex;
      letter-spacing: 3px;
      span:last-child {
        font-size: 50px;
      }
    }
  `

  const RightBox = styled.div`
    position: relative;
    width: 58.4%;
    background-color: rgb(37,64,143);
    padding: 45px;
    margin-top: 120px;
    margin-left: -3%;
    p {
      font-family: "Balboa Medium";
      color: #fff;
      letter-spacing: 3px;
      font-size: 50px;
      line-height: 1.2;
      margin-top: 35px;
      margin-bottom: 35px;
      max-width: 600px;
    }
    .arrow-line {
      border: 5px solid #25408f;
      width: 500px;
      height: 40px;
      position: absolute;
      left: 130px;
      border-bottom-width: 0px;
      border-left-width: 0px;
      top: -38px;
      .gatsby-image-wrapper {
        width: 44px;
        height: 44px;
        position: absolute !important;
        left: -38px;
        top: -25px;
        transform: rotate(180deg);
      }
    }
  `

  const SectionFive = styled.section`
    background-color: #231f20;
    .s5-main {
      max-width: 1200px;
      width: 88%;
      margin: 0 auto;
      display: flex;
      flex-wrap: wrap;
      > div {
        width: 100%;
      }
      > div:first-child {
        .gatsby-image-wrapper {
          margin: 0 auto;
          margin-bottom: 100px;
          display: block;
        }
      }
      .half-col {
        width: 50%;
        display: flex;
        .four-col {
          width: 50%;
          text-align: center;
          margin-bottom: 50px;
          h3 {
            text-align: center;
            font-family: "Kessel Light";
            font-size: 14px;
            color: #f1f2f2;
            opacity: .7;
            line-height: 1.7;
            margin-top: 15px;
            margin-bottom: 15px;
          }
          p {
            margin-bottom: 10px;
          }
          hr {
            width: 70px;
            margin: 0 auto 20px;
            border-top: 3px solid #25408f;
          }
        }
      }
    }
  `

  const SectionSix = styled.section`
    background-color: #231f20;
    .arrow-row {
      width: 100%;
      height: 280px;
      display: flex;
      p {
        font-family: "Kessel Light";
        color: #fff;
        font-size: 40px;
        background: #231f20;
        padding-left: 50px;
        font-weight: 600;
        letter-spacing: 1px;
        z-index: 1;
        position: relative;
        top: 50px;
      }
    }
    .arrow-row-one,
    .arrow-row-three {
      justify-content: flex-end;
      .arrow-line {
        width: 60%;
        position: relative;
        &:before {
          content: "";
          top: 1rem;
          left: -100px;
          position: absolute;
          border: 5px solid #25408f;
          width: 100vw;
          height: 70px;
          z-index: 0;
          clip-path: polygon(0 0, 100% 0, 100% 35%, 35% 35%, 35% 100%, 0 100%);
        }
        .gatsby-image-wrapper {
          position: absolute !important;
          height: 42px;
          width: 42px;
          z-index: 2;
          left: 0;
          top: 62px;
          img {
            object-fit: contain !important;
          }
        }
      }
    }
    .arrow-row-two {
      justify-content: flex-start;
      .arrow-line {
        width: 60%;
        position: relative;
        &:before {
          content: "";
          top: 1rem;
          right: -100px;
          position: absolute;
          border: 5px solid #25408f;
          width: 100vw;
          height: 70px;
          z-index: 0;
          clip-path: polygon(0 0%,100% 1%, 100% 1000%, 78% 17%, 0% 18%);
        }
        p {
          padding-left: 0;
          padding-right: 50px;
          text-align: right;
        }
        .gatsby-image-wrapper {
          position: absolute !important;
          height: 42px;
          width: 42px;
          z-index: 2;
          right: 0;
          top: 62px;
          transform: rotate(180deg);
          img {
            object-fit: contain !important;
          }
        }
      }
    }
  `

  const SectionSeven = styled.section`
    background-color: #231f20;
    padding-bottom: 80px;
    .s7-main {
      width: 88%;
      max-width: 1200px;
      margin: 0 auto;
      p {
        max-width: 780px;
        margin: 0 auto;
        font-family: "Kessel Light";
        font-size: 25px;
        color: #fff;
        text-align: center;
        span.large-text {
          font-size: 50px;
        }
      }
      a {
        font-family: "Madelyn";
        color: #d2232a;
        font-weight: 100;
        font-size: 150px;
        line-height: 2;
        text-transform: none;
        text-decoration: none !important;
      }
    }
    .s7-contact {
      width: 88%;
      max-width: 1200px;
      margin: 0 auto;
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
        float: left;
        margin-right: 17px;
      }
    }
  `
  
  export default HiringHeroesPage