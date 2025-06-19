import React from 'react';
import Banner from '../assets/Banner.jpg'

function Menubanner() {
  return (
 
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(${Banner})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
      className="text-white"
    >
      <div className="container max-w-[1200px] min-h-10 mx-auto flex justify-between items-baseline pb-2 px-2">
        <div className="py-24 w-fit max-w-2xl text-center mx-auto px-4">
          <h1
            className="text-[76px] font-bold"
            style={{ textShadow: '4px 3px 0px #800020' }}
           >
            MENU
          </h1>

          <p className="text-[18px] font-kelly text-neutral-400 font-kelly ">
            Please take a look at our menu featuring food, drinks, and brunch.
            If you'd like to place an order, use the "Order Online" button
            located below the menu.
          </p>
        </div>
      </div>
    </div>

  );
}

export default Menubanner;
