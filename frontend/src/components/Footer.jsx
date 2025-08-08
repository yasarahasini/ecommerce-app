import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className="px-6 py-3 bg-gray-20 text-white-700 md:px-20">
      <div className="grid flex-col sm:grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} className="w-32 mb-5" alt="Logo" />
          <p className="w-full text-gray-500 md:w-2/3">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
        </div>
        <div>
            <p className='text-*1 font-medium mb-5 '>COMPANY</p>
            <ul className='flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        
        <div>
            <p className='text-*1 font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex gap-1 text-gray-600 flex-xol'>
                <li>+1-212-456-890</li>
                
                <li>contact@foreveryou.com</li>

                
            </ul>
               </div>
        </div>
        <div>
  <hr />
  <p className="py-5 text-sm text-center">
    Copyright 2024 © forever.com All Rights Reserved.
  </p>
</div>

        {/* Add other footer columns here if needed */}
      </div>
 
  )
}

export default Footer
