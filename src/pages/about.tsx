import React from 'react'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
import { Separator } from '@/components/ui/separator'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { Link } from 'react-router-dom'
import { ArrowRightIcon, ChevronRightIcon, CircleStackIcon, GlobeAltIcon, ServerIcon, ShieldCheckIcon, SparklesIcon, UsersIcon } from '@heroicons/react/24/outline'

export function About() {
  React.useEffect(() => { document.title = "About" }, [])

  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="bg-primary/5 py-16 md:py-24 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge variant="secondary" className="mb-4">Our Story</Badge>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-6">About</h1>
          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">We are building the internet's most reliable infrastructure. From our humble beginnings to a global network, discover how we empower businesses to scale without limits.</p>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col lg:flex-row gap-12 items-start">
        <main className="flex-1 max-w-3xl space-y-16">
          <section id="origin" className="prose prose-neutral dark:prose-invert max-w-none">
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
              <SparklesIcon className="h-8 w-8 text-primary" />
              <span>The Origin Story</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">Founded in 2015 by a team of systems engineers, we set out to solve a problem we faced every day: hosting that was either too complex or too constrained. We believed that enterprise-grade infrastructure should be accessible to everyone, from solo developers to Fortune 500 companies.</p>
            <p className="text-lg text-muted-foreground leading-relaxed">Today, we operate a massive global network, continuously innovating our hardware and software stack to deliver unparalleled performance, security, and reliability.</p>
          </section>
          <Separator className="my-8" />
          <section id="infrastructure">
            <h2 className="text-3xl font-bold mb-2">Global Infrastructure</h2>
            <p className="text-muted-foreground mb-8">Our 15 strategically located data centers ensure low latency and high availability across the globe. Hover over a region to view facility details.</p>
            <TooltipProvider>
              <div className="relative w-full aspect-[2/1] bg-secondary/30 rounded-xl overflow-hidden border border-border flex items-center justify-center">
                <GlobeAltIcon className="absolute inset-0 w-full h-full text-muted/20 opacity-20" />
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button className="absolute top-[30%] left-[20%] w-4 h-4 bg-primary rounded-full animate-pulse ring-4 ring-primary/20" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="font-bold">US West (Oregon)</p>
                    <p className="text-xs text-muted-foreground">Tier IV • 50,000+ Servers</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button className="absolute top-[40%] left-[75%] w-4 h-4 bg-primary rounded-full animate-pulse ring-4 ring-primary/20" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="font-bold">Asia Pacific (Tokyo)</p>
                    <p className="text-xs text-muted-foreground">Tier III+ • 30,000+ Servers</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button className="absolute top-[25%] left-[50%] w-4 h-4 bg-primary rounded-full animate-pulse ring-4 ring-primary/20" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="font-bold">Europe (Frankfurt)</p>
                    <p className="text-xs text-muted-foreground">Tier IV • 65,000+ Servers</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </TooltipProvider>
          </section>
          <section id="stats">
            <h2 className="text-3xl font-bold mb-6">By the Numbers</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center justify-center space-y-2">
                  <ServerIcon className="w-6 h-6 text-primary mb-2" />
                  <span className="text-3xl font-extrabold text-foreground">$state.serversDeployed</span>
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Servers Deployed</span>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center justify-center space-y-2">
                  <CircleStackIcon className="w-6 h-6 text-primary mb-2" />
                  <span className="text-3xl font-extrabold text-foreground">$state.terabytesServed</span>
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">PB Served/Mo</span>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center justify-center space-y-2">
                  <ShieldCheckIcon className="w-6 h-6 text-primary mb-2" />
                  <span className="text-3xl font-extrabold text-foreground">$state.uptime</span>
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Uptime Guarantee</span>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center justify-center space-y-2">
                  <UsersIcon className="w-6 h-6 text-primary mb-2" />
                  <span className="text-3xl font-extrabold text-foreground">$state.customers</span>
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Happy Customers</span>
                </CardContent>
              </Card>
            </div>
          </section>
          <section id="timeline">
            <h2 className="text-3xl font-bold mb-8">Our Journey</h2>
            <div className="space-y-12 border-l-2 border-primary/20 pl-6 ml-3">
              <div className="relative">
                <div className="absolute -left-[33px] top-1 h-4 w-4 rounded-full bg-primary ring-4 ring-background" />
                <Badge className="mb-2">2015</Badge>
                <h3 className="text-xl font-bold text-foreground">Company Founded</h3>
                <p className="text-muted-foreground mt-2">Launched our first data center in Oregon, offering simple shared hosting plans for developers.</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[33px] top-1 h-4 w-4 rounded-full bg-primary ring-4 ring-background" />
                <Badge className="mb-2">2018</Badge>
                <h3 className="text-xl font-bold text-foreground">Global Expansion</h3>
                <p className="text-muted-foreground mt-2">Opened facilities in Frankfurt and Tokyo to serve an increasingly international customer base with lower latency.</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[33px] top-1 h-4 w-4 rounded-full bg-primary ring-4 ring-background" />
                <Badge className="mb-2">2021</Badge>
                <h3 className="text-xl font-bold text-foreground">Enterprise Cloud Launch</h3>
                <p className="text-muted-foreground mt-2">Introduced highly available VPS and Dedicated instances with custom NVMe storage clusters.</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[33px] top-1 h-4 w-4 rounded-full bg-primary ring-4 ring-background animate-pulse" />
                <Badge className="mb-2" variant="outline">Today</Badge>
                <h3 className="text-xl font-bold text-foreground">Next-Gen Infrastructure</h3>
                <p className="text-muted-foreground mt-2">Continuing to innovate with AI-driven load balancing and carbon-neutral facility upgrades worldwide.</p>
              </div>
            </div>
          </section>
          <section id="team">
            <h2 className="text-3xl font-bold mb-2">Leadership Team</h2>
            <p className="text-muted-foreground mb-8">Hover over a team member to connect with them.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Card className="cursor-pointer transition-colors hover:border-primary">
                    <CardContent className="p-6 flex items-center gap-4">
                      <Avatar className="h-16 w-16">
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-bold text-foreground">Jane Doe</h4>
                        <p className="text-sm text-muted-foreground">Chief Executive Officer</p>
                      </div>
                    </CardContent>
                  </Card>
                </HoverCardTrigger>
                <HoverCardContent className="w-64">
                  <div className="flex flex-col space-y-2">
                    <p className="text-sm font-medium">Connect with Jane:</p>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1">LinkedIn</Button>
                      <Button variant="outline" size="sm" className="flex-1">Twitter</Button>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Card className="cursor-pointer transition-colors hover:border-primary">
                    <CardContent className="p-6 flex items-center gap-4">
                      <Avatar className="h-16 w-16">
                        <AvatarFallback>JS</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-bold text-foreground">John Smith</h4>
                        <p className="text-sm text-muted-foreground">Chief Technology Officer</p>
                      </div>
                    </CardContent>
                  </Card>
                </HoverCardTrigger>
                <HoverCardContent className="w-64">
                  <div className="flex flex-col space-y-2">
                    <p className="text-sm font-medium">Connect with John:</p>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1">GitHub</Button>
                      <Button variant="outline" size="sm" className="flex-1">LinkedIn</Button>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>
          </section>
        </main>
        <aside className="w-full lg:w-80 shrink-0">
          <div className="sticky top-8 space-y-6">
            <Card className="hidden lg:block">
              <CardHeader>
                <CardTitle className="text-lg">On this page</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li>
                    <a href="#origin" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                      <ChevronRightIcon className="h-3 w-3" />
                      <span>The Origin Story</span>
                    </a>
                  </li>
                  <li>
                    <a href="#infrastructure" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                      <ChevronRightIcon className="h-3 w-3" />
                      <span>Global Infrastructure</span>
                    </a>
                  </li>
                  <li>
                    <a href="#stats" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                      <ChevronRightIcon className="h-3 w-3" />
                      <span>By the Numbers</span>
                    </a>
                  </li>
                  <li>
                    <a href="#timeline" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                      <ChevronRightIcon className="h-3 w-3" />
                      <span>Our Journey</span>
                    </a>
                  </li>
                  <li>
                    <a href="#team" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                      <ChevronRightIcon className="h-3 w-3" />
                      <span>Leadership Team</span>
                    </a>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-primary text-primary-foreground border-none shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">Enterprise SLA</CardTitle>
                <CardDescription className="text-primary-foreground/80">We back our infrastructure with an industry-leading Service Level Agreement for maximum peace of mind.</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="secondary" className="w-full group" asChild>
                  <Link to="/support">
                    <span>Read the SLA</span>
                    <ArrowRightIcon className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </aside>
      </div>
    </div>
  )
}
