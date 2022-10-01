import React from 'react'
import '../style.css'
import { Link } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase.config.js'
import { useNavigate } from 'react-router-dom'

const Header = ({ isAuth, setIsAuth }) => {
  let navigate = useNavigate()

  const logOut = () => {
    signOut(auth).then(() => {
      localStorage.clear()
      setIsAuth(false)
      navigate('/')
    })
  }

  return (
    <div id='header'>
      <Link className='link' to='/'>Home</Link>         
      {!isAuth ? (
        <Link className='link' to='/login'>Log In</Link>
      ) : (
        <>
          <Link className='link' to='/additem'>Add Item</Link>
          <p className='link' onClick={logOut}>Log Out</p>
        </>
      )}          
    </div>
  )
}

export default Header