import React, { useState } from 'react';
import { FaCalendar, FaClock, FaUsers, FaCheckCircle, FaFilter } from 'react-icons/fa';

const WorkshopsList = () => {
  const [filter, setFilter] = useState('todos');
  
  const categories = [
    { id: 'todos', name: 'Todos' },
    { id: 'primeros-auxilios', name: 'Primeros Auxilios' },
    { id: 'lactancia', name: 'Lactancia' },
    { id: 'estimulacion', name: 'Estimulación' }
  ];

  const workshops = [
    {
      id: 1,
      title: "Primeros Auxilios para Bebés",
      description: "Aprende técnicas esenciales para actuar en situaciones de emergencia con tu bebé.",
      duration: "4 horas",
      capacity: "15 personas",
      nextDate: "15 de Mayo, 2024",
      includes: [
        "Material didáctico",
        "Certificado",
        "Prácticas supervisadas",
        "Seguimiento post-taller"
      ],
      image: "https://images.unsplash.com/photo-1591474200742-8e512e6f98f8?auto=format&fit=crop&q=80",
      category: "primeros-auxilios"
    },
    {
      id: 2,
      title: "Lactancia Materna",
      description: "Todo lo que necesitas saber sobre una lactancia exitosa y placentera.",
      duration: "3 horas",
      capacity: "12 personas",
      nextDate: "20 de Mayo, 2024",
      includes: [
        "Guía completa",
        "Asesoría personalizada",
        "Comunidad de apoyo",
        "Recursos digitales"
      ],
      image: "https://images.unsplash.com/photo-1621349833587-31c049601514?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "lactancia"
    },
    {
      id: 3,
      title: "Estimulación Temprana",
      description: "Actividades y ejercicios para potenciar el desarrollo de tu bebé.",
      duration: "2 horas",
      capacity: "10 personas",
      nextDate: "25 de Mayo, 2024",
      includes: [
        "Kit de materiales",
        "Plan de actividades",
        "Seguimiento semanal",
        "Videos tutoriales"
      ],
      image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&q=80",
      category: "estimulacion"
    }
  ];

  const filteredWorkshops = filter === 'todos' 
    ? workshops 
    : workshops.filter(w => w.category === filter);

  return (
    <section className="workshops-list-section">
      <div className="workshops-container">
        <h2>Talleres Disponibles</h2>
        <p className="section-description">
          Diseñados por expertos para acompañarte en tu camino maternal
        </p>
        
        <div className="filters-container">
          {categories.map(cat => (
            <button 
              key={cat.id}
              className={`filter-button ${filter === cat.id ? 'active' : ''}`}
              onClick={() => setFilter(cat.id)}
            >
              <FaFilter />
              {cat.name}
            </button>
          ))}
        </div>

        <div className="workshops-grid">
          {filteredWorkshops.map(workshop => (
            <div key={workshop.id} className="workshop-card">
              <div className="workshop-image">
                <img src={workshop.image} alt={workshop.title} />
              </div>
              <div className="workshop-content">
                <h3>{workshop.title}</h3>
                <p className="workshop-description">{workshop.description}</p>
                <div className="workshop-details">
                  <div className="detail">
                    <FaClock />
                    <span>{workshop.duration}</span>
                  </div>
                  <div className="detail">
                    <FaUsers />
                    <span>{workshop.capacity}</span>
                  </div>
                  <div className="detail">
                    <FaCalendar />
                    <span>{workshop.nextDate}</span>
                  </div>
                </div>
                <div className="workshop-includes">
                  <h4>Incluye:</h4>
                  <ul>
                    {workshop.includes.map((item, index) => (
                      <li key={index}>
                        <FaCheckCircle />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="register-button">Inscribirme</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkshopsList;