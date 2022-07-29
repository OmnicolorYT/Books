import initialState from './initialState'

export default function booksReducers(state = initialState.books, action) {
    switch (action.type) {
        default:
            return state;
    }
}