import { useState } from 'react'
import './App.css'
import AppLayout from './components/layout/AppLayout'
import { Route, Routes } from 'react-router'
import TasksPage from './components/TasksPage'
import Websites from './pages/Websites'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <AppLayout>
      <Routes>
        <Route path='/' element={<TasksPage />}/>
        <Route path='/websites' element={<Websites />}/>
      </Routes>
    </AppLayout>
    </>
  )
}

export default App
