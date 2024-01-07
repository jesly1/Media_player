import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { uploadvideo } from '../services/allapis';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Add({setuploadvideostatus}) {
        const [show, setShow] = useState(false);
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
        const [video,setvideo]=useState({
          id:"",
          caption:"",
          url:"",
          embeddedLink:""
        })
        
      const embeddedvideolink=(e)=>{
        const {value}=e.target
        
        const videolink =`https://www.youtube.com/embed/${value.slice(-11)}`
        setvideo({...video,embeddedLink:videolink})
      }
     const handleupload=async()=>{
       
      const {id,caption,url,embeddedLink}=video
      if(!id||!caption||!url||!embeddedLink){
      toast.warn("Enter something")
      }else{
      const response=  await uploadvideo(video)
      if (response.status == 201){
       toast.success("succesfully uploaded")
       setuploadvideostatus(response.data)
        handleClose();
      }else{
       toast.error("something went wrong")
      }
      }
     }
  return (
   <>
   <Link onClick={handleShow} style={{textDecoration:"none"}}>
   <h5>Add New Video <i class="fa-solid fa-cloud-arrow-up"></i></h5></Link>
   

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title><i class="fa-solid fa-film text-warning"></i> Upload Video </Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <h6>Please fill the following details</h6>
         <br />
         <div className='border border-secondary'   style={{width:"100%",height:"250px",padding:"6px"}}>
            <input className='form-control mt-3 ' type="text" placeholder='Enter Video ID' onChange={(e)=>setvideo({...video,id:e.target.value})} />
            <input className='form-control mt-3' type="text" placeholder='Enter Video Caption' onChange={(e)=>setvideo({...video,caption:e.target.value})} />
            <input className='form-control mt-3 ' type="text" placeholder='Enter Video Image URL'onChange={(e)=>setvideo({...video,url:e.target.value})} />
            <input className='form-control mt-3 me-4' type="text" placeholder='Enter Youtube Link'onChange={(e)=>embeddedvideolink(e)} />
         </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button  className='btn btn-warning' onClick={handleupload}>Upload</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer
      position="top-center"
      autoClose={2000}
      theme="colored"/> 
       
                

   
   
   </>
  )
}

export default Add
