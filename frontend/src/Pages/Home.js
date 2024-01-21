import React from 'react'
import Layout from '../Components/Layout'
import "../styles/Home.css"

function Home() {
  return (
    <div>
        <Layout>
        <div className='home'>
            <div className='home-content'>
      <h1> Welcome to my company</h1>
      <p>This is the simple employment management system using MERN technology</p>
      </div>
      </div>
   
      </Layout>
    </div>
  )
}

export default Home
