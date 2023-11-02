import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import image from "../Assets/Photo2.jpg";
import { Link } from "react-router-dom";

function Services() {
  return (
    <div className="flex flex-col h-screen">
      <div>
        <Navbar />
      </div>

      <div className="p-4 mb-6 text-2xl font-bold text-center bg-gray-100">
        <div>Health Center - University of Peradeniya</div>
        <div className="text-base font-normal">SERVICES </div>
      </div>

      <div className="mt-0">
        <div class="min-h-full pt-1 flex items-center justify-center h-[51vh]">
          <div class="flex flex-wrap justify-center space-x-2 pt-5">
            <button class="bg-red-800 hover:bg-yellow-300 text-black font-bold py-2 px-4 rounded">
              Student
            </button>
            <button class="bg-red-800 hover:bg-yellow-300 text-black font-bold py-2 px-4 rounded">
              Staff
            </button>
            <button class="bg-red-800 hover:bg-yellow-300 text-black font-bold py-2 px-4 rounded">
              <Link to="/DoctorBoard">Doctor</Link>
            </button>
            <button class="bg-red-800 hover:bg-yellow-300 text-black font-bold py-2 px-4 rounded">
              <Link to="/Pharmacy"> Pharmacy </Link>
            </button>

            <button class="bg-red-800 hover:bg-yellow-300 text-black font-bold py-2 px-4 rounded">
              Laboratory
            </button>
            <button class="bg-red-800 hover:bg-yellow-300 text-black font-bold py-2 px-4 rounded">
              Ward
            </button>
            <button class="bg-red-800 hover:bg-yellow-300 text-black font-bold py-2 px-4 rounded">
              Nurse
            </button>
          </div>
        </div>
      </div>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
export default Services;
