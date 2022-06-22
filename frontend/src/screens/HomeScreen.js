import React from 'react'
import {Row, Col  } from 'react-bootstrap'
import Training from '../components/Training'
import trainings from '../trainings'



const HomeScreen = () => {
    return (
        <div>
          <h1>Latest Classes</h1> 
          <Row className="d-flex justify-content-center">
              {trainings.map(training => (
                  <Col key={training._id} sm={12} md={6} lg={4} xl={3}>
                        <Training training={training} />
                  </Col>
              ))}
          </Row>
        </div>
    )
}

export default HomeScreen
