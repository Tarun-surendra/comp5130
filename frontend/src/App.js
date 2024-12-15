// client/src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import BookAppointment from './components/BookAppointment';
import Reviews from './pages/Reviews';
import RequestQuotePage from './pages/RequestQuote';
import Login from './Login';
import Register from './components/RegisterUser';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/user" element={<Register />} />
      <Route path="/home" element={<Home />} />
      {/* <Route path="/services" element={<Services />} /> */}
      <Route path="/book" element={<BookAppointment />} />
      <Route path="/reviews" element={<Reviews />} />
      <Route path="/request-quote" element={<RequestQuotePage />} />
    </Routes>
  </Router>
);

export default App;



