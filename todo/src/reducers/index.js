export const initialState = {
    item: "Learn about reducers",
    completed: false,
    id: Date.now()
}

const reducer = (state, action) => {
    switch(action.type) {
        case ("SET_NEW_TODO"):
            return ([...state, {
                item: action.payload,
                completed: action.payload,
                id: action.payload
            }]);
        default:
            return (state);
    }
}

export default reducer;