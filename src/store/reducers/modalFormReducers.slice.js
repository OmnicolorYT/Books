import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    opened: false
}

export const modalFormSlice = createSlice({
    name: 'modalForm',
    initialState,
    reducers:{
        openForm: (state, action) => {
            state.opened = true
        },
        closeForm: (state, action) => {
            state.opened = false
        }
    }
})

export const {
    openForm,
    closeForm
} = modalFormSlice.actions;

export const modalFormReducer = modalFormSlice.reducer;