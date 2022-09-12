import React from 'react'
// import {Row, Col  } from 'react-bootstrap'
import Training from '../components/Training'
// import trainings from '../trainings'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDesktop, faDatabase, faTools} from '@fortawesome/free-solid-svg-icons'

import {Link} from "react-scroll"

const HomeScreen = () => {
    return (
      <div id="services" className="services">
        <h1 className="text-center py-3">
          <h1>Sign Up Today</h1>
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
                  <Link
                    smooth={true}
                    to="projects"
                    offset={-110}
                    href="#"
                    className="service-link"
                  >
                    <h3> Free Consultation</h3>
                  </Link>
                  <p>
                    {" "}
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus earum dolore omnis!.{" "}
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
                      icon={faDatabase}
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
                    <h3> JoinMyTeam</h3>
                  </Link>
                  <p>
                    {" "}
                    Technologies: Amazon RDB | Amazon DynamoDB | MySQL | MongoDB
                    | PostgreSQL
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
                      icon={faTools}
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
                  <p>
                    Certifications: Software Engineering Immersive | PCEP -
                    Certified Entry-Level Python Programmer
                  </p>
                </div>
              </div>
              {/*  */}
            </div>
          </div>
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
