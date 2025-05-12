import React, { useState, useEffect } from "react";
import {
  FaQuoteLeft,
  FaHeart,
  FaComment,
  FaShare,
  FaChevronLeft,
  FaChevronRight,
  FaUserCircle  
} from "react-icons/fa";

const CommunityStories = () => {
  const [currentStory, setCurrentStory] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  
  // Detectar si es dispositivo móvil
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const stories = [
    {
      id: 1,
      author: "Ana María González",
      title: "Mi Viaje en la Lactancia",
      content:
        "Cuando comencé mi viaje de lactancia, todo parecía un desafío. Gracias al apoyo de esta comunidad, encontré la fuerza para perseverar. Los primeros días fueron complicados con dolor y dudas constantes, pero poco a poco fuimos encontrando nuestro ritmo juntas. El apoyo de otras mamás me dio la confianza para seguir adelante.",
      image:
        "https://images.unsplash.com/photo-1621349833587-31c049601514?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      likes: 245,
      comments: 32,
      date: "Mayo 5, 2024",
    },
    {
      id: 2,
      author: "Laura Pérez",
      title: "Superando los Primeros Meses",
      content:
        "Los primeros meses como mamá primeriza fueron abrumadores, pero aquí encontré un espacio seguro para compartir mis miedos. Las noches sin dormir parecían eternas, pero los consejos de otras madres me ayudaron a establecer rutinas que funcionaron para mi bebé y para mí.",
      image:
        "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&q=80",
      likes: 189,
      comments: 28,
      date: "Mayo 8, 2024",
    },
  ];

  const nextStory = () => {
    setCurrentStory((prev) => (prev + 1) % stories.length);
  };
  
  const prevStory = () => {
    setCurrentStory((prev) => (prev - 1 + stories.length) % stories.length);
  };

  return (
    <section className="community-stories">
      <div className="stories-container">
        <h2>Historias que Inspiran</h2>
        <p className="section-description">
          Descubre experiencias reales de madres de nuestra comunidad
        </p>
        
        <div className="stories-slider">
          <button 
            className="slider-button prev" 
            onClick={prevStory}
            aria-label="Historia anterior"
          >
            <FaChevronLeft />
          </button>
          
          <div className={`stories-wrapper ${isMobile ? 'mobile-view' : ''}`}>
            {stories.map((story, index) => (
              <div
                key={story.id}
                className={`story-card ${index === currentStory ? "active" : ""}`}
                style={{
                  transform: isMobile ? 'none' : `translateX(${(index - currentStory) * 100}%)`,
                  display: isMobile && index !== currentStory ? 'none' : 'flex',
                  position: isMobile ? 'relative' : 'absolute'
                }}
              >
                <div className="story-image">
                  <img 
                    src={story.image} 
                    alt={story.title}
                    loading="lazy"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1584348582080-0214699a3e34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80";
                    }}
                  />
                </div>
                
                <div className="story-content">
                  <div className="quote-icon">
                    <FaQuoteLeft />
                  </div>
                  
                  <h3>{story.title}</h3>
                  
                  <p className="story-text">{story.content}</p>
                  
                  <div className="author-info">
                    <FaUserCircle className="author-avatar-icon" />
                    <div className="author-details">
                      <span className="author-name">{story.author}</span>
                      <span className="story-date">{story.date}</span>
                    </div>
                  </div>
                  
                  <div className="story-interactions">
                    <button className="interaction-button">
                      <FaHeart /> <span>{story.likes}</span>
                    </button>
                    <button className="interaction-button">
                      <FaComment /> <span>{story.comments}</span>
                    </button>
                    <button className="interaction-button">
                      <FaShare /> <span className="share-text">Compartir</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <button 
            className="slider-button next" 
            onClick={nextStory}
            aria-label="Siguiente historia"
          >
            <FaChevronRight />
          </button>
        </div>
        
        <div className="stories-dots">
          {stories.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentStory ? "active" : ""}`}
              onClick={() => setCurrentStory(index)}
              aria-label={`Ver historia ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityStories;
