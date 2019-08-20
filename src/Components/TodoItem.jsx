import React from 'react';
import ListItem from "@material-ui/core/ListItem";
import Checkbox from "@material-ui/core/Checkbox";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import makeStyles from "@material-ui/core/styles/makeStyles";
import Slide from '@material-ui/core/Slide';

const useStyles = makeStyles(theme => ({
    strike: {
        textDecoration: 'line-through'
    }
}));

function TodoItem(props) {
    const classes = useStyles();
    const [checked] = React.useState(props.todo.completed);
    const handleToggle = () => {
        // setChecked(!checked);
        props.toggleCompleted(props.todo);
    };

    function handleDelete() {
        props.deleteTodo(props.todo);
    }

    function handleEditToggle() {
        props.toggleTodo(props.todo);
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
                    inputProps={{'aria-labelledby': props.todo.id}}
                />
            </ListItemIcon>
            {checked ? <Slide in={checked} direction={"right"} timeout={70}><ListItemText
                    className={checked ? classes.strike : ''} id={props.todo.id}
                    primary={`${props.todo.task}`}/></Slide> :
                <ListItemText className={checked ? classes.strike : ''} id={props.todo.id}
                              primary={`${props.todo.task}`}/>}


            {checked ? '' : <IconButton edge="end" aria-label="editIcon" onClick={handleEditToggle}>
                <EditIcon/>
            </IconButton>}
            <IconButton edge="end" aria-label="deleteIcon" onClick={handleDelete}>
                <DeleteIcon/>
            </IconButton>
        </ListItem>
    );
}

export default TodoItem;