import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    sort: ''
}

export const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        asd: (state, action) => {
            state.sort = action
        }
    }
})

export const {
    asd
} = uiSlice.actions

export const uiReducer = uiSlice.reducer