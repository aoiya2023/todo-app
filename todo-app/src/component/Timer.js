import './Timer.css';
import { Button } from '@mui/material';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';

export function Timer(props) {
    // display timeLeft Object
    const timerComponents = [];
    Object.keys(props.timeLeft).forEach((interval) => {
        if (!props.timeLeft[interval]) {
            return;
        }
        if (interval === "minutes") {
            timerComponents.push(
                <span key="minutes">{props.timeLeft[interval]}{":"}</span>
            );
        }
        else {
            timerComponents.push(
                <span key="seconds">{props.timeLeft[interval]}</span>
            );
        }
    })

    return (
        <div>
            {timerComponents.length ? timerComponents : <span>Time's up!</span>}
            <Button onClick={()=> props.toggleTimer()}>{props.timerOn ? <PauseCircleIcon/> : <PlayCircleFilledIcon/>}</Button>
        </div>
    )

}

export default Timer;