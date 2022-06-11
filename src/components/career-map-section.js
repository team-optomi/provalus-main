import React, { Component } from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'
import Img from "gatsby-image"

class CareerMapSection extends Component {

    constructor(props) {
        super(props);
        this.state = { activeSlide: 0 };
    }

    clickSelector(index) {
        let num = index;
        this.setState({ activeSlide: num});
    }

    render() {
        const { data } = this.props; 

        return(
            <MapSection>
                <h2
                data-sal="slide-up"
                data-sal-duration="1000"
                data-sal-easing="ease"
                >WE’RE IN A COMMUNITY <span class="fancy">Near You</span></h2>
                <div class="map-images">
                {data.wpPage.CareerPage.careerMapLocations.map((locationSrc, i) => (
                    <button 
                    data-sal="slide-up"
                    data-sal-duration="1000"
                    data-sal-easing="ease"
                    id={"selector_" + i} class={"map-selector"} onClick={() => this.clickSelector(i)} className= {i === this.state.activeSlide ? "active" : "inactive"} aria-label="Selector">
                        <Img fluid={locationSrc.careerMapIcon.localFile.childImageSharp.fluid} alt={locationSrc.careerMapIcon.title} />
                    </button>
                ))}
                </div>
                <div class="map-locations">
                {data.wpPage.CareerPage.careerMapLocations.map((locationSrc, i) => (
                    <div 
                    data-sal="slide-up"
                    data-sal-duration="1000"
                    data-sal-easing="ease"
                    id={"location_" + i} className= {i === this.state.activeSlide ? "active" : "inactive"}>
                        <div dangerouslySetInnerHTML={{ __html: locationSrc.careerMapLocation }}  />
                    </div>
                ))}
                </div>
                <div 
                data-sal="slide-up"
                data-sal-duration="1000"
                data-sal-easing="ease"
                class="map-buttons">
                    <p><span class="fancy">Virtually</span> <Link to={"/contact/contact-us/"}>Visit our Facilities</Link> <Link to={"/join-us/jobs/"}>Job Opportunities</Link></p>
                </div>
            </MapSection>
        )

    }

}

const MapSection = styled.section`
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
            color: rgb(210,35,42);
            line-height: 0;
        }
    }
    .map-images {
      max-width: 1400px;
      width: 100%;
      margin: 0 auto;
      margin-bottom: 50px;
      display: flex;
      button {
            background-color: transparent;
            border: none;
            height: 400px;
            display: flex;
            &:nth-child(1) {
                width: 22%;
                align-items: flex-start;
            }
            &:nth-child(2) {
                width: 28%;
                align-items: flex-end;
            }
            &:nth-child(3) {
                width: 25%;
                align-items: flex-start;
            }
            &:nth-child(4) {
                width: 25%;
                align-items: flex-end;
            }
            &:hover {
                cursor: pointer;
            }
            .gatsby-image-wrapper {
                width: 100%;
            }
      }
    }
    .map-locations {
        max-width: 600px;
        width: 100%;
        height: 450px;
        margin: 0 auto;
        margin-bottom: 50px;
        overflow: hidden;
        position: relative;
        > div {
            opacity: 0;
            visibility: hidden;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            &.active {
                opacity: 1;
                visibility: visible;
            }
        }
    }
    .map-buttons {
        text-align: center;
        margin-bottom: 60px;
        span.fancy {
            font-family: Madelyn;
            font-size: 60px;
            font-weight: 100;
            color: #fff;
            line-height: 0;
            position: relative;
            z-index: 1;
        }
        a {
            font-family: "Kessel Light";
            color: #fff;
            background-color: rgb(210,35,42);
            padding: 10px 15px;
            margin: 0 10px;
            border: 2px solid #fff;
            letter-spacing: 1px;
            text-transform: uppercase;
            text-decoration: none;
            border-radius: 10px;
            &:nth-child(2) {
                margin-left: -10px;
            }
        }
    }
    @media(max-width:1440px) {
        .map-images {
            max-width: 1200px;
            button {
                height: 330px;
            }
        }
    }
    @media(max-width:1240px) {
        .map-images {
            max-width: 1000px;
            button {
                height: 275px;
            }
        }
    }
    @media(max-width:1040px) {
        .map-images {
            max-width: 800px;
            button {
                height: 220px;
            }
        }
    }
    @media(max-width:840px) {
        .map-images {
            max-width: 600px;
            button {
                height: 160px;
            }
        }
    }
    @media(max-width:767px) {
        .map-images {
            max-width: 100%;
            flex-wrap: wrap;
            button {
                width: 50% !important;
                height: auto;
                padding: 25px;
            }
        }
    }
    @media(max-width:620px) {
        h2 {
            font-size: 24px;
            span.fancy {
                font-size: 72px;
                line-height: 1;
            }
        }
        .map-locations {
            height: 350px;
            iframe {
                width: 100% !important;
                height: 350px !important;
            }
        }
        .map-buttons {
            padding-top: 20px;
            p {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                span.fancy {
                    margin-bottom: 40px;
                }
                a {
                    max-width: 300px;
                    width: 100%;
                    margin: 0 !important;
                    margin-bottom: 20px !important;
                }
            }
        }
    }
    @media(max-width:440px) {
        .map-images {
            button {
                width: 100% !important;
            }
        }
    }
`

export default props => (
    <StaticQuery
      query={graphql`
        query {
            wpPage(databaseId: {eq: 2154}) {
                        CareerPage {
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
      `}
      render={data => <CareerMapSection data={data} {...props} />}
    />
  );