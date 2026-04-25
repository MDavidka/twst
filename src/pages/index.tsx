import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { ActivityIcon, ArrowRightIcon, BoltIcon, CakeIcon, CheckIcon, CurrencyDollarIcon, EyeIcon, FingerPrintIcon, MousePointerClickIcon, PlayIcon, ShoppingCartIcon, SparklesIcon, UsersIcon } from '@heroicons/react/24/outline'
import { handleCookieClick } from '@/lib/index-logic'

export function Home() {
  React.useEffect(() => { document.title = "Home" }, [])

  return (
    <div>
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 bg-gradient-to-br from-background to-secondary/30">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-8 lg:space-y-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-primary to-destructive bg-clip-text text-transparent">Cookie Clicker</h1>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl leading-relaxed">Bake infinite cookies through addictive clicking mechanics. Unlock auto-clickers, grandma farms, and legendary upgrades to reach quadrillions.</p>
            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <Button size="lg" className="text-lg px-8 py-6 shadow-2xl">
                <PlayIcon className="h-6 w-6 mr-2" />
                <div>Play Now</div>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                <ArrowRightIcon className="h-6 w-6 mr-2" />
                <div>View Leaderboard</div>
              </Button>
            </div>
            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2 text-sm">
                <ActivityIcon className="h-5 w-5 text-primary" />
                <div>$state.cps</div>
                <span>cookies/sec</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CurrencyDollarIcon className="h-5 w-5 text-primary" />
                <div>$state.totalCookies</div>
                <span>total baked</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative mx-auto w-80 h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-destructive/20 rounded-3xl blur-xl animate-pulse" />
              <div className="relative w-full h-full p-8" role="button" onClick={handleCookieClick}>
                <div className="w-full h-full bg-gradient-to-br from-amber-400 to-orange-500 rounded-full shadow-2xl border-8 border-primary/30 hover:scale-105 transition-all duration-300 cursor-pointer flex items-center justify-center group">
                  <div className="text-6xl group-hover:scale-110 transition-transform">🍪</div>
                  <div className="absolute -top-4 -right-4 bg-destructive text-destructive-foreground px-3 py-1 rounded-full text-xs font-bold animate-bounce">$state.clickPower</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-20">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4">How to Play</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Master the addictive click → buy → upgrade loop in 3 simple steps</p>
        </div>
        <Carousel opts={"{\"loop\": true, \"dragFree\": true}"}>
          <CarouselContent className="-ml-4 md:-ml-8">
            <CarouselItem>
              <Card className="w-[300px] sm:w-[400px] ml-4 md:ml-8 bg-card/80 backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-2">
                    <MousePointerClickIcon className="h-8 w-8" />
                    <div>1. Click the Cookie</div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <p>Click the giant cookie to earn cookies. Each click produces more as you upgrade.</p>
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem>
              <Card className="w-[300px] sm:w-[400px] ml-4 md:ml-8 bg-card/80 backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-2">
                    <ShoppingCartIcon className="h-8 w-8" />
                    <div>2. Buy Buildings</div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <p>Spend cookies on Cursors, Grandmas, Farms, and Factories that produce cookies automatically.</p>
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem>
              <Card className="w-[300px] sm:w-[400px] ml-4 md:ml-8 bg-card/80 backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-2">
                    <SparklesIcon className="h-8 w-8" />
                    <div>3. Unlock Upgrades</div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <p>Powerful upgrades multiply your clicking power and boost all building production.</p>
                </CardContent>
              </Card>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-primary/90 text-primary-foreground" />
          <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-primary/90 text-primary-foreground" />
        </Carousel>
      </section>
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 bg-secondary/20">
        <div className="text-center mb-20">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4">Featured Upgrades</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Hover to preview upgrade effects and unlock requirements</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-lg">
                <FingerPrintIcon className="h-6 w-6" />
                <div>Reinforced Index Finger</div>
              </CardTitle>
              <CardDescription>Cursor production +1%</CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold">150</div>
                <p className="text-xs text-muted-foreground">cookies</p>
              </div>
              <Tooltip delayDuration={500}>
                <TooltipTrigger asChild>
                  <Badge variant="outline">
                    <EyeIcon className="h-4 w-4 mr-1" />
                    <div>Preview</div>
                  </Badge>
                </TooltipTrigger>
                <TooltipContent side="top">
                  <p>+1% cursor production. Unlocks at 1 cursor owned.</p>
                </TooltipContent>
              </Tooltip>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-lg">
                <CakeIcon className="h-6 w-6" />
                <div>Caramelizer</div>
              </CardTitle>
              <CardDescription>All production +1%</CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold">1,000</div>
                <p className="text-xs text-muted-foreground">cookies</p>
              </div>
              <Badge variant="outline">
                <EyeIcon className="h-4 w-4 mr-1" />
                <div>Preview</div>
              </Badge>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-lg">
                <BoltIcon className="h-6 w-6" />
                <div>Lucky Cookie</div>
              </CardTitle>
              <CardDescription>Instant 10% production boost</CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold">77,777</div>
                <p className="text-xs text-muted-foreground">cookies</p>
              </div>
              <Badge variant="outline">
                <EyeIcon className="h-4 w-4 mr-1" />
                <div>Preview</div>
              </Badge>
            </CardContent>
          </Card>
        </div>
      </section>
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div className="space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">Top Players Right Now</h2>
            <p className="text-xl text-muted-foreground">Join the ranks of Cookie Clicker legends</p>
            <div className="pt-6">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-12">#</TableHead>
                    <TableHead>Player</TableHead>
                    <TableHead />
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium text-destructive">🥇</TableCell>
                    <TableCell className="font-medium">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"} />
                          <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <span>$state.topPlayer1</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <Badge>$state.topPlayer1Cps</Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium text-orange-500">🥈</TableCell>
                    <TableCell className="font-medium">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"} />
                          <AvatarFallback>AB</AvatarFallback>
                        </Avatar>
                        <span>$state.topPlayer2</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <Badge>$state.topPlayer2Cps</Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium text-amber-500">🥉</TableCell>
                    <TableCell className="font-medium">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={"https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"} />
                          <AvatarFallback>CD</AvatarFallback>
                        </Avatar>
                        <span>$state.topPlayer3</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <Badge>$state.topPlayer3Cps</Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>4</TableCell>
                    <TableCell className="font-medium">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"} />
                          <AvatarFallback>EF</AvatarFallback>
                        </Avatar>
                        <span>$state.topPlayer4</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <Badge>$state.topPlayer4Cps</Badge>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            <Button variant="outline" className="mt-6 w-full lg:w-auto">
              <div>View Full Leaderboard →</div>
            </Button>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Ready to crush cookies?</CardTitle>
              <CardDescription>Join 1M+ players in the ultimate idle clicking challenge</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2 text-2xl font-bold text-primary">
                <UsersIcon className="h-8 w-8" />
                <div>1,234,567</div>
                <span className="text-muted-foreground text-lg font-normal">players online</span>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <CheckIcon className="h-4 w-4 text-green-500" />
                  <div>Save progress automatically</div>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckIcon className="h-4 w-4 text-green-500" />
                  <div>100+ achievements</div>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckIcon className="h-4 w-4 text-green-500" />
                  <div>Global leaderboards</div>
                </div>
              </div>
              <Button size="lg" className="w-full">
                <PlayIcon className="h-5 w-5 mr-2" />
                <div>Start Baking</div>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
