import Header from '../../components/Header/Header';
import styles from './HomePage.module.css'

import { Link } from 'react-router-dom'


function HomePage(){

    return(
        <>
        <nav className={styles.navMenu}>
            <Link to="/sudoku">Sudoku</Link>
            <Link to="/" className={styles.btnDisabled}>Guess the word</Link>
        </nav>
        </>
    );
}

export default HomePage;