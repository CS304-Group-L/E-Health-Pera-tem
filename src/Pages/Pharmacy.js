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

const options = [
  {
    id: 1,
    name: "Drug Store",
    bg_color: "bg-green-600",
  },
  {
    id: 2,
    name: "Medical Report",
    bg_color: "bg-blue-500",
  },
];
const back_ground_4to = [
  { id: 1, img: bgimg1 },
  { id: 2, img: bgimg2 },
  { id: 3, img: bgimg3 },
  { id: 4, img: bgimg4 },
  { id: 5, img: bgimg5 },
];

function Pharmacy() {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className="relative w-full overflow-hidden bg-center bg-cover h-[500px] bg-gray-950">
        <Carousel
          showThumbs={false}
          infiniteLoop={true}
          interval={2000}
          autoPlay={true}
        >
          {back_ground_4to.map((item) => (
            <img
              key={item.id}
              className="object-cover w-full h-[500px] opacity-50"
              src={item.img}
              alt=""
            />
          ))}
        </Carousel>

        <div className="grid w-1/2 grid-cols-2 gap-10  absolute  h-32 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          {options.map((item) => (
            <button
              key={item.id}
              className={`flex items-center justify-center p-5 ${item.bg_color}`}
            >
              <p className="font-bold text-3xl">{item.name}</p>
            </button>
          ))}
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Pharmacy;
