import React from "react";
import { Container } from "react-bootstrap";
import Layout from "../../components/Layout/Layout"; // Layout import karo
import "../../styles/About.css";

export default function AboutPage() {
  return (
    <Layout>
      <section className="about_page d-flex justify-content-center align-items-center">
        <Container className="text-center">
          <h1 className="fw-bold mb-4">About Blink Bites 🍔</h1>

          <p className="mb-3">
            Blink Bites is a modern fast food brand delivering fresh and
            delicious meals across Pakistan.
          </p>

          <p className="mb-3">
            We started our journey with one mission:
            <strong> Quality, Taste & Speed.</strong>
          </p>

          <p>
            Our chefs use premium ingredients to make sure every bite gives
            you happiness.
          </p>

          <p className="mt-4 fw-bold">
            Visit us today and enjoy the best burgers, fries & drinks! 🍔🍟🥤
          </p>
        </Container>
      </section>
    </Layout>
  );
}