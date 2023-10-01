import React from 'react'

import iconBrandRecognition from '../assets/images/icon-brand-recognition.svg'
import iconDetailedRecords from '../assets/images/icon-detailed-records.svg'
import iconFullyCustomizable from '../assets/images/icon-fully-customizable.svg'

export default function MainContent() {
  return (
    <div className=' flex flex-col justify-center items-center text-center lg:max-w-6xl lg:mx-auto'>
        <h2 className='font-bold text-[hsl(255,11%,22%)] text-3xl mt-10 mb-5 lg:text-4xl lg:mt-20'>Advanced Statistics</h2>
        <p className=' lg:hidden mb-10'>
            Track how your links are performing across the web with 
            our advanced statistics dashboard. 
        </p>
        {/* desktop */}
        <p className=' hidden mb-5 lg:block'>
            Track how your links are performing across the web with <br />
            our advanced statistics dashboard. 
        </p>

        <div className=' flex flex-col justify-center items-center my-20 lg:flex-row lg:relative lg:mb-52'>

            <div className=' bg-white px-5 pb-10 flex flex-col justify-center items-center rounded-lg w-full lg:items-start lg:px-7'>
                <div className=' relative -top-16 w-28 h-28 bg-[hsl(257,27%,26%)] flex justify-center items-center rounded-full'>
                    <img src={iconBrandRecognition} alt="icon-brand-recognition" />
                </div>
                <h4 className='font-bold text-[hsl(255,11%,22%)] text-2xl -mt-5 mb-5'>Brand Recognition</h4>
                <p className=' lg:hidden'>
                    Boost your brand recognition with each click. Generic links don't 
                    mean a thing. Branded links help instil confidence in your content.
                </p>
                {/* desktop */}
                <p className=' hidden lg:block lg:text-base lg:text-start'>
                    Boost your brand recognition with <br /> each click. Generic links don't 
                    mean a <br />thing. Branded links help instil <br /> confidence in your content.
                </p>
            </div>

            {/* vertical line / horizontal line */}
            <div className='w-3 h-36 bg-[hsl(180,66%,49%)] lg:w-24 lg:h-3 lg:relative lg:top-10'></div>

            <div className=' bg-white px-5 pb-10 flex flex-col justify-center items-center rounded-lg w-full lg:items-start lg:relative lg:top-10 lg:px-7'>
                <div className=' relative -top-16 w-28 h-28 bg-[hsl(257,27%,26%)] flex justify-center items-center rounded-full'>
                    <img src={iconDetailedRecords} alt="icon-detailed-records" />
                </div>
                <h4 className='font-bold text-[hsl(255,11%,22%)] text-2xl -mt-5 mb-5'>Detailed Records</h4>
                <p className=' lg:hidden'>
                    Gain insights into who is clicking <br /> your links. Knowing when and <br />where 
                    people engage with your <br />content helps inform better <br /> decisions.
                </p>
                {/* desktop */}
                <p className=' hidden lg:block lg:text-base lg:text-start'>
                    Gain insights into who is clicking your <br /> links. Knowing when and where <br />
                    people engage with your content <br /> helps inform better decisions.
                </p>
            </div>

            {/* vertical line / horizontal line */}
            <div className='w-3 h-36 bg-[hsl(180,66%,49%)] lg:w-24 lg:h-3 lg:relative lg:top-10'></div>

            <div className=' bg-white px-5 pb-10 flex flex-col justify-center items-center rounded-lg w-full lg:items-start lg:relative lg:top-20 lg:px-7'>
                <div className=' relative -top-16 w-28 h-28 bg-[hsl(257,27%,26%)] flex justify-center items-center rounded-full'>
                    <img src={iconFullyCustomizable} alt="icon-fully-customizable" />
                </div>
                <h4 className='font-bold text-[hsl(255,11%,22%)] text-2xl -mt-5 mb-5'>Fully Customizable</h4>
                <p className=' lg:hidden'>
                    Improve brand awareness and content discoverability through customizable 
                    links, supercharging audience engagement.
                </p>
                {/* desktop */}
                <p className=' hidden lg:block lg:text-base lg:text-start'>
                    Improve brand awareness and <br /> content discoverability through <br /> customizable 
                    links, supercharging <br /> audience engagement.
                </p>
            </div>

        </div>

    </div>
  )
}
