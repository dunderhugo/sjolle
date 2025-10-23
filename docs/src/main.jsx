import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Sudoku from './pages/Sudoku/Sudoku.jsx'
import LevelSelect from './pages/Sudoku/LevelSelect.jsx';
import WordGuesser from './pages/WordGuesser/WordGuesser.jsx'
import '../i18n';

const router = createBrowserRouter([
  {path : "/", element : <App/>},
  {path : "/word-guesser", element : <WordGuesser/>},
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
