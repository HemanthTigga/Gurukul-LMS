import React from 'react'
import './AllUsers.css'
import { IoMdClose } from 'react-icons/io'
const Form = ({handleSubmit, handleonChange, handleClose, rest}) => {
  return (
    <div className="addContainer">
              <form onSubmit={handleSubmit}>
                <div className='close-btn' onClick={handleClose}><IoMdClose /></div>
                <label htmlFor="name">Name: </label>
                <input type='text' id="name" name="name" onChange={handleonChange} value={rest.name} />

                <label htmlFor="email">Email: </label>
                <input type='email' id="email" name="email" onChange={handleonChange} value={rest.email}/>

                <label htmlFor="password">Password: </label>
                <input type='password' id="password" name="password" onChange={handleonChange} value={rest.password}/>

                <button className="btn">Submit</button>
              </form>
            </div>
  )
}

export default Form
