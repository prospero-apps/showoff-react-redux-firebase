import React, { useState } from 'react'
import './style.css'
import Header from './components/Header'
import HomePage from './components/HomePage'
import LoginPage from './components/LoginPage'
import AddItemPage from './components/AddItemPage'
import ItemDetailsPage from './components/ItemDetailsPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {
  const [isAuth, setIsAuth] = useState(false)

  return (
    <Router>
      <div className="App">
        <Header isAuth={isAuth} setIsAuth={setIsAuth} />
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/login' element={<LoginPage setIsAuth={setIsAuth} />} />
          <Route path='/additem' element={<AddItemPage isAuth={isAuth} />} />
          <Route path='/showcase/:id' element={<ItemDetailsPage/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
