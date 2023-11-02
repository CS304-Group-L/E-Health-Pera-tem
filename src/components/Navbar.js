import React from 'react'
import {Link} from "react-router-dom";
import logo from "../Assets/University-Helth-Center-logo-with-name.png";

const list = [
  {id: 1, name: "Home", path: "/"},
  {id: 2, name: "Services", path: "/Services"},
  {id: 3, name: "About", path: "/About"},
  {id: 4, name: "Contact Us", path: "/Contactus"},
  {id: 5, name: "Login", path: "/Login"},
]
const Navbar = () => {
  return (
    <nav className=" flex justify-between items-center p-[15px]  bg-red-800">
        
        <Link to="/"><img className="h-12 mx-px ml-2 " src={logo} alt='University-Helth-Center-logo-with-name'/></Link>
        
        <div>
          <ul className="flex text-[10px] uppercase text-white mr-[2] gap-5">
          {list.map((item) =>(
            <li key = {item.id}>
            
              <Link to={item.path}><p className="font-bold text-l">{item.name}</p></Link>
            </li>
          ))}
           
          </ul>
          
        </div>  
      
    </nav>
  );
};

export default Navbar;
