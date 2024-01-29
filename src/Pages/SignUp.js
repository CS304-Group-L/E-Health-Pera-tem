import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

 function SignUp() {
    return(
        <div className="h-screen bg-">
        <Navbar />
          <div className = "flex items-center justify-center h-screen ">
          <div className = "max-w-screen-md p-8 bg-white rounded-lg shadow-md">
            <div>
            <h1 className = "mb-6 text-2xl font-bold text-center text-blue-900 ">  SignUp </h1>
             <form id="signupForm" onSubmit="signup(event)"> </form>
            <div className="mb-6 text-center text-cyan-700">E-Health Pera</div>
                 <div className="mb-4">
                 <label for="email" class="block text-sm font-medium text-gray-600 mb-1">University Email Address</label>
                 <input type="email" id="email" name="email" placeholder="s18916@sci.pdn.ac.lk" class="w-full p-2 border rounded"> </input>
                 </div> 
                 <div className="mb-6">  
                 <label for="password" class="block text-sm font-medium text-gray-600 mb-1">Password</label>
                  <input type="password" id="password" name="password" placeholder="********" class="w-full p-2 border rounded"> </input>
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
      <Footer />
    </div>
       
    );
 }

 export default SignUp;               

            
         


             
        
      
                 
                
     
      

          
     
           
       
    
    
