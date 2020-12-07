import React, { useReducer } from "react";
import reducer, { initialState } from "../reducers/index";

const Todo = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    // const handleChanges = event => {
    //     dispatch(setNewTodo(event.target.value);)
    // }

    return (
        <div>
            <h1>Todo List</h1>

            <div className="todo">
                <p key={state.id}>{state.item}</p>
            </div>

            <div>
                <input
                className="todo-input"
                type="text"
                name="newTodo"
                value={state.newTodo}
                // onChange={handleChanges}
                />
                <button>Add an item</button>
            </div>
        </div>
    )
}

export default Todo;