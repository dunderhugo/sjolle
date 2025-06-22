import styles from './Sudoku.module.css';
import { Link } from 'react-router-dom'

function LevelSelect(){




    return(
        <>
        <h2>Select level</h2>
        <nav className={styles.navMenu}>
            <Link to="/sudoku/easy">Easy</Link>
            <Link to="/sudoku/medium">Medium</Link>
            <Link to="/sudoku/hard">Hard</Link>
        </nav>
        </>
    );
}

export default LevelSelect;