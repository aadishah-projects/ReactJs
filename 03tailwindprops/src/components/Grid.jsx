import React from 'react'

function Grid() {
  return (
    <div><div className="grid grid-cols-10 gap-2">
    <div className="bg-white aspect-square "></div>
    <div className='bg-black aspect-square'></div>
    <div className='bg-green-400 aspect-square'></div>
    <div className='bg-blue-400 aspect-square'></div>
    <div className='bg-orange-400 aspect-square'></div>
    <div className='bg-red-400 aspect-square'></div>
    <div className='bg-pink-400 aspect-square'></div>
    <div className='bg-yellow-400 aspect-square'></div>
    <div className='bg-purple-400 aspect-square'></div>
    <div className='bg-gray-400 aspect-square'></div>
  </div></div>
  )
}

export default Grid