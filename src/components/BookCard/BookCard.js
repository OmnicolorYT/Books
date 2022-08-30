import React from 'react'
import styles from './BookCard.module.scss'
import {useDispatch} from "react-redux";
import classNames from "classnames";

function BookCard(props) {
    const book = props.book
    const dispatch = useDispatch()
    const cx = classNames.bind(styles)
    console.log(book)

    return(
        <div className={styles.book_card}>
            <h2>{book.name}</h2>
            <p>{book.author}</p>
            <p>{book.publishingYear}</p>
            <p>{book.publishing}</p>
            <p>{book.annotation}</p>
            <p>{book.state}</p>
            <p>{book.pagesCount}</p>
        </div>
    )
}

export default BookCard