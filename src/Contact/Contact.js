<head>
<script async src="https://www.googletagmanager.com/gtag/js?id=G-MBHVP11KDQ"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments)};
  gtag('js', new Date());

  gtag('config', 'G-MBHVP11KDQ');
</script></head>

import React from "react";
import './Contact.css'
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import gloab from "../images/TICKER.png";

const Contact = () => {
  return (
    <div style={{ paddingTop: "20px" }}>
      <Navbar />

      <section className="mt-2 contact-section" >
        <h1 className="contact-title">Get in <span className="contact-subtitle">Touch</span></h1>
        <div className="d-flex contact-section-wrapper">

          <div className="contact-img " >
            <img className="gloab-img bg-dark" src={gloab} alt="Gloab Image" />
          </div>

          <div className="contact-form-wrapper" >
            <form className="contact-form" autoComplete="off">
              <div className="contact-input-group">
                <label className="contact-input-group__label" htmlFor="myInput"> Name *</label>
                <input type="text" id="myInput" className="contact-input-group__input" placeholder="Enter your name here..." />
              </div>
              <div className="contact-input-group">
                <label className="contact-input-group__label" htmlFor="myInput"> Email id *</label>
                <input type="text" id="myInput" className="contact-input-group__input" placeholder="Enter your email id here..." />
              </div>
              <div className="contact-input-group">
                <label className="contact-input-group__label" htmlFor="myInput"> Mobile Number *</label>
                <input type="text" id="myInput" className="contact-input-group__input" placeholder="Enter your mobile number here..." />
              </div>
              <div className="contact-input-group">
                <label className="contact-input-group__label" htmlFor="myInput"> Subject *</label>
                <input type="text" id="myInput" className="contact-input-group__input" placeholder="Enter your subject here..." />
              </div>
              <div className="contact-input-group">
                <label className="contact-input-group__label" htmlFor="message"> Message</label>
                <textarea className="contact-input-group__input contact-message" id="message" placeholder="Enter your message here..."></textarea>
              </div>

              <button type="submit" className=" contact-btn w-100"> Submit </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
