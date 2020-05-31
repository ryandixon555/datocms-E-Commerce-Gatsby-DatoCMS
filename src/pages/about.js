import 'bootstrap/dist/css/bootstrap.css'
import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Layout from "../layouts/index"
import Img from 'gatsby-image'
import { GlobalBackground } from '../style/GlobalBackground'
import MyNavBar from '../components/MyNavbar'
import Footer from '../components/Footer'

const About = ({ data: { about } }) => (
  <div>
   <MyNavBar />

   <GlobalBackground>
      <h1 className="home__title">{about.headline}</h1>
      <h1 className="home_intro__text">{about.headlineDescription}</h1>
   </GlobalBackground>
     
  <Footer />
  </div>
)

export default About

export const query = graphql`
  query AboutQuery {
    about: datoCmsAbout {
      headline
      headlineDescription
    }
  }
`