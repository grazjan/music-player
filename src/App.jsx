
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Home, Artist, Playlist, Search, Login } from './pages'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />}/>
        <Route path="/search" element={<Search />}/>
        <Route path="/playlist/:id" element={<Playlist />}/>
        <Route path="/artist/:id" element={<Artist />}/>
      </Routes>
    </Router>
  )
}

export default App

