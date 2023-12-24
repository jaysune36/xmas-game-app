import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

function SBoard({teams}) {
  let teamsArr = []


  for(let i = 0; i < teams.length; i++) {
    teamsArr.push(<Dropdown.Item className='inputTxt sText' key={i}>{teams[i].teamName} - Score: {teams[i].teamPoints}</Dropdown.Item>)
    
  }
    return (
      <Dropdown className='d-flex flex-row-reverse'>
        <Dropdown.Toggle variant="danger inputTxt fs-5" id="dropdown-basic">
          SCORE
        </Dropdown.Toggle>
  
        <Dropdown.Menu>
          {teamsArr}
        </Dropdown.Menu>
      </Dropdown>
    );
}

export default SBoard