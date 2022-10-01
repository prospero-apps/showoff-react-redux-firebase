import React from 'react'
import '../style.css'
import { auth, provider } from '../firebase.config'
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

const LoginPage = ({ setIsAuth }) => {
  let navigate = useNavigate()

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        localStorage.setItem('isAuth', true)
        setIsAuth(true)
        navigate('/')
      })
  }

  return (
    <div id='login-page'>
      <h1>Sign In with Google</h1>
      <button className='login-with-google-btn' onClick={signInWithGoogle}>
        Sign In
      </button>
    </div>
  )
}

export default LoginPage