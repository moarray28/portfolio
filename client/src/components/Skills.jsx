import React from 'react'

export default function Skills({img,imgtitle}) {
  return (
    <>
    <div className="flex flex-col justify-center mb-5 items-center">
        <div className='h-24 w-24 transform transition duration-500 cursor-pointer  hover:scale-110 bg-white flex items-center justify-center object-cover dark:shadow-black  shadow-stone-500 shadow-2xl rounded-full mb-2'>
          <img src={img} className='h-16 w-16' alt='React JS' />
        </div>
        <div className='text-base font-semibold text-black dark:text-white'>{imgtitle}</div>
      </div>

    </>
      
    
  )
}
