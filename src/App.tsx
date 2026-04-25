import { Routes, Route } from 'react-router-dom'
import { SiteNav } from './components/site-nav'
import { Home } from './pages/index'
import { Shop } from './pages/shop'
import { Compare } from './pages/compare'
import { Cart } from './pages/cart'
import { Support } from './pages/support'

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <SiteNav />
      <main className="flex-1">
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/support" element={<Support />} />
        <Route path="*" element={<Home />} />
        </Routes>
      </main>
    </div>
  )
}
