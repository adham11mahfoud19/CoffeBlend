"use client"

import { useDispatch, useSelector } from "react-redux";
import dishes from "../../../../data/food/dishes";
import React, { useEffect, useState } from 'react';
import { addToMenu } from "../../../../lib/features/food/food"; // Import addToMenu action

const Menu = () => {
    let food = useSelector((state:any) => state.food); // Use state.food instead of state.drink


    let [language, setLanguage] = useState("en");
    
    useEffect(() => {
        // Get the language name from the URL using window.location
        let lang = window.location.pathname;
        setLanguage(lang.slice(1));
        // console.log('Language:', food);
    }, [food]);

    let dispatch = useDispatch();
    let foodMenu = dishes;

    let handleAddToMenu = (food:any) => {
        dispatch(addToMenu(food))
    };

    return (
        <div className='grid grid-cols-3 gap-10'>
            {foodMenu.map((item) => (
                <div className="bg-sky-600 p-10 col-span-1 text-red" key={item.id}>
                    {language === "en" ? item.nameEn : item.name}
                    <button className="p-4 mt-8" onClick={() => handleAddToMenu(item)}>
                        add to cart
                    </button>
                </div>
            ))}

            <br />
            <br />
            <hr />
            <hr />
            <div className="mt-8"></div>

                <div>
                    {food.map((item:any) => {
                        return (
                            <div key={item.id} className="p-5 bg-black text-sky-600 m-5">
                                <h1>{language == "en" ? item.nameEn : item.name}</h1>
                            </div>
                        )
                    })}
                </div>
        </div>
    );
};

export default Menu;