import React, { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";

const STEPS = ["Delivery", "Payment", "Review"];

const inputStyle = {
  width: "100%",
  padding: "10px 14px",
  border: "1px solid #e8e8e8",
  borderRadius: "8px",
  fontSize: "14px",
  outline: "none",
  background: "#fafafa",
  boxSizing: "border-box",
  color: "#222",
};

const labelStyle = {
  fontSize: "12px",
  fontWeight: 600,
  color: "#888",
  marginBottom: "5px",
  display: "block",
  textTransform: "uppercase",
  letterSpacing: "0.5px",
};

const rowStyle = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "12px",
};

function CheckoutModal({ isOpen, onClose, onBackToCart }) {
  const { cart, clearCart } = useContext(CartContext);
  const [step, setStep] = useState(0);
  const [payMethod, setPayMethod] = useState("card");
  const [placed, setPlaced] = useState(false);

  const [delivery, setDelivery] = useState({
    name: "", phone: "", email: "", address: "", city: "", zip: "",
  });

  const [card, setCard] = useState({
    number: "", name: "", expiry: "", cvv: "",
  });

  const subtotal = cart.reduce((s, i) => s + Number(i.price) * i.qty, 0);
  const deliveryFee = 0;
  const tax = subtotal * 0.05;
  const total = subtotal + deliveryFee + tax;

  if (!isOpen) return null;

  const handleDelivery = (e) =>
    setDelivery((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleCard = (e) =>
    setCard((p) => ({ ...p, [e.target.name]: e.target.value }));

  const formatCard = (v) =>
    v.replace(/\D/g, "").slice(0, 16).replace(/(.{4})/g, "$1 ").trim();

  const formatExpiry = (v) => {
    const d = v.replace(/\D/g, "").slice(0, 4);
    return d.length >= 3 ? d.slice(0, 2) + "/" + d.slice(2) : d;
  };

  const canNext = () => {
    if (step === 0)
      return delivery.name && delivery.phone && delivery.address && delivery.city;
    if (step === 1 && payMethod === "card")
      return card.number && card.name && card.expiry && card.cvv;
    return true;
  };

  const handlePlaceOrder = () => {
    setPlaced(true);
    clearCart();
  };

  const handleClose = () => {
    setStep(0);
    setPlaced(false);
    setDelivery({ name: "", phone: "", email: "", address: "", city: "", zip: "" });
    setCard({ number: "", name: "", expiry: "", cvv: "" });
    onClose();
  };

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={handleClose}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.55)",
          zIndex: 1060,
          backdropFilter: "blur(3px)",
        }}
      />

      {/* Modal */}
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "min(560px, 95vw)",
          maxHeight: "90vh",
          background: "#fff",
          borderRadius: "16px",
          zIndex: 1061,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          boxShadow: "0 20px 60px rgba(0,0,0,0.18)",
        }}
      >
        {/* ── Header ── */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "18px 24px",
            borderBottom: "1px solid #f0f0f0",
            flexShrink: 0,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            {!placed && step > 0 && (
              <button
                onClick={() => setStep((s) => s - 1)}
                style={{
                  background: "#f5f5f5",
                  border: "none",
                  borderRadius: "50%",
                  width: "30px",
                  height: "30px",
                  cursor: "pointer",
                  fontSize: "14px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#555",
                }}
              >
                ←
              </button>
            )}
            <h5 style={{ margin: 0, fontWeight: 700, fontSize: "18px" }}>
              {placed ? "Order Placed!" : "Checkout"}
            </h5>
          </div>
          <button
            onClick={handleClose}
            style={{
              background: "#f5f5f5",
              border: "none",
              borderRadius: "50%",
              width: "34px",
              height: "34px",
              cursor: "pointer",
              fontSize: "16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#555",
            }}
          >
            ✕
          </button>
        </div>

        {/* ── Step indicator ── */}
        {!placed && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "14px 24px 0",
              gap: "0",
              flexShrink: 0,
            }}
          >
            {STEPS.map((s, i) => (
              <React.Fragment key={s}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
                  <div
                    style={{
                      width: "28px",
                      height: "28px",
                      borderRadius: "50%",
                      background: i <= step ? "#e74c3c" : "#f0f0f0",
                      color: i <= step ? "#fff" : "#aaa",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "12px",
                      fontWeight: 700,
                      transition: "all 0.2s",
                    }}
                  >
                    {i < step ? "✓" : i + 1}
                  </div>
                  <span
                    style={{
                      fontSize: "11px",
                      fontWeight: 600,
                      color: i <= step ? "#e74c3c" : "#aaa",
                    }}
                  >
                    {s}
                  </span>
                </div>
                {i < STEPS.length - 1 && (
                  <div
                    style={{
                      flex: 1,
                      height: "2px",
                      background: i < step ? "#e74c3c" : "#f0f0f0",
                      margin: "0 6px",
                      marginBottom: "18px",
                      transition: "background 0.3s",
                    }}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        )}

        {/* ── Body ── */}
        <div style={{ overflowY: "auto", flex: 1, padding: "20px 24px" }}>

          {/* ── SUCCESS ── */}
          {placed && (
            <div style={{ textAlign: "center", padding: "30px 0 20px" }}>
              <div
                style={{
                  width: "72px",
                  height: "72px",
                  borderRadius: "50%",
                  background: "#eafbf0",
                  border: "3px solid #27ae60",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 16px",
                  fontSize: "28px",
                }}
              >
                ✓
              </div>
              <h3 style={{ fontWeight: 700, marginBottom: "6px", color: "#222" }}>
                Thank you, {delivery.name.split(" ")[0]}!
              </h3>
              <p style={{ color: "#888", fontSize: "14px", marginBottom: "20px" }}>
                Your order has been placed successfully. We'll deliver it soon!
              </p>

              <div
                style={{
                  background: "#fafafa",
                  borderRadius: "12px",
                  padding: "14px 16px",
                  textAlign: "left",
                  marginBottom: "16px",
                }}
              >
                <p style={{ fontSize: "12px", color: "#aaa", margin: "0 0 10px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.5px" }}>
                  Order Summary
                </p>
                {cart.length === 0
                  ? <p style={{ color: "#aaa", fontSize: "13px" }}>Items cleared from cart.</p>
                  : null}
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "14px", fontWeight: 700, marginTop: "6px" }}>
                  <span>Total Paid</span>
                  <span style={{ color: "#27ae60" }}>Rs. {total.toFixed(2)}</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px", color: "#888", marginTop: "4px" }}>
                  <span>Delivery to</span>
                  <span>{delivery.city}</span>
                </div>
              </div>

              <p style={{ fontSize: "12px", color: "#bbb" }}>
                Estimated delivery: 30–45 minutes
              </p>
            </div>
          )}

          {/* ── STEP 0 : Delivery ── */}
          {!placed && step === 0 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <p style={{ margin: "0 0 4px", fontSize: "13px", color: "#888" }}>
                Where should we deliver your order?
              </p>
              <div>
                <label style={labelStyle}>Full Name *</label>
                <input
                  style={inputStyle}
                  name="name"
                  placeholder="e.g. Ahmed Khan"
                  value={delivery.name}
                  onChange={handleDelivery}
                />
              </div>
              <div style={rowStyle}>
                <div>
                  <label style={labelStyle}>Phone *</label>
                  <input
                    style={inputStyle}
                    name="phone"
                    placeholder="+92 300 0000000"
                    value={delivery.phone}
                    onChange={handleDelivery}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Email</label>
                  <input
                    style={inputStyle}
                    name="email"
                    placeholder="you@email.com"
                    value={delivery.email}
                    onChange={handleDelivery}
                  />
                </div>
              </div>
              <div>
                <label style={labelStyle}>Street Address *</label>
                <input
                  style={inputStyle}
                  name="address"
                  placeholder="House / flat no., street, area"
                  value={delivery.address}
                  onChange={handleDelivery}
                />
              </div>
              <div style={rowStyle}>
                <div>
                  <label style={labelStyle}>City *</label>
                  <input
                    style={inputStyle}
                    name="city"
                    placeholder="Karachi"
                    value={delivery.city}
                    onChange={handleDelivery}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Postal Code</label>
                  <input
                    style={inputStyle}
                    name="zip"
                    placeholder="75600"
                    value={delivery.zip}
                    onChange={handleDelivery}
                  />
                </div>
              </div>

              {/* Delivery type pills */}
              <div>
                <label style={labelStyle}>Delivery Type</label>
                <div style={{ display: "flex", gap: "10px" }}>
                  {["Standard (Free)", "Express (+Rs. 99)"].map((opt) => (
                    <div
                      key={opt}
                      style={{
                        flex: 1,
                        padding: "10px",
                        border: "1.5px solid",
                        borderColor: opt.startsWith("Standard") ? "#e74c3c" : "#e8e8e8",
                        borderRadius: "8px",
                        textAlign: "center",
                        fontSize: "13px",
                        fontWeight: 600,
                        color: opt.startsWith("Standard") ? "#e74c3c" : "#888",
                        cursor: "pointer",
                        background: opt.startsWith("Standard") ? "#fff5f5" : "#fafafa",
                      }}
                    >
                      {opt}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ── STEP 1 : Payment ── */}
          {!placed && step === 1 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <p style={{ margin: "0 0 4px", fontSize: "13px", color: "#888" }}>
                How would you like to pay?
              </p>

              {/* Payment method selector */}
              <div style={{ display: "flex", gap: "10px" }}>
                {[
                  { id: "card", label: "💳 Card" },
                  { id: "cod", label: "💵 Cash on Delivery" },
                  { id: "jazzcash", label: "📱 JazzCash" },
                ].map((m) => (
                  <div
                    key={m.id}
                    onClick={() => setPayMethod(m.id)}
                    style={{
                      flex: 1,
                      padding: "10px 6px",
                      border: "1.5px solid",
                      borderColor: payMethod === m.id ? "#e74c3c" : "#e8e8e8",
                      borderRadius: "8px",
                      textAlign: "center",
                      fontSize: "12px",
                      fontWeight: 600,
                      color: payMethod === m.id ? "#e74c3c" : "#888",
                      cursor: "pointer",
                      background: payMethod === m.id ? "#fff5f5" : "#fafafa",
                      transition: "all 0.15s",
                    }}
                  >
                    {m.label}
                  </div>
                ))}
              </div>

              {/* Card form */}
              {payMethod === "card" && (
                <>
                  <div>
                    <label style={labelStyle}>Card Number *</label>
                    <input
                      style={inputStyle}
                      name="number"
                      placeholder="1234 5678 9012 3456"
                      value={card.number}
                      onChange={(e) =>
                        setCard((p) => ({ ...p, number: formatCard(e.target.value) }))
                      }
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Cardholder Name *</label>
                    <input
                      style={inputStyle}
                      name="name"
                      placeholder="As on card"
                      value={card.name}
                      onChange={handleCard}
                    />
                  </div>
                  <div style={rowStyle}>
                    <div>
                      <label style={labelStyle}>Expiry *</label>
                      <input
                        style={inputStyle}
                        name="expiry"
                        placeholder="MM/YY"
                        value={card.expiry}
                        onChange={(e) =>
                          setCard((p) => ({ ...p, expiry: formatExpiry(e.target.value) }))
                        }
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>CVV *</label>
                      <input
                        style={inputStyle}
                        name="cvv"
                        placeholder="123"
                        maxLength={4}
                        value={card.cvv}
                        onChange={handleCard}
                      />
                    </div>
                  </div>
                  <div
                    style={{
                      background: "#f0faf5",
                      border: "1px solid #c3e6d0",
                      borderRadius: "8px",
                      padding: "10px 14px",
                      fontSize: "12px",
                      color: "#27ae60",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    🔒 Your payment info is encrypted and secure.
                  </div>
                </>
              )}

              {payMethod === "cod" && (
                <div
                  style={{
                    background: "#fffbf0",
                    border: "1px solid #f5dfa0",
                    borderRadius: "8px",
                    padding: "14px",
                    fontSize: "13px",
                    color: "#8a6800",
                  }}
                >
                  💵 Pay with cash when your order arrives. Please keep exact change ready.
                </div>
              )}

              {payMethod === "jazzcash" && (
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <div>
                    <label style={labelStyle}>JazzCash Mobile Number *</label>
                    <input
                      style={inputStyle}
                      placeholder="03XX XXXXXXX"
                    />
                  </div>
                  <div
                    style={{
                      background: "#f5f0ff",
                      border: "1px solid #d4c0f0",
                      borderRadius: "8px",
                      padding: "10px 14px",
                      fontSize: "12px",
                      color: "#6a3fbf",
                    }}
                  >
                    📱 You'll receive a confirmation code on your registered JazzCash number.
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ── STEP 2 : Review ── */}
          {!placed && step === 2 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <p style={{ margin: "0 0 4px", fontSize: "13px", color: "#888" }}>
                Review your order before placing.
              </p>

              {/* Items */}
              <div
                style={{
                  background: "#fafafa",
                  borderRadius: "10px",
                  padding: "12px 14px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                {cart.map((item, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      fontSize: "14px",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <img
                        src={item.image}
                        alt={item.title}
                        style={{ width: "36px", height: "36px", borderRadius: "6px", objectFit: "cover" }}
                      />
                      <div>
                        <p style={{ margin: 0, fontWeight: 600 }}>{item.title}</p>
                        <p style={{ margin: 0, fontSize: "12px", color: "#aaa" }}>x{item.qty}</p>
                      </div>
                    </div>
                    <span style={{ fontWeight: 600 }}>Rs. {(Number(item.price) * item.qty).toFixed(2)}</span>
                  </div>
                ))}
              </div>

              {/* Delivery info */}
              <div
                style={{
                  background: "#fafafa",
                  borderRadius: "10px",
                  padding: "12px 14px",
                  fontSize: "13px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "4px",
                }}
              >
                <p style={{ margin: "0 0 6px", fontWeight: 600, fontSize: "12px", color: "#aaa", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                  Delivering to
                </p>
                <span style={{ color: "#333" }}>{delivery.name}</span>
                <span style={{ color: "#888" }}>{delivery.address}, {delivery.city}</span>
                <span style={{ color: "#888" }}>{delivery.phone}</span>
              </div>

              {/* Payment info */}
              <div
                style={{
                  background: "#fafafa",
                  borderRadius: "10px",
                  padding: "12px 14px",
                  fontSize: "13px",
                }}
              >
                <p style={{ margin: "0 0 4px", fontWeight: 600, fontSize: "12px", color: "#aaa", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                  Payment
                </p>
                <span style={{ color: "#333" }}>
                  {payMethod === "card"
                    ? `Card ending in ${card.number.replace(/\s/g, "").slice(-4) || "****"}`
                    : payMethod === "cod"
                    ? "Cash on Delivery"
                    : "JazzCash"}
                </span>
              </div>

              {/* Price breakdown */}
              <div
                style={{
                  borderRadius: "10px",
                  border: "1px solid #f0f0f0",
                  padding: "12px 14px",
                  fontSize: "13px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "6px",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", color: "#888" }}>
                  <span>Subtotal</span><span>Rs. {subtotal.toFixed(2)}</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", color: "#888" }}>
                  <span>Delivery</span><span style={{ color: "#27ae60" }}>Free</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", color: "#888" }}>
                  <span>Tax (5%)</span><span>Rs. {tax.toFixed(2)}</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontWeight: 700,
                    fontSize: "15px",
                    borderTop: "1px dashed #e8e8e8",
                    paddingTop: "8px",
                    marginTop: "2px",
                  }}
                >
                  <span>Total</span>
                  <span style={{ color: "#e74c3c" }}>Rs. {total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* ── Footer ── */}
        {!placed && (
          <div
            style={{
              padding: "16px 24px",
              borderTop: "1px solid #f0f0f0",
              flexShrink: 0,
              background: "#fff",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <button
              disabled={!canNext()}
              onClick={() => (step < 2 ? setStep((s) => s + 1) : handlePlaceOrder())}
              style={{
                width: "100%",
                padding: "13px",
                background: canNext() ? "#e74c3c" : "#f0f0f0",
                color: canNext() ? "#fff" : "#bbb",
                border: "none",
                borderRadius: "10px",
                fontWeight: 700,
                fontSize: "15px",
                cursor: canNext() ? "pointer" : "not-allowed",
                transition: "background 0.2s",
              }}
            >
              {step === 0 && "Continue to Payment →"}
              {step === 1 && "Review Order →"}
              {step === 2 && "Place Order ✓"}
            </button>
            {step === 0 && (
              <button
                onClick={onBackToCart}
                style={{
                  width: "100%",
                  padding: "10px",
                  background: "transparent",
                  color: "#999",
                  border: "1px solid #eee",
                  borderRadius: "10px",
                  fontWeight: 500,
                  fontSize: "14px",
                  cursor: "pointer",
                }}
              >
                ← Back to Cart
              </button>
            )}
          </div>
        )}

        {/* ── Success footer ── */}
        {placed && (
          <div style={{ padding: "16px 24px", borderTop: "1px solid #f0f0f0", flexShrink: 0 }}>
            <button
              onClick={handleClose}
              style={{
                width: "100%",
                padding: "13px",
                background: "#27ae60",
                color: "#fff",
                border: "none",
                borderRadius: "10px",
                fontWeight: 700,
                fontSize: "15px",
                cursor: "pointer",
              }}
            >
              Done
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default CheckoutModal;