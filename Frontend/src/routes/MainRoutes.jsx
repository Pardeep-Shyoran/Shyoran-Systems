import { Routes, Route } from 'react-router-dom'
import AppLayout from '../components/Layout/AppLayout'
import Home from '../pages/Home/Home'
import Services from '../pages/Services/Services'
import Work from '../pages/Work/Work'
import Pricing from '../pages/Pricing/Pricing'
import About from '../pages/About/About'
import Contact from '../pages/Contact/Contact'
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'
import PageNotFound from '../pages/PageNotFound/PageNotFound'

const MainRoutes = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/work" element={<Work />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portal" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  )
}

export default MainRoutes