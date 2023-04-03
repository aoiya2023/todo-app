import './DropdownMenu.css';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function DropdownMenu(props) {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    function handleOnClick(event) {
        setAnchorEl(event.currentTarget);
    }
    function handleClose(e, status) {
        console.log(status);
        setAnchorEl(null);
        props.task.status = status;
    }
    return (
        <div>
            <Button onClick={handleOnClick}>
                {props.task.status}
            </Button>
            <Menu anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'left'
                  }}
                  transformOrigin={{
                      vertical: 'top',
                      horizontal: 'left',
                  }}
            >
                {props.statusList.filter((status) => status !== props.task.status)
                .map((status) => (
                    <MenuItem key={status + toString(props.task.id)} onClick={(e) => handleClose(e, status)}>{status}</MenuItem>
                ))}
            </Menu>

        </div>
    )
}