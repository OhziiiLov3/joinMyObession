import React from 'react'
import {Carousel} from 'react-bootstrap'
// import {Carousel} from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"

// Avatars Import
import avatar1 from "../images/avatars/avatar-1.jpg"; 
import avatar2 from "../images/avatars/avatar-2.jpg"
import avatar3 from "../images/avatars/avatar-3.jpg"
import avatar4 from "../images/avatars/avatar-4.jpg"


function TestimonialCarousel() {
    return (
      <Carousel fade>
        <Carousel.Item>
          <img className="d-block w-100" src={avatar1} alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={avatar2} alt="Second slide" />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={avatar3} alt="Third slide" />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" 
          src={avatar4} 
          alt="Fourth slide" />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
}

export default TestimonialCarousel
