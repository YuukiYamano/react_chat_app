import React from 'react'

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
                <input type="file" />   
                <button>Sign up</button>
            </form>
            <p>You do have an account? <a href="">Login</a></p>
        </div>
    </div>
  )
}

export default Register