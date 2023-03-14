import './Pomodoro.css';
import Timer from './Timer.js';

export function Pomodoro(props) {
    return (
        <div>
            <Timer timeLeft={props.timeLeft} toggleTimer={props.toggleTimer} timerOn={props.timerOn}/>
        </div>
    )
}

export default Pomodoro;