// client/src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">Janatha Garage</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item"><Link className="nav-link" to="/home">Home</Link></li>
                    {/* <li className="nav-item"><Link className="nav-link" to="/services">Services</Link></li> */}
                    <li className="nav-item"><Link className="nav-link" to="/book">Book Appointment</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/reviews">Reviews</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/request-quote">Request Quote</Link></li>
                </ul>
            </div>
        </div>
    </nav>
);

export default Navbar;
