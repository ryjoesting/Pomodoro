import Clock from './Clock'
import './styles/App.css'
import { useState } from 'react'

function App() {

  const [sessionLength, setSessionLength] = useState(25);
  const [breakLength, setBreakLength] = useState(5);

  const incSesh = () => setSessionLength(sessionLength + 1);
  const decSesh = () => setSessionLength(sessionLength - 1);
  const incBreak = () => setBreakLength(breakLength + 1);
  const decBreak = () => setBreakLength(breakLength - 1);

  return (
    <div id='app'>
      <h1 id='session-label'>Session Length: <code id='session-length'>{sessionLength}</code></h1>
      <h2 id='break-label'>Break Length: <code id='break-length'>{breakLength}</code></h2>
      <span className='btn-group'>
        <button onClick={incSesh} id='session-increment'>Session Up</button>
        <button onClick={decSesh} id='session-decrement'>Session Down</button>
        <button onClick={incBreak} id='break-increment'>Break Up</button>
        <button onClick={decBreak} id='break-decrement'>Break Down</button>
      </span>
      <span className="btn-group">
        <button id='start_stop'>|| |&gt;</button>
        <button id='reset'>Reset</button>
      </span>
      <Clock />
    </div>
  );
}

export default App;
