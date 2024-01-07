import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deletewatchistory, getallwatchhistory } from '../services/allapis'

 function Watchhistory() {
  const [history,sethistory] =useState([])
 async function Watchistory(){
  const response=await getallwatchhistory()
  const {data} =response;
  console.log("watchhhhh historyyyy")
  console.log(data)
  sethistory(data)
}
useEffect(()=>{
  Watchistory();
},[])
const handledelete= async(id)=>{
  await deletewatchistory(id)
  Watchistory()
}
  return (
    <>
    <div className='d-flex justify-content-evenly'>
    <h3 >Watch history</h3>
      <Link style={{textDecoration:"none",color:"white"}}><i class="fa-solid fa-arrow-left me-3 fa-1x"></i>Back to Home </Link>
    </div>
    <table className='table container mb-5 mt-5'>
      <thead>
        <tr>
          <th>#</th>
          <th>Caption</th>
          <th>Url</th>
          <th>Timestamp</th>
          <th>Action</th>
        </tr>
        
      </thead>
      <tbody>
        {
          history.length>0?
          history.map((item,index)=>(
            <tr>
        <td>{index+1}</td>
        <td>{item.caption}</td>
        <td>{item.embeddedLink}</td>
        <td>{item.timestamp}</td>
        <td> <button className='btn btn-danger'><i class="fa-solid fa-trash" onClick={()=>handledelete(item.id)}></i></button>  </td>
          </tr>
          ))
          :
          <p>No Watch history found</p>
        }
       
        
      </tbody>
    </table>
      
    </>

  )
}

export default Watchhistory
