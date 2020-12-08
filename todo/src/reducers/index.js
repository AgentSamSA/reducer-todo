import { SET_NEW_TODO, SET_COMPLETED, SET_NEW_TODO_ITEM, SET_CLEAR_COMPLETED } from "../actions/index";

export const initialState = {
    todo: [
        {
            task: "Learn about reducers",
            completed: false,
            id: Date.now()
        }
    ],
    newTodoItem: ""
}

const reducer = (state, action) => {
    switch (action.type) {
        case (SET_NEW_TODO):
            return ({
                ...state, todo: [...state.todo,
                {
                    task: action.payload,
                    completed: false,
                    id: Date.now()
                }]
            });
        case (SET_COMPLETED):
            return ({
                ...state, todo:
                    state.todo.map((item) => {
                        if (item.id === action.id) {
                            return ({ ...item, completed: !item.completed });
                        } else {
                            return (item);
                        }
                    })
            });
        case (SET_NEW_TODO_ITEM):
            return ({ ...state, newTodoItem: action.payload });
        case (SET_CLEAR_COMPLETED):
            return ({
                ...state, todo:
                    state.todo.filter(item => {
                        return item.completed === false;
                    })
            });
        default:
            return (state);
    }
}

export default reducer;