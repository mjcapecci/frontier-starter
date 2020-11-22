import React from "react"
import Layout from "../components/Default/Layout"
import Helmet from "react-helmet"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { HowTo } from "../components/IndexSections/index"

function BlogPostLayout({ pageContext }) {
  const { title } = pageContext.frontmatter

  return (
    <Layout>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <section className="pattern article-section">
        <article className="container">
          <header>
            <h1>{title}</h1>
          </header>
          <MDXRenderer>{pageContext.body}</MDXRenderer>
        </article>
      </section>
      <HowTo />
    </Layout>
  )
}

export default BlogPostLayout
