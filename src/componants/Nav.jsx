import React from 'react';
import logo from '../assets/Logo.png';
import AddMenuModal from './Addmenu';
import  AddItemModal from './Additem'
import { useMenu } from '../context/Menucontext'; 

function Nav() {
  const { showAddMenu, setShowAddMenu,showAddItem,setShowAddItem } = useMenu(); 

  return (
    <div className="bg-[#121618]">
      <div className="max-w-[1200px] h-[100px] mx-auto px-4 flex items-center justify-between">
        
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <img className="w-[70px] md:w-[90px] h-auto" src={logo} alt="Logo" />
          <div className="hidden md:block leading-tight">
            <div className="flex gap-1 text-2xl font-bold">
              <h1 className="text-[#0796EF]">DEEP</h1>
              <h1 className="text-white">NET</h1>
            </div>
            <h1 className="text-[#857878] text-sm">SOFT</h1>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-[33px] justify-center text-white text-lg font-medium">
          <p className="cursor-pointer hover:text-gray-300">HOME</p>
          <p className="cursor-pointer hover:text-gray-300">MENU</p>
          <p
            className="cursor-pointer hover:text-gray-300"
            onClick={() => setShowAddMenu(true)}
          >
            ADD MENU
          </p>
          <p className="cursor-pointer hover:text-gray-300">CONTACT US</p>
        </div>
      </div>

     
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
