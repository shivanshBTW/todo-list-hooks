import React, {useEffect} from 'react';
import Paper from "@material-ui/core/Paper";
import makeStyles from "@material-ui/core/styles/makeStyles";
import TodoList from "./TodoList";
import Button from "@material-ui/core/Button";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import {green} from "@material-ui/core/colors";
import {ThemeProvider} from '@material-ui/styles';
import {loadCSS} from "fg-loadcss";
import clsx from "clsx";
import Icon from "@material-ui/core/Icon";
import TodoState from "../hooks/TodoState";
import UseLocalStorage from "../hooks/useLocalStorage";

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3, 2),
        '@media (min-width: 0px)': {
            margin: '3rem 2rem',
            marginBottom: 0
        },
        '@media (min-width: 768px)': {
            margin: '3rem 8rem',
            marginBottom: 0
        },

    },
    list: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    addTodoButton: {
        '@media (min-width: 0px)': {
            margin: '1em 2rem',
        },
        '@media (min-width: 768px)': {
            margin: '1em 8rem',
        },

        float: 'right'
    }
}));

function TodoApp(props) {
    const classes = useStyles();
    const [setLocalStorage, getLocalStorage] = UseLocalStorage();
    const initialTodos = getLocalStorage('todos') || [];
    //structure of the todo list
    // const initialTodos = [
    //     {id: 1, task: "water the plants", completed: false},
    // ];

    //using todoState
    let [todos, deleteTodo, editTodo, addTodo, toggleTodo, toggleCompleted] = TodoState(initialTodos);

    useEffect(() => {
        setLocalStorage('todos', todos);
    }, [todos,setLocalStorage]);

    const theme = createMuiTheme({
        palette: {
            primary: green,
        },
    });


    React.useEffect(() => {
        loadCSS(
            'https://use.fontawesome.com/releases/v5.1.0/css/all.css',
            document.querySelector('#font-awesome-css'),
        );
    }, []);

    return (<>
            <div>
                {todos.length > 0 && <Paper className={classes.root}>
                    <TodoList editTodo={editTodo} todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}
                              toggleCompleted={toggleCompleted}/>
                </Paper>}
                <ThemeProvider theme={theme}>
                    <Button variant="contained" className={classes.addTodoButton} onClick={addTodo} color="primary">Add
                        Todo&nbsp;<Icon
                            className={clsx(classes.icon, 'fas fa-plus-circle')}
                            color="action"/></Button>
                </ThemeProvider>
            </div>
        </>
    );
}

export default TodoApp;