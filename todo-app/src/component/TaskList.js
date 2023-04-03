import './TaskList.css';
import Task from './Task.js';
import Box from '@mui/material/Box';
import List from '@mui/material/List';

export default function TaskList(props) {
    return (
        <Box>
            <h1>Backlog</h1>
            <List>
                {props.taskList.filter((task) => (
                    task.status === "Backlog"
                )).map((task) => (
                    <Task
                        key={task.id}
                        task={task}
                        statusList={props.statusList}/>
                ))}
            </List>
            <h1>To Do</h1>
            <List>
                {props.taskList.filter((task) => (
                    task.status === "To Do"
                )).map((task) => (
                    <Task
                        key={task.id}
                        task={task}
                        statusList={props.statusList}/>
                ))}
            </List>
            <h1>In Progress</h1>
            <List>
                {props.taskList.filter((task) => (
                    task.status === "In Process"
                )).map((task) => (
                    <Task
                        key={task.id}
                        task={task}
                        statusList={props.statusList}/>
                ))}
            </List>
            <h1>Review</h1>
            <List>
                {props.taskList.filter((task) => (
                    task.status === "Review"
                )).map((task) => (
                    <Task
                        key={task.id}
                        task={task}
                        statusList={props.statusList}/>
                ))}
            </List>
            <h1>Done</h1>
            <List>
                {props.taskList.filter((task) => (
                    task.status === "Done"
                )).map((task) => (
                    <Task
                        key={task.id}
                        task={task}
                        statusList={props.statusList}/>
                ))}
            </List>
        </Box>
    )
    
}
