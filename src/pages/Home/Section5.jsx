import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

import IOS from "../../assets/appstore.png";
import android from "../../assets/google.webp";
import download from "../../assets/resturant.webp";

import brand1 from "../../assets/burgeroclock.png";
import brand2 from "../../assets/lab.jpeg";
import brand3 from "../../assets/dominos.png";
import brand4 from "../../assets/kfc.png";
import brand5 from "../../assets/optp.jpeg";
import brand6 from "../../assets/burgeroclock.png";
import brand7 from "../../assets/burgeroclock.png";
import brand8 from "../../assets/burgeroclock.png";

function Section5() {
  return (
    <>
      {/* APP DOWNLOAD SECTION */}
      <section className="app_section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="text-center text-lg-start mb-5 mb-lg-0">
              <h4 className="app_subtitle">Download Mobile App and</h4>
              <h2 className="app_title">Save Up to 20%</h2>
              <p className="app_para">
                Order your favourite food faster and easier. Exclusive app-only
                discounts available every day!
              </p>
              <div className="app_buttons">
                <Link to="/">
                  <img src={IOS} alt="App Store" className="img-fluid store_badge me-3" />
                </Link>
                <Link to="/">
                  <img src={android} alt="Google Play" className="img-fluid store_badge" />
                </Link>
              </div>
            </Col>

            <Col lg={6} className="text-center">
              <img src={download} alt="App Preview" className="img-fluid app_mockup" />
            </Col>
          </Row>
        </Container>
      </section>

      {/* BRAND LOGOS CAROUSEL */}
      <section className="brand_section py-5">
        <Container>
          <Row>
            <Col className="text-center mb-4">
              <h5 className="brand_heading">Our Trusted Partners</h5>
            </Col>
          </Row>
          <Carousel indicators={false} controls={false} interval={2500}>
            <Carousel.Item>
              <div className="d-flex justify-content-center align-items-center flex-wrap gap-4 py-3">
                <img src={brand1} alt="brand" className="brandimg" />
                <img src={brand2} alt="brand" className="brandimg" />
                <img src={brand3} alt="brand" className="brandimg" />
                <img src={brand4} alt="brand" className="brandimg" />
                <img src={brand5} alt="brand" className="brandimg" />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="d-flex justify-content-center align-items-center flex-wrap gap-4 py-3">
                <img src={brand1} alt="brand" className="brandimg" />
                <img src={brand2} alt="brand" className="brandimg" />
                <img src={brand3} alt="brand" className="brandimg" />
                <img src={brand4} alt="brand" className="brandimg" />
                <img src={brand5} alt="brand" className="brandimg" />
              </div>
            </Carousel.Item>
          </Carousel>
        </Container>
      </section>
    </>
  );
}

export default Section5;