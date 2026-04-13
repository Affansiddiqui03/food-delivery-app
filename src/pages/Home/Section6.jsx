import React from 'react'
import { Container, Row, Col, Carousel } from "react-bootstrap";
import user1 from "../../assets/user1.jpeg"
import user2 from "../../assets/man.jpg"
import user3 from "../../assets/man1.jpg"
import user4 from "../../assets/women.jpg"

const testimonials = [
  {
    img: user1,
    text: "The food arrived hot and fresh, and the delivery was super quick. I loved how easy it was to track my order in real time. Definitely my go-to app for late-night cravings!",
    rating: 4,
    name: "Ismail Shady",
  },
  {
    img: user2,
    text: "Amazing experience! The variety of restaurants is impressive and the checkout process is smooth. My order was delivered exactly on time and tasted delicious.",
    rating: 5,
    name: "Abdul Rahim",
  },
  {
    img: user3,
    text: "Great service and friendly delivery rider. The packaging was neat and everything was perfectly intact. I’ll be ordering again for sure!",
    rating: 4,
    name: "Saqlain",
  },
  {
    img: user4,
    text: "Fast delivery and excellent customer support. I had a small issue with my order and it was resolved तुरंत. Highly recommend this app to anyone who loves convenience.",
    rating: 5,
    name: "Sara Malik",
  },
];

function Section6() {
  return (
    <section className="testimonial_section">
      <Container>
        <Row>
          <Col lg={{ span: 8, offset: 2 }} className="text-center">
            <h2>What Our Customers Say</h2>
            <p className="testimonial_para">Real reviews from real food lovers</p>
          </Col>
        </Row>

        <Row>
          <Col lg={{ span: 8, offset: 2 }}>
            <Carousel indicators={true} controls={true} interval={3000}>
              {testimonials.map((item, index) => (
                <Carousel.Item key={index}>
                  <div className="testimonial_card text-center">
                    <div className="testimonial_img_wrapper">
                      <img
                        src={item.img}
                        alt={item.name}
                        className="testimonial_img"
                      />
                    </div>
                    <p className="testimonial_text">{item.text}</p>
                    <div className="testimonial_rating mb-2">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <i
                          key={i}
                          className={`bi ${i < item.rating ? "bi-star-fill" : "bi-star"}`}
                        ></i>
                      ))}
                    </div>
                    <h5 className="testimonial_name">By {item.name}</h5>
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Section6;