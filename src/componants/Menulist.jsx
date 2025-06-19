import React from 'react'
import menu from '../assets/Menu.png'
import { useState,useEffect } from 'react'
import { useMenu } from '../context/Menucontext'
import axios from '../axios/axios'
function Menulist() {
   const [menus,Setmenu]=useState([])
   const {setSelectedMenuId}=useMenu()

   useEffect(()=>{
    axios.get("/menu")
    .then(res=>{
         console.log("API Response:", res.data.getmenu);
        Setmenu(res.data.getmenu)})
    
     .catch(err => console.error(err));
   },[])
    


  return (
    <div   className="  "style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(${menu})` }}>
              <div className='container mx-w-[1200px] min-h-[79px] mx-auto flex justify-center gap-2 p-4'>
         {menus.map(menus=>(
                      <button  key={menus._id}  onClick={()=>setSelectedMenuId(menus._id)} className='w-[114px] h-[50px]  border-[0.5px] border-[#0796EF] bg-[#000000] text-white hover:bg-[#0796EF] '>{menus.name}</button>
         ))}
               
                 
              </div>
    </div>
  )
}

export default Menulist
