// client/src/components/AddReview.js
import React, { useState } from 'react';
import axios from 'axios';

const AddReview = () => {
    const [formData, setFormData] = useState({
        customerName: '',
        rating: '',
        reviewText: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/reviews/add', formData);
            alert('Review submitted successfully');
        } catch (error) {
            alert('Failed to submit review');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                name="customerName"
                placeholder="Your Name"
                value={formData.customerName}
                onChange={handleChange}
                required
            />
            <input
                type="number"
                name="rating"
                placeholder="Rating (1-5)"
                value={formData.rating}
                onChange={handleChange}
                min="1"
                max="5"
                required
            />
            <textarea
                name="reviewText"
                placeholder="Write your review here"
                value={formData.reviewText}
                onChange={handleChange}
                required
            />
            <button type="submit">Submit Review</button>
        </form>
    );
};

export default AddReview;
