import './Pomodoro.css';
import Timer from './Timer.js';

export function Pomodoro(props) {
    return (
        <div>
            <Timer timeLeft={props.timeLeft}/>
        </div>
    )
}

export default Pomodoro;