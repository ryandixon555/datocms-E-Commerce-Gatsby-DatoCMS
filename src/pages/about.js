import 'bootstrap/dist/css/bootstrap.css'
import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Layout from "../layouts/index"
import Img from 'gatsby-image'

import MyNavBar from '../components/Navbar'

const About = ({ data: { about } }) => (
  <div>
   <MyNavBar />
      <article className="sheet">

      <div className="sheet__inner">
        <h1 className="sheet__title">{about.headline}</h1>
        <h1 className="sheet__title">{about.headlineDescription}</h1>
      </div>
    </article>
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