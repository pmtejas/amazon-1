import React, { useEffect } from "react";
import './App.css'
import Header from './Header'
import Home from './Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Login';
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

function App() {
  //eslint-disable-next-line
  const [{}, dispatch] = useStateValue();
  useEffect(()=>{
    auth.onAuthStateChanged((authuser)=>{
      console.log("THE USER IS >>>>",authuser);
      if (authuser) {
        dispatch({
          type: "SET_USER",
          user: authuser,
        })
      } else {
        dispatch({
          type:"SET_USER",
          user:null,
        })
        
      }
    })
    //eslint-disable-next-line
  },[]);
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
            path="/login"
            element={
              <>
                <Login />
              </>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App