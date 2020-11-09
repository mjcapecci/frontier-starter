import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import scrollTo from "gatsby-plugin-smoothscroll"
import MobileHamburger from "./MobileHamburger"

const MobileNav = ({ page, setPage }) => {
  const getLinkClassName = link => {
    if (page === link) return "nav-item active-nav-item"
    if (link != "/" && window.location.pathname.includes(link))
      return "nav-item active-nav-item"
    if (page != link) return "nav-item"
  }

  const [active, setActive] = useState(false)

  const closeNav = () => {
    setActive(false)
  }

  useEffect(() => {
    if (active) {
      document.body.style.overflowY = "hidden"
    } else {
      document.body.style.overflowY = "scroll"
    }
  }, [active])

  return (
    <>
      <MobileHamburger active={active} setActive={setActive} />
      <div
        class={
          active ? "mobile-nav-container" : "mobile-nav-container __hidden"
        }
      >
        <div class="mobile-nav">
          <ul class="mobile-navbar-nav">
            <li class={getLinkClassName("/")}>
              <Link to="/" onClick={() => closeNav()}>
                Home
              </Link>
            </li>
            <li class={getLinkClassName("/posts")}>
              <Link to="/posts" onClick={() => closeNav()}>
                Blog
              </Link>
            </li>
            <li class="nav-item">
              <a
                onClick={() => {
                  closeNav()
                  scrollTo("#main-contact-form")
                }}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default MobileNav
