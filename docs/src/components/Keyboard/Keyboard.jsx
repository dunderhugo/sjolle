import { useState } from 'react';
import styles from './Keyboard.module.css';

const Keyboard = () => {
  const [keyStates, setKeyStates] = useState({});
  const [currentInput, setCurrentInput] = useState('');

  const topRow = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
  const middleRow = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
  const bottomRow = ['Z', 'X', 'C', 'V', 'B', 'N', 'M'];

  const handleKeyPress = (key) => {
    if (key === 'ENTER') {
      console.log('Enter pressed, current word:', currentInput);
      setCurrentInput('');
    } else if (key === 'BACKSPACE') {
      setCurrentInput(prev => prev.slice(0, -1));
    } else if (currentInput.length < 5) {
      setCurrentInput(prev => prev + key);
    }
  };

  const toggleKeyState = (key) => {
    setKeyStates(prev => {
      const current = prev[key] || 'default';
      const states = ['default', 'absent', 'present', 'correct'];
      const nextIndex = (states.indexOf(current) + 1) % states.length;
      return { ...prev, [key]: states[nextIndex] };
    });
  };

  const getKeyClassName = (key) => {
    const state = keyStates[key] || 'default';
    return `${styles.key} ${styles.letterKey} ${styles[`key${state.charAt(0).toUpperCase() + state.slice(1)}`]}`;
  };

  const KeyButton = ({ letter, onClick, onRightClick, className, children }) => (
    <button
      className={className}
      onClick={onClick}
      onContextMenu={(e) => {
        e.preventDefault();
        onRightClick && onRightClick();
      }}
    >
      {children || letter}
    </button>
  );

  return (
    <div className={styles.keyboardContainer}>
      <div className={styles.keyboard}>
        {/* Top Row */}
        <div className={styles.keyboardRow}>
          {topRow.map(letter => (
            <KeyButton
              key={letter}
              letter={letter}
              className={getKeyClassName(letter)}
              onClick={() => handleKeyPress(letter)}
              onRightClick={() => toggleKeyState(letter)}
            />
          ))}
        </div>

        {/* Middle Row */}
        <div className={styles.keyboardRow}>
          {middleRow.map(letter => (
            <KeyButton
              key={letter}
              letter={letter}
              className={getKeyClassName(letter)}
              onClick={() => handleKeyPress(letter)}
              onRightClick={() => toggleKeyState(letter)}
            />
          ))}
        </div>

        {/* Bottom Row */}
        <div className={styles.keyboardRow}>
          <KeyButton
            letter="ENTER"
            className={`${styles.key} ${styles.specialKey} ${styles.keyDefault}`}
            onClick={() => handleKeyPress('ENTER')}
          >
            ENTER
          </KeyButton>
          
          {bottomRow.map(letter => (
            <KeyButton
              key={letter}
              letter={letter}
              className={getKeyClassName(letter)}
              onClick={() => handleKeyPress(letter)}
              onRightClick={() => toggleKeyState(letter)}
            />
          ))}
          
          <KeyButton
            letter="BACKSPACE"
            className={`${styles.key} ${styles.specialKey} ${styles.keyDefault}`}
            onClick={() => handleKeyPress('BACKSPACE')}
          >
            ⌫
          </KeyButton>
        </div>
      </div>
    </div>
  );
};

export default Keyboard;