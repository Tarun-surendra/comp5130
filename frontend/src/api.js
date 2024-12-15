import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const api = axios.create({
    baseURL: API_URL,
});

export const bookAppointment = (data) => api.post('/appointments/book', data);
export const fetchAppointments = () => api.get('/appointments');
export const registerUser = (data) => api.post('/users/register', data);
export const getUser = () => api.get('/users');

