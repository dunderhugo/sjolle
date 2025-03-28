import styles from './Sudoku.module.css';
import { useEffect, useState,  } from 'react';

function Sudoku() {
    const [puzzle, setPuzzle] = useState([]);
    const [solution, setSolution] = useState([]);
    const [difficulty, setDifficulty] = useState("");
    const [activeCell, setActiveCell] = useState(null);
    const [originalPuzzle, setOriginalPuzzle] = useState([]);

    const fetchApi = async () => {
        try{
            const response = await fetch('https://sudoku-api.vercel.app/api/dosuku');
            const data = await response.json();
            setPuzzle(data.newboard.grids[0].value);
            setOriginalPuzzle(data.newboard.grids[0].value);
            setSolution(data.newboard.grids[0].solution);
            setDifficulty(data.newboard.grids[0].difficulty);
        }
        catch{
            console.log("error");
        }
    }

    const handleKeyDown = (event) => {
        if(event.key === "ArrowUp") {
            setActiveCell((prev) => ({ rowIndex: Math.max(prev.rowIndex - 1, 0), colIndex: prev.colIndex }));
        }
        if(event.key === "ArrowDown") {
            setActiveCell((prev) => ({ rowIndex: Math.min(prev.rowIndex + 1, 8), colIndex: prev.colIndex }));
        }
        if(event.key === "ArrowLeft") {
            setActiveCell((prev) => ({ rowIndex: prev.rowIndex, colIndex: Math.max(prev.colIndex - 1, 0) }));
        }
        if(event.key === "ArrowRight") {
            setActiveCell((prev) => ({ rowIndex: prev.rowIndex, colIndex: Math.min(prev.colIndex + 1, 8) }));
        }
        if(originalPuzzle[activeCell.rowIndex][activeCell.colIndex] !== 0){
            return;
        }
        if(event.key === "Backspace" || event.key === "Delete" || event.key === "Escape") {
            const { rowIndex, colIndex } = activeCell;
            const newPuzzle = puzzle.map((row, rIdx) =>
                row.map((num, cIdx) =>
                    rIdx === rowIndex && cIdx === colIndex ? 0 : num
                )
            );
            setPuzzle(newPuzzle);
        }
        if (activeCell && /^[0-9]$/.test(event.key)) {
            const { rowIndex, colIndex } = activeCell;
            const newPuzzle = puzzle.map((row, rIdx) =>
                row.map((num, cIdx) =>
                    rIdx === rowIndex && cIdx === colIndex ? Number(event.key) : num
                )
            );
            setPuzzle(newPuzzle);
        }
    };

    function numPadPress(numBtn){
        if(originalPuzzle[activeCell.rowIndex][activeCell.colIndex] !== 0){
            return;
        }
        const { rowIndex, colIndex } = activeCell;
        const newPuzzle = puzzle.map((row, rIdx) =>
            row.map((num, cIdx) =>
                rIdx === rowIndex && cIdx === colIndex ? numBtn : num
            )
        );
        setPuzzle(newPuzzle);
    }
    function checkIfSolved(){
        let isSolved = true;
        for (let rowIndex = 0; rowIndex < solution.length; rowIndex++) {
            for (let colIndex = 0; colIndex < solution[rowIndex].length; colIndex++) {
            if (solution[rowIndex][colIndex] !== puzzle[rowIndex][colIndex]) {
                return isSolved = false;
            }
            }
        }
        isSolved = true;
        return isSolved;
    }

    useEffect(() => {
        fetchApi()
    }, []);
    useEffect(() => {
        if(!activeCell) return;
        if(checkIfSolved()){
            setTimeout(() => {
                alert("You solved the puzzle!");
            }, 100);
        }
        else{
            console.log("not solved yet")
        }
    }, [puzzle]);
    
    return (
        <div className={styles.container}  tabIndex={0} onKeyDown={handleKeyDown}>
            <div className={styles.gameBoard}>
                <h1>Sudoku</h1>
                {/* <button onClick={() => console.log(activeCell)}>console</button> */}
                <h2>Difficulty: {difficulty}</h2>
                <div className={styles.puzzle} >
                    {puzzle.map((row, rowIndex) =>
                        row.map((num, colIndex) => (
                            <div onClick={() => setActiveCell({rowIndex, colIndex })}
                                key={`${rowIndex}-${colIndex}`} 
                                className={`${styles.cell} 
                                    ${(colIndex + 1) % 3 === 0 && colIndex !== 8 ? styles.borderRight : ""} 
                                    ${(rowIndex + 1) % 3 === 0 && rowIndex !== 8 ? styles.borderBottom : ""}
                                    ${colIndex % 3 === 0 && colIndex !== 0 ? styles.borderLeft : ""} 
                                    ${rowIndex % 3 === 0 && rowIndex !== 0 ? styles.borderTop : ""}
                                    ${activeCell?.rowIndex === rowIndex && activeCell?.colIndex === colIndex ? styles.active : ""}`
                                }
                            >
                                {num === 0 ? " " : num}
                            </div>
                        ))
                    )}
                </div>
                <div className={styles.numpad}>
                    <button onClick={() => numPadPress(1)}>1</button>
                    <button onClick={() => numPadPress(2)}>2</button>
                    <button onClick={() => numPadPress(3)}>3</button>
                    <button onClick={() => numPadPress(4)}>4</button>
                    <button onClick={() => numPadPress(5)}>5</button>
                    <button onClick={() => numPadPress(6)}>6</button>
                    <button onClick={() => numPadPress(7)}>7</button>
                    <button onClick={() => numPadPress(8)}>8</button>
                    <button onClick={() => numPadPress(9)}>9</button>
                    <button onClick={() => numPadPress(0)}>X</button>
                </div>
                <button onClick={fetchApi}>New Puzzle</button>
            </div>
        </div>
    );
    
}


export default Sudoku;