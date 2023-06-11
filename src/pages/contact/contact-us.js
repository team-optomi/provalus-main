import React, { Component } from "react"
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from "gatsby-image"
import Modal from 'react-modal';

import Layout from "../../components/layout-v2"
import ScrollingImages from "../../components/scrolling-images"

class ContactPage extends Component {

  constructor () {
    super();
    this.state = {
      showModal: false
    };
    
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  
  handleOpenModal () {
    this.setState({ showModal: true });
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
  }

  render () {

    const { data } = this.props;

      return(
        data.allWpPage.edges.map(post => (
            <Layout>
                <SectionOne>
                    <h1>Contact Us</h1>
                </SectionOne>
                <SectionTwo>
                    <div class="background-image">
                        <Img fluid={post.node.ContactUsContent.contactSectionOneBackground.localFile.childImageSharp.fluid} alt={"Background Building"} />
                    </div>
                    <div class="section-content">
                      <div  dangerouslySetInnerHTML={{ __html: post.node.ContactUsContent.contactSectionOneCopy }}/>
                      <div class={"contact-button"}>
                        <button onClick={this.handleOpenModal} aria-label="Open">Let's Talk</button>
                      </div>
                    </div>
                </SectionTwo>
                <SectionThree>
                    <h2>Locations</h2>
                    <div class="location-flex">
                        <div>
                          <a href="https://goo.gl/maps/UmhVNFV67BGUz2xg7" target="_blank">
                            <Img fluid={data.locationImage.childImageSharp.fixed} />
                            <div class="location-content" dangerouslySetInnerHTML={{ __html: post.node.ContactUsContent.contactLocationOne }} />
                          </a>
                        </div>
                        <div>
                          <a href="https://g.page/Provalus?share" target="_blank">
                            <Img fluid={data.locationImage.childImageSharp.fixed} />
                            <div class="location-content" dangerouslySetInnerHTML={{ __html: post.node.ContactUsContent.contactLocationTwo }} />
                          </a>
                        </div>
                        <div>
                          <a href="https://goo.gl/maps/kMCGGCgVdb31pMKz6" target="_blank">
                            <Img fluid={data.locationImage.childImageSharp.fixed} />
                            <div class="location-content" dangerouslySetInnerHTML={{ __html: post.node.ContactUsContent.contactLocationThree }} />
                          </a>
                        </div>
                        <div>
                          <a href="#" target="_blank">
                            <Img fluid={data.locationImage.childImageSharp.fixed} />
                            <div class="location-content" dangerouslySetInnerHTML={{ __html: post.node.ContactUsContent.contactLocationFour }} />
                          </a>
                        </div>
                    </div>
                </SectionThree>
                <SectionFour>
                  <ScrollingImages/>
                  <div class="phone-content">
                      <Img fluid={data.phoneImage.childImageSharp.fixed} />
                      <p>{post.node.ContactUsContent.mainContactNumber}</p>
                  </div>
                </SectionFour>
                <CustomModal 
                    isOpen={this.state.showModal}
                    contentLabel="Contact Modal"
                >
                    <ModalContent>
                        <button onClick={this.handleCloseModal} class={"close"} aria-label="Close">×</button>
                        <h2>Let's Talk</h2>
                        <form name="Contact Main" method="POST" netlify-honeypot="bot-field" action="/thank-you/" data-netlify="true">
                                <input type="hidden" name="form-name" value="Contact Main" aria-label="Input"/>
                                <p class="hidden">
                                    <label>Don’t fill this out if you're human: <input name="bot-field" aria-label="Input" /></label>
                                </p>
                                <p>
                                    <label htmlFor="name">Name* <input type="text" name="name" placeholder="Enter your name" aria-label="Input" required/></label>   
                                </p>
                                <p>
                                    <label  htmlFor="state">
                                    State*
                                    <select name="state" required>
                                        <option value="AL">Alabama</option>
                                        <option value="AK">Alaska</option>
                                        <option value="AZ">Arizona</option>
                                        <option value="AR">Arkansas</option>
                                        <option value="CA">California</option>
                                        <option value="CO">Colorado</option>
                                        <option value="CT">Connecticut</option>
                                        <option value="DE">Delaware</option>
                                        <option value="DC">District Of Columbia</option>
                                        <option value="FL">Florida</option>
                                        <option value="GA">Georgia</option>
                                        <option value="HI">Hawaii</option>
                                        <option value="ID">Idaho</option>
                                        <option value="IL">Illinois</option>
                                        <option value="IN">Indiana</option>
                                        <option value="IA">Iowa</option>
                                        <option value="KS">Kansas</option>
                                        <option value="KY">Kentucky</option>
                                        <option value="LA">Louisiana</option>
                                        <option value="ME">Maine</option>
                                        <option value="MD">Maryland</option>
                                        <option value="MA">Massachusetts</option>
                                        <option value="MI">Michigan</option>
                                        <option value="MN">Minnesota</option>
                                        <option value="MS">Mississippi</option>
                                        <option value="MO">Missouri</option>
                                        <option value="MT">Montana</option>
                                        <option value="NE">Nebraska</option>
                                        <option value="NV">Nevada</option>
                                        <option value="NH">New Hampshire</option>
                                        <option value="NJ">New Jersey</option>
                                        <option value="NM">New Mexico</option>
                                        <option value="NY">New York</option>
                                        <option value="NC">North Carolina</option>
                                        <option value="ND">North Dakota</option>
                                        <option value="OH">Ohio</option>
                                        <option value="OK">Oklahoma</option>
                                        <option value="OR">Oregon</option>
                                        <option value="PA">Pennsylvania</option>
                                        <option value="RI">Rhode Island</option>
                                        <option value="SC">South Carolina</option>
                                        <option value="SD">South Dakota</option>
                                        <option value="TN">Tennessee</option>
                                        <option value="TX">Texas</option>
                                        <option value="UT">Utah</option>
                                        <option value="VT">Vermont</option>
                                        <option value="VA">Virginia</option>
                                        <option value="WA">Washington</option>
                                        <option value="WV">West Virginia</option>
                                        <option value="WI">Wisconsin</option>
                                        <option value="WY">Wyoming</option>
                                    </select>
                                    </label>   
                                </p>
                                <p>
                                    <label htmlFor="email">Email* <input type="email" name="email" placeholder="Enter your email" aria-label="Input" required/></label>
                                </p>
                                <p>
                                    <label htmlFor="city">City* <input type="text" name="city" placeholder="Enter your city name" aria-label="Input" required/></label>   
                                </p>
                                <p>
                                    <label htmlFor="phone">Phone* <input type="text" name="phone" placeholder="Enter your phone number" aria-label="Input" required/></label>   
                                </p>
                                <p>
                                    <label htmlFor="company">Company <input type="text" name="company" placeholder="Enter your company name" aria-label="Input"/></label>   
                                </p>
                                <p class={"full"}>
                                    <label htmlFor="message">Message <textarea name="message" placeholder="Enter your message" aria-label="Input"></textarea></label>
                                </p>
                                <p class={"button"}>
                                    <button type="submit" name="submit" class={"submit"} aria-label="Send">Send</button>
                                </p>
                            </form> 
                    </ModalContent>
                </CustomModal>
                <div type="hidden" style={{ display: 'none' }}>
                    <form name="Contact Main" method="POST" netlify-honeypot="bot-field" action="/thank-you/" data-netlify="true">
                        <input type="hidden" name="form-name" value="Contact Main" aria-label="Input"/>
                        <p class="hidden">
                            <label>Don’t fill this out if you're human: <input name="bot-field" aria-label="Input" /></label>
                        </p>
                        <p>
                            <label htmlFor="name">Name* <input type="text" name="name" placeholder="Enter your name" aria-label="Input" required/></label>   
                        </p>
                        <p>
                            <label  htmlFor="state">
                            State*
                            <select name="state" required>
                                <option value="AL">Alabama</option>
                                <option value="AK">Alaska</option>
                                <option value="AZ">Arizona</option>
                                <option value="AR">Arkansas</option>
                                <option value="CA">California</option>
                                <option value="CO">Colorado</option>
                                <option value="CT">Connecticut</option>
                                <option value="DE">Delaware</option>
                                <option value="DC">District Of Columbia</option>
                                <option value="FL">Florida</option>
                                <option value="GA">Georgia</option>
                                <option value="HI">Hawaii</option>
                                <option value="ID">Idaho</option>
                                <option value="IL">Illinois</option>
                                <option value="IN">Indiana</option>
                                <option value="IA">Iowa</option>
                                <option value="KS">Kansas</option>
                                <option value="KY">Kentucky</option>
                                <option value="LA">Louisiana</option>
                                <option value="ME">Maine</option>
                                <option value="MD">Maryland</option>
                                <option value="MA">Massachusetts</option>
                                <option value="MI">Michigan</option>
                                <option value="MN">Minnesota</option>
                                <option value="MS">Mississippi</option>
                                <option value="MO">Missouri</option>
                                <option value="MT">Montana</option>
                                <option value="NE">Nebraska</option>
                                <option value="NV">Nevada</option>
                                <option value="NH">New Hampshire</option>
                                <option value="NJ">New Jersey</option>
                                <option value="NM">New Mexico</option>
                                <option value="NY">New York</option>
                                <option value="NC">North Carolina</option>
                                <option value="ND">North Dakota</option>
                                <option value="OH">Ohio</option>
                                <option value="OK">Oklahoma</option>
                                <option value="OR">Oregon</option>
                                <option value="PA">Pennsylvania</option>
                                <option value="RI">Rhode Island</option>
                                <option value="SC">South Carolina</option>
                                <option value="SD">South Dakota</option>
                                <option value="TN">Tennessee</option>
                                <option value="TX">Texas</option>
                                <option value="UT">Utah</option>
                                <option value="VT">Vermont</option>
                                <option value="VA">Virginia</option>
                                <option value="WA">Washington</option>
                                <option value="WV">West Virginia</option>
                                <option value="WI">Wisconsin</option>
                                <option value="WY">Wyoming</option>
                            </select>
                            </label>   
                        </p>
                        <p>
                            <label htmlFor="email">Email* <input type="email" name="email" placeholder="Enter your email" aria-label="Input" required/></label>
                        </p>
                        <p>
                            <label htmlFor="city">City* <input type="text" name="city" placeholder="Enter your city name" aria-label="Input" required/></label>   
                        </p>
                        <p>
                            <label htmlFor="phone">Phone* <input type="text" name="phone" placeholder="Enter your phone number" aria-label="Input" required/></label>   
                        </p>
                        <p>
                            <label htmlFor="company">Company <input type="text" name="company" placeholder="Enter your company name" aria-label="Input"/></label>   
                        </p>
                        <p class={"full"}>
                            <label htmlFor="message">Message <textarea name="message" placeholder="Enter your message" aria-label="Input"></textarea></label>
                        </p>
                        <p class={"button"}>
                            <button type="submit" name="submit" class={"submit"} aria-label="Send">Send</button>
                        </p>
                    </form> 
                </div>
            </Layout>
        ))
      )
    }
}

const SectionOne = styled.section`
    width: 100%;
    padding: 200px 0 20px;
    h1 {
        font-family: "Madelyn";
        font-size: 185px;
        font-weight: normal;
        line-height: 35px;
        color: #d2232a;
        text-align: center;
    }
    @media(max-width:767px) {
      padding-top: 100px;
      padding-bottom: 0px;
      h1 {
        font-size: 100px;
      }
    }
    @media(max-width: 400px) {
      h1 {
        font-size: 80px;
      }
    }
`

const SectionTwo = styled.section`
    width: 100%;
    position: relative;
    overflow: hidden;
    padding: 40px 0;
    .background-image {
      position: relative;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      &:after {
        content: '';
        background-color: rgba(0,0,0,.75);
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
      }
      .gatsby-image-wrapper {
        height: 100%;
      }
    }
    .section-content {
      position: absolute;
      z-index: 0;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      p {
        font-family: "Kessel Light";
        line-height: 2;
        font-size: 18px;
        color: #fff;
        font-weight: 400;
        text-align: center;
        margin-bottom: 0;
      }
      button {
        font-family: "Kessel Light";
        padding: 12px 35px 10px;
        display: inline-block;
        text-decoration: none;
        color: #fff;
        background-color: #c01e2e;
        text-transform: uppercase;
        letter-spacing: 1px;
        border-radius: 5px;
        border: none;
        margin-top: 30px;
        &:hover {
          cursor: pointer;
        }
      }
    }
    @media(max-width:1000px) {
      .section-content {
        p {
          br {
            display: none;
          }
        }
      }
    }
    @media(max-width:767px) {
      padding: 30px 0;
      .section-content {
        position: relative;
        padding: 30px 20px 0;
      }
    }
    @media(max-width:767px) {
      > div {
        opacity: 1 !important;
        transform: none !important;
      }
      h2 {
        font-size: 28px;
      }
      .section-content {
        p {
          font-size: 14px;
          br {
            display: none;
          }
        }
      }
      
    }
`


const CustomModal = styled(Modal)`
  position: fixed;
  z-index: 1000;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0,0,0,0.4);
`

const ModalContent = styled.div`
    background-color: #fefefe;
    margin: auto;
    padding: 20px;
    border: 1px solid #888;
    width: 50%;
    position: relative;
    @media(max-width:1200px) {
        width: 75%;
    }
    @media(max-width:900px) {
        width: 90%;
    }
    form {
        width: 60%;
        margin: 0 auto;
        @media(max-width:800px) {
            width: 100%;
        }
    }
    h2 {
        font-family: "Raleway";
        text-align: center;
        margin-bottom: 30px;
        font-size: 30px;
        line-height: 1.25em;
    }
    p {
        &.hidden {
            opacity: 0;
            position: absolute;
            top: 0;
            left: 0;
            height: 0;
            width: 0;
            z-index: -1;
        }
        width: 50%;
        display: inline-block;
        padding: 0 15px;
        @media(max-width:470px) {
            width: 100%;
        }
        &.full {
            width: 100%;
        }
        &.button {
            width: 100%;
            text-align: center;
        }
        label {
            font-family: "Raleway";
            font-size: 14px;
            line-height: 26px;
            font-weight: 600;
            color: #000;
        }
        input {
            font-family: "Raleway";
            width: 100%;
            border: none;
            outline: 0;
            border-bottom: 1px solid #000;
            padding: 10px 0;
            font-size: 13px;
            line-height: 17px;
            color: #000;
            &:placeholder {
                color: #aaa;
            }
        }
        select {
            font-family: "Raleway";
            width: 100%;
            border: none;
            outline: 0;
            border-bottom: 1px solid #000;
            padding: 10px 0;
            font-size: 13px;
            line-height: 17px;
            color: #000;
            background: transparent;
        }
        textarea {
            font-family: "Raleway";
            width: 100%;
            border: none;
            outline: 0;
            border-bottom: 1px solid #000;
            padding: 10px 0;
            font-size: 13px;
            line-height: 17px;
            color: #000;
            &:placeholder {
                color: #aaa;
            }
        }
    }
    button {
        &.close {
            font-family: "Raleway Bold";
            line-height: 28px;
            color: #aaaaaa;
            font-size: 28px;
            font-weight: bold;
            position: absolute;
            top: 20px;
            right: 20px;
            background: transparent;
            border: none;
            outline: 0;
            padding: 0;
            &:hover {
                cursor: pointer;
                color: #000;
            }
        }
        &.submit {
            background: #fff;
            color: #c01e2e;
            font-size: 16px;
            display: inline-block;
            min-width: 6.5rem;
            cursor: pointer;
            text-align: center;
            border: .1rem solid #c01e2e;
            font-family: "Raleway";
            transition: all 0.2s ease;
            border-radius: 0;
            padding: 10px;
            margin: 0 auto;
            &:hover {
                color: #fff;
                background: #c01e2e;
                cursor: pointer;
                }
            }
        }
    }
`

const SectionThree = styled.section`
    width: 100%;
    padding: 50px 20px;
    h2 {
      font-family: "Kessel Light";
      font-size: 60px;
      color: #fff;
      font-weight: 400;
      text-align: center;
      margin-top: 0px;
      margin-bottom: 35px;
      text-transform: uppercase;
    }
    .location-flex {
      max-width: 1200px;
      width: 100%;
      display: flex;
      margin: 0 auto;
      a {
        text-decoration: none;
      }
      > div {
        width: 25%;
        text-align: center;
        .gatsby-image-wrapper {
          width: 35px;
          height: 50px;
          margin: 0 auto;
        }
        h3 {
          font-family: "Madelyn";
          font-size: 85px;
          font-weight: normal;
          line-height: 35px;
          color: #d2232a;
          text-align: center;
        }
        p {
          font-family: "Kessel Light";
          line-height: 1.5;
          font-size: 18px;
          color: #fff;
          font-weight: 400;
          text-align: center;
          margin-bottom: 0;
        }
        .location-content {
          margin-top: -30px;
        }
      }
    }
    @media(max-width: 991px) {
      .location-flex {
        flex-wrap: wrap;
        > div {
          width: 50%;
          margin-bottom: 40px;
        }
      }
    }
    @media(max-width: 767px) {
      h2 {
        font-size: 32px;
      }
      .location-flex {
        flex-wrap: wrap;
        > div {
          width: 100%;
          margin-bottom: 40px;
        }
      }
    }
    @media(max-width:767px) {
      > div {
        opacity: 1 !important;
        transform: none !important;
      }
      h2 {
        font-size: 28px;
      }
      .location-flex {
        > div {
          p {
            font-size: 14px;
          }
        }
      }
    }
`

const SectionFour = styled.section`
  width: 100%;
  .phone-content {
    width: 100%;
    padding: 50px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    .gatsby-image-wrapper {
      width: 50px;
      height: 53px;
      margin-right: 20px;
      img {
        width: 50px !important;
        height: auto !important;
        object-fit: contain !important;
      }
    }
    p {
      font-family: "Kessel Light";
      line-height: 1.5;
      font-size: 18px;
      color: #fff;
      font-weight: 400;
      text-align: center;
      margin-bottom: 0;
    }
  }
  @media(max-width:767px) {
    > div {
      opacity: 1 !important;
      transform: none !important;
    }
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

export default props => (
  <StaticQuery
    query={graphql`
    query {
      locationImage: file(relativePath: { eq: "location_tag.png" }) {
        childImageSharp {
          fixed(width: 50, height: 73) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      phoneImage: file(relativePath: { eq: "phone.png" }) {
          childImageSharp {
            fixed(width: 50, height: 52) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      allWpPage(filter: {databaseId: {eq: 215}}) {
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
            ContactUsContent {
              contactSectionOneBackground {
                  localFile {
                      childImageSharp {
                          fluid(maxWidth: 1800) {
                              ...GatsbyImageSharpFluid_withWebp
                          }
                      }
                  }
              }
              contactSectionOneCopy
              contactLocationOne
              contactLocationThree
              contactLocationTwo
              contactLocationFour
              mainContactNumber
            }
          }
        }
      }
    }
    `}
    render={data => <ContactPage data={data} {...props} />}
  />
);