import React, { useState, useEffect } from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaMapMarkerAlt, FaClock, FaPhone } from "react-icons/fa";

function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const listenToScroll = () => {
    const heightToHidden = 250;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    setIsVisible(winScroll > heightToHidden);
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);

    return () => {
      window.removeEventListener("scroll", listenToScroll);
    };
  }, []);

  return (
    <>
      <footer className="bg-white text-dark pt-5 pb-4 border-top">
        <div className="container">
          <div className="row">

            <div className="col-md-3 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 fw-bold">Location</h5>
              <p>
                <FaMapMarkerAlt className="me-2 text-danger" />
                123 Food Street, Karachi, Pakistan
              </p>
              <p>
                <FaPhone className="me-2 text-danger" />
                +92 300 1234567
              </p>
            </div>

            <div className="col-md-3 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 fw-bold">Working Hours</h5>
              <p>
                <FaClock className="me-2 text-danger" />
                Mon - Fri: 10AM - 11PM
              </p>
              <p>Saturday: 12PM - 12AM</p>
              <p>Sunday: Closed</p>
            </div>

            <div className="col-md-3 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 fw-bold">Order Now</h5>
              <p className="fw-bold fs-5">📞 999-888-7777</p>
              <p className="mt-2">Call now for fast delivery!</p>
            </div>

            <div className="col-md-3 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 fw-bold">Follow Us</h5>
              <a href="/" className="btn btn-outline-danger m-1">
                <FaFacebookF />
              </a>
              <a href="/" className="btn btn-outline-danger m-1">
                <FaInstagram />
              </a>
              <a href="/" className="btn btn-outline-danger m-1">
                <FaTwitter />
              </a>
            </div>

          </div>
        </div>
      </footer>

      <div className="text-center p-3 text-white fw-bold " style={{ backgroundColor: "#860811" }} >
        © 2026 BLINK BITES — Food Delivery App | All Rights Reserved
      </div>

      {isVisible && (
        <div className="scroll" onClick={scrollTop}>
          ↑
        </div>
      )}
    </>
  );
}

export default Footer;