import 'bootstrap/dist/css/bootstrap.css';
import React from 'react'

import MyNavBar from '../components/NavBar'
import styled from 'styled-components'

import { GlobalBackground } from '../style/GlobalBackground'
import Footer from '../components/Footer'

const SuccessPage = ({ data: { contact } }) => (
  <>
    <MyNavBar />
    
    <GlobalBackground>
      <h1 className="home_intro__text">{contact.success}</h1>
    </GlobalBackground>
    
    <Footer />
  </>
)

export const query = graphql`
  query ContactSuccessQuery {
    contact: datoCmsContact {
      success
      headline
    }
  }
`

export default SuccessPage
