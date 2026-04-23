import React, { useEffect, useState, useContext } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsCart3 } from 'react-icons/bs';
import Logo from '../../assets/burger.png';
import '../../styles/Header.css';
import { CartContext } from "/src/Context/CartContext";
import CartModal from "../CartModal";  // ← new import

function Header() {
  const [sticky, setSticky] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);  // ← new
  const { cart } = useContext(CartContext);

  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = cartOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [cartOpen]);

  return (
    <header>
      <Navbar
        collapseOnSelect
        expand="lg"
        className={sticky ? "navbar sticky" : "navbar"}
      >
        <Container>
          <Navbar.Brand as={Link} to="/" className="logo">
            <img src={Logo} alt="Blink Bites" height="40" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/menu">Menu</Nav.Link>
              <Nav.Link as={Link} to="/shop">Shop</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>

              {/* Cart button — no longer a Link, just a button */}
              <Nav.Link
                as="button"
                onClick={() => setCartOpen(true)}
                style={{ background: 'none', border: 'none' }}
              >
                <div className='cart' style={{ position: 'relative', display: 'inline-flex', alignItems: 'center' }}>
                  <BsCart3 size={20} />
                  {totalItems > 0 && (
                    <em
                      className='roundpoint'
                      style={{
                        position: 'absolute',
                        top: '-8px',
                        right: '-10px',
                        background: '#e3000e',
                        color: '#fff',
                        borderRadius: '50%',
                        fontSize: '11px',
                        fontWeight: 700,
                        width: '18px',
                        height: '18px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontStyle: 'normal',
                      }}
                    >
                      {totalItems}
                    </em>
                  )}
                </div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Cart Modal */}
      <CartModal isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </header>
  );
}

export default Header;