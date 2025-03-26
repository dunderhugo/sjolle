import styles from './Sudoku.module.css';
import { useEffect, useState,  } from 'react';

function Sudoku() {
    const [puzzle, setPuzzle] = useState([]);
    const [solution, setSolution] = useState([]);
    const [difficulty, setDifficulty] = useState("");


    const fetchApi = async () => {
        try{
            const response = await fetch('https://sudoku-api.vercel.app/api/dosuku');
            const data = await response.json();
            console.log(data);
            setPuzzle(data.newboard.grids[0].value);
            setSolution(data.newboard.grids[0].solution);
            setDifficulty(data.newboard.grids[0].difficulty);
        }
        catch{
            console.log("error");
        }
    } 

    useEffect(() => {
        fetchApi();
    }, []);


    
    return (
        <div className={styles.container}>
            <div className={styles.gameBoard}>
                <h1>Sudoku</h1>
                <h2>Difficulty: {difficulty}</h2>
                <div className={styles.puzzle}>
                    {puzzle.map((row, rowIndex) =>
                        row.map((num, colIndex) => (
                            <div 
                                key={`${rowIndex}-${colIndex}`} 
                                className={`${styles.cell} 
                                    ${(colIndex + 1) % 3 === 0 && colIndex !== 8 ? styles.borderRight : ""} 
                                    ${(rowIndex + 1) % 3 === 0 && rowIndex !== 8 ? styles.borderBottom : ""}`
                                }
                            >
                                {num === 0 ? " " : num}
                            </div>
                        ))
                    )}
                </div>
                <button onClick={fetchApi}>New Puzzle</button>
            </div>
        </div>
    );
    
}


export default Sudoku;