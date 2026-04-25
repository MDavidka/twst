import { Routes, Route } from 'react-router-dom'
import { SiteNav } from './components/site-nav'
import { Home } from './pages/index'
import { Play } from './pages/play'
import { Leaderboard } from './pages/leaderboard'
import { Upgrades } from './pages/upgrades'
import { Achievements } from './pages/achievements'
import { Profile } from './pages/profile'
import { Faq } from './pages/faq'

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <SiteNav />
      <main className="flex-1">
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/play" element={<Play />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/upgrades" element={<Upgrades />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="*" element={<Home />} />
        </Routes>
      </main>
    </div>
  )
}
