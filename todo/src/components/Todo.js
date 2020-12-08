import React, { useReducer } from "react";
import reducer, { initialState } from "../reducers/index";

import { setNewTodo, setCompleted, setNewTodoItem } from "../actions/index";

import "./todo.css";

const Todo = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleChanges = event => {
        dispatch(setNewTodoItem(event.target.value));
    }

    const toggleCompleted = (id) => {
        dispatch(setCompleted(id));
        console.log(state.todo);
    }

    const submitNewTodo = event => {
        event.preventDefault();
        dispatch(setNewTodo(state.newTodoItem));
        dispatch(setNewTodoItem(""));
    }

    const clearCompleted = () => {
        
    }

    return (
        <div>
            <h1>Todo List</h1>
            {
                state.todo.map(item => {
                    return (
                        <div className={`todo${item.completed ? " completed" : ""}`} onClick={() => toggleCompleted(item.id)}>
                            <p key={item.id}>{item.task}</p>
                        </div>)
                }
                )}

            <div>
                <form onSubmit={submitNewTodo}>
                    <input
                        className="todo-input"
                        type="text"
                        name="newTodo"
                        value={state.newTodoItem}
                        onChange={handleChanges}
                    />
                    <button>Add an item</button>
                </form>
            </div>
        </div>
    )
}

export default Todo;