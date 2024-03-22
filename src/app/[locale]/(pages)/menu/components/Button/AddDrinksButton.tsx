"use client"
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToDrinks } from '../../../../../../../lib/features/food/drinks'
import Swal from 'sweetalert2'

const AddDrinksButton = (props:any) => {
  let addProduct = (product:any) => {
    Swal.fire({
      title:`${lang == "en" ? `The ${product.nameEn} was Added Successfully` : `تمت إضافة ${product.name} بنجاح`}`,
      confirmButtonColor:"#FF5722",
      icon:"success",
    })
  }
    let dispatch = useDispatch()
    let list = useSelector((state:any) => state.drinks)
    let lang = props.lang
    useEffect(() => {
            console.log(list)
    },[list])
  return (
    <button
      className='dark:text-brown dark:border-2 dark:border-brown
      hover:text-brown
        hover:bg-white
                font-bold duration-150    text-white border-2 border-white  rounded-lg py-1 px-2 mt-2 mx-[30%] w-[70%]'      
        onClick={() => {
          dispatch(addToDrinks(props.dish))
          addProduct(props.dish)
        }}
    >
            {lang == "en" ? "Add To Cart" : "إضافة إلى السلة"}
    </button>
    
  )
}

export default AddDrinksButton
