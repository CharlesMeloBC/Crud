import './App.css'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

import { BrowserRouter } from 'react-router-dom'

import Footer from '../components/template/Footer'
import Nav from '../components/template/Nav'
import Logo from '../components/template/Logo'
import Router from './Routes'



function App (props) {
  return(
      <BrowserRouter>
          <div className="app">
            <Logo />
            <Nav />
            <Router />
            <Footer />
          </div>
      </BrowserRouter>
)
}

export default App