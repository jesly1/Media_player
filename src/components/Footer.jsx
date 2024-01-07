import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <>
            <div className='d-flex justify-content-center align-items-center mt-5' >
                <div className='footer d-flex align-items-center justify-content-evenly'>
                    <div style={{width:"400px"}}>
                        <h4><i class="fa-solid fa-video text-warning me-3"></i>Media Player</h4>
                        <p style={{color:"white"}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                        Ipsam officia eos saepe totam modi sapiente, voluptate quasi? Saepe, nisi nulla.
                         Optio aliquid quaerat dolorem aperiam nisi id, deleniti eveniet deserunt.</p>
                    </div>
                    <div className=' links d-flex flex-column ms-5'>
                        <h4>Links</h4>
                        <Link to='/' style={{textDecoration:"none",color:"white"}}>Landing page</Link>
                        <Link to='/home'style={{textDecoration:"none",color:"white"}}>Home page</Link>
                        <Link to='/watch' style={{textDecoration:"none",color:"white"}}>Watch History</Link>

                    </div>
                    <div className=' links d-flex flex-column ms-5'>
                        <h4>Guides</h4>
                        <Link to='https://react.dev/' target='_blank'   style={{textDecoration:"none",color:"white"}}>React</Link>
                        <Link to='https://react-bootstrap.github.io/home '  target='_blank'  style={{textDecoration:"none",color:"white"}}>React Boostrape</Link>
                        <Link to='https://bootswatch.com/' target='_blank'   style={{textDecoration:"none",color:"white"}}>Bootswatch</Link>

                    </div>
                    <div className='ms-5' >
                        <h4>Contact Us</h4>
                       <div className='d-flex'>
                        <input type="text" className='form-control'   placeholder='Enter Email ID'/>
                        <button className='btn btn-warning ms-3'>Subscribe</button>

                       </div>
                       <div className='d-flex justify-content-evenly mt-3 '>
                        <Link><i class="fa-brands fa-instagram fa-2x"></i></Link>
                        <Link><i class="fa-brands fa-twitter fa-2x" ></i></Link>
                        <Link><i class="fa-brands fa-linkedin fa-2x"></i></Link>
                        <Link><i class="fa-brands fa-facebook fa-2x"></i></Link>
                       </div>
                    </div>
                  
                  

                </div>
            </div>
            <p className='mt-5 text-center'>Copyright &copy; 2023 Media Player.Built with React</p>

        </>
    )
}

export default Footer
