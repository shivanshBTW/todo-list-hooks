import {useState} from 'react';
import uuid from "uuid/v4";

function TodoState(initialTodos) {
    const emptyTodo = {id: undefined, task: "", completed: false, isEditOn: true};
    let [todos, setTodos] = useState(initialTodos);

    function toggleTodo(toEditTodo) {
        let temp = todos.map(todo => {
            if (todo.id === toEditTodo.id) {
                return {...todo, isEditOn: !todo.isEditOn}
            } else {
                return todo
            }
        });
        setTodos(temp);
    }

    function deleteTodo(toDeleteTodo) {
        setTodos(todos.filter(todo => todo.id !== toDeleteTodo.id));
    }

    function editTodo(editedItem) {
        let tempArray = [...todos];
        for (let i = 0; i < tempArray.length; i++) {
            if (tempArray[i].id === editedItem.id) {
                tempArray[i] = editedItem;
            }
        }
        setTodos(tempArray);
    }

    function addTodo() {
        setTodos([...todos, {...emptyTodo, id: uuid() + 1}]);
    }


    return [todos,deleteTodo,editTodo,addTodo,toggleTodo]
}

export default TodoState;