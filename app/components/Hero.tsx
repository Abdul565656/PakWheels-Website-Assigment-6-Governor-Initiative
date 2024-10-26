import React from 'react'

const Hero = () => {
  return (
    <div>
        <section>
            <h2 className='text-center text-4xl text-gray-800 font-semibold'>Sell Your Car on PakWheels and Get the Best Price</h2>
<br />              
            {/* parent div for the hero section */}
            <div className='ml-52 flex space-x-52'>

                <div className=' leading-relaxed'>
                    <h2 className='text-2xl text-blue-900 font-semibold'>Post Your Ad on PakWheels</h2><br />
                    <p>Post your Ad for Free in 3 Easy Steps</p>
                    <p>Get Guiniene offers from Verified Buyers</p>
                    <p>Sell your car Fast at the Best Price</p><br />
                    <button className='bg-red-600 p-2 px-9 text-white rounded-md'>Post Your Ad</button>
                </div>

                <div>
                    <h3 className='mt-20 text-gray-600 font-bold text-2xl'>OR</h3>
                </div>
                <div className='leading-relaxed'>
                <h2 className='text-2xl text-blue-900 font-semibold'>Try PakWheels Sell It For Me</h2><br />
                    <p>Dedicated Sales Expert to Sale Your Car</p>
                    <p>We Bargain for you and share the Best Offer</p>
                    <p>We Ensure Safe and Secure Transactions</p><br />
                    <button className='bg-blue-500 p-2 px-7 text-white rounded-md'>Register Your Car</button>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Hero