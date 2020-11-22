import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import scrollTo from "gatsby-plugin-smoothscroll"

const MainNav = ({ page, setPage }) => {
  useEffect(() => {
    if (window) {
      setPage(window.location.pathname)
    }
  }, [])

  const getLinkClassName = link => {
    if (page === link) return "nav-item active-nav-item"
    if (link != "/" && window.location.pathname.includes(link))
      return "nav-item active-nav-item"
    if (page != link) return "nav-item"
  }

  return (
    <nav class="navbar navbar-expand-lg">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li class={getLinkClassName("/")}>
            <Link to="/">Home</Link>
          </li>
          <li class={getLinkClassName("/posts")}>
            <Link to="/posts">Blog</Link>
          </li>
          <li class="nav-item">
            <a onClick={() => scrollTo("#how-to")}>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default MainNav
