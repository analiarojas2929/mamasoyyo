import React, { useState } from 'react';
import { FaUsers, FaComments, FaHeart, FaSearch, FaFilter } from 'react-icons/fa';

const CommunityForums = () => {
  const [activeCategory, setActiveCategory] = useState('todos');

  const categories = [
    { id: 'todos', name: 'Todos los Foros' },
    { id: 'lactancia', name: 'Lactancia' },
    { id: 'crianza', name: 'Crianza' },
    { id: 'salud', name: 'Salud' },
    { id: 'desarrollo', name: 'Desarrollo' }
  ];

  const forums = [
    {
      id: 1,
      title: "Dudas sobre Lactancia",
      category: "lactancia",
      description: "Espacio para compartir experiencias y resolver dudas sobre lactancia materna.",
      members: 450,
      posts: 1200,
      lastActivity: "Hace 5 minutos",
      image: "https://images.unsplash.com/photo-1590649613797-17c50f29c958?auto=format&fit=crop&q=80"
    },
    {
      id: 2,
      title: "Crianza Respetuosa",
      category: "crianza",
      description: "Compartimos tips y experiencias sobre crianza respetuosa y consciente.",
      members: 380,
      posts: 890,
      lastActivity: "Hace 15 minutos",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80"
    },
    {
      id: 3,
      title: "Salud del Bebé",
      category: "salud",
      description: "Consultas y consejos sobre la salud de nuestros bebés.",
      members: 520,
      posts: 1500,
      lastActivity: "Hace 1 hora",
      image: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&q=80"
    }
  ];

  const filteredForums = activeCategory === 'todos' 
    ? forums 
    : forums.filter(forum => forum.category === activeCategory);

  return (
    <section className="community-forums">
      <div className="forums-container">
        <h2>Foros de Discusión</h2>
        <p className="section-description">
          Únete a las conversaciones y comparte tus experiencias con otras madres
        </p>

        <div className="forums-header">
          <div className="search-bar">
            <FaSearch className="search-icon" />
            <input 
              type="text" 
              placeholder="Buscar en los foros..."
              className="search-input"
            />
          </div>

          <div className="categories-filter">
            {categories.map(category => (
              <button
                key={category.id}
                className={`category-button ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                <FaFilter className="filter-icon" />
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <div className="forums-grid">
          {filteredForums.map(forum => (
            <div key={forum.id} className="forum-card">
              <div className="forum-image">
                <img src={forum.image} alt={forum.title} />
              </div>
              <div className="forum-content">
                <h3>{forum.title}</h3>
                <p>{forum.description}</p>
                <div className="forum-stats">
                  <div className="stat">
                    <FaUsers />
                    <span>{forum.members} miembros</span>
                  </div>
                  <div className="stat">
                    <FaComments />
                    <span>{forum.posts} posts</span>
                  </div>
                </div>
                <div className="forum-footer">
                  <span className="last-activity">{forum.lastActivity}</span>
                  <button className="join-button">
                    <FaHeart /> Unirme
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityForums;