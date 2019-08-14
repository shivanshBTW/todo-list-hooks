import React, {useState} from 'react';
import Paper from "@material-ui/core/Paper";
import makeStyles from "@material-ui/core/styles/makeStyles";
import TodoList from "./TodoList";

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3, 2),
        margin: theme.spacing(7, 10)
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
        {id: 1, task: "a", completed: false},
        {id: 2, task: "b", completed: true},
        {id: 3, task: "c", completed: false}
    ];
    let [todos, setTodos] = useState(initialTodos);

    return (
        <div>
            <Paper className={classes.root}>
                <TodoList todos={todos}/>
            </Paper>
        </div>
    );
}

export default TodoApp;