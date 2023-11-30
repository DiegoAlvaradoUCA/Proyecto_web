import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Index from './modules/Index'
import Categorias from './modules/Categorias'
import IniciarSesion from './modules/IniciarSesion'
import Registro from './modules/Registro'
import Mas from './modules/Mas'
import Paquetes from './modules/Paquetes'
import Crud from './modules/Crud'


function App() {

  return (
    <>
    <Router>
        <Routes>
          <Route exact path="/" element={<Index/>} /> 
          <Route exact path="/categorias" element={<Categorias/>} /> 
          <Route exact path="/iniciar-sesion" element={<IniciarSesion/>} /> 
          <Route exact path="/registro" element={<Registro/>} /> 
          <Route exact path="/mas" element={<Mas/>} /> 
          <Route exact path="/paquetes" element={<Paquetes/>} /> 
          <Route exact path="/crud" element={<Crud/>} /> 
        </Routes>
      </Router>
    </>
  )
}

export default App
