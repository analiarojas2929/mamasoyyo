import React from 'react';
import './Blog.css';

const Blog = () => {
  const posts = [
    {
      title: "Autocuidado en la Maternidad",
      excerpt: "Descubre 5 prácticas esenciales para mantener tu bienestar emocional durante la crianza",
      image: require("../../assets/img/post1.jpg"),
      date: "Mayo 2024",
      category: "Bienestar"
    },
    {
      title: "Equilibrio Trabajo y Maternidad",
      excerpt: "Guía práctica para madres que buscan balancear su vida profesional y familiar",
      image: require("../../assets/img/post2.jpg"),
      date: "Mayo 2024",
      category: "Desarrollo Personal"
    },
    {
      title: "Mindfulness para Mamás",
      excerpt: "Técnicas de mindfulness adaptadas a la rutina diaria de una madre",
      image: require("../../assets/img/post3.jpg"),
      date: "Mayo 2024",
      category: "Mindfulness"
    }
  ];

  return (
    <section className="blog">
      <h2>Blog MamáSoyYo</h2>
      <p className="section-subtitle">Recursos y consejos para tu bienestar</p>
      <div className="blog-grid">
        {posts.map((post, index) => (
          <article key={index} className="blog-card">
            <div className="blog-image">
              <img src={post.image} alt={post.title} />
              <span className="blog-category">{post.category}</span>
            </div>
            <div className="blog-content">
              <span className="blog-date">{post.date}</span>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <a href="#" className="blog-link">Leer más →</a>
            </div>
          </article>
        ))}
      </div>
      <div className="blog-cta">
        <button className="blog-button">Ver todos los artículos</button>
      </div>
    </section>
  );
};

export default Blog;