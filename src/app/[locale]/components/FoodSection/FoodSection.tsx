import React, { useEffect, useState } from 'react'
import food from "../../../../../data/food/dishes"
import Image from 'next/image';

const FoodSection = (props:any) => {

    let language = props.lang
    food.length = 3
    let dishes = food

  return (
    <div className='dark:bg-primary pb-4'>
                                <h1 className='mb-4 pt-10 text-center  text-4xl font-bold text-brown'>

                                    {language == "en" ? "Some Dishes From What We Got:" : "بعض من الأطباق التي نقدمها"}
                                </h1>
        <div className='dark:bg-primary px-4 py-5 grid lg:grid-cols-3 gap-8'>
            {
                dishes.map((dish) => {
                    return (
                        <div key={dish.id} className='col-span-1 rounded-md text-brown
                                                        hover:bg-brown dark:hover:text-white
                                                        hover:text-white duration-200
                                                        border-2 flex flex-col sm:flex-row lg:flex-col
                                                         justify-between items-center
                                                     border-brown px-5 py-4 '>
                                <Image src={dish.image} alt='dish' width={250} style={{height:"200px"}} />
                                <hr className='bg-brown'/>
                                <div>
                                <h1 className='text-xl font-semibold mt-3'>{language == "en" ? dish.nameEn : dish.name}</h1>
                                <p className='font-bold'>{dish.price}$</p>
                                </div>


                        </div>
                    )
                })
            }
    </div>
                <h1 className='w-[30%] text-center px-4 py-2 border-2
                                text-2xl font-bold text-brown
                                hover:bg-brown dark:hover:text-white
                                hover:text-white duration-200 cursor-pointer                             
                                border-brown rounded-full mx-auto'>
                    {language == "en" ? "Show More" : "عرض المزيد"}
                </h1>
    </div>
  )
}

export default FoodSection
