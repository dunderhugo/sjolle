import Header from '../../components/Header/Header';
import styles from './HomePage.module.css'

import { Link } from 'react-router-dom'


function HomePage(){


    return(

        <>
        <Header 
        gamesName='Home'/>
            <nav>
                <ul>
                    <li>
                        <Link to="/sudoku">Sudoku</Link>
                    </li>
                    <li>
                        <Link to="/wordle">Wordle</Link>
                    </li>

                </ul>
            </nav>

        </>
    );
}

export default HomePage;