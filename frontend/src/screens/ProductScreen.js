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
           {training.name}
        </div>
    )
}

export default ProductScreen
