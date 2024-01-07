import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import { addcategory, deleteallcat, getallcategories, getallvideosbyid } from '../services/allapis';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Category() {
    const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const[categoryname,setcategoryname]=useState()
  const[allcategory,setallcategory]=useState([])
  console.log("category name",categoryname)
  const handleaddcategory=async()=>{
    if(categoryname){  
      let body={
      categoryName:categoryname,
      allVideos:[]
  
      }
      const response=await addcategory(body)
    if(response.status===201){
      toast.success(` Succesfully added Category ${categoryname} `)
      setcategoryname(" ")
      handleClose()
      getallcat()
    }
  else{
    toast.error("something went wrong")
  }}
      else{
        toast.error("please enter something")
      }
  
  }
 const getallcat=async()=>{
  const response=await getallcategories();
  const {data}=response
  console.log("all categoriessssss")
  console.log(response)
  setallcategory(data)

 }
 useEffect(()=>{
  getallcat();
 },[])
 const handledelte=async(id)=>{
await deleteallcat(id)
getallcat()
 }
const dragOver=(e)=>{
  e.preventDefault()
  console.log("inside category")
}
const  videoDrop=async(e,catid)=>{
  console.log(`dropped inside ${catid}`)
  const Videoid=e.dataTransfer.getData("VideoiD")
  console.log(Videoid)
  const res= await getallvideosbyid(Videoid)
  console.log("vdo to be droppes",res)
  const {data} =res
  console.log(data)
  let selectedcat=allcategory?.find((item)=>item.id== catid)
  console.log("selected category")
  console.log(selectedcat)
  selectedcat.allVideos.push(data)
  console.log("final category")
  console.log(selectedcat)
  const result=await updatecat(cateid,selcate)

}
  return (
    
    <>
    
    <Link onClick={handleShow} ><button className='btn btn-warning'>Add New Category</button></Link>
    <div className='ms-3'>
    {
      allcategory?.length>0?
      allcategory.map((item)=>(
       
      <div className='m-5 border border-secondary rounded p-3' draggable onDragOver={(e)=>dragOver(e)} onDrop={(e)=>videoDrop(e,item?.id)}>
        <div className='d-flex justify-content-center align-items-center'>
          <h6>{item.categoryName}</h6>
          <button className='btn btn-danger ms-2' onClick={()=>handledelte(item.id)}><i class="fa-solid fa-trash"></i></button>
        </div>
      </div>
    

      ))
      :
    <p>No categories to display</p>
    }
    </div>
   
   

      <Modal 
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title> <i class="fa-solid fa-pencil text-warning"></i>Add New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <h6>Please fill the following details</h6>
         <br />
         <div className='border border-secondary'   style={{width:"100%",height:"150px",padding:"6px"}}>
            
            <input className='form-control mt-3' type="text" placeholder='Enter Category Name'  onChange={(e)=>setcategoryname(e.target.value)}/>
            </div>
           
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleaddcategory}>Add</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer
      position="top-center"
      autoClose={2000}
      theme="colored"/> 
       
    
    </>
  )
}

export default Category
