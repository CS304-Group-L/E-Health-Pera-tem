import React from "react";


 function Signup() {
    return(
        <div className="h-screen bg-">
       
       <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      
      <div class="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-black sm:p-8">
      
          <h2 class="mb-1 text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              SignUp
          </h2> <br></br>
             <form id="signupForm" onSubmit="signup(event)"> </form>
            <div className="mb-6 text-center text-cyan-700">E-Health Pera</div>
                 <div className="mb-4">
                 <label for="email" class="block text-sm font-medium text-gray-600 mb-1">University Email Address</label>
                 <input type="email" id="email" name="email" placeholder="s18916@sci.pdn.ac.lk" class="w-full p-2 border rounded"/> 
                 </div> <br></br>
                 <div className="mb-6">  
                 <label for="password" class="block text-sm font-medium text-gray-600 mb-1">Password</label>
                  <input type="password" id="password" name="password" placeholder="********" class="w-full p-2 border rounded"/> 
                 </div>
                
            <div className="mb-4">
                <label for="employee_number" class="block text-sm font-medium text-gray-600 mb-1">Registration Number</label>
                <input type="text" id="employee_number" name="employee_number" placeholder="" autocomplete="off" class="w-full p-2 border rounded"></input>
                 </div>

                 
            <div className="mb-4">
                <label for="phone_number" class="block text-sm font-medium text-gray-600 mb-1">Phone Number</label>
                <input type="tel" id="phone_number" name="phone_number" placeholder="" autocomplete="tel" class="w-full p-2 border rounded"></input>
                </div>
                 <div> 
                 <button type ="submit" class="bg-blue-500 text-white py-2 px-4 rounded flex justify-center items-center  ">Next</button>
                 </div>
            
            </div>
        <script>
        {`function signup(event) {
              event.preventDefault();
            }`}
        </script>
        </div>
      </div>
      
    
    
       
    );
 }

 export default Signup;               

            
         


             
        
      
                 
                
     
      

          
     
           
       
    
    
