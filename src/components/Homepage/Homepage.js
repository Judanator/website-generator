import React, {Fragment} from "react";
import './Homepage.css'

import Arrow from '../UI/Arrow/Arrow'
import Dot from '../UI/DotMenu/DotMenu'
import Menu from '../Menu/Menu'


const Homepage = () => {
  return (
    <Fragment>
    <Menu/>
    <div className="slider">
      <Dot />
      <section className="section1">
        <img src="https://i.postimg.cc/4NFkfSJ4/designwebdesignledger-com.gif" alt="build-web" className="website-gif"/>
        <h1 className="homepage-title">AI Powered <br/> Website Generator </h1>
        <p className="homepage-subtext1"> tell us what website you need and we will build it in a few minutes.  </p>
        <button className="getstartedBtn"><a href="/form"> get started for free </a></button>
        <Arrow />
      </section>

        <section style={{background: "#ffde59"}} className="section2">
          <h1 className="processText"> Our Process </h1>
          <hr className="processLine"/>
          <div className="processDiv">
          <h2 id="1">1<span style={{color: 'salmon'}}>.</span><p className="process1"> tell us your needs. fill out our form <br/> so we can get started! let us handle <br/> the design process for you. </p></h2>
          <h2 id="2">2<span style={{color: 'darkcyan'}}>.</span><p className="process2"> ai will generate a website <br/>for you based on your answers. <br/> components are created based <br/> on industry. </p></h2>
          <h2 id="3">3<span style={{color: 'darkred'}}>.</span><p className="process3"> DONE! in a few minutes, you will <br/> have a website, specifically geared  <br/>towards the company you <br/> want to build. </p></h2>
          </div>
          <Arrow />
        </section>
    </div>
    </Fragment>
  );
};

export default Homepage;
