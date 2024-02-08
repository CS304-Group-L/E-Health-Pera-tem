import React from "react";
import { Link } from "react-router-dom";
import home from "../../Assets/home.png";

function DrugIssueing() {
  return (
    <div>
      <div className="pt-5 overflow-hidden bg-white rounded "></div>

      <div className="flex pl-5 pr-5 divide-x">
        <div className="flex flex-col w-80 "></div>
      </div>
      <div className="object-cover object-none w-full h-200">
      <div className="bg-blue-200 w-full flex pl-5 p-5">
                    <div className="grid grid-cols-3 grid-rows-5 p-3 m-2 text-l">
                        <div>Name</div>
                        <div>:</div>
                        <div>From Back End</div>
                        <div>Std. Number</div>
                        <div>:</div>
                        <div>From Back End</div>

                        <div>Date</div>
                        <div>:</div>
                        <div>From Back End</div>
                        <div>Time</div>
                        <div>:</div>
                        <div>From Back End</div>
                        <div>Doctor Name</div>
                        <div>:</div>
                        <div>From Back End</div>
                        
                        
                    </div>
                </div>
      </div>
    </div>
  );
}
export default DrugIssueing;
