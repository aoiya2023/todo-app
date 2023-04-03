import './Task.css';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DropdownMenu from './DropdownMenu';

export default function Task(props) {
    return (
        <ListItem>
            <ListItemButton>
                <ListItemText primary={props.task.text} secondary={props.task.status}/>
                <DropdownMenu task={props.task} statusList={props.statusList} key={props.task.id}/>
            </ListItemButton>
        </ListItem>
    )
}