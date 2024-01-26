import React from "react";
import { Link } from "react-router-dom";

const buttons = [
  {id: 1, name: "Login", path: "/DoctorBoard"},
  {id: 2, name: "Signup", path: "/Signup"},
]

function Login() {
  return (
    <div className="h-screen bg-">
  
      <div className="flex items-center justify-center h-screen ">
        <div className="max-w-screen-md p-8 bg-white rounded-lg shadow-md">
          <h1 className="mb-6 text-2xl font-bold text-center text-blue-900 ">Login</h1>

          <div className="mb-6 text-center text-cyan-700">E-Health Pera</div>

          <input
            type="text"
            placeholder="E-mail"
            className="w-full px-3 py-2 mb-6 border rounded"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-3 py-2 mb-6 border rounded"
            required
          />

          <div className="flex justify-between mb-6">
          {buttons.map((item) => (
            <Link to={item.path}>
            <button key={item.id} className="px-4 py-2 text-white bg-red-800 rounded hover:bg-yellow-300">
             {item.name}
            </button>
            </Link>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}

export default Login;
