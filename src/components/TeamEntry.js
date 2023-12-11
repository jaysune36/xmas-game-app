import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';

function TeamEntry({setTeamNum, setTeamNames, teamNum, teamNames}) {

  let entryList = [];

  if(teamNum > 0) {
    document.querySelector('.teamNum').style.display = 'none';
    for(let i=0;i<teamNum; i++) {
      entryList.push(<Form.Control className={`team${i+1}`} key={i} type='text' placeholder={`Team ${i + 1}'s Name`} 
      onChange={(e) =>  setTeamNames({...teamNames, team_name: e.target.value})}
      ></Form.Control>)
    }
  }

  const addPlayerNames = () => {
    for(let i=0;i<teamNum;i++) {
      let teamName = document.querySelector(`.team${i+1}`);
      const newTeam = {team_name: teamName.value, team_points: 0}
      console.log(teamName.value)
      setTeamNames({...teamNames, team_name: teamName.v})
      // console.log(`${teamName.value}`)
      // setTeamNames({...teamName, team_name: teamName.value, team_points: 0})
      // setTeamNames(prev => [...prev, teamName.value])
      console.log(teamNames)
    }
  }

  return (
    <div>
      <div className='container d-flex flex-column justify-content-center align-items-center center'>
        <Form className='teamNum'>
          <Form.Group>
            <Form.Label><h2>How Many Players/Groups</h2></Form.Label>
            <Form.Control type='number' className='entryNum'></Form.Control>
            <Button type='submit' onClick={(e)=> {
            e.preventDefault();
            setTeamNum(e.target.previousSibling.value)
            console.log(e.target.previousSibling.value)
          }}>Submit</Button>
          </Form.Group>
          
        </Form>
        {teamNum > 0 && (
          <Form className='teamNames'>
          <Form.Group>
            <Form.Label><h2>Please Enter Player/Team Names</h2></Form.Label>
            {entryList}
            {/* <Link><Button onClick={(e) => e.preventDefault()}>Submit</Button></Link> */}
            <Button onClick={(e) => {
              e.preventDefault()
              addPlayerNames()
              console.log(teamNames)
            }}>Submit</Button>
          </Form.Group>
        </Form>
        )}
      </div>
    </div>
  )
}

export default TeamEntry
