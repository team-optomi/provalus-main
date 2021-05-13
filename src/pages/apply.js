import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from "../components/layout-v2"
import ApplyForm from "../components/apply-form"

const ApplyPage = () => {

    const data = useStaticQuery(graphql`
      query {
        allWpPage(filter: {databaseId: {eq: 208}}) {
          edges {
            node {
              title
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
              ApplyContent {
                  applyTopSection
                  applyContactSection
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
                <SectionOne>
                    <div
                    data-sal="slide-down"
                    data-sal-duration="1000"
                    data-sal-easing="ease"
                    >
                        <h1>apply</h1>
                        <div dangerouslySetInnerHTML={{ __html: post.node.ApplyContent.applyTopSection }} />
                    </div>
                </SectionOne>
                <FormSection>
                  <ApplyForm />
                  <div type="hidden" style={{ display: 'none' }}>
                    <form name="Apply" method="POST" netlify-honeypot="bot-field" action="/thank-you/" data-netlify="true">
                      <input type="hidden" name="form-name" value="Apply" aria-label="Input" />
                      <p class="hidden">
                          <label>Don’t fill this out if you're human: <input name="bot-field" aria-label="Input" /></label>
                      </p>
                      <p class="two-thirds">
                          <label htmlFor="name">Full Name* <input type="text" name="name" aria-label="Input" required/></label>   
                      </p>
                      <p class="two-thirds">
                          <label htmlFor="address">Street Address* <input type="text" name="address" aria-label="Input" required/></label>
                      </p>
                      <p class="one-third">
                          <label htmlFor="city">City* <input type="text" name="city" aria-label="Input" required/></label>   
                      </p>
                      <p class="one-third">
                          <label htmlFor="state">State* <input type="text" name="state" aria-label="Input" required/></label>   
                      </p>
                      <p class="one-third">
                          <label htmlFor="zip">Zip* <input type="text" name="zip" aria-label="Input" required/></label>   
                      </p>
                      <p class="one-half">
                          <label htmlFor="email">Email Address* <input type="email" name="email" aria-label="Input" required/></label>   
                      </p>
                      <p  class="one-half">
                          <label htmlFor="phone">Phone* <input type="text" name="phone" aria-label="Input" required/></label>   
                      </p>
                      <p class="full-row">
                          <label  htmlFor="hear-about">
                            How did you hear about us?*
                            <select name="hear-about" required>
                              <option value="">Select Option</option>
                              <option value="Website">Website</option>
                              <option value="Job fair">Job fair</option>
                              <option value="Local event">Local event</option>
                              <option value="Educational institution">Educational institution</option>
                              <option value="Job board">Job board</option>
                              <option value="Social media">Social media</option>
                              <option value="Referral from friend or family">Referral from friend or family</option>
                              <option value="Other">Other</option>
                            </select>
                          </label>
                      </p>
                      <p class="full-row">
                          <label htmlFor="your-message">In 140 characters or less, please describe why you would be a good fit for this job
                              <textarea name="your-message" cols="40" rows="10" maxLength="140" minLength="0" aria-label="Input"/>
                          </label>   
                      </p>
                      <div class="optional">
                          <p>Optional</p>
                      </div>
                      <p class="two-thirds">
                          <label htmlFor="linkedin">LinkedIn Profile Url <input type="text" name="linkedin" aria-label="Input" /></label>   
                      </p>
                      <p class="two-thirds">
                          <label htmlFor="resume">Upload Resume <input type="file" name="resume" size="40" accept=".pdf,.doc,.docx" aria-label="Input" /></label>   
                      </p>
                      <p class={"button"}>
                          <button type="submit" name="submit" class={"submit"}  aria-label="Send">Submit</button>
                      </p>
                    </form>
                  </div>
                </FormSection>
                <ContactSection>
                  <div 
                  data-sal="slide-up"
                  data-sal-duration="1000"
                  data-sal-easing="ease"
                  dangerouslySetInnerHTML={{ __html: post.node.ApplyContent.applyContactSection }} />
                </ContactSection>
            </PageMain>
        </Layout>
        ))
    )

}

const PageMain = styled.div`
    width: 100%;
    padding: 200px;
    h1 {
      font-family: "Madelyn";
      color: #d2232a;
      text-transform: lowercase;
      font-size: 110px;
      font-weight: normal;
      margin-top: 55px;
      letter-spacing: 1px;
      line-height: 110px;
      margin-bottom: 0px;
      text-align: center;
    }
    @media(max-width:1000px) {
      max-width: 640px;
      padding: 100px 20px;
      margin: 0 auto;
      h1 {
        font-size: 100px;
      }
    }
    @media(max-width:390px) {
      h1 {
        font-size: 80px;
      }
    }
  `

  const SectionOne = styled.section`
    > div {
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
    }
    p {
        font-family: "Kessel Light";
        color: #f1f2f2;
        text-align: center;
        font-size: 22px;
        line-height: 30px;
        padding-top: 52px;
        margin-bottom: 18px;
    }
    p.no-exp {
        font-family: "Kessel Light";
        padding-top: 0px;
        text-transform: uppercase;
        color: rgb(210,35,42);
        font-size: 24px;
        letter-spacing: 1px;
        font-weight: bold;
    }
  `

const FormSection = styled.section`
    width: 100%;
    max-width: 1080px;
    margin: 0 auto;
    form {
      display: flex;
      flex-wrap: wrap;
    }
    p {
      label {
        font-family: "Kessel Light";
        color: #fff;
        font-size: 20px;
        padding-bottom: 10px;
        padding-top: 22px;
        text-transform: uppercase;
        display: flex;
        flex-direction: column;
      }
      input,
      select,
      textarea {
        font-size: 22px;
        padding: 0 0.65em;
        color: #555;
        height: 60px;
        margin-top: 10px;
        outline: 0;
      }
      textarea {
        height: 300px;
        padding: 15px;
      }
      input[type="file"] {
        padding: 0;
        font-size: 16px;
        color: #fff;
      }
      &.button {
        text-align: center;
        width: 100%;
      }
      button[type="submit"] {
        font-family: "Madelyn";
        font-size: 130px;
        color: #d2232a;
        padding: 25px 20px 0;
        text-align: center;
        text-transform: capitalize;
        background: transparent;
        border: none;
        outline: 0;
        &:hover {
          cursor: pointer;
        }
      }
      &.hidden {
          opacity: 0;
          position: absolute;
          top: 0;
          left: 0;
          height: 0;
          width: 0;
          z-index: -1;
      }
      &.two-thirds {
        width: 65%;
        margin-right: 35%;
      }
      &.one-third {
        width: 30%;
        margin-right: 5%;
        &.last {
          margin-right: 0;
        }
      }
      &.one-half {
        width: 47.5%;
        margin-right: 5%;
        &.last {
          margin-right: 0;
        }
      }
      &.full-row {
        width: 100%;
      }
    }
    .optional {
      width: 100%;
      p {
        font-family: "Kessel Light";
        text-transform: uppercase;
        color: rgb(210,35,42);
        font-size: 24px;
        letter-spacing: 1px;
        font-weight: bold;
        padding-top: 20px;
        border-bottom: 1px solid;
        margin-bottom: 20px;
      }
    }
    @media(max-width:1000px) {
      form {
        p {
          &.two-thirds {
            width: 100%;
            margin-right: 0;
          }
        }
      }
    }
    @media(max-width:600px) {
      form {
        p {
          &.one-third {
            width: 100%;
            margin-right: 0;
          }
          &.one-half {
            width: 100%;
            margin-right: 0;
          }
        }
      }
    }
`

const ContactSection = styled.section`
    width: 88%;
      max-width: 1200px;
      margin: 0 auto;
      margin-top: 200px;
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
        width: 150px !important;
        float: left;
        margin-right: 17px;
      }
      @media(max-width:1000px) {
        width: 100%;
      }
  `

export default ApplyPage