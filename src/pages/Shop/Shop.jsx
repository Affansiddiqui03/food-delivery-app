import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Layout from "../../components/Layout/Layout";
import "../../styles/Shop.css";

const shopData = [
  {
    id: 1,
    city: "Karachi",
    area: "Gulshan-e-Iqbal",
    address: "Main University Road, Karachi",
    timing: "10:00 AM - 12:00 AM",
    map: "https://www.google.com/maps?q=Karachi"
  },
  {
    id: 2,
    city: "Lahore",
    area: "DHA Phase 5",
    address: "Commercial Broadway, Lahore",
    timing: "11:00 AM - 1:00 AM",
    map: "https://www.google.com/maps?q=Lahore"
  },
  {
    id: 3,
    city: "Islamabad",
    area: "F-10 Markaz",
    address: "Main Double Road, Islamabad",
    timing: "9:00 AM - 11:00 PM",
    map: "https://www.google.com/maps?q=Islamabad"
  }
];

function Shop() {
  return (
    <Layout>
      {/* Banner */}
      <section className="shop_banner text-center py-5">
        <Container>
          <h1 className="fw-bold text-white">Our Shops</h1>
          <p className="text-white">
            Visit our outlets and enjoy fresh & hot meals!
          </p>
        </Container>
      </section>

      {/* Locations */}
      <section className="shop_section py-5">
        <Container>
          <Row>
            {shopData.map((shop) => (
              <Col md={6} lg={4} key={shop.id} className="mb-4">
                <Card className="shop_card shadow border-0">
                  <Card.Body>
                    <Card.Title>{shop.city}</Card.Title>
                    <h6 className="text-muted">{shop.area}</h6>
                    <p><strong>Address:</strong> {shop.address}</p>
                    <p><strong>Timing:</strong> {shop.timing}</p>

                    <Button
                      variant="danger"
                      href={shop.map}
                      target="_blank"
                    >
                      View On Map
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

export default Shop;