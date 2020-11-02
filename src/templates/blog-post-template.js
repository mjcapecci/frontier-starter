import React from 'react'
import Layout from '../components/Default/Layout'
import Helmet from 'react-helmet'
import { MDXRenderer } from "gatsby-plugin-mdx"

function BlogPostLayout({ pageContext }) {

  const {title, author, date} = pageContext.frontmatter

  console.log(pageContext)

  return (
    <Layout>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <article>
        <header>
          <h1>{title}</h1>
          <span>Author: {author}</span>
          <time>Date: {date}</time>
        </header>
        <MDXRenderer>{pageContext.body}</MDXRenderer>
      </article>
    </Layout>
  )
}

export default BlogPostLayout