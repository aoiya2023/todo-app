import './Timer.css';
import { Button } from '@mui/material';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import SkipNextOutlinedIcon from '@mui/icons-material/SkipNextOutlined';

export function Timer(props) {
    // display timeLeft Object
    const timerComponents = [];
    Object.keys(props.timeLeft).forEach((interval) => {
        if (interval === "minutes") {
            if (props.timeLeft[interval] < 10) {
                timerComponents.push(
                    <span key="minutes">{"0"}{props.timeLeft[interval]}{":"}</span>
                );
            } else {
                timerComponents.push(
                    <span key="minutes">{props.timeLeft[interval]}{":"}</span>
                );
            }
            
        }
        else {
            if (props.timeLeft[interval] < 10) {
                timerComponents.push(
                    <span key="seconds">{"0"}{props.timeLeft[interval]}</span>
                );
            } else {
                timerComponents.push(
                    <span key="seconds">{props.timeLeft[interval]}</span>
                );
            };
        }
    })

    return (
        <div>
            <div>{timerComponents}</div>
            <Button onClick={()=> props.toggleTimer()}>{props.timerOn ? <PauseCircleIcon/> : <PlayCircleFilledIcon/>}</Button>
            <Button onClick={()=> props.skipTimer()}><SkipNextOutlinedIcon/></Button>
        </div>
    )

}

export default Timer;