import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image1 from "../../assets/zinger.jpg";
import Image2 from "../../assets/smash.jpg";
import Image3 from "../../assets/pizza.jpg";
import Image4 from "../../assets/chicken salad.jpg";
import Image5 from "../../assets/fajita pizza.jpg";
import Image6 from "../../assets/double burger.webp";
import Image7 from "../../assets/Caesar Salad.jpg";
import Image8 from "../../assets/mexican pizza.webp";
import Cards from "../../components/Card.jsx";
import { Link } from "react-router-dom";


const mockData = [
  {
    id: "0001",
    image: Image1,
    title: "Zinger Burger",
    paragraph: "Crispy fried chicken burger with sauce & lettuce",
    rating: 5,
    price: 850,
  },
  {
    id: "0002",
    image: Image2,
    title: "Smash Burger",
    paragraph: "Juicy smashed beef patty with cheese & onions",
    rating: 4.5,
    price: 950,
  },
  {
    id: "0003",
    image: Image3,
    title: "Chicken Pizza",
    paragraph: "Loaded chicken pizza with cheese & herbs",
    rating: 4,
    price: 700,
  },
  {
    id: "0004",
    image: Image4,
    title: "Chicken Salad",
    paragraph: "Fresh salad with grilled chicken & veggies",
    rating: 3.5,
    price: 800,
  },
  {
    id: "0005",
    image: Image5,
    title: "Fajita Pizza",
    paragraph: "Spicy fajita chicken pizza with capsicum & onions",
    rating: 3,
    price: 1100,
  },
  {
    id: "0006",
    image: Image6,
    title: "Double Burger",
    paragraph: "Double beef patty burger with cheese & sauce",
    rating: 3,
    price: 900,
  },
  {
    id: "0007",
    image: Image7,
    title: "Caesar Salad",
    paragraph: "Classic Caesar salad with creamy dressing",
    rating: 2.5,
    price: 950,
  },
  {
    id: "0008",
    image: Image8,
    title: "Mexican Pizza",
    paragraph: "Spicy Mexican style pizza with jalapenos",
    rating: 2,
    price: 750,
  },
];

const renderRatingIcons = (rating) => {
  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (rating >= 1) {
      stars.push(<i key={ i } className="bi bi-star-fill"></i>);
      rating -= 1;
    }
    else if (rating >= 0.5) {
      stars.push(<i key={ `half${i}` } className="bi bi-star-half"></i>);
      rating -= 0.5;
    }
    else {
      stars.push(<i key={ `empty${i}` } className="bi bi-star"></i>);
    }
  }

  return stars;
};


function Section3() {
  return (
    <section className="menu_section">
      <Container>
        <Row>
          <Col lg={ { span: 8, offset: 2 } } className="text-center">
            <h2>Our Crazy Products</h2>
            <p className="para">
              From crispy chicken to classic beef, discover the burgers our customers love the most.
            </p>
          </Col>
        </Row>

        <Row>
          { mockData.map((cardData) => (
            <Cards
              key={ cardData.id }
              id={ cardData.id }   // ✅ ADD THIS
              image={ cardData.image }
              rating={ cardData.rating }
              title={ cardData.title }
              paragraph={ cardData.paragraph }
              price={ cardData.price }
              renderRatingIcons={ renderRatingIcons }
            />
          )) }
        </Row>

        <Row className="pt-5">
          <Col sm={ 6 } lg={ 5 }>
            <div className="ads_box ads_img1 mb-5 mb-md-0">
              <h4>GET YOUR FREE</h4>
              <h5>CHINEESE FRIES</h5>
              <Link to="/" className="order_now btn_red px-4 rounded-0">
                Learn More </Link>
            </div>
          </Col>
          <Col sm={ 6 } lg={ 7 }>
            <div className="ads_box ads_img2 ">
              <h4>GET YOUR FREE</h4>
              <h5>CHINEESE FRIES</h5>
              <Link to="/" className="order_now btn_red px-4 rounded-0">
                Learn More </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Section3;
