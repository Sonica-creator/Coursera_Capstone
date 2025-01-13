import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Nav from './Nav';
import HomePage from './HomePage';  // Create this component next
import BookingPage from './BookingPage';  // Create this component later

function App() {
  return (
    <>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage />} />
      </Routes>
    </>
  );
}

export default App;
