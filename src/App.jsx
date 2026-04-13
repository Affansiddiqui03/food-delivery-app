import React from 'react';
import Home from './pages/Home/Home.jsx';
import OurMenu from './pages/OurMenu/OurMenu.jsx';
import { CartProvider } from "./context/CartContext";
import About from "./pages/About/AboutPage";
import Contact from "./pages/Contact/Contact";
import Shop from "./pages/Shop/Shop";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <CartProvider>
      <Router>
          <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='/menu' element={ <OurMenu /> } />
            <Route path="/shop" element={ <Shop /> } />
            <Route path="/about" element={ <About /> } />
            <Route path="/contact" element={ <Contact /> } />
          </Routes>
      </Router>
    </CartProvider>
  )
}

export default App;