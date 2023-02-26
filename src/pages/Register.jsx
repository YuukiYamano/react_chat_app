import React from 'react'
import Add from "../img/add_a_photo_FILL0_wght400_GRAD0_opsz48.png"

const Register = () => {
  return (
    <div className='formContainer'>
        <div className="formWrapper">
            <span className="logo">React Chat App</span>
            <span className="title">Register</span>
            <form action="">
                <input type="text" placeholder='display name'/>
                <input type="email" placeholder='email' />
                <input type="password" placeholder='password' />
                <input type="file" id='file'/>   
                <label htmlFor="file ">
                    <img src={Add} alt="" />
                    <span>Add an avatar</span>
                </label>
                <button>Sign up</button>
            </form>
            <p>You do have an account? <a href="">Login</a></p>
        </div>
    </div>
  )
}

export default Register