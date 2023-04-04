import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button } from '@mui/material';

import { useState } from 'react';

export default function AddButton(props) {
    const [openModal, setOpenModal] = useState(false);
    const [status, setStatus] = useState('');
    const [taskName, setTaskName] = useState('');

    function handleModalOpen() {
        setOpenModal(true);
    }
    function handleClose() {
        setOpenModal(false);
    }
    function handleStatusChange(e) {
        setStatus(e.target.value || '');
    }
    function handleTaskNameChange(e) {
        setTaskName(e.target.value || '');
    }
    function handleAdd() {
        console.log(status);
        console.log(taskName);
        props.addTask(taskName, status);
        handleClose();
    }
    function handleCancel() {
        setStatus('');
        setTaskName('');
        handleClose();
    }

    return (
        <div>
            <Fab color="primary" onClick={handleModalOpen}>
                <AddIcon/>
            </Fab> 
            <Dialog open={openModal} onClose={handleClose}>
                <DialogTitle>
                    Add a new task    
                </DialogTitle>
                <DialogContent>
                    <Box>
                        <FormControl>
                            <TextField autoFocus
                                        margin='dense'
                                        fullWidth
                                        variant='standard'
                                        onChange={(e) => handleTaskNameChange(e)}/>
                        </FormControl>
                        <FormControl>
                            <InputLabel>Status</InputLabel>
                            <Select native
                                    onChange={(e) => handleStatusChange(e)}
                                    variant='standard'>
                                <option aria-label="None" value="" />
                                <option value={"Backlog"}>Backlog</option>
                                <option value={"To Do"}>To Do</option>
                                <option value={"In Progress"}>In Progress</option>
                                <option value={"Review"}>Review</option>
                                <option value={"Done"}>Done</option>
                            </Select>
                        </FormControl>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCancel}>Cancel</Button>
                    <Button onClick={handleAdd}>Add</Button>
                </DialogActions>
            </Dialog>
        </div>
        

    )
}