import React from "react";
import {Carousel, Container, Row, Col} from 'react-bootstrap'

function BootStrapCarousel() {
  return (
    <div>
      <Container className="mx-auto p-5 d-flex justify-content-center">
        <Row>
          <Col className="text-center py-3">
            <h1>JoinMyObession</h1>
            <Carousel variant="light">
              <Carousel.Item className="p-2 col-example text-left">
                <img
                  className="d-block"
                  style={{ height: 500 }}
                  src="/images/dsc08173.JPG"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h5>First slide label</h5>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item className="p-2 col-example text-left">
                <img
                  className="d-block "
                  style={{ height: 500 }}
                  src="/images/ClassPic_1.jpeg"
                  alt="Second slide"
                />
                <Carousel.Caption>
                  <h5>Second slide label</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item className="p-2 col-example text-left">
                <img
                  className="d-block "
                  style={{ height: 500 }}
                  src="/images/ClassPic_2.JPG"
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h5>Third slide label</h5>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default BootStrapCarousel;
