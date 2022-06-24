import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'
import {Link} from 'react-router-dom'


function Training({ training }) {
    return (
      <Card className="d-block mx-auto p-3" >
        <Link to={`/training/${training._id}`}>
          <Card.Img className="d-block mx-auto py-2" src={training.image} />
        </Link>
        <Card.Body>
          <Card.Text className="text-center py-2" as="p">{training.bookingInfo}</Card.Text>
          <Link
            className="btn my-2  py-2 d-block btn-success"
            to={`/training/${training._id}`}
          >
            <Card.Title as="div">{training.name}</Card.Title>
          </Link>
          <Card.Text as="div">
            <div className="my-3">
              {/* <Rating
                value={training.rating}
                text={`${training.numReviews} Reviews`}
                color={"#f8e825"}
              /> */}
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    );
}

export default Training
