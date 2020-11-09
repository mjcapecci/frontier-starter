import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { MainNav, MobileNav } from "../Navbar/index"

import "../../styles/index.scss"

import SEO from "./seo"
import HeroMain from "../../components/Hero/HeroMain"
import { FormSection } from "../../components/Contact/index"
import useWindowSize from "../../utils/useWindowSize"

const Layout = ({ page, children }) => {
  const [currentPage, setPage] = useState("")
  const width = useWindowSize().width

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  useEffect(() => {
    if (window) {
      setPage(window.location.pathname)
    }
  }, [])

  return (
    <>
      <SEO title={page} />
      {width > 991 ? (
        <MainNav page={currentPage} setPage={setPage} />
      ) : (
        <MobileNav page={currentPage} setPage={setPage} />
      )}
      <HeroMain />
      <main>{children}</main>
      <FormSection />
      <footer>
        © {new Date().getFullYear()}, Built by
        {` `}
        <a href="https://www.michaelcapecci.com">Frontier Web Development</a>
      </footer>
    </>
  )
}

export default Layout
