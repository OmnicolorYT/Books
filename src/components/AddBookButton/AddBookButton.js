import React from 'react'
import styles from './AddBookButton.module.scss'
import {useDispatch} from 'react-redux'
import {openForm} from "../../store/reducers/modalFormReducers.slice";


function AddBookButton() {
    const dispatch = useDispatch()

    const openFormHandler = () => {
        dispatch(openForm())
    }

    return(
        <div className={styles.buttonDiv}>
            <button className={styles.button} onClick={() => openFormHandler()}></button>
        </div>
    )
}

export default AddBookButton