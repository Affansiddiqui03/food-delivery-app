import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Promoteimage from "../../assets/promote.jpeg";

function Section4() {
  return (
    <>
      <section className="promotion_section">
        <Container>
          <Row className="align-items-center">
            
            <Col lg={6} className="text-center mb-5 mb-lg-0">
              <img
                src={Promoteimage}
                className="img-fluid"
                alt="prom"
              />
            </Col>

            <Col lg={6} className="px-5">
              <h2>
                Nothing Brings People Together Like a Good Food
              </h2>

              <p>
                Great food creates unforgettable moments. Whether you're
                enjoying a meal with family or hanging out with friends,
                our delicious recipes are made to bring people closer
                and make every bite special.
              </p>

              <ul>
                <li>
                  Freshly prepared meals packed with bold and exciting flavors.
                </li>
                <li>
                  Delicious options for every taste — from classic favorites
                  to modern bites.
                </li>
                <li>
                  Made to enjoy with friends, family, or even on your own.
                </li>
              </ul>
            </Col>

          </Row>
        </Container>
      </section>

      {/* PARALLAX */}
      <section className="bg_parallax_scroll"></section>
    </>
  );
}

export default Section4;