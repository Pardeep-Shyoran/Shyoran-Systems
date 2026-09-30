import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Services from '../pages/Services/Services'
import About from '../pages/About/About'
import Contact from '../pages/Contact/Contact'
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'
import PageNotFound from '../pages/PageNotFound/PageNotFound'

const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  )
}

export default MainRoutes