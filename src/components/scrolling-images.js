import React, { Component } from "react"
import { StaticQuery, graphql } from 'gatsby'
import Img from "gatsby-image"
import Slider from "react-slick"
import styled from 'styled-components'

class ScrollingImages extends Component {

    render() {

        const { data: { workPost } } = this.props; 
        const work = workPost.edges
    
          const settings = {
            arrows: false,
            dots: false,
            // infinite: true,
            // slidesToShow: 1,
            // slidesToScroll: 1,
            // focusOnSelect: true,
            // centerMode: true,
          };
        
          return (
            <SliderContainer className={"our-work-slider"}>
              <Slider {...settings}>
                {work.map(post => (
                <OurWorkSlide>
                    <div class="work-image-bg">
                        <Img fluid={post.node.featuredImage.node.localFile.childImageSharp.fluid} alt={post.node.title} />
                    </div>
                    <div class="work-image-overlay">
                      <h3 dangerouslySetInnerHTML={{ __html: post.node.title }}/>
                    </div>
                </OurWorkSlide> 
                ))}
              </Slider>
            </SliderContainer>
          );
      }
}

const OurWorkSlide = styled.div`
    padding: 25px;
    position: relative;
    outline: 0;
    .work-image-bg {
      height: 450px;
      width: 100%;
      .gatsby-image-wrapper {
        height: 100%;
      }
    }
    .work-image-overlay {
      position: absolute;
      bottom: 25px;
      left: 25px;
      width: calc(100% - 50px);
      height: calc(50% - 50px);
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      padding: 25px;
      background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%);
      transition-duration: .2s;
      opacity: 0;
      h3 {
        font-family: "Work Sans";
        font-size: 30px;
        font-weight: 700;
        line-height: 35px;
        color: #fff;
        margin-top: 0;
        margin-bottom: 5px;
        position: relative;
        left: 60px;
        opacity: 0;
        visibility: hidden;
        transition: all .6s cubic-bezier(.77,0,.175,1) .2s;
      }
      a {
        font-family: "Work Sans";
        font-size: 24px;
        font-weight: 700;
        line-height: 28px;
        color: #db4140;
        text-decoration: none;
        position: relative;
        left: 60px;
        opacity: 0;
        visibility: hidden;
        transition: all .6s cubic-bezier(.77,0,.175,1) .4s;
        svg {
          width: 24px;
          margin-left: 10px;
          transition: all .3s cubic-bezier(.77,0,.175,1);
        }
        &:hover {
          color: #db4140 !important;
          svg {
              transform: translateX(10px);
          }
        }
      }
    }
    @media(max-width:767px) {
      padding: 25px 10px;
      .work-image-bg {
        height: 250px;
      }
      .work-image-overlay {
        left: 10px;
        width: calc(100% - 20px);
        padding: 10px;
        h3 {
          font-size: 20px;
          line-height: 1.2;
        }
        a {
          font-size: 16px;
          line-height: 1.2;
        }
      }
    }  
`

const SliderContainer = styled.div`
    width: 100%;
    max-width: 100%;
    height: 500px;
    margin: 0 auto;
    .slick-slider {
      max-width: 820px;
      width: 100%;
      margin: 0 auto;
      overflow: visible;
    }
    .slick-list{
      padding: 0;
      overflow: visible;
    }
    .slick-slide {
      width: 100%;
      transition-duration: .3s;
      outline: 0 !important;
      &:not(.slick-active) {
        &:hover {
          transform: translateY(-10px);
          cursor: pointer;
        }
      }
      &.slick-active {
        ${OurWorkSlide} {
          .work-image-overlay {
            opacity: 1;
            h3 {
              opacity: 1;
              left: 0;
              visibility: visible;
            }
            a {
              opacity: 1;
              left: 0;
              visibility: visible;
            }
          }
        }
      }
    }
  @media(max-width:767px) {
    height: 300px;
    .slick-slide {
      &.slick-active {
        ${OurWorkSlide} {
          .work-image-overlay {
            opacity: 1;
            h3 {
              opacity: 1;
              left: 0;
            }
            a {
              opacity: 1;
              left: 0;
            }
          }
        }
      }
    }
  }  
`

export default props => (
    <StaticQuery
      query={graphql`
        query {
            workPost: allWpScrollingImage(sort: {fields: date, order: DESC}) {
                edges {
                    node {
                        title
                        featuredImage {
                            node {
                                localFile {
                                    childImageSharp {
                                        fluid(maxWidth: 770, quality: 100) {
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
      render={data => <ScrollingImages data={data} {...props} />}
    />
  );