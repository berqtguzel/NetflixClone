import React from 'react'
import NetflixLoginInput from '../../components/LoginPage/NetflixLoginInput/NetflixLoginInput'
import NetflixLogo from '../../components/HomePage/NetflixLogo/NetflixLogo';


const LoginPage = () => {
  return (
  <div className='login-page'>
<div className='login'>
      <div className='logo'>
      <NetflixLogo />
      </div>
      <NetflixLoginInput/>
    </div>
  </div>
     
     
     
    
  )
}

export default LoginPage