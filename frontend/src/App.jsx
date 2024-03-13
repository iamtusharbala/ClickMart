import { Routes, Route } from 'react-router-dom'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Home from '../pages/Home'
import AdminRegister from '../pages/AdminRegister'
import AdminLogin from '../pages/AdminLogin'
import UserProfile from '../pages/UserProfile'


function App() {
  return (
    <Routes>
      {/* User */}
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/userprofile' element={<UserProfile />} />

      {/* Admin */}
      <Route path='/admin/register' element={<AdminRegister />} />
      <Route path='/admin/login' element={<AdminLogin />} />
    </Routes>
  )
}

export default App
