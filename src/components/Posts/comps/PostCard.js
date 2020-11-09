import React from "react"
import { Link } from "gatsby"

const PostCard = ({ post }) => {
  return (
    <div className="card post-card">
      <div class="card-body">
        <img src={post.node.frontmatter.featuredImage.publicURL} width="100%" />
        <h5 class="card-title">{post.node.frontmatter.title}</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <Link to={post.node.fields.slug} class="btn btn-1">
          Go somewhere
        </Link>
      </div>
    </div>
  )
}

export default PostCard
