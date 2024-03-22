import { useTranslations } from 'next-intl'
import React from 'react'
import MainContent from './components/MainContent/MainContent'
import DishesCart from './components/CartKinds/DishesCart/DishesCart'
import DrinksCart from './components/CartKinds/DrinksCart/DrinksCart'
import Order from './components/CartKinds/Order/Order'
import RootLayout from '../../layout'



export const metadata = {
  title: "Cart Page",
  description:"Here The Cart Page, You Can See The Dishes and Drinks You Have bought"
}



const Page = () => {
  
    let t = useTranslations("Index")
    let lang = t("lang")
  return (
    
      <div className='dark:bg-primary'>
        <MainContent lang={lang}/>
        <DishesCart lang={lang}/>
        <DrinksCart lang={lang} />
        <Order lang={lang} />
    </div>
  
  )
}

export default Page
