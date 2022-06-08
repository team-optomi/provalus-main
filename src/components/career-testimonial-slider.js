import React, { Component } from "react"
import { StaticQuery, graphql } from 'gatsby'
import Slider from "react-slick"
import styled from 'styled-components'

class CareerTestimonialSlider extends Component {

    render() {

        const { data: { queryContent } } = this.props; 
        const testimonialMap = queryContent.CareerPage.careerTestimonialSection
    
          const settings = {
            arrows: true,
            dots: false,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
          };
        
          return (
            <SliderContainer>
              <Slider {...settings}>
                {testimonialMap.map(testimonial => (
                <TestimonialSlide>
                    <div dangerouslySetInnerHTML={{ __html: testimonial.careerSingleTestimonial }} />
                </TestimonialSlide> 
                ))}
              </Slider>
            </SliderContainer>
          );
      }
}

const SliderContainer = styled.div`
  max-width: 700px;
  width: 100%;
  margin: 0 auto;
  .slick-prev {
    width: 35px;
    height: 35px;
    border-top: 2px solid #fff;
    border-left: 2px solid #fff;
    transform: rotate(-45deg);
    left: -75px;
    top: 30%;
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
    right: -75px;
    top: 30%;
    &:before {
      display: none;
    }
  }
  @media(max-width:900px) {
    max-width: 500px;
  }
  @media(max-width:700px) {
    max-width: 300px;
    .slick-prev {
      left: -30px;
    }
    .slick-next {
      right: -30px;
    }
  }
`

const TestimonialSlide = styled.div`
  p {
    font-family: "Kessel Light";
    color: rgb(255, 255, 255);
    font-size: 24px;
    font-weight: 100;
    text-align: center;
    line-height: 1.3;
    span.fancy {
      font-family: Madelyn;
      font-size: 44px;
      line-height: 0;
      color: rgb(210, 35, 42);
    }
  }
  @media(max-width:700px) {
    p {
      font-size: 18px;
    }
  }
`

export default props => (
    <StaticQuery
      query={graphql`
        query {
            queryContent: wpPage(databaseId: {eq: 2154}) {
                CareerPage {
                    careerTestimonialSection {
                        careerSingleTestimonial
                    }
                }
            }
        }
      `}
      render={data => <CareerTestimonialSlider data={data} {...props} />}
    />
  );