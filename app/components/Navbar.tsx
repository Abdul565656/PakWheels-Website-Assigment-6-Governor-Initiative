import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav className='bg-slate-900 text-white p-2'>
            <div className='flex justify-between items-center mr-32 ml-32 '>
                <p>Download app via sms</p>
               <ul className='flex space-x-4'>
                <li ><span className='text-red-700'>اردو</span> <span className='text-gray-700'>|</span></li>
                <li>Sign In <span className='text-gray-700'>|</span></li>
                <li>Sign Up </li>
               </ul>
            </div>
            <hr className='border-t border-gray-700 ml-32 mr-32' />

            <div className='flex justify-between items-center mr-32 ml-32 mt-7 m-2'>
              <h3 className='font-semi-bold text-3xl'>PAKWHEELSC<span className='text-red-700'>O</span>M</h3>
              <ul className='flex space-x-10'>
                <li>Used Cars</li>
                <li>New Cars</li>
                <li>Bikes</li>
                <li>Auto Store</li>
                <li>Videos</li>
                <li>Forms</li>
                <li>Blogs</li>
                <li>More</li>
                <li className='bg-red-600 p-2  font-semi-bold rounded-sm px-4'>Post an Ad</li>
              </ul>
            </div>
        </nav>
    </div>
  )
}

export default Navbar