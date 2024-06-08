import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
    const data =useLoaderData()
    // const [data,setData]= useState([])
   
    // useEffect(()=>{
    //     fetch("https://api.github.com/users/Rithik0707")
    //     .then(response => response.json())
    //     .then(data => 
    //         {setData(data)
    //  } )
    // },[])
   
  return (
    <div className='bg-blue-400 text-white text-3xl p-5 '>
      Github Follower: {data.followers}
      <img width={300} src={data.avatar_url} alt="git pic"  />
    </div>
  )
}


export default Github

export const gitLoaderInfo= async()=>{
  const newResponse= await fetch("https://api.github.com/users/Rithik0707")
  return newResponse.json()

}
