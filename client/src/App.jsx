import React from 'react'
import "./App.css";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import HomePage from  './pages/HomePage'
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/login' element={<LoginPage/>}></Route>
        <Route path='/register' element={<RegisterPage/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
