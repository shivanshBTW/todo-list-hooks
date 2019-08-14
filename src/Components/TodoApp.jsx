import React, {useState} from 'react';
import Paper from "@material-ui/core/Paper";
import makeStyles from "@material-ui/core/styles/makeStyles";
import TodoList from "./TodoList";

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3, 2),
        margin: '3rem 2rem'

    },
    list: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    }
}));

function TodoApp(props) {
    const classes = useStyles();
    const initialTodos = [
        {id: 1, task: "water the plants", completed: false},
        {id: 2, task: "feed the fishes", completed: true},
        {id: 3, task: "charge the phone", completed: false}
    ];
    let [todos, setTodos] = useState(initialTodos);

    function deleteItem(toDeleteTodo) {
        setTodos(todos.filter(todo=>todo.id!==toDeleteTodo.id));
    }


    return (
        <div>
            <Paper className={classes.root}>
                <TodoList todos={todos} deleteItem={deleteItem}/>
            </Paper>
        </div>
    );
}

export default TodoApp;