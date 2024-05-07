import React from "react";
import "./footer.css";
import footer from "../images/footerimg.png"

export default function Footer() {
  return (
    <footer className="footerparent">
      {/* <div className="footerchil1 d-flex justify-content-between">
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
      </div> */}
      <div className="footerchil1 d-flex justify-content-between ">
        <div className="footer-org-about" >
          <img src={footer} className="mb-2" style={{ width: "165px", height: "60px" }} alt={"ImageApply"} />
          <p className="" style={{ color: "rgba(255, 255, 255, 0.8)" }}>VidyaVerse is a one-stop platform for teenagers to explore their passions, learn skills while in school, and become industry ready today. Start your journey today!</p>
          <p className="" style={{ color: "rgba(255, 255, 255, 0.8)" }}>Address: 279/4 Jawahar Nagar, New Railway Road, Gurugram - 122001, Haryana, India</p>
        </div>
        <div className="d-flex footer-list">
          <ul className="footer-program-ul">
            <li>Company</li>
            <li><a href="/About" style={{textDecoration: "none", color: "rgba(255, 255, 255, 0.8)"}}>About us</a></li>
            <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSeN8z3d_akgCnshfGZGyBtlFUR1OKYI-Y_YrC3G_1_qRF6Rww/viewform" style={{textDecoration: "none", color: "rgba(255, 255, 255, 0.8)"}}>Contact us</a></li>
          </ul>
          <ul className="footer-program-ul">
            <li>Our Programs</li>
            <li><a href="/web3course" style={{textDecoration: "none", color: "rgba(255, 255, 255, 0.8)"}}>Web3 for GenZ</a></li>
            <li><a href="/freeCourse" style={{textDecoration: "none", color: "rgba(255, 255, 255, 0.8)"}}>Free Course</a></li>
            <li><a href="https://docs.google.com/forms/d/e/1FAIpQLScrzKTNTLkl-CsgFfIhFSwE3G0sgO-atN3KtGikTeZfp9p8RQ/viewform" style={{textDecoration: "none", color: "rgba(255, 255, 255, 0.8)"}}>Student Ambassador</a></li>
          </ul>
        </div>
      </div>
      <div className="copyWrite-container d-flex justify-content-between">
        <p className="py-0 ">&copy; 2024 VidyaVerse</p>
        <ul className="d-flex term-policy">
          <li><a href="https://docs.google.com/document/d/18ZHHJXmQqSbOgxqjL72GIvSLRrzKM_B9I0f-ZEJ1pzI/edit?usp=sharing" style={{textDecoration: "none", color: "rgba(255, 255, 255, 0.8)"}}>Terms of Service</a></li>
          <li><a href="https://docs.google.com/document/d/1tLaj32FKWOTkSZ15RpWsnaeZvfGAJt_QoKgKOTLyPdw/edit?usp=sharing" style={{textDecoration: "none", color: "rgba(255, 255, 255, 0.8)"}}>Privacy Policy</a></li>
          <li><a href="https://docs.google.com/document/d/12HKXY4EM2RsuqW9dUTR2j1MZlYgcmxIFWlIqcPeYlXE/edit?usp=sharing" style={{textDecoration: "none", color: "rgba(255, 255, 255, 0.8)"}}>Refund Policy</a></li>
        </ul>
      </div>
    </footer>
  );
}
