import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Pizza from "../../assets/pizza.jpg";
import Salad from "../../assets/salad.jpg";
import Delivery from "../../assets/delivery-bike..avif";

// Mock Data Cards
const mockData = [
  {
    image: Pizza,
    title: "Original Taste",
    paragraph: `Enjoy the authentic flavor crafted from fresh ingredients and our signature recipes. Every bite delivers a rich and satisfying experience you’ll love.`,
  },
  {
    image: Salad,
    title: "Quality Foods",
    paragraph: `We use only the freshest and highest quality ingredients to prepare meals that are both delicious and healthy, ensuring great taste in every serving.`,
  },
  {
    image: Delivery,
    title: "Fastest Delivery",
    paragraph: `Get your favorite meals delivered hot and fresh right to your doorstep with our quick and reliable delivery service.`,
  },
];

function Section2() {
  return (
    <>
      {/* Hero info + Button */ }
      <section className='aboutsection py-5 text-center'>
        <Container>
          <Row>
            <Col lg={ { span: 8, offset: 2 } }>
              <h2 className='mb-3'>Where Flavor Meets Perfection</h2>
              <p className='mb-4'>
                Discover a variety of delicious meals made with fresh ingredients, prepared to satisfy your cravings and deliver an unforgettable taste experience.
              </p>
              <Link to="/menu" className='order_now btn_red'>
                Explore Full Menu
              </Link>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Cards Section */ }
      <section className='about_wrapper py-5'>
        <Container>
          <Row className='justify-content-center'>
            { mockData.map((cardData, index) => (
              <Col md={ 6 } lg={ 4 } className='mb-4' key={ index }>
                <div className='about_box text-center p-4 shadow-sm rounded'>
                  <div className='about_icon mb-3'>
                    <img src={ cardData.image } className='img-fluid rounded' alt={ cardData.title } />
                  </div>
                  <h4 className='mb-2'>{ cardData.title }</h4>
                  <p>{ cardData.paragraph }</p>
                </div>
              </Col>
            )) }
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Section2;
