import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Link } from 'react-router-dom'
import { MapPinIcon, PhoneIcon } from '@heroicons/react/24/outline'

export function About() {
  React.useEffect(() => { document.title = "About" }, [])

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-7xl">
      <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-12 mb-20">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight col-span-full lg:col-span-6 font-heading">About</h1>
        <div className="lg:col-span-6 flex flex-col sm:flex-row gap-4 mt-8 lg:mt-0 lg:items-end">
          <Button variant="default" size="lg" asChild>
            <Link to="/products">Shop Now</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-12">
          <Card className="overflow-hidden">
            <CardHeader>
              <CardTitle>Our Story</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 pt-0">
              <div className="space-y-4">
                <p>Founded in 2015, we've grown from a single storefront to your trusted phone experts serving 10,000+ happy customers across 5 locations.</p>
                <div className="flex flex-col sm:flex-row gap-6 pt-6 border-t">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-sm">99%</div>
                    <div>
                      <p className="text-sm font-medium">Customer Satisfaction</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-sm">10K+</div>
                    <div>
                      <p className="text-sm font-medium">Phones Sold</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>
                <div className="flex items-center gap-2">
                  <PhoneIcon className="h-5 w-5" />
                  <span>Interactive Timeline</span>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 border text-primary font-medium">2015</div>
                  <div className="space-y-1">
                    <p className="font-medium">Storefront #1 Opens</p>
                    <p className="text-sm text-muted-foreground">First iPhone 6 sales in downtown.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 border text-primary font-medium">2018</div>
                  <div className="space-y-1">
                    <p className="font-medium">5 Locations</p>
                    <p className="text-sm text-muted-foreground">Expanded to serve entire region.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary font-medium text-primary-foreground">2025</div>
                  <div className="space-y-1">
                    <p className="font-medium">10K Customers</p>
                    <p className="text-sm text-muted-foreground">Celebrating our 10,000th sale!</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Our Warranty Policy</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <Accordion type="single" collapsible defaultValue="item-1">
                <AccordionItem value="item-1">
                  <AccordionTrigger>What does the warranty cover?</AccordionTrigger>
                  <AccordionContent>Full hardware warranty for 1 year, software updates for 3 years. Covers manufacturing defects, battery degradation, screen damage.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>How do I file a claim?</AccordionTrigger>
                  <AccordionContent>Bring your phone and receipt to any store location. Same-day service for most repairs.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>What about water damage?</AccordionTrigger>
                  <AccordionContent>IP68-rated phones covered if tested within 14 days of purchase. Professional drying service included.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>Battery replacement policy?</AccordionTrigger>
                  <AccordionContent>Free replacement if capacity falls below 80% within 12 months.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>Software support duration?</AccordionTrigger>
                  <AccordionContent>3 years of OS updates + security patches guaranteed.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                  <AccordionTrigger>Repair turnaround time?</AccordionTrigger>
                  <AccordionContent>95% of repairs completed same day. Free loaner phones available.</AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </div>
        <div className="lg:sticky lg:top-24 space-y-8">
          <Card>
            <CardHeader className="flex-row items-center gap-4 pb-4">
              <MapPinIcon className="h-6 w-6 text-primary mt-1" />
              <CardTitle className="text-xl m-0">Store Locations</CardTitle>
            </CardHeader>
            <CardContent className="p-0 pt-4">
              <div className="aspect-video rounded-lg overflow-hidden bg-muted mb-4">
                <div className="h-full flex items-center justify-center text-muted-foreground text-sm">🗺️ Multiple Store Locations Map</div>
              </div>
              <div className="space-y-2 text-xs">
                <div>
                  <p className="font-medium">Downtown Store</p>
                  <p className="text-muted-foreground">123 Main St</p>
                </div>
                <div>
                  <p className="font-medium">Westside Mall</p>
                  <p className="text-muted-foreground">456 Oak Ave</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Meet Our Experts</CardTitle>
              <CardDescription>Certified technicians ready to help</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4 pt-0">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                <Avatar className="h-10 w-10">
                  <AvatarImage src="" alt="Sarah" />
                  <AvatarFallback>SK</AvatarFallback>
                </Avatar>
                <div className="space-y-0.5">
                  <p className="font-medium">Sarah Kim</p>
                  <div className="flex items-center gap-1">
                    <Badge variant="secondary">iOS Expert</Badge>
                    <Badge variant="secondary">5+ Years</Badge>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                <Avatar className="h-10 w-10">
                  <AvatarImage src="" alt="Mike" />
                  <AvatarFallback>MR</AvatarFallback>
                </Avatar>
                <div className="space-y-0.5">
                  <p className="font-medium">Mike Rivera</p>
                  <div className="flex items-center gap-1">
                    <Badge variant="secondary">Android Pro</Badge>
                    <Badge variant="secondary">7+ Years</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
