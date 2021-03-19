import React from 'react'
import '../assets/css/App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Navbar from '../components/Navbar'
import Formulario from '../components/Formulario';
import '../assets/css/App.css'
import Footer from '../components/Footer'
const App = () => {
  return (
    <div className="bg">
      <Navbar />
      <Formulario />
      <Footer />
    </div>
  )
}

export default App
