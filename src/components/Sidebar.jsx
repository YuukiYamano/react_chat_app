import React from 'react'
import Navbar from './Navbar'
import Serach from './Serach'
import Chats from './Chats'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Navbar />
      <Serach />
      <Chats />
    </div>
  )
}

export default Sidebar