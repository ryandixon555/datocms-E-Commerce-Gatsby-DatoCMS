import 'bootstrap/dist/css/bootstrap.css'
import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Layout from "../layouts/index"
import Img from 'gatsby-image'

import MyNavBar from '../components/Navbar'

const Home = ({ data: { home } }) => (
<div>
  <MyNavBar />

  <div className="sheet__inner">
    <h1 className="sheet__title">{home.headline}</h1>
    <h1 className="sheet__title">{home.contactEmail}</h1>
  </div>

</div>
)

export default Home

export const query = graphql`
  query HomeQuery {
    home: datoCmsHome {
      headline
      contactEmail
    }
  }
`