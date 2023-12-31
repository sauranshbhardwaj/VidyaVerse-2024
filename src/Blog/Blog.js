import React from "react";
import './Blog.css'
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import lady from "../images/lady.png";

const Blog = () => {
  const arr = [1, 2, 3, 4, 5, 6];
  return (
    <div style={{ paddingTop: "20px" }}>
      <Navbar />
      <section className="blog-section" >
        <h1 className="text-center m-auto mb-5 blog-title"> Writings from<br /> <span className="blog-subtitle">Our Team</span> </h1>
        <div className="blog-card-container m-auto">
          {arr?.map((ele,index) => (
            // <div key={index} className="col-md-4 mt-4 border border-danger">
              <div key={index} className="card blog-card overflow-hidden p-3 m-auto">
                <img className="card-img-top" src={lady} alt="Card image cap" />
                <div className="card-body p-0 pt-2">
                  <small className="card-text" > Thursday, 11 AM IST, 3RD AUGUST 2023</small>
                  <h1 className="card-title text-dark"> How to get started <br /> in Web3 ? </h1>
                  <small><b>Featuring</b></small>
                  <br />
                  <small>Sauransh Bharadwaj</small>
                  <br />
                  <button className="blog-card-btn mt-3">  Web3 </button>
                </div>
              {/* </div> */}
            </div>
          ))}

        </div>
            
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
