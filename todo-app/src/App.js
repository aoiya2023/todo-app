import './App.css';
import Content from './component/Content.js';
import Pomodoro from './component/Pomodoro.js';
import { useEffect, useState } from 'react';

// calculate the time left for the timer
function calculateTimeLeft(secs) {
    let timeLeft = {};
    if (secs > 0) {
        timeLeft = {
            minutes: Math.floor((secs / 1000 / 60) % 60),
            seconds: Math.floor((secs / 1000) % 60)
        }
    }
    return timeLeft;
}


function App() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(2*60*1000));
  const [timerOn, setTimerOn] = useState(false);

  // start & pause timer
  function toggleTimer() {
    if (timerOn) {
      setTimerOn(false);
    }
    else {
      setTimerOn(true);
    }
    
  }
  
  let timeInSecs = 0;
  Object.keys(timeLeft).forEach((interval) => {
      if (!timeLeft[interval]) {
          return;
      }
      else if (interval === "minutes") {
          timeInSecs += timeLeft[interval] * 60 * 1000;
      } else {
          timeInSecs += timeLeft[interval] * 1000;
      }
  })
  // update the amount of time remaining
  useEffect(() => {
      const timer = setTimeout(() => {
          if (timerOn === true) {
            setTimeLeft(calculateTimeLeft(timeInSecs-1));
          }
          else {
            setTimeLeft(calculateTimeLeft(timeInSecs));
          }
      }, 1000);

      return () => clearTimeout(timer);
  });

  return (
    <Content>
      <div key="Task">Hello, world!</div>
      <div key="Pomodoro"><Pomodoro timeLeft={timeLeft} toggleTimer={toggleTimer} timerOn={timerOn}/></div>
    </Content>
  );
}

export default App;
