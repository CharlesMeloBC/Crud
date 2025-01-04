import React from 'react'
import {Routes, Route} from 'react-router'

import Home from '../components/home/Home'
import Usuario from '../components/user/Usuario'

function Router (props){
    return(
        <Routes>
            <Route exact path='/' element={<Home />}/>
            <Route path='/users' element={<Usuario />} />
            <Route path='/*' element={<Home />} />
        </Routes>
    )
}

export default Router