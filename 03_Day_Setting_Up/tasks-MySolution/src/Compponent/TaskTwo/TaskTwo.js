import React from 'react'
import './TaskTwo.css'

const TaskTwo = () => {
  return (
    <div className='form'>
      <h1>Subscribe</h1>
      <p>Sign up with your email address to receive news and updates</p>
      <form>
        <input type="text" placeholder='First Name'/>
        <input type="text" placeholder='Last Name'/>
        <input type="email" placeholder='Email'/>
        <button>subscribe</button>
      </form>
    </div>
  )
}

export default TaskTwo
