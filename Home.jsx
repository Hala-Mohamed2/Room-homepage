import './Home.css';
import { useState } from 'react';

const Home = ({handleNext , handlePrev , homeRef , title , desc}) => {

  const [show, setShow] = useState(false);

  return(
    <div className="home">

      <div className="home-one" ref={homeRef}>
        {show && (
          <div className="fixed" onClick={()=> setShow(false)}>
            <img src="./images/icon-close.svg" alt="" />
            <div className="link">
              <a href="">home</a>
              <a href="">shop</a>
              <a href="">about</a>
              <a href="">contact</a>
            </div>
          </div>
        )}
        <div className="gow">
          <div className="humbur" onClick={() => setShow(!show)}>
            <img src="./images/icon-hamburger.svg" alt="" />
          </div>
          <img src="./images/logo.svg" alt="" />
        <div className="links">
            <a href="">home</a>
            <a href="">shop</a>
            <a href="">about</a>
            <a href="">contact</a>
          </div>
        </div>
      </div>


      <div className="home-two">
        <div className="homeee">
          <h1>{title}</h1>
          <p>{desc}</p>
          <span>SHOP NOW <img src="./images/icon-arrow.svg" alt="" /></span>
        </div>
        <div className="arrows">
          <img src="./images/icon-angle-left.svg" alt="" onClick={handlePrev}/>
          <img src="./images/icon-angle-right.svg" alt="" onClick={handleNext}/>
        </div>
      </div>


    </div>
  )
}



export default Home;