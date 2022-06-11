import React from "react"
import { useStaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'

const CareerBlogSidebar = () => {

    const data = useStaticQuery(graphql`
        query {
            allWpCareerPost(sort: {fields: date, order: DESC}) {
                edges {
                    node {
                        MonthlyArchive {
                            archiveLabel
                            archiveSlug
                        }
                    }
                }
            }
        }
    `)

    // Date Archive remove duplicates
    const careerPosts = data.allWpCareerPost.edges
    const careerBlogDates = []
    careerPosts.forEach(careerPost => {
      let careerBlogDate = {
        month: careerPost.node.MonthlyArchive.archiveLabel,
        slug: careerPost.node.MonthlyArchive.archiveSlug
      }
      careerBlogDates.push(careerBlogDate)
    })
    const careerBlogMonths = [
      {month: ""},
      {slug: ""}
    ]
    let i = 1
    careerBlogDates.forEach(object => {
      if(object.slug === careerBlogMonths[i].slug) {
        //Do nothing
      } else {
        let newObject = {
          month: object.month,
          slug: object.slug
        }
        careerBlogMonths.push(newObject)
        i++
      }
    })

    return(
        <SidebarLayout>
            <ArchiveList>
                <h3>Archives</h3>
                <ul>
                {careerBlogMonths.map(careerBlogMonth => (
                    <li>
                        <Link to={`/career-blog/${careerBlogMonth.slug}`}>{careerBlogMonth.month}</Link>
                    </li>
                ))}
                </ul>
            </ArchiveList>
        </SidebarLayout>
    )

}

const SidebarLayout = styled.div`
    padding: 0 40px;
`

const ArchiveList = styled.div`
    h3 {
        font-family: "Kessel Light";
        color: #fff;
        font-weight: 400;
        line-height: 1.3;
        font-size: 28px;
        letter-spacing: 1px;
        text-transform: uppercase;
        margin-top: 0px;
        text-align: center;
    }
    ul {
        list-style: none;
        li {
            a {
                font-family: "Kessel Light";
                color: #fff;
                font-weight: 400;
                line-height: 1.3;
                font-size: 18px;
                letter-spacing: 1px;
                text-decoration: none;
                transition-duration: .3s;
                &:hover {
                    color: rgb(210,35,42);
                }
            }
        }
    }
    @media(max-width:1080px) {
        ul {
            text-align: center;
        }
    }
`

export default CareerBlogSidebar