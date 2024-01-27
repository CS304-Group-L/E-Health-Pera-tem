import React from "react";
import { Link } from "react-router-dom";

function StudentSignup({}){
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


            <div className="mb-4">
                 <label for="full_name" class="block text-sm font-medium text-gray-600 mb-1">Full Name </label>
                 <input type="text" id="full_name" name="full_name" placeholder="" autocomplete="given-name"class="w-full p-2 border rounded "> </input>
                 </div>     

                 -- ID Number --
            <div className="mb-4">
                 <label for="id_number" class="block text-sm font-medium text-gray-600 mb-1">ID Number</label>
                 <input type="text" id="id_number" name="id_number" placeholder="" autocomplete="off" class="w-full p-2 border rounded"></input>
                 </div>

                  -- Registration Number --
            <div className="mb-4">
                <label for="registration_number" class="block text-sm font-medium text-gray-600 mb-1">Registration Number</label>
                <input type="text" id="registration_number" name="registration_number" placeholder="s18916" autocomplete="off" class="w-full p-2 border rounded"></input>
                 </div>

                 -- Phone Number --
            <div className="mb-4">
                <label for="phone_number" class="block text-sm font-medium text-gray-600 mb-1">Phone Number</label>
                <input type="tel" id="phone_number" name="phone_number" placeholder="" autocomplete="tel" class="w-full p-2 border rounded"></input>
                </div>

              --- Address--
            <div className="mb-4">
                  <label for="address" class="block text-sm font-medium text-gray-600 mb-1">Address</label>
                 <input type="text" id="address" name="address" placeholder="" autocomplete="address-line1" class="w-full p-2 border rounded"></input>
                </div>

            -- Date of Birth --
            <div className="mb-4">
                 <label for="date_of_birth" class="block text-sm font-medium text-gray-600 mb-1">Date of Birth</label>
                 <input type="date" id="date_of_birth" name="date_of_birth" placeholder="" autocomplete="bday" class="w-full p-2 border rounded"></input>
                 </div> 

             --sex--
             <div className="mb-8 ">
                  <label for="sex" class="block text-sm font-medium text-gray-600 mb-1 margin">Sex</label>
                   <select id="sex" name="sex" class="w-full p-2 border rounded">
                     <option value="male">Male</option>
                     <option value="female">Female</option>
                    <option value="other">Other</option>
                   </select>
              </div>

             -- Civil Status --
            <div className="mb-6">
                <label for="civil_status" class="block text-sm font-medium text-gray-600 mb-1">Civil Status</label>
                <select id="civil_status" name="civil_status" class="w-full p-2 border rounded">
                     <option value="single">Single</option>
                     <option value="married">Married</option>
                     <option value="divorced">Divorced</option>
       
                     </select>
            </div>

            -- Nationality --
            <div className="mb-4">
               <label for="nationality" class="block text-sm font-medium text-gray-600 mb-1">Nationality</label>
               <input type="text" id="nationality" name="nationality" placeholder="" autocomplete="country" class="w-full p-2 border rounded"> </input>
            </div>

            -- Attend School (O/L) --
            <div className="mb-4">
                 <label for="attend_ol" class="block text-sm font-medium text-gray-600 mb-1">Attend School (O/L)</label>
                 <input type="text" id="attend_ol" name="attend_ol" placeholder="" autocomplete="off" class="w-full p-2 border rounded"></input>
            </div>

             -- Attend School (A/L) --
            <div className="mb-4">
                <label for="attend_al" class="block text-sm font-medium text-gray-600 mb-1">Attend School (A/L)</label>
                <input type="text" id="attend_al" name="attend_al" placeholder="" autocomplete="off" class="w-full p-2 border rounded"></input>
            </div>

            -- A/L Index Number --
            <div className="mb-4">
                <label for="al_index_number" class="block text-sm font-medium text-gray-600 mb-1">A/L Index Number</label>
                <input type="text" id="al_index_number" name="al_index_number" placeholder="" autocomplete="off" class="w-full p-2 border rounded"></input>
            </div>  

            -- Extra Curricular Activities/Sports --
           <div className="mb-4">
                 <label for="extracurricular_activities" class="block text-sm font-medium text-gray-600 mb-1">Extra Curricular Activities/Sports</label>
                 <input type="text" id="extracurricular_activities" name="extracurricular_activities" placeholder="" autocomplete="off" class="w-full p-2 border rounded"></input>
           </div>

            -- Is Mother Live? --
           <div className="mb-4">
                 <label for="is_mother_alive" class="block text-sm font-medium text-gray-600 mb-1">Is Mother Live?</label>
                 <input type="text" id="is_mother_alive" name="is_mother_alive" placeholder="" autocomplete="off" class="w-full p-2 border rounded"></input>
           </div>

            -- If Mother is dead, provide the reason --
           <div className="mb-4">
                <label for="mother_death_reason" class="block text-sm font-medium text-gray-600 mb-1">If Mother is dead, what is the reason?</label>
                <input type="text" id="mother_death_reason" name="mother_death_reason" placeholder="" autocomplete="off" class="w-full p-2 border rounded"></input>
           </div>

             -- Is Father Live? --
            <div className="mb-4">
                <label for="is_father_alive" class="block text-sm font-medium text-gray-600 mb-1">Is Father Live?</label>
                 <input type="text" id="is_father_alive" name="is_father_alive" placeholder="" autocomplete="off" class="w-full p-2 border rounded"></input>
            </div>

            -- If Father is dead, provide the reason --
            <div className="mb-4">
                <label for="father_death_reason" class="block text-sm font-medium text-gray-600 mb-1">If Father is dead, what is the reason?</label>
                <input type="text" id="father_death_reason" name="father_death_reason" placeholder="" autocomplete="off" class="w-full p-2 border rounded"></input>
            </div>

            -- Mother's Occupation --
            <div className="mb-4">
                 <label for="mother_occupation" class="block text-sm font-medium text-gray-600 mb-1">Mother's Occupation</label>
                 <input type="text" id="mother_occupation" name="mother_occupation" placeholder="" autocomplete="off" class="w-full p-2 border rounded"></input>
            </div>

            -- Father's Occupation --
            <div className="mb-4">
                <label for="father_occupation" class="block text-sm font-medium text-gray-600 mb-1">Father's Occupation</label>
                <input type="text" id="father_occupation" name="father_occupation" placeholder="" autocomplete="off" class="w-full p-2 border rounded"></input>
            </div>

        -- Number of Brothers and Sisters and their ages --
            <div className="mb-4">
                 <label for="siblings_info" class="block text-sm font-medium text-gray-600 mb-1">Number of Brothers and Sisters and their ages</label>
                 <input type="text" id="siblings_info" name="siblings_info" placeholder="" autocomplete="off" class="w-full p-2 border rounded"></input>
             </div>

        -- Vegetarian or Non-Vegetarian --
            <div className="mb-4">
                <label for="diet_preference" class="block text-sm font-medium text-gray-600 mb-1">Vegetarian or Non-Vegetarian</label>
                <input type="text" id="diet_preference" name="diet_preference" placeholder="" autocomplete="off" class="w-full p-2 border rounded"></input>
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
export default StudentSignup;