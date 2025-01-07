import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const  {userid} = useParams(10)
  return (
      <div className='bg-gray-500 text-white text-3xl p-3 mx-auto w-fit rounded-lg shadow-md my-2'>User: {userid}</div>
  )
}

export default User 