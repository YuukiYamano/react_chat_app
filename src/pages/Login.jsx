import React from 'react'
import Add from "../img/add_a_photo_FILL0_wght400_GRAD0_opsz48.png"

const Login = () => {
  return (
    <div className='formContainer'>
        <div className="formWrapper">
            <span className="logo">React Chat App</span>
            <span className="title">Login</span>
            <form action="">
                <input type="email" placeholder='email' />
                <input type="password" placeholder='password' />
                <button>Sign in</button>
            </form>
            <p>You do not have an account? <a href="">Register</a></p>
        </div>
    </div>
  )
}

export default Login