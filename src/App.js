import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Dashboard from './Dashboard'
import Contact from './Contact/Contact'
import Blog from './Blog/Blog'
import About from './AboutUS/About'
import Book from './Book/Book'
import Web3course from './web3Course/Web3course'
import Freecourse from './freeCourse/Freecourse'

const App = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/Blog" element={<Blog/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Book" element={<Book/>}/>
        <Route path="/web3course" element={<Web3course/>}/>
		<Route path="/freecourse" element={<Freecourse/>}/>
    </Routes>
      
    </>
  )
}

export default App
