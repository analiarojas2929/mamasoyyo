import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        {/* Aquí irá el resto del contenido */}
      </div>
    </Router>
  )
}

export default App
