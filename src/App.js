import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import WorkshopsPage from './pages/WorkshopsPage';
import CommunityPage from './pages/CommunityPage';
import ContactPage from './pages/ContactPage';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/servicios" element={<ServicesPage />} />
          <Route path="/talleres" element={<WorkshopsPage />} />
          <Route path="/comunidad" element={<CommunityPage />} />
          <Route path="/contacto" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
