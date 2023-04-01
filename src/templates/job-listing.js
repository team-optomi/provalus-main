import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

import Layout from "../components/layout-v2"

const SingleJobTemplate = ({ data: { listing } }) => {

    return (
        <Layout>
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
            <h1>Job Listing: {listing.title}</h1>
        </Layout>
    )

}

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