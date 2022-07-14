import React from 'react'
import { Container, Row, Col  } from 'react-bootstrap'
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  RedditShareButton,
  RedditIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";


const Footer = () => {
    return (
      <footer className="footer">
        <Container className="container">
          <Row className="row">
            <Col className="text-center py-3">
              Copyright &copy; JoinMyObession
            </Col>
            <div className="col-lg-5 col-md-5 col-sm-6 align-itmes-center">
              <div className="d-flex justify-content-center">
                <FacebookShareButton
                  url={"https://zootyworld.com/zooty-water"}
                  quote={"Zooty Water, Solarized Strcutred Alkaline Water!"}
                  hashtag="#BlackEntrepreneur"
                >
                  <FacebookIcon className="mx-3" size={36} />
                </FacebookShareButton>
                <TwitterShareButton
                  url={"https://zootyworld.com/zooty-water"}
                  quote={"Zooty Water, Solarized Strcutred Alkaline Water!"}
                  hashtag="#BlackEntrepreneur"
                >
                  <TwitterIcon className="mx-3" size={36} />
                </TwitterShareButton>
                <RedditShareButton
                  url={"https://zootyworld.com/zooty-water"}
                  quote={"Zooty Water, Solarized Strcutred Alkaline Water!"}
                  hashtag="#BlackEntrepreneur"
                >
                  <RedditIcon className="mx-3" size={36} />
                </RedditShareButton>
                <LinkedinShareButton
                  url={"https://zootyworld.com/zooty-water"}
                  quote={"Zooty Water, Solarized Strcutred Alkaline Water!"}
                  hashtag="#BlackEntrepreneur"
                >
                  <LinkedinIcon className="mx-3" size={36} />
                </LinkedinShareButton>
              </div>
              <p className="pt-3 text-center">
                Copyright&copy;
                {new Date().getFullYear()}&nbsp;Zooty World LLC | All Rights
                Reserved
              </p>
            </div>
          </Row>
        </Container>
      </footer>
    );
}

export default Footer
