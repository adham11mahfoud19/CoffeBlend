"use client"

import React, { useEffect, useState } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa';

 
const ThemeToggle = (props: any) => {
    const [darkMode, setDarkMode] = useState <boolean>() ;
    let [language, setLanguage] = useState("");
    
    useEffect(() => {
        // Get the language name from the URL using window.location
        let lang = window.location.pathname;
        setLanguage(lang.slice(1));
        console.log(language)
    }, []);

    useEffect(() => {
        const theme = localStorage.getItem("theme")
        if(theme === "dark") {
            setDarkMode(true)
        }
    },[])
    useEffect(() => {
        if(darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark")
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light")
        }
    },[darkMode])

    // darkMode === true ? setState("Light") : setState("Dark");
  return (
    <div className='
    relative w-16 h-8 flex items-center dark:bg-primary dark:border-2 dark:text-gray-500 bg-secondry border-2 border-white cursor-pointer rounded-full p-1
    '
    onClick={() => setDarkMode(!darkMode)}
    >
        <FaMoon className='text-white size-5 '/>
        <div
            className='transform transition-transform duration-500 absolute bg-white dark:bg-gray-400 w-6 h-6 rounded-full'
            style={darkMode ? {left:"2px"} : {right:"2px"}}
        ></div>
        <FaSun className={`text-yellow-400 ${language == "en" ? "ml-auto" : "mr-auto"}  size-5 `} />
    </div>
  )
}

export default ThemeToggle
