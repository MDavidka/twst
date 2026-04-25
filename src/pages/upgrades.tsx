import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { Slider } from '@/components/ui/slider'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { ArrowDownTrayIcon, ArrowLeftIcon, ArrowPathIcon, ArrowUpTrayIcon, CalculatorIcon, FingerPrintIcon, ShoppingCartIcon, SliderHorizontalIcon, SparklesIcon, TableCellsIcon } from '@heroicons/react/24/outline'
import { selectCursorUpgrades, selectGrandmaUpgrades, selectFarmUpgrades, selectMineUpgrades, selectFactoryUpgrades, bulkPurchase, exportBuild } from '@/lib/upgrades-logic'

export function Upgrades() {
  React.useEffect(() => { document.title = "Upgrades" }, [])
  const [cursorCount, setCursorCount] = React.useState(0)
  const [bulkMultiplier, setBulkMultiplier] = React.useState('')

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-7xl">
      <div className="text-center mb-20">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary/80 to-primary bg-clip-text text-transparent mb-6">Upgrades</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">Plan your ultimate cookie empire. Visualize dependencies, compare stats, simulate builds, and bulk-buy your path to CPS domination.</p>
      </div>
      <div className="grid lg:grid-cols-3 gap-8 mb-16">
        <Card className="lg:col-span-2 lg:row-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <div className="h-6 w-6">
                <svg className="h-6 w-6 text-primary">📈</svg>
              </div>
              <div>Interactive Upgrade Dependency Tree</div>
            </CardTitle>
            <CardDescription>Visualize prerequisites and unlock paths for all 50+ upgrades</CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <div className="p-6 border-b">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
                <Button variant="outline" size="sm" onClick={selectCursorUpgrades}>
                  <div className="h-4 w-4">
                    <FingerPrintIcon className="h-4 w-4" />
                  </div>
                  <div>Cursors</div>
                </Button>
                <Button variant="outline" size="sm" onClick={selectGrandmaUpgrades}>Grandmas</Button>
                <Button variant="outline" size="sm" onClick={selectFarmUpgrades}>Farms</Button>
                <Button variant="outline" size="sm" onClick={selectMineUpgrades}>Mines</Button>
                <Button variant="outline" size="sm" onClick={selectFactoryUpgrades}>Factories</Button>
              </div>
              <div className="h-96 bg-gradient-to-br from-muted to-accent rounded-lg p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="h-16 w-16 mx-auto mb-4 bg-primary/10 rounded-2xl flex items-center justify-center">
                    <ArrowPathIcon className="h-8 w-8 text-primary" />
                  </div>
                  <p className="text-muted-foreground">Select an upgrade category to visualize the dependency tree</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>
              <CalculatorIcon className="h-5 w-5" />
              <div>CPS Calculator</div>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <Label htmlFor="cursor-count">Cursor Upgrades</Label>
              <Slider value={cursorCount} onValueChange={setCursorCount} max={50} step={1} className="w-full" />
              <div className="text-sm text-muted-foreground flex justify-between">
                <div>0</div>
                <span>$state.cursorCount</span>
                <div>50</div>
              </div>
            </div>
            <Separator />
            <div className="text-2xl font-bold text-primary text-center">$state.simulatedCPS</div>
            <p className="text-sm text-muted-foreground text-center">Cookies per second</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>
              <SliderHorizontalIcon className="h-5 w-5" />
              <div>Bulk Purchase</div>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Slider value={bulkMultiplier} onValueChange={setBulkMultiplier} max={1000} step={100} className="w-full" />
            <div className="text-sm text-muted-foreground flex justify-between">
              <div>1x</div>
              <span>$state.bulkMultiplier</span>
              <div>1000x</div>
            </div>
            <Button className="w-full" onClick={bulkPurchase}>
              <ShoppingCartIcon className="h-4 w-4 mr-2" />
              <div>Execute Bulk Buy</div>
            </Button>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TableCellsIcon className="h-5 w-5" />
            <div>Upgrade Stats Comparison</div>
          </CardTitle>
          <CardDescription>Cost, CPS boost, and unlock requirements for top upgrades</CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-12">#</TableHead>
                <TableHead>Upgrade</TableHead>
                <TableHead />
                <TableHead />
                <TableHead />
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">1</TableCell>
                <TableCell className="font-medium">Reinforced Index Finger</TableCell>
                <TableCell className="text-right font-mono text-sm">+1%</TableCell>
                <TableCell className="text-right font-mono text-sm">100</TableCell>
                <TableCell className="text-right font-mono text-sm">1 Cursor</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">2</TableCell>
                <TableCell className="font-medium">Carpal Tunnel Prevention Cream</TableCell>
                <TableCell className="text-right font-mono text-sm">+1%</TableCell>
                <TableCell className="text-right font-mono text-sm">500</TableCell>
                <TableCell className="text-right font-mono text-sm">1 Cursor</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">3</TableCell>
                <TableCell className="font-medium">Ambidextrous</TableCell>
                <TableCell className="text-right font-mono text-sm">+2%</TableCell>
                <TableCell className="text-right font-mono text-sm">10K</TableCell>
                <TableCell className="text-right font-mono text-sm">50 Cursors</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter className="justify-end space-x-2">
          <Button variant="outline" size="sm" onClick={exportBuild}>
            <ArrowDownTrayIcon className="h-4 w-4 mr-2" />
            <div>Export Build</div>
          </Button>
          <Button variant="outline" size="sm">
            <ArrowUpTrayIcon className="h-4 w-4 mr-2" />
            <div>Import Build</div>
          </Button>
        </CardFooter>
      </Card>
      <div className="grid md:grid-cols-2 gap-6 mt-16">
        <div className="text-center">
          <Button size="lg" className="w-full max-w-md mx-auto group">
            <ArrowLeftIcon className="h-5 w-5 mr-3 group-hover:-translate-x-1 transition-transform duration-200" />
            <div>Back to Game</div>
            <span className="ml-auto">/play</span>
          </Button>
        </div>
        <Card>
          <CardContent className="p-8 text-center">
            <div className="h-16 w-16 mx-auto mb-4 bg-primary/10 rounded-2xl flex items-center justify-center">
              <SparklesIcon className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Optimized Build Ready</h3>
            <p className="text-sm text-muted-foreground mb-6">Your upgrade path is optimized for maximum CPS growth</p>
            <Badge variant="secondary">Ready to Deploy</Badge>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
