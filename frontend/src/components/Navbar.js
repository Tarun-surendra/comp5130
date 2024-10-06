// src/components/Navbar.js
import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg" style={{ backgroundColor: 'red' }} data-mdb-theme="light">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <a className="navbar-brand mt-2 mt-lg-0" href="#">
                        <img src="https://img.freepik.com/premium-vector/auto-repair-garage-logo-automotive-industry_160069-63.jpg"
                            height="35" alt="Logo" loading="lazy" />
                    </a>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">HOME</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">SERVICE</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">HELP</a>
                        </li>
                    </ul>
                </div>
                <div className="d-flex align-items-center">
                    <a className="text-white me-3" href="#">
                        <i className="fas fa-shopping-cart"></i>
                    </a>
                    <div className="dropdown">
                        <a className="text- text-white me-3 dropdown-toggle hidden-arrow" href="#" role="button" data-bs-toggle="dropdown">
                            <i className="fas fa-bell"></i>
                            <span className="badge rounded-pill bg-primary">1</span>
                        </a>
                        <ul className="dropdown-menu dropdown-menu-end">
                            <li><a className="dropdown-item" href="#">Offers</a></li>
                            <li><a className="dropdown-item" href="#">Garage was closed</a></li>
                            <li><a className="dropdown-item" href="#">Used Car Available</a></li>
                        </ul>
                    </div>
                    <div className="dropdown">
                        <a className="dropdown-toggle d-flex align-items-center hidden-arrow" href="#" role="button" data-bs-toggle="dropdown">
                            <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" className="rounded-circle" height="25" alt="Avatar" />
                        </a>
                        <ul className="dropdown-menu dropdown-menu-end">
                            <li><a className="dropdown-item" href="#">My profile</a></li>
                            <li><a className="dropdown-item" href="#">Settings</a></li>
                            <li><a className="dropdown-item" href="#">Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
