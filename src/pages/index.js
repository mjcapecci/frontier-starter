import React from "react"
import Layout from "../components/Default/Layout"
import Hero from "../components/Hero/HeroMain"
import { UnderHero, Cards } from "../components/IndexSections/index"

const IndexPage = () => {
  return (
    <Layout page={"Home"}>
      <Hero />
      <UnderHero />
      <Cards />
    </Layout>
  )
}

export default IndexPage
