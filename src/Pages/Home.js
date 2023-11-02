import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import photo from "../Assets/photo.jpg";

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

        <div className="object-cover object-none w-full bg-yellow-300 h-200">
           {<img src={photo} alt="University of Peradeniya Photo" /> }
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
