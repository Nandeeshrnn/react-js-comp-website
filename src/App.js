import React from 'react'
import './index.css'
import { Home, About, Contact, Services, Marketing, Advertising, FacebookAds, GoogleAds } from './Components/Pages'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Footer from './Components/Footer/Footer'
import Careers from './Components/Pages/Careers'
import Formdata from './Components/Forms/Formdata'
import Dataform from './Components/FormDataStorage/Dataform'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/marketing' element={<Marketing />} />
        <Route path='/advertising' element={<Advertising />} />
        <Route path='/google-ads' element={<FacebookAds />} />
        <Route path='/facebook-ads' element={<GoogleAds />} />
        <Route path='/careers' element={<Careers />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/formdata' element={<Formdata />} />
        <Route path='/sign-up' element={<Dataform />} />
      </Routes>
      <Footer />
    </div>
  )
}
export default App;


