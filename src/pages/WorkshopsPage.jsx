import React from 'react';
import '../styles/Workshops.css';
import WorkshopsHero from '../components/workshops/WorkshopsHero';
import WorkshopsList from '../components/workshops/WorkshopsList';
import WorkshopsCalendar from '../components/workshops/WorkshopsCalendar';
import WorkshopsTestimonials from '../components/workshops/WorkshopsTestimonials';
import WorkshopsFAQ from '../components/workshops/WorkshopsFAQ';
import WorkshopsInstructors from '../components/workshops/WorkshopsInstructors';
import WorkshopsNews from '../components/workshops/WorkshopsNews';
import WorkshopsRegistration from '../components/workshops/WorkshopsRegistration';

const WorkshopsPage = () => {
  return (
    <main className="workshops-page">
      <WorkshopsHero />
      <WorkshopsList />
      <WorkshopsCalendar />
      <WorkshopsInstructors />
      <WorkshopsTestimonials />
      <WorkshopsFAQ />
      <WorkshopsNews />
      <WorkshopsRegistration />
    </main>
  );
};

export default WorkshopsPage;