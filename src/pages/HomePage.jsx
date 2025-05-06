import React from 'react';
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import Testimonials from '../components/home/Testimonials';
import CallToAction from '../components/home/CallToAction';
import Services from '../components/home/Services';
import WhyUs from '../components/home/WhyUs';
import Experts from '../components/home/Experts';
import Blog from '../components/home/Blog';
import FAQ from '../components/home/FAQ';
import './HomePage.css';

const HomePage = () => {
  return (
    <main className="home-page">
      <Hero />
      <Features />
      <WhyUs />
      <Services />
      <Experts />
      <Testimonials />
      <Blog />
      <FAQ />
      <CallToAction />
    </main>
  );
};

export default HomePage;