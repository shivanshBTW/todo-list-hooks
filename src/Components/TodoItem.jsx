import React from 'react';
import ListItem from "@material-ui/core/ListItem";
import Checkbox from "@material-ui/core/Checkbox";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import DeleteIcon from '@material-ui/icons/Delete';

function TodoItem(props) {
    const [checked, setChecked] = React.useState(props.todo.completed);

    const handleToggle = ()=>{
        setChecked(!checked);
    };
    return (
        <ListItem dense button>
            <ListItemIcon>
                <Checkbox
                    edge="start"
                    checked={checked}
                    onClick={handleToggle}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ 'aria-labelledby': props.todoId }}
                />
            </ListItemIcon>
            <ListItemText id={props.todoId} primary={`${props.todo.task}`} />
            <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="comments">
                    <DeleteIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    );
}

export default TodoItem;