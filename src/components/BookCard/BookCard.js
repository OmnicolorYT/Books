import React from 'react'
import classNames from "classnames";
import styles from './BookCard.module.scss'

const max_name_length = 33;
const max_author_length = 9;
const max_publishing_length = 39;
const max_annotation_length = 200;

const shortcutStr = (str, max_length) => {
    const length = str.length
    if (length > max_length) {
        return (str.substring(0, max_length - 3) + "...")
    } else {
        return str
    }
}

const annotationStr = (str) => {
    if (str.length !== 0) {
        return ("Аннотация: " + shortcutStr(str, max_annotation_length))
    } else {
        return ("Аннотация отсутствует")
    }
}

function BookCard(props) {
    const book = props.book
    const cx = classNames.bind(styles)

    return(
        <div className={cx(styles.book_card, {have: true}, {want: false}, {read: false})}>
            <h2 className={cx(styles.name)}>{shortcutStr(book.name, max_name_length)}</h2>
            <p className={styles.author}>{shortcutStr(book.author, max_author_length)}</p>
            <p className={styles.publishing_year}>{book.publishingYear}</p>
            <p className={styles.publishing}>{shortcutStr(book.publishing, max_publishing_length)}</p>
            <p className={styles.annotation}>{annotationStr(book.annotation)}</p>
            <p className={styles.pages_count}>Страниц: {book.pagesCount}</p>
        </div>
    )
}

export default BookCard