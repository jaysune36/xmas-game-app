import React from 'react'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

function StartMenu() {
  return (
    <div>
      <div id='cursiveFont' className='container d-flex flex-column justify-content-center align-items-center center'>
<h1 id='goldFont'>Welcome the Christmas Eve Christmas Holiday Sera, Calleros, Farias, and Lewis 1st Family Holiday Party Christmas Trivia Game!</h1>
<Link to='/teamEntry'><Button className='btnGold'>Start</Button></Link>
      </div>
      
    </div>
  )
}

export default StartMenu