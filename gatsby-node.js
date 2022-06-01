const path = require(`path`)
const chunk = require(`lodash/chunk`)

// This is a simple debugging tool
// dd() will prettily dump to the terminal and kill the process
// const { dd } = require(`dumper.js`)

/**
 * exports.createPages is a built-in Gatsby Node API.
 * It's purpose is to allow you to create pages for your site! 💡
 *
 * See https://www.gatsbyjs.com/docs/node-apis/#createPages for more info.
 */
exports.createPages = async gatsbyUtilities => {
  // Query our posts from the GraphQL server
  const posts = await getPosts(gatsbyUtilities)

  // If there are no posts in WordPress, don't do anything
  if (!posts.length) {
    return
  }

  // If there are posts, create pages for them
  await createIndividualBlogPostPages({ posts, gatsbyUtilities })

  // And a paginated archive
  await createBlogPostArchive({ posts, gatsbyUtilities })



   // Query our news posts from the GraphQL server
   const newsPosts = await getNews(gatsbyUtilities)

   // If there are no posts in WordPress, don't do anything
   if (!newsPosts.length) {
     return
   }
 
   // If there are posts, create pages for them
   await createIndividualNewsPostPages({ newsPosts, gatsbyUtilities })
 
   // And a paginated archive
   await createNewsPostArchive({ newsPosts, gatsbyUtilities })



   // Query our wellness posts from the GraphQL server
   const wellnessPosts = await getWellnessPosts(gatsbyUtilities)

   // If there are no posts in WordPress, don't do anything
   if (!wellnessPosts.length) {
     return
   }
 
   // If there are posts, create pages for them
   await createIndividualWellnessPostPages({ wellnessPosts, gatsbyUtilities })
 
   // And a paginated archive
   await createWellnessPostArchive({ wellnessPosts, gatsbyUtilities })


   // Query our case study posts from the GraphQL server
   const caseStudies = await getCaseStudies(gatsbyUtilities)

   // If there are no posts in WordPress, don't do anything
   if (!caseStudies.length) {
     return
   }
 
   // If there are posts, create pages for them
   await createIndividualCaseStudyPages({ caseStudies, gatsbyUtilities })




   // Career blog setup
   const careerPosts = await getCareerPosts(gatsbyUtilities)

   // If there are career posts, create pages for them
  //await createIndividualCareerPostPages({ careerPosts, gatsbyUtilities })

  // And a paginated archive
  await createCareerPostArchive({ careerPosts, gatsbyUtilities })

  // And a monthly archive
  await createCareerPostMonthlyArchive({ careerPosts, gatsbyUtilities })

}

/**
 * This function creates all the individual blog pages in this site
 */
const createIndividualBlogPostPages = async ({ posts, gatsbyUtilities }) =>
  Promise.all(
    posts.map(({ previous, post, next }) =>
      // createPage is an action passed to createPages
      // See https://www.gatsbyjs.com/docs/actions#createPage for more info
      gatsbyUtilities.actions.createPage({
        // Use the WordPress uri as the Gatsby page path
        // This is a good idea so that internal links and menus work 👍
        path: `/insights/${post.slug}`,

        // use the blog post template as the page component
        component: path.resolve(`./src/templates/blog-post.js`),

        // `context` is available in the template as a prop and
        // as a variable in GraphQL.
        context: {
          // we need to add the post id here
          // so our blog post template knows which blog post
          // the current page is (when you open it in a browser)
          id: post.id,

          // We also use the next and previous id's to query them and add links!
          previousPostId: previous ? previous.id : null,
          nextPostId: next ? next.id : null,
        },
      })
    )
  )

/**
 * This function creates all the individual news pages in this site
 */
const createIndividualNewsPostPages = async ({ newsPosts, gatsbyUtilities }) =>
Promise.all(
  newsPosts.map(({ previous, newsPost, next }) =>
    // createPage is an action passed to createPages
    // See https://www.gatsbyjs.com/docs/actions#createPage for more info
    gatsbyUtilities.actions.createPage({
      // Use the WordPress uri as the Gatsby page path
      // This is a good idea so that internal links and menus work 👍
      path: `${newsPost.slug}`,

      // use the blog post template as the page component
      component: path.resolve(`./src/templates/news-post.js`),

      // `context` is available in the template as a prop and
      // as a variable in GraphQL.
      context: {
        // we need to add the post id here
        // so our blog post template knows which blog post
        // the current page is (when you open it in a browser)
        id: newsPost.id,

        // We also use the next and previous id's to query them and add links!
        previousPostId: previous ? previous.id : null,
        nextPostId: next ? next.id : null,
      },
    })
  )
)

/**
 * This function creates all the individual wellness pages in this site
 */
 const createIndividualWellnessPostPages = async ({ wellnessPosts, gatsbyUtilities }) =>
 Promise.all(
   wellnessPosts.map(({ previous, wellnessPost, next }) =>
     // createPage is an action passed to createPages
     // See https://www.gatsbyjs.com/docs/actions#createPage for more info
     gatsbyUtilities.actions.createPage({
       // Use the WordPress uri as the Gatsby page path
       // This is a good idea so that internal links and menus work 👍
       path: `/wellness/${wellnessPost.slug}`,
 
       // use the blog post template as the page component
       component: path.resolve(`./src/templates/wellness-post.js`),
 
       // `context` is available in the template as a prop and
       // as a variable in GraphQL.
       context: {
         // we need to add the post id here
         // so our blog post template knows which blog post
         // the current page is (when you open it in a browser)
         id: wellnessPost.id,
 
         // We also use the next and previous id's to query them and add links!
         previousPostId: previous ? previous.id : null,
         nextPostId: next ? next.id : null,
       },
     })
   )
 )

/**
 * This function creates all the individual case study pages in this site
 */
 const createIndividualCaseStudyPages = async ({ caseStudies, gatsbyUtilities }) =>
 Promise.all(
   caseStudies.map(({ caseStudy }) =>
     // createPage is an action passed to createPages
     // See https://www.gatsbyjs.com/docs/actions#createPage for more info
     gatsbyUtilities.actions.createPage({
       // Use the WordPress uri as the Gatsby page path
       // This is a good idea so that internal links and menus work 👍
       path: `/case-studies/${caseStudy.slug}`,
 
       // use the blog post template as the page component
       component: path.resolve(`./src/templates/case-study.js`),
 
       // `context` is available in the template as a prop and
       // as a variable in GraphQL.
       context: {
         // we need to add the post id here
         // so our blog post template knows which blog post
         // the current page is (when you open it in a browser)
         id: caseStudy.id,
       },
     })
   )
 )

/**
 * This function creates the blog archives pages
 */
async function createBlogPostArchive({ posts, gatsbyUtilities }) {
  const graphqlResult = await gatsbyUtilities.graphql(/* GraphQL */ `
    {
      wp {
        readingSettings {
          postsPerPage
        }
      }
    }
  `)

  const { postsPerPage } = graphqlResult.data.wp.readingSettings

  const postsChunkedIntoArchivePages = chunk(posts, postsPerPage)
  const totalPages = postsChunkedIntoArchivePages.length

  return Promise.all(
    postsChunkedIntoArchivePages.map(async (_posts, index) => {
      const pageNumber = index + 1

      const getPagePath = page => {
        if (page > 0 && page <= totalPages) {
          // slug for archive and pagination
          // "/blog/2" for example
          return page === 1 ? `/insights/` : `/insights/${page}`
        }

        return null
      }

      // createPage is an action passed to createPages
      // See https://www.gatsbyjs.com/docs/actions#createPage for more info
      await gatsbyUtilities.actions.createPage({
        path: getPagePath(pageNumber),

        // use the blog post archive template as the page component
        component: path.resolve(`./src/templates/blog-post-archive.js`),

        // `context` is available in the template as a prop and
        // as a variable in GraphQL.
        context: {
          // the index of our loop is the offset of which posts we want to display
          // so for page 1, 0 * 10 = 0 offset, for page 2, 1 * 10 = 10 posts offset,
          // etc
          offset: index * postsPerPage,

          // We need to tell the template how many posts to display too
          postsPerPage,

          nextPagePath: getPagePath(pageNumber + 1),
          previousPagePath: getPagePath(pageNumber - 1),
        },
      })
    })
  )
}

/**
 * This function creates the news archive pages
 */
 async function createNewsPostArchive({ newsPosts, gatsbyUtilities }) {
  const graphqlResult = await gatsbyUtilities.graphql(/* GraphQL */ `
    {
      wp {
        readingSettings {
          postsPerPage
        }
      }
    }
  `)

  const { postsPerPage } = graphqlResult.data.wp.readingSettings

  const postsChunkedIntoArchivePages = chunk(newsPosts, postsPerPage)
  const totalPages = postsChunkedIntoArchivePages.length

  return Promise.all(
    postsChunkedIntoArchivePages.map(async (_newsPosts, index) => {
      const pageNumber = index + 1

      const getPagePath = page => {
        if (page > 0 && page <= totalPages) {
          // slug for archive and pagination
          // "/blog/2" for example
          return page === 1 ? `/news/` : `/news/${page}`
        }

        return null
      }

      // createPage is an action passed to createPages
      // See https://www.gatsbyjs.com/docs/actions#createPage for more info
      await gatsbyUtilities.actions.createPage({
        path: getPagePath(pageNumber),

        // use the blog post archive template as the page component
        component: path.resolve(`./src/templates/news-post-archive.js`),

        // `context` is available in the template as a prop and
        // as a variable in GraphQL.
        context: {
          // the index of our loop is the offset of which posts we want to display
          // so for page 1, 0 * 10 = 0 offset, for page 2, 1 * 10 = 10 posts offset,
          // etc
          offset: index * postsPerPage,

          // We need to tell the template how many posts to display too
          postsPerPage,

          nextPagePath: getPagePath(pageNumber + 1),
          previousPagePath: getPagePath(pageNumber - 1),
        },
      })
    })
  )
}

/**
 * This function creates the wellness archive pages
 */
 async function createWellnessPostArchive({ wellnessPosts, gatsbyUtilities }) {
  const graphqlResult = await gatsbyUtilities.graphql(/* GraphQL */ `
    {
      wp {
        readingSettings {
          postsPerPage
        }
      }
    }
  `)

  const { postsPerPage } = graphqlResult.data.wp.readingSettings

  const postsChunkedIntoArchivePages = chunk(wellnessPosts, postsPerPage)
  const totalPages = postsChunkedIntoArchivePages.length

  return Promise.all(
    postsChunkedIntoArchivePages.map(async (_wellnessPosts, index) => {
      const pageNumber = index + 1

      const getPagePath = page => {
        if (page > 0 && page <= totalPages) {
          // slug for archive and pagination
          // "/blog/2" for example
          return page === 1 ? `/wellness/` : `/wellness/${page}`
        }

        return null
      }

      // createPage is an action passed to createPages
      // See https://www.gatsbyjs.com/docs/actions#createPage for more info
      await gatsbyUtilities.actions.createPage({
        path: getPagePath(pageNumber),

        // use the blog post archive template as the page component
        component: path.resolve(`./src/templates/wellness-post-archive.js`),

        // `context` is available in the template as a prop and
        // as a variable in GraphQL.
        context: {
          // the index of our loop is the offset of which posts we want to display
          // so for page 1, 0 * 10 = 0 offset, for page 2, 1 * 10 = 10 posts offset,
          // etc
          offset: index * postsPerPage,

          // We need to tell the template how many posts to display too
          postsPerPage,

          nextPagePath: getPagePath(pageNumber + 1),
          previousPagePath: getPagePath(pageNumber - 1),
        },
      })
    })
  )
}


/**
 * This function creates the career post archive pages
 */
 async function createCareerPostArchive({ careerPosts, gatsbyUtilities }) {
  const graphqlResult = await gatsbyUtilities.graphql(/* GraphQL */ `
    {
      wp {
        readingSettings {
          postsPerPage
        }
      }
    }
  `)

  const { postsPerPage } = graphqlResult.data.wp.readingSettings

  const postsChunkedIntoArchivePages = chunk(careerPosts, postsPerPage)
  const totalPages = postsChunkedIntoArchivePages.length

  return Promise.all(
    postsChunkedIntoArchivePages.map(async (_careerPosts, index) => {
      const pageNumber = index + 1

      const getPagePath = page => {
        if (page > 0 && page <= totalPages) {
          // slug for archive and pagination
          // "/career-blog/2" for example
          return page === 1 ? `/career-blog/` : `/career-blog/${page}`
        }

        return null
      }

      // createPage is an action passed to createPages
      // See https://www.gatsbyjs.com/docs/actions#createPage for more info
      await gatsbyUtilities.actions.createPage({
        path: getPagePath(pageNumber),

        // use the blog post archive template as the page component
        component: path.resolve(`./src/templates/career-blog-archive.js`),

        // `context` is available in the template as a prop and
        // as a variable in GraphQL.
        context: {
          // the index of our loop is the offset of which posts we want to display
          // so for page 1, 0 * 10 = 0 offset, for page 2, 1 * 10 = 10 posts offset,
          // etc
          offset: index * postsPerPage,

          // We need to tell the template how many posts to display too
          postsPerPage,

          nextPagePath: getPagePath(pageNumber + 1),
          previousPagePath: getPagePath(pageNumber - 1),
        },
      })
    })
  )
}

/**
 * This function creates the career post monthly archive pages
 */
async function createCareerPostMonthlyArchive({ careerPosts, gatsbyUtilities }) {
  const graphqlResult = await gatsbyUtilities.graphql(/* GraphQL */ `
    {
      allWpCareerPost {
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

  const postMap = graphqlResult.data.allWpCareerPost.edges

  return Promise.all(
    postMap.map(async (archivePage) => {
      await gatsbyUtilities.actions.createPage({
        path: `/career-blog/${archivePage.node.MonthlyArchive.archiveSlug}`,
        component: path.resolve(`./src/templates/career-blog-monthly-archive.js`),
        context: {
          pubTitle: archivePage.node.MonthlyArchive.archiveLabel,
          pubDate: archivePage.node.MonthlyArchive.archiveSlug,
        }
      })
    })
  )

}


/**
 * This function queries Gatsby's GraphQL server and asks for
 * All WordPress blog posts. If there are any GraphQL error it throws an error
 * Otherwise it will return the posts 🙌
 *
 * We're passing in the utilities we got from createPages.
 * So see https://www.gatsbyjs.com/docs/node-apis/#createPages for more info!
 */
async function getPosts({ graphql, reporter }) {
  const graphqlResult = await graphql(/* GraphQL */ `
    query WpPosts {
      # Query all WordPress blog posts sorted by date
      allWpPost(sort: { fields: [date], order: DESC }) {
        edges {
          previous {
            id
          }

          # note: this is a GraphQL alias. It renames "node" to "post" for this query
          # We're doing this because this "node" is a post! It makes our code more readable further down the line.
          post: node {
            id
            uri
            slug
          }

          next {
            id
          }
        }
      }
    }
  `)

  if (graphqlResult.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      graphqlResult.errors
    )
    return
  }

  return graphqlResult.data.allWpPost.edges
}


/**
 * This function pulls all the news posts from graphql
 */
 async function getNews({ graphql, reporter }) {
  const graphqlResult = await graphql(/* GraphQL */ `
    query WpNewsSingle {
      # Query all WordPress blog posts sorted by date
      allWpNewsSingle(sort: { fields: [date], order: DESC }) {
        edges {
          previous {
            id
          }

          # note: this is a GraphQL alias. It renames "node" to "post" for this query
          # We're doing this because this "node" is a post! It makes our code more readable further down the line.
          newsPost: node {
            id
            uri
            slug
          }

          next {
            id
          }
        }
      }
    }
  `)

  if (graphqlResult.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      graphqlResult.errors
    )
    return
  }

  return graphqlResult.data.allWpNewsSingle.edges
}

/**
 * This function pulls all the wellness posts from graphql
 */
 async function getWellnessPosts({ graphql, reporter }) {
  const graphqlResult = await graphql(/* GraphQL */ `
    query WpWellnessPost {
      # Query all WordPress wellness posts sorted by date
      allWpWellnessPost(sort: { fields: [date], order: DESC }) {
        edges {
          previous {
            id
          }

          # note: this is a GraphQL alias. It renames "node" to "post" for this query
          # We're doing this because this "node" is a post! It makes our code more readable further down the line.
          wellnessPost: node {
            id
            uri
            slug
          }

          next {
            id
          }
        }
      }
    }
  `)

  if (graphqlResult.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      graphqlResult.errors
    )
    return
  }

  return graphqlResult.data.allWpWellnessPost.edges
}

/**
 * This function pulls all the wellness posts from graphql
 */
 async function getCaseStudies({ graphql, reporter }) {
  const graphqlResult = await graphql(/* GraphQL */ `
    query WpCaseStudy {
      # Query all WordPress case studies sorted by date
      allWpCaseStudy(sort: { fields: [date], order: DESC }) {
        edges {
          # note: this is a GraphQL alias. It renames "node" to "caseStudy" for this query
          # We're doing this because this "node" is a post! It makes our code more readable further down the line.
          caseStudy: node {
            id
            uri
            slug
          }
        }
      }
    }
  `)

  if (graphqlResult.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      graphqlResult.errors
    )
    return
  }

  return graphqlResult.data.allWpCaseStudy.edges
}

/**
 * This function pulls all the career posts from graphql
 */

 async function getCareerPosts({ graphql, reporter }) {
  const graphqlResult = await graphql(/* GraphQL */ `
    query WpCareerPost {
      # Query all WordPress career posts sorted by date
      allWpCareerPost(sort: { fields: [date], order: DESC }) {
        edges {
          # note: this is a GraphQL alias. It renames "node" to "caseStudy" for this query
          # We're doing this because this "node" is a post! It makes our code more readable further down the line.
          careerPost: node {
            id
            uri
            slug
          }
        }
      }
    }
  `)

  if (graphqlResult.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      graphqlResult.errors
    )
    return
  }

  return graphqlResult.data.allWpCareerPost.edges
}