import {combineReducers, createStore} from 'redux';
import {persistReducer, persistStore} from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import {booksReducer} from "./reducers/booksReducers.slice";
import {modalFormReducer} from "./reducers/modalFormReducers.slice";
import {uiReducer} from "./reducers/uiReducers.slice";

const rootReducer = combineReducers({
    booksReducer: booksReducer,
    modalFormReducer: modalFormReducer,
    uiReducer: uiReducer
})

const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store = createStore(persistedReducer)

export const persistor = persistStore(store)
