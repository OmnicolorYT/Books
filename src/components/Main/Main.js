import React from 'react'
import styles from './Main.module.scss'
import BooksSection from "../BooksSection/BooksSection";

import { useSelector } from 'react-redux'
import AddBookForm from "../AddBookForm/AddBookForm";

const Main = () => {
    const modalForm = useSelector(state => state.modalFormReducer)

    return(
        <div className={styles.main}>
            <BooksSection />
            {modalForm?.opened && <AddBookForm />}
        </div>
    )
}

export default Main