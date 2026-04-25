import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Slider } from '@/components/ui/slider'
import { ArrowDownTrayIcon, CheckCircleIcon, CookieIcon, CursorIcon, LightningBoltIcon, LockClosedIcon, ShoppingCartIcon, UserGroupIcon, WheatIcon } from '@heroicons/react/24/outline'
import { onCookieClick, togglePause, exportSave, buyUpgrade, setBuildingQuantity, buyBuilding } from '@/lib/play-logic'

export function Play() {
  React.useEffect(() => { document.title = "Play" }, [])
  const [buildingQuantities, setBuildingQuantities] = React.useState('')

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/50">
      <div className="container mx-auto px-4 py-8 lg:px-8 max-w-7xl">
        <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-center mb-2 bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-transparent">Play</h1>
        <p className="text-xl text-muted-foreground text-center mb-16 max-w-2xl mx-auto">Click the cookie to bake! Buy buildings and upgrades to go idle. Progress auto-saves every 30 seconds.</p>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-8 space-y-8">
            <Card className="overflow-hidden">
              <CardHeader className="flex flex-row items-center justify-between pb-4">
                <CardTitle className="text-3xl font-bold">Big Cookie</CardTitle>
                <div className="text-2xl font-bold text-primary">$state.totalCookies</div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="relative h-96 lg:h-[500px] flex items-center justify-center bg-gradient-to-b from-secondary to-accent/20">
                  <Button size="lg" className="h-48 lg:h-64 w-48 lg:w-64 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 group" onClick={onCookieClick}>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 opacity-75 group-hover:opacity-90 blur-xl -z-10" />
                    <CookieIcon className="h-32 lg:h-40 w-32 lg:w-40 text-amber-600 group-hover:rotate-12 transition-transform duration-300" />
                  </Button>
                </div>
              </CardContent>
              <CardFooter className="pt-6">
                <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full">
                  <Badge variant="secondary">
                    <LightningBoltIcon className="h-4 w-4 mr-1" />
                    <div>CPS: </div>
                    <div>$state.cookiesPerSecond</div>
                  </Badge>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" onClick={togglePause}>
                      <div className="h-4 w-4 mr-2" />
                      <div>$state.isPaused ? 'Resume' : 'Pause'</div>
                    </Button>
                    <Button variant="outline" size="sm" onClick={exportSave}>
                      <ArrowDownTrayIcon className="h-4 w-4 mr-2" />
                      <div>Export</div>
                    </Button>
                  </div>
                </div>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Upgrades (20+)</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <Button variant="outline" size="sm" className="h-20 flex flex-col items-center gap-1 p-2" onClick={buyUpgrade} data-upgrade="cursor">
                  <CursorIcon className="h-8 w-8" />
                  <div className="text-xs font-medium">Cursor</div>
                  <div className="text-xs text-muted-foreground">$state.upgradeCosts.cursor</div>
                </Button>
                <Button variant="outline" size="sm" className="h-20 flex flex-col items-center gap-1 p-2" onClick={buyUpgrade} data-upgrade="grandma">
                  <UserGroupIcon className="h-8 w-8" />
                  <div className="text-xs font-medium">Grandma</div>
                  <div className="text-xs text-muted-foreground">$state.upgradeCosts.grandma</div>
                </Button>
                <Button variant="outline" size="sm" className="h-20 flex flex-col items-center gap-1 p-2" onClick={buyUpgrade} data-upgrade="farm">
                  <WheatIcon className="h-8 w-8" />
                  <div className="text-xs font-medium">Farm</div>
                  <div className="text-xs text-muted-foreground">$state.upgradeCosts.farm</div>
                </Button>
              </CardContent>
            </Card>
          </div>
          <div className="lg:col-span-4 lg:sticky lg:top-8 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Buildings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <div>Cursor x10</div>
                  <div className="flex items-center gap-2">
                    <Slider value={buildingQuantities} max={100} step={1} onValueChange={setBuildingQuantity} data-building="cursor" />
                    <div>$state.buildingQuantities[0]</div>
                  </div>
                </div>
                <Button className="w-full" onClick={buyBuilding} data-building="cursor">
                  <ShoppingCartIcon className="h-4 w-4 mr-2" />
                  <div>Buy ($state.buildingCosts.cursor)</div>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm">
                <div className="flex justify-between">
                  <div>Total baked</div>
                  <div>$state.totalBaked</div>
                </div>
                <div className="flex justify-between">
                  <div>Time played</div>
                  <div>$state.timePlayed</div>
                </div>
                <div className="flex justify-between">
                  <div>Clicks</div>
                  <div>$state.totalClicks</div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Achievements</CardTitle>
                <Badge variant="secondary">$state.achievementsUnlocked.length / 50</Badge>
              </CardHeader>
              <CardContent className="space-y-2 max-h-48 overflow-y-auto">
                <div className="flex items-center gap-2 p-2 rounded-md hover:bg-accent bg-primary/10">
                  <CheckCircleIcon className="h-5 w-5 text-primary flex-shrink-0" />
                  <div>First cookie</div>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-md hover:bg-accent opacity-50">
                  <LockClosedIcon className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                  <div>Buy 1 cursor</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
