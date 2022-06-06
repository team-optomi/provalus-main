import React, { Component } from "react"
import { StaticQuery, graphql } from 'gatsby'
import Img from "gatsby-image"
import Slider from "react-slick"
import styled from 'styled-components'

class CareerScrollingImages extends Component {

    render() {

        const { data: { queryContent } } = this.props; 
        const imageMap = queryContent.CareerPage.careerGallerySection
    
          const settings = {
            arrows: true,
            dots: false,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 6000,
          };
        
          return (
            <SliderContainer className={"our-work-slider"}>
              <Slider {...settings}>
                {imageMap.map(imageSrc => (
                <OurWorkSlide>
                    <div class="work-image-bg">
                        <Img fluid={imageSrc.localFile.childImageSharp.fluid} alt={imageSrc.title} />
                    </div>
                </OurWorkSlide> 
                ))}
              </Slider>
            </SliderContainer>
          );
      }
}

const OurWorkSlide = styled.div`
    .work-image-bg {
      height: 350px;
      .gatsby-image-wrapper {
        height: 100%;
      }
    }
`

const SliderContainer = styled.div`
  .slick-prev {
    width: 35px;
    height: 35px;
    border-top: 2px solid #fff;
    border-left: 2px solid #fff;
    transform: rotate(-45deg);
    left: 30px;
    top: 50%;
    z-index: 3;
    &:before {
      display: none;
    }
  }
  .slick-next {
    width: 35px;
    height: 35px;
    border-top: 2px solid #fff;
    border-right: 2px solid #fff;
    transform: rotate(45deg);
    right: 30px;
    top: 50%;
    z-index: 3;
    &:before {
      display: none;
    }
  }
`

export default props => (
    <StaticQuery
      query={graphql`
        query {
            queryContent: wpPage(databaseId: {eq: 2154}) {
                CareerPage {
                    careerGallerySection {
                        title
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
      `}
      render={data => <CareerScrollingImages data={data} {...props} />}
    />
  );