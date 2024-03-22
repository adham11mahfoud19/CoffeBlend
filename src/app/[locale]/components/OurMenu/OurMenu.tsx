import React, { useEffect, useState } from 'react'
import menu1 from "./images/menu1.jpg.webp"
import menu2 from "./images/menu2.jpg.webp"
import menu3 from "./images/menu3.jpg.webp"
import menu4 from "./images/menu4.jpg.webp"
import Image from 'next/image'
import Link from 'next/link'

const OurMenu = (props:any) => {

    let language = props.lang

  return (
    <div className='dark:bg-primary grid lg:grid-cols-2 py-10 px-6 gap-5 justify-center items-center'>

        <div>
            <h1 className='text-4xl text-brown font-bold'>
                {language == "en" ? "Our Menu" : "لائحتنا"}
            </h1>
            <p className='text-gray-800 dark:text-white font-semibold mt-4 w-[70%]'>
                {
                    language == "en" ? 
                    `
                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
                    `
                    :
                    `
                    بعيد بعيد جداً، خلال التلال وؤاء الجبال ترى أنَّ رشفة من القهوة قد تزيل هموماً باتت تشكل خطراً على الصحة النفسية، ولأنَّ لا شيء مهم في هذهى الدنيا بعد الصحة النفسية سنقدم لك مشروباً قادراً على تغيير مزاجك وتحسينه نحو الأفضل.
                    `
                }
            </p>
            <hr className='mt-3'/>
            
            <div
            className='border-2 border-brown text-brown mt-5
            hover:bg-brown hover:text-white text-2xl
            dark:bg-brown dark:text-white
              dark:hover:bg-white dark:hover:text-brown
              md:w-[50%] text-center
              duration-200
              cursor-pointer
             py-2 px-4 rounded-lg'
            >
                <Link href="/ar/menu" > 
                {language == "en" ? "View The Full Menu" : "عرض القائمة كاملة"}
            </Link>
            </div>
        </div>

        <div className='grid grid-cols-2 gap-5 justify-center items-center'>
            <Image src={menu1} alt='...' width={250} />
            <Image src={menu2} alt='...' width={250} />
            <Image src={menu3} alt='...' width={250} />
            <Image src={menu4} alt='...' width={250} />
        </div>

      
    </div>
  )
}

export default OurMenu
