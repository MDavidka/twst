import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Progress } from '@/components/ui/progress'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { CookieIcon, HeartIcon, SparklesIcon, TrophyIcon, UsersIcon } from '@heroicons/react/24/outline'

export function About() {
  React.useEffect(() => { document.title = "About" }, [])
  const [totalCookiesProgress, setTotalCookiesProgress] = React.useState(0)

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-7xl">
      <div className="grid lg:grid-cols-4 lg:gap-8 mb-16">
        <div className="lg:col-span-3 space-y-12">
          <Card >
            <CardHeader>
              <CardTitle>About Cookie Clicker</CardTitle>
              <CardDescription>Discover the addictive idle game that's baked millions of cookies since 2013</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="prose prose-lg max-w-none">
                <p>Cookie Clicker started as a simple JavaScript experiment by Julien 'Orteil' Thiercelin. What began as a joke about clicking cookies has become one of the most influential idle games, inspiring countless clones and an entire genre.</p>
              </div>
            </CardContent>
          </Card>
          <Card >
            <CardHeader>
              <CardTitle>Creator Q&A</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible>
                <AccordionItem value="q1">
                  <AccordionTrigger>How did you come up with Cookie Clicker?</AccordionTrigger>
                  <AccordionContent>I was procrastinating on a game jam and thought 'what if clicking a cookie was the entire game?' 10 years later, here we are.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="q2">
                  <AccordionTrigger>What's the most cookies anyone's baked?</AccordionTrigger>
                  <AccordionContent>Players have reached quintillions. The number gets so big it stops making sense around googolplex.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="q3">
                  <AccordionTrigger>Will there be a mobile version?</AccordionTrigger>
                  <AccordionContent>The HTML5 version works great on mobile browsers. No native app planned, but the game is fully playable anywhere.</AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
          <Card >
            <CardHeader>
              <CardTitle>Game History Timeline</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-mono text-xs font-bold">1.0</div>
                  <div>
                    <p className="font-medium">August 2013</p>
                    <p className="text-sm text-muted-foreground">Cookie Clicker launches as browser game</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 text-primary/70 font-mono text-xs font-bold">2.0</div>
                  <div>
                    <p className="font-medium">2014</p>
                    <p className="text-sm text-muted-foreground">Steam release with seasonal events</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 text-primary/70 font-mono text-xs font-bold">3.0</div>
                  <div>
                    <p className="font-medium">2023</p>
                    <p className="text-sm text-muted-foreground">Mobile browser optimization</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="lg:sticky lg:top-8 lg:h-fit space-y-6">
          <Card >
            <CardHeader>
              <CardTitle>Community Stats</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Total Cookies</span>
                  <span className="font-mono font-bold">$state.totalCookies</span>
                </div>
                <Progress value={totalCookiesProgress} />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Active Players</span>
                  <span className="font-mono font-bold">$state.activePlayers</span>
                </div>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>24h peak</span>
                  <Badge variant="outline">↑ 12%</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card >
            <CardHeader>
              <CardTitle>Version Comparison</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Version</TableHead>
                    <TableHead className="text-right">New Features</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>v1.0</TableCell>
                    <TableCell className="text-right font-medium">Cookie clicking</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>v2.0</TableCell>
                    <TableCell className="text-right font-medium">Steam + Events</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>v3.0</TableCell>
                    <TableCell className="text-right font-medium">Mobile optimized</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
          <Card >
            <CardHeader>
              <CardTitle>Future Features</CardTitle>
              <CardDescription>Coming soon to Cookie Clicker</CardDescription>
            </CardHeader>
            <CardContent>
              <Carousel opts="[object Object]">
                <CarouselContent className="-ml-1">
                  <CarouselItem>
                    <div className="p-1">
                      <Card>
                        <CardTitle className="flex items-center gap-2">
                          <SparklesIcon className="h-5 w-5" />
                          <span>Cloud Save</span>
                        </CardTitle>
                        <CardDescription>Sync progress across devices</CardDescription>
                      </Card>
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="p-1">
                      <Card>
                        <CardTitle className="flex items-center gap-2">
                          <UsersIcon className="h-5 w-5" />
                          <span>Guilds</span>
                        </CardTitle>
                        <CardDescription>Team up with other bakers</CardDescription>
                      </Card>
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="p-1">
                      <Card>
                        <CardTitle className="flex items-center gap-2">
                          <TrophyIcon className="h-5 w-5" />
                          <span>Tournaments</span>
                        </CardTitle>
                        <CardDescription>Compete for top baker title</CardDescription>
                      </Card>
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselNext  />
                <CarouselPrevious  />
              </Carousel>
            </CardContent>
          </Card>
          <Button size="lg" className="w-full">
            <CookieIcon className="h-5 w-5 mr-2" />
            <span>Play Cookie Clicker</span>
          </Button>
          <Button variant="outline" size="lg" className="w-full">
            <HeartIcon className="h-5 w-5 mr-2" />
          </Button>
        </div>
      </div>
    </div>
  )
}
