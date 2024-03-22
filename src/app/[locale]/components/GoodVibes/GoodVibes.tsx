import React, { useEffect, useState } from 'react'
import gallery1 from "./images/gallery1.jpg.webp"
import gallery2 from "./images/gallery2.jpg.webp"
import gallery3 from "./images/gallery3.jpg.webp"
import gallery4 from "./images/gallery4.jpg.webp"
import Image from 'next/image'
const GoodVibes = (props:any) => {

    
  let language = props.lang

  return (
   <div className=' dark:bg-primary py-24'>
        <h1 className='text-4xl text-brown text-center font-bold'>
            {language == "en" ? "GOOD VIBES" : "أجواء رائعة"}
        </h1>
     <div className='flex w-[100%] mt-5'>
      <Image style={{width:'25%'}}  src={gallery1} alt='...' />
      <Image style={{width:'25%'}}  src={gallery2} alt='...' />
      <Image style={{width:'25%'}}  src={gallery3} alt='...' />
      <Image style={{width:'25%'}}  src={gallery4} alt='...' />
    </div>
   </div>
  )
}

export default GoodVibes
