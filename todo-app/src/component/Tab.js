import './Tab.css';
import Button from '@mui/material/Button';
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';
import TimerIcon from '@mui/icons-material/Timer';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';

function chooseIcon(label, active) {
    if (label === "Pomodoro") {
        if (active) {
            return <TimerIcon/>
        }
        return <TimerOutlinedIcon/>
    } else {
        if (active) {
            return <AssignmentTurnedInIcon/>
        }
        return <AssignmentTurnedInOutlinedIcon/>
    }
}

export function Tab(props) {
    const classNames = ["tab-list-item"];
    var active = false;
    if (props.activeTab === props.label) {
        classNames.push("tab-list-active");
        active = true;
    }
    return <Button className={classNames.join(" ")}
                   onClick={() => props.onClickTab(props.label)}>
            {chooseIcon(props.label, active)}
            </Button>
}

export default Tab;