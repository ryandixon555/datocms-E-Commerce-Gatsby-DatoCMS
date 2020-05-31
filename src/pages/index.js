import 'bootstrap/dist/css/bootstrap.css'
import { GlobalBackground } from '../style/GlobalBackground'
import Img from 'gatsby-image'
import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Carousel from 'react-bootstrap/Carousel'
import { Container, Row, Col } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import MyNavBar from '../components/Navbar'
import Footer from '../components/Footer'

const Home = ({ data: { home } }) => (
  <div>
    <MyNavBar />

    <GlobalBackground>
    
      
        <h1 className="home__title">{home.headline}</h1>
      
     
    </GlobalBackground>

    <Container>
      <Row>
        <Col>
          <div className = "carousel-styling">
              <Carousel slide={true} controls={true} indicators={true} interval={1500}>
                  {home.gallery.map(({ fluid }) => (
                    <Carousel.Item>
                      <img className="d-block w-100" alt={fluid.title} key={fluid.url} src={fluid.src} />
                    </Carousel.Item>
                  ))}
                </Carousel>
          </div>
        </Col>
      </Row>
    </Container>

    <GlobalBackground>
    
    <h1 className="home__contact">{home.contactEmail}</h1>
    <p className = "home_intro__text">{home.introText}</p>

    <div className="home__footer__images">

    {home.homeFooterImages.map(({ fluid }) => (
      <Image alt={fluid.title} key={fluid.src} src={fluid.src} rounded />
    ))}

    

    </div>
   
  </GlobalBackground>

    <Footer />
  </div>
)

export default Home

export const query = graphql`
  query HomeQuery {
    home: datoCmsHome {
      introText
      headline
      gallery {
        url
        title
        fluid(maxWidth: 20, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
          src
        }
      }
      homeFooterImages {
        url
        title
        fluid(maxWidth: 20, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
          src
        }
      }
      contactEmail
      }
  }
`