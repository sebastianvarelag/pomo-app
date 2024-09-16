import React from 'react'

export const Modal = () => {
  return (
    <div className='fixed inset-0 w-full h-full bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
      <div className='w-[600px]'>
        <button className='text-white text-l'>
          X
        </button>
        <div className='bg-white p-2 rounded text-black'>
          Modal
        </div>
      </div>
    </div>
  )
}
