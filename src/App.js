import React from 'react'
import Header from './Header'
import Home from './Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';

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
                <Route
            path="/Checkout"
            element={
              <>
                <Header />
                <Checkout/>
              </>
            }
          />
          <Route
          path='/Login'
          element={
            <>
            <Login/>
            </>
          }
          />

        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App