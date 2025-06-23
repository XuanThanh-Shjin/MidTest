import React from 'react'
import App from '../App'

const Explore = () => {
  return (
    <div className='relative flex flex-col justify-center gap-4 p-4 ml-[105px] text-white'>
        <h1 className='mb-2 text-2xl font-bold'>Explore</h1>
        <p className='mb-2 text-gray-400'>What are you gonna watch today ?</p>
        <div className='flex gap-4'>
            <a href="">
                <img className='relative flex object-cover overflow-hidden brightness-75' src="./public/image/spy_carousel 1.png" alt="#" />
            </a>
            <div className='absolute bottom-0 z-10 flex-col m-10 '>
                <h2 className='text-3xl font-bold '>Weather With You</h2>
                <p className='w-2/5 mt-2 text-sm font-bold'>Corrupt politicians, frenzied nationalists, and other warmongering forces constantly jeopardize the thin veneer of peace between neighboring countries Ostania and Westalis. </p>
            </div>

        </div>
    </div>
  )
}

export default Explore