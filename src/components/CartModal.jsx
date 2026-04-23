import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ ADD THIS
import { CartContext } from "../Context/CartContext";
import CheckoutModal from "./CheckoutModal";

function CartModal({ isOpen, onClose }) {
  const { cart, removeFromCart, clearCart, increaseQty, decreaseQty } = useContext(CartContext);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const navigate = useNavigate(); // ✅ ADD THIS

  if (!isOpen) return null;

  const total = cart.reduce((sum, item) => sum + Number(item.price) * item.qty, 0);
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

  // ✅ NEW FUNCTION — modal band karo + menu pe jao
  const handleBrowseMenu = () => {
    onClose();
    navigate("/menu");
  };

  return (
    <>
      <div
        onClick={onClose}
        style={{
          position: "fixed", inset: 0,
          background: "rgba(0,0,0,0.55)",
          zIndex: 1050,
          backdropFilter: "blur(3px)",
        }}
      />

      <div
        style={{
          position: "fixed", top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          width: "min(520px, 95vw)", maxHeight: "88vh",
          background: "#fff", borderRadius: "16px",
          zIndex: 1051, display: "flex", flexDirection: "column",
          overflow: "hidden", boxShadow: "0 20px 60px rgba(0,0,0,0.18)",
        }}
      >
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 24px", borderBottom: "1px solid #f0f0f0", flexShrink: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{ fontSize: "22px" }}>🛒</span>
            <h5 style={{ margin: 0, fontWeight: 700, fontSize: "18px" }}>Your Cart</h5>
            {totalItems > 0 && (
              <span style={{ background: "#e74c3c", color: "#fff", borderRadius: "999px", fontSize: "12px", fontWeight: 700, padding: "2px 9px", marginLeft: "2px" }}>
                {totalItems}
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            style={{ background: "#f5f5f5", border: "none", borderRadius: "50%", width: "34px", height: "34px", cursor: "pointer", fontSize: "16px", display: "flex", alignItems: "center", justifyContent: "center", color: "#555", flexShrink: 0 }}
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div style={{ overflowY: "auto", flex: 1, padding: "16px 24px" }}>
          {cart.length === 0 ? (
            <div style={{ textAlign: "center", padding: "50px 0", color: "#aaa" }}>
              <div style={{ fontSize: "52px", marginBottom: "12px" }}>🍽️</div>
              <p style={{ fontWeight: 600, fontSize: "16px", color: "#888" }}>Your cart is empty</p>
              <p style={{ fontSize: "14px" }}>Add some delicious items to get started!</p>
              <button
                onClick={handleBrowseMenu} // ✅ FIX — navigate + close
                style={{ marginTop: "12px", background: "#e74c3c", color: "#fff", border: "none", borderRadius: "8px", padding: "10px 24px", cursor: "pointer", fontWeight: 600 }}
              >
                Browse Menu
              </button>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {cart.map((item, index) => (
                <div
                  key={index}
                  style={{ display: "flex", alignItems: "center", gap: "14px", background: "#fafafa", borderRadius: "12px", padding: "12px 16px", border: "1px solid #f0f0f0" }}
                >
                  <img src={item.image} alt={item.title} style={{ width: "58px", height: "58px", borderRadius: "10px", objectFit: "cover", flexShrink: 0 }} />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={{ margin: 0, fontWeight: 600, fontSize: "15px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{item.title}</p>
                    <p style={{ margin: "3px 0 0", color: "#e74c3c", fontWeight: 700, fontSize: "14px" }}>Rs. {(Number(item.price) * item.qty).toFixed(2)}</p>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", flexShrink: 0 }}>
                    <button onClick={() => decreaseQty(index)} style={{ width: "28px", height: "28px", borderRadius: "6px", border: "1px solid #ddd", background: "#fff", cursor: "pointer", fontWeight: 700, fontSize: "16px", display: "flex", alignItems: "center", justifyContent: "center", color: "#333" }}>−</button>
                    <span style={{ fontWeight: 600, minWidth: "18px", textAlign: "center" }}>{item.qty}</span>
                    <button onClick={() => increaseQty(index)} style={{ width: "28px", height: "28px", borderRadius: "6px", border: "1px solid #ddd", background: "#fff", cursor: "pointer", fontWeight: 700, fontSize: "16px", display: "flex", alignItems: "center", justifyContent: "center", color: "#333" }}>+</button>
                    <button onClick={() => removeFromCart(index)} style={{ marginLeft: "4px", width: "28px", height: "28px", borderRadius: "6px", border: "none", background: "#fff0f0", cursor: "pointer", color: "#e74c3c", fontSize: "14px", display: "flex", alignItems: "center", justifyContent: "center" }}>🗑</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div style={{ padding: "16px 24px", borderTop: "1px solid #f0f0f0", flexShrink: 0, background: "#fff" }}>
            <div style={{ background: "#fafafa", borderRadius: "10px", padding: "12px 16px", marginBottom: "14px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px", color: "#888", marginBottom: "6px" }}>
                <span>Subtotal ({totalItems} items)</span><span>Rs. {total.toFixed(2)}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px", color: "#888", marginBottom: "8px" }}>
                <span>Delivery fee</span><span style={{ color: "#27ae60", fontWeight: 600 }}>Free</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "16px", fontWeight: 700, borderTop: "1px dashed #e8e8e8", paddingTop: "8px" }}>
                <span>Total</span><span style={{ color: "#e74c3c" }}>Rs. {total.toFixed(2)}</span>
              </div>
            </div>
            <button
              onClick={() => setCheckoutOpen(true)}
              style={{ width: "100%", padding: "13px", background: "#e74c3c", color: "#fff", border: "none", borderRadius: "10px", fontWeight: 700, fontSize: "15px", cursor: "pointer", marginBottom: "10px", letterSpacing: "0.3px" }}
            >
              Proceed to Checkout →
            </button>
            <button
              onClick={clearCart}
              style={{ width: "100%", padding: "10px", background: "transparent", color: "#999", border: "1px solid #eee", borderRadius: "10px", fontWeight: 500, fontSize: "14px", cursor: "pointer" }}
            >
              Clear Cart
            </button>
          </div>
        )}
      </div>

      <CheckoutModal
        isOpen={checkoutOpen}
        onClose={() => { setCheckoutOpen(false); onClose(); }}
        onBackToCart={() => setCheckoutOpen(false)}
      />
    </>
  );
}

export default CartModal;