import React, { useState } from 'react';
import { bookAppointment } from '../api';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const BookAppointment = () => {
    const [formData, setFormData] = useState({
        customerName: '',
        email: '',
        phone: '',
        date: '',
        serviceType: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await bookAppointment(formData);
            toast.success("Appointment booked successfully!");
            // alert('Appointment booked successfully!');
        } catch (error) {
            toast.error("Failed to book appointment");
            // alert('Failed to book appointment');
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
            <ToastContainer />
            <div class="container">
                <h2 class="text-center mb-4">Book an Appointment</h2>
                <form class="needs-validation" novalidate onSubmit={handleSubmit}>
                    <div class="mb-3">
                        <label for="name" class="form-label">Full Name</label>
                        <input name="customerName" class="form-control" onChange={handleChange} placeholder="Customer Name" required />
                        {/* <input type="text" class="form-control" id="name" placeholder="John Doe" required></input> */}
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">Email Address</label>
                        <input type="email" class="form-control" name="email" onChange={handleChange} placeholder="Email" required />
                        {/* <input type="email" class="form-control" id="email" placeholder="you@example.com" required></input> */}
                    </div>
                    <div class="mb-3">
                        <label for="date" class="form-label">Preferred Date</label>
                        <input type="date" class="form-control" name="date" onChange={handleChange} required />
                        {/* <input type="date" class="form-control" id="date" required></input> */}
                    </div>
                    <div class="mb-3">
                        <label for="service" class="form-label" >Service Required</label>
                        <select class="form-select" name="serviceType" onChange={handleChange} required>
                            <option selected="selected" value="engine-repair">Engine Repair</option>
                            <option value="oil-change">Oil Change</option>
                            <option value="tire-replacement">Tire Replacement</option>
                        </select>
                        {/* <input name="serviceType" onChange={handleChange} placeholder="Service Type" required /> */}
                    </div>
                    <div class="mb-3">
                        <label for="phone" class="form-label">Phone</label>
                        <input type="tel" class="form-control" name="phone" onChange={handleChange} placeholder="Phone" required />
                    </div>
                    <button type="submit" class="btn btn-danger">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default BookAppointment;
