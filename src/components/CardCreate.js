import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function CardCreate({value, question, teams, setTeams}) {

  const [show, setShow] = useState(false);
  const [points, setPoints] = useState(0)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const winningPointAdd = (item) => {
    setTeams(teams => [...(
      {...item, teamPoints: item.teamPoints += points},
      teams.filter((x) => teams.indexOf(x) !== item)
    )])
  }

  const teamDisplay = [];

  for(let i=0;i<teams.length;i++) {
    teamDisplay.push(<Button key={i} variant='secondary' onClick={()=>{
      handleClose();
      winningPointAdd(teams[i])
  }}>{teams[i].teamName}</Button>)
  }

  return (
    <div>
      <div id='qCard'>
        <div></div>
          <Button className='fs-2' variant="primary" onClick={(e)=>{
          handleShow();
          setPoints(parseFloat(e.target.innerText));
          e.target.previousSibling.setAttribute('id', 'overlay')
         }}>
        {value}
      </Button>
         
      </div>
       

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title >Question worth: {value} points</Modal.Title>
        </Modal.Header>
        <Modal.Body>{question}</Modal.Body>
        <Modal.Footer>
          {teamDisplay}
        </Modal.Footer>
      </Modal>
    </div>
  );
}
// }

export default CardCreate