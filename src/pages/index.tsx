import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from '@/components/ui/input-group'
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from '@/components/ui/navigation-menu'
import { Link } from 'react-router-dom'
import { CheckCircleIcon, CloudIcon, CpuChipIcon, GlobeAltIcon, HddIcon, RocketLaunchIcon, ServerIcon, ShieldCheckIcon, UserCircleIcon } from '@heroicons/react/24/outline'
import { onDomainChange, onSearchDomain, onSubscribeNewsletter, onNewsletterEmailChange } from '@/lib/index-logic'

export function Home() {
  React.useEffect(() => { document.title = "Home" }, [])
  const [domainQuery, setDomainQuery] = React.useState('')
  const [newsletterEmail, setNewsletterEmail] = React.useState('')

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <CloudIcon className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold text-foreground">HostCo</span>
          </div>
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/shared-hosting">
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">Shared Hosting</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/vps">
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">VPS Hosting</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/about">
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">About Us</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/support">
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">Support</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="rounded-full">
              <UserCircleIcon className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full bg-muted/30 py-20 lg:py-32">
          <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl">Find Your Perfect Domain & Hosting</h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">Reliable, fast, and secure web hosting solutions designed to scale with your business. Start your journey with a memorable domain name.</p>
            <div className="mx-auto mt-10 max-w-xl">
              <InputGroup>
                <InputGroupAddon>
                  <GlobeAltIcon className="h-5 w-5 text-muted-foreground" />
                </InputGroupAddon>
                <InputGroupInput type="text" placeholder="Search for your perfect domain..." value={domainQuery} onChange={onDomainChange} />
                <InputGroupButton onClick={onSearchDomain}>Search</InputGroupButton>
              </InputGroup>
              <div className="mt-4 flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <CheckCircleIcon className="h-4 w-4 text-primary" />
                <span>Includes free SSL certificate and 24/7 support.</span>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Core Hosting Services</h2>
              <p className="mt-4 text-muted-foreground">Choose the perfect foundation for your next big project.</p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <Card className="flex flex-col">
                <CardHeader>
                  <ServerIcon className="mb-4 h-8 w-8 text-primary" />
                  <CardTitle>Shared Hosting</CardTitle>
                  <CardDescription>Perfect for personal sites, blogs, and small businesses.</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-foreground">$2.99</span>
                    <span className="text-muted-foreground">/mo</span>
                  </div>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircleIcon className="h-4 w-4 text-primary" />
                      <span>1 Website</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircleIcon className="h-4 w-4 text-primary" />
                      <span>50 GB SSD Storage</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircleIcon className="h-4 w-4 text-primary" />
                      <span>Unmetered Bandwidth</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link className="w-full" to="/shared-hosting">
                    <Button className="w-full" variant="outline">View Plans</Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card className="relative flex flex-col border-primary shadow-lg">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>
                </div>
                <CardHeader>
                  <CpuChipIcon className="mb-4 h-8 w-8 text-primary" />
                  <CardTitle>VPS Hosting</CardTitle>
                  <CardDescription>Dedicated resources for growing businesses and developers.</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-foreground">$9.99</span>
                    <span className="text-muted-foreground">/mo</span>
                  </div>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircleIcon className="h-4 w-4 text-primary" />
                      <span>2 vCPU Cores</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircleIcon className="h-4 w-4 text-primary" />
                      <span>4 GB RAM</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircleIcon className="h-4 w-4 text-primary" />
                      <span>80 GB NVMe Storage</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link className="w-full" to="/vps">
                    <Button className="w-full">Configure VPS</Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card className="flex flex-col">
                <CardHeader>
                  <HddIcon className="mb-4 h-8 w-8 text-primary" />
                  <CardTitle>Dedicated Servers</CardTitle>
                  <CardDescription>Maximum performance, control, and security for enterprise.</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-foreground">$79.99</span>
                    <span className="text-muted-foreground">/mo</span>
                  </div>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircleIcon className="h-4 w-4 text-primary" />
                      <span>Intel Xeon E-2274G</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircleIcon className="h-4 w-4 text-primary" />
                      <span>32 GB DDR4 ECC RAM</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircleIcon className="h-4 w-4 text-primary" />
                      <span>2x 500 GB NVMe (RAID 1)</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link className="w-full" to="/support">
                    <Button className="w-full" variant="outline">Contact Sales</Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full bg-muted/50 py-16 lg:py-24">
          <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">Trusted by Thousands Worldwide</h2>
            <p className="mt-4 text-lg text-muted-foreground mb-12">Backed by our industry-leading 99.9% Uptime Guarantee.</p>
            <Carousel opts="[object Object]" className="mx-auto w-full max-w-5xl">
              <CarouselContent>
                <CarouselItem className="basis-1/2 md:basis-1/3 lg:basis-1/5">
                  <Card className="border-none shadow-sm">
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <ShieldCheckIcon className="h-12 w-12 text-muted-foreground/50" />
                    </CardContent>
                  </Card>
                </CarouselItem>
                <CarouselItem className="basis-1/2 md:basis-1/3 lg:basis-1/5">
                  <Card className="border-none shadow-sm">
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <CloudIcon className="h-12 w-12 text-muted-foreground/50" />
                    </CardContent>
                  </Card>
                </CarouselItem>
                <CarouselItem className="basis-1/2 md:basis-1/3 lg:basis-1/5">
                  <Card className="border-none shadow-sm">
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <RocketLaunchIcon className="h-12 w-12 text-muted-foreground/50" />
                    </CardContent>
                  </Card>
                </CarouselItem>
                <CarouselItem className="basis-1/2 md:basis-1/3 lg:basis-1/5">
                  <Card className="border-none shadow-sm">
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <ServerIcon className="h-12 w-12 text-muted-foreground/50" />
                    </CardContent>
                  </Card>
                </CarouselItem>
                <CarouselItem className="basis-1/2 md:basis-1/3 lg:basis-1/5">
                  <Card className="border-none shadow-sm">
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <GlobeAltIcon className="h-12 w-12 text-muted-foreground/50" />
                    </CardContent>
                  </Card>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
          </div>
        </section>
        <section className="w-full py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="border-none bg-primary text-primary-foreground shadow-xl">
              <CardContent className="flex flex-col items-center justify-between gap-8 p-8 md:flex-row md:p-12">
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">Stay Updated with HostCo</h3>
                  <p className="mt-2 text-primary-foreground/80">Subscribe to our newsletter for exclusive hosting deals, performance tips, and company news.</p>
                </div>
                <div className="w-full max-w-md">
                  <form onSubmit={onSubscribeNewsletter} className="flex w-full flex-col gap-2">
                    <InputGroup>
                      <InputGroupInput type="email" placeholder="Enter your email address" value={newsletterEmail} onChange={onNewsletterEmailChange} required className="bg-background text-foreground" />
                      <InputGroupButton type="submit" variant="secondary">Subscribe</InputGroupButton>
                    </InputGroup>
                    <p className="text-xs text-primary-foreground/60">We respect your privacy. Unsubscribe at any time.</p>
                  </form>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  )
}
