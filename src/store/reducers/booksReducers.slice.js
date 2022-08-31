import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    booksList: [{
        id: 0,
        name: "Добавь свою первую книгу!",
        author: "Даниил",
        publishingYear: "2022",
        publishing: "S&P",
        annotation: "Кликни по 'Добавить книгу', введи всю необходмиую информацию и добавь книгу!" +
            " Еще можешь пользоваться поиском, сортировкой, а так же редактировать уже существующие книги!",
        state: "have",
        genre: "manual",
        pagesCount: "0"
    }]
}

export const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        addBook: (state, action) => {
            console.log(action.payload)
            let id
            if (state.booksList.length !== 0) {
                id = state.booksList[state.booksList.length - 1].id + 1
            } else {
                id = 0
            }
            state.booksList.push({...action.payload, id: id})
            console.log(state.booksList)
        }
    }
})

export const {
    addBook
} = booksSlice.actions;

export const booksReducer = booksSlice.reducer;