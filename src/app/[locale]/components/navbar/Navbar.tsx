"use client"

import React, { useEffect, useState } from 'react'
import { FaCarTunnel, FaMoneyBillTrendUp, FaShopSlash } from 'react-icons/fa6'
import ThemeToggle from './ThemeToggle'
import Link from 'next/link'
import { FaShoppingBag } from 'react-icons/fa'
import { CiCoffeeCup } from 'react-icons/ci'
import { LuMenuSquare } from 'react-icons/lu'
import { GiArabicDoor } from 'react-icons/gi'
import { RiEnglishInput } from 'react-icons/ri'
import arabic from "./arabic.png"
import english from "./png-transparent-flag-of-the-united-states-national-flag-usa-flag-flag-logo-united-states.png"
import Image from 'next/image'
import { useSelector } from 'react-redux'


const Navbar = () => {
    let [navbar, setNavbar] = useState(false)
    let list1 = useSelector((state:any) => state.food)
    let list2 = useSelector((state:any) => state.drink)

    const changeBackfound = () => {
            if(window.scrollY >= 30) {
                setNavbar(true)
            } else {
                setNavbar(false)
            }
    }

    
    let [language, setLanguage] = useState("");
    let [changeLang, setChangeLanguage] = useState("");
    
    useEffect(() => {
      // Get the language name from the URL using window.location
      let lang = window.location.pathname;
      setLanguage(lang.slice(1,3));
      setChangeLanguage(lang.slice(3))
      console.log(lang)
      
    }, [window.location.pathname]);
    window.addEventListener("scroll", changeBackfound)
    
    let [scrollMenu, setScrollMenu] = useState(false)
  return (
   <div className='' style={navbar ? {height:"100px"} : {color:"inherit"}}>
     <nav className={`p-5 transition-all duration-200 ${navbar ? "bg-secondry" : "bg-transparent"} ${navbar ? "dark:bg-primary" : "dark:bg-transparent"} shadow lg:flex lg:items-center lg:justify-between z-10 w-[100%] fixed`}>
    <div className="flex justify-between items-center ">
      <Link href="/ar" className={`text-2xl ${navbar ?  "text-white" : "text-secondry"} flex justify-center items-center gap- font-semibold font-[Poppins] cursor-pointer`}>
       
        <div className=''>
                Coffee
            <div className='font-bold'>Blend</div>
        </div>
        <CiCoffeeCup/>
      </Link>

      <span className={`text-3xl ${navbar ?  "text-white"  : "text-secondry"} cursor-pointer mx-2 lg:hidden m-auto block`}
            onClick={() => {
              // handle the menu and make it not transparent at the top in small screens when clicked
              setScrollMenu(!scrollMenu)
              setNavbar(!navbar)
            }}
      >
            
        <LuMenuSquare />
      </span>
    </div>

    <ul className={`  text-white lg:flex lg:justify-between lg:items-center z-[-1] lg:z-auto lg:static   w-full left-0 lg:w-auto lg:py-0 py-4 lg:pl-0 pl-7 lg:opacity-100  transition-all ease-out duration-500
            ${scrollMenu ? "opacity-100 top-[100px] static border-b-2 border-black" : "opacity-0 top-[-400px] absolute"}
    `}>
     
      <li className={`mx-4 my-6 lg:my-0 ${scrollMenu ? "border-b-2 border-gray-500 p-4" : ""}`}>
        <Link href={`${language == "en" ? "/en/" : "/ar/"}`} className="font-semibold hover:text-secondry duration-300">
                {language == "en" ? "HOME" : "الصفحة الرئيسية"}
        </Link>
      </li>
      <li className={`mx-4 my-6 md:my-0 ${scrollMenu ? "border-b-2 border-gray-500 p-4" : ""}`}>
        <Link href={`${language == "en" ? "/en/menu" : "/ar/menu"}`} className="font-semibold hover:text-secondry duration-300">
        {language == "en" ? "MENU" : "قائمة الطعام"}
        </Link>
      </li>
      
      <li className={`mx-4 hover:text-secondry my-6 md:my-0 ${scrollMenu ? "border-b-2 border-gray-500 p-4" : ""}`}>
        <Link href={`${language == "en" ? "/en/cart" : "/ar/cart"}`} className="font-semibold flex  items-center hover:text-secondry duration-300">
                <FaShoppingBag className='text-white  text-xl'/> -{list1.length + list2.length}-
        </Link>
      </li>
      <li className={`mx-4 my-6 md:my-0 ${scrollMenu ? "border-b-2 border-gray-500 p-4" : ""}`}>
        <Link href={language == "en" ? `/ar/${changeLang}` : `/en/${changeLang}`} className="font-semibold flex  items-center hover:text-secondry duration-300">
                {language == "en" ? <Image src={arabic} alt="arabic" width={50} /> : <Image src={english} alt="english" width={50} />}
        </Link>
      </li>

      <button className=" duration-500 px-6 py-2 mx-4  rounded ">
        <ThemeToggle />
      </button>
<h2 className=""></h2>
    </ul>
  </nav>
   </div>
  )
}

export default Navbar
