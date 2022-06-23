import React from 'react'
import {Container} from 'react-bootstrap'
import TestimonialCarousel from './TestimonialCarousel'

function Testimonials() {
    return (
      <Container className="testimonal">
        <h2>Client Testimonials</h2>
        <div className="container">
          <div className="testimonal-content">
            <TestimonialCarousel />
          </div>
        </div>
      </Container>
    );
}

export default Testimonials
