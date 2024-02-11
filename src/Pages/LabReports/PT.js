import React from "react";
import newLabTest from "../../Assets/new_lab_test.png";
import draftLabTest from "../../Assets/draft_lab_test.png";
import submitedLabTest from "../../Assets/submit_lab_test.png";
import allLabTest from "../../Assets/all_lab_reports.png";
import home from "../../Assets/home.png";
import { Link } from "react-router-dom";
import { useState,useEffect } from 'react';

const topButtons = [
    {
        id: 1,
        name: "New Lab Report Request",
        bg_color: "bg-green-500",
        img: newLabTest,
        path: "/NewLabReportrequest"
    },
    {
        id: 2,
        name: "Drafted Lab Reports",
        bg_color: "bg-red-400",
        img: draftLabTest,
        path: "/DraftedLabReport"
    },
    {
        id: 3,
        name: "Submitted Lab Reports",
        bg_color: "bg-blue-400",
        img: submitedLabTest,
        path: "/SubmittedLabReport"
    },
    
    {
        id: 4,
        name: "All Lab Report Types",
        bg_color: "bg-purple-400",
        img: allLabTest,
        path: "/AllLabReports"
    },
    {
        id: 5,
        name: "Home",
        bg_color: "bg-gray-200",
        img: home,
        path: "/Laboratory"
    }
];


