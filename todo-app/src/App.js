import './App.css';
import Content from './component/Content.js';
import Pomodoro from './component/Pomodoro.js';
import { useEffect, useState } from 'react';

let pomodoroTime = 2 * 60 * 1000;
let restTime = 1 * 60 * 1000;

// calculate the time left for the timer
function calculateTimeLeft(secs) {
    let timeLeft = {minutes: 0, seconds: 0};
    if (secs > 0) {
        timeLeft = {
            minutes: Math.floor((secs / 1000 / 60) % 60),
            seconds: Math.floor((secs / 1000) % 60)
        }
    }
    return timeLeft;
}


function App() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(pomodoroTime));
  const [timerOn, setTimerOn] = useState(false);
  const [pomodoroOn, setPomodoroOn] = useState(true); 
  
  // start & pause timer
  function toggleTimer() {
    if (timerOn) {
      setTimerOn(false);
    } else {
      setTimerOn(true);
    }
  }
  // skip timer ahead to next session
  function skipTimer() {
    if (pomodoroOn) {
      setTimeLeft(restTime);
    } else {
      setTimeLeft(pomodoroTime);
    }
  }
  
  // calculate the current remaining time
  let timeInSecs = 0;
  Object.keys(timeLeft).forEach((interval) => {
      // if (!timeLeft[interval]) {
      //     return;
      // }
      if (interval === "minutes") {
          timeInSecs += timeLeft[interval] * 60 * 1000;
      } else {
          timeInSecs += timeLeft[interval] * 1000;
      }
  })

  // start pomodoro / rest 
  function togglePomodoro() {
    if (pomodoroOn) {
      setPomodoroOn(false);
      setTimeLeft(calculateTimeLeft(restTime));
      setTimerOn(true);
    } else {
      setPomodoroOn(true);
      setTimeLeft(calculateTimeLeft(pomodoroTime));
      setTimerOn(true);
    }
  }

  // update the amount of time remaining
  useEffect(() => {
      const timer = setTimeout(() => {
          if (timeInSecs === 0) {
            togglePomodoro();
          }
          else if (timerOn === true) {
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
      <div key="Pomodoro"><Pomodoro timeLeft={timeLeft} toggleTimer={toggleTimer} skipTimer={skipTimer} timerOn={timerOn}/></div>
    </Content>
  );
}

export default App;
