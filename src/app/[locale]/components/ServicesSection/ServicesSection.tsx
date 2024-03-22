import React, { useEffect, useState } from 'react'
import { CiDeliveryTruck } from 'react-icons/ci';
import { GiCoffeeBeans } from 'react-icons/gi';
import { GrOrderedList } from 'react-icons/gr';
import { TbPointerCheck } from 'react-icons/tb';

const ServicesSection = (props:any) => {

    let language = props.lang

  return (
    <div className='bg-secondry dark:bg-primary grid lg:grid-cols-3 justify-center items-center px-6 py-28 gap-8 '>

        <div className='flex flex-col gap-4 justify-center items-center'>
                <TbPointerCheck  className='text-6xl dark:text-brown'/>
                <div className='flex justify-center items-center flex-col dark:text-brown'>
                    <h1 className='text-4xl text-bold'>
                    {language == "en" ? "Easy To Order" : "سهل الطلب"}
                    </h1>
                    <p className='mt-5 font-normal text-gray-800 dark:text-white'>
                        {language == "en" ? 
                        
                        `
                        Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.
                        `
                        :
                        `
                        حتى الإشارة القوية ليس لها أي سيطرة على النصوص العمياء، فهي تقريبًا غير إملائية.
                        `
                    }
                    </p>
                </div>
        </div>

        <div className='flex flex-col gap-4 justify-center items-center '>
                <CiDeliveryTruck  className='text-6xl dark:text-brown'/>
                <div className='flex justify-center items-center flex-col dark:text-brown'>
                    <h1 className='text-4xl text-bold'>
                    {language == "en" ? "FASTEST DELIVERY" : "توصيل سريع"}
                    </h1>
                    <p className='mt-5 font-normal text-gray-800 dark:text-white'>
                        {language == "en" ? 
                        
                        `
                        Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.
                        `
                        :
                        `
                        حتى الإشارة القوية ليس لها أي سيطرة على النصوص العمياء، فهي تقريبًا غير إملائية.
                        `
                    }
                    </p>
                </div>
        </div>

        <div className='flex flex-col gap-4 justify-center items-center'>
                <GiCoffeeBeans  className='text-6xl dark:text-brown'/>
                <div className='flex justify-center items-center flex-col dark:text-brown'>
                    <h1 className='text-4xl text-bold'>
                    {language == "en" ? "QUALITY COFFEE" : "قهوة ممتازة"}
                    </h1>
                    <p className='mt-5 font-normal text-gray-800 dark:text-white'>
                        {language == "en" ? 
                        
                        `
                        Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.
                        `
                        :
                        `
                        حتى الإشارة القوية ليس لها أي سيطرة على النصوص العمياء، فهي تقريبًا غير إملائية.
                        `
                    }
                    </p>
                </div>
        </div>

    </div>
  )
}

export default ServicesSection
