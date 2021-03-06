import 'bootstrap/dist/css/bootstrap.css'
import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Layout from "../layouts/index"
import Img from 'gatsby-image'

import { GlobalBackground } from '../style/GlobalBackground'
import MyNavBar from '../components/MyNavBar'
import Footer from '../components/Footer'

import { ContactForm } from '../components/ContactForm'

const Contact = ({ data: { contact } }) => (
  <div>
    <MyNavBar />

    <GlobalBackground>
      <h1 className="home__title">{contact.headline}</h1>
    </GlobalBackground>

    <div className = "contact">
      <ContactForm />
    </div>
    

    <Footer />
  </div>
)

export const query = graphql`
  query ContactQuery {
    contact: datoCmsContact {
      headline
    }
  }
`

export default Contact;