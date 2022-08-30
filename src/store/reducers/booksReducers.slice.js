import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    booksList: [{
        id: 0,
        name: "Добавь свою первую книгу!",
        author: "Даниил",
        publishingYear: "2022",
        publishing: "S&P",
        annotation: "Кликни по 'Добавить книгу', введи всю необходмиую информацию и добавь книгу!" +
            "Еще можешь пользоваться поиском, сортировкой, а так же редактировать уже существующие книги!",
        state: "have",
        genre: "manual",
        pagesCount: "0"
    }]
}

export const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        asd: (state, action) => {
            state.booksList.id = action
        }
    }
})

export const {
    asd
} = booksSlice.actions;

export const booksReducer = booksSlice.reducer;