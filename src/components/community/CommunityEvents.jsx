import React, { useState } from 'react';
import { FaCalendar, FaClock, FaMapMarkerAlt, FaUsers, FaHeart } from 'react-icons/fa';

const CommunityEvents = () => {
  const [selectedMonth, setSelectedMonth] = useState('Mayo');

  const events = [
    {
      id: 1,
      title: "Encuentro de Mamás Primerizas",
      date: "15 Mayo, 2024",
      time: "10:00 - 12:00",
      location: "Centro MamáSoyYo",
      category: "Presencial",
      attendees: 25,
      maxAttendees: 30,
      image: "https://images.unsplash.com/photo-1591604021695-0c69b7c05981?auto=format&fit=crop&q=80",
      description: "Un espacio para compartir experiencias y resolver dudas sobre la maternidad."
    },
    {
      id: 2,
      title: "Taller de Masaje Infantil",
      date: "20 Mayo, 2024",
      time: "16:00 - 18:00",
      location: "Online vía Zoom",
      category: "Virtual",
      attendees: 15,
      maxAttendees: 20,
      image: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&q=80",
      description: "Aprende técnicas de masaje para estimular y relajar a tu bebé."
    }
  ];

  return (
    <section className="community-events">
      <div className="events-container">
        <h2>Próximos Eventos</h2>
        <p className="section-description">
          Participa en nuestros eventos y conecta con otras mamás
        </p>

        <div className="events-wrapper">
          <div className="events-sidebar">
            <div className="month-selector">
              <h3>Calendario</h3>
              <ul className="months-list">
                <li className={selectedMonth === 'Mayo' ? 'active' : ''} onClick={() => setSelectedMonth('Mayo')}>Mayo</li>
                <li className={selectedMonth === 'Junio' ? 'active' : ''} onClick={() => setSelectedMonth('Junio')}>Junio</li>
                <li className={selectedMonth === 'Julio' ? 'active' : ''} onClick={() => setSelectedMonth('Julio')}>Julio</li>
              </ul>
            </div>
            
            <div className="event-categories">
              <h3>Categorías</h3>
              <div className="category-tags">
                <span className="category-tag presencial">Presencial</span>
                <span className="category-tag virtual">Virtual</span>
              </div>
            </div>
          </div>

          <div className="events-grid">
            {events.map(event => (
              <div key={event.id} className="event-card">
                <div className="event-image">
                  <img src={event.image} alt={event.title} />
                  <span className={`event-category ${event.category.toLowerCase()}`}>
                    {event.category}
                  </span>
                </div>
                
                <div className="event-content">
                  <h3>{event.title}</h3>
                  <p className="event-description">{event.description}</p>
                  
                  <div className="event-details">
                    <div className="detail">
                      <FaCalendar />
                      <span>{event.date}</span>
                    </div>
                    <div className="detail">
                      <FaClock />
                      <span>{event.time}</span>
                    </div>
                    <div className="detail">
                      <FaMapMarkerAlt />
                      <span>{event.location}</span>
                    </div>
                  </div>

                  <div className="event-footer">
                    <div className="attendees">
                      <FaUsers />
                      <span>{event.attendees}/{event.maxAttendees} asistentes</span>
                    </div>
                    <button className="register-button">
                      <FaHeart /> Registrarme
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityEvents;