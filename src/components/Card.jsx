import React, { useContext } from "react";
import { Col, Card as BootstrapCard } from "react-bootstrap";
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";

function Card({ image, rating, title, paragraph, price, renderRatingIcons }) {
  const { addToCart } = useContext(CartContext);

  return (
    <Col sm={6} lg={4} xl={3} className="mb-4">
      
      {/* CARD */}
      <BootstrapCard className="overflow-hidden h-100 d-flex flex-column">

        {/* IMAGE */}
        <div className="overflow-hidden">
          <BootstrapCard.Img variant="top" src={image} />
        </div>

        {/* BODY */}
        <BootstrapCard.Body className="d-flex flex-column flex-grow-1">

          {/* RATING + WISHLIST */}
          <div className="d-flex align-items-center justify-content-between">
            <div className="item_rating">
              {renderRatingIcons(rating)}
            </div>
            <div className="wishlist">
              <i className="bi bi-heart"></i>
            </div>
          </div>

          {/* TITLE */}
          <BootstrapCard.Title>{title}</BootstrapCard.Title>

          {/* DESCRIPTION */}
          <BootstrapCard.Text>
            {paragraph}
          </BootstrapCard.Text>

          {/* PRICE + BUTTON (BOTTOM FIXED) */}
          <div className="d-flex align-items-center justify-content-between mt-auto">
            
            <h5 className="menu_price">Rs. {price}</h5>

            <div className="add_to_card">
              <Link
                to="/"
                className="btn"
                onClick={(e) => {
                  e.preventDefault();

                  addToCart({
                    id: title,
                    image,
                    title,
                    paragraph,
                    price,
                  });
                }}
              >
                <i className="bi bi-bag me-2"></i>
                Add to Cart
              </Link>
            </div>

          </div>

        </BootstrapCard.Body>
      </BootstrapCard>
    </Col>
  );
}

export default Card;