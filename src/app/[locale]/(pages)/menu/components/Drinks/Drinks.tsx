import React from 'react'
import drinks from '../../../../../../../data/drinks/drinks'
import Image from 'next/image'
import AddDrinksButton from '../Button/AddDrinksButton'
const Drinks = (props:any) => {

    let language = props.lang

  return (
    <div className='dark:bg-primary bg-secondry py-14 px-11'>
        <h1 className='text-4xl dark:text-secondry text-white text-center font-bold mb-5'>
            {language == "en" ? "Drinks Menu" : "قائمة المشروبات"}
        </h1>

        <div className='grid lg:grid-cols-2 gap-5 justify-between items-center py-14 px-8'>
                {
                    drinks.map((dish) => {
                        return (
                            <div className='flex flex-col md:flex-row justify-between items-center p-4 border-2
                                             border-white rounded-md'
                                              key={dish.id}>
                                        <Image src={dish.image} 
                                            style={{width:"200px" , height:"100px"}}
                                        alt='image' className='r rounded-full' />

                                        <div className='p-4 md:w-[60%] lg:w-[100%]'>
                                            <h1 className='text-2xl text-white font-bold'>
                                                {language == "en" ? dish.nameEn : dish.name}
                                            </h1>
                                            <p className='text-xl text-gray-500 font-medium mt-4 '>
                                                {language == "en" ? dish.descriptionEn : dish.description}
                                            </p>
                                            <p className='text-white font-bold'>
                                                {dish.price}$
                                            </p>
                                            <AddDrinksButton dish={dish} lang={language} />
                                        </div>
                            </div>
                        )
                    })
                }
        </div>
      
    </div>
  )
}

export default Drinks
