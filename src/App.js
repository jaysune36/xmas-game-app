import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import TeamEntry from './components/TeamEntry'
import './App.css';
import StartMenu from './components/StartMenu';
import TeamNames from './components/TeamNames';
import GBoard from './components/GBoard'

function App() {

  const [teamNum, setTeamNum] = useState(0);
  const [teamNames, setTeamNames] = useState({});

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/teamEntry" element={<TeamEntry setTeamNum={setTeamNum} setTeamNames={setTeamNames} teamNum={teamNum} teamNames={teamNames}/>}>
          </Route>
          <Route path="/gameBoard" element={<GBoard teamNames={teamNames}/>}></Route>
          <Route path='/' element={<StartMenu />}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
