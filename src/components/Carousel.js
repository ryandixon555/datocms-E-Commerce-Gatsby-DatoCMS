// import 'bootstrap/dist/css/bootstrap.css'
// import React from "react";
// import Carousel from 'react-bootstrap/Carousel'
// import { StaticQuery, graphql } from 'gatsby'

// const HomeCarousel = ({ data: { home } }) (
//     <div>
//     <Carousel>
//         <Carousel.Item>
//             <img
//                 className="d-block w-100"
//                 src={home.homeFooterImages.url}
//                 alt="First slide"
//             />
//             <Carousel.Caption>
//             <h3>First slide label</h3>
//             <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//             </Carousel.Caption>
//         </Carousel.Item>
    
//         <Carousel.Item>
//             <img
//                 className="d-block w-100"
//                 src={home.homeFooterImages.url}
//                 alt="second slide"
//             />
//             <Carousel.Caption>
//             <h3>Second slide label</h3>
//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//             </Carousel.Caption>
//         </Carousel.Item>

//         <Carousel.Item>
//             <img
//                 className="d-block w-100"
//                 src={home.homeFooterImages.url}
//                 alt="third slide"
//             />
//             <Carousel.Caption>
//             <h3>Third slide label</h3>
//             <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
//             </Carousel.Caption>
//         </Carousel.Item>
//     </Carousel>
// </div>

// )


// export const query = graphql`
//   query CarouselQuery {
//     home: datoCmsHome {
//         homeFooterImages {
//             url
//         }
//     }
//   }
// `

// export default HomeCarousel