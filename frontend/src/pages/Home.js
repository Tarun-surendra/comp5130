import React from 'react';
import { Link } from 'react-router-dom';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn,
    MDBRipple,
    MDBCardGroup,
    MDBCardFooter
} from 'mdb-react-ui-kit';



const services = [
    { name: 'Oil Change', description: 'Regular oil change for optimal engine performance' },
    { name: 'Brake Service', description: 'Complete brake inspection and maintenance' },
    { name: 'Tire Rotation', description: 'Improve tire lifespan and performance' },
    { name: 'Engine Diagnostics', description: 'Full diagnostics to identify and fix issues' },
];

const Home = () => (
    <div>
        <h1 className='d-flex justify-content-center'>Welcome to Janatha Garage</h1>

        {/* <div
            className="nav"
            style={{
                display: "flex",
                justifyContent: "space-evenly",
                marginTop: "1rem",
                color: "green",
                fontWeight: "bolder",
                fontSize: "2rem",
            }}
        >
            <Link to="/book" >Book an Appointment</Link>


        </div> */}

        {/* <h2 className='d-flex justify-content-center' >Our Services</h2> */}
        {/* <div>
            <h2>Our Services</h2>
            <ul>
                {services.map((service, index) => (
                    <li key={index}>
                        <h3>{service.name}</h3>
                        <p>{service.description}</p>
                    </li>
                ))}
            </ul>
        </div> */}
        <MDBCardGroup>
            <MDBCard>
                <MDBCardImage src='oil change.jpg' alt='...' position='top' />
                <MDBCardBody>
                    <MDBCardTitle>Oil Change</MDBCardTitle>
                    <MDBCardText>
                        Regular oil change for optimal engine performance
                    </MDBCardText>
                </MDBCardBody>
                <MDBCardFooter>
                    <small className='text-muted'>Last updated 3 mins ago</small>
                </MDBCardFooter>
            </MDBCard>
            <MDBCard>
                <MDBCardImage src='brakes.png' alt='...' position='top' />
                <MDBCardBody>
                    <MDBCardTitle>Brake Service</MDBCardTitle>
                    <MDBCardText>
                        Complete brake inspection and maintenance
                    </MDBCardText>
                </MDBCardBody>
                <MDBCardFooter>
                    <small className='text-muted'>Last updated 3 mins ago</small>
                </MDBCardFooter>
            </MDBCard>

            <MDBCard>
                <MDBCardImage src='tyre rotation.jpg' alt='...' position='top' />
                <MDBCardBody>
                    <MDBCardTitle>Tire Rotation</MDBCardTitle>
                    <MDBCardText>
                        Improve tire lifespan and performance
                    </MDBCardText>
                </MDBCardBody>
                <MDBCardFooter>
                    <small className='text-muted'>Last updated 3 mins ago</small>
                </MDBCardFooter>
            </MDBCard>
            <MDBCard>
                <MDBCardImage src='diagnosis.jpg' alt='...' position='top' />
                <MDBCardBody>
                    <MDBCardTitle>Engine Diagnostics</MDBCardTitle>
                    <MDBCardText>
                        Full diagnostics to identify and fix issues
                    </MDBCardText>
                </MDBCardBody>
                <MDBCardFooter>
                    <small className='text-muted'>Last updated 3 mins ago</small>
                </MDBCardFooter>
            </MDBCard>
        </MDBCardGroup>
        <h2 className='d-flex justify-content-center' >avail any of the above services</h2>
        <div
            className="nav"
            style={{
                display: "flex",
                justifyContent: "space-evenly",
                marginTop: "1rem",
                color: "green",
                fontWeight: "bolder",
                fontSize: "2rem",
            }}
        >
            <Link to="/book" >Book an Appointment</Link>


        </div>


        {/* <footer class="text-center text-lg-start bg-body-tertiary text-muted">
            <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                <div class="me-5 d-none d-lg-block">
                    <span>Get connected with us on social networks:</span>
                </div>
                <div>
                    <a href="" class="me-4 text-reset">
                        <i class="fab fa-facebook-f"></i>
                    </a>
                    <a href="" class="me-4 text-reset">
                        <i class="fab fa-twitter"></i>
                    </a>
                    <a href="" class="me-4 text-reset">
                        <i class="fab fa-google"></i>
                    </a>
                    <a href="" class="me-4 text-reset">
                        <i class="fab fa-instagram"></i>
                    </a>
                    <a href="" class="me-4 text-reset">
                        <i class="fab fa-linkedin"></i>
                    </a>
                    <a href="" class="me-4 text-reset">
                        <i class="fab fa-github"></i>
                    </a>
                </div>
            </section>
            <section class="">
                <div class="container text-center text-md-start mt-5">
                    <div class="row mt-3">
                        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6 class="text-uppercase fw-bold mb-4">
                                <i class="fas fa-gem me-3"></i>Company name
                            </h6>
                            <p>
                                Here you can use rows and columns to organize your footer content. Lorem ipsum
                                dolor sit amet, consectetur adipisicing elit.
                            </p>
                        </div>
                        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 class="text-uppercase fw-bold mb-4">
                                Products
                            </h6>
                            <p>
                                <a href="#!" class="text-reset">Angular</a>
                            </p>
                            <p>
                                <a href="#!" class="text-reset">React</a>
                            </p>
                            <p>
                                <a href="#!" class="text-reset">Vue</a>
                            </p>
                            <p>
                                <a href="#!" class="text-reset">Laravel</a>
                            </p>
                        </div>
                        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 class="text-uppercase fw-bold mb-4">
                                Useful links
                            </h6>
                            <p>
                                <a href="#!" class="text-reset">Pricing</a>
                            </p>
                            <p>
                                <a href="#!" class="text-reset">Settings</a>
                            </p>
                            <p>
                                <a href="#!" class="text-reset">Orders</a>
                            </p>
                            <p>
                                <a href="#!" class="text-reset">Help</a>
                            </p>
                        </div>
                        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
                            <p><i class="fas fa-home me-3"></i> New York, NY 10012, US</p>
                            <p>
                                <i class="fas fa-envelope me-3"></i>
                                info@example.com
                            </p>
                            <p><i class="fas fa-phone me-3"></i> + 01 234 567 88</p>
                            <p><i class="fas fa-print me-3"></i> + 01 234 567 89</p>
                        </div>
                    </div>
                </div>
            </section>
            <div class="text-center p-4" style={{background-color: rgba(0, 0, 0, 0.05)}}">
                © 2021 Copyright:
                <a class="text-reset fw-bold" href="https://mdbootstrap.com/">MDBootstrap.com</a>
            </div>
        </footer> */}


        {/* Other links or sections */}
    </div>
);

export default Home;
