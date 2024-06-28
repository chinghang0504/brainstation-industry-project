import './App.scss'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import BasePage from './pages/BasePage/BasePage'
import Feature from './components/Feature'

function App() {

  return (
    <> 
      <BasePage />
      <Feature />
    </>
  )
}

export default App
