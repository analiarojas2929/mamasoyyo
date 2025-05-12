import React from 'react';
import { FaUsers, FaCalendar, FaStar, FaArrowRight } from 'react-icons/fa';

const CommunityGroups = () => {
  const groups = [
    {
      id: 1,
      title: "Mamás Primerizas",
      description: "Grupo de apoyo para madres que están comenzando su viaje maternal.",
      members: 120,
      meetingSchedule: "Todos los martes",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1584467541268-b040f83be3fd?auto=format&fit=crop&q=80",
      tags: ["Experiencias", "Apoyo", "Aprendizaje"]
    },
    {
      id: 2,
      title: "Lactancia y Crianza",
      description: "Apoyo y consejos sobre lactancia materna y crianza respetuosa.",
      members: 85,
      meetingSchedule: "Jueves alternos",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1606663718835-d0ce36a44218?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["Lactancia", "Crianza", "Consejos"]
    },
    {
      id: 3,
      title: "Desarrollo Infantil",
      description: "Comparte y aprende sobre las etapas de desarrollo de tu bebé.",
      members: 95,
      meetingSchedule: "Lunes y miércoles",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80",
      tags: ["Desarrollo", "Estimulación", "Juegos"]
    }
  ];

  return (
    <section className="community-groups">
      <div className="groups-container">
        <h2>Grupos de Apoyo</h2>
        <p className="section-description">
          Encuentra tu grupo de apoyo y conéctate con otras madres que comparten tus experiencias
        </p>

        <div className="groups-grid">
          {groups.map(group => (
            <div key={group.id} className="group-card">
              <div className="group-image">
                <img src={group.image} alt={group.title} />
                <div className="group-tags">
                  {group.tags.map((tag, index) => (
                    <span key={index} className="group-tag">{tag}</span>
                  ))}
                </div>
              </div>
              
              <div className="group-content">
                <h3>{group.title}</h3>
                <p className="group-description">{group.description}</p>
                
                <div className="group-stats">
                  <div className="stat">
                    <FaUsers />
                    <span>{group.members} miembros</span>
                  </div>
                  <div className="stat">
                    <FaCalendar />
                    <span>{group.meetingSchedule}</span>
                  </div>
                  <div className="stat">
                    <FaStar />
                    <span>{group.rating}/5.0</span>
                  </div>
                </div>

                <button className="join-group-button">
                  Unirme al grupo <FaArrowRight />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityGroups;