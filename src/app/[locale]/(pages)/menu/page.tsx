import React from 'react'
import dishes from "../../../../../data/food/dishes"
import Image from 'next/image'
import Button from './components/Button/AddDishesButton'
import { useTranslations } from 'next-intl'
import MainContent from './components/MainContent/MainContent'
import Dishes from './components/Dishes/Dishes'
import Drinks from './components/Drinks/Drinks'
import RootLayout from '../../layout'


export const metadata = {
  title: "MENU Page",
  description:"Here The MENU Page, You Can See The Dishes and Drinks, AND Select What Ever Do You Want"
}



const Page = () => {
    let food = dishes
    let t = useTranslations('Index')
    let lang = t("lang")
  return (
   
     <div className='dark:bg-primary'>
        <MainContent lang={lang}/>
        <Dishes lang={lang}/>
        <Drinks lang={lang} />
           
    </div>
   
  )
}

export default Page
