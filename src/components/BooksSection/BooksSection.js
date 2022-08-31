import React from 'react'
import styles from './BooksSection.module.scss'
import BookCard from "../BookCard/BookCard";
import AddBookButton from "../AddBookButton/AddBookButton";
import {useSelector} from "react-redux";

function BooksSection() {
    const books = useSelector(state => state.booksReducer.booksList)
    const booksList = books.map((book) => {
        return(
            <BookCard book={book} key={book.id} />
        )
    })
    return(
        <div className={styles.books_section}>
            <AddBookButton />
            {booksList}
        </div>
    )
}

export default BooksSection