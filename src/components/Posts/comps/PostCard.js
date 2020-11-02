import React from 'react'
import { Link } from 'gatsby'

const PostCard = ({post}) => {
  return (
    <div className="card post-card">
      <p>{post.node.frontmatter.title}</p>
      <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <Link to={post.node.fields.slug} class="btn btn-primary">Go somewhere</Link>
  </div>
    </div>
  )
}

export default PostCard
