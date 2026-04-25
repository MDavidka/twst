import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ButtonGroup, ButtonGroupSeparator } from '@/components/ui/button-group'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Link } from 'react-router-dom'
import { ArrowRightIcon, CalendarDaysIcon, CalendarIcon, CheckCircleIcon, ChevronLeftIcon, ChevronRightIcon, ClipboardDocumentListIcon, QuestionMarkCircleIcon, SearchIcon, ShieldCheckIcon, TrophyIcon, TwitchIcon, TwitterIcon, UsersIcon } from '@heroicons/react/24/outline'

export function Leaderboard() {
  React.useEffect(() => { document.title = "Leaderboard" }, [])
  const [timeframe, setTimeframe] = React.useState('')
  const [search, setSearch] = React.useState('')
  const [region, setRegion] = React.useState('')
  const [verificationOpen, setVerificationOpen] = React.useState(false)

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold tracking-tight bg-gradient-to-r from-primary/80 to-primary bg-clip-text text-transparent">Leaderboard</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Global rankings of top Cookie Clicker players by total cookies baked, CPS, and achievements unlocked</p>
      </div>
      <Tabs value={timeframe} onValueChange={setTimeframe} className="w-full max-w-2xl mx-auto">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="all-time">
            <div className="flex items-center gap-2">
              <TrophyIcon className="h-4 w-4" />
              <div>All Time</div>
            </div>
          </TabsTrigger>
          <TabsTrigger value="weekly">
            <div className="flex items-center gap-2">
              <CalendarIcon className="h-4 w-4" />
              <div>Weekly</div>
            </div>
          </TabsTrigger>
          <TabsTrigger value="monthly">
            <div className="flex items-center gap-2">
              <CalendarDaysIcon className="h-4 w-4" />
              <div>Monthly</div>
            </div>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="all-time" className="mt-8">
          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
            <Card className="lg:col-span-1 order-2 lg:order-1">
              <CardHeader className="flex-row items-center gap-3 pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <UsersIcon className="h-5 w-5" />
                  <div>Search & Filter</div>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="relative">
                  <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input placeholder="Search players..." value={search} onChange={setSearch} className="pl-10" />
                </div>
                <Select value={region} onValueChange={setRegion}>
                  <SelectTrigger>
                    <SelectValue placeholder="All regions" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Regions</SelectItem>
                    <SelectItem value="na">North America 🇺🇸🇨🇦</SelectItem>
                    <SelectItem value="eu">Europe 🇪🇺</SelectItem>
                    <SelectItem value="asia">Asia 🇯🇵🇰🇷🇨🇳</SelectItem>
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>
            <div className="lg:col-span-2 order-1 lg:order-2">
              <Card>
                <CardHeader>
                  <CardTitle>Top Players</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-12">#</TableHead>
                        <TableHead>Player</TableHead>
                        <TableHead>Cookies</TableHead>
                        <TableHead>CPS</TableHead>
                        <TableHead>Achievements</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">4</TableCell>
                        <TableCell className="font-medium">
                          <div className="flex items-center gap-3">
                            <Avatar className="h-8 w-8">
                              <AvatarImage src={"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"} />
                              <AvatarFallback>JD</AvatarFallback>
                            </Avatar>
                            <div>
                              <p>john_doe</p>
                              <p className="text-xs text-muted-foreground">United States</p>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell className="font-medium">1.24T</TableCell>
                        <TableCell className="text-right font-medium">2.47M</TableCell>
                        <TableCell className="text-right">127</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
                <CardFooter className="flex items-center justify-between p-6 pt-0">
                  <div>
                    <p className="text-sm text-muted-foreground">Showing 1-10 of 1,234 players</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      <ChevronLeftIcon className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <ChevronRightIcon className="h-4 w-4" />
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </div>
          </div>
        </TabsContent>
      </Tabs>
      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="secondary" className="text-xs">#1</Badge>
              <CardTitle className="text-2xl font-bold">Cookie Emperor</CardTitle>
            </div>
            <CardDescription>alice_wonderland</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Cookies</span>
              <span className="font-mono font-bold">5.67Q</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">CPS</span>
              <span className="font-mono font-bold">12.4B</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Achievements</span>
              <span className="font-mono font-bold">156</span>
            </div>
          </CardContent>
          <CardFooter className="pt-0 border-t">
            <ButtonGroup>
              <Button variant="outline" size="sm" asChild>
                <a href="https://twitter.com">
                  <TwitterIcon className="h-4 w-4 mr-1" />
                  <div>Twitter</div>
                </a>
              </Button>
              <ButtonGroupSeparator />
              <Button variant="outline" size="sm" asChild>
                <a href="https://twitch.tv">
                  <TwitchIcon className="h-4 w-4 mr-1" />
                  <div>Twitch</div>
                </a>
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center gap-2 mb-2">
              <Badge className="text-xs bg-silver">#2</Badge>
              <CardTitle className="text-2xl font-bold">Grandma Slayer</CardTitle>
            </div>
            <CardDescription>bob_the_baker</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Cookies</span>
              <span className="font-mono font-bold">4.89Q</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">CPS</span>
              <span className="font-mono font-bold">9.8B</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Achievements</span>
              <span className="font-mono font-bold">148</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center gap-2 mb-2">
              <Badge className="text-xs bg-bronze">#3</Badge>
              <CardTitle className="text-2xl font-bold">Cursor Master</CardTitle>
            </div>
            <CardDescription>clicky_mcclick</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Cookies</span>
              <span className="font-mono font-bold">3.45Q</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">CPS</span>
              <span className="font-mono font-bold">7.2B</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Achievements</span>
              <span className="font-mono font-bold">139</span>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="text-center pt-12">
        <div className="inline-flex items-center gap-2 text-muted-foreground mb-6 text-sm">
          <ShieldCheckIcon className="h-5 w-5" />
          <div>Score verification required for leaderboard ranking</div>
        </div>
        <Button size="lg" asChild>
          <Link to="/profile">
            <div>Submit Your Score</div>
            <ArrowRightIcon className="h-5 w-5 ml-2" />
          </Link>
        </Button>
        <Dialog open={verificationOpen} onOpenChange={setVerificationOpen}>
          <DialogTrigger asChild>
            <Button variant="outline" size="sm" className="mt-4">How to verify →</Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Score Verification</DialogTitle>
              <DialogDescription>Upload a screenshot of your game stats showing your cookies baked, CPS, and achievements count.</DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <Input type="file" accept="image/*" />
              <div className="p-4 bg-muted rounded-md">
                <p className="text-sm text-muted-foreground mb-2">Requirements:</p>
                <ul className="text-xs space-y-1 text-muted-foreground list-disc list-inside">
                  <li>Screenshot must show game stats panel</li>
                  <li>No editing or tampering allowed</li>
                  <li>Verification within 24 hours</li>
                </ul>
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Submit for Review</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <Accordion type="multiple" className="max-w-3xl mx-auto" defaultValue="leaderboard-rules">
        <AccordionItem value="leaderboard-rules">
          <AccordionTrigger>
            <div className="flex items-center gap-3">
              <ClipboardDocumentListIcon className="h-5 w-5 shrink-0" />
              <div>Leaderboard Rules</div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="text-sm leading-relaxed">Players are ranked by total cookies baked. CPS and achievements are secondary tiebreakers. Scores update every hour after verification. Only verified scores appear on the leaderboard.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="verification-process">
          <AccordionTrigger>
            <div className="flex items-center gap-3">
              <CheckCircleIcon className="h-5 w-5 shrink-0" />
              <div>Verification Process</div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="text-sm leading-relaxed">1. Take screenshot of your stats panel
2. Submit via profile page
3. Our team reviews within 24 hours
4. Approved scores appear on leaderboard
5. Re-verification required weekly/monthly</AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-top-question">
          <AccordionTrigger>
            <div className="flex items-center gap-3">
              <QuestionMarkCircleIcon className="h-5 w-5 shrink-0" />
              <div>Why is my score not showing up?</div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="text-sm leading-relaxed">New submissions require manual verification to prevent cheating. Check your email for verification status. Scores typically appear within 24 hours.</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
