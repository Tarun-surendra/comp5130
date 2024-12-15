// client/src/components/RequestQuote.js
import React, { useState } from 'react';
import { api } from '../api';

const RequestQuote = () => {
    const [formData, setFormData] = useState({
        customerName: '',
        email: '',
        serviceType: '',
        details: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.post('/quotes/request', formData);
            alert('Quote request sent successfully!');
        } catch (error) {
            alert('Failed to send quote request');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Request a Quote</h2>
            <input name="customerName" onChange={handleChange} placeholder="Your Name" required />
            <input type="email" name="email" onChange={handleChange} placeholder="Email" required />
            <input name="serviceType" onChange={handleChange} placeholder="Service Type" required />
            <textarea name="details" onChange={handleChange} placeholder="Service Details" />
            <button type="submit">Request Quote</button>
        </form>
    );
};

export default RequestQuote;
