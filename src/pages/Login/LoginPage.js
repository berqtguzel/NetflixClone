import React from 'react'
import NetflixLoginInput from '../../components/LoginPage/NetflixLoginInput/NetflixLoginInput'
import logo from "../../assets/Netflix_Logo_RGB.png";
import NetflixLogo from '../../components/HomePage/NetflixLogo/NetflixLogo';


const LoginPage = () => {
  return (
    <>
      <div className='login-page'>
      <div className='logo'>
      <NetflixLogo />
      </div>
      <NetflixLoginInput/>
    </div>
      </>
    
  )
}

export default LoginPage