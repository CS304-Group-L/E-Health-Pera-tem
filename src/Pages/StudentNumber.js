import React from "react";
import { Link } from "react-router-dom";
import { useState,useEffect } from 'react';

function StudentNumber({role}){
    const [studentNumber, setStudentNumber] = useState('');
    return(
        
        <div className="block mb-2 font-semibold font-poppins">
            <div className="flex justify-center border border-black-500 grid grid-cols-1 m-5 p-10">
                <div className="p-5">
                <label>
                    Enter Student Number : 
                </label>
                </div>
            <div>
                            <input type="text" value={studentNumber} onChange={(e) => setStudentNumber(e.target.value)}
                                    className="p-5 flex justify-center border border-blue-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                                    placeholder="Enter Student Number" />
                                    </div>
                                    <div>
            <button
                    type="button" className="m-5 px-4 py-2 font-bold text-black bg-blue-800 rounded hover:bg-blue-300"
                  >
                     <Link to={`/${role}Home`}>Create</Link>
                    </button>
            </div>
            </div>
            
            
        </div>
    )
}

export default StudentNumber;