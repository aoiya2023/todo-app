import './TaskList.css';
import Task from './Task.js';
import Box from '@mui/material/Box';
import List from '@mui/material/List';

export default function TaskList(props) {
    return (
        <Box>
            <List>
                {props.taskList.map((task) => (
                    <Task
                        key={task.id}
                        task={task}/>
                ))}
            </List>
        </Box>
    )
    
}
