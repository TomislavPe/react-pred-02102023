import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import ListUsers from './pages/ListUsers'
import AddUser from './pages/AddUser'
import NotFound from './pages/NotFound'

function App() {

  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home page</Link>
            </li>
            <li>
              <Link to="/add-user">Add User</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<ListUsers/>}/>
        <Route path="add-user" element={<AddUser/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App
