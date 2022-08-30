import React from 'react'
import styles from './BooksSection.module.scss'
import BookCard from "../BookCard/BookCard";
import AddBookButton from "../AddBookButton/AddBookButton";

function BooksSection() {
    return(
        <div className={styles.books_section}>
            <AddBookButton />
            <BookCard />
        </div>
    )
}

export default BooksSection