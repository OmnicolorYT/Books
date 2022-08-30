import React from 'react'
import styles from './AddBookButton.module.scss'
import {useDispatch, useSelector} from 'react-redux'
import {openForm} from "../../store/reducers/modalFormReducers.slice";


function AddBookButton() {
    const dispatch = useDispatch()
    const state = useSelector(state => state.modalFormReducer)

    const openFormHandler = (state) => {
        dispatch(openForm(state))
    }

    return(
        <div className={styles.button_div}>
            <button className={styles.button} onClick={() => openFormHandler(state)}>Добавить</button>
        </div>
    )
}

export default AddBookButton