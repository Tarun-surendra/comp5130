import React, { useState } from 'react';
import { registerUser, getUser } from '../api';

const RegisterUser = () => {
    const [formData, setFormData] = useState({
        userName: '',
        email: '',
        phone: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await registerUser(formData);
            alert('registered user successfully !');
        } catch (error) {
            alert('Failed to book user');
        }
    };

    return (

        // <form onSubmit={handleSubmit}>
        //     <input name="customerName" onChange={handleChange} placeholder="Customer Name" required />
        //     <input type="email" name="email" onChange={handleChange} placeholder="Email" required />
        //     <input type="tel" name="phone" onChange={handleChange} placeholder="Phone" required />
        //     <input type="date" name="date" onChange={handleChange} required />
        //     <input name="serviceType" onChange={handleChange} placeholder="Service Type" required />
        //     <textarea name="message" onChange={handleChange} placeholder="Message (optional)" />
        //     <button type="submit">Book Appointment</button>
        // </form>

        <section id="appointment" class="py-5">
            <div class="container">
                <h2 class="text-center mb-4">Register User</h2>
                <form class="needs-validation" noValidate onSubmit={handleSubmit}>
                    <div class="mb-3">
                        <label htmlFor="userName" class="form-label">User Name</label>
                        <input name="userName" class="form-control" onChange={handleChange} placeholder="User Name" required />
                        {/* <input type="text" class="form-control" id="name" placeholder="John Doe" required></input> */}
                    </div>
                    <div class="mb-3">
                        <label htmlFor="email" class="form-label">Email Address</label>
                        <input type="email" class="form-control" name="email" onChange={handleChange} placeholder="Email" required />
                        {/* <input type="email" class="form-control" id="email" placeholder="you@example.com" required></input> */}
                    </div>
                    <div class="mb-3">
                        <label htmlFor="phone" class="form-label">Phone</label>
                        <input type="tel" class="form-control" name="phone" onChange={handleChange} placeholder="Phone" required />
                    </div>
                    <button type="submit" class="btn btn-danger">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default RegisterUser;
