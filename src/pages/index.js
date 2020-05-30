import 'bootstrap/dist/css/bootstrap.css'
import Img from 'gatsby-image'
import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Carousel from 'react-bootstrap/Carousel'
import MyNavBar from '../components/Navbar'


const Home = ({ data: { home } }) => (
<div>
  <MyNavBar />
  

  <div className="sheet__inner">
    <h1 className="sheet__title">{home.headline}</h1>
    <h1 className="sheet__title">{home.contactEmail}</h1>
  </div>

  <Carousel slide={true} controls={true} indicators={true} interval={2000}>
    {home.gallery.map(({ fluid }) => (
      <Carousel.Item>
      <img className="d-block w-100" alt={fluid.title} key={fluid.src} src={fluid.src} />
        <Carousel.Caption>
          <h3>{fluid.title}</h3>
         
        </Carousel.Caption>
        </Carousel.Item>
    ))}
  </Carousel>
  
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
        fluid(maxWidth: 50, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
          src
        }
      }
      contactEmail
      }
  }
`