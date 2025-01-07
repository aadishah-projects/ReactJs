import React,{useEffect,useState} from 'react'
import { data, useParams , useLoaderData } from 'react-router-dom'

function Github() {
    // const [data,setData] = useState([])
    // useEffect(
    //     () => {
    //         fetch('https://api.github.com/users/aadishah-projects')
    //             .then((response) => response.json())
    //             .then((data) => {
    //                 console.log(data)
    //                 setData(data)
    //         })
    //     }
    //     , []
    // )
    const data = useLoaderData()
  return (<>
      <img className= 'my-2 mx-2 'src={data.avatar_url} alt="profile" />
      
      <div className='bg-white mx-2 text-[#525355] text-3xl p-3  w-fit shadow-md my-2 mb-0' >Name: {data.name} </div>
      <div className='bg-white  mx-2 text-[#d94f3c] text-3xl p-3  w-fit  shadow-md my-2' >Github followers: {data.followers} </div>
      </>)
}

export default Github

export const GithubInfoLoader = async () => {
    const responce = fetch('https://api.github.com/users/aadishah-projects')
    return (await responce).json()
    // return responce.json()
}