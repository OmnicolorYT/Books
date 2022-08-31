import React from 'react'
import styles from './Header.module.scss'

const Header = () => {
    return(
        <header>
            <h1 className={styles.header}>MyBooks</h1>
        </header>
    )
}

export default Header