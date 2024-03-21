import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';

import Html from '../pages/One';
import Css from '../pages/Two';
import Js from '../pages/Three';
import ReactJs from '../pages/Four';
import Headless from '../pages/Five';

const router = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to ='html'/>}/>
      <Route path='html' element={<Html/>}/>
      <Route path='css' element={<Css/>}/>
      <Route path='javascript' element={<Js/>}/>
      <Route path='reactjs' element={<ReactJs/>}/>
      <Route path='headless' element={<Headless/>}/>
    </Routes>
  )
}

export default router