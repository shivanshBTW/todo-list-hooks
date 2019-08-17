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
    let [todos, setTodos] = useState(props.todos);

    useEffect(() => {
        let temp = todos.map(todo => {
            return {...todo, isEditOn: false}
        });
        let temp2 = todos.map(todo => {
            return {...todo, isEditOn: true}
        });
        return setTodos([...temp,...temp2]);
    },[]);

    function toggleEditOn(toEditTodo) {
        setTodos(todos.map(todo=>{
            if(todo.id === toEditTodo.id){
                todo.isEditOn = !todo.isEditOn;
            }
        }));
    }

    return (
        <div className={classes.root}>
            <List component="nav" aria-label="main mailbox folders">
                {todos.map((todo) => {
                    return <div key={uuid()}>
                        {todo.isEditOn ? <TodoForm todo={todo} lol='as' editItem={props.editItem} toggleEditItem={toggleEditOn}/> :
                            <TodoItem todo={todo} toggleEditItem={toggleEditOn} deleteItem={props.deleteItem}/>}
                    </div>
                })}
            </List>
        </div>
    );
}

export default TodoList;