import React from 'react'
import NetflixMainPage from '../../components/HomePage/NetflixMainPage/NetflixMainPage'
import NetflixNavbar from '../../components/HomePage/NetflixNavbar/NetflixNavbar'

const HomePage = () => {
  return (
    <div className='home'>
        <NetflixNavbar/>
        <NetflixMainPage/>
    </div>
  )
}

export default HomePage