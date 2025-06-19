import React from 'react'
import logo from '../assets/Logo.png'
import {Mail,Phone,MapPin} from 'lucide-react'
import { FaWhatsapp, FaTwitter, FaInstagram, FaFacebookF } from "react-icons/fa";

function About() {
  return (
    <div className='bg-black'>
        <div className='conatiner max-w-[1200px] mx-auto p-15 '>
            <div className='h-full w-full grid grid-cols-1 sm:grid-cols-3 gap-4  justify-center gap-15'> 
            <div className='flex flex-col min-h-[134px] border border-white rounded-[15px] gap-[10px] p-2   '>
                <h1 className='text-[#0796EF] text-center text-[16px]'>contact us</h1>
             
                <p className='text-[#857878] text-center flex justify-center items-center'>    <Phone className='text-[#C5A059] w-[14px] h-[12px]'/>+91 9567843340</p>
                <p className='text-[#857878] text-center flex justify-center items-center'> <Mail className='text-[#C5A059] w-[14px] h-[12px]'/>info@deepnetsoft.com</p>

            </div>

             <div className=' relative flex flex-col  min-h-[134px] border border-white rounded-[15px]  justify-center gap-[15px]'>
                <div className='absolute top-0 left-[50%]  translate-y-[-50%] translate-x-[-50%] bg-black'>
                         <img   src={logo} alt='logo' />
                </div>
                <div className='flex justify-center gap-[10px]'>
                 <h1 className='text-[#0796EF] text-center'>DEEP</h1>
                <h1 className='text-white text-center'>NET</h1>
                <h1 className='text-[#857878] text-center'>SOFT</h1>
                </div>
               
               <div className='flex justify-center gap-[10px]'>
                     
                   <div className="flex gap-3 text-[14px] text-neutral-600">
                <FaFacebookF />
                <FaInstagram />
                <FaWhatsapp/>
                <FaTwitter/>
               </div>
                </div>
                 

            </div>

             <div className='flex flex-col min-h-[134px] border border-white rounded-[15px] gap-[10px] p-2'>
                <h1 className='text-[#0796EF] text-center'>Find Us</h1>
                <p className='text-[#857878] text-center flex justify-center  gap-[5px]'><MapPin className='text-[#C5A059] w-[14px] h-[12px]'/>First floor, Geo infopark, <br/>Infopark EXPY, Kakkanad</p>


            </div>


            </div>
        </div>
       
    </div>
  )
}

export default About
