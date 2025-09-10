import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './components/backend/Login'
import { ToastContainer } from 'react-toastify';
import Dashboard from './components/backend/Dashboard'
import Show from './components/backend/services/Show'
import Create from './components/backend/services/Create'
import Edit from './components/backend/services/Edit'


const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>

<Navbar/>
      <Routes>

 <Route path='/' element={<Home/>} />
 <Route path='/services' element={<Services/>} />
 <Route path='/about' element={<About/>} />
 <Route path='/contact' element={<Contact/>} />
 <Route path='/admin/login' element={<Login/>} />
 <Route path='/admin/dashboard' element={<Dashboard/>} />
 <Route path='/admin/services' element={<Show/>} />
 <Route path='/admin/services/create' element={<Create/>} />
 <Route path='/admin/services/edit/:id' element={<Edit/>} />

      </Routes>

      <ToastContainer/>

      <Footer/>

    </div>
  )
}

export default App