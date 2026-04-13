import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Layout from "../../components/Layout/Layout";
import {
  FaFacebookF, FaInstagram, FaTwitter, FaYoutube,
  FaMapMarkerAlt, FaClock, FaPhone, FaEnvelope,
  FaPaperPlane, FaCheckCircle
} from "react-icons/fa";
import "../../styles/Contact.css";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 1500);
  };

  return (
    <Layout>

      {/* HERO BANNER */}
      <section className="contact_hero">
        <div className="contact_hero_overlay" />
        <Container className="position-relative" style={{ zIndex: 2 }}>
          <Row className="justify-content-center text-center">
            <Col lg={7}>
              <div className="contact_hero_badge">Get In Touch</div>
              <h1 className="contact_hero_title">We'd Love to<br />Hear From You</h1>
              <p className="contact_hero_sub">
                Have a question, feedback, or craving something special?
                Our team is ready to help — fast.
              </p>
            </Col>
          </Row>
        </Container>

        <div className="contact_stat_bar">
          <div className="cstat">
            <span className="cstat_num">20 min</span>
            <span className="cstat_lbl">Avg. Response</span>
          </div>
          <div className="cstat_divider" />
          <div className="cstat">
            <span className="cstat_num">24/7</span>
            <span className="cstat_lbl">Support</span>
          </div>
          <div className="cstat_divider" />
          <div className="cstat">
            <span className="cstat_num">4.9 ★</span>
            <span className="cstat_lbl">Customer Rating</span>
          </div>
        </div>
      </section>

      {/* INFO CARDS ROW */}
      <section className="contact_info_section">
        <Container>
          <Row className="g-4 justify-content-center">

            <Col md={6} lg={3}>
              <div className="cinfo_card">
                <div className="cinfo_icon_wrap red_icon">
                  <FaMapMarkerAlt />
                </div>
                <h6 className="cinfo_title">Find Us</h6>
                <p className="cinfo_text">123 Food Street<br />Karachi, Pakistan</p>
                <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="cinfo_link">
                  View on Map →
                </a>
              </div>
            </Col>

            <Col md={6} lg={3}>
              <div className="cinfo_card">
                <div className="cinfo_icon_wrap dark_icon">
                  <FaPhone />
                </div>
                <h6 className="cinfo_title">Call Us</h6>
                <p className="cinfo_text">+92 300 1234567<br />+92 321 7654321</p>
                <a href="tel:+923001234567" className="cinfo_link">Call Now →</a>
              </div>
            </Col>

            <Col md={6} lg={3}>
              <div className="cinfo_card">
                <div className="cinfo_icon_wrap yellow_icon">
                  <FaClock />
                </div>
                <h6 className="cinfo_title">Working Hours</h6>
                <p className="cinfo_text">
                  Mon–Fri: 10AM–11PM<br />
                  Sat: 12PM–12AM<br />
                  <span className="closed_tag">Sun: Closed</span>
                </p>
              </div>
            </Col>

            <Col md={6} lg={3}>
              <div className="cinfo_card">
                <div className="cinfo_icon_wrap red_icon">
                  <FaEnvelope />
                </div>
                <h6 className="cinfo_title">Email Us</h6>
                <p className="cinfo_text">hello@blinkbites.pk<br />support@blinkbites.pk</p>
                <a href="mailto:hello@blinkbites.pk" className="cinfo_link">Send Email →</a>
              </div>
            </Col>

          </Row>
        </Container>
      </section>

      {/* MAIN CONTENT: FORM + SIDE INFO */}
      <section className="contact_main_section">
        <Container>
          <Row className="g-5 align-items-start">

            {/* LEFT — Contact Form */}
            <Col lg={7}>
              <div className="contact_form_card">
                <div className="form_card_header">
                  <h3>Send Us a Message</h3>
                  <p>Fill out the form and we'll get back to you within 20 minutes.</p>
                </div>

                {sent ? (
                  <div className="form_success">
                    <FaCheckCircle className="success_icon" />
                    <h4>Message Sent!</h4>
                    <p>
                      Thanks <strong>{form.name}</strong>! We'll reply to{" "}
                      <strong>{form.email}</strong> shortly.
                    </p>
                    <button
                      className="btn_red_solid mt-3"
                      onClick={() => {
                        setSent(false);
                        setForm({ name: "", email: "", subject: "", message: "" });
                      }}
                    >
                      Send Another
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <Row className="g-3">
                      <Col sm={6}>
                        <div className="form_group">
                          <label>Your Name *</label>
                          <input
                            type="text"
                            name="name"
                            placeholder="Ahmed Khan"
                            value={form.name}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </Col>
                      <Col sm={6}>
                        <div className="form_group">
                          <label>Email Address *</label>
                          <input
                            type="email"
                            name="email"
                            placeholder="you@email.com"
                            value={form.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </Col>
                      <Col sm={12}>
                        <div className="form_group">
                          <label>Subject</label>
                          <div className="subject_pills">
                            {["General Inquiry", "Order Issue", "Partnership", "Feedback"].map((s) => (
                              <button
                                type="button"
                                key={s}
                                className={`subject_pill ${form.subject === s ? "active" : ""}`}
                                onClick={() => setForm((p) => ({ ...p, subject: s }))}
                              >
                                {s}
                              </button>
                            ))}
                          </div>
                        </div>
                      </Col>
                      <Col sm={12}>
                        <div className="form_group">
                          <label>Your Message *</label>
                          <textarea
                            name="message"
                            rows={5}
                            placeholder="Tell us how we can help..."
                            value={form.message}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </Col>
                      <Col sm={12}>
                        <button
                          type="submit"
                          className="btn_submit"
                          disabled={loading}
                        >
                          {loading ? (
                            <span className="sending_dots">
                              Sending<span>.</span><span>.</span><span>.</span>
                            </span>
                          ) : (
                            <>
                              <FaPaperPlane className="me-2" style={{ fontSize: "14px" }} />
                              Send Message
                            </>
                          )}
                        </button>
                      </Col>
                    </Row>
                  </form>
                )}
              </div>
            </Col>

            {/* RIGHT — Side panel */}
            <Col lg={5}>

              {/* Map placeholder */}
              <div className="map_card">
                <div className="map_placeholder">
                  <div className="map_pin_wrapper">
                    <FaMapMarkerAlt className="map_pin_icon" />
                    <div className="map_pin_pulse" />
                  </div>
                  <p className="map_label">123 Food Street, Karachi</p>
                  <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="map_btn">
                    Open in Google Maps
                  </a>
                </div>
              </div>

              {/* Social links */}
              <div className="social_card">
                <h6 className="social_heading">Follow Blink Bites</h6>
                <p className="social_sub">Stay updated with our daily deals &amp; new launches</p>
                <div className="social_grid">
                  <a href="/" className="soc_btn facebook"><FaFacebookF /><span>Facebook</span></a>
                  <a href="/" className="soc_btn instagram"><FaInstagram /><span>Instagram</span></a>
                  <a href="/" className="soc_btn twitter"><FaTwitter /><span>Twitter</span></a>
                  <a href="/" className="soc_btn youtube"><FaYoutube /><span>YouTube</span></a>
                </div>
              </div>

              {/* Quick FAQ */}
              <div className="faq_card">
                <h6 className="faq_heading">Quick Answers</h6>
                {[
                  { q: "Do you deliver outside Karachi?", a: "Currently we only deliver within Karachi city limits." },
                  { q: "What's the minimum order?", a: "Our minimum order value is Rs. 300." },
                  { q: "Can I cancel my order?", a: "Orders can be cancelled within 2 minutes of placing." },
                ].map((item, i) => (
                  <FaqItem key={i} q={item.q} a={item.a} />
                ))}
              </div>

            </Col>
          </Row>
        </Container>
      </section>

      {/* BOTTOM STRIP */}
      <section className="contact_bottom_strip">
        <Container>
          <Row className="align-items-center justify-content-between g-3">
            <Col md={7}>
              <h4 className="strip_title">Hungry right now?</h4>
              <p className="strip_sub">Skip the form — just give us a ring and we'll handle the rest.</p>
            </Col>
            <Col md={4} className="text-md-end">
              <a href="tel:+923001234567" className="strip_call_btn">
                <FaPhone className="me-2" style={{ fontSize: "14px" }} />
                +92 300 1234567
              </a>
            </Col>
          </Row>
        </Container>
      </section>

    </Layout>
  );
}

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq_item ${open ? "open" : ""}`}>
      <button className="faq_q" onClick={() => setOpen(!open)}>
        {q}
        <span className="faq_arrow">{open ? "−" : "+"}</span>
      </button>
      {open && <p className="faq_a">{a}</p>}
    </div>
  );
}