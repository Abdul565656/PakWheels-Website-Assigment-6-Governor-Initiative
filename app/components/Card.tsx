import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Card = () => {
  return (
    <div>
        <div className='flex ml-52 m-12 space-x-4 '>
            <div className='border border-gray-300 p-3 py-11'>
        <Image src="/images/car1.png" 
        alt='car1 image'
        className=''
        width={200}
        height={200}
        />
        <Link href="/Cardetails1"><p className='text-center text-blue-600 font-bold'>Toyota Corolla</p></Link>
        <p className='text-center text-green-600 '>PKR 59.5 - 75.5 lacs</p>
        <p className='leading-relaxed text-center text-gray-700'>621 Reviews</p>
        </div>

        <div className='border border-gray-300 p-3 py-2'>
        <Image src="/images/car2.png" 
        alt='car1 image'
        className=''
        width={200}
        height={200}
        />
        <Link href="/Cardetails2"><p className='text-center text-blue-600 font-bold'>Suzuki Alto</p></Link>
        <p className='text-center text-green-600 '>PKR 23.5 - 25.5 lacs</p>
        <p className='leading-relaxed text-center text-gray-700'>621 Reviews</p>
        </div>



        <div className='border border-gray-300 p-3 py-2'>
        <Image src="/images/car3.jpg" 
        alt='car1 image'
        className=''
        width={200}
        height={200}
        />
        <Link href="/Cardetails3"><p className='text-center text-blue-600 font-bold'>Honda City</p></Link>
        <p className='text-center text-green-600 '>PKR 46.5 - 58.5 lacs</p>
        <p className='leading-relaxed text-center text-gray-700'>621 Reviews</p>
        </div>


        <div className='border border-gray-300 p-3 py-2'>
        <Image src="/images/car4.jpg" 
        alt='car1 image'
        className=''
        width={200}
        height={200}
        />
        <Link href="/Cardetails4"><p className='text-center text-blue-600 font-bold'>Honda Civic</p></Link>
        <p className='text-center text-green-600 '>PKR 86.5 - 99.5 lacs</p>
        <p className='leading-relaxed text-center text-gray-700'>621 Reviews</p>
        </div>
        </div>
    </div>
  )
}

export default Card