import 'bootstrap/dist/css/bootstrap.css'
import { GlobalBackground } from '../style/GlobalBackground'
import Img from 'gatsby-image'
import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Carousel from 'react-bootstrap/Carousel'
import { Container, Row, Col } from 'react-bootstrap'
import MyNavBar from '../components/Navbar'

const Home = ({ data: { home } }) => (
  <div>
    <MyNavBar />

    <GlobalBackground>
    
      <div className="sheet__inner">
        <h1 className="sheet__title">{home.headline}</h1>
        <h1 className="sheet__title">{home.contactEmail}</h1>
      </div>
     
    </GlobalBackground>

    <Container>
      <Row>
        <Col>
          <div className = "carousel-styling">
              <Carousel slide={true} controls={true} indicators={true} interval={1500}>
                  {home.gallery.map(({ fluid }) => (
                    <Carousel.Item>
                      <img  className="d-block w-100" alt={fluid.title} key={fluid.src} src={fluid.src} />
                    </Carousel.Item>
                  ))}
                </Carousel>
          </div>
        </Col>
      </Row>
    </Container>
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
      contactEmail
      }
  }
`