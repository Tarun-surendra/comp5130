// client/src/components/ReviewList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ReviewList = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/reviews');
                setReviews(response.data.data);
            } catch (error) {
                console.error('Error fetching reviews', error);
            }
        };

        fetchReviews();
    }, []);

    return (
        <div>
            <h2>Customer Reviews</h2>
            <ul>
                {reviews.map((review) => (
                    <li key={review._id}>
                        <h3>{review.customerName}</h3>
                        <p>Rating: {review.rating}/5</p>
                        <p>{review.reviewText}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ReviewList;
