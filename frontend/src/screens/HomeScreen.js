import React from 'react'
// import {Row, Col  } from 'react-bootstrap'
// import Training from '../components/Training'
// import trainings from '../trainings'
import { LinkContainer, Button} from "react-router-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faDesktop,
  faDumbbell,
  faUser
} from "@fortawesome/free-solid-svg-icons";

import {Link} from "react-scroll"
import { Container } from 'react-bootstrap';

const HomeScreen = () => {
    return (
      <div id="services" className="services">
        <h1 className="text-center py-3">
          <h1>Sign Up Today</h1>
          <Container>
            <div className="container">
              <div className="row">
                <div className="col-md-4 col-sm-7">
                  <div className="box">
                    <div className="circle">
                      {" "}
                      <FontAwesomeIcon
                        className="service-icon"
                        icon={faDesktop}
                        size="2x"
                      />{" "}
                    </div>
                    <LinkContainer to="/training/1">
                      <Link className="service-link">
                        <h3> Free Consultation</h3>
                      </Link>
                    </LinkContainer>

                    <LinkContainer to="/training/1">
                      <Link
                        type="button"
                        className="card-btn btn btn-success my-4 py-2"
                      >
                        <h2>Book Now</h2>
                      </Link>
                    </LinkContainer>
                    <p>
                      {" "}
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptatibus earum dolore omnis!.{" "}
                    </p>
                  </div>
                </div>
                {/*  */}
                <div className="col-md-4 col-sm-7">
                  <div className="box">
                    <div className="circle">
                      {" "}
                      <FontAwesomeIcon
                        className="service-icon"
                        icon={faUser}
                        size="2x"
                      />{" "}
                    </div>
                    <Link
                      smooth={true}
                      to="/classes"
                      offset={-110}
                      href="#"
                      className="service-link"
                    >
                      <h3> JoinMyTeam</h3>
                    </Link>
                    <LinkContainer to="/login">
                      <Link
                        type="button"
                        className="card-btn btn btn-success my-4 py-2"
                      >
                        <h2>Join</h2>
                      </Link>
                    </LinkContainer>
                    <p>
                      {" "}
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptatibus earum dolore omnis!.{" "}
                    </p>
                  </div>
                </div>
                {/*  */}
                <div className="col-md-4 col-sm-7">
                  <div className="box">
                    <div className="circle">
                      {" "}
                      <FontAwesomeIcon
                        className="service-icon"
                        icon={faDumbbell}
                        size="2x"
                      />{" "}
                    </div>
                    <Link
                      smooth={true}
                      to="projects"
                      offset={-110}
                      href="#"
                      className="service-link"
                    >
                      <h3>Learn More</h3>
                    </Link>
                    <LinkContainer to="/classes">
                      <Link
                        type="button"
                        className="card-btn btn btn-success my-4 py-2"
                      >
                        <h2>Learn More</h2>
                      </Link>
                    </LinkContainer>
                    <p>
                      {" "}
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptatibus earum dolore omnis!.{" "}
                    </p>
                  </div>
                </div>

                {/*  */}
              </div>
            </div>
          </Container>
        </h1>
      </div>

      // <div id="home">
      //   <h1 className="text-center py-3">Sign Up Today</h1>
      //   <Row className="d-flex justify-content-center mx-auto py-2 w-100">

      //     {trainings.map((training) => (
      //       <Col key={training._id} sm={12} md={6} lg={4} xl={3}>
      //         <Training training={training} />
      //       </Col>
      //     ))}
      //   </Row>
      // </div>
    );
}

export default HomeScreen
