import './Timer.css';

export function Timer(props) {
    // display timeLeft Object
    const timerComponents = [];
    Object.keys(props.timeLeft).forEach((interval) => {
        if (!props.timeLeft[interval]) {
            return;
        }
        timerComponents.push(
            <span>{props.timeLeft[interval]} {interval}{" "}</span>
        )
    })

    return (
        <div>
            {timerComponents.length ? timerComponents : <span>Time's up!</span>}
        </div>
    )

}

export default Timer;