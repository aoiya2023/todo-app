import './App.css';
import Content from './component/Content.js';
import Pomodoro from './component/Pomodoro.js';
import { useEffect, useState } from 'react';

function tick(secs) {
    let timeLeft = {};
    if (secs > 0) {
        timeLeft = {
            minutes: Math.floor((secs / 1000 / 60) % 60),
            seconds: Math.floor((secs / 1000) % 60)
        }
    }
    console.log(timeLeft);
    return timeLeft;
}


function App() {
  const [timeLeft, setTimeLeft] = useState(tick(60*1000));
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
          setTimeLeft(tick(timeInSecs-1));
      }, 1000);

      return () => clearTimeout(timer);
  });

  return (
    <Content>
      <div key="Task">Hello, world!</div>
      <div key="Pomodoro"><Pomodoro timeLeft={timeLeft}/></div>
    </Content>
  );
}

export default App;
