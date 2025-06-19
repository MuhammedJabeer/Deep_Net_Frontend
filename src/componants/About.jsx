import React from 'react'
import logo from '../assets/Logo.png'
function About() {
  return (
    <div className='bg-black'>
        <div className='conatiner max-w-[1200px] mx-auto p-15 '>
            <div className='h-full w-full grid grid-cols-1 sm:grid-cols-3 gap-4  justify-center gap-10'> 
            <div className='flex flex-col min-h-[134px] border border-white rounded-[15px] gap-[10px] p-2'>
                <h1 className='text-[#0796EF] text-center'>contact us</h1>
                <p className='text-[#857878] text-center '>+91 9567843340</p>
                <p className='text-[#857878] text-center'>info@deepnetsoft.com</p>

            </div>

             <div className=' relative flex flex-col min-h-[134px] border border-white rounded-[15px]  justify-center'>
                <div className='absolute top-0 left-[50%]  translate-y-[-50%] translate-x-[-50%] bg-black'>
                         <img   src={logo} alt='logo' />
                </div>
               
                <h1 className='text-[#0796EF] text-center'>DEEP NET SOFT</h1>
        \     

            </div>

             <div className='flex flex-col min-h-[134px] border border-white rounded-[15px] gap-[10px] p-2'>
                <h1 className='text-[#0796EF] text-center'>Find Us</h1>
                <p className='text-[#857878] text-center '>First floor, Geo infopark, Infopark EXPY, Kakkanad</p>
\

            </div>

           

            </div>
        </div>
       
    </div>
  )
}

export default About
