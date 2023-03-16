import './Pomodoro.css';
import Timer from './Timer.js';

export function Pomodoro(props) {
    return (
        <Timer timeLeft={props.timeLeft} toggleTimer={props.toggleTimer} skipTimer={props.skipTimer} timerOn={props.timerOn}/>
    )
}

export default Pomodoro;