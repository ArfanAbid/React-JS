import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {user_id}=useParams()
  return (
    <div className='bg-gray-700 p-3 text-3xl text-white flex justify-center'>
      User:  {user_id}
    </div>
  )
}

export default User
