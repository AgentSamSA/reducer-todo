export const SET_NEW_TODO = "SET_NEW_TODO";
export const SET_COMPLETED = "SET_COMPLETED";

export const setNewTodo = (todo) => {
    return ({ type: SET_NEW_TODO, payload: todo });
}

export const setCompleted = (completed) => {
    return ({ type: SET_COMPLETED, payload: completed });
}