
import { Route, Routes } from 'react-router-dom'
import { route } from './route'
import './App.css'

function App() {

  return (
    <>
    <Routes >
      <Route path={route.home.path} element={route.home.element}/>
      <Route path={route.notFound.path} element={route.notFound.element}/>
    </Routes>
    </>
  )
}

export default App
