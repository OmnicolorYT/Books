export const addBook =() => {
    return {
        type: "ADD_BOOK"
    }
}

export const removeBook =(id) => {
    return {
        type: "REMOVE_BOOK",
        payload: {id}
    }
}

export const startEditBook =(id) => {
    return {
        type: "START_EDIT_BOOK",
        payload: {id}
    }
}

export const confirmEditBook =() => {
    return {
        type: "CONFIRM_EDIT_BOOK"
    }
}

export const changeBookState =(id, state) => {
    return {
        type: "CHANGE_BOOK_STATE",
        payload: {id, state}
    }
}