import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import style from "./MainContent.module.css"
import { BiPhone } from 'react-icons/bi'
import { HiLocationMarker } from 'react-icons/hi'
import { CiClock1 } from 'react-icons/ci'

const MainContent = (props:any) => {

  let language = props.lang


  return (
    <div className={`${style.photosConatiner} relative`}>
    
            <div className={style.desciption}>
                <p>{language == "en" ? "The Cart" : "قائمة المشتريات" }</p>
              
            </div>

            <div  className='bg-secondry absolute bottom-[20%] sm:bottom-[18%] md:bottom-0 
                            right-0 lg:w-[30%] md:w-[35%] w-[100%] py-8 px-6 md:text-3xl
                            font-bold text-white
                            text-xl
                            '>
                <h1>
                  {language == "en" ? 
                    `You can Always Have a Drink, But you cant Always have fun with it!.
                    See You Around Buddy!
                    `
                    :
                    `يمكنك دائماً الحصول على مشروب، لكنك لن تستطيع دائماً الاستمتاع به.
                      دعنا نراك بالجوار أيها الرفيق!
                    `
                }
                </h1>
                
            </div>

            <div className='bg-black absolute bottom-0 
                            left-0 lg:w-[70%]
                            w-[100%]
                            md:w-[65%]
                             
                            font-bold text-white
                            grid md:grid-cols-3
                            gap-2
                            '>
                               
                    <div className='col-span-1 p-4 flex  items-center gap-3'>
                          <div>
                            <BiPhone />
                          </div>

                          <div>
                            <h1 className='font-bold text-white'>
                              
                                  000 (123) 456 7890
                            </h1>
                            <p className='text-sm mt-2 opacity-70 text-gray-600'>
                              {
                                language == "en" ? 
                                "A small river named Duden flows by their place and supplies."
                                                          :
                                "نهر صغير يدعى دودن يجري بأماكنهم ومعداتهم."
                              }
                            </p>
                          </div>
                          
                    </div>

                    <div className='col-span-1 p-4 flex items-center gap-3'>
                          <div>
                            <HiLocationMarker />
                          </div>

                        <div>
                            <h1  className='font-bold text-white'>
                              
                            198 West 21th Street
                            </h1>
                            <p className='text-sm mt-2 opacity-70 text-gray-600'>
                              {
                                language == "en" ? 
                                "203 Fake St. Mountain View, San Francisco, California, USA."
                                                          :
                                "203 مزيف شارع واجهة الجبل، سان فرانسيسكو، كاليفورنيا، الولايات المتحدة الأميركية."
                              }
                            </p>
                          </div>
                          
                    </div>
                    <div className='col-span-1 p-4 flex  items-center gap-3'>
                          <div>
                          <CiClock1 />
                          </div>

                        <div>
                            <h1 className='font-bold text-white'>
                              
                            {language == "en" ? "Open Monday-Friday" : "مفتوح من الإثنين إلى الجمعة"}
                            </h1>
                            <p className='text-sm mt-2 opacity-70 text-gray-600'>
                               {
                                language == "en" ? 
                                "8:00am - 9:00pm"
                                                          :
                                "الثامنة صباحاً حتى التاسعة مساءً"
                              }
                            </p>
                          </div>
                          
                    </div>


                                      {/* watch */}
                    <div className='col-span-1 p-4 flex  items-center gap-3'>
                          <div>
                          
                          </div>

                        <div>
                            <h1 className='font-bold text-white'>
                              
                          
                            </h1>
                            <p className='text-sm mt-2 opacity-70 text-gray-600'>
                            
                            </p>
                          </div>
                          
                    </div>
                   



            </div>
    </div>
  )
}

export default MainContent
