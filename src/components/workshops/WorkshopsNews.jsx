import React from 'react';
import { FaCalendar, FaArrowRight } from 'react-icons/fa';

const WorkshopsNews = () => {
  const news = [
    {
      id: 1,
      title: "Nuevo Taller de Masaje Infantil",
      date: "10 Mayo, 2024",
      image: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&q=80",
      description: "Aprende técnicas de masaje para estimular y relajar a tu bebé.",
      category: "Próximos Talleres"
    },
    {
      id: 2,
      title: "Tips para Primeros Auxilios",
      date: "15 Mayo, 2024",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80",
      description: "Blog post con consejos esenciales de primeros auxilios para bebés.",
      category: "Blog"
    },
    {
      id: 3,
      title: "Guía de Lactancia Gratuita",
      date: "20 Mayo, 2024",
      image: "https://images.unsplash.com/photo-1621349833587-31c049601514?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Descarga nuestra nueva guía completa de lactancia materna.",
      category: "Recursos"
    }
  ];

  return (
    <section className="workshops-news-section">
      <div className="news-container">
        <h2>Últimas Novedades</h2>
        <p className="section-description">
          Mantente al día con nuestras últimas noticias y recursos
        </p>

        <div className="news-grid">
          {news.map(item => (
            <div key={item.id} className="news-card">
              <div className="news-image">
                <img src={item.image} alt={item.title} />
                <span className="news-category">{item.category}</span>
              </div>
              <div className="news-content">
                <div className="news-date">
                  <FaCalendar />
                  <span>{item.date}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <button className="news-button">
                  Leer más <FaArrowRight />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkshopsNews;