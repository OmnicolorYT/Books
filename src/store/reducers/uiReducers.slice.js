import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    sort: ''
}

export const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        plug: (state, action) => {
            state.sort = action
        } //затычка чтобы ничего не сломалось
    }
})

export const {
    plug
} = uiSlice.actions

export const uiReducer = uiSlice.reducer