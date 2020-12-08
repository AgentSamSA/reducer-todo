export const SET_NEW_TODO = "SET_NEW_TODO";
export const SET_COMPLETED = "SET_COMPLETED";
export const SET_NEW_TODO_ITEM = "SET_NEW_TODO_ITEM";
export const SET_CLEAR_COMPLETED = "SET_CLEAR_COMPLETED";

export const setNewTodo = (todo) => {
    return ({ type: SET_NEW_TODO, payload: todo });
}

export const setCompleted = (id) => {
    return ({ type: SET_COMPLETED, id: id });
}

export const setNewTodoItem = (todoItem) => {
    return ({ type: SET_NEW_TODO_ITEM, payload: todoItem });
}