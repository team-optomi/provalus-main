import React, { Component } from "react"
import { StaticQuery, graphql } from 'gatsby'
import Img from "gatsby-image"
import Slider from "react-slick"
import styled from 'styled-components'

class ImpactScrollingImages extends Component {

    render() {

        const { data: { workPost } } = this.props; 
        const work = workPost.edges
    
          const settings = {
            arrows: false,
            dots: false,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 6000,
            focusOnSelect: true,
            centerMode: true,
          };
        
          return (
            <SliderContainer className={"our-work-slider"}>
              <Slider {...settings}>
                {work.map(post => (
                <OurWorkSlide>
                    <div class="work-image-bg">
                        <Img fluid={post.node.featuredImage.node.localFile.childImageSharp.fluid} alt={post.node.title} />
                    </div>
                </OurWorkSlide> 
                ))}
              </Slider>
            </SliderContainer>
          );
      }
}

const OurWorkSlide = styled.div`
    padding: 0px;
    position: relative;
    outline: 0;
    .work-image-bg {
      height: 450px;
      width: 100%;
      .gatsby-image-wrapper {
        height: 100%;
      }
    }
    @media(max-width:767px) {
      padding: 25px 10px;
      .work-image-bg {
        height: 250px;
      }
    }  
`

const SliderContainer = styled.div`
    width: 100%;
    max-width: 100%;
    height: 450px;
    margin: 0 auto;
    .slick-slider {
      max-width: 770px;
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
            workPost: allWpScrollingImage(filter: {categories: {nodes: {elemMatch: {databaseId: {eq: 614}}}}}, sort: {fields: date, order: DESC}) {
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
      render={data => <ImpactScrollingImages data={data} {...props} />}
    />
  );