import React, { useEffect, useState } from 'react'
import style from "./OurStory.module.css"

const OurStory = (props:any) => {

    let language = props.lang


  return (
    <div className={`dark:bg-primary ${style.ourstoryConatiner}`}>
        <div className='absolute lg:top-[40%] top-[10%] lg:right-[10%] bg-black bg-opacity-90 w-[100%] lg:w-[60%]  py-8 px-10'>
            <h1 className='text-4xl text-white font-bold'>{language == "en" ? "Our Story" : "قصتنا"}</h1>
            <p className='mt-10 text-gray-600 font-bold'>
                        {
                            language == "en" ? 
                            `On her way she met a copy. The copy
                             warned the Little Blind Text, that where it
                             came from it would have been rewritten a thousand times and 
                             everything that was left from its origin would be the word "and"
                              and the Little Blind Text should turn around and return to its own, safe
                               country. But nothing the copy said could convince her and so it didn’t take long until a
                                few insidious Copy Writers ambushed her, made 
                            her drunk with Longe and Parole and dragged her into their agency, where they abused her for their.`
                                                        :
                            `وفي طريقها التقت بنسخة.
                             حذرت النسخة النص الصغير الأعمى 
                             من أنه من حيث جاء كان سيتم إعادة كتابته ألف مرة وكل ما تبقى من أصله سيكون
                              كلمة "و" ويجب أن يستدير النص الصغير الأعمى ويعود إلى أصله، بلد آمن. لكن
                              لا شيء مما ذكرته النسخة يمكن أن يقنعها، لذا لم يستغرق الأمر وقتًا طويلاً 
                             حتى نصب لها 
                             عدد قليل من كتاب النسخ الخبيثين كمينًا لها، وجعلوها في حالة سكر مع 
                             Longe وParole وسحبوها إلى وكالتهم، حيث أساءوا إليها من أجل مصالحهم.`
                        }
            </p>
        </div>
    </div>
  )
}

export default OurStory
