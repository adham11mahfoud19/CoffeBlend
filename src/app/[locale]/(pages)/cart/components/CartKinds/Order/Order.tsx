"use client"
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import { clearDishes } from '../../../../../../../../lib/features/food/food'
import { clearDrinks } from '../../../../../../../../lib/features/food/drinks'

const Order = (props:any) => {
    let lang = props.lang
    // To Get The Carts Info
    let dishesList = useSelector((state:any) => state.food)
    let drinksList = useSelector((state:any) => state.drink)
    // To Get The Carts Prices
    let dishesTotalPrice = dishesList.reduce((acc:any, item:any) => {
        acc += item.price * item.quantity;
        return acc
      },0)
    let drinksTotalPrice = drinksList.reduce((acc:any, item:any) => {
        acc += item.price * item.quantity;
        return acc
      },0)
    // final price
      let finalPrice = dishesTotalPrice + drinksTotalPrice;
      // complete the operation and clear the carts
      let dispatch = useDispatch()

      const completeOperation = () => {
    
        Swal.fire({
          title:`${lang == "en" ? `By Confirmed This Operation You Will Pay ${finalPrice.toFixed(2)}$` : `بإتمامك هذه العملية سوف تقوم بدفع ${finalPrice.toFixed(2)}$`}`,
          showCancelButton: true,
          allowOutsideClick: true,
          confirmButtonText: `${lang == "en" ? `OK` : `تأكيد`}`,
          cancelButtonText: `${lang == "en" ? `CANCEL` : `إلغاء`}`,
          confirmButtonColor: "rgb(7 89 133)",
          cancelButtonColor: "rgb(99 44 44)",
          icon:"question"
          
    
        }).then((data) => {
          if(data.isConfirmed) {
           dispatch(clearDishes())
           dispatch(clearDrinks())
           Swal.fire({
            title:`${lang == "en" ? `The Operation Was Done Successfully` : `تمت العملية بنجاح`}`,
            icon: "success"
          });
          }
        })
      }

  return (
    <div className='bg-brown dark:bg-primary py-8 px-4'>
        <h1 className='text-center text-white text-xl md:text-3xl font-bold mt-2 mb-5'>
            {
                lang == "en" ? 
                `Your Final Price Is ${finalPrice.toFixed(2)}$, Type Your Informations To Complete The Operation.`
                :
                `السعر النهائي للكل هو ${finalPrice.toFixed(2)}$ ، قم بملئ معلوماتك لإتمام عملية الدفع.`
            }
        </h1>

        <form onSubmit={(e) => {
            e.preventDefault()
            completeOperation()

        }} className='border-2 border-white rounded-md py-4 px-5 grid md:grid-cols-2 gap-5'>
            <div>
                <div className='flex flex-col gap-3'>
                <label className='text-white font-bold' htmlFor="email">{lang == "en" ? "EMAIL" : "البريد الإلكتروني"}</label>
                <input required className='border-2 border-gray-600 rounded-lg py-5 px-4' type="email" id='email' placeholder={lang == "en" ? "EMAIL" : "البريد الإلكتروني"} />
                </div>
                <div className='flex flex-col gap-3'>
                <label className='text-white font-bold' htmlFor="paypal">{lang == "en" ? "PAYPAL" : "رقم محفظة البايبال"}</label>
                <input required className='border-2 border-gray-600 rounded-lg py-5 px-4' type="text" id='paypal' placeholder={lang == "en" ? "PAYPAL" : "رقم محفظة البايبال"} />
                </div>
            </div>

            <div>
                <div className='flex flex-col gap-3'>
                <label className='text-white font-bold' htmlFor="address">{lang == "en" ? "ADDRESS" : "العنوان"}</label>
                <input required className='border-2 border-gray-600 rounded-lg py-5 px-4' type="text" id='address' placeholder={lang == "en" ? "ADDRESS" : "العنوان"} />
                </div>
                <div className='flex flex-col gap-3'>
                <label className='text-white font-bold' htmlFor="date">{lang == "en" ? "DATE" : "تاريخ التسليم"}</label>
                <input required className='border-2 border-gray-600 rounded-lg py-5 px-4' type="date" id='date' />
                </div>
            </div>
            <button type='submit' className='text-white bg-sky-800 font-bold rounded-md py-2 px-4 hover:bg-white hover:text-sky-800 duration-150' >
                    {lang == "en" ? "Order Now" : "طلب الآن"}
            </button>
        </form>
    </div>
  )
}

export default Order
