import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom'
function Landing() {
    return (
        <>

            <Container className='mt-5 mb-5 d-flex align-items-center justify-content-evenly w-100'>
                <Row >
                    <Col>
                        <div style={{ marginTop: "150px" }} className='text-align-center'>
                            <h3 style={{ textAlign: "justify" }}>WELCOME TO <span style={{ color: "orange" }}>MEDIA PLAYER</span></h3>
                            <p style={{ textAlign: "justify" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta illum ducimus est cum dolorum sequi autem, accusantium recusandae explicabo a vel dicta esse veniam corrupti cumque doloribus, adipisci voluptatem molestias!</p>
                            <Link to='/home'><button className='btn btn-warning mt-2 justify'>Get Started<i class="fa-solid fa-arrow-right ms-3"></i> </button></Link>
                            
                        </div>

                    </Col>
                    <Col>
                        <div >
                            <img style={{ height: "500px" }} src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="" className='ms-5' />

                        </div>

                    </Col>
                </Row>
            </Container>
            <div className='container mb-5'>
                <h3>FEATURES</h3>
                <div className='cards d-flex justify-content-center align-items-center justify-content-evenly'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam vel magnam corporis, repellendus id autem sequi consequuntur esse dolorem temporibus in distinctio! Dolorum cumque quaerat illo aperiam inventore cupiditate sed!
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum mollitia, quasi placeat a aperiam illum voluptatibus odit molestiae quos magni dicta, cupiditate laborum porro minus. Eaque inventore quisquam cumque saepe!
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum dolore quos exercitationem dolor repellendus odio excepturi rerum harum maiores omnis quo voluptates, eum possimus laboriosam aliquid, veniam molestias recusandae eius?
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                        
                    </Card>
                </div>

            </div>
            <div className='container mb-5'>
                <Row>
                    <Col>
                        <h3 className='text-warning'>Simple and Powerful</h3>
                        <h5>Play Everything:<h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis exercitationem vitae repellendus deserunt quia distinctio pariatur aspernatur neque ducimus repudiandae perspiciatis quisquam vel illo, sequi obcaecati veniam expedita minima doloribus.</h6></h5>

                        <h5>Play Everything:<h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis exercitationem vitae repellendus deserunt quia distinctio pariatur aspernatur neque ducimus repudiandae perspiciatis quisquam vel illo, sequi obcaecati veniam expedita minima doloribus.</h6></h5>

                        <h5>Play Everything:<h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis exercitationem vitae repellendus deserunt quia distinctio pariatur aspernatur neque ducimus repudiandae perspiciatis quisquam vel illo, sequi obcaecati veniam expedita minima doloribus.</h6></h5>

                    </Col>
                    <Col>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/VAdGW7QDJiU?si=qMAvtJWl0W_WeNES" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </Col>



                </Row>

            </div>


        </>
    )
}

export default Landing;
