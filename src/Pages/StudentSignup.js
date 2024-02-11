import React from "react";
import { Link } from "react-router-dom";

function StudentSignup({}){
    return(
      <section class="bg-gray-50 dark:bg-gray-900">
      <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          
          <div class="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
              <h2 class="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Student Sign-Up
              </h2>
              <form class="mt-4 space-y-4 lg:mt-5 md:space-y-5" action="#">

            <div className="mb-4">
                 <label for="full_name" class="block text-sm font-medium text-gray-600 mb-1">Full Name </label>
                 <input type="text" id="full_name" name="full_name" placeholder="" autocomplete="given-name"class="w-full p-2 border rounded "/> 
                 </div>     

                 
            <div className="mb-4">
                 <label for="id_number" class="block text-sm font-medium text-gray-600 mb-1">ID Number</label>
                 <input type="text" id="id_number" name="id_number" placeholder="" autocomplete="off" class="w-full p-2 border rounded"/>
                 </div>

                  
            <div className="mb-4">
                <label for="registration_number" class="block text-sm font-medium text-gray-600 mb-1">Registration Number</label>
                <input type="text" id="registration_number" name="registration_number" placeholder="s18916" autocomplete="off" class="w-full p-2 border rounded"/>
                 </div>

                 
            <div className="mb-4">
                <label for="phone_number" class="block text-sm font-medium text-gray-600 mb-1">Phone Number</label>
                <input type="tel" id="phone_number" name="phone_number" placeholder="" autocomplete="tel" class="w-full p-2 border rounded"/>
                </div>

              
            <div className="mb-4">
                  <label for="address" class="block text-sm font-medium text-gray-600 mb-1">Address</label>
                 <input type="text" id="address" name="address" placeholder="" autocomplete="address-line1" class="w-full p-2 border rounded"/>
                </div>

            
            <div className="mb-4">
                 <label for="date_of_birth" class="block text-sm font-medium text-gray-600 mb-1">Date of Birth</label>
                 <input type="date" id="date_of_birth" name="date_of_birth" placeholder="" autocomplete="bday" class="w-full p-2 border rounded"/>
                 </div> 

             
             <div className="mb-8 ">
                  <label for="sex" class="block text-sm font-medium text-gray-600 mb-1 margin">Sex</label>
                   <select id="sex" name="sex" class="w-full p-2 border rounded">
                     <option value="male">Male</option>
                     <option value="female">Female</option>
                    <option value="other">Other</option>
                   </select>
              </div>

             
            <div className="mb-6">
                <label for="civil_status" class="block text-sm font-medium text-gray-600 mb-1">Civil Status</label>
                <select id="civil_status" name="civil_status" class="w-full p-2 border rounded">
                     <option value="single">Single</option>
                     <option value="married">Married</option>
                     <option value="divorced">Divorced</option>
       
                     </select>
            </div>

            
            <div className="mb-4">
               <label for="nationality" class="block text-sm font-medium text-gray-600 mb-1">Nationality</label>
               <input type="text" id="nationality" name="nationality" placeholder="" autocomplete="country" class="w-full p-2 border rounded"/> 
            </div>

            
            <div className="mb-4">
                 <label for="attend_ol" class="block text-sm font-medium text-gray-600 mb-1">Attend School (O/L)</label>
                 <input type="text" id="attend_ol" name="attend_ol" placeholder="" autocomplete="off" class="w-full p-2 border rounded"/>
            </div>

             
            <div className="mb-4">
                <label for="attend_al" class="block text-sm font-medium text-gray-600 mb-1">Attend School (A/L)</label>
                <input type="text" id="attend_al" name="attend_al" placeholder="" autocomplete="off" class="w-full p-2 border rounded"/>
            </div>

          
            <div className="mb-4">
                <label for="al_index_number" class="block text-sm font-medium text-gray-600 mb-1">A/L Index Number</label>
                <input type="text" id="al_index_number" name="al_index_number" placeholder="" autocomplete="off" class="w-full p-2 border rounded"/>
            </div>  

            
           <div className="mb-4">
                 <label for="extracurricular_activities" class="block text-sm font-medium text-gray-600 mb-1">Extra Curricular Activities/Sports</label>
                 <input type="text" id="extracurricular_activities" name="extracurricular_activities" placeholder="" autocomplete="off" class="w-full p-2 border rounded"/>
           </div>

            
           <div className="mb-4">
                 <label for="is_mother_alive" class="block text-sm font-medium text-gray-600 mb-1">Is Mother Live?</label>
                 <input type="text" id="is_mother_alive" name="is_mother_alive" placeholder="" autocomplete="off" class="w-full p-2 border rounded"/>
           </div>

            
           <div className="mb-4">
                <label for="mother_death_reason" class="block text-sm font-medium text-gray-600 mb-1">If Mother is dead, what is the reason?</label>
                <input type="text" id="mother_death_reason" name="mother_death_reason" placeholder="" autocomplete="off" class="w-full p-2 border rounded"/>
           </div>

             
            <div className="mb-4">
                <label for="is_father_alive" class="block text-sm font-medium text-gray-600 mb-1">Is Father Live?</label>
                 <input type="text" id="is_father_alive" name="is_father_alive" placeholder="" autocomplete="off" class="w-full p-2 border rounded"/>
            </div>

            
            <div className="mb-4">
                <label for="father_death_reason" class="block text-sm font-medium text-gray-600 mb-1">If Father is dead, what is the reason?</label>
                <input type="text" id="father_death_reason" name="father_death_reason" placeholder="" autocomplete="off" class="w-full p-2 border rounded"/>
            </div>

            
            <div className="mb-4">
                 <label for="mother_occupation" class="block text-sm font-medium text-gray-600 mb-1">Mother's Occupation</label>
                 <input type="text" id="mother_occupation" name="mother_occupation" placeholder="" autocomplete="off" class="w-full p-2 border rounded"/>
            </div>

            
            <div className="mb-4">
                <label for="father_occupation" class="block text-sm font-medium text-gray-600 mb-1">Father's Occupation</label>
                <input type="text" id="father_occupation" name="father_occupation" placeholder="" autocomplete="off" class="w-full p-2 border rounded"/>
            </div>

        
            <div className="mb-4">
                 <label for="siblings_info" class="block text-sm font-medium text-gray-600 mb-1">Number of Brothers and Sisters and their ages</label>
                 <input type="text" id="siblings_info" name="siblings_info" placeholder="" autocomplete="off" class="w-full p-2 border rounded"/>
             </div>

      
            <div className="mb-4">
                <label for="diet_preference" class="block text-sm font-medium text-gray-600 mb-1">Vegetarian or Non-Vegetarian</label>
                <input type="text" id="diet_preference" name="diet_preference" placeholder="" autocomplete="off" class="w-full p-2 border rounded"/>
            </div>
  
            <div class="text-center lg:text-left">
                  <button
                    type="button" className="px-4 py-2 font-bold text-black bg-blue-800 rounded hover:bg-blue-300"
                  >
                  <Link to={``}>SUBMIT</Link>
                  </button>
             </div>
             </form>
             </div>
            </div>
            
            </section> 
             







     

    );

    }
export default StudentSignup;