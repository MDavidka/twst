import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Progress } from '@/components/ui/progress'
import { Separator } from '@/components/ui/separator'
import { Slider } from '@/components/ui/slider'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ArrowDownOnSquareIcon, ArrowRightIcon, BoltIcon, CalculatorIcon, ClockIcon, Diagram3Icon, FingerPrintIcon, LinkIcon, PlayIcon, SparklesIcon } from '@heroicons/react/24/outline'

export function Upgrades() {
  React.useEffect(() => { document.title = "Upgrades" }, [])

  return (
    <div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24 max-w-7xl">
        <div className="text-center mb-20 lg:mb-32">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent mb-6">Upgrades</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">Unlock powerful multipliers, auto-clickers, and synergies to supercharge your cookie empire. Plan your progression with our upgrade calculator.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <Button size="lg" className="gap-2 font-medium">
              <CalculatorIcon className="h-5 w-5" />
              <div>Open Upgrade Planner</div>
            </Button>
            <Button variant="outline" size="lg" className="gap-2">
              <ArrowRightIcon className="h-5 w-5" />
              <div>Go to Game</div>
            </Button>
          </div>
        </div>
        <Tabs defaultValue="click-power" className="w-full max-w-6xl mx-auto mb-16">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-16">
            <TabsTrigger value="click-power" className="gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <FingerPrintIcon className="h-4 w-4 mt-0.5" />
              <div>Click Power</div>
            </TabsTrigger>
            <TabsTrigger value="auto-click" className="gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <ClockIcon className="h-4 w-4 mt-0.5" />
              <div>Auto-Click</div>
            </TabsTrigger>
            <TabsTrigger value="cps-boost" className="gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <BoltIcon className="h-4 w-4 mt-0.5" />
              <div>CPS Boost</div>
            </TabsTrigger>
            <TabsTrigger value="synergies" className="gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <SparklesIcon className="h-4 w-4 mt-0.5" />
              <div>Synergies</div>
            </TabsTrigger>
          </TabsList>
          <TabsContent value="click-power" className="mt-8">
            <div className="grid lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-1">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FingerPrintIcon className="h-6 w-6" />
                    <div>Clicking Power</div>
                  </CardTitle>
                  <CardDescription>Upgrades that multiply your click power</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Cursor</span>
                      <Badge variant="outline">1.1x</Badge>
                    </div>
                    <Progress value={75} />
                  </div>
                </CardContent>
              </Card>
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Upgrade Calculator</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <Label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Quantity</Label>
                    <Slider defaultValue={1} max={100} step={1} className="w-full" />
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>Total Cost:</span>
                      <span className="font-mono font-semibold">$state.totalCost</span>
                    </div>
                  </div>
                  <div className="text-center pt-6">
                    <Button size="lg" className="gap-2">
                      <ArrowRightIcon className="h-5 w-5" />
                      <div>Apply to Game</div>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="auto-click" className="mt-8">
            <div className="grid lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-1">
                <CardHeader>
                  <CardTitle>Auto-Clickers</CardTitle>
                  <CardDescription>Hands-free cookie production</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between text-xs">
                    <span>Grandma</span>
                    <Badge />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
        <div className="grid md:grid-cols-12 gap-8 max-w-7xl mx-auto">
          <Card className="md:col-span-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Diagram3Icon className="h-6 w-6" />
                <div>Prerequisites Tree</div>
              </CardTitle>
              <CardDescription>Unlock path visualization showing dependencies between upgrades</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="p-8 bg-muted/50 rounded-lg border">
                <div className="grid grid-cols-3 gap-4 text-sm mb-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full" />
                      <span>Cursor</span>
                    </div>
                    <span className="text-xs text-muted-foreground block">Base upgrade</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                      <span>Reinforced Index Finger</span>
                    </div>
                    <span className="text-xs text-muted-foreground block">Requires: Cursor x10</span>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="w-full">Expand Full Tree</Button>
              </div>
            </CardContent>
          </Card>
          <Card className="md:col-span-4">
            <CardHeader>
              <CardTitle>Export Roadmap</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Button variant="outline" size="sm" className="w-full justify-start gap-2">
                  <ArrowDownOnSquareIcon className="h-4 w-4" />
                  <div>Download PNG</div>
                </Button>
                <Button variant="ghost" size="sm" className="w-full justify-start gap-2">
                  <LinkIcon className="h-4 w-4" />
                  <div>Copy Share Link</div>
                </Button>
              </div>
              <Separator />
              <div className="pt-4">
                <Button className="w-full gap-2">
                  <PlayIcon className="h-5 w-5" />
                  <div>Apply & Play</div>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
