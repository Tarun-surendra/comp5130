// inside src/Login.jsx

import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';



// import { bookAppointment } from '../api';

const Login = () => {
    const [formData, setFormData] = useState({
        // customerName: '',
        userName: '',
        password: ''

    });

    const navigate = useNavigate();


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // const userData = JSON.parse(localStorage.getItem(data));
        const data = { "userName": "tarunsurendramothukuru43@gmail.com", "password": "tarun" }
        if (e) { // getItem can return actual value or null
            if (e.currentTarget[1].value === data.password) {
                console.log(e.currentTarget[0].value + " You Are Successfully Logged In");
                setTimeout(() => {
                    console.log("Hello, World!");
                    navigate("/home");
                }, 2000);
                toast.success("successful login");

            } else {
                toast.error("Email or Password is not matching with our record");
                console.log("Email or Password is not matching with our record");
            }
        } else {
            console.log("Email or Password is not matching with our record");
        }
    };

    return (


        <section id="login" class="py-5">
            <div
                // className="nav"
                style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    marginTop: "1rem",
                    color: "green",
                    fontWeight: "bolder",
                    fontSize: "2rem",
                    marginBottom: "1rem",
                }}
            >
                <Link to="/user" >Register User</Link></div>
            <ToastContainer />
            <div class="container">
                <h2 class="text-center mb-4">Login details</h2>
                <form class="needs-validation" noValidate onSubmit={handleSubmit}>
                    <div class="mb-3">
                        <label for="name" class="form-label">User Name</label>
                        <input name="userName" class="form-control" onChange={handleChange} placeholder="User Name" required />
                        {/* <input type="text" class="form-control" id="name" placeholder="John Doe" required></input> */}
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">Password</label>
                        <input type="password" class="form-control" name="password" onChange={handleChange} placeholder="password" required />
                        {/* <input type="email" class="form-control" id="email" placeholder="you@example.com" required></input> */}
                    </div>

                    <button type="submit" class="btn btn-danger">Login</button>
                </form>
            </div>
            <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
                <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                    <div className='me-5 d-none d-lg-block'>
                        <span>Get connected with us on social networks:</span>
                    </div>

                    <div>
                        <a href='' className='me-4 text-reset'>
                            <MDBIcon fab icon="facebook-f" />
                        </a>
                        <a href='' className='me-4 text-reset'>
                            <MDBIcon fab icon="twitter" />
                        </a>
                        <a href='' className='me-4 text-reset'>
                            <MDBIcon fab icon="google" />
                        </a>
                        <a href='' className='me-4 text-reset'>
                            <MDBIcon fab icon="instagram" />
                        </a>
                        <a href='' className='me-4 text-reset'>
                            <MDBIcon fab icon="linkedin" />
                        </a>
                        <a href='' className='me-4 text-reset'>
                            <MDBIcon fab icon="github" />
                        </a>
                    </div>
                </section>

                <section className=''>
                    <MDBContainer className='text-center text-md-start mt-5'>
                        <MDBRow className='mt-3'>
                            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>
                                    <MDBIcon icon="gem" className="me-3" />
                                    Janatha Garage
                                </h6>
                                <p>
                                    We provide comprehensive automotive services to keep your vehicle running smoothly. Customer satisfaction is our priority, delivering quick and professional service every time.
                                </p>
                            </MDBCol>

                            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Services</h6>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Tire Rotation
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Oil Change
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Diagnosis
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Brakes
                                    </a>
                                </p>
                            </MDBCol>

                            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
                                <p>
                                    <a href='/request-quote' className='text-reset'>
                                        Pricing
                                    </a>
                                </p>
                                <p>
                                    <a href='/book' className='text-reset'>
                                        Book Appointment
                                    </a>
                                </p>
                                <p>
                                    <a href='/' className='text-reset'>
                                        Help
                                    </a>
                                </p>
                            </MDBCol>

                            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                                <p>
                                    <MDBIcon icon="home" className="me-2" />
                                    Lowell, MA 01854, US
                                </p>
                                <p>
                                    <MDBIcon icon="envelope" className="me-3" />
                                    janathagarage@gmail.com
                                </p>
                                <p>
                                    <MDBIcon icon="phone" className="me-3" /> + 01 978 567 88
                                </p>
                                <p>
                                    <MDBIcon icon="print" className="me-3" /> + 01 978 567 89
                                </p>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </section>

                <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                    © 2024 Janatha Garage:
                    <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>

                    </a>
                </div>
            </MDBFooter>
        </section>


    );
};
export default Login;
