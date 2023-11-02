import React from "react";
import Navbar from "../components/Navbar";
import medicalRecord from "../Assets/medical_record.png";



function DoctorBoard(){
    return(
       <div>
         <div>
           < Navbar />
        </div>
        <div className="grid-row-2">
        <div className="grid-col-3">
            <div className="flex flex-wrap justify-center pt-20">
                <button className="px-20 py-12 m-8 bg-green-600">
                <img className="justify-center w-20 h-20" src={medicalRecord}></img>
                <div className="text-end">Health Record</div>
                </button>
                
                <button className="px-20 m-8 bg-yellow-500 py-15">
                    <img className="justify-center w-20 h-20" src={medicalRecord}></img>
                    <div className="text-end">Medical Report</div>
                </button>
            </div>    
        </div>
            
        </div>
       </div>
    )
}

export default DoctorBoard;