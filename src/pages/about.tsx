import React from 'react'
import { Spotlight } from '@/components/aceternity/spotlight'
import { TextGenerateEffect } from '@/components/aceternity/text-generate-effect'
import { WobbleCard } from '@/components/aceternity/wobble-card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardDescription, CardTitle } from '@/components/ui/card'
import { Link } from 'react-router-dom'
import { ClockIcon, CloudIcon, CpuChipIcon, GlobeAltIcon, MapPinIcon, ServerIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'
import { onDownloadSLA } from '@/lib/about-logic'

export function About() {
  React.useEffect(() => { document.title = "About" }, [])

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground overflow-hidden">
      <section className="relative w-full pt-32 pb-20 md:pt-48 md:pb-32 flex flex-col items-center justify-center overflow-hidden">
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" />
        <div className="container px-4 md:px-6 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 text-foreground">
            <span>About</span>
          </h1>
          <TextGenerateEffect words="We are on a mission to provide the fastest, most secure, and highly available cloud hosting infrastructure for businesses worldwide." className="max-w-3xl mx-auto text-lg md:text-2xl text-muted-foreground font-medium leading-relaxed" />
        </div>
      </section>
      <section className="py-16 bg-muted/30 border-y border-border">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="flex flex-col items-center space-y-3">
              <GlobeAltIcon className="h-10 w-10 text-primary mb-2" />
              <h3 className="text-5xl font-bold text-foreground tracking-tight">2M+</h3>
              <p className="text-lg text-muted-foreground font-medium">Domains Hosted</p>
            </div>
            <div className="flex flex-col items-center space-y-3">
              <ShieldCheckIcon className="h-10 w-10 text-primary mb-2" />
              <h3 className="text-5xl font-bold text-foreground tracking-tight">99.99%</h3>
              <p className="text-lg text-muted-foreground font-medium">Uptime Guarantee</p>
            </div>
            <div className="flex flex-col items-center space-y-3">
              <ServerIcon className="h-10 w-10 text-primary mb-2" />
              <h3 className="text-5xl font-bold text-foreground tracking-tight">50+</h3>
              <p className="text-lg text-muted-foreground font-medium">Global Data Centers</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 container px-4 md:px-6 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground tracking-tight">Global Infrastructure</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Strategically located across the globe to ensure ultra-low latency, maximum redundancy, and compliance with local data regulations.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <WobbleCard containerClassName="col-span-1 min-h-[250px]" className="p-8 bg-card border border-border flex flex-col justify-center">
            <MapPinIcon className="h-10 w-10 text-primary mb-6" />
            <h3 className="text-2xl font-bold text-foreground mb-3">North America</h3>
            <p className="text-muted-foreground leading-relaxed">New York, San Francisco, Toronto. Equipped with 400Gbps redundant fiber rings and DDoS mitigation.</p>
          </WobbleCard>
          <WobbleCard containerClassName="col-span-1 min-h-[250px]" className="p-8 bg-card border border-border flex flex-col justify-center">
            <MapPinIcon className="h-10 w-10 text-primary mb-6" />
            <h3 className="text-2xl font-bold text-foreground mb-3">Europe</h3>
            <p className="text-muted-foreground leading-relaxed">London, Frankfurt, Amsterdam. Fully GDPR compliant facilities powered by 100% renewable energy.</p>
          </WobbleCard>
          <WobbleCard containerClassName="col-span-1 min-h-[250px] md:col-span-2 lg:col-span-1" className="p-8 bg-card border border-border flex flex-col justify-center">
            <MapPinIcon className="h-10 w-10 text-primary mb-6" />
            <h3 className="text-2xl font-bold text-foreground mb-3">Asia Pacific</h3>
            <p className="text-muted-foreground leading-relaxed">Singapore, Tokyo, Sydney. Direct peering with major regional ISPs for unparalleled speed.</p>
          </WobbleCard>
        </div>
      </section>
      <section className="py-24 bg-muted/20">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-foreground tracking-tight">Our Journey</h2>
          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-border">
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-primary text-primary-foreground shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <ClockIcon className="h-4 w-4" />
              </div>
              <Card className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 shadow-sm">
                <Badge variant="secondary" className="mb-3">2015</Badge>
                <CardTitle className="text-xl mb-2">The Beginning</CardTitle>
                <CardDescription className="text-base">Founded in a small office with a single server rack and a vision to democratize high-performance hosting for developers.</CardDescription>
              </Card>
            </div>
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-primary text-primary-foreground shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <CloudIcon className="h-4 w-4" />
              </div>
              <Card className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 shadow-sm">
                <Badge variant="secondary" className="mb-3">2018</Badge>
                <CardTitle className="text-xl mb-2">Global Expansion</CardTitle>
                <CardDescription className="text-base">Opened our first international data centers in London and Singapore, introducing our proprietary global load balancing.</CardDescription>
              </Card>
            </div>
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-primary text-primary-foreground shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <CpuChipIcon className="h-4 w-4" />
              </div>
              <Card className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 shadow-sm">
                <Badge variant="secondary" className="mb-3">2023</Badge>
                <CardTitle className="text-xl mb-2">Enterprise Cloud</CardTitle>
                <CardDescription className="text-base">Launched our Enterprise Cloud tier featuring dedicated compute, NVMe storage arrays, and AI-driven threat mitigation.</CardDescription>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 container px-4 md:px-6 mx-auto text-center">
        <ShieldCheckIcon className="h-20 w-20 text-primary mx-auto mb-8" />
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground tracking-tight">Rock-Solid Reliability</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">We stand by our infrastructure. Our Service Level Agreement guarantees 99.99% uptime. If your site goes down, we credit your account. It's that simple.</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/contact">
            <Button size="lg" className="w-full sm:w-auto text-base h-12 px-8">Contact Sales</Button>
          </Link>
          <Button variant="outline" size="lg" className="w-full sm:w-auto text-base h-12 px-8" onClick={onDownloadSLA}>Download SLA</Button>
        </div>
      </section>
    </div>
  )
}
