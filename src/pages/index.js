import React from "react"
import Layout from "../components/Default/Layout"
import Hero from "../components/Hero/HeroMain"
import { Mission, UnderHero, Cards, About, HowTo } from "../components/IndexSections/index"
import {MainForm} from '../components/Contact/index'

const IndexPage = () => {
  return (
    <Layout page={"Home"}>
      <Hero />
      <Mission />
      <UnderHero />
      <Cards />
      <About />
      <HowTo />
      <MainForm />
    </Layout>
  )
}

export default IndexPage
