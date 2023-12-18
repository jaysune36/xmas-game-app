import React from 'react'
import CardCreate from './CardCreate'
import SBoard from './SBoard';

function GBoard({teams, setTeams}) {

  let gameBoardTiles = [];
  let value = 100;
  let keyIndex = 0;
  for(let i=0;i<5;i++) {
    let gameBoardTile = [];
    gameBoardTiles.push(gameBoardTile)
    for(let j=0;j<6;j++) {
      gameBoardTile.push(
      <CardCreate key={keyIndex} value={value} teams={teams} setTeams={setTeams}></CardCreate>
    )
    keyIndex++;
    }
    value+=100;
  }

  return (
    <div>
      <SBoard teams={teams}></SBoard>
      <div className='game-board container d-flex flex-row flex-wrap justify-content-between align-items-center center'>
        {gameBoardTiles}
      </div>
      
    </div>
  )
}

export default GBoard