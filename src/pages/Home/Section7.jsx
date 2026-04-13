import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Section7() {
  return (
    <section className="guarantee_section">
      <Container>
        <Row className="justify-content-center">
          <Col sm={ 8 } className="text-center">
            <h4 className="guarantee_subtitle">WE GUARANTEE</h4>
            <h2 className="guarantee_title">20 Minutes Delivery</h2>
            <p className="guarantee_para">
              Craving something delicious? We deliver your favorite meals hot and fresh within 20 minutes. Fast service, reliable delivery, and quality food — every single time.

            </p>
            <Link to="/" className="btn_red guarantee_btn px-5 py-3 rounded-0 d-inline-block">
              CALL: 999-888-7777
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Section7;