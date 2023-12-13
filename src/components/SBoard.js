import React from 'react'

function SBoard({teams}) {
  let teamsArr = []

  for(let i = 0; i < teams.length; i++) {
    teams.push(<h2>{teams[i].teamName}</h2>)
    console.log(teams)
  }

  return (
    <div>
      <div>
        <h1>Hello Teams</h1>
        {teamsArr}
      </div>
    </div>
  )
}

export default SBoard