import React, {useState} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom';

function TeamEntry({setTeamNum, setTeams, teamNum, teams}) {

  const [test, setTest] = useState([]);
  let teamsSet = false;
  let entryList = [];

  if (teamNum > 0) {
    document.querySelector('.teamNum').style.display = 'none';
    for(let i=0;i<teamNum; i++) {
    entryList.push(
        <Form.Control key={i} className={`team${i+1} inputTxt mt-2`} type='text' placeholder={`Team ${i + 1}'s Name`}
    ></Form.Control>
    
    )
    }


  }

  const addPlayerNames = (e) => {
    for(let i=0;i<teamNum; i++) {
      let teamName = e.target.parentElement.querySelector(`.team${i+1}`)
      setTeams(teams => [ ...teams, { teamName: teamName.value, teamPoints: 0 , index: i}])
    }
  
  }

  return (
    <div>
      <div className='container d-flex flex-column justify-content-center align-items-center center'>
        <Form className='teamNum'>
          <Form.Group className='d-flex flex-column justify-content-center align-items-center'>
            <Form.Label>
              <h2>How Many Players/Teams</h2>
            </Form.Label>
            <Form.Control type='number' className='entryNum w-50 border-0 inputTxt'></Form.Control>
            <Button className='btnGold mt-3' type='submit'
              onClick={
                (e) => {
                  e.preventDefault();
                  setTeamNum(e.target.previousSibling.value)
                  // console.log(e.target.previousSibling.value)
                }
            }>Submit</Button>
          </Form.Group>

        </Form>
        {
        teamNum > 0 && (
          <Form className='teamNames'>
             <Form.Group>
            <Form.Label><h2>Please Enter Player/Team Names</h2></Form.Label>
            {entryList}
               <Button className='btnGold mt-3' onClick={(e) => {
              e.preventDefault()
              addPlayerNames(e)
              teamsSet = true;
              document.querySelector('.teamNames').style.display = 'none';
              document.querySelector('.gameStart').style.display = 'block';

            }}>Submit</Button>

           </Form.Group> 
            </Form>
        )
      }

          <div className='gameStart'>
            <Link to='/gameBoard'><Button className='btnGold'>Let's Start</Button></Link>
            </div>
      
       </div>
    </div>
  )
}

export default TeamEntry
