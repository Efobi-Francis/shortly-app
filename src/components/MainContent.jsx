import React from 'react'

import iconBrandRecognition from '../assets/images/icon-brand-recognition.svg'
import iconDetailedRecords from '../assets/images/icon-detailed-records.svg'
import iconFullyCustomizable from '../assets/images/icon-fully-customizable.svg'

export default function MainContent() {
  return (
    <div className=' flex flex-col justify-center items-center text-center'>
        <h2 className='font-bold text-[hsl(255,11%,22%)] text-3xl mt-10 mb-5'>Advanced Statistics</h2>
        <p className='mb-10'>
            Track how your links are performing across the web with our 
            advanced statistics dashboard. 
        </p>

        <div className=' flex flex-col justify-center items-center my-20 '>

            <div className=' bg-white px-5 pb-10 flex flex-col justify-center items-center rounded-lg w-full'>
                <div className=' relative -top-16 w-28 h-28 bg-[hsl(257,27%,26%)] flex justify-center items-center rounded-full'>
                    <img src={iconBrandRecognition} alt="icon-brand-recognition" />
                </div>
                <h4 className='font-bold text-[hsl(255,11%,22%)] text-2xl -mt-5 mb-5'>Brand Recognition</h4>
                <p>
                    Boost your brand recognition with each click. Generic links don't 
                    mean a thing. Branded links help instil confidence in your content.
                </p>
            </div>

            {/* vertical line */}
            <div className='w-3 h-36 bg-[hsl(180,66%,49%)]'></div>

            <div className=' bg-white px-5 pb-10 flex flex-col justify-center items-center rounded-lg w-full'>
                <div className=' relative -top-16 w-28 h-28 bg-[hsl(257,27%,26%)] flex justify-center items-center rounded-full'>
                    <img src={iconDetailedRecords} alt="icon-detailed-records" />
                </div>
                <h4 className='font-bold text-[hsl(255,11%,22%)] text-2xl -mt-5 mb-5'>Detailed Records</h4>
                <p>
                    Gain insights into who is clicking your links. Knowing when and where 
                    people engage with your content helps inform better decisions.
                </p>
            </div>

            {/* vertical line */}
            <div className='w-3 h-36 bg-[hsl(180,66%,49%)]'></div>

            <div className=' bg-white px-5 pb-10 flex flex-col justify-center items-center rounded-lg w-full'>
                <div className=' relative -top-16 w-28 h-28 bg-[hsl(257,27%,26%)] flex justify-center items-center rounded-full'>
                    <img src={iconFullyCustomizable} alt="icon-fully-customizable" />
                </div>
                <h4 className='font-bold text-[hsl(255,11%,22%)] text-2xl -mt-5 mb-5'>Fully Customizable</h4>
                <p>
                    Improve brand awareness and content discoverability through customizable 
                    links, supercharging audience engagement.
                </p>
            </div>

        </div>

    </div>
  )
}
