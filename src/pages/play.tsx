import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Spinner } from '@/components/ui/spinner'
import { ArrowPathIcon, CloudArrowDownIcon, CloudArrowUpIcon, FingerPrintIcon, FlowerIcon, UserIcon } from '@heroicons/react/24/outline'
import { clickCookie, saveGame, loadGame, resetGame, buyCursor, buyGrandma, buyFarm } from '@/lib/play-logic'

export function Play() {
  React.useEffect(() => { document.title = "Play" }, [])
  const [cantAffordCursor, setCantAffordCursor] = React.useState('')
  const [cantAffordGrandma, setCantAffordGrandma] = React.useState('')
  const [cantAffordFarm, setCantAffordFarm] = React.useState('')

  return (
    <div className="min-h-screen bg-background text-foreground container mx-auto px-4 py-8 lg:px-8">
      <div className="grid lg:grid-cols-4 gap-8">
        <main className="lg:col-span-3 space-y-8">
          <Card className="text-center p-8">
            <CardHeader>
              <CardTitle className="text-4xl lg:text-5xl font-bold tracking-tight">Play</CardTitle>
              <CardDescription>Click the cookie to earn cookies per second. Buy upgrades to multiply your production!</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center space-y-6">
              <div className="relative group">
                <div className="w-48 h-48 lg:w-64 lg:h-64 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full shadow-2xl cursor-pointer transition-all hover:scale-110 active:scale-95 border-8 border-amber-200 group-hover:border-amber-300 p-8 lg:p-12" onClick={clickCookie}>
                  <div className="w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.3)_0%,transparent_50%)] rounded-full animate-ping-slow" />
                  <div className="w-32 h-32 lg:w-40 lg:h-40 bg-amber-200 rounded-full relative flex items-center justify-center">
                    <div className="text-2xl lg:text-3xl font-bold text-amber-700 drop-shadow-lg">🍪</div>
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="text-2xl font-bold text-white drop-shadow-2xl animate-bounce opacity-0 group-hover:opacity-100 transition-opacity">+1</div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-md">
                <Card>
                  <CardHeader>
                    <CardTitle>Total Cookies</CardTitle>
                  </CardHeader>
                  <CardContent className="text-3xl font-bold text-primary">$state.totalCookies</CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>
                      <span>Cookies per Second</span>
                      <span className="ml-1">
                        <Spinner className="h-4 w-4 animate-spin" />
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-3xl font-bold text-primary">$state.cps</CardContent>
                </Card>
              </div>
            </CardContent>
            <CardFooter className="justify-center space-x-4">
              <Button variant="outline" onClick={saveGame}>
                <CloudArrowDownIcon className="h-4 w-4 mr-2" />
                <span>Save</span>
              </Button>
              <Button variant="outline" onClick={loadGame}>
                <CloudArrowUpIcon className="h-4 w-4 mr-2" />
                <span>Load</span>
              </Button>
              <Button variant="destructive" onClick={resetGame}>
                <ArrowPathIcon className="h-4 w-4 mr-2" />
                <span>Reset</span>
              </Button>
            </CardFooter>
          </Card>
        </main>
        <aside className="lg:col-span-1 sticky top-8 h-fit space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Upgrade Shop</CardTitle>
              <CardDescription>Buy buildings and cursors to boost your cookie production</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 max-h-96 overflow-y-auto">
                <div className="flex items-center justify-between p-3 border rounded-lg bg-muted/50 hover:bg-muted cursor-pointer transition-colors" onClick={buyCursor}>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                      <FingerPrintIcon className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">Cursor</div>
                      <div className="text-sm text-muted-foreground">Autoclicks once every 10 seconds</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="text-sm font-mono">$state.cursorCost</div>
                    <Button size="sm" variant="outline" disabled={cantAffordCursor}>Buy</Button>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg bg-muted/50 hover:bg-muted cursor-pointer transition-colors" onClick={buyGrandma}>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                      <UserIcon className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">Grandma</div>
                      <div className="text-sm text-muted-foreground">A nice grandma to bake more cookies</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="text-sm font-mono">$state.grandmaCost</div>
                    <Button size="sm" variant="outline" disabled={cantAffordGrandma}>Buy</Button>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg bg-muted/50 hover:bg-muted cursor-pointer transition-colors" onClick={buyFarm}>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                      <FlowerIcon className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">Farm</div>
                      <div className="text-sm text-muted-foreground">Grows cookie plants</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="text-sm font-mono">$state.farmCost</div>
                    <Button size="sm" variant="outline" disabled={cantAffordFarm}>Buy</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Recent Achievements</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-center space-x-3 p-2 bg-green-50 border border-green-200 rounded-md">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span className="text-sm font-medium text-green-900">First cookie clicked! 🎉</span>
              </div>
              <div className="flex items-center space-x-3 p-2 bg-blue-50 border border-blue-200 rounded-md">
                <div className="w-2 h-2 bg-blue-500 rounded-full" />
                <span className="text-sm font-medium text-blue-900">Bought your first cursor</span>
              </div>
            </CardContent>
          </Card>
        </aside>
      </div>
    </div>
  )
}
