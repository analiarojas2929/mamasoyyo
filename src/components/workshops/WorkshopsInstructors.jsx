import React from 'react';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';

const WorkshopsInstructors = () => {
  const instructors = [
    {
      id: 1,
      name: "Dra. María González",
      role: "Pediatra y Especialista en Primeros Auxilios",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      description: "Con más de 10 años de experiencia en pediatría y urgencias pediátricas.",
      expertise: ["Primeros Auxilios", "Salud Infantil", "Emergencias"],
      social: {
        linkedin: "https://linkedin.com/maria-gonzalez",
        instagram: "https://instagram.com/dra.mariagonzalez"
      }
    },
    {
      id: 2,
      name: "Lic. Ana Silva",
      role: "Consultora de Lactancia Certificada",
      image: "https://images.unsplash.com/photo-1573497161221-db4c3e4d7998?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      description: "Especialista en lactancia materna y nutrición infantil.",
      expertise: ["Lactancia", "Nutrición", "Desarrollo Infantil"],
      social: {
        linkedin: "https://linkedin.com/ana-silva",
        instagram: "https://instagram.com/lic.anasilva"
      }
    },
    {
      id: 3,
      name: "Ps. Carolina Martínez",
      role: "Psicóloga Perinatal",
      image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      description: "Especializada en acompañamiento emocional durante el embarazo y posparto.",
      expertise: ["Crianza Respetuosa", "Salud Mental", "Vínculo Temprano"],
      social: {
        linkedin: "https://linkedin.com/carolina-martinez",
        instagram: "https://instagram.com/ps.carolinamartinez"
      }
    }
  ];

  return (
    <section className="workshops-instructors-section">
      <div className="instructors-container">
        <h2>Nuestras Instructoras</h2>
        <p className="section-description">
          Expertas dedicadas a acompañarte en tu camino maternal
        </p>

        <div className="instructors-grid">
          {instructors.map(instructor => (
            <div key={instructor.id} className="instructor-card">
              <div className="instructor-image">
                <img 
                  src={instructor.image} 
                  alt={instructor.name} 
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80";
                  }}
                />
              </div>
              <div className="instructor-content">
                <h3>{instructor.name}</h3>
                <span className="instructor-role">{instructor.role}</span>
                <p className="instructor-description">{instructor.description}</p>
                <div className="instructor-expertise">
                  {instructor.expertise.map((exp, index) => (
                    <span key={index} className="expertise-tag">{exp}</span>
                  ))}
                </div>
                <div className="instructor-social">
                  <a href={instructor.social.linkedin} target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                  </a>
                  <a href={instructor.social.instagram} target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkshopsInstructors;