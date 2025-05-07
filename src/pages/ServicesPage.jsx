import React from 'react';
import '../styles/Services.css';
import ServicesHero from '../components/services/ServicesHero';
import ServicesList from '../components/services/ServicesList';
import Benefits from '../components/services/Benefits';
import FAQ from '../components/services/FAQ';
import Booking from '../components/services/Booking';

const ServicesPage = () => {
  return (
    <main className="services-page">
      <ServicesHero />
      <ServicesList />
      <Benefits />
      <FAQ />
      <Booking />
    </main>
  );
};

export default ServicesPage;