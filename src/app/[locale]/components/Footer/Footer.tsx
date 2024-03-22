
import Image from "next/image"
import Link from "next/link"
import logo from "./images/Logo.png"
import gallery1 from "./images/gallery1.jpg.webp"
import gallery2 from "./images/gallery2.jpg.webp"
import gallery3 from "./images/gallery3.jpg.webp"
import gallery4 from "./images/gallery4.jpg.webp"

const Footer = (props:any) => {

        
    let language = props.lang
    
   
  return (
    <>
    <hr className="border-none h-[1px] bg-secondry"/>
    <hr className="border-none h-[1px] bg-white"/>
    
    <div className=' grid bg-secondry grid-cols-12 dark:bg-primary  text-black dark:text-secondry pb-4'>
            <div className='col-span-3 flex justify-center items-center'>
                <Image src={logo} width={250} alt='Logo' />
            </div>
            <div className='col-span-4 flex flex-col justify-center items-center gap-5'>
                <h3 className='text-xl text-white'>
                    {language == "en" ? "Short Links" : "روابط سريعة"}
                </h3>
                <Link href={language == "en" ? "/en" : "/ar"}>
                {language == "en" ? "Home Page" : "الصفحة الرئيسية"}
                </Link>
                <Link href={language == "en" ? "/en/menu" : "/ar/menu"}>
                {language == "en" ? "MENU" : "قائمة الطعام"}
                </Link>
                <Link href={language == "en" ? "/en/cart" : "/ar/cart"}>
                {language == "en" ? "CART" : "سلة المشتريات"}
                </Link>
            </div>
            <div className='col-span-5 grid grid-cols-2 gap-10 p-8'>
                <div className='col-span-1'>
                    <Image width={180} src={gallery1} alt='fosha' />
                </div>
                <div className='col-span-1'>
                <Image width={180} src={gallery2} alt='itc' />
                </div>
                <div className='col-span-1'>
                <Image width={180} src={gallery3} alt='orjwan' />
                </div>
                <div className='col-span-1'>
                <Image width={180} src={gallery4} alt='orjwan' />
                </div>
            </div>
        
    <p className="mt-3 text-gray-500 font-bold dark:text-white col-span-12 text-center">Copyright ©2024 All rights reserved</p>
    </div>
    </>
  )
}

export default Footer
