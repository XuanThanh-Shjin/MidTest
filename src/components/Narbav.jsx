import React from 'react'


const Narbav = () => {
  return (
    <div className='flex items-center justify-around p-4 text-white'>
        <h1 className='text-3xl font-bold'>Anonime</h1>
        <p className='text-gray-400'>Home</p>
        <p className='text-gray-400'>List anime</p>
        <input className='rounded-lg w-[300px] h-8 bg-slate-700' type="text" placeholder="  Search anime or movie" />
    </div>
  )
}

export default Narbav