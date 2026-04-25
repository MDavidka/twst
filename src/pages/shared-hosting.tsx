import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Link } from 'react-router-dom'
import { CheckIcon, XMarkIcon } from '@heroicons/react/24/outline'

export function Sharedhosting() {
  React.useEffect(() => { document.title = "SharedHosting" }, [])
  const [isYearly, setIsYearly] = React.useState('')

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <section className="w-full bg-muted/30 pt-16 pb-12 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">SharedHosting</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Affordable, reliable, and lightning-fast entry-level hosting designed specifically for small business owners and ambitious bloggers.</p>
        </div>
      </section>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row gap-8 lg:gap-12 items-start">
        <aside className="w-full md:w-64 shrink-0 md:sticky md:top-24 space-y-8">
          <nav className="flex flex-col space-y-1">
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2 px-4">On this page</h3>
            <Button variant="ghost" className="justify-start" asChild>
              <a href="#pricing">Pricing Plans</a>
            </Button>
            <Button variant="ghost" className="justify-start" asChild>
              <a href="#features">Feature Comparison</a>
            </Button>
            <Button variant="ghost" className="justify-start" asChild>
              <a href="#faq">FAQ</a>
            </Button>
          </nav>
          <Card className="bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="text-lg">Need Custom Solutions?</CardTitle>
              <CardDescription>Talk to our sales team to find the perfect fit for your growing business.</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="default" className="w-full" asChild>
                <Link to="/support">Contact Sales</Link>
              </Button>
            </CardContent>
          </Card>
        </aside>
        <main className="flex-1 space-y-24 w-full">
          <section id="pricing" className="scroll-mt-28">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
              <h2 className="text-3xl font-bold tracking-tight">Choose Your Plan</h2>
              <div className="flex items-center space-x-3 bg-muted/50 p-2 rounded-lg border border-border">
                <Label htmlFor="billing-toggle" className="cursor-pointer">Monthly</Label>
                <Switch id="billing-toggle" checked={isYearly} onCheckedChange={setIsYearly} />
                <Label htmlFor="billing-toggle" className="cursor-pointer font-medium text-primary">Yearly (Save 20%)</Label>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
              <Card className="flex flex-col">
                <CardHeader>
                  <CardTitle>Starter</CardTitle>
                  <CardDescription>Perfect for personal blogs and portfolios.</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="mb-6">
                    <span className="text-4xl font-extrabold">$state.starterPrice</span>
                    <span className="text-muted-foreground ml-1">/mo</span>
                  </div>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckIcon className="h-4 w-4 text-primary" />
                      <span>1 Website</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckIcon className="h-4 w-4 text-primary" />
                      <span>10 GB SSD Storage</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckIcon className="h-4 w-4 text-primary" />
                      <span>Unmetered Bandwidth</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/support">Select Starter</Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card className="flex flex-col border-primary shadow-lg lg:-translate-y-4 hover:shadow-xl transition-all duration-300 relative">
                <CardHeader>
                  <CardAction>
                    <Badge variant="default" className="absolute -top-3 right-6">Best Value</Badge>
                  </CardAction>
                  <CardTitle className="text-primary">Professional</CardTitle>
                  <CardDescription>Ideal for small businesses and growing sites.</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="mb-6">
                    <span className="text-4xl font-extrabold">$state.proPrice</span>
                    <span className="text-muted-foreground ml-1">/mo</span>
                  </div>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2 font-medium text-foreground">
                      <CheckIcon className="h-4 w-4 text-primary" />
                      <span>Unlimited Websites</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckIcon className="h-4 w-4 text-primary" />
                      <span>50 GB NVMe Storage</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckIcon className="h-4 w-4 text-primary" />
                      <span>Free Domain (1st Year)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckIcon className="h-4 w-4 text-primary" />
                      <span>Daily Backups</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="default" className="w-full" asChild>
                    <Link to="/support">Select Professional</Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card className="flex flex-col">
                <CardHeader>
                  <CardTitle>Business</CardTitle>
                  <CardDescription>Maximum power for high-traffic eCommerce.</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="mb-6">
                    <span className="text-4xl font-extrabold">$state.businessPrice</span>
                    <span className="text-muted-foreground ml-1">/mo</span>
                  </div>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckIcon className="h-4 w-4 text-primary" />
                      <span>Unlimited Websites</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckIcon className="h-4 w-4 text-primary" />
                      <span>200 GB NVMe Storage</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckIcon className="h-4 w-4 text-primary" />
                      <span>Dedicated IP Address</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckIcon className="h-4 w-4 text-primary" />
                      <span>Free SSL Certificate</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/support">Select Business</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </section>
          <section id="features" className="scroll-mt-28">
            <h2 className="text-3xl font-bold tracking-tight mb-6">Detailed Feature Comparison</h2>
            <div className="border border-border rounded-lg overflow-hidden bg-card shadow-sm">
              <div className="max-h-[600px] overflow-auto">
                <Table>
                  <TableHeader className="sticky top-0 bg-muted/90 backdrop-blur z-10 shadow-sm">
                    <TableRow>
                      <TableHead className="w-[300px]">Core Features</TableHead>
                      <TableHead>Starter</TableHead>
                      <TableHead className="text-primary font-bold">Professional</TableHead>
                      <TableHead>Business</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Websites Hosted</TableCell>
                      <TableCell>1</TableCell>
                      <TableCell>Unlimited</TableCell>
                      <TableCell>Unlimited</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Storage Space</TableCell>
                      <TableCell>10 GB SSD</TableCell>
                      <TableCell>50 GB NVMe</TableCell>
                      <TableCell>200 GB NVMe</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Bandwidth</TableCell>
                      <TableCell>Unmetered</TableCell>
                      <TableCell>Unmetered</TableCell>
                      <TableCell>Unmetered</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Email Accounts</TableCell>
                      <TableCell>10</TableCell>
                      <TableCell>100</TableCell>
                      <TableCell>Unlimited</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Free SSL Certificate</TableCell>
                      <TableCell>
                        <CheckIcon className="h-5 w-5 text-green-500" />
                      </TableCell>
                      <TableCell>
                        <CheckIcon className="h-5 w-5 text-green-500" />
                      </TableCell>
                      <TableCell>
                        <CheckIcon className="h-5 w-5 text-green-500" />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Dedicated IP</TableCell>
                      <TableCell>
                        <XMarkIcon className="h-5 w-5 text-muted-foreground" />
                      </TableCell>
                      <TableCell>
                        <XMarkIcon className="h-5 w-5 text-muted-foreground" />
                      </TableCell>
                      <TableCell>
                        <CheckIcon className="h-5 w-5 text-green-500" />
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>
          </section>
          <section id="faq" className="scroll-mt-28">
            <h2 className="text-3xl font-bold tracking-tight mb-6">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>What is shared hosting?</AccordionTrigger>
                <AccordionContent>Shared hosting is a web hosting service where multiple websites share the resources of a single physical server. It's the most cost-effective way to get a site online, making it perfect for small businesses, blogs, and personal websites.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Can I upgrade my plan later?</AccordionTrigger>
                <AccordionContent>Absolutely! As your website grows and requires more resources, you can easily upgrade to a higher tier plan or even migrate to our VPS hosting directly from your control panel with zero downtime.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Do you provide website migrations?</AccordionTrigger>
                <AccordionContent>Yes, we offer free website migration for all new accounts. Once you sign up, simply open a support ticket with your previous host's details, and our expert team will handle the transfer for you.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>What does 'Unmetered Bandwidth' mean?</AccordionTrigger>
                <AccordionContent>Unmetered bandwidth means we do not set a strict limit on the amount of data transfer your website can use in a month. However, it is subject to our fair use policy to ensure optimal performance for all users on the shared server.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </main>
      </div>
    </div>
  )
}
