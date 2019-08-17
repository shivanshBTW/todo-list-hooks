import React, {useEffect, useState} from 'react';
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
            if(todo.id === toEditTodo.id){
                return {...todo, isEditOn: !todo.isEditOn}
            }else{
                return todo
            }
        });
        setTodos(temp);
    }

    function deleteItem(toDeleteTodo) {
        setTodos(todos.filter(todo=>todo.id!==toDeleteTodo.id));
    }

    function editItem(editedItem) {
        let tempArray = [...todos];
        for(let i = 0; i<tempArray.length;i++){
            if(tempArray[i].id===editedItem.id){
                tempArray[i]=editedItem;
            }
        }
        setTodos(tempArray);
    }

    return (
        <div>
            <Paper className={classes.root}>
                <TodoList editItem={editItem} todos={todos} toggleEditOn={toggleEditOn} deleteItem={deleteItem}/>
            </Paper>
        </div>
    );
}

export default TodoApp;