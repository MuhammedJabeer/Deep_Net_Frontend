import React from 'react';
import logo from '../assets/Logo.png';
import AddMenuModal from './Addmenu';
import  AddItemModal from './Additem'
import { useMenu } from '../context/Menucontext'; 
import { useState } from 'react';

function Nav() {
  const { showAddMenu, setShowAddMenu,showAddItem,setShowAddItem } = useMenu(); 
  const [Mobilemenu,Setmobilemenu]=useState(false)

  return (
    <div className="bg-[#121618]">
      <div className="max-w-[1200px] h-[100px] mx-auto px-4 flex items-center justify-between  ">
        

        <div className="flex items-center gap-3 relative top-[50px] left-[100px]">
          <img className="w-[70px] md:w-[90px] h-auto" src={logo} alt="Logo" />
          <div className="hidden md:block leading-tight">
            <div className="flex gap-1 text-2xl font-bold">
              <h1 className="text-[#0796EF]">DEEP</h1>
              <h1 className="text-white">NET</h1>
            </div>
            <h1 className="text-[#857878] text-sm">SOFT</h1>
          </div>
        </div>


         <div className="md:hidden">
          <button onClick={() => Setmobilemenu(!Mobilemenu)}>
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {Mobilemenu ? (
                
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>


        <div className="hidden md:flex gap-[33px] text-lg font-medium text-white">
          <p className="cursor-pointer hover:text-[#0796EF]">HOME</p>
          <p className="cursor-pointer hover:text-[#0796EF]">MENU</p>
          <p
            className="cursor-pointer hover:text-[#0796EF]"
            onClick={() => setShowAddMenu(true)}
          >
            ADD MENU
          </p>
          <p className="cursor-pointer hover:text-[#0796EF]">CONTACT US</p>
        </div>
      </div>

      
      {Mobilemenu && (
        <div className="md:hidden flex flex-col items-center gap-4 p-[40px] text-sm text-white ">
          <p className="cursor-pointer hover:text-[#0796EF]">HOME</p>
          <p className="cursor-pointer hover:text-[#0796EF]">MENU</p>
          <p
            className="cursor-pointer hover:text-[#0796EF]"
            onClick={() => {
              setShowAddMenu(true);
              Setmobilemenu(false); 
            }}
          >
            ADD MENU
          </p>
          <p className="cursor-pointer hover:text-[#0796EF]">CONTACT US</p>
        </div>
      )}


     
      {showAddMenu && (
        <AddMenuModal onClose={() => setShowAddMenu(false)} />
      )}
       {showAddItem && ( 
        <AddItemModal onClose={() => setShowAddItem(false)} />
      )}
    </div>
  );
}

export default Nav;
