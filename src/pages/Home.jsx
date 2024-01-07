import React, { useState } from 'react'
import Add from '../components/Add'
import Category from '../components/Category'
import View from '../components/View'
import Videocard from '../components/Videocard'
import Watchhistory from './Watchhistory'
import {  useNavigate } from 'react-router-dom'

function Home() {
  const navi=useNavigate()
  const[uploadvideostatus,setuploadvideostatus]=useState({})
  return (
   <>
<div className='container d-flex justify-content-between align-items-center'>
      <div>
      <Add setuploadvideostatus={setuploadvideostatus}/>
      </div>
      <div>
      <h3 style={{cursor:"pointer"}}  onClick={()=>navi('/watch')}>Watch history</h3>
      </div>

</div>
<div className='container d-flex justify-content-between align-items-center'>
      <div >
    <h4> All Videos</h4> 
    <View setuploadvideostatus={setuploadvideostatus}/>
      </div>
      <div>
    <Category/>
      </div>

</div>
   </>
  )
}

export default Home
