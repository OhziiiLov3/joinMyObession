import React from 'react'
import {Link, useParams} from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button, Card } from 'react-bootstrap'
import Rating from '../components/Rating'
import trainings from '../trainings'

function ProductScreen({ match }) {
    const training_id = useParams();
    const training = trainings.find((t) => t._id === training_id.id)



    return (
        <div>
            <Link to='/' className='btn btn-light my-3' >Go Back</Link>
            <Row>
                <Col md={6}>
                    <Image src={training.image} alt={training.name} fluid />
                </Col>
                <Col md={3}>
                    <ListGroup variant="flush">
                    <ListGroup.Item>
                        <h3>{training.name}</h3>
                    </ListGroup.Item>

                    <ListGroup.Item>
                        <Rating value={training.rating} text={`${training.numReviews} Reviews`} color='#f8e825'/>
                    </ListGroup.Item>

                     <ListGroup.Item>
                        Price:${training.price}
                    </ListGroup.Item>

                    <ListGroup.Item>
                        Description:{training.description}
                    </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={3}>
                      <Card>
                            <ListGroup variant='flush'>
                                <ListGroup.Item>
                                    <Row>
                                        <Col>Price:</Col>
                                        <Col>
                                        <strong> ${training.price}</strong>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Row>
                                        <Col>Status:</Col>
                                        <Col>
                                        {training.openSlots > 0 ? 'Class Avaliable' : 'Class Closed'}
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                                 <ListGroup.Item>
                                     <Button className='btn-block' disabled={training.openSlots == 0} type='button'>Book Class</Button>
                                 </ListGroup.Item>
                            </ListGroup>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default ProductScreen
