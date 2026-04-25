import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ButtonGroup, ButtonGroupSeparator, ButtonGroupText } from '@/components/ui/button-group'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Field, FieldContent, FieldLabel } from '@/components/ui/field'
import { InputGroup, InputGroupButton, InputGroupInput } from '@/components/ui/input-group'
import { Separator } from '@/components/ui/separator'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { Link } from 'react-router-dom'
import { ArrowRightIcon, ArrowUpTrayIcon, CheckCircleIcon, MagnifyingGlassIcon, PlayIcon, UsersIcon } from '@heroicons/react/24/outline'
import { challengeFriend, openPlayerProfile } from '@/lib/leaderboard-logic'

export function Leaderboard() {
  React.useEffect(() => { document.title = "Leaderboard" }, [])
  const [timeFilter, setTimeFilter] = React.useState('')
  const [searchQuery, setSearchQuery] = React.useState('')
  const [profileOpen, setProfileOpen] = React.useState(false)

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-7xl">
      <Card className="w-full mb-12">
        <CardHeader>
          <CardTitle className="text-4xl sm:text-5xl font-heading">Leaderboard</CardTitle>
          <CardDescription>See who’s baking the most cookies worldwide. Challenge your friends!</CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-8">
          <ButtonGroup className="lg:col-span-2">
            <ToggleGroup type="single" value={timeFilter} onValueChange={setTimeFilter}>
              <ToggleGroupItem value="all-time">All Time</ToggleGroupItem>
              <ToggleGroupItem value="weekly">Weekly</ToggleGroupItem>
              <ToggleGroupItem value="monthly">Monthly</ToggleGroupItem>
            </ToggleGroup>
            <ButtonGroupSeparator />
            <ButtonGroupText>Top rankings</ButtonGroupText>
          </ButtonGroup>
          <div className="flex flex-col sm:flex-row gap-2">
            <Field>
              <FieldLabel>Find your rank</FieldLabel>
              <FieldContent>
                <InputGroup>
                  <InputGroupInput placeholder="Enter username..." value={searchQuery} onChange={setSearchQuery} />
                  <InputGroupButton size="sm">
                    <MagnifyingGlassIcon className="h-4 w-4" />
                  </InputGroupButton>
                </InputGroup>
              </FieldContent>
            </Field>
            <Button size="sm" variant="outline">Search</Button>
          </div>
        </CardContent>
      </Card>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Top 100 Cookies Earned</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-12">#</TableHead>
                  <TableHead>Player</TableHead>
                  <TableHead>Cookies</TableHead>
                  <TableHead>CPS</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium bg-primary/10">1</TableCell>
                  <TableCell className="font-medium">CookieMaster69</TableCell>
                  <TableCell className="text-right font-mono">12,847,392</TableCell>
                  <TableCell className="text-right hidden md:table-cell font-mono">1,294</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="bg-amber-50/50 dark:bg-amber-950/20">2</TableCell>
                  <TableCell>DoughLord</TableCell>
                  <TableCell className="text-right font-mono">11,293,847</TableCell>
                  <TableCell className="text-right hidden md:table-cell font-mono">847</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>3</TableCell>
                  <TableCell>$state.topPlayer3</TableCell>
                  <TableCell className="text-right font-mono">$state.topCookies3</TableCell>
                  <TableCell className="text-right hidden md:table-cell font-mono">$state.topCps3</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
          <CardFooter className="justify-end">
            <Button variant="outline" size="sm">View Full Top 100</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>🏆 #1 Player</CardTitle>
          </CardHeader>
          <CardContent className="text-center py-8">
            <Avatar className="h-20 w-20 mx-auto mb-4">
              <AvatarImage src={"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"} />
              <AvatarFallback>CM</AvatarFallback>
            </Avatar>
            <h3 className="font-bold text-xl mb-1">CookieMaster69</h3>
            <p className="text-muted-foreground mb-4">12.8M cookies</p>
            <div className="flex gap-2 justify-center mb-6">
              <Badge variant="secondary">1,294 CPS</Badge>
              <Badge>🥇 All Time</Badge>
            </div>
            <Button className="w-full" onClick={challengeFriend}>
              <UsersIcon className="h-4 w-4 mr-2" />
              <div>Challenge</div>
            </Button>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <CardTitle>Fastest Achievements</CardTitle>
            <Badge>Weekly</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                  <CheckCircleIcon className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Elder Achievement</p>
                  <p className="text-sm text-muted-foreground">CookieMonsterX</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-mono text-sm">2d 14h</p>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 hover:bg-accent hover:cursor-pointer rounded-lg transition-colors" onClick={openPlayerProfile}>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-destructive/20 rounded-full flex items-center justify-center">
                  <CheckCircleIcon className="h-4 w-4 text-destructive" />
                </div>
                <div>
                  <p className="font-medium">One Million Fingers</p>
                  <p className="text-sm text-muted-foreground">SpeedyBaker</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-mono text-sm">4d 2h</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      <Dialog open={profileOpen} onOpenChange={setProfileOpen}>
        <DialogTrigger asChild />
        <DialogContent className="max-w-md sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>$state.selectedPlayerName</DialogTitle>
            <DialogDescription>Player statistics and achievements</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="flex items-center gap-4">
              <Avatar className="h-16 w-16">
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-bold text-xl">$state.selectedPlayerName</h3>
                <div className="flex gap-2 mt-1">
                  <Badge>#$state.selectedPlayerRank</Badge>
                  <Badge variant="secondary">$state.selectedPlayerCps CPS</Badge>
                </div>
              </div>
            </div>
            <Separator />
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Total Cookies</span>
                <span className="font-mono">$state.selectedPlayerCookies</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Achievements</span>
                <span>$state.selectedPlayerAchievements</span>
              </div>
            </div>
          </div>
          <DialogFooter>
            <ButtonGroup>
              <Button onClick={challengeFriend}>
                <ArrowRightIcon className="h-4 w-4 mr-2" />
                <div>Play & Challenge</div>
              </Button>
              <ButtonGroupSeparator />
              <Button variant="outline">Share Profile</Button>
            </ButtonGroup>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <Card className="mt-12 border-dashed">
        <CardContent className="flex flex-col items-center text-center py-12">
          <ArrowUpTrayIcon className="h-12 w-12 text-muted-foreground mb-4" />
          <h3 className="text-2xl font-bold mb-2">Ready to climb?</h3>
          <p className="max-w-md text-muted-foreground mb-8">Every cookie counts. Share your leaderboard position and challenge your friends to beat your score!</p>
          <Button size="lg" asChild>
            <Link to="/play">
              <PlayIcon className="h-5 w-5 mr-2" />
              <div>Start Baking!</div>
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
