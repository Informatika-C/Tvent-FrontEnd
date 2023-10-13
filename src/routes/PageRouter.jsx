import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Events from '../pages/Events';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} end />
      <Route path="/about" element={<About />} />
      <Route path="/events" element={<Events />} />
    </Routes>
  );
};

export default AppRouter;
