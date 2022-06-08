import React from 'react'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div className="container">
        <Navbar/>
        <Announcement/>
    </div>
  )
}

export default Home