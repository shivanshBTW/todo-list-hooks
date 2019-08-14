import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import TodoItem from "./TodoItem";
import List from "@material-ui/core/List";
import uuid from 'uuid/v4'

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,

    }
}));

function TodoList(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <List component="nav" aria-label="main mailbox folders">
                {props.todos.map((todo) => {
                    return <div key={uuid()}>
                        <TodoItem todo={todo} deleteItem={props.deleteItem}/>
                    </div>
                })}
            </List>
        </div>
    );
}

export default TodoList;