import React from "react";
import { Link } from "react-router-dom";

function StaffSignup({}){
    return(
        <section class="h-screen">
       
       
        <div class="h-full">
          <div
            class="g-6 flex h-full flex-wrap items-center justify-center
            lg:justify-between">
            <div>
              <label class="block text-sm font-medium text-gray-700">
                Photo
              </label>
              <div class="mt-1 flex items-center">
                <span class="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                  <svg class="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </span>
                <button type="button" class="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Change
                </button>
              </div>
              </div>
            </div>

               --Name--
            <div className="mb-4">
                 <label for="full_name" class="block text-sm font-medium text-gray-600 mb-1">Full Name </label>
                 <input type="text" id="full_name" name="full_name" placeholder="" autocomplete="given-name"class="w-full p-2 border rounded "> </input>
                 </div>     

                 -- ID Number --
            <div className="mb-4">
                 <label for="id_number" class="block text-sm font-medium text-gray-600 mb-1">ID Number</label>
                 <input type="text" id="id_number" name="id_number" placeholder="" autocomplete="off" class="w-full p-2 border rounded"></input>
                 </div>

                  -- Employee Number --
            <div className="mb-4">
                <label for="employee_number" class="block text-sm font-medium text-gray-600 mb-1">Registration Number</label>
                <input type="text" id="employee_number" name="employee_number" placeholder="" autocomplete="off" class="w-full p-2 border rounded"></input>
                 </div>

                 -- Phone Number --
            <div className="mb-4">
                <label for="phone_number" class="block text-sm font-medium text-gray-600 mb-1">Phone Number</label>
                <input type="tel" id="phone_number" name="phone_number" placeholder="" autocomplete="tel" class="w-full p-2 border rounded"></input>
                </div>
                <div class="text-center lg:text-left">
                  <button
                    type="button" className="px-4 py-2 font-bold text-black bg-blue-800 rounded hover:bg-blue-300"
                  >
                  <Link to={``}>SUBMIT</Link>
                  </button>
             </div>
            </div>
            
            </section> 
             







     

    );

    }
export default StaffSignup;