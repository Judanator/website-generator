import React from "react";
import './Homepage.css'

const Homepage = () => {
  
  return (
    <div className="slider">
      <section className="section1">
        <img src="https://i.postimg.cc/4NFkfSJ4/designwebdesignledger-com.gif" alt="build-web" className="website-gif"/>
        <h1 className="homepage-title">AI Powered <br/> Website Generator </h1>
        <p className="homepage-subtext1"> tell us what website you need and we will build it in a few minutes.  </p>
        <button className="getstartedBtn"> get started for free </button>
      </section>

        <section style={{background: "#ffde59"}} className="section2">
          <h1 className="processText"> Our Process </h1>
          <hr className="processLine"/>
          <div className="processDiv">
          <h2 id="1">1<span style={{color: 'salmon'}}>.</span><p className="process1"> tell us your needs. fill out our form <br/> so we can get started! let us handle <br/> the design process for you. </p></h2>
          <h2 id="2">2<span style={{color: 'darkcyan'}}>.</span><p className="process2"> ai will generate a website <br/>for you based on your answers. <br/> components are created based <br/> on industry. </p></h2>
          <h2 id="3">3<span style={{color: 'darkred'}}>.</span><p className="process3"> DONE! in a few minutes, you will <br/> have a website, specifically geared  <br/>towards the company you <br/> want to build. </p></h2>
          </div>
        </section>

        {/* <section style={{background: "salmon"}} className="section3">
          <h2 className="footerTitleText"> Start Your Company Today! </h2>
          <div className="footer">
            <p> Website made by Judy Tan. <a href="https://github.com/Judanator"> Visit my <span style={{color: "yellow", fontWeight: "600"}}> github! </span> </a></p>
          </div>
        </section> */}
    </div>
  );
};

export default Homepage;
