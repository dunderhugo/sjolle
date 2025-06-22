import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Sudoku from './pages/Sudoku/Sudoku.jsx'
import Wordle from './pages/Wordle/Wordle.jsx'

const router = createBrowserRouter([
  {path : "/", element : <App/>},
  {path : "/sudoku", element : <Sudoku/>},
  {path : "/wordle", element : <Wordle/>},

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
