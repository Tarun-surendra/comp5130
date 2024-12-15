// client/src/components/ServiceList.js
import React from 'react';

const services = [
    { name: 'Oil Change', description: 'Regular oil change for optimal engine performance' },
    { name: 'Brake Service', description: 'Complete brake inspection and maintenance' },
    { name: 'Tire Rotation', description: 'Improve tire lifespan and performance' },
    { name: 'Engine Diagnostics', description: 'Full diagnostics to identify and fix issues' },
];

const ServiceList = () => (
    <div>
        <h2>Our Services</h2>
        <ul>
            {services.map((service, index) => (
                <li key={index}>
                    <h3>{service.name}</h3>
                    <p>{service.description}</p>
                </li>
            ))}
        </ul>
    </div>
);

export default ServiceList;
