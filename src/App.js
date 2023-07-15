import React from 'react'
import Header from './Header'
import Home from './Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />

        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App