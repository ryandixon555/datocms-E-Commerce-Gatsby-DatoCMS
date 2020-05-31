import 'bootstrap/dist/css/bootstrap.css'
import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Layout from "../layouts/index"
import Img from 'gatsby-image'

import { GlobalBackground } from '../style/GlobalBackground'
import MyNavBar from '../components/Navbar'
import Footer from '../components/Footer'

const Contact = ({ data: { contact } }) => (
    <div>
     <MyNavBar />
    <GlobalBackground>
    <h1 className="home__title">{contact.headline}</h1>

    </GlobalBackground>
  
    <Footer />
    </div>
  )
  
  export default Contact
  
  export const query = graphql`
    query ContactQuery {
      contact: datoCmsContact {
        headline
      }
    }
  `