import React from 'react'
import { BackgroundGradient } from '@/components/aceternity/background-gradient'
import { GlareCard } from '@/components/aceternity/glare-card'
import { Highlight } from '@/components/aceternity/hero-highlight'
import { HoverBorderGradient } from '@/components/aceternity/hover-border-gradient'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Link } from 'react-router-dom'
import { CheckCircleIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { togglePricing, onCheckoutStarter, onCheckoutPro, onCheckoutEnterprise } from '@/lib/hosting-logic'

export function Hosting() {
  React.useEffect(() => { document.title = "Hosting" }, [])
  const [isAnnual, setIsAnnual] = React.useState('')

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center w-full max-w-7xl mx-auto">
        <BackgroundGradient className="rounded-[22px] p-8 sm:p-16 bg-white dark:bg-zinc-900 w-full max-w-4xl mx-auto shadow-xl">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground mb-6">
            <span>Premium </span>
            <Highlight className="text-black dark:text-white">Hosting</Highlight>
            <span> Plans</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">High-performance cloud infrastructure designed for speed, security, and scalability. Choose the perfect plan for your next big idea.</p>
          <div className="flex items-center justify-center gap-4 bg-muted/50 p-4 rounded-full inline-flex mx-auto">
            <Label htmlFor="billing-toggle" className="text-base font-medium cursor-pointer">Monthly</Label>
            <Switch id="billing-toggle" checked={isAnnual} onCheckedChange={togglePricing} />
            <Label htmlFor="billing-toggle" className="text-base font-medium flex items-center gap-2 cursor-pointer">
              <span>Annually</span>
              <Badge variant="secondary" className="text-xs text-emerald-600 bg-emerald-100 dark:bg-emerald-900/30 dark:text-emerald-400 border-none">Save 20%</Badge>
            </Label>
          </div>
        </BackgroundGradient>
      </section>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          <GlareCard className="flex flex-col items-start p-8 h-full w-full">
            <h3 className="text-2xl font-bold text-white mb-2">Starter</h3>
            <p className="text-zinc-400 text-sm mb-6 h-10">Perfect for personal blogs and small projects.</p>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-4xl font-extrabold text-white">$4.99</span>
              <span className="text-zinc-400 font-medium">/mo</span>
            </div>
            <ul className="space-y-4 mb-8 flex-1 w-full">
              <li className="flex items-center text-zinc-200 text-sm">
                <CheckCircleIcon className="h-5 w-5 text-cyan-400 mr-3 shrink-0" />
                <span>1 Website</span>
              </li>
              <li className="flex items-center text-zinc-200 text-sm">
                <CheckCircleIcon className="h-5 w-5 text-cyan-400 mr-3 shrink-0" />
                <span>50 GB NVMe Storage</span>
              </li>
              <li className="flex items-center text-zinc-200 text-sm">
                <CheckCircleIcon className="h-5 w-5 text-cyan-400 mr-3 shrink-0" />
                <span>Unmetered Bandwidth</span>
              </li>
              <li className="flex items-center text-zinc-200 text-sm">
                <CheckCircleIcon className="h-5 w-5 text-cyan-400 mr-3 shrink-0" />
                <span>Free SSL Certificate</span>
              </li>
            </ul>
            <HoverBorderGradient containerClassName="w-full mt-auto" className="w-full flex items-center justify-center text-white font-semibold py-3 bg-zinc-900" onClick={onCheckoutStarter}>Get Started</HoverBorderGradient>
          </GlareCard>
          <GlareCard className="flex flex-col items-start p-8 h-full w-full relative">
            <div className="flex justify-between items-center w-full mb-2">
              <h3 className="text-2xl font-bold text-white">Professional</h3>
              <Badge className="bg-cyan-500 hover:bg-cyan-600 text-white border-none">Popular</Badge>
            </div>
            <p className="text-zinc-400 text-sm mb-6 h-10">Ideal for growing businesses and high-traffic sites.</p>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-4xl font-extrabold text-white">$9.99</span>
              <span className="text-zinc-400 font-medium">/mo</span>
            </div>
            <ul className="space-y-4 mb-8 flex-1 w-full">
              <li className="flex items-center text-zinc-200 text-sm">
                <CheckCircleIcon className="h-5 w-5 text-cyan-400 mr-3 shrink-0" />
                <span>Unlimited Websites</span>
              </li>
              <li className="flex items-center text-zinc-200 text-sm">
                <CheckCircleIcon className="h-5 w-5 text-cyan-400 mr-3 shrink-0" />
                <span>200 GB NVMe Storage</span>
              </li>
              <li className="flex items-center text-zinc-200 text-sm">
                <CheckCircleIcon className="h-5 w-5 text-cyan-400 mr-3 shrink-0" />
                <span>Free Domain (1st Year)</span>
              </li>
              <li className="flex items-center text-zinc-200 text-sm">
                <CheckCircleIcon className="h-5 w-5 text-cyan-400 mr-3 shrink-0" />
                <span>Daily Backups</span>
              </li>
            </ul>
            <HoverBorderGradient containerClassName="w-full mt-auto" className="w-full flex items-center justify-center text-white font-semibold py-3 bg-cyan-600/20" onClick={onCheckoutPro}>Get Started</HoverBorderGradient>
          </GlareCard>
          <GlareCard className="flex flex-col items-start p-8 h-full w-full">
            <h3 className="text-2xl font-bold text-white mb-2">Enterprise</h3>
            <p className="text-zinc-400 text-sm mb-6 h-10">Maximum performance and dedicated resources.</p>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-4xl font-extrabold text-white">$29.99</span>
              <span className="text-zinc-400 font-medium">/mo</span>
            </div>
            <ul className="space-y-4 mb-8 flex-1 w-full">
              <li className="flex items-center text-zinc-200 text-sm">
                <CheckCircleIcon className="h-5 w-5 text-cyan-400 mr-3 shrink-0" />
                <span>Unlimited Websites</span>
              </li>
              <li className="flex items-center text-zinc-200 text-sm">
                <CheckCircleIcon className="h-5 w-5 text-cyan-400 mr-3 shrink-0" />
                <span>Unlimited NVMe Storage</span>
              </li>
              <li className="flex items-center text-zinc-200 text-sm">
                <CheckCircleIcon className="h-5 w-5 text-cyan-400 mr-3 shrink-0" />
                <span>Dedicated IP Address</span>
              </li>
              <li className="flex items-center text-zinc-200 text-sm">
                <CheckCircleIcon className="h-5 w-5 text-cyan-400 mr-3 shrink-0" />
                <span>Priority 24/7 Support</span>
              </li>
            </ul>
            <HoverBorderGradient containerClassName="w-full mt-auto" className="w-full flex items-center justify-center text-white font-semibold py-3 bg-zinc-900" onClick={onCheckoutEnterprise}>Get Started</HoverBorderGradient>
          </GlareCard>
        </div>
      </section>
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
        <h2 className="text-3xl font-bold text-center mb-12">Detailed Feature Comparison</h2>
        <div className="overflow-x-auto rounded-xl border border-border bg-card">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50">
                <TableHead className="w-[300px] py-5 pl-6 font-semibold text-foreground">Feature</TableHead>
                <TableHead className="text-center py-5 font-semibold text-foreground">Starter</TableHead>
                <TableHead className="text-center py-5 font-semibold text-foreground">Professional</TableHead>
                <TableHead className="text-center py-5 font-semibold text-foreground">Enterprise</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium pl-6">Websites</TableCell>
                <TableCell className="text-center text-muted-foreground">1</TableCell>
                <TableCell className="text-center text-muted-foreground">Unlimited</TableCell>
                <TableCell className="text-center text-muted-foreground">Unlimited</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium pl-6">NVMe Storage</TableCell>
                <TableCell className="text-center text-muted-foreground">50 GB</TableCell>
                <TableCell className="text-center text-muted-foreground">200 GB</TableCell>
                <TableCell className="text-center text-muted-foreground">Unlimited</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium pl-6">Free Domain</TableCell>
                <TableCell className="text-center">
                  <XMarkIcon className="h-5 w-5 text-muted-foreground mx-auto" />
                </TableCell>
                <TableCell className="text-center">
                  <CheckCircleIcon className="h-5 w-5 text-primary mx-auto" />
                </TableCell>
                <TableCell className="text-center">
                  <CheckCircleIcon className="h-5 w-5 text-primary mx-auto" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium pl-6">Daily Backups</TableCell>
                <TableCell className="text-center">
                  <XMarkIcon className="h-5 w-5 text-muted-foreground mx-auto" />
                </TableCell>
                <TableCell className="text-center">
                  <CheckCircleIcon className="h-5 w-5 text-primary mx-auto" />
                </TableCell>
                <TableCell className="text-center">
                  <CheckCircleIcon className="h-5 w-5 text-primary mx-auto" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium pl-6">Dedicated IP</TableCell>
                <TableCell className="text-center">
                  <XMarkIcon className="h-5 w-5 text-muted-foreground mx-auto" />
                </TableCell>
                <TableCell className="text-center">
                  <XMarkIcon className="h-5 w-5 text-muted-foreground mx-auto" />
                </TableCell>
                <TableCell className="text-center">
                  <CheckCircleIcon className="h-5 w-5 text-primary mx-auto" />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-left font-medium text-lg">What is the difference between Monthly and Annual billing?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">Annual billing requires a one-time payment for the entire year but offers a 20% discount compared to paying month-to-month. It's the most cost-effective option for long-term projects.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-left font-medium text-lg">Can I upgrade my plan later?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">Yes, you can seamlessly upgrade your hosting plan at any time from your dashboard. We handle the migration in the background with zero downtime.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-left font-medium text-lg">Do you offer a money-back guarantee?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">We offer a 30-day money-back guarantee on all our hosting plans. If you're not completely satisfied with our service, we'll refund your hosting fees, no questions asked.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-left font-medium text-lg">Is a free domain included?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">A free domain registration for the first year is included with our Professional and Enterprise annual plans. Standard renewal rates apply after the first year.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className="text-left font-medium text-lg">Will you help me migrate my existing website?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">Absolutely! Our migration experts will transfer your website, databases, and emails to our servers for free, ensuring a smooth transition with zero downtime.</AccordionContent>
          </AccordionItem>
        </Accordion>
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <Link className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2" to="/contact">Contact Support</Link>
        </div>
      </section>
    </div>
  )
}
