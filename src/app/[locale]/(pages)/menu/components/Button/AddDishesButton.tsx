"use client"
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToMenu } from '../../../../../../../lib/features/food/food'
import Swal from 'sweetalert2'

const AddDishesButton = (props:any) => {
    let addProduct = (product:any) => {
      Swal.fire({
        confirmButtonColor:"#FF5722",
        icon:"success",
        title:`${lang == "en" ? `The ${product.nameEn} was Added Successfully` : `تمت إضافة ${product.name} بنجاح`}`
      })
    }
    let dispatch = useDispatch()
    let list = useSelector((state:any) => state.food)
    let lang = props.lang
    useEffect(() => {
            // console.log(list)
    },[list])
  return (
    <button
      className='dark:text-brown dark:border-2 dark:border-brown
      hover:text-brown
        hover:bg-white
                font-bold duration-150    text-white border-2 border-white  rounded-lg py-1 px-2 mt-2 mx-[30%] w-[70%]'      
        onClick={() => {
          dispatch(addToMenu(props.dish))
          addProduct(props.dish)
        }}
    >
            {lang == "en" ? "Add To Cart" : "إضافة إلى السلة"}
    </button>
    
  )
}

export default AddDishesButton
