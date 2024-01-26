import React from "react";


function SignUp() {
  return (
    <>
    <div class="container mx-auto mt-10 p-6 bg-white rounded-md shadow-md max-w-md">
    <h1 class="text-2xl font-bold mb-6">SignUp</h1>
    
   
    <form id="signupForm" onsubmit="signup(event)">
     
      <div class="mb-4">
        <label for="email" class="block text-sm font-medium text-gray-600 mb-1">University Email Address</label>
        <input type="email" id="email" name="email" placeholder="s18916@sci.pdn.ac.lk" class="w-full p-2 border rounded"></input>
      </div>

      <div class="mb-6">
        <label for="password" class="block text-sm font-medium text-gray-600 mb-1">Password</label>
        <input type="password" id="password" name="password" placeholder="********" class="w-full p-2 border rounded"> </input>
      </div>

    
      <button type="submit" class="bg-blue-500 text-white py-2 px-4 rounded flex justify-center items-center  ">Next</button>
    </form>
  </div>
  
  <script>
  {`function signup(event) {
              event.preventDefault();
            }`}
  </script>
  </>
  );
}

export default SignUp;