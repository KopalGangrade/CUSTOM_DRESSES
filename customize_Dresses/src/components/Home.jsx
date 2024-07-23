import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="search-container">
          <input 
            type="text" 
            className="search-bar" 
            placeholder="Top Choices........" 
          />
          <button className="search-button">Search</button>
        </div>
        <h1 className="main-heading">MAKE MORE MEMORABLE MOMENTS WITH FUSION</h1>
        <img 
          src="/IMAGE/hero4.jpg" 
          alt="Hero" 
          className="hero-image" 
        />
        <p className="sub-heading">
          Make a perfect fit for you and your better half from scratch.
        </p>
        <div className="parallel-divs">
          <div className='div-2'>
            <div className="left-div"><img src="/IMAGE/cultural.jpg" alt="" /></div>
            <h2>Cultural Dresses for Wedding</h2>
          </div>
          <div>
            <div className='div-2'>
              <div className="right-div"><img src="/IMAGE/printed_image 1.png" alt="" /></div>
              <h2>Printing Image</h2>
            </div>
          </div>
        </div>
        <h2 className="customize-heading">How to Customize your Dress?</h2>
        <div className="customize-steps">
          <div className="step">
            <img src="/IMAGE/dress.png" alt="Step 1" />
            <h1>Select Design</h1>
            <p>First step where you can choose design for you</p>
          </div>
          <div className="step">
            <img src="/IMAGE/fabric.png" alt="Step 2" />
            <h1>Choose Fabric</h1>
            <p>Select the fabric according to your comfort</p>
          </div>
          <div className="step">
            <img src="/IMAGE/masuretap.png" alt="Step 3" />
            <h1>Get Measured</h1>
            <p>Select sleeves, size, neckline, length and so on</p>
          </div>
          <div className="step">
            <img src="/IMAGE/machine.avif" alt="Step 4" />
            <h1>Stitching</h1>
            <p>Finally design ready to Stitch</p>
          </div>
        </div>
        <div className="center-button">
          <button className="cta-button">Start Customizing</button>
        </div>
        <div className="additional-content">
          <h3>Perfect Fitting</h3>
          <h3>100% Authentic</h3>
          <h3>Delivery At Home</h3>
        </div>
      </div>
    </>
  );
};

export default Home;


