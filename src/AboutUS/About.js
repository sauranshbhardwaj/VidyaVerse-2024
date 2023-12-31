import React from "react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import AstroWeb3 from "../images/astroweb3.png";
import './about.css'
import Carousels from "../Carousels/Carousels";
import Shardeum from '../images/shardeum.png'
import Liquide from '../images/liquide.png'
import Fampay from '../images/fampay.png'
import Dedecation from '../images/dedication.png'
import Passion from '../images/passion.png'
import Determination from '../images/determination.png'
import Sauransh from '../images/sauransh.png'
import Aditya from '../images/aditya.jpg'


const About = () => {
  return (
    <section>
      <section className="about-container position-relative" style={{ paddingTop: "20px" }} >
        <Navbar />
        <div className="about-heading-section position-absolute" >
          <h1 className="text-center about-heading"> We Educate About </h1>
          <ul className="text-center about-subheading">
            <li>WEB3</li>
          </ul>
          <p className="text-center"> Learn, Innovate, Transform <br /> Web 3 Education Redefining the Future! </p>
        </div>
      </section>
      {/* ---------- RoadMap Section ------------------- */}
      <section className="about-video-section" >
        <div className="m-auto  about-video-div ">
          <div className=" about-video-subdiv position-relative" >
            <img className="about-video" src={AstroWeb3} />
          </div>
        </div>
        <div className="about-roadmap ">
          <h1 className="about-roadmap-title text-center mt-5">Progressing from <span className="text-color">0</span> to <span className="text-color">0.1</span></h1>
          <div className="roadmap m-auto">
            <div className="roadmap-container road-lft-div">
              <div className="roadmap-portion portion-lft1 portion1">
                <button className="roadmap-portion-btn" style={{ marginTop: "-20px" }}>November 2022</button>
                <h3 className="roadmap-portion-title lft-title mt-2">The MVP
                  <div className="roadmap-indicator lft-ind"><div className="roadmap-inner-indicator"></div></div>
                </h3>
                <p className="roadmap-portion-text">A step towards implementing our ideas which began with a 40-mins course on introduction to Web3.</p>
              </div>
              <div className="roadmap-portion portion-lft1 portion2">
                <button className="roadmap-portion-btn">September 2023</button>
                <h3 className="roadmap-portion-title lft-title">The Incorporation
                  <div className="roadmap-indicator lft-ind"><div className="roadmap-inner-indicator"></div></div>
                </h3>
                <p className="roadmap-portion-text">A promise that we made to ourselves that we are passionate enough to convert our dreams into reality.</p>
              </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="6" viewBox="0 0 6 958" fill="none">
              <path d="M3 0.113249L0.113249 3L3 5.88675L5.88675 3L3 0.113249ZM2.99996 957.209L5.88671 954.322L2.99996 951.435L0.113207 954.322L2.99996 957.209ZM2.5 3L2.49996 954.322L3.49996 954.322L3.5 3L2.5 3Z" fill="#2D2D2D" />
            </svg>
            <div className="roadmap-container roadmap-rgt-div">
              <div className="roadmap-portion portion-rgt portion3">
                <button className="roadmap-portion-btn">August 2021</button>
                <h3 className="roadmap-portion-title rgt-title mt-2">
                  <div className="roadmap-indicator rgt-ind "><div className="roadmap-inner-indicator"></div></div>The Birth</h3>
                <p className="roadmap-portion-text">An idea to educate teenagers about the education of the future, especially Web3 and AI.</p>
              </div>
              <div className="roadmap-portion portion-rgt portion4">
                <button className="roadmap-portion-btn " style={{ marginTop: '-20px' }}>April 2023</button>
                <h3 className="roadmap-portion-title rgt-title mt-2">
                  <div className="roadmap-indicator rgt-ind"><div className="roadmap-inner-indicator"></div></div>The Milestone</h3>
                <p className="roadmap-portion-text">A small one, but the milestone which took us 4 months of hustling, failing, and learning - 10,000 Users!</p>
              </div>
            </div>
          </div>
          {/* dvdfvdf */}
          <div className="phone-roadmap m-auto ">
            <svg xmlns="http://www.w3.org/2000/svg" width="6" viewBox="0 0 6 958" fill="none">
              <path d="M3 0.113249L0.113249 3L3 5.88675L5.88675 3L3 0.113249ZM2.99996 957.209L5.88671 954.322L2.99996 951.435L0.113207 954.322L2.99996 957.209ZM2.5 3L2.49996 954.322L3.49996 954.322L3.5 3L2.5 3Z" fill="#2D2D2D" />
            </svg>
            <div className="phone-roadmap-container">
              <div className="roadmap-portion portion-rgt portion1">
                <button className="roadmap-portion-btn">November 2022</button>
                <h3 className="roadmap-portion-title rgt-title"><div className="roadmap-indicator rgt-ind"><div className="roadmap-inner-indicator"></div></div>
                  Vidhyaverse Begins</h3>
                <p className="roadmap-portion-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus.</p>
              </div>
              <div className="roadmap-portion portion-rgt ">
                <button className="roadmap-portion-btn">2 October 21</button>
                <h3 className="roadmap-portion-title rgt-title"><div className="roadmap-indicator rgt-ind"><div className="roadmap-inner-indicator"></div></div>
                  Vidhyaverse Begins </h3>
                <p className="roadmap-portion-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus.</p>
              </div>
              <div className="roadmap-portion portion-rgt ">
                <button className="roadmap-portion-btn">3 October 21</button>
                <h3 className="roadmap-portion-title rgt-title">
                  <div className="roadmap-indicator rgt-ind"><div className="roadmap-inner-indicator"></div></div>
                  Vidhyaverse Begins</h3>
                <p className="roadmap-portion-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus.</p>
              </div>
              <div className="roadmap-portion portion-rgt">
                <button className="roadmap-portion-btn ">4 October 21</button>
                <h3 className="roadmap-portion-title rgt-title">
                  <div className="roadmap-indicator rgt-ind"><div className="roadmap-inner-indicator"></div></div>
                  Vidhyaverse Begins</h3>
                <p className="roadmap-portion-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus.</p>
              </div>

            </div>
          </div>
        </div>
      </section>
      {/* ------------ Carousel Secion ----------------- */}
      <section className="carousel-section ">
        <h3 className="about-carousel-title text-center">We are Trusted by the best!</h3>
        {/* <Carousels /> */}
        <section className="d-flex justify-content-between about-carousel-section px-5 mx-auto">
          <div className="about-carousel-section-card">
            <img src={Shardeum} alt="Shardeum" />
          </div>
          <div className="about-carousel-section-card"> <img src={Liquide} alt="Liquide" /></div>
          {/*<div className="about-carousel-section-card"> <img src={Fampay} alt="Fampay" /></div>*/}
        </section>
      </section>
      {/* ------------- Core Value Section -------------- */}
      <section className="core-section-section my-5 ">
        <h1 className="text-center core-value-title mb-5">Our <span className="core-value-subtitle">CoreValues</span></h1>
        <div className="core-value-row m-auto">
          <div className="card core-section-card m-auto">
            <div className="card-body d-flex flex-column justify-content-center align-items-center">
              <div className="corvalue-card-icon"><img src={Dedecation} alt="Dedecation icon" /></div>
              <h5 className="cor-value-card-title mt-2">Dedication</h5>
            </div>
          </div>
          <div className="card core-section-card m-auto">
            <div className="card-body  d-flex flex-column justify-content-center align-items-center">
              <div className="corvalue-card-icon"><img src={Determination} alt="Determination icon" /></div>
              <h5 className="cor-value-card-title mt-2">Determination</h5>
            </div>
          </div>
          <div className="card core-section-card m-auto">
            <div className="card-body  d-flex flex-column justify-content-center align-items-center">
              <div className="corvalue-card-icon"><img src={Passion} alt="Passion icon" /></div>
              <h5 className="cor-value-card-title mt-2">Passion</h5>
            </div>
          </div>
        </div>
      </section>
      {/* ------------------- Stellar Section ------------------- */}
      <section className="stellar-section mx-auto d-flex justify-content-between">
        <h1 className="steller-tittle">Our <span className="steller-subtittel">Stellar</span> Team</h1>
        <div className="steller-gallery">
          <div className="steller-gallery-div">
            <div className="text-center">
              <div className="stellar-card">
                <img src={Sauransh} alt="Steller Team img" />
              </div>
              <h4 className="mt-2 mb-0">Sauransh Bhardwaj </h4>
              <p>Co-Founder</p>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center">
            <div className="stellar-card"> <img src={Aditya} alt="Steller Team img" /></div>
              <h4 className="mt-2 mb-0">Aditya Shrestha Agrawal</h4>
              <p>Co-Founder</p>
            </div>
            
          </div>
          {/* <p className="steller-gallery-content mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus.</p> */}
        </div>
      </section>

      <Footer />
    </section>
  );
};

export default About;
