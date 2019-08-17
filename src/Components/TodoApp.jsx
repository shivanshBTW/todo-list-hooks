import React, {useState} from 'react';
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

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3, 2),
        margin: '3rem 2rem',
        marginBottom: 0
    },
    list: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    addTodoButton: {
        // margin: '3rem 2rem',
        margin: '1em 2rem',
        float: 'right'
    }
}));

function TodoApp(props) {
    const classes = useStyles();
    const initialTodos = [
        {id: 1, task: "water the plants", completed: false},
        {id: 2, task: "feed the fishes", completed: true},
        {id: 3, task: "charge the phone", completed: false}
    ];
    const emptyTodo = {id: undefined, task: "", completed: false, isEditOn: true};
    let [todos, setTodos] = useState(initialTodos);

    // useEffect(() => {
    //     let temp = todos.map(todo => {
    //         return {...todo, isEditOn: false}
    //     });
    //     let temp2 = todos.map(todo => {
    //         return {...todo, isEditOn: true}
    //     });
    //     return setTodos([...temp,...temp2]);
    // },[]);

    function toggleEditOn(toEditTodo) {
        let temp = todos.map(todo => {
            if (todo.id === toEditTodo.id) {
                return {...todo, isEditOn: !todo.isEditOn}
            } else {
                return todo
            }
        });
        setTodos(temp);
    }

    function deleteItem(toDeleteTodo) {
        setTodos(todos.filter(todo => todo.id !== toDeleteTodo.id));
    }

    function editItem(editedItem) {
        let tempArray = [...todos];
        for (let i = 0; i < tempArray.length; i++) {
            if (tempArray[i].id === editedItem.id) {
                tempArray[i] = editedItem;
            }
        }
        setTodos(tempArray);
    }

    const theme = createMuiTheme({
        palette: {
            primary: green,
        },
    });

    function addTodo() {
        setTodos([...todos, {...emptyTodo, id: todos[todos.length - 1].id + 1}]);
    }

    React.useEffect(() => {
        loadCSS(
            'https://use.fontawesome.com/releases/v5.1.0/css/all.css',
            document.querySelector('#font-awesome-css'),
        );
    }, []);

    return (<>
            <div>
                <Paper className={classes.root}>
                    <TodoList editItem={editItem} todos={todos} toggleEditOn={toggleEditOn} deleteItem={deleteItem}/>
                </Paper>
                <ThemeProvider theme={theme}>
                    <Button variant="contained" className={classes.addTodoButton} onClick={addTodo} color="primary">Add Todo&nbsp;<Icon
                        className={clsx(classes.icon, 'fas fa-plus-circle')}
                        color="action"/></Button>
                </ThemeProvider>
            </div>
        </>
    );
}

export default TodoApp;