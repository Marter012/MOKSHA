import React from 'react'
import {Routes as ReactDomRoutes, Route} from 'react-router-dom'
import Home from '../pages/Home/Home'
import Products from '../pages/Products/Products'
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'
import InfoMoksha from '../pages/InfoMoksha/infoMoksha'
import PageNotFound from '../pages/PageNotFound/PageNotFound'


const Routes = () => {
  return (
    <ReactDomRoutes>
      
      <Route path='/' element={<Home/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/Register' element={<Register/>}/>
      <Route path='/infoMoksha' element={<InfoMoksha/>}/>

      <Route path='*' element={<PageNotFound />} />
    </ReactDomRoutes>
  )
}

export default Routes
