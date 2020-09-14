import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import "../../styles/index.scss"

import SEO from "./seo"

const Layout = ({ page, children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <SEO title={page} />
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built by
        {` `}
        <a href="https://www.michaelcapecci.com">Frontier Web Development</a>
      </footer>
    </>
  )
}

export default Layout
