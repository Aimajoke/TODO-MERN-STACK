import {Routes, Route} from 'react-router-dom'
import MainTodo from './pages/MainTodo'
import NotFound from './pages/NotFound'
import TodoForm from './pages/TodoForm'
import Navbar from './pages/components/Navbar.js'
import TodosContextProvider from './pages/context/TodosContextProvider'
import Footer from './pages/components/Footer'

function App() {

  return (
    <TodosContextProvider >
      <main className='relative min-h-screen bg-zinc-900 pb-20 text-gray-100'>
    <Navbar/>
    
    <Routes>
      <Route path='/' element={<MainTodo/>}/>
      <Route path='/cementery' element={<MainTodo/>}/>
      <Route path='/new' element={<TodoForm/>}/>
      <Route path='/edit/:id' element={<TodoForm/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    <Footer/>
      </main>
    </TodosContextProvider>
  )
}

export default App