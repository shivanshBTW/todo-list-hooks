import React, {useEffect, useState} from 'react';
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
                        {todo && todo.isEditOn ? <TodoForm todo={todo} lol='as' editItem={props.editItem} toggleEditItem={props.toggleEditOn}/> :
                            <TodoItem todo={todo} toggleEditItem={props.toggleEditOn} deleteItem={props.deleteItem}/>}
                    </div>
                })}
            </List>
        </div>
    );
}

export default TodoList;