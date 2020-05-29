import 'bootstrap/dist/css/bootstrap.css'
import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Layout from "../layouts/index"
import Img from 'gatsby-image'

import MyNavBar from '../components/Navbar'

const Contact = ({ data: { contact } }) => (
    <div>
     <MyNavBar />
        <article className="sheet">
  
        <div className="sheet__inner">
          <h1 className="sheet__title">{contact.headline}</h1>

        </div>
      </article>
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