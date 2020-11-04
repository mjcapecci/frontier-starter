// src/components/blog/index.js
import React from 'react'
import Layout from '../components/Default/Layout'
import {PostCard} from '../components/Posts/index'

function Blog({ pageContext }) {

  const {posts} = pageContext

  return (
    <Layout>
      {posts.map(post => (
        <PostCard post={post} />
      ))}
    </Layout>
  )
}

export default Blog