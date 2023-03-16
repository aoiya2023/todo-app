import './Task.css';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

export default function Task(props) {
    return (
        <ListItem>
            <ListItemButton>
                <ListItemText primary={props.task.text}/>
            </ListItemButton>
        </ListItem>
    )
}