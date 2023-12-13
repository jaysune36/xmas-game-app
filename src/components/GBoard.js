import React from 'react'
import CardCreate from './CardCreate'

function GBoard() {

  let gameBoardTiles = [];
  let value = 100;
  let keyIndex = 0;
  for(let i=0;i<5;i++) {
    let gameBoardTile = [];
    gameBoardTiles.push(gameBoardTile)
    for(let j=0;j<6;j++) {
      gameBoardTile.push(
      <CardCreate key={keyIndex} value={value}></CardCreate>
    )
    keyIndex++;
    }
    value+=100;
  }

  return (
    <div>
      <div className='game-board container d-flex flex-row flex-wrap justify-content-between align-items-center center'>
        {gameBoardTiles}
      </div>
      
    </div>
  )
}

export default GBoard