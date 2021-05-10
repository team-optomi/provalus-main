import React, { Component } from "react"
import { StaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'
import Img from "gatsby-image"
import Slider from "react-slick"

class BuildCaseStudySlider extends Component {

  render() {

    const { data } = this.props; 

      const settings = {
        arrows: true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    
      return (
        <SliderContainer>
            <div 
            data-sal="slide-up"
            data-sal-duration="1000"
            data-sal-delay="600"
            data-sal-easing="ease"
            class="blue-block blue-block-1"></div>
            <div 
            data-sal="slide-up"
            data-sal-duration="1000"
            data-sal-delay="600"
            data-sal-easing="ease"
            class="blue-block blue-block-2"></div>
          <div
          data-sal="fade"
          data-sal-duration="1000"
          data-sal-delay="1200"
          data-sal-easing="ease"
          >
          <Slider {...settings}>
            {data.allWpCaseStudy.edges.map(post => (
              <Link
                to={`/case-studies/${post.node.slug}`}
              >
                <CaseStudy>
                <ImageThumb>
                    <CaseImg fluid={post.node.featuredImage.node.localFile.childImageSharp.fluid} alt={post.node.featuredImage.node.title} />
                </ImageThumb>
                <Highlight dangerouslySetInnerHTML={{ __html: post.node.title }} className={"sliderFade"}/>
                <Excerpt dangerouslySetInnerHTML={{ __html: post.node.excerpt }} className={"sliderFade"}/>
              </CaseStudy>
              </Link>
            ))}          
          </Slider>
          </div>
        </SliderContainer>
      );
  }
}

const SliderContainer = styled.div`
    width: 100%;
    position: relative;
    &:before {
        content: '';
        position: absolute;
        left: -500px;
        top: 0;
        width: 500px;
        height: 100%;
        background-color: #000;
        z-index: 1;
    }
    .slick-list {
        overflow: visible;
    }
    .slick-dots {
        display: none !important;
    }
    .slick-prev {
        width: 200px;
        height: 80px;
        background-color: transparent;
        right: 40px;
        left: auto;
        top: auto;
        bottom: -80px;
        z-index: 3;
        transition-duration: .3s;
    }
    .slick-prev:hover {
        z-index: 3;
        opacity: .75;
        background-color: transparent;
    }
    .slick-prev:before {
        content: '';
        position: absolute;
        top: 40px;
        left: 0;
        height: 1px;
        width: 200px;
        background-color: #fff;
    }
    .slick-prev:after {
        content: '';
        position: absolute;
        top: 20px;
        right: 6px;
        height: 40px;
        width: 40px;
        border-top: 1px solid #fff;
        border-left: 1px solid #fff;
        transform: rotate(135deg);
    }
    .slick-next {
        width: 200px;
        height: 80px;
        background-color: transparent;
        left: -100px;
        z-index: 3;
        transition-duration: .3s;
    }
    .slick-next:hover {
        z-index: 3;
        opacity: .75;
        background-color: transparent;
    }
    .slick-next:before {
        content: '';
        position: absolute;
        top: 40px;
        left: 0;
        height: 1px;
        width: 200px;
        background-color: #fff;
    }
    .slick-next:after {
        content: '';
        position: absolute;
        top: 20px;
        left: 6px;
        height: 40px;
        width: 40px;
        border-top: 1px solid #fff;
        border-left: 1px solid #fff;
        transform: rotate(-45deg);
    }
    .blue-block {
        background-color: #0b283a;
        position: absolute;
        width: 600px;
        height: 120px;
    }
    .blue-block-1 {
        top: -20px;
        left: calc(50% - 300px);
    }
    .blue-block-2 {
        bottom: -60px;
        right: 0;
    }
    a {
      text-decoration: none;
    }
    @media(max-width:1550px) {
      .blue-block {
        width: 500px;
      }
      .blue-block-1 {
        left: calc(65% - 250px);
      }
      .blue-block-2 {
        right: -140px;
      }
    }
    @media(max-width:1330px) {
      .blue-block {
        width: 400px;
      }
      .blue-block-1 {
        left: calc(65% - 200px);
      }
    }
    @media(max-width:1150px) {
      .blue-block-1 {
        left: auto;
        right: 0;
      }
      .blue-block-2 {
        display: none;
      }
    }
    @media(max-width:940px) {
      .blue-block-1 {
        right: -100px;
      }
    }
`

const CaseStudy = styled.div`
    outline: 0 !important;
    position: relative;
`

const ImageThumb = styled.div``

const CaseImg = styled(Img)`
    width: 650px;
    @media(max-width:1330px) {
      width: 550px;
    }
    @media(max-width:1150px) {
      width: 500px;
    }
    @media(max-width:940px) {
      width: 100%;
    }
`

const Highlight = styled.h3`
    font-family: "Kessel Light";
    font-size: 20px;
    color: #fff;
    font-weight: 100;
    line-height: 1.2;
    letter-spacing: 1px;
    max-width: 24%;
    position: absolute;
    top: -10px;
    right: 13%;
    margin-bottom: 0;
    margin-top: 15px;
    max-height: 100px;
    overflow: hidden;
    transition-delay: .6s;
    @media(max-width:1150px) {
      font-size: 20px;
      top: 0px;
      right: 10px;
    }
    @media(max-width:940px) {
      position: relative;
      max-width: 100%;
      padding: 20px;
      line-height: 1.3;
      font-weight: 700;
    }
`

const Excerpt = styled.div`
    transition-delay: .9s;
    p {
        font-family: "Kessel Light";
        font-size: 18px;
        color: #818686;
        font-weight: 100;
        line-height: 1.2;
        letter-spacing: 1px;
        max-width: 24%;
        position: absolute;
        top: 120px;
        right: 13%;
        margin-bottom: 0;
        max-height: 200px;
        overflow: hidden;
        @media(max-width:1330px) {
          font-size: 18px;
        }
        @media(max-width:1150px) {
          font-size: 18px;
          right: 10px;
        }
        @media(max-width:940px) {
          position: relative;
          max-width: 100%;
          padding: 0 20px;
          top: auto;
        }
    }
`

export default props => (
    <StaticQuery
      query={graphql`
        query {
            allWpCaseStudy(filter: {categories: {nodes: {elemMatch: {databaseId: {eq: 528}}}}}, sort: {fields: date, order: DESC}) {
                edges {
                    node {
                      title
                      slug
                      excerpt
                      featuredImage {
                        node {
                          title
                          localFile {
                            childImageSharp {
                              fluid(maxWidth: 1200, quality: 100) {
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
      `}
      render={data => <BuildCaseStudySlider data={data} {...props} />}
    />
  );