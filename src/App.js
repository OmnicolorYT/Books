import React, {Component} from "react"
import Main from './components/Main/Main'
import Header from './components/Header/Header'
import styles from './App.scss'
import AddBookForm from "./components/AddBookForm/AddBookForm";

class App extends Component{

    render() {
        return (
            <div className={styles.app}>
                <Header/>
                <Main />
                <AddBookForm/>
            </div>
        );
    }
}

export default App;
