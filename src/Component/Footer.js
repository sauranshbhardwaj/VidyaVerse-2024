import React from "react";
import "./footer.css";
import footer from "../images/footerimg.png"

export default function Footer() {
  return (
    <footer className="footerparent">
      <div className="footerchil1 d-flex justify-content-between">
        <div className="footerchil1text mt-2">
          Join our newsletter to keep up to date with us!
        </div>
        <div className="d-flex footer-inp-btn">
          <div className="d-flex align-item-center mx-4 p-2 footer-input-div">
            <span className="m-auto text-white material-symbols-outlined">person </span>
            <input type="email" className="footerinput bg-transparent border-0 text-white px-2" placeholder="Enter your email" />
          </div>
          <button className="btn btn-light text-dark" style={{ borderRadius: "100px" }}> Subscribe</button>
        </div>
      </div>
      <div className="footerchil1 d-flex justify-content-between ">
        <div className="footer-org-about" >
          <img src={footer} className="mb-2" style={{ width: "165px", height: "60px" }} alt={"ImageApply"} />
          <p className="" style={{ color: "rgba(255, 255, 255, 0.8)" }}>VidyaVerse is a one-stop platform for teenagers to explore their passions, learn skills while in school, and become industry ready today. Start your journey today!</p>
        </div>
        <div className="d-flex footer-list">
          <ul className="footer-program-ul">
            <li>Company</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Career</li>
            <li>Blogs</li>
          </ul>
          <ul className="footer-program-ul">
            <li>Our Programs</li>
            <li>Web3 for GenZ Course</li>
            <li>Student Ambassador Program</li>
            <li>Free Introductory Course</li>
          </ul>
        </div>
      </div>
      <div className="copyWrite-container d-flex justify-content-between">
        <p className="py-0 ">&copy; 2024 VidyaVerse</p>
        <ul className="d-flex term-policy">
          <li>Terms of Service</li>
          <li>Privacy Policy</li>
          <li>Cookies</li>
        </ul>
      </div>
    </footer>
  );
}
