import React from 'react'
import {Carousel} from 'react-bootstrap'
// import {Carousel} from 'react-responsive-carousel'
import  "react-responsive-carousel/lib/styles/carousel.min.css"

// Avatars Import
import avatar1 from "../images/avatars/avatar-1.jpg"; 
import avatar2 from "../images/avatars/avatar-2.jpg"
import avatar3 from "../images/avatars/avatar-3.jpg"
import avatar4 from "../images/avatars/avatar-4.jpg"


function TestimonialCarousel() {
    return (
      <Carousel
        interval={5000}
        showArrows={true}
        infiniteLoop={true}
        showStatus={false}
        variant="light"
        fade
      >
        <Carousel.Item className="myCarousel">
          <img
            className="w-50 py-5"
            style={{ height: 450 }}
            src={avatar1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              atque saepe amet temporibus minus non quaerat molestiae ab
              reprehenderit at?
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="myCarousel">
          <img
            className="w-50 py-5"
            style={{ height: 450 }}
            src={avatar2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              atque saepe amet temporibus minus non quaerat molestiae ab
              reprehenderit at?.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="myCarousel">
          <img
            className="w-50 py-5"
            style={{ height: 450 }}
            src={avatar3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              atque saepe amet temporibus minus non quaerat molestiae ab
              reprehenderit at?
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="myCarousel">
          <img
            className="w-50 py-5"
            style={{ height: 450 }}
            src={avatar4}
            alt="Fourth slide"
          />

          <Carousel.Caption>
            <h3>Fourth slide label</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              atque saepe amet temporibus minus non quaerat molestiae ab
              reprehenderit at?
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
}

export default TestimonialCarousel
