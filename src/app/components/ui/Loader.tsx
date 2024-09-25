import React from 'react'

export const Loader = () => {
  return (
    <>
      <div className="min-w-screen max-h-screen flex justify-center items-center">
				<div className="w-[200px] h-[200px] inline-block bg-none">
					<div className="w-full h-full relative loader">
						<div className='absolute w-[100px] h-[100px] border-[5px] border-white/75 border-t-transparent rounded-[50%] animate-loader top-[100px] left-[100px] box-content'></div>
					</div>
				</div>
			</div>
    </>
  )
}
