import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import TodoItem from "./TodoItem";
import List from "@material-ui/core/List";

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    }
}));

function TodoList(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <List component="nav" aria-label="main mailbox folders">
                {props.todos.map((todo, index) => {
                    return <div key={index}>
                        <TodoItem todo={todo}/>
                    </div>
                })}
            </List>
        </div>
    );
}

export default TodoList;