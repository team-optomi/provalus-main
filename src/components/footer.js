import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"
import styled from 'styled-components'

import { FaFacebookSquare } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaRegEnvelope } from 'react-icons/fa'
import { FaBriefcase } from 'react-icons/fa'
import { FaPhoneAlt } from 'react-icons/fa'

const Footer = () => {
    const data = useStaticQuery(graphql`
      query {
        footerIcon: file(relativePath: { eq: "provalus-footer.png" }) {
          childImageSharp {
            fixed(width: 38, height: 33) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        socIcon: file(relativePath: { eq: "SOC-compliance.png" }) {
          childImageSharp {
            fixed(width: 62, height: 65) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        militaryIcon: file(relativePath: { eq: "military-friendly.png" }) {
          childImageSharp {
            fixed(width: 62, height: 62) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        footerAwards: file(relativePath: { eq: "awards-2020.png" }) {
          childImageSharp {
            fixed(width: 471, height: 38) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        footerLogo: file(relativePath: { eq: "provalus-large-footer.png" }) {
          childImageSharp {
            fixed(width: 500, height: 145) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `)
  
    return(
        <FooterFull>
            <FooterMain>
              <div class="socials-row">
                <a href="#" target="_blank" rel="noreferrer"><FaFacebookSquare size={36}/></a>
                <a href="#" target="_blank" rel="noreferrer"><FaTwitter size={36}/></a>
                <a href="#" target="_blank" rel="noreferrer"><FaLinkedin size={36}/></a>
              </div>
              <div class="footer-flex">
                <div class="footer-left">
                  <h4><Img fluid={data.footerIcon.childImageSharp.fixed} />about us</h4>
                  <p>Provalus is purpose-driven… elevating under-served communities by creating technology, business and support careers for undiscovered talent in the U.S.  Provalus offers Support, BPO and ITO services. We hire and develop the best and brightest untapped talent in our small towns and rural communities to deliver a remarkable experience for clients and end-users alike. By creating opportunities where there were none; with companies that believe in America’s future, Provalus is generating a dedicated superior workforce. We are fueling a new era of technology talent equipped to strengthen America’s future.… PROVIDING OUTSOURCING VALUE FROM THE U.S.</p>
                </div>
                <div class="footer-right">
                  <div class="icons">
                    <Img fluid={data.socIcon.childImageSharp.fixed} />
                    <Img fluid={data.militaryIcon.childImageSharp.fixed} />
                  </div>
                  <p>Optomi has been recognized with multiple awards :</p>
                  <Img fluid={data.footerAwards.childImageSharp.fixed} className={"footer-awards"} />
                  <Img fluid={data.footerLogo.childImageSharp.fixed} className={"footer-logo"} />
                </div>
              </div>
            </FooterMain>
            <FooterContact>
              <div class="contact-left">
                <FaRegEnvelope size={28}/>
                <a href="mailto:info@provalus.com">info@provalus.com</a>
              </div>
              <div class="contact-center">
                <FaBriefcase size={28}/>
                <p class="contact-links">
                  <Link to="/contact/contact-us/">Alabama</Link>|
                  <Link to="/contact/contact-us/">Texas</Link>|
                  <Link to="/contact/contact-us/">South Carolina</Link>
                </p>
              </div>
              <div class="contact-right">
                <FaPhoneAlt size={28}/>
                <p>251.286.1070</p>
              </div>
            </FooterContact>
            <FooterCopyright>
                <p>Copyright <a href="https://optomi.com/" target="_blank">Optomi</a>, LLC. All rights reserved.</p>
            </FooterCopyright>
        </FooterFull>
    )
  }

  const FooterFull = styled.footer`
    position: relative;
    padding: 0;
    &:before {
        position: absolute;
        top: -2px;
        left: 0px;
        content: " ";
        width: 100%;
        height: 3px;
        background: #353431;
        background-image: -webkit-linear-gradient(left, #353431 10%, #b2b2b2 50%, #353431 100%);
        background-image: -moz-linear-gradient(left, #353431 10%, #b2b2b2 50%, #353431 100%);
        background-image: -ms-linear-gradient(left, #353431 10%, #b2b2b2 50%, #353431 100%);
        background-image: -o-linear-gradient(left, #353431 10%, #b2b2b2 50%, #353431 100%);
    }
  `

  const FooterMain = styled.div`
    background-color: #000;
    padding: 60px 120px 50px;
    max-width: 1840px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    .socials-row {
      width: 100%;
      margin-bottom: 50px;
      a {
        color: #fff;
        margin-right: 15px;
        transition-duration: .3s;
        &:hover {
          color: rgb(210,35,42);
        }
      }
    }
    .footer-flex {
      display: flex;
      .footer-left {
        width: 50%;
        h4 {
          display: flex;
          font-family: "Kessel Light";
          font-size: 32px;
          color: #fffffd;
          letter-spacing: 1px;
          line-height: 1.1;
          border-bottom: 1px solid red;
          font-weight: normal;
          width: 50%;
          padding-bottom: 5px;
          margin-top: 0;
          margin-bottom: 10px;
          .gatsby-image-wrapper {
            height: 38px;
            width: 33px;
            margin: 0 8px;
          }
        }
        p {
          font-family: "Kessel Light";
          font-size: 14px;
          font-weight: 500;
          color: #fff;
        }
      }
      .footer-right {
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        .icons {
          display: flex;
          justify-content: flex-end;
          .gatsby-image-wrapper {
            width: 62px;
            height: 62px;
            img {
              object-fit: contain !important;
            }
          }
        }
        p {
          font-family: "Kessel Light";
          font-size: 14px;
          font-weight: 500;
          color: #fff;
          margin-top: 10px;
          margin-bottom: 10px;
        }
        .gatsby-image-wrapper {
          &.footer-awards {
            width: 471px;
            height: 38px;
            margin-bottom: 20px;
            img {
              object-fit: contain !important;
            }
          }
          &.footer-logo {
            width: 500px;
            height: 145px;
            img {
              object-fit: contain !important;
            }
          }
        }
      }
    }
  `

  const FooterContact = styled.div`
    background-color: #353431;
    padding: 20px 120px;
    border-bottom: 1px solid #ccc;
    max-width: 1840px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .contact-left {
      color: rgb(210,35,42);
      display: flex;
      justify-content: flex-start;
      align-items: center;
      a {
        font-family: "Kessel Light";
        font-size: 18px;
        color: #fff;
        text-decoration: none !important;
        transition-duration: .3s;
        margin-top: 5px;
        margin-left: 15px;
        &:hover {
          color: rgb(210,35,42);
        }
      }
    }
    .contact-center {
      color: rgb(210,35,42);
      display: flex;
      justify-content: center;
      align-items: center;
      svg {
        margin-right: 5px;
      }
      p {
        font-family: "Kessel Light";
        font-size: 18px;
        color: #fff;
        margin-top: 5px;
        margin-bottom: 0;
      }
      a {
        font-family: "Kessel Light";
        font-size: 18px;
        color: #fff;
        text-decoration: none !important;
        transition-duration: .3s;
        margin-left: 10px;
        margin-right: 10px;
        &:hover {
          color: rgb(210,35,42);
        }
      }
    }
    .contact-right {
      color: rgb(210,35,42);
      display: flex;
      justify-content: flex-end;
      align-items: center;
      svg {
        margin-right: 15px;
      }
      p {
        font-family: "Kessel Light";
        font-size: 18px;
        color: #fff;
        text-decoration: none !important;
        transition-duration: .3s;
        margin-top: 5px;
        margin-bottom: 0px;
      }
    }
  `

  const FooterCopyright = styled.div`
    background-color: #000;
    padding: 10px 0;
    p {
        font-family: "Kessel Light";
        color: #fff;
        margin: 0px;
        font-size: 12px;
        font-weight: bold;
        text-align: center;
        a {
            color: #fff;
            text-decoration: none;
            transition-duration: .3s;
            &:hover {
                color: rgb(210,35,42);
            }
        }
    }
  `


  
  export default Footer