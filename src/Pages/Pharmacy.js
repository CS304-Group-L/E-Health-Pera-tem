import React from "react";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import "react-responsive-carousel/lib/styles/carousel.min.css";
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
        <NavBar />
      </div>
      <div className="relative w-full overflow-hidden bg-center bg-cover h-[500px] bg-gray-800">
        <Carousel
          showThumbs={false}
          infiniteLoop={true}
          interval={2000}
          autoPlay={true}
        >
          <div>
            <img
              className="object-cover w-full opacity-50"
              src={bgimg1}
              alt=""
            />
          </div>
          <div>
            <img
              className="object-cover w-full opacity-50"
              src={bgimg2}
              alt=""
            />
          </div>
          <div>
            <img
              className="object-cover w-full opacity-50"
              src={bgimg3}
              alt=""
            />
          </div>
          <div>
            <img
              className="object-cover w-full opacity-50"
              src={bgimg4}
              alt=""
            />
          </div>
          <div>
            <img
              className="object-cover w-full opacity-50"
              src={bgimg5}
              alt=""
            />
          </div>
        </Carousel>
        <div className="absolute w-20 h-20 -translate-x-1/2 -translate-y-1/2 bg-red-800 top-1/2 left-1/2">
          text
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Pharmacy;
