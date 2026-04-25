import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { Link } from 'react-router-dom'
import { CheckIcon, InformationCircleIcon, MinusIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'
import { onBillingCycleChange, onSelectStarter, onSelectPro } from '@/lib/pricing-logic'

export function Pricing() {
  React.useEffect(() => { document.title = "Pricing" }, [])
  const [billingCycle, setBillingCycle] = React.useState('')

  return (
    <div className="min-h-screen bg-background text-foreground pb-16">
      <section className="py-16 md:py-24 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-6 text-foreground">Pricing</h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">Transparent pricing for projects of all sizes. Switch plans or cancel anytime.</p>
        <ToggleGroup type="single" value={billingCycle} onValueChange={onBillingCycleChange} className="justify-center bg-muted p-1.5 rounded-xl inline-flex">
          <ToggleGroupItem value="monthly" className="rounded-lg px-6 py-2 text-sm font-medium transition-all">Monthly</ToggleGroupItem>
          <ToggleGroupItem value="annual" className="rounded-lg px-6 py-2 text-sm font-medium transition-all">Annually</ToggleGroupItem>
          <ToggleGroupItem value="triennial" className="rounded-lg px-6 py-2 text-sm font-medium transition-all">3 Years</ToggleGroupItem>
        </ToggleGroup>
      </section>
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 max-w-7xl items-start">
        <Card className="flex flex-col h-full bg-card">
          <CardHeader>
            <CardTitle className="text-2xl">Shared Starter</CardTitle>
            <CardDescription>Perfect for personal blogs and small projects.</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col">
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-4xl font-bold text-foreground">$state.starterPrice</span>
              <span className="text-muted-foreground font-medium">/mo</span>
            </div>
            <Badge variant="secondary" className="w-fit mb-6">$state.discountBadgeText</Badge>
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <CheckIcon className="h-5 w-5 text-primary shrink-0" />
                <span>1 Website</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <CheckIcon className="h-5 w-5 text-primary shrink-0" />
                <span>50 GB SSD Storage</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <CheckIcon className="h-5 w-5 text-primary shrink-0" />
                <span>Free SSL Certificate</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <CheckIcon className="h-5 w-5 text-primary shrink-0" />
                <span>Standard Support</span>
              </li>
            </ul>
            <Button variant="outline" className="w-full" onClick={onSelectStarter}>Get Started</Button>
          </CardContent>
        </Card>
        <Card className="flex flex-col h-full border-primary shadow-xl relative md:-translate-y-4 bg-card">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Badge variant="default" className="px-4 py-1 uppercase tracking-widest text-[10px] font-bold shadow-sm">Most Popular</Badge>
          </div>
          <CardHeader>
            <CardTitle className="text-2xl text-primary">VPS Pro</CardTitle>
            <CardDescription>Dedicated resources for growing businesses and developers.</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col">
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-4xl font-bold text-foreground">$state.proPrice</span>
              <span className="text-muted-foreground font-medium">/mo</span>
            </div>
            <Badge variant="secondary" className="w-fit mb-6 text-primary bg-primary/10">$state.discountBadgeText</Badge>
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-center gap-3 text-sm text-foreground font-medium">
                <CheckIcon className="h-5 w-5 text-primary shrink-0" />
                <span>Unlimited Websites</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-foreground font-medium">
                <CheckIcon className="h-5 w-5 text-primary shrink-0" />
                <span>200 GB NVMe Storage</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-foreground font-medium">
                <CheckIcon className="h-5 w-5 text-primary shrink-0" />
                <span>4 Dedicated CPU Cores</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-foreground font-medium">
                <CheckIcon className="h-5 w-5 text-primary shrink-0" />
                <span>Priority 24/7 Support</span>
              </li>
            </ul>
            <Button variant="default" className="w-full text-md h-12" onClick={onSelectPro}>Get Started</Button>
          </CardContent>
        </Card>
        <Card className="flex flex-col h-full bg-card">
          <CardHeader>
            <CardTitle className="text-2xl">Dedicated Enterprise</CardTitle>
            <CardDescription>Maximum performance and custom architecture.</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col">
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-4xl font-bold text-foreground">$state.enterprisePrice</span>
              <span className="text-muted-foreground font-medium">/mo</span>
            </div>
            <Badge variant="secondary" className="w-fit mb-6">$state.discountBadgeText</Badge>
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <CheckIcon className="h-5 w-5 text-primary shrink-0" />
                <span>Custom Hardware Config</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <CheckIcon className="h-5 w-5 text-primary shrink-0" />
                <span>2 TB NVMe Storage</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <CheckIcon className="h-5 w-5 text-primary shrink-0" />
                <span>16+ Dedicated Cores</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <CheckIcon className="h-5 w-5 text-primary shrink-0" />
                <span>Dedicated Account Manager</span>
              </li>
            </ul>
            <Button variant="outline" className="w-full" asChild>
              <Link to="/contact">Contact Sales</Link>
            </Button>
          </CardContent>
        </Card>
      </section>
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-24 max-w-7xl">
        <h2 className="text-3xl font-bold mb-10 text-center text-foreground">Compare All Features</h2>
        <div className="rounded-xl border bg-card overflow-hidden shadow-sm relative">
          <ScrollArea className="w-full overflow-auto">
            <Table>
              <TableHeader className="bg-muted/80 backdrop-blur-sm sticky top-0 z-10 shadow-sm">
                <TableRow>
                  <TableHead className="w-[300px] py-4 text-foreground font-semibold">Feature</TableHead>
                  <TableHead className="text-center py-4 text-foreground font-semibold min-w-[150px]">Shared Starter</TableHead>
                  <TableHead className="text-center py-4 text-primary font-bold min-w-[150px]">VPS Pro</TableHead>
                  <TableHead className="text-center py-4 text-foreground font-semibold min-w-[150px]">Dedicated Enterprise</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium py-4">CPU Cores</TableCell>
                  <TableCell className="text-center text-muted-foreground py-4">1 Core (Shared)</TableCell>
                  <TableCell className="text-center font-medium py-4">4 Cores (Dedicated)</TableCell>
                  <TableCell className="text-center text-muted-foreground py-4">16+ Cores (Dedicated)</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium py-4">RAM</TableCell>
                  <TableCell className="text-center text-muted-foreground py-4">1 GB</TableCell>
                  <TableCell className="text-center font-medium py-4">8 GB</TableCell>
                  <TableCell className="text-center text-muted-foreground py-4">64+ GB</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium py-4 flex items-center gap-2">
                    <span>DDoS Protection</span>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <button className="inline-flex items-center justify-center rounded-full w-5 h-5 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                            <InformationCircleIcon className="h-4 w-4 text-muted-foreground hover:text-foreground" />
                          </button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Advanced layer 3/4 and layer 7 mitigation to keep your site online during attacks.</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </TableCell>
                  <TableCell className="text-center text-muted-foreground py-4">Basic (2 Gbps)</TableCell>
                  <TableCell className="text-center font-medium py-4">Advanced (10 Gbps)</TableCell>
                  <TableCell className="text-center text-muted-foreground py-4">Enterprise (Unlimited)</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium py-4 flex items-center gap-2">
                    <span>Uptime SLA</span>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <button className="inline-flex items-center justify-center rounded-full w-5 h-5 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                            <InformationCircleIcon className="h-4 w-4 text-muted-foreground hover:text-foreground" />
                          </button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Service Level Agreement guaranteeing network availability. Credits issued for downtime.</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </TableCell>
                  <TableCell className="text-center text-muted-foreground py-4">99.9%</TableCell>
                  <TableCell className="text-center font-medium py-4">99.99%</TableCell>
                  <TableCell className="text-center text-muted-foreground py-4">100%</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium py-4">Root Access</TableCell>
                  <TableCell className="text-center py-4">
                    <MinusIcon className="h-5 w-5 text-muted-foreground mx-auto" />
                  </TableCell>
                  <TableCell className="text-center py-4">
                    <CheckIcon className="h-5 w-5 text-primary mx-auto" />
                  </TableCell>
                  <TableCell className="text-center py-4">
                    <CheckIcon className="h-5 w-5 text-primary mx-auto" />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
      </section>
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <Card className="bg-secondary border-none overflow-hidden">
          <CardContent className="flex flex-col items-center text-center py-16 px-6 sm:px-12">
            <ShieldCheckIcon className="h-16 w-16 text-primary mb-6" />
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-secondary-foreground tracking-tight">30-Day Money-Back Guarantee</h2>
            <p className="text-lg text-secondary-foreground/80 mb-8 max-w-2xl">We stand behind our infrastructure. If you're not completely satisfied with our performance or support within your first 30 days, we'll refund your hosting fees, no questions asked.</p>
            <Button size="lg" asChild className="font-semibold px-8">
              <Link to="/contact">Contact Us for Custom Quotes</Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
