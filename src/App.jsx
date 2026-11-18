
import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router'

import Home from './sections/Home'
import About from './sections/About'
import Domain from './sections/Domain'
import Hosting from './sections/Hosting'
import Blog from './sections/Blog'
import BlogPost from './sections/BlogPost'
import Contact from './sections/Contact'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/domain" element={<Domain />} />
        <Route path="/hosting" element={<Hosting />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App




