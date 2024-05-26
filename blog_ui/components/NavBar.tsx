"use client"
import Link from "next/link";
import { useState } from "react";

export default function NavBar(){
    // tracks state of darkmode
    const [darkMode, setDarkMode] = useState(false);
    // connect vaue of state var to button
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    }

    return (
        // dyanamic string so darkmode and it is true add dar;
        <div className={`${darkMode && "dark"}`}>
        <nav className="w-full relative flex items-center justify-between max-w-2xl mx-auto px-4 py-5">
            <Link href="/" className="font-bold text-3xl dark:text-white">Logo</Link>
            <button className="absolute w-16 h-16 bottom-2 right-16 bg-neutral-800 dark:bg-white rounded-full text-white dark:text-black font-semibold"
                    onClick={toggleDarkMode}>
                        {/* if darkmode is turned on, text to light otherwise darl*/}
                {darkMode ? "LIGHT" : "DARK"}
            </button>
        </nav>
        </div>

    );
}