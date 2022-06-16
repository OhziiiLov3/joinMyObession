import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'


function Training({ training }) {
    return (
            <Card className="mx-auto p-4 ">
            <a href={`/training/${training._id}`}> 
                <Card.Img src={training.image} />           
            </a>
            <Card.Body>
                <a href={`/training/${training._id}`}>
                    <Card.Title as="div">
                    <strong>{training.name}</strong>
                    </Card.Title>
                </a>
            <Card.Text as="div">
                   <div className="my-3">
                       <Rating value={training.rating} text={`${training.numReviews} Reviews` } color={'#f8e825'} />
                   </div>
            </Card.Text> 
            <Card.Text as="h3">
            ${training.price}
            </Card.Text>

            </Card.Body>

            </Card>
           
    )
}

export default Training
