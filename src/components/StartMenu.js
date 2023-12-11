import React from 'react'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

function StartMenu() {
  return (
    <div>
      <div className='container d-flex flex-column justify-content-center align-items-center center'>
<h1>Welcome the Christmas Eve Christmas Holiday Sera, Calleros, Farias, and Lewis 1st Family Holiday Party Christmas Trivia Game!</h1>
<Link to='/teamEntry'><Button variant='outline-success'>Start</Button></Link>
      </div>
      
    </div>
  )
}

export default StartMenu