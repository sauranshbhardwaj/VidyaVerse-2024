import React, { useEffect, useState } from 'react'
import Footer from "./Component/Footer";
import Navbar from "./Component/Navbar";
import "./App.css";
import airman1 from "./images/Group.png";
import airman2 from "./images/Group1.png";
import SeatingAstro from './images/seatingAstro.png'
import arrowIcon from "./images/ArrowLineUpRight.png"
import handshakeImg from './images/Handshake.svg'
import gloabImg from './images/Globe.svg'
import chartBarImg from './images/ChartBar.svg'
import magnifyGImg from './images/MagnifyingGlass.svg'
import bulbImg from './images/Lightbulb.svg'
import currentTestinomialImg from './images/Rectangle 27.png'
import pedingTestinomialImg from './images/connect-grow-thrive.png'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Autoplay } from 'swiper/modules';

// 
import Berkeley from './images/crousel/berkeley.png'
import Carousel2 from "./images/crousel/drexel.png";
import Carousel3 from './images/crousel/dtu.png'
import Carousel4 from './images/crousel/iiitd.png'
import Carousel5 from './images/crousel/iitd.png'
import Carousel6 from './images/crousel/lsr.png'
import Carousel7 from './images/crousel/stanford.png'
import Carousel8 from './images/crousel/svc.png'
import Carousel9 from './images/crousel/waterloo.png'

export default function Dashboard() {
  const [sliderNum, setSliderNum] = useState(4)

  useEffect(() => {
    const screenWidth = window.screen.width;

    if (screenWidth > 1450) {
      setSliderNum(5)
    }
    else if (screenWidth > 1000) {
      setSliderNum(4)
    }
    else if (screenWidth > 768) {
      setSliderNum(3)
    }
    else if (screenWidth > 500) {
      setSliderNum(2)
    }
    else if (screenWidth < 500) {
      setSliderNum(1)
    }
  }, [])
  return (
    <div className="App" >
      <section className="landing-section" style={{ paddingTop: "20px" }}>
        <Navbar />
        <div className="section1data" style={{marginTop: "70px"}}>
          <h1 className="landing-title text-center"> The Ultimate Space For Learning Web3</h1>
          <p className="text-center" style={{fontSize: "larger", fontWeight: 700, marginTop: "20px"}}>Enter The Web3 Era: Learn & Thrive</p>
          <a className="landing-start-btn bg-transparent mt-3" href="/web3course">Get Started</a>
        </div>
        <div className="landing-astronaut1">
          <img src={airman1} alt="Astronaut 1" />
        </div>
        <div className="landing-astronaut2">
          <img src={airman2} alt="Astronaut 2" />
        </div>
      </section >
      {/* -------------- Carousel Section------------- */}
      <section className="landing-carousel mt-5 pt-5">
        <h1 className="landing-carousel-title text-center">Our Team comes from</h1>
        <Swiper
          slidesPerView={sliderNum}
          spaceBetween={30}
          grabCursor={true}
          loop={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: true,
          }}
          modules={[Autoplay]}
          className="mySwiper">
          <SwiperSlide className="dashboard-swiper"><img src={Carousel7} alt='Carousel7'/></SwiperSlide>
          <SwiperSlide className="dashboard-swiper" style={{width:'300px',height:'120px'}}><img src={Berkeley} alt='Berkeley' style={{marginTop:"-10px"}}/></SwiperSlide>
          <SwiperSlide className="dashboard-swiper"><img src={Carousel9} alt='Carousel9' style={{height: "69px", marginRight: "30px", marginTop: "15px", width: "300px"}}/></SwiperSlide>
          <SwiperSlide className="dashboard-swiper"><img src={Carousel2} alt='Carousel2' style={{height: "60px", marginLeft: "45px", marginTop: "20px"}}/></SwiperSlide>
          <SwiperSlide className="dashboard-swiper"><img src={Carousel5} alt='Carousel5' style={{width:'45%'}}/></SwiperSlide>
          <SwiperSlide className="dashboard-swiper d-flex justify-content-center align-items-center" style={{width:'130px',}}><img src={Carousel4} alt='Carousel4' style={{width:'45%',height:'60%'}}/></SwiperSlide>
          <SwiperSlide className="dashboard-swiper" style={{width:'130px'}}><img src={Carousel3} alt='Carousel3' style={{width:'45%'}}/></SwiperSlide>
          <SwiperSlide className="dashboard-swiper" style={{width:'120px'}}><img src={Carousel6} alt='Carousel6' style={{width:'45%'}}/></SwiperSlide>
          <SwiperSlide className="dashboard-swiper" style={{width:'100px'}}><img src={Carousel8} alt='Carousel8' style={{width:'45%'}}/></SwiperSlide>
        </Swiper>
      </section>

      {/* --------------- Explore Section ------------ */}
      <section className="explore-container mt-5 ">
        <h1 className="explore-heading text-center">Explore <span className="explore-subheading">VidyaVerse</span></h1>
        <div className="position-relative explore-box connect-box mx-auto px-5 py-4 d-flex justify-content-between">
          <img className="seating-astro" src={SeatingAstro} alt="Seating Astronaut" />
          <div className="explore-left-div connect-left-box d-flex flex-column justify-content-between pb-5">
            <h3 className="connect-left-box-text"><span className="connect-left-box-subtext">Connect.</span> Grow. Thrive</h3>
            <p className="connect-left-pra-text"> Here at Vidyaverse, Engage with the like-minded WEB3 enthusiast. Connect with more people & Build !!</p>
            <p className="connect-left-pra-text2">Learn new skills for WEB3 Era, Understand the future of it. Upskill your WEB3 Knowledge.</p>
          </div>
          <div className="connect-right-box position-relative mt-1">
            {/* <div className="connect-outer-penta"></div> */}

            <div className="connect-pentagon" style={{height:"100%"}}>
              <img src={pedingTestinomialImg} alt="" />
            </div>
            {
            /*<div className="connect-pentagon connect-pentagon2"><img src={pedingTestinomialImg} alt="" /></div>
            <div className="connect-pentagon connect-pentagon3"><img src={pedingTestinomialImg} alt="" /></div>
            <div className="connect-pentagon connect-pentagon4"><img src={pedingTestinomialImg} alt="" /></div>
            <div className="connect-pentagon connect-pentagon5"><img src={pedingTestinomialImg} alt="" /></div>
            <div className="connect-pentagon connect-pentagon6"><img src={pedingTestinomialImg} alt="" /></div>
            <div className="connect-pentagon connect-pentagon7"><img src={pedingTestinomialImg} alt="" /></div>*/
            }
          </div>
        </div>
        <div className="technology-box mx-auto my-5 px-5">
          <div className="technology-left-box">
            <h3 className="technology-left-box-text mt-4"><span className="technology-left-box-subtext">Explore</span>  WEB3 Technologies</h3>
            <p className="technology-left-pra-text">Find the best Course to learn new technologies in WEB3 Space</p>
            <p className="technology-left-pra-text2">Interested learning? <a href="/web3course">Enroll now</a></p>
          </div>
          <div className="technology-right-box  d-flex align-items-end">
            <div className="technology-type-div position-relative">
              <div className="position-absolute technology-type-defi">DeFi</div>
              <div className="position-absolute technology-type-crypto">Cryptocurrency</div>
              <div className="position-absolute technology-type-web3">WEB3 Wallet</div>
              <div className="position-absolute technology-type-decen">Decentralized Storage</div>
            </div>
            <div className='technology-type-div2'>
              <div className="position-absolute technology-blockchain">Blockchain</div>
              <div className="position-absolute technology-nft">NFTs</div>
              <div className="position-absolute technology-dapps">dApps</div>
              <div className="position-absolute technology-privacy">Privacy Coins</div>
              <div className="position-absolute technology-dex">DEXs</div>
            </div>
          </div>
        </div>
        <div className="explore-box learn-box mx-auto my-5 px-5 py-4 d-flex justify-content-between">
          <div className="explore-left-div learn-left-box d-flex flex-column justify-content-between">
            <h3 className="learn-left-box-text"><span className="learn-left-box-subtext">Learn</span> and Fun</h3>
            <div>
              <p className="learn-left-box-pra-text">Courses curated such that even a beginner can dive into the WEB3 space easily.</p>
              <a className="learn-btn" href='/web3course'>View Courses
                <img src={arrowIcon} alt="arrow icon btn" className="mx-2" />
              </a>
            </div>
          </div>
          <div className="learn-right-box position-relative">
            <div className="learn-video-card learn-video-card1" style={{padding:"4px"}}>
              <h1>INTRODUCTION TO WEB3</h1>
            </div>
            {/*<div className="learn-video-card learn-video-card2"></div>
            <div className="learn-video-card learn-video-card3"></div>*/}
          </div>
        </div>
      </section>

      {/* -------------- Course Offer Section ----------- */}

      <section className="offer-course-section mt-5 position-relative">
        <div className="offer-course-section1">
          <p className="course-offer-title"> The <span className="courses-text-color">Courses</span> <br />we offer</p>
          <p className="course-offer-text">Embark on a transformative Web3 learning experience. Explore decentralized technologies, collaborate with experts, and unlock limitless possibilities.</p>
          <a className="offer-course-btn d-inline" href='/web3course'>Enroll Now
            <img src={arrowIcon} alt="arrow icon btn" className="mx-2" />
          </a>
        </div>
        <div className="course-offer-carousel d-flex position-absolute ">
          <div className="course-offer-carousel-card1"></div>
          {/*<div className="course-offer-carousel-card1 mx-4"></div>*/}
        </div>
      </section>

      {/* -------------- Key Section --------------------- */}
      <section className="key-section ">
        <h1 className="key-section-title text-center">Key <span className="key-section-subtitle">Numbers</span> to know</h1>
        <div className="key-div-container ">
          <div className="key-div d-flex flex-column align-items-center justify-content-center">
            <img className="key-img" src={handshakeImg} alt="Handsacking img" />
            <h1 className="key-head m-0">2+</h1>
            <p className="key-text">years</p>
          </div>
          <div className="key-div d-flex flex-column align-items-center justify-content-center">
            <img className="key-img" src={gloabImg} alt="Handsacking img" />
            <h1 className="key-head m-0">4+</h1>
            <p className="key-text">countries</p>
          </div>
          <div className="key-div d-flex flex-column align-items-center justify-content-center">
            <img className="key-img" src={chartBarImg} alt="Handsacking img" />
            <h1 className="key-head m-0">15000+</h1>
            <p className="key-text">Users</p>
          </div>
          <div className="key-div d-flex flex-column align-items-center justify-content-center">
            <img className="key-img" src={magnifyGImg} alt="Handsacking img" />
            <h1 className="key-head m-0">45+</h1>
            <p className="key-text">Organizations</p>
          </div>
          <div className="key-div d-flex flex-column align-items-center justify-content-center">
            <img className="key-img" src={bulbImg} alt="Handsacking img" />
            <h1 className="key-head m-0">5000+</h1>
            <p className="key-text">Courses Donated</p>
          </div>
        </div>
      </section>

      {/* --------------- Testinomial Section -------------------- */}
      {/* <section className="testinomial-section">
        <h1 className="testinomial-title text-center"><span className="key-section-subtitle">Success</span> stories</h1>
        <section className="testinomial-sub-section d-flex justify-content-around">
          <div className="current-testinomial">
            <img src={currentTestinomialImg} alt="Current testinomial image" />
          </div>
          <div className="current-testinomial-text">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 38" fill="none">
              <path d="M0 38V28.0924H3.30562C6.01793 28.0088 7.92502 27.3399 9.02689 26.0858C10.2135 24.7481 10.8068 22.9087 10.8068 20.5677V16.9307H1.14425V0H22.1222V21.4455C22.1222 26.7965 20.6813 30.8933 17.7995 33.736C14.9177 36.495 11.0611 37.9164 6.22983 38H0ZM29.8778 38V28.0924H33.1834C35.8957 28.0088 37.8028 27.3399 38.9046 26.0858C40.0913 24.7481 40.6846 22.9087 40.6846 20.5677V16.9307H31.022V0H52V21.4455C52 26.7965 50.5591 30.8933 47.6773 33.736C44.7954 36.495 40.9389 37.9164 36.1076 38H29.8778Z" fill="url(#paint0_linear_215_1382)" />
              <defs>
                <linearGradient id="paint0_linear_215_1382" x1="18.3077" y1="41.8" x2="18.3077" y2="-15.7067" gradientUnits="userSpaceOnUse">
                  <stop offset="0.114586" stop-color="#AD00FF" />
                  <stop offset="1" stop-color="#E3A7FF" />
                </linearGradient>
              </defs>
            </svg>
            <p className="current-testinomial-para mt-3">Excellent Mentors to learn from. Easy to understand concepts, overall the best courses.</p>
            <span className="testinomial-feedback-name">- Jay Patel</span>
          </div>
        </section>
        <section className="testinomial-gallery-section mt-3 d-flex justify-content-between">
          <div className="testinomial-gallery-img">
            <img src={pedingTestinomialImg} alt="testinomial image1" />
          </div>
          <div className="testinomial-gallery-img">
            <img src={pedingTestinomialImg} alt="testinomial image2" />
          </div>
          <div className="testinomial-gallery-img">
            <img src={pedingTestinomialImg} alt="testinomial image3" />
          </div>
          <div className="testinomial-gallery-img">
            <img src={pedingTestinomialImg} alt="testinomial image4" />
          </div>
        </section>
      </section> */}

      {/* ----------------------- FAQ Section -------------- */}
      {/*<section className="faq-section">
        <h1 className="faq-title text-center">Your Questions, <span className="key-section-subtitle">Answered</span></h1>

        <ul className="faq-question-ul p-0">
          <li className="faq-question-li d-flex justify-content-between p-3 list-style-none"><span>What is Web3?</span><span>+</span></li>
          <li className="faq-question-li d-flex justify-content-between p-3 list-style-none"><span>How does Web3 differ from Web2?</span><span>+</span></li>
          <li className="faq-question-li d-flex justify-content-between p-3 list-style-none"><span>What are the key technologies underlying Web3?</span><span>+</span></li>
          <li className="faq-question-li d-flex justify-content-between p-3 list-style-none"><span>How can I get started with Web3 development?</span><span>+</span></li>
          <li className="faq-question-li d-flex justify-content-between p-3 list-style-none"><span>What are some real-world applications and use cases of Web3?</span><span>+</span></li>
        </ul>
    </section>*/}

      <Footer />
    </div>
  );
}
