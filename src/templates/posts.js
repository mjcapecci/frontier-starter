// src/components/blog/index.js
import React from "react"
import Layout from "../components/Default/Layout"
import { PostCard } from "../components/Posts/index"
import { HowTo } from "../components/IndexSections/index"

function Blog({ pageContext }) {
  const { posts } = pageContext

  return (
    <Layout page={"Blog"}>
      <section className="blog-container pattern">
        <div className="blog-index">
          {posts.map(post => (
            <PostCard post={post} />
          ))}
        </div>
      </section>
      <HowTo />
    </Layout>
  )
}

export default Blog
