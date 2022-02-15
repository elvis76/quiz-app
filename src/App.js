import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

import HomePage from './pages/HomePage'
import QuizPage from './pages/QuizPage'
import CreateQuizPage from './pages/CreateQuizPage'
import NotFoundPage from './pages/NotFoundPage'

import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/quiz' element={<QuizPage />} />
        <Route path='/create' element={<CreateQuizPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
