import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null)
  const [selectedBlogId, setSelectedBlogId] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
      <Header 
        onNavigate={(page) => {
          setCurrentPage(page)
          window.scrollTo(0, 0)
        }} 
      />
      
      {currentPage === 'home' && (
        <>
          <Hero onNavigate={(page) => setCurrentPage(page)} />
          <Portfolio onSelectProject={(id) => {
            setSelectedProjectId(id)
            setCurrentPage('project')
          }} />
          <Blog onSelectPost={(id) => {
            setSelectedBlogId(id)
            setCurrentPage('blog-post')
          }} />
          <Contact />
        </>
      )}

      {currentPage === 'portfolio' && (
        <Portfolio onSelectProject={(id) => {
          setSelectedProjectId(id)
          setCurrentPage('project')
        }} />
      )}

      {currentPage === 'project' && selectedProjectId && (
        <div className="container mx-auto px-4 py-20">
          <button 
            onClick={() => setCurrentPage('portfolio')}
            className="mb-8 px-4 py-2 bg-primary-600 hover:bg-primary-700 rounded-lg transition"
          >
            ← Back to Portfolio
          </button>
        </div>
      )}

      {currentPage === 'blog' && (
        <Blog onSelectPost={(id) => {
          setSelectedBlogId(id)
          setCurrentPage('blog-post')
        }} />
      )}

      {currentPage === 'blog-post' && selectedBlogId && (
        <div className="container mx-auto px-4 py-20">
          <button 
            onClick={() => setCurrentPage('blog')}
            className="mb-8 px-4 py-2 bg-primary-600 hover:bg-primary-700 rounded-lg transition"
          >
            ← Back to Blog
          </button>
        </div>
      )}

      <Footer onNavigate={(page) => {
        setCurrentPage(page)
        window.scrollTo(0, 0)
      }} />
    </div>
  )
}

export default App
