"use client";
import Image from 'next/image';
import React, { Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToDrinks, deleteFromDrinks } from '../../../../../../../../lib/features/food/drinks';
import Link from 'next/link';
import Swal from 'sweetalert2';
import Loading from '@/app/[locale]/loading';

interface Drink {
  id: number;
  name: string;
  nameEn: string;
  price: number;
  quantity: number;
  description: string;
  descriptionEn: string;
  image: string;
}

interface DrinksCartProps {
  lang: string;
}

const DrinksCart: React.FC<DrinksCartProps> = ({ lang }) => {
  const dispatch = useDispatch();

  const deleteProduct = (product: Drink) => {
    Swal.fire({
      title: `${lang === "en" ? `Delete ${product.nameEn}?` : `إزالة ${product.name}؟`}`,
      showCancelButton: true,
      allowOutsideClick: true,
      confirmButtonText: `${lang === "en" ? `OK` : `تأكيد`}`,
      cancelButtonText: `${lang === "en" ? `CANCEL` : `إلغاء`}`,
      confirmButtonColor: "red",
      cancelButtonColor: "rgb(99 44 44)",
    }).then((data) => {
      if (data.isConfirmed) {
        dispatch(deleteFromDrinks(product));
        Swal.fire({
          title: `${lang === "en" ? `${product.nameEn} Was Deleted Successfully` : ` تمت إزالة ${product.name} بنجاح `}`,
          icon: "success"
        });
      }
    });
  }

  let drinksCart = useSelector((state: { drink: Drink[] }) => state.drink);

  let totalPrice = drinksCart.reduce((acc, item) => {
    acc += item.price * item.quantity;
    return acc;
  }, 0);

  return (
    <div className='dark:bg-primary py-16 px-8'>
     
      <h1 className='text-3xl text-center font-bold text-brown'>
        {lang === "en" ? "Your Drinks Cart" : "سلة المشروبات الخاصة بك"}
      </h1>

      {drinksCart.length < 1 ? (
        <div className='text-center dark:text-white text-xl font-bold mt-5 mb-5 border-2 border-brown py-11 px-8'>
          <Link href={`${lang === "en" ? "/en/menu" : "/ar/menu"}`}>
            {lang === "en"
              ? "You Did Not Shop Anything Yet Click Here To Show the Menu"
              : "أنت لم تقم بشراء أي شيء بعد، يمكنك الضغط هنا للانتقال إلى قائمة المشروبات"}
          </Link> 
        </div>
      ) : null}

      <Suspense fallback={<Loading />}>
        <div className='mt-5 flex flex-col gap-4 justify-center items-center'>
          {drinksCart.map((drink) => (
            <div className='border-2 border-brown rounded-md flex flex-col lg:flex-row justify-between gap-2 w-[100%]' key={drink.id}>
              <div className='flex flex-col lg:flex-row gap-3 justify-center items-center lg:w-[65%] p-8'>
                <Image src={drink.image} alt='image' style={{ width: "150px", height: "100px" }} />
                <button
                  onClick={() => deleteProduct(drink)}
                  className='dark:text-white dark:border-2 bg-red-600 hover:text-red-600 dark:hover:text-red-600 dark:hover:border-red-600 hover:border-red-600 hover:bg-white font-bold duration-150 text-white border-2 border-white rounded-lg h-[30%] w-[30%]'
                >
                  {lang === "en" ? "Delete From Cart" : "إزالة من السلة"}
                </button>
                <button
                  onClick={() => dispatch(addToDrinks(drink))}
                  className='dark:text-white dark:border-2 bg-sky-600 dark:hover:text-sky-600 dark:hover:border-sky-600 hover:border-sky-600 hover:text-sky-600 hover:bg-white font-bold duration-150 text-white border-2 border-white rounded-lg h-[30%] w-[30%]'
                >
                  {lang === "en" ? "Add More To Cart" : "إضافة المزيد إلى السلة"}
                </button>
              </div>

              <div className='p-4 md:w-[40%] lg:w-[40%] text-center'>
                <h1 className='text-2xl text-brown font-bold'>{lang === "en" ? drink.nameEn : drink.name}</h1>
                <p className='text-xl text-gray-500 font-medium mt-4'>{lang === "en" ? drink.descriptionEn : drink.description}</p>
                <p className='text-brown font-bold'>{drink.price}$</p>
                <p className='text-brown font-bold'>{lang === "en" ? `the quantity: ${(drink.quantity).toFixed(2)}` : `الكمية: ${(drink.quantity).toFixed(2)}` }</p>
                <p className='text-brown font-bold'>{lang === "en" ? `All Price: ${(drink.quantity * drink.price).toFixed(2)}$` : `السعر الإجمالي: ${(drink.quantity * drink.price).toFixed(2)}$`}</p>
              </div>
            </div>
          ))}
          <h1 className='text-3xl text-bold text-brown'>
            {lang === "en" ? `Final Price Is: ${totalPrice.toFixed(2)}$` : `السعر النهائي: ${totalPrice.toFixed(2)}$`}
          </h1>
        </div>
      </Suspense>
    </div>
  );
};

export default DrinksCart;