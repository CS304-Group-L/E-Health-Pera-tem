import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';

function Int() {
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');

    useEffect(() => {
        const getCurrentDate = () => {
            const now = new Date();
            const formattedDate = now.toISOString().slice(0, 10); // Get date in YYYY-MM-DD format
            return formattedDate;
        };

        setDate(getCurrentDate());
    }, []);


    return (
        <div className="flex flex-col items-center">
            <div className="text-center w-3/4 p-10 m-10">
                <h1 className="text-xl font-bold underline mb-5">Health Center - University Of Peradeniya</h1>
                <h2 className="text-2xl font-bold mb-5">Intake Out Put Chart</h2>
                <div className="grid grid-cols-3 grid-rows-5 p-3 m-2 text-l">
                    <div> Name </div>
                    <div>:</div>
                    <div>From Back-End</div> 
                    <div> Registration Number  </div>
                    <div>:</div>
                    <div>From Back-End</div>
                    
                </div>