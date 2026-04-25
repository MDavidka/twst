import { Routes, Route } from 'react-router-dom'
import { SiteNav } from './components/site-nav'
import { Home } from './pages/index'
import { Play } from './pages/play'
import { Upgrades } from './pages/upgrades'
import { Leaderboard } from './pages/leaderboard'
import { Achievements } from './pages/achievements'
import { About } from './pages/about'

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <SiteNav />
      <main className="flex-1">
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/play" element={<Play />} />
        <Route path="/upgrades" element={<Upgrades />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Home />} />
        </Routes>
      </main>
    </div>
  )
}
