import { useEffect, useState } from 'react'
import Nav from './components/Nav'
import Home from './components/Home'
import Menu from './components/Menu'

type PageName = 'home' | 'menu'

function App() {
  const [page, setPage] = useState<PageName>('home')
  const [anchor, setAnchor] = useState<string | null>(null)

  useEffect(() => {
    if (page === 'home' && anchor) {
      const element = document.querySelector(anchor)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        setAnchor(null)
      }
    }
  }, [page, anchor])

  const handleNavigate = (page: PageName, targetAnchor?: string) => {
    setPage(page)
    setAnchor(targetAnchor ?? null)
  }

  return (
    <>
      <Nav currentPage={page} onNavigate={handleNavigate} />
      {page === 'home' ? <Home onNavigate={handleNavigate} /> : <Menu />}
    </>
  )
}

export default App
