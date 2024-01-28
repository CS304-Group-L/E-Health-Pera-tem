import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Line } from "react-chartjs-2";

function TemperatureForm(){
    
        const [points, setPoints] = useState([]);
      
        const handleAddPoint = () => {
          const newPoint = {
            x: Math.random() * 10, // You can replace this with user input
            y: Math.random() * 10, // You can replace this with user input
          };
      
          setPoints((prevPoints) => [...prevPoints, newPoint]);
        };

        const chartData = {
            labels: points.map((point, index) => `Point ${index + 1}`),
            datasets: [
              {
                label: "Points",
                data: points,
                fill: false,
                borderColor: "rgba(75,192,192,1)",
                borderWidth: 2,
                pointRadius: 5,
                pointBackgroundColor: "rgba(75,192,192,1)",
              },
            ],
          };

          const chartOptions = {
            scales: {
              xAxes: {
                type: "linear",
                position: "bottom",
              },
              yAxes: {
                type: "linear",
                position: "left",
              },
            },
          };

    return(
        <div>

<div>
      <button onClick={handleAddPoint}>Add Random Point</button>
      <Line data={chartData} options={chartOptions} />
    </div>
        </div>
    );
}

export default TemperatureForm;