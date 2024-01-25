import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import photo from "../../Assets/photo.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import photo_1 from "../../Assets/photo.jpg";
import photo_2 from "../../Assets/Uni_photo_2.jpeg";
import photo_3 from "../../Assets/Uni_photo_3.jpg";
import photo_4 from "../../Assets/Uni_photo_4.jpg";
import photo_5 from "../../Assets/Uni_photo_5.jpg";

const back_ground_4to = [
  { id: 1, img: photo_1 },
  { id: 2, img: photo_2 },
  { id: 3, img: photo_3 },
  { id: 4, img: photo_4 },
  { id: 5, img: photo_5 },
];

export default function Home() {
  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div className="pt-5 overflow-hidden bg-white rounded "></div>

      <div className="flex pl-5 pr-5 divide-x">
        <div className="flex flex-col w-80 ">
          <div>
            <button className="items-center h-8 px-4 font-bold text-white bg-red-800 rounded hover:bg-yellow-300 py-auto w-60">
              Notice Board
            </button>
          </div>
          <div className="my-2"></div>
          <div>
            <button className="h-8 px-4 font-bold text-white bg-red-800 rounded hover:bg-yellow-300 py-auto w-60">
              Updates
            </button>
          </div>
          <div className="my-2"></div>
          <div>
            <button className="h-8 px-4 font-bold text-white bg-red-800 rounded hover:bg-yellow-300 py-auto w-60">
              News
            </button>
          </div>
          <div className="my-2"></div>
          <div>
            <button className="h-8 px-4 font-bold text-white bg-red-800 rounded hover:bg-yellow-300 py-auto w-60">
              Articals
            </button>
          </div>
          <div className="my-2"></div>
          <div>
            <button className="h-8 px-4 font-bold text-white bg-red-800 rounded hover:bg-yellow-300 py-auto w-60">
              Event
            </button>
          </div>
          <div className="my-2"></div>
          <div>
            <button className="h-8 px-4 font-bold text-white bg-red-800 rounded hover:bg-yellow-300 py-auto w-60">
              Other
            </button>
          </div>
          <div className="my-2"></div>
          <div className="text-center">
            In case Of Emergency
            <div className="flex flex-col ">
              <div className="text-lg font-bold text-center">81 2222 248</div>
              <div className="text-lg font-bold text-center">70 5352 568</div>
            </div>
          </div>
        </div>

        <div className="object-cover object-none w-full h-200">
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
        </div>
      </div>

      <div className="text-2xl text-center pt-11">
        <p>This is our vision</p>
      </div>
      <div className="pt-8 pl-40 pr-40">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
        nisi ut aliquip ex ea commodo consequat.</div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
