import React from 'react';
import ListItem from "@material-ui/core/ListItem";
import Checkbox from "@material-ui/core/Checkbox";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

function TodoItem(props) {
    const [checked, setChecked] = React.useState(props.todo.completed);
    const handleToggle = ()=>{
        setChecked(!checked);
    };
    function handleDelete() {
        props.deleteItem(props.todo);
    }

    function handleEditToggle() {
        props.toggleEditItem(props.todo);
    }

    return (
        <ListItem dense button>
            <ListItemIcon>
                <Checkbox
                    edge="start"
                    checked={checked}
                    onClick={handleToggle}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ 'aria-labelledby': props.todo.id }}
                />
            </ListItemIcon>
            <ListItemText id={props.todo.id} primary={`${props.todo.task}`} />
                <IconButton edge="end" aria-label="deleteIcon" onClick={handleEditToggle}>
                    <EditIcon />
                </IconButton>
                <IconButton edge="end" aria-label="deleteIcon" onClick={handleDelete}>
                    <DeleteIcon />
                </IconButton>
        </ListItem>
    );
}

export default TodoItem;