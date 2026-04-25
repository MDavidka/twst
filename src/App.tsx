import { Routes, Route } from 'react-router-dom'
import { SiteNav } from './components/site-nav'
import { Home } from './pages/index'
import { Hosting } from './pages/hosting'
import { Domains } from './pages/domains'
import { About } from './pages/about'
import { Contact } from './pages/contact'

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <SiteNav />
      <main className="flex-1">
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hosting" element={<Hosting />} />
        <Route path="/domains" element={<Domains />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
        </Routes>
      </main>
    </div>
  )
}
