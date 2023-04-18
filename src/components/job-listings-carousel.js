import React, { Component } from "react"
import { StaticQuery, graphql, Link } from 'gatsby'
import Img from "gatsby-image"
import Slider from "react-slick"
import styled from 'styled-components'

class JobScrollingBlog extends Component {

    render() {

        const { data: { queryContent } } = this.props; 
        const imageMap = queryContent.edges;
    
          const settings = {
            arrows: true,
            dots: false,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: false,
            responsive: [
              {
                breakpoint: 960,
                settings: {
                  slidesToShow: 2,
                }
              },
              {
                breakpoint: 640,
                settings: {
                  slidesToShow: 1,
                }
              }
            ]
          };
        
          return (
            <SliderContainer className={"our-work-slider"}>
              <Slider {...settings}>
                {imageMap.map(imageSrc => (
                <BlogSlide>
                    <div class="blog-bg">
                    <Img fluid={imageSrc.node.featuredImage.node.localFile.childImageSharp.fluid} alt={imageSrc.node.featuredImage.node.title} />
                        <Link to={`/job-listing/${imageSrc.node.slug}`}>
                            <div class="title-content">
                                <h3>{imageSrc.node.title}</h3>
                            </div>
                        </Link>
                    </div>
                </BlogSlide> 
                ))}
              </Slider>
            </SliderContainer>
          );
      }
}

const BlogSlide = styled.div`
  position: relative;
  .blog-bg {
    width: 100%;
    height: 100%;
    position: relative;
  }
  a {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,.5);
    transition-duration: .3s;
    .gatsby-image-wrapper {
      z-index: 1;
    }
    .title-content {
      position: absolute;
      z-index: 2;
      bottom: 0px;
      left: 0px;
      width: 100%;
      padding: 30px;
      h3 {
        font-family: "Kessel Light";
        line-height: 1.3;
        font-size: 26px;
        font-weight: 100;
        letter-spacing: 1px;
        color: rgb(255, 255, 255);
      }
      p {
        font-family: Madelyn;
        font-size: 40px;
        font-weight: 100;
        letter-spacing: 1px;
        color: rgb(255, 255, 255);
        margin-bottom: 0px;
      }
    }
    &:hover {
      background-color: rgba(210,35,42,.5);
    }
  }
`

const SliderContainer = styled.div`
  margin-bottom: 50px;
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
            queryContent: allWpJobListing(sort: {fields: date, order: DESC}) {
                edges {
                    node {
                        title
                        slug
                        date(formatString: "MMMM DD, YYYY")
                        featuredImage {
                            node {
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
            }
        }
      `}
      render={data => <JobScrollingBlog data={data} {...props} />}
    />
  );