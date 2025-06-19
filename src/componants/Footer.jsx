import React from 'react'

function Footer() {
  return (
    <div className='bg-[#121618]'>
      <div className='max-w-[1220px] mx-auto min-h-[45px]'>
        <div className='flex flex-col md:flex-row justify-between items-center p-4 gap-2'>
          <p className='text-[#857878] text-center md:text-left text-[10px] md:text-[14px]'>
            © 2024 Deepnetsoft Solutions. All rights reserved.
          </p>
          <div className='flex gap-[15px] text-center md:text-right'>
            <p className='text-[#857878] text-[10px] md:text-[14px]'>Terms & Conditions</p>
            <p className='text-[#857878] text-[10px] md:text-[14px]'>Privacy Policy</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
