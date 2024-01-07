import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Videocard from './Videocard';
import { getallvideos } from '../services/allapis';

function View({setuploadvideostatus}) {
  const [allvdo,setallvdo]=useState([])
  const[deletevdostatus,setdeletevdostatus]=useState(false)
  const getalluploadedvdos= async ()=>{
    const response = await getallvideos();
    const {data}=response
    setallvdo(data) 
  }
 useEffect (()=>{
    getalluploadedvdos();
    setdeletevdostatus(false)
  },[setuploadvideostatus,deletevdostatus])
  console.log(allvdo)
  return (
    <>
    <Container>
      <Row>

        {
          allvdo?.length>0?
          allvdo.map((video)=>(
          <Col sm={12} md={6} lg={4} xl={4}>
          <Videocard displayvdo ={video} setdeletevdostatus={setdeletevdostatus}/>
          </Col>
          ))
            :
            <p>no item to display</p>

        }
      
      </Row>
    </Container>
    </>
  )
}

export default View
