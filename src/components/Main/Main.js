import React from 'react'
import styles from './Main.module.scss'
import BooksSection from "../BooksSection/BooksSection";

import { useSelector } from 'react-redux'
import AddBookForm from "../AddBookForm/AddBookForm";
import BookCard from "../BookCard/BookCard";

function Main() {
    const modalForm = useSelector(state => state.modalFormReducer)
    const books = useSelector(state => state.booksReducer.booksList)
    const booksList = books.map((book) => {
        return(
            <BookCard book={book} key={book.id} />
        )
    })

    return(
        <div className={styles.main}>
            <BooksSection />
            {booksList}
            {modalForm?.opened && <AddBookForm />}
        </div>
    )
}

export default Main