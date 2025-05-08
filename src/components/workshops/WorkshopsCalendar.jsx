import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { 
  FaCalendar, 
  FaClock, 
  FaMapMarkerAlt, 
  FaCheck, 
  FaPlayCircle,
  FaHourglassHalf 
} from 'react-icons/fa';
import 'react-calendar/dist/Calendar.css';

const WorkshopsCalendar = () => {
  const [reservations, setReservations] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [activeTab, setActiveTab] = useState('activos');

  const workshops = {
    activos: [
      {
        id: 1,
        title: "Primeros Auxilios para Bebés",
        date: "15 Mayo, 2024",
        time: "09:00 - 13:00",
        location: "Centro MamáSoyYo",
        spots: "5 cupos disponibles",
        status: "En curso",
        price: "$45.000",
        instructor: "Dra. María González",
        categoria: "Salud y Seguridad"
      },
      // ...más talleres activos
    ],
    proximos: [
      {
        id: 2,
        title: "Lactancia Materna",
        date: "20 Mayo, 2024",
        time: "15:00 - 18:00",
        location: "Online vía Zoom",
        spots: "8 cupos disponibles",
        status: "Inscripciones abiertas",
        price: "$35.000",
        instructor: "Lic. Ana Silva",
        categoria: "Nutrición"
      },
      // ...más talleres próximos
    ]
  };

  const handleReservation = (workshopId) => {
    if (reservations.includes(workshopId)) {
      setReservations(reservations.filter(id => id !== workshopId));
    } else {
      setReservations([...reservations, workshopId]);
    }
  };

  // Convertir fechas de string a objetos Date
  const workshopDates = Object.values(workshops).flat().map(workshop => {
    // Mejoramos el parsing de la fecha para hacerlo más robusto
    try {
      const dateString = workshop.date;
      const dateParts = dateString.split(' ');
      const day = parseInt(dateParts[0]); // Extraemos solo el número
      const month = dateParts[1].replace(',', ''); // Quitamos la coma del mes
      const year = parseInt(dateParts[2]);
      
      // Mapa de meses en español a su índice (0-11)
      const monthMap = {
        'Enero': 0, 'Febrero': 1, 'Marzo': 2, 'Abril': 3,
        'Mayo': 4, 'Junio': 5, 'Julio': 6, 'Agosto': 7,
        'Septiembre': 8, 'Octubre': 9, 'Noviembre': 10, 'Diciembre': 11
      };
      
      return new Date(year, monthMap[month], day);
    } catch (error) {
      console.error('Error parsing date:', workshop.date);
      return new Date(); // Fecha predeterminada en caso de error
    }
  });

  // Función para resaltar fechas con talleres
  const tileContent = ({ date, view }) => {
    if (view === 'month') {
      const hasWorkshop = workshopDates.some(workshopDate => 
        workshopDate.getDate() === date.getDate() &&
        workshopDate.getMonth() === date.getMonth()
      );
      return hasWorkshop ? <div className="workshop-dot"></div> : null;
    }
  };

  return (
    <section className="workshops-calendar-section">
      <div className="calendar-container">
        <h2>Calendario de Talleres</h2>
        <p className="section-description">
          Explora y reserva nuestros talleres disponibles
        </p>

        <div className="workshops-tabs">
          <button 
            className={`tab-button ${activeTab === 'activos' ? 'active' : ''}`}
            onClick={() => setActiveTab('activos')}
          >
            <FaPlayCircle /> Talleres Activos
          </button>
          <button 
            className={`tab-button ${activeTab === 'proximos' ? 'active' : ''}`}
            onClick={() => setActiveTab('proximos')}
          >
            <FaHourglassHalf /> Próximos Talleres
          </button>
        </div>
        
        <div className="calendar-layout">
          <div className="calendar-sidebar">
            <div className="calendar-wrapper">
              <Calendar 
                onChange={setSelectedDate}
                value={selectedDate}
                tileContent={tileContent}
                locale="es-ES"
                className="custom-calendar"
              />
            </div>
            <div className="calendar-legend">
              <div className="legend-item">
                <span className="legend-dot active"></span>
                <span>Talleres Activos</span>
              </div>
              <div className="legend-item">
                <span className="legend-dot upcoming"></span>
                <span>Próximos Talleres </span>
              </div>
            </div>
          </div>

          <div className="workshops-content">
            <div className="selected-date-header">
              <div className="date-box">
                <span className="date-day">
                  {selectedDate.getDate()}
                </span>
                <span className="date-month">
                  {selectedDate.toLocaleDateString('es-ES', { month: 'long' })}
                </span>
                <span className="date-year">
                  {selectedDate.getFullYear()}
                </span>
              </div>
              <div className="date-info">
                <h3>{activeTab === 'activos' ? 'Talleres en Curso' : 'Próximos Talleres'}</h3>
                <span className="date-workshops-count">
                  {workshops[activeTab].length} talleres encontrados
                </span>
              </div>
            </div>

            <div className="workshops-grid">
              {workshops[activeTab].map(workshop => (
                <div key={workshop.id} 
                    className={`workshop-card ${reservations.includes(workshop.id) ? 'reserved' : ''}`}>
                  <div className="workshop-header">
                    <span className="workshop-category">{workshop.categoria}</span>
                    <h4>{workshop.title}</h4>
                    <span className="workshop-price">{workshop.price}</span>
                  </div>
                  
                  <div className="workshop-info">
                    <div className="info-item">
                      <FaCalendar />
                      <div>
                        <strong> Fecha</strong>
                        <span>{workshop.date}</span>
                      </div>
                    </div>
                    <div className="info-item">
                      <FaClock />
                      <div>
                        <strong>Horario</strong>
                        <span>{workshop.time}</span>
                      </div>
                    </div>
                    <div className="info-item">
                      <FaMapMarkerAlt />
                      <div>
                        <strong>Ubicación</strong>
                        <span>{workshop.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="workshop-footer">
                    <div className="workshop-instructor">
                      <img src={`/images/instructors/${workshop.id}.jpg`} alt={workshop.instructor} />
                      <div>
                        <strong>Instructor</strong>
                        <span>{workshop.instructor}</span>
                      </div>
                    </div>
                    <button 
                      className={`reserve-button ${reservations.includes(workshop.id) ? 'reserved' : ''}`}
                      onClick={() => handleReservation(workshop.id)}
                    >
                      {reservations.includes(workshop.id) ? (
                        <>
                          <FaCheck /> Reservado
                        </>
                      ) : (
                        'Reservar Cupo'
                      )}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkshopsCalendar;