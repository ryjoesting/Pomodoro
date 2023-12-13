import Clock from './Clock'
import './styles/App.css'
import { useState } from 'react'

function App() {

  const [sessionLength, setSessionLength] = useState(25);
  const [breakLength, setBreakLength] = useState(5);
  const [timer, setTimer] = useState(1500); //in num seconds
  const [timerStr, setTimerStr] = useState('25:00');
  const [isPaused, setIsPaused] = useState(true);

  const incSesh = () => {
    if (sessionLength < 60) setSessionLength(sessionLength + 1);
    setTimer(60 * sessionLength);
    updateTimerStr();
  }
  const decSesh = () => {
    if (sessionLength > 0) setSessionLength(sessionLength - 1);
    setTimer(60 * sessionLength);
  }
  const incBreak = () => {
    if (breakLength < 60) setBreakLength(breakLength + 1);
  }
  const decBreak = () => {
    if (breakLength > 0) setBreakLength(breakLength - 1);
  }

  const updateTimerStr = () => {
    let min = Math.floor(timer / 60);
    if (min < 10) {
      min = '0' + min;
    }
    let secs = timer % 60;
    if (secs < 10) {
      secs = '0' + secs;
    }
    setTimerStr(min + ':' + secs);
  }

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
      <Clock timerStr={timerStr} />
    </div>
  );
}

export default App;
