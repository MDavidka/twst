import React from 'react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Field, FieldContent, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Progress } from '@/components/ui/progress'
import { Separator } from '@/components/ui/separator'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { CookieIcon, CpuChipIcon, HandRaisedIcon, MousePointerClickIcon, SparklesIcon, TrophyIcon, UserPlusIcon } from '@heroicons/react/24/outline'
import { startQuickDemo, createAccount } from '@/lib/index-logic'

export function Home() {
  React.useEffect(() => { document.title = "Home" }, [])

  return (
    <div>
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 bg-gradient-to-br from-background to-secondary/30">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="space-y-8 lg:max-w-lg">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-foreground to-primary/80 bg-clip-text text-transparent">Home</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">Click cookies. Buy upgrades. Dominate the leaderboard. The ultimate idle clicking experience awaits.</p>
            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <Button size="lg" onClick={startQuickDemo}>
                <CookieIcon className="h-5 w-5 mr-2" />
                <div>Start Clicking!</div>
              </Button>
              <Button variant="outline" size="lg">
                <div>Play Full Game</div>
              </Button>
            </div>
            <div className="flex items-center gap-2 pt-4">
              <Badge variant="secondary">1M+ cookies baked</Badge>
              <Separator orientation="vertical" className="h-4 mx-2" />
              <Badge variant="outline">Live Demo</Badge>
            </div>
          </div>
          <div className="relative">
            <div className="relative w-full h-64 sm:h-80 lg:h-96 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 border-4 border-primary/30 animate-pulse shadow-2xl">
              <CookieIcon className="absolute inset-0 w-full h-full p-8 sm:p-12 lg:p-16 text-primary/80 animate-bounce hover:scale-110 transition-transform duration-200 cursor-pointer group-hover:rotate-12" />
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-destructive/20 rounded-full animate-ping" />
              <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-accent/30 rounded-full animate-pulse delay-100" />
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-20">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">Live Leaderboard</h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">Top 10 players battling for cookie supremacy</p>
        </div>
        <Card className="max-w-4xl mx-auto overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-12">
                  <span>#</span>
                </TableHead>
                <TableHead>Player</TableHead>
                <TableHead />
                <TableHead />
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-bold text-primary">1</TableCell>
                <TableCell className="font-bold">$state.topPlayerName</TableCell>
                <TableCell className="text-right font-mono">$state.topPlayerCookies</TableCell>
                <TableCell className="text-right text-sm text-muted-foreground">$state.topPlayerCps</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2</TableCell>
                <TableCell>$state.player2Name</TableCell>
                <TableCell className="text-right font-mono">$state.player2Cookies</TableCell>
                <TableCell className="text-right text-sm text-muted-foreground">$state.player2Cps</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>3</TableCell>
                <TableCell>$state.player3Name</TableCell>
                <TableCell className="text-right font-mono">$state.player3Cookies</TableCell>
                <TableCell className="text-right text-sm text-muted-foreground">$state.player3Cps</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>4</TableCell>
                <TableCell>$state.player4Name</TableCell>
                <TableCell className="text-right font-mono">$state.player4Cookies</TableCell>
                <TableCell className="text-right text-sm text-muted-foreground">$state.player4Cps</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>…</TableCell>
                <TableCell>View full leaderboard</TableCell>
                <TableCell />
                <TableCell />
              </TableRow>
            </TableBody>
          </Table>
        </Card>
      </section>
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 bg-secondary/5">
        <div className="text-center mb-20">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">Core Mechanics</h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">Click → Earn → Upgrade → Repeat → Win</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card>
            <CardHeader className="pb-4">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <HandRaisedIcon className="h-8 w-8 text-primary" />
              </div>
              <CardTitle>Click Cookie</CardTitle>
              <CardDescription>Click the giant cookie to earn cookies instantly. Every click counts!</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-4">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <CpuChipIcon className="h-8 w-8 text-primary" />
              </div>
              <CardTitle>CPS Boost</CardTitle>
              <CardDescription>Cookies Per Second from buildings and upgrades generate passive income.</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-4">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <TrophyIcon className="h-8 w-8 text-primary" />
              </div>
              <CardTitle>Achievements</CardTitle>
              <CardDescription>Unlock 100+ achievements and permanent bonuses as you progress.</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-4xl mx-auto">
          <Carousel opts="[object Object]" className="w-full">
            <CarouselContent className="-ml-1">
              <CarouselItem>
                <Card className="border-0 bg-gradient-to-r from-primary/10 to-secondary/10">
                  <CardHeader>
                    <CardTitle>Cursor (x10)</CardTitle>
                    <CardDescription>$10 • +0.1 CPS • Automatically clicks cookies</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0 space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <MousePointerClickIcon className="h-5 w-5" />
                        <span className="text-sm font-medium">Cursor</span>
                      </div>
                      <Badge>Featured</Badge>
                    </div>
                    <Progress value={75} />
                  </CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem>
                <Card className="border-0 bg-gradient-to-r from-destructive/10 to-secondary/10">
                  <CardHeader>
                    <CardTitle>Grandma (x100)</CardTitle>
                    <CardDescription>$100 • +1 CPS • A nice grandma to bake more cookies</CardDescription>
                  </CardHeader>
                </Card>
              </CarouselItem>
              <CarouselItem>
                <Card className="border-0 bg-gradient-to-r from-accent/10 to-primary/10">
                  <CardHeader>
                    <CardTitle>Farm (x1K)</CardTitle>
                    <CardDescription>$1,100 • +8 CPS • An army of grandmas isn't enough...</CardDescription>
                  </CardHeader>
                </Card>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <Alert variant="default">
            <AlertTitle>
              <SparklesIcon className="h-6 w-6 mr-2" />
              <div>Recent Achievements</div>
            </AlertTitle>
            <AlertDescription>Players around the world are crushing milestones right now</AlertDescription>
          </Alert>
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-4 bg-card rounded-xl border">
              <Avatar className="h-8 w-8">
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">$state.recentPlayer1</p>
                <p className="text-xs text-muted-foreground truncate">Unlocked 'Elderly ovens' (5 minutes ago)</p>
              </div>
              <Badge variant="secondary">Rare</Badge>
            </div>
            <div className="flex items-center gap-3 p-4 bg-card rounded-xl border">
              <Avatar className="h-8 w-8">
                <AvatarFallback>AB</AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">$state.recentPlayer2</p>
                <p className="text-xs text-muted-foreground truncate">Reached 1 quadrillion cookies (23 minutes ago)</p>
              </div>
              <Badge variant="default">Epic</Badge>
            </div>
          </div>
          <Dialog>
            <DialogTrigger>
              <Button size="lg" className="w-full sm:w-auto">
                <UserPlusIcon className="h-5 w-5 mr-2" />
                <div>Sign Up & Save Progress</div>
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Save Your Cookie Empire</DialogTitle>
                <DialogDescription>Create an account to save your progress, compete on leaderboards, and unlock cloud sync.</DialogDescription>
              </DialogHeader>
              <Field>
                <FieldLabel>Email</FieldLabel>
                <FieldContent>
                  <Input placeholder="yourname@example.com" type="email" />
                </FieldContent>
              </Field>
              <Field>
                <FieldLabel>Display Name</FieldLabel>
                <FieldContent>
                  <Input placeholder="CookieMaster3000" />
                </FieldContent>
              </Field>
              <DialogFooter>
                <Button onClick={createAccount}>Create Account</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </section>
    </div>
  )
}
