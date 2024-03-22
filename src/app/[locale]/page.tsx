import {useTranslations} from 'next-intl';
import Menu from './components/Menu';
import MainContent from './components/MainContent/MainContent';
import FoodSection from './components/FoodSection/FoodSection';
import OurStory from './components/OurStory/OurStory';
import ServicesSection from './components/ServicesSection/ServicesSection';
import OurMenu from './components/OurMenu/OurMenu';
import GoodVibes from './components/GoodVibes/GoodVibes';
import { title } from 'process';
import RootLayout from './layout';
export const metadata = {
 title:"Coffee Blend",
 description: `
          Welcome to Blend Coffee, Here You Can Drink Coffe Eat Meals, pick up some products and go home
              `
}




export default function Index() {
  const t = useTranslations('Index');
  const lang = t("lang")
  return (
    
      <div>
    
    <MainContent lang={lang}/>
    <OurStory lang={lang}/>
    <ServicesSection lang={lang}/>
    <OurMenu lang={lang}/>
    <FoodSection lang={lang}/>
    <GoodVibes lang={lang}/>

</div>
    
  )
}











 // <h1>{t('title')}</h1>
  // <h4>
  //   {t('sayIamGood')}
  // </h4>
  // <Menu />