import React, { useEffect, useState } from 'react'

import { useLoaderData } from 'react-router-dom'

function Github() {

    // const [data,setData]= useState([])

    // useEffect(() => {
    //     fetch('https://api.github.com/users/ArfanAbid')
    //     .then((Response)=> Response.json())
    //     .then((data)=>{
    //         console.log(data)
    //         setData(data)
    //     })
    // }, [])
    
    const data=useLoaderData()
  return (

    <div className='  text-centre m-4 bg-gray-600 rounded-xl text-white p-4 text-3xl text-center'>
      <p>Github followers: {data.followers}</p>
      <p>Name: {data.name}</p>
       <img className='max-w-60 p-2 rounded-xl flex justify-center' src={data.avatar_url} alt="Git pic " />
    </div>
  )
}

export default Github

export  const githubInfoLoader =async ()=>{
  const Response=await fetch('https://api.github.com/users/ArfanAbid')
  return Response.json()
}
