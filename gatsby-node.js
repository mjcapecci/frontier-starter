const { createFilePath } = require("gatsby-source-filesystem")
const path = require("path")
const { slash } = require(`gatsby-core-utils`)

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === "Mdx") {
    const value = createFilePath({ node, getNode })
    createNodeField({
      node,
      name: "slug",
      value: `/posts${value}`,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    query {
      allMdx(sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
            id
            body
            excerpt(pruneLength: 250)
            fields {
              slug
            }
            frontmatter {
              title
              author
              date
              featuredImage {
                id
                publicURL
              }
            }
          }
        }
      }
    }
  `).then((results, errors) => {
    const posts = results.data.allMdx.edges

    if (errors) return Promise.reject(errors)
    posts.forEach((edge, i) => {
      createPage({
        path: edge.node.fields.slug,
        component: slash(path.resolve("./src/templates/blog-post-template.js")),
        context: {
          id: edge.node.id,
          body: edge.node.body,
          excerpt: edge.node.excerpt,
          fields: edge.node.fields,
          frontmatter: edge.node.frontmatter,
        },
      })
    })

    const postsPerPage = 5
    const numberOfPages = Math.ceil(posts.length / postsPerPage)

    Array.from({ length: numberOfPages }).forEach((page, i) => {
      createPage({
        path: i === 0 ? `/posts` : `/posts/${i + 1}`,
        component: slash(path.resolve("./src/templates/posts.js")),
        context: {
          posts: posts.slice(i * postsPerPage, i * postsPerPage + postsPerPage),
          numberOfPages,
          currentPage: i + 1,
        },
      })
    })
  })
}
