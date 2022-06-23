import React from 'react'
import {Container} from 'react-bootstrap'
import TestimonialCarousel from './TestimonialCarousel'

function Testimonials() {
    return (
      <Container className="testimonal">
        <h1 className="text-center py-3">Client Testimonials</h1>
        <div className="container">
          <div className="testimonal-content">
            <TestimonialCarousel />
          </div>
        </div>
      </Container>
    );
}

export default Testimonials
