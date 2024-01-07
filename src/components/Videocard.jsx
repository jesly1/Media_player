import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { addtohistory, deletevideo } from '../services/allapis';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';



function Videocard({ displayvdo, setdeletevdostatus }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () => {
    //3 datas needs to be inserted
    setShow(true);
    const{caption,embeddedLink}=displayvdo;
    const today=new Date()
    console.log(today)
    const timestamp=new Intl.DateTimeFormat('en-us',{
      year:'numeric',
      month:'2-digit',
      hour:'2-digit',
      minute:'2-digit',
      second:'2-digit'
    }).format(today)
    console.log(timestamp)
    let videodetails={
      caption:caption,
      embeddedLink:embeddedLink,
      timestamp:timestamp
    }
    await addtohistory(videodetails)
  }
  console.log("1")
  console.log(displayvdo)
  const removevideo = async (id) => {
    const response = await deletevideo(id)
    setdeletevdostatus(true)
  }
  const dragstarted =(e,id)=>{
    console.log(`started dragging of vdo ${id}`);
    e.dataTransfer.setData("VideoiD",id)
  }
  return (
    <>
      <Card style={{ width: '13rem' }} onClick={handleShow} draggable onDragStart={(e)=>dragstarted(e,displayvdo?.id)}>
        <Card.Img style={{ height: "400px", width: "200px" }} variant="top" src={displayvdo.url} />
        <Card.Body >
          <div className='d-flex align-items-evenly'>
            <Card.Text>
              <h6>{displayvdo.caption}</h6>
            </Card.Text>
            <Button className='ms-5 btn btn-danger' variant="primary"><i class="fa-solid fa-trash" onClick={() => removevideo(displayvdo.id)}></i></Button>
          </div>

        </Card.Body>
      </Card>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{displayvdo.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe width="100%" height="315" src={`${displayvdo.embeddedLink}?autoplay=1`} title="YouTube video player" frameborder="0"  allowfullscreen></iframe>
          
          

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Videocard
