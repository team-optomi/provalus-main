import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Image from "gatsby-image"
import styled from 'styled-components'
import parse from "html-react-parser"

import Layout from "../components/layout-v2"
import SEO from "../components/seo"


const SingleJobTemplate = ({ data: { listing } }) => {

  const featuredImage = {
    fluid: listing.featuredImage?.node?.localFile?.childImageSharp?.fluid ,
    alt:  listing.featuredImage?.node?.title || ``,
  }

    return (
        <Layout>
            <SEO title={listing.title} description={listing.jobListingData.jobListingDescription ? listing.jobListingData.jobListingDescription : 'N/A'} />
            <Helmet title="Structured Job Opening">
                <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org/",
                    "@type": "JobPosting",
                    title: listing.jobListingData.jobListingTitle ? listing.jobListingData.jobListingTitle : 'N/A',
                    description: listing.jobListingData.jobListingDescription ? listing.jobListingData.jobListingDescription : 'N/A',
                    hiringOrganization: {
                    "@type": "Organization",
                    name: 'Provalus',
                    sameAs: 'https://provalus.com'
                    },
                    datePosted: listing.jobListingData.jobListingDatePosted ? listing.jobListingData.jobListingDatePosted : 'N/A',
                    validThrough: listing.jobListingData.jobListingValidThrough ? listing.jobListingData.jobListingValidThrough : 'N/A',
                    employmentType: listing.jobListingData.jobListingEmploymentType ? listing.jobListingData.jobListingEmploymentType : 'N/A',
                    jobLocation: {
                        "@type": "Place",
                        address: {
                        "@type": "PostalAddress",
                        streetAddress: listing.jobListingData.jobListingStreetAddress ? listing.jobListingData.jobListingStreetAddress : 'N/A',
                        addressLocality: listing.jobListingData.jobListingCity ? listing.jobListingData.jobListingCity : 'N/A',
                        postalCode: listing.jobListingData.jobListingZipCode ? listing.jobListingData.jobListingZipCode : 'N/A',
                        addressCountry: "US",
                        addressRegion: listing.jobListingData.jobListingState ? listing.jobListingData.jobListingState : 'N/A'
                        }
                    },
                    baseSalary: {
                        "@type": "MonetaryAmount",
                        currency: "USD",
                        value: {
                        "@type": "QuantitativeValue",
                        unitText: listing.jobListingData.jobListingSalaryPer ? listing.jobListingData.jobListingSalaryPer : 'N/A',
                        minValue: listing.jobListingData.jobListingSalary ? listing.jobListingData.jobListingSalary : 'N/A',
                        maxValue: listing.jobListingData.jobListingMaxSalary ? listing.jobListingData.jobListingMaxSalary : 'N/A'
                        }
                    },
                    qualifications: listing.jobListingData.jobListingQualifications ? listing.jobListingData.jobListingQualifications : 'N/A',
                    skills: listing.jobListingData.jobListingSkills ? listing.jobListingData.jobListingSkills : 'N/A',
                    responsibilities: listing.jobListingData.jobListingResponsibilities ? listing.jobListingData.jobListingResponsibilities : 'N/A',
                    educationRequirements: listing.jobListingData.jobListingEducationRequirements ? listing.jobListingData.jobListingEducationRequirements : 'N/A',
                    experienceRequirements: listing.jobListingData.jobListingExperienceRequirements ? listing.jobListingData.jobListingExperienceRequirements : 'N/A'
                })}
                </script>
            </Helmet>
           
            <MainBackground>
                <MainArticle
                className="blog-post"
                itemScope
                itemType="http://schema.org/Article"
                >

                  {/* if we have a featured image for this post let's display it */}
                  {featuredImage?.fluid && (
                    <Image
                      fluid={featuredImage.fluid}
                      alt={featuredImage.alt}
                    />
                  )}

                <div class="entry-content">
                    <header>
                    <h1 itemProp="headline">{parse(listing.title)}</h1>
                    </header>
                    {!!listing.content && (
                    <section itemProp="articleBody">{parse(listing.content)}</section>
                    )}
                </div>

                </MainArticle>

            </MainBackground>

        </Layout>
    )

}


const MainBackground = styled.div`
  width: 100%;
  background-color: #353431;
  padding: 100px 20px;
`

const MainArticle = styled.article`
  max-width: 1080px;
  width: 100%;
  padding: 0px;
  margin: 0 auto;
  background-color: #000;
  .gatsby-image-wrapper {
    margin-bottom: 0;
  }
  .entry-content {
    padding: 60px;
    h1 {
      font-family: "Kessel Light";
      font-size: 25px;
      color: #fffffd;
      letter-spacing: 1px;
      line-height: 30px;
    }
    p, li {
      font-family: "Kessel Light";
      font-size: 16px;
      color: #f1f2f2;
      line-height: 1.6;
      margin-bottom: 20px;
      a {
        color: #298fc2;
        text-decoration: none;
      }
    }
    ul {
        padding-left: 30px;
    }
  }
  iframe {
    max-width: 1000px;
    width: 100%;
    height: 500px;
  }
  .wp-video {
    max-width: 1000px;
    width: 100%;
    height: auto;
    video {
        max-width: 1000px !important;
        width: 100% !important;
        height: auto;
    }
  }
  @media(max-width:767px) {
    .entry-content {
      padding: 20px;
    }
  }
`

export default SingleJobTemplate

export const pageQuery = graphql`
  query JobListingById(
    # these variables are passed in via createPage.pageContext in gatsby-node.js
    $id: String!
  ) {
    # selecting the current post by id
    listing: wpJobListing(id: { eq: $id }) {
      id
      title
      content
      featuredImage {
        node {
          title
          localFile {
            childImageSharp {
              fluid(maxWidth: 1000, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
      jobListingData {
        jobListingTitle
        jobListingDescription
        jobListingDatePosted
        jobListingValidThrough
        jobListingEmploymentType
        jobListingStreetAddress
        jobListingCity
        jobListingState
        jobListingZipCode
        jobListingSalary
        jobListingMaxSalary
        jobListingPer
        jobListingSkills
        jobListingQualifications
        jobListingResponsibilities
        jobListingEducationRequirements
        jobListingExperienceRequirements
      }
    }
  }
`