import React from 'react'
import item from '../assets/item.png'
import leftside from '../assets/Frame1.png'
import Rightside from '../assets/Frame2.png'
import drink from '../assets/drink.png'
import cocktail from '../assets/cocktail.png'
import { useState,useEffect } from 'react'
import { useMenu } from '../context/Menucontext'
import axios from '../axios/axios'
function Itemlist() {

    const [items,Setitems]=useState([])
    const [menu,Setmenu]=useState('')
    const { selectedMenuId } = useMenu();

    useEffect(()=>{
        if (!selectedMenuId || selectedMenuId === "null") return;
        axios.get(`/${selectedMenuId}/items`)
        .then(res=>{
            console.log(res.data)
            Setitems(res.data.getitem)
            console.log("de",res.data.description)
            Setmenu(res.data.description)
        })
          .catch(err => console.error(err));

    },[selectedMenuId])


  return (
   <div
      className="p-2 flex bg-cover bg-center w-full min-h-[400px] sm:min-h-[550px]"
      style={{ backgroundImage: `url(${item})` }}
    >
      <div className="w-full h-full flex flex-wrap items-center justify-between gap-4">
        {/* Left Banner */}
        <img
          className="w-[64px] sm:w-[96px] hidden sm:block object-contain"
          src={leftside}
          alt="Side Banner"
        />

        {/* Main Content */}
        <div className="relative flex-1 mx-2 min-h-[300px] border border-white flex items-center justify-center max-w-[1200px]">
          {/* Floating Images */}
          <img
            className="absolute w-[60px] h-[90px] top-[-20px] left-0 sm:top-[-75px] sm:left-[-33px] sm:w-[110px] sm:h-[150px]"
            src={drink}
            alt="Drinks"
          />
          <img
            className="absolute bottom-0 right-0 h-[100px] md:h-[150px] md:bottom-[-20px] md:right-[-8px]"
            src={cocktail}
            alt="Cocktail"
          />

          <div className="h-full w-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
            {/* Title */}
            <div className="flex flex-wrap gap-2 sm:gap-5 justify-center items-center">
              <div className="h-[2px] w-[40px] md:w-[80px] bg-gray-400" />
              <h1
                className="text-[30px] sm:text-[50px] text-center font-bold text-white max-w-[90vw] sm:max-w-[500px]"
                style={{ textShadow: "4px 3px 0px #800020" }}
              >
                {menu}
              </h1>
              <div className="h-[2px] w-[40px] md:w-[80px] bg-gray-400" />
            </div>

            {/* Items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-4 pt-8 pb-5 w-full">
              {Array.isArray(items) && items.length > 0 ?  (
                items.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col gap-2 w-full max-w-[500px]"
                  >
                    <h2 className="text-white text-lg sm:text-2xl font-semibold font-oswald">
                      {item.ItemName} ............. ${item.Price}
                    </h2>
                    <p className="text-sm sm:text-lg text-justify text-gray-300 font-kelly">
                      {item.Description}
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-white text-lg">No items found</p>
              )}
            </div>
          </div>
        </div>

        {/* Right Banner */}
        <img
          className="w-[64px] sm:w-[96px] hidden sm:block object-contain"
          src={Rightside}
          alt="Right Banner"
        />
      </div>
    </div>

  )
}

export default Itemlist
