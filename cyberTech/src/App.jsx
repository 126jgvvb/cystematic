import { useState } from 'react'
import './App.css';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import {BrowserRouter,Routes,Route} from "react-router-dom";


function App() {

  return (
    <>
  <BrowserRouter>
  <Routes>
    <Route index  element={<Home/>} />
    <Route  element={<NotFound/>} />
    <Route path='*'  element={<NotFound/>} />
  </Routes>
  </BrowserRouter>
    </>
  )
}

export default App
