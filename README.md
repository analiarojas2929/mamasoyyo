# 🌿 Bienestar Integral - Plataforma de Apoyo y Comunidad

Plataforma web desarrollada con React para brindar **apoyo emocional, recursos, talleres y servicios profesionales** enfocados en el bienestar integral, especialmente dirigido a **madres, profesionales de la salud mental, y aliados**.

## 🚀 Tecnologías utilizadas

- ⚛️ React + Vite
- 📦 React Router DOM
- 🎨 Tailwind CSS / SCSS
- 🔐 Firebase Auth / JWT (según implementación)
- 📅 FullCalendar para agenda
- 💬 Jitsi / Zoom API para sesiones virtuales
- 🛒 WebPay / MercadoPago para pagos
- 📈 Chart.js / Recharts para analíticas (admin)

---

## 📂 Estructura del proyecto

```bash
src/
├── assets/             # Imágenes, íconos, etc.
├── components/         # Componentes reutilizables
├── context/            # Autenticación, temas, etc.
├── hooks/              # Custom hooks
├── layouts/            # Layouts base (admin, público)
├── pages/              # Módulos por funcionalidad
│   ├── Auth/
│   ├── Profile/
│   ├── Content/
│   ├── Services/
│   ├── Community/
│   ├── Workshops/
│   ├── Store/
│   └── Admin/
├── routes/             # Rutas protegidas y públicas
├── services/           # Lógica API
├── styles/             # Estilos globales
└── main.jsx            # Entrada principal

#📌 Funcionalidades principales
1. Autenticación y Registro
Registro de nuevas usuarias: madres, profesionales, aliados.

Inicio de sesión seguro.

Recuperación y cambio de contraseña.

Validación de correo electrónico.

Login con redes sociales (opcional).

2. Perfil de Usuario
Creación y edición del perfil personal.

Selección de intereses.

Configuración de notificaciones.

Historial de actividades o consultas.

3. Contenido y Recursos
Artículos, videos y podcasts sobre salud mental, autocuidado, crianza.

Buscador por temas y filtros.

Favoritos y recursos guardados.

4. Servicios Profesionales
Agenda de sesiones con psicólogas, terapeutas o coaches.

Calendario en tiempo real.

Videollamadas integradas (Zoom / Jitsi).

Evaluaciones y comentarios.

5. Comunidad
Foros temáticos (anónimos o con usuario).

Grupos de apoyo por etapa o interés.

Moderación de contenido.

6. Talleres y Actividades
Calendario de eventos.

Inscripción y pagos.

Recordatorios automáticos y certificados.

7. E-commerce
Venta de productos (kits, libros, cosmética natural).

Carrito, pagos en línea y seguimiento de pedidos.

8. Módulo Administrativo
Panel de gestión de usuarias y profesionales.

Administración de contenido, pagos y estadísticas.

#🛠️ Instalación local
bash
Copiar
Editar
# 1. Clona el repositorio
git clone https://analiarojas2906@dev.azure.com/analiarojas2906/MamaSoyYo/_git/MamaSoyYo

# 2. Entra al proyecto
cd mamasoyyo

# 3. Instala dependencias
npm install

# 4. Ejecuta en modo desarrollo
npm start

📄 Licencia
Este proyecto está bajo la MIT License.

✨ Autor/a
Desarrollado por Analia Rojas y Damaris Tapia
📧 mamasoyyovregion@gmail.com
🌐 tuweb.com