import React from 'react'
import Card from 'react-bootstrap/Card';

function CardCreate({value}) {
  return (
    <div>
      <Card className='cardStyle fs-1'>
        <Card.Body>
          <Card.Title>{value}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  )
}

export default CardCreate