import React from 'react'
import {Link, useParams} from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button, Card } from 'react-bootstrap'
import Rating from '../components/Rating'
import trainings from '../trainings'
import { InlineWidget } from "react-calendly";



function ProductScreen({ match }) {
    const training_id = useParams();
    const training = trainings.find((t) => t._id === training_id.id)



    return (
      <div>
        <Link to="/" className="btn btn-light my-4 py-2">
          Go Back
        </Link>
        <Row>
          <Col md={6}>
            <Image
              className="w-100"
              src={training.image}
              alt={training.name}
              fluid
            />
          </Col>
          <Col md={4} className="mx-auto py-2">
            <ListGroup variant="flush">
              <ListGroup.Item className="py-2 ">
                <h3 className="consultationTitle">{training.name}</h3>
              </ListGroup.Item>

              {/* <ListGroup.Item>
                {/* <Rating
                  value={training.rating}
                  text={`${training.numReviews} Reviews`}
                  color="#f8e825"
                /> */}
              {/* <span>
                  <i
                    style={{ color: "white" }}
                    className="fa-solid fa-handshake"
                    size="5x"
                  ></i>
                </span> */} 
              {/* </ListGroup.Item>  */}

              <ListGroup.Item>User:${training.user}</ListGroup.Item> 

              <ListGroup.Item>
                Description:{training.description}
              </ListGroup.Item>
              <ListGroup.Item>
                <div
                  className="App py-2 "
                  styles={{
                    height: "1000px",
                  }}
                >
                  <InlineWidget url="https://calendly.com/keith-baskerville-ohz" />
                </div>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          {/* <Col md={3}>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>Price:</Col>
                    <Col>
                      <strong> {training.category}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Status:</Col>
                    <Col>
                      {training.openSlots > 0 ? "Class Open" : "Class Closed"}
                    </Col>
                  </Row>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col> */}
        </Row>
      </div>
    );
}

export default ProductScreen
