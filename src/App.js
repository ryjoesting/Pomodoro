import Clock from './Clock'
import './styles/App.css'
import { useState } from 'react'

function App() {

  const [sessionLength, setSessionLength] = useState(25);
  const [breakLength, setBreakLength] = useState(5);
  const [timer, setTimer] = useState(1500); //in num seconds
  const [isPaused, setIsPaused] = useState(true);
  const [isTimerStarted, setIsTimerStarted] = useState(false);

  let iCountdown;

  const incSesh = () => {
    if (sessionLength < 60) setSessionLength(sessionLength + 1);
    setTimer(60 * sessionLength);
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

  const reset = () => {
    setSessionLength(25);
    setBreakLength(5);
  }

  const startStop = () => {
    if (!isTimerStarted) { //start the countdown
      let count = timer;
      iCountdown = setInterval( () => {
        count = count - 1;
        setTimer(count);
      },
      1000);
    }
  }

  return (
    <div id='app'>
      <div  id='setup-controls'>
        <h1 id='session-label'>Session Length: <code id='session-length'>{sessionLength}</code></h1>
        <h2 id='break-label'>Break Length: <code id='break-length'>{breakLength}</code></h2>
        <span className='btn-group'>
          <button onClick={incSesh} id='session-increment'>Session Up</button>
          <button onClick={decSesh} id='session-decrement'>Session Down</button>
          <button onClick={incBreak} id='break-increment'>Break Up</button>
          <button onClick={decBreak} id='break-decrement'>Break Down</button>
        </span>
      </div>
      <span className="btn-group" id='start-stop-reset'>
          <button id='start_stop' onClick={startStop}>Start/Stop</button>
          <button id='reset' onClick={reset}>Reset</button>
        </span>
      <Clock timer={timer} />
    </div>
  );
}

export default App;
