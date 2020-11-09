import React from "react"
import Layout from "../components/Default/Layout"
import {
  Mission,
  UnderHero,
  Cards,
  About,
  HowTo,
} from "../components/IndexSections/index"
import { FormSection } from "../components/Contact/index"

const IndexPage = () => {
  return (
    <Layout page={"Get a Quote"}>
      <Mission />
      <UnderHero />
      <Cards />
      <About />
      <HowTo />
    </Layout>
  )
}

export default IndexPage
