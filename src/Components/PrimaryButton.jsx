import React from 'react'

const PrimaryButton = ({children}) => {
  return (
    <>
    <button className='bg-[#3b82f6] text-white px-4 py-2 rounded-lg w-44 h-12'>
        {children}
    </button>
    </>
  )
}

export default PrimaryButton