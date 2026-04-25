import { Routes, Route } from 'react-router-dom'
import { SiteNav } from './components/site-nav'
import { Home } from './pages/index'
import { Sharedhosting } from './pages/shared-hosting'
import { Vpshosting } from './pages/vps'
import { Pricing } from './pages/pricing'
import { Network } from './pages/network'
import { Contact } from './pages/contact'

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <SiteNav />
      <main className="flex-1">
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shared-hosting" element={<Sharedhosting />} />
        <Route path="/vps" element={<Vpshosting />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/network" element={<Network />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
        </Routes>
      </main>
    </div>
  )
}
