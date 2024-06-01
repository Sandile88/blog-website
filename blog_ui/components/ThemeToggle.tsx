"use client"
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaMoon } from "react-icons/fa";
import { BsSunFill } from "react-icons/bs";
import React from "react";

const ThemeToggle = () => {
    const [darkMode, setDarkMode] = useState(true);

    useEffect(() =>{
        const theme = localStorage.getItem("theme");
        if (theme === "light") setDarkMode(false)
    }, [])

    useEffect(() =>{
        if (darkMode) {
            document.documentElement.classList.add('dark')
            localStorage.setItem("theme", "dark")
        } else {
            document.documentElement.classList.remove('dark')
            localStorage.setItem("theme", "light")
        }
    }, [darkMode])
    
    return (
        <div className="relative w-16 h-8 flex items-center 
        dark:bg-gray-900 bg-teal-500 cursor-pointer 
        rounded-full p-1"
        onClick={() => setDarkMode(!darkMode)}> {/* toggle mode */}

        {(FaMoon as any) ({ className: "text-white", size:18 })}
        <div className="absolute bg-white w-6 h-6 rounded-full 
        shadow-md transform transition=transform duration-500"
        style={darkMode ? {left: "2px"} : {right: "2px"}}>
        </div>

        {(BsSunFill as any) ({ className: "ml-auto text-yellow-400", size:18 })}
        </div>
    )


};

export default ThemeToggle;