import React from "react"
import Layout from "../components/Default/Layout"
import Hero from "../components/Hero/HeroMain"
import { UnderHero, Cards, About } from "../components/IndexSections/index"

const IndexPage = () => {
  return (
    <Layout page={"Home"}>
      <Hero />
      <UnderHero />
      <Cards />
      <About />
    </Layout>
  )
}

export default IndexPage
