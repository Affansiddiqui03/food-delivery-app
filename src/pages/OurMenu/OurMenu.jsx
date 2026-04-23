import React, { useContext, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Layout from "../../components/Layout/Layout";
import "../../styles/Menu.css";
import { CartContext } from "../../Context/CartContext";

// 🍔 Burgers
import doubleBurger from "../../assets/double-burger.webp";
import chickenBurger from "../../assets/chicken-burger.jpg";
import bbqBurger from "../../assets/bbq-burger.jpg";
import smashBurger from "../../assets/smash.jpg";
import fishBurger from "../../assets/fish-burger.jpg";
import mushroomSwiss from "../../assets/Mushroom-Swiss-Burger.jpeg";

// 🍕 Pizzas
import pepperoniPizza from "../../assets/pepperonipizza.jpeg";
import fajitaPizza from "../../assets/fajita-pizza.jpg";
import afghaniPizza from "../../assets/Afghanipizza.jpg";
import hawaiianPizza from "../../assets/Hawaiian-Pizza.avif";
import mexicanPizza from "../../assets/mexican-pizza.webp";

// 🥗 Salads
import caesarSalad from "../../assets/Caesar-Salad.jpg";
import greekSalad from "../../assets/Greek-Salad.jpg";
import chickenSalad from "../../assets/chicken-salad.jpg";
import fruitSalad from "../../assets/Fruit-Salad.webp";

function OurMenu() {
  const { addToCart } = useContext(CartContext);
  const [filter, setFilter] = useState("All");

  const menuData = [
    { id: 1, title: "Double Burger", price: 699, image: doubleBurger, category: "Burger" },
    { id: 2, title: "Chicken Burger", price: 549, image: chickenBurger, category: "Burger" },
    { id: 3, title: "BBQ Burger", price: 599, image: bbqBurger, category: "Burger" },
    { id: 4, title: "Smash Burger", price: 649, image: smashBurger, category: "Burger" },
    { id: 5, title: "Fish Burger", price: 699, image: fishBurger, category: "Burger" },
    { id: 6, title: "Mushroom Swiss Burger", price: 799, image: mushroomSwiss, category: "Burger" },

    { id: 7, title: "Pepperoni Pizza", price: 999, image: pepperoniPizza, category: "Pizza" },
    { id: 8, title: "Fajita Pizza", price: 949, image: fajitaPizza, category: "Pizza" },
    { id: 9, title: "Afghani Pizza", price: 1099, image: afghaniPizza, category: "Pizza" },
    { id: 10, title: "Hawaiian Pizza", price: 899, image: hawaiianPizza, category: "Pizza" },
    { id: 11, title: "Mexican Pizza", price: 999, image: mexicanPizza, category: "Pizza" },

    { id: 12, title: "Caesar Salad", price: 499, image: caesarSalad, category: "Salad" },
    { id: 13, title: "Greek Salad", price: 499, image: greekSalad, category: "Salad" },
    { id: 14, title: "Chicken Salad", price: 549, image: chickenSalad, category: "Salad" },
    { id: 15, title: "Fruit Salad", price: 399, image: fruitSalad, category: "Salad" },
  ];

  const filteredMenu =
    filter === "All"
      ? menuData
      : menuData.filter((item) => item.category === filter);

  const btnClass = (type) =>
    filter === type ? "danger" : "outline-danger";

  return (
    <Layout>
      {/* Banner */}
      <section className="menu_banner text-center py-5">
        <Container>
          <h1 className="fw-bold">Our Delicious Menu 🍽️</h1>
          <p>Choose your favorite meal and enjoy the taste!</p>
        </Container>
      </section>

      {/* 🔥 SEXY FILTER BUTTONS */}
      <div className="text-center my-4">
        <div className="d-inline-flex flex-wrap gap-2 p-2 bg-light rounded-pill shadow-sm">

          <Button
            variant={btnClass("All")}
            className="rounded-pill px-4 fw-bold"
            onClick={() => setFilter("All")}
          >
            All
          </Button>

          <Button
            variant={btnClass("Burger")}
            className="rounded-pill px-4 fw-bold"
            onClick={() => setFilter("Burger")}
          >
            🍔 Burgers
          </Button>

          <Button
            variant={btnClass("Pizza")}
            className="rounded-pill px-4 fw-bold"
            onClick={() => setFilter("Pizza")}
          >
            🍕 Pizzas
          </Button>

          <Button
            variant={btnClass("Salad")}
            className="rounded-pill px-4 fw-bold"
            onClick={() => setFilter("Salad")}
          >
            🥗 Salads
          </Button>

        </div>
      </div>

      {/* MENU */}
      <section className="menu_section py-5">
        <Container>
          <Row>
            {filteredMenu.map((item) => (
              <Col md={6} lg={4} key={item.id} className="mb-4">
                <Card className="menu_card shadow border-0 h-100">
                  <Card.Img
                    variant="top"
                    src={item.image}
                    style={{ height: "220px", objectFit: "cover" }}
                  />
                  <Card.Body className="text-center">
                    <Card.Title>{item.title}</Card.Title>
                    <h5 className="text-danger fw-bold">
                      Rs. {item.price}
                    </h5>
                    <Button
                      className="btn_red mt-2 w-100"
                      onClick={() => addToCart(item)}
                    >
                      Add To Cart
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </Layout>
  );
}

export default OurMenu;