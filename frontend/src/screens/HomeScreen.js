import React from 'react'
import {Row, Col  } from 'react-bootstrap'
import Training from '../components/Training'
import trainings from '../trainings'



const HomeScreen = () => {
    return (
      <div id="home">
        <h1 className="text-center py-3">Sign Up Today</h1>
        <Row className="d-flex justify-content-center mx-auto py-2 w-100">
          
          {trainings.map((training) => (
            <Col key={training._id} sm={12} md={6} lg={4} xl={3}>
              <Training training={training} />
            </Col>
          ))}
        </Row>
      </div>
    );
}

export default HomeScreen
