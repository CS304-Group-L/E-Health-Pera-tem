import React from "react";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import { Carousel } from "react-responsive-carousel";
import bgimg1 from "../Assets/Back_drug1.jpg";
import bgimg2 from "../Assets/Back_drug2.jpg";
import bgimg3 from "../Assets/Back_drug3.jpg";
import bgimg4 from "../Assets/Back_drug4.jpg";
import bgimg5 from "../Assets/Back_drug5.jpg";

function Pharmacy() {
  return (
  
      <div>
        <div>
        <NavBar/>
        </div>
        <div className="relative w-full h-auto bg-center bg-cover">
        <Carousel
        showThumbs={false}
        infiniteLoop={true}
        interval={2000}
        autoPlay={true}
      >
        <div>
          <img
            className="object-cover w-full h-auto"
            src={bgimg1}
            alt=""
          />
        </div>
        <div>
          <img
            className="object-cover w-full h-auto"
            src={bgimg2}
            alt=""
          />
        </div>
        <div>
          <img
            className="object-cover w-full h-auto"
            src={bgimg3}
            alt=""
          />
        </div>
        <div>
          <img
            className="object-cover w-full h-auto"
            src={bgimg4}
            alt=""
          />
        </div>
        <div>
          <img
            className="object-cover w-full h-auto"
            src={bgimg5}
            alt=""
          />
        </div>
      </Carousel>
        </div>
        <div>
        <Footer/>
        </div>
  </div>
  );
}

export default Pharmacy;