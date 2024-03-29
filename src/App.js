import React from 'react'
import Header from './components/Header'
import Home from './components/Home'
import Login from './components/Login'
import Checkout from './components/Checkout'
import Payment from './components/Payment'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Elements} from '@stripe/react-stripe-js';
 
function App() {

 
  return (
    <Router> 
      <Routes>
        <Route
          path='/login'
          element={
            <Login />
          }
        />
        <Route 
          path='/checkout'
          element={
            <div>
              <Header />
              <Checkout />
            </div>
          }
        />
        <Route
          path='/payment'
          element={
            <div>
              <Header />
               
                 <Payment />
               
              
            </div>
             
          }
        />

        <Route
          path= '/'
          element = {
            <div>
              <Header />
              <Home />
            </div>
          }
        />
       </Routes>
    </Router>
      
  );
}

export default App;
