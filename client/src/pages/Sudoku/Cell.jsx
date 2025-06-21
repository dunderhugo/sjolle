import styles from './Sudoku.module.css';
import React from 'react'
import clsx from 'clsx';


const Cell = React.memo(({ num, rowIndex, colIndex, activeCell, originalPuzzle, onClick }) => {
    const isLocked = originalPuzzle[rowIndex][colIndex] !== 0;
    const isActive = activeCell?.rowIndex === rowIndex && activeCell?.colIndex === colIndex;

    const cellClass = clsx(styles.cell, {
        [styles.borderRight]: (colIndex + 1) % 3 === 0 && colIndex !== 8,
        [styles.borderBottom]: (rowIndex + 1) % 3 === 0 && rowIndex !== 8,
        [styles.borderLeft]: colIndex % 3 === 0 && colIndex !== 0,
        [styles.borderTop]: rowIndex % 3 === 0 && rowIndex !== 0,
        [styles.active]: isActive,
        [styles.lockedCell]: isLocked,
    });

    return(
        <div onClick={onClick} className={cellClass}>
            {num === 0 ? " " : num}
        </div>
    );
});

export default Cell