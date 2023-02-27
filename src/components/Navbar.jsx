import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className="logo">React Chat App</span>
      <div className="user">
        <img src="https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
        <span>John</span>
        <button>logout</button>
      </div>
    </div>
  )
}

export default Navbar