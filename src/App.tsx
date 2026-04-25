import { Routes, Route } from 'react-router-dom'
import { SiteNav } from './components/site-nav'
import { Home } from './pages/index'
import { Sharedhosting } from './pages/shared-hosting'
import { Vpshosting } from './pages/vps'
import { About } from './pages/about'
import { Support } from './pages/support'

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <SiteNav />
      <main className="flex-1">
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shared-hosting" element={<Sharedhosting />} />
        <Route path="/vps" element={<Vpshosting />} />
        <Route path="/about" element={<About />} />
        <Route path="/support" element={<Support />} />
        <Route path="*" element={<Home />} />
        </Routes>
      </main>
    </div>
  )
}
