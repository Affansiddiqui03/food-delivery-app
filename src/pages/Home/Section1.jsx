import React, { useContext } from 'react';
import { Container, Row, Col, } from 'react-bootstrap';
import Burger from '../../assets/burger1.png';
import { Link } from 'react-router-dom';
import { CartContext } from "../../Context/CartContext";

function Section1() {

  const { addToCart } = useContext(CartContext);

  const handleOrder = () => {
    const burgerProduct = {
      id: 101,
      name: "New Burger with Onion",
      price: 899,
      image: Burger
    };

    addToCart(burgerProduct);
    alert("Burger added to cart 🍔🔥");
  };
  return (
    <section className='herosection'>
      <Container>
        <Row>
          <Col lg={ 7 } className="mb-5 mb-lg-0">
            <div className='position-relative'>
              <img src={ Burger } className='img-fluid ' alt='Hero' />
              <div className='price_badge'>
                <div className='badge-text'>
                  <h4 className='h4_xs'>Only</h4>
<h4 className='h3_xs'>899 </h4>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={ 5 }>
            <div className='hero_text text-center'>
              <h1 className='text-white'>New Burger</h1>
              <h2 className='text-white'>with Onion</h2>
              <p className='text-white pt-2 pb=4'>
                Sink your teeth into our juicy new burger, loaded with perfectly grilled onions that add just the right touch of sweetness and crunch. Every bite is a bold, mouthwatering experience you won’t forget
                <br/>
                Taste the flavor. Feel the crave.<br/> Get yours today!
              </p>
              <button onClick={ handleOrder } className="order_now border-0">
                Order Now
              </button>

            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Section1;
