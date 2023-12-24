import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { ModalBody } from 'react-bootstrap';

function CardCreate({value, teams, setTeams, catQAndA}) {

  const [show, setShow] = useState(false);
  const [points, setPoints] = useState(0);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let questionDisplay = catQAndA[0];
  let answerDisplay = catQAndA[1];

  const winningPointAdd = (item) => {
    setTeams(teams => [...(
      {...item, teamPoints: item.teamPoints += points},
      teams.filter((x) => teams.indexOf(x) !== item)
    )])
  }

  const teamDisplay = [];

  for(let i=0;i<teams.length;i++) {
    teamDisplay.push(<Button key={i} className='inputTxt smallTxt' variant='secondary' onClick={()=>{
      handleClose();
      winningPointAdd(teams[i])
  }}>{teams[i].teamName}</Button>)
  }



  return (
    <div>
      <div id='qCard'>
        <div></div>
          <Button className='fs-2 btnGold m-1' onClick={(e)=>{
          handleShow();
          setPoints(parseFloat(e.target.innerText));
          e.target.previousSibling.setAttribute('id', 'overlay')
         }}>
        {value}
      </Button>
         
      </div>
       

      <Modal size='lg' centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='noShdw bigTxt'>Question worth: {value} points</Modal.Title>
        </Modal.Header>
        <Modal.Body className='noShdw inputTxt'>{questionDisplay}</Modal.Body>
        <Button className='inputTxt w-25 centerBtn mb-3' onClick={()=>{document.querySelector('#answerR').style.display = 'block'}}>Answer:</Button>
        <p id='answerR' className='inputTxt noShdw mt-4'> - {answerDisplay} - </p>
        <Modal.Footer>
          {teamDisplay}
        </Modal.Footer>
      </Modal>
    </div>
  );
}
// }

export default CardCreate