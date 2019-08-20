import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import TodoItem from "./TodoItem";
import List from "@material-ui/core/List";
import uuid from 'uuid/v4'
import TodoForm from "./TodoForm";

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
                        {todo && todo.isEditOn ? <TodoForm todo={todo} lol='as' editTodo={props.editTodo}  toggleTodo={props.toggleTodo} deleteTodo={props.deleteTodo}/> :
                            <TodoItem todo={todo} toggleTodo={props.toggleTodo} toggleCompleted={props.toggleCompleted} deleteTodo={props.deleteTodo}/>}
                    </div>
                })}
            </List>
        </div>
    );
}

export default TodoList;