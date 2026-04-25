import React from 'react'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { InputGroup, InputGroupButton, InputGroupInput } from '@/components/ui/input-group'
import { Link } from 'react-router-dom'
import { ArrowRightIcon, ArrowUturnLeftIcon, ChatBubbleLeftRightIcon, DevicePhoneMobileIcon, ShoppingCartIcon, SparklesIcon, TruckIcon } from '@heroicons/react/24/outline'
import { onAddToCart, onSubscribe } from '@/lib/index-logic'

export function Home() {
  React.useEffect(() => { document.title = "Home" }, [])
  const [newsletterEmail, setNewsletterEmail] = React.useState('')

  return (
    <div className="min-h-screen bg-background flex flex-col w-full">
      <section className="w-full relative">
        <Carousel className="w-full" opts="[object Object]">
          <CarouselContent>
            <CarouselItem>
              <div className="relative w-full h-[85vh] min-h-[600px] flex items-center bg-zinc-950 text-white overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-900/90 to-transparent z-0" />
                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 opacity-20 md:opacity-40 z-0">
                  <DevicePhoneMobileIcon className="w-[800px] h-[800px] text-primary" />
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                  <Badge variant="secondary" className="mb-6 bg-primary/20 text-primary hover:bg-primary/30 border-none px-3 py-1 text-sm">Just Released</Badge>
                  <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6 max-w-3xl leading-tight">The New Titan Pro.</h1>
                  <p className="text-lg md:text-2xl text-zinc-300 mb-10 max-w-2xl font-light">Beyond boundaries. Featuring the revolutionary quantum processor, all-day battery life, and a pro-grade cinematic camera system.</p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" className="text-lg px-8 h-14" asChild>
                      <Link to="/shop">Buy Now</Link>
                    </Button>
                    <Button variant="outline" size="lg" className="text-lg px-8 h-14 bg-transparent border-zinc-700 text-white hover:bg-white hover:text-zinc-950" asChild>
                      <Link to="/compare">Compare Specs</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="relative w-full h-[85vh] min-h-[600px] flex items-center bg-zinc-100 text-zinc-950 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-zinc-100 via-zinc-100/90 to-transparent z-0" />
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                  <Badge variant="default" className="mb-6 px-3 py-1 text-sm">Best Seller</Badge>
                  <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6 max-w-3xl leading-tight">Foldable Future.</h1>
                  <p className="text-lg md:text-2xl text-zinc-600 mb-10 max-w-2xl font-light">Unfold infinite possibilities. The thinnest foldable device on the market with a seamless dual-display experience.</p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" className="text-lg px-8 h-14" asChild>
                      <Link to="/shop">Shop Foldables</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="left-4 md:left-8 hidden md:flex" />
          <CarouselNext className="right-4 md:right-8 hidden md:flex" />
        </Carousel>
      </section>
      <div className="w-full bg-primary py-3 px-4 text-center">
        <p className="text-primary-foreground text-sm md:text-base font-medium flex items-center justify-center gap-2">
          <SparklesIcon className="h-4 w-4" />
          <span>Spring Sale: Up to 20% off selected flagship devices. Limited time only.</span>
          <Link className="underline underline-offset-4 ml-2 font-bold hover:text-white" to="/shop">Shop now</Link>
        </p>
      </div>
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full border-b border-border">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 text-center">
          <div className="flex flex-col items-center">
            <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 text-primary">
              <TruckIcon className="h-7 w-7" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-foreground">Free Expedited Shipping</h3>
            <p className="text-muted-foreground leading-relaxed">Get your new device delivered safely to your door in 1-2 business days, completely free of charge.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 text-primary">
              <ArrowUturnLeftIcon className="h-7 w-7" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-foreground">30-Day Easy Returns</h3>
            <p className="text-muted-foreground leading-relaxed">Not completely satisfied? Return your device within 30 days for a full refund, no questions asked.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 text-primary">
              <ChatBubbleLeftRightIcon className="h-7 w-7" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-foreground">24/7 Expert Support</h3>
            <p className="text-muted-foreground leading-relaxed">Our technical specialists are always on standby to help you set up or troubleshoot your new phone.</p>
          </div>
        </div>
      </section>
      <section className="py-20 bg-muted/40 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">Featured Devices</h2>
              <p className="text-muted-foreground mt-2 text-lg">Our top-selling smartphones this week.</p>
            </div>
            <Button variant="ghost" className="hidden sm:flex hover:bg-transparent hover:text-primary" asChild>
              <Link to="/shop">
                <span>View all catalog</span>
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="group overflow-hidden flex flex-col hover:border-primary/50 transition-colors">
              <CardHeader className="p-0 relative bg-zinc-100">
                <AspectRatio ratio={0.8}>
                  <div className="w-full h-full flex items-center justify-center p-8">
                    <DevicePhoneMobileIcon className="w-full h-full text-zinc-300 group-hover:scale-105 transition-transform duration-500" />
                  </div>
                </AspectRatio>
                <Badge className="absolute top-4 left-4 z-10">Bestseller</Badge>
              </CardHeader>
              <CardContent className="p-6 flex-1">
                <CardTitle className="line-clamp-1 text-xl">Titan Pro Max</CardTitle>
                <CardDescription className="mt-1">256GB, Midnight Black</CardDescription>
                <p className="text-xl font-bold mt-4 text-foreground">$1,099.00</p>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button className="w-full opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity" onClick={onAddToCart}>
                  <ShoppingCartIcon className="mr-2 h-4 w-4" />
                  <span>Add to Cart</span>
                </Button>
              </CardFooter>
            </Card>
            <Card className="group overflow-hidden flex flex-col hover:border-primary/50 transition-colors">
              <CardHeader className="p-0 relative bg-zinc-100">
                <AspectRatio ratio={0.8}>
                  <div className="w-full h-full flex items-center justify-center p-8">
                    <DevicePhoneMobileIcon className="w-full h-full text-zinc-300 group-hover:scale-105 transition-transform duration-500" />
                  </div>
                </AspectRatio>
                <Badge variant="secondary" className="absolute top-4 left-4 z-10">Sale</Badge>
              </CardHeader>
              <CardContent className="p-6 flex-1">
                <CardTitle className="line-clamp-1 text-xl">Galaxy Z Fold 5</CardTitle>
                <CardDescription className="mt-1">512GB, Phantom Black</CardDescription>
                <div className="flex items-center gap-2 mt-4">
                  <p className="text-xl font-bold text-foreground">$1,599.00</p>
                  <p className="text-sm text-muted-foreground line-through">$1,799.00</p>
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button className="w-full opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity" onClick={onAddToCart}>
                  <ShoppingCartIcon className="mr-2 h-4 w-4" />
                  <span>Add to Cart</span>
                </Button>
              </CardFooter>
            </Card>
            <Card className="group overflow-hidden flex flex-col hover:border-primary/50 transition-colors">
              <CardHeader className="p-0 relative bg-zinc-100">
                <AspectRatio ratio={0.8}>
                  <div className="w-full h-full flex items-center justify-center p-8">
                    <DevicePhoneMobileIcon className="w-full h-full text-zinc-300 group-hover:scale-105 transition-transform duration-500" />
                  </div>
                </AspectRatio>
              </CardHeader>
              <CardContent className="p-6 flex-1">
                <CardTitle className="line-clamp-1 text-xl">Pixel 8 Pro</CardTitle>
                <CardDescription className="mt-1">128GB, Bay Blue</CardDescription>
                <p className="text-xl font-bold mt-4 text-foreground">$999.00</p>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button className="w-full opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity" onClick={onAddToCart}>
                  <ShoppingCartIcon className="mr-2 h-4 w-4" />
                  <span>Add to Cart</span>
                </Button>
              </CardFooter>
            </Card>
            <Card className="group overflow-hidden flex flex-col hover:border-primary/50 transition-colors">
              <CardHeader className="p-0 relative bg-zinc-100">
                <AspectRatio ratio={0.8}>
                  <div className="w-full h-full flex items-center justify-center p-8">
                    <DevicePhoneMobileIcon className="w-full h-full text-zinc-300 group-hover:scale-105 transition-transform duration-500" />
                  </div>
                </AspectRatio>
              </CardHeader>
              <CardContent className="p-6 flex-1">
                <CardTitle className="line-clamp-1 text-xl">OnePlus 12</CardTitle>
                <CardDescription className="mt-1">256GB, Emerald</CardDescription>
                <p className="text-xl font-bold mt-4 text-foreground">$799.00</p>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button className="w-full opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity" onClick={onAddToCart}>
                  <ShoppingCartIcon className="mr-2 h-4 w-4" />
                  <span>Add to Cart</span>
                </Button>
              </CardFooter>
            </Card>
          </div>
          <div className="mt-10 sm:hidden flex justify-center">
            <Button variant="outline" className="w-full" asChild>
              <Link to="/shop">View all catalog</Link>
            </Button>
          </div>
        </div>
      </section>
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <h2 className="text-2xl font-bold text-center mb-10 text-foreground">Shop by Brand</h2>
        <Carousel opts="[object Object]" className="w-full">
          <CarouselContent className="-ml-4">
            <CarouselItem className="pl-4 basis-1/2 md:basis-1/3 lg:basis-1/5">
              <Link to="/shop">
                <Card className="hover:border-primary transition-colors cursor-pointer group">
                  <CardContent className="flex flex-col items-center justify-center p-8 aspect-square">
                    <div className="text-4xl font-black text-muted-foreground group-hover:text-foreground transition-colors">Apple</div>
                  </CardContent>
                </Card>
              </Link>
            </CarouselItem>
            <CarouselItem className="pl-4 basis-1/2 md:basis-1/3 lg:basis-1/5">
              <Link to="/shop">
                <Card className="hover:border-primary transition-colors cursor-pointer group">
                  <CardContent className="flex flex-col items-center justify-center p-8 aspect-square">
                    <div className="text-4xl font-black text-muted-foreground group-hover:text-foreground transition-colors tracking-tighter">SAMSUNG</div>
                  </CardContent>
                </Card>
              </Link>
            </CarouselItem>
            <CarouselItem className="pl-4 basis-1/2 md:basis-1/3 lg:basis-1/5">
              <Link to="/shop">
                <Card className="hover:border-primary transition-colors cursor-pointer group">
                  <CardContent className="flex flex-col items-center justify-center p-8 aspect-square">
                    <div className="text-4xl font-black text-muted-foreground group-hover:text-foreground transition-colors">Google</div>
                  </CardContent>
                </Card>
              </Link>
            </CarouselItem>
            <CarouselItem className="pl-4 basis-1/2 md:basis-1/3 lg:basis-1/5">
              <Link to="/shop">
                <Card className="hover:border-primary transition-colors cursor-pointer group">
                  <CardContent className="flex flex-col items-center justify-center p-8 aspect-square">
                    <div className="text-4xl font-black text-muted-foreground group-hover:text-foreground transition-colors text-red-600/50 group-hover:text-red-600">ONEPLUS</div>
                  </CardContent>
                </Card>
              </Link>
            </CarouselItem>
            <CarouselItem className="pl-4 basis-1/2 md:basis-1/3 lg:basis-1/5">
              <Link to="/shop">
                <Card className="hover:border-primary transition-colors cursor-pointer group">
                  <CardContent className="flex flex-col items-center justify-center p-8 aspect-square">
                    <div className="text-4xl font-black text-muted-foreground group-hover:text-foreground transition-colors italic">Motorola</div>
                  </CardContent>
                </Card>
              </Link>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </section>
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full mb-10">
        <Card className="bg-primary text-primary-foreground border-none overflow-hidden relative shadow-2xl">
          <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-64 h-64 bg-black/10 rounded-full blur-2xl pointer-events-none" />
          <CardContent className="p-10 md:p-16 flex flex-col items-center text-center relative z-10">
            <div className="flex items-center justify-center -space-x-3 mb-8">
              <Avatar className="border-2 border-primary w-12 h-12">
                <AvatarFallback className="bg-zinc-200 text-zinc-900 text-sm font-bold">JD</AvatarFallback>
              </Avatar>
              <Avatar className="border-2 border-primary w-12 h-12">
                <AvatarFallback className="bg-zinc-300 text-zinc-900 text-sm font-bold">AL</AvatarFallback>
              </Avatar>
              <Avatar className="border-2 border-primary w-12 h-12">
                <AvatarFallback className="bg-zinc-400 text-zinc-900 text-sm font-bold">MK</AvatarFallback>
              </Avatar>
              <Avatar className="border-2 border-primary w-12 h-12">
                <AvatarFallback className="bg-zinc-100 text-zinc-900 text-sm font-bold">10k+</AvatarFallback>
              </Avatar>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">Join 10,000+ happy customers</h2>
            <p className="text-primary-foreground/90 max-w-2xl mb-10 text-lg md:text-xl">Subscribe to our newsletter to receive an instant 10% discount code, early access to flagship pre-orders, and expert tech guides.</p>
            <form className="w-full max-w-md" onSubmit={onSubscribe}>
              <InputGroup className="bg-white/10 border border-white/20 rounded-md p-1 backdrop-blur-sm">
                <InputGroupInput type="email" placeholder="Enter your email address..." value={newsletterEmail} onChange={setNewsletterEmail} className="bg-transparent text-primary-foreground placeholder:text-primary-foreground/60 border-none focus-visible:ring-0 focus-visible:ring-offset-0 h-12 px-4 text-base" />
                <InputGroupButton type="submit" variant="secondary" className="text-primary font-bold h-12 px-6 hover:bg-white/90">Subscribe</InputGroupButton>
              </InputGroup>
            </form>
            <p className="text-sm text-primary-foreground/70 mt-4">We respect your privacy. Unsubscribe at any time.</p>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
