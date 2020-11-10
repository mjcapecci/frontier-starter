import React from "react"
import { Link } from "gatsby"

const PostCard = ({ post }) => {
  return (
    <div className="card post-card">
      <div class="card-body">
        <img src={post.node.frontmatter.featuredImage.publicURL} width="100%" />
        <h5 class="card-title">{post.node.frontmatter.title}</h5>
        <p class="card-text">{post.node.excerpt}</p>
        <Link to={post.node.fields.slug} class="btn btn-2">
          Read More
        </Link>
      </div>
    </div>
  )
}

export default PostCard
