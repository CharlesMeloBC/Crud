import './App.css'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

import Footer from '../components/template/Footer'
import Nav from '../components/template/Nav'
import Logo from '../components/template/Logo'
import Home from '../components/home/Home'


function App (props) {
  return <div className="app">
    <Footer />
    <Nav />
    <Logo />
    <Home /> 
  </div>
}

export default App