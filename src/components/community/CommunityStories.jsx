import React, { useState } from "react";
import {
  FaQuoteLeft,
  FaHeart,
  FaComment,
  FaShare,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
const CommunityStories = () => {
  const [currentStory, setCurrentStory] = useState(0);
  const stories = [
    {
      id: 1,
      author: "Ana María González",
      title: "Mi Viaje en la Lactancia",
      content:
        "Cuando comencé mi viaje de lactancia, todo parecía un desafío. Gracias al apoyo de esta comunidad, encontré la fuerza para perseverar...",
      image:
        "https://images.unsplash.com/photo-1590649613797-17c50f29c958?auto=format&fit=crop&q=80",
      avatar: "/images/avatars/ana.jpg",
      likes: 245,
      comments: 32,
      date: "Mayo 5, 2024",
    },
    {
      id: 2,
      author: "Laura Pérez",
      title: "Superando los Primeros Meses",
      content:
        "Los primeros meses como mamá primeriza fueron abrumadores, pero aquí encontré un espacio seguro para compartir mis miedos...",
      image:
        "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&q=80",
      avatar: "/images/avatars/laura.jpg",
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
      {" "}
      <div className="stories-container">
        {" "}
        <h2>Historias que Inspiran</h2>{" "}
        <p className="section-description">
          {" "}
          Descubre experiencias reales de madres de nuestra comunidad{" "}
        </p>{" "}
        <div className="stories-slider">
          {" "}
          <button className="slider-button prev" onClick={prevStory}>
            {" "}
            <FaChevronLeft />{" "}
          </button>{" "}
          <div className="stories-wrapper">
            {" "}
            {stories.map((story, index) => (
              <div
                key={story.id}
                className={`story-card ${
                  index === currentStory ? "active" : ""
                }`}
                style={{
                  transform: `translateX(${(index - currentStory) * 100}%)`,
                }}
              >
                {" "}
                <div className="story-image">
                  {" "}
                  <img src={story.image} alt={story.title} />{" "}
                </div>{" "}
                <div className="story-content">
                  {" "}
                  <div className="quote-icon">
                    {" "}
                    <FaQuoteLeft />{" "}
                  </div>{" "}
                  <h3>{story.title}</h3>{" "}
                  <p className="story-text">{story.content}</p>{" "}
                  <div className="author-info">
                    {" "}
                    <img
                      src={story.avatar}
                      alt={story.author}
                      className="author-avatar"
                    />{" "}
                    <div className="author-details">
                      {" "}
                      <span className="author-name">{story.author}</span>{" "}
                      <span className="story-date">{story.date}</span>{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="story-interactions">
                    {" "}
                    <button className="interaction-button">
                      {" "}
                      <FaHeart /> <span>{story.likes}</span>{" "}
                    </button>{" "}
                    <button className="interaction-button">
                      {" "}
                      <FaComment /> <span>{story.comments}</span>{" "}
                    </button>{" "}
                    <button className="interaction-button">
                      {" "}
                      <FaShare /> <span>Compartir</span>{" "}
                    </button>{" "}
                  </div>{" "}
                </div>{" "}
              </div>
            ))}{" "}
          </div>{" "}
          <button className="slider-button next" onClick={nextStory}>
            {" "}
            <FaChevronRight />{" "}
          </button>{" "}
        </div>{" "}
        <div className="stories-dots">
          {" "}
          {stories.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentStory ? "active" : ""}`}
              onClick={() => setCurrentStory(index)}
            />
          ))}{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
};
export default CommunityStories;
