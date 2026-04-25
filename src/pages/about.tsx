import React from 'react'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Link } from 'react-router-dom'
import { ArrowRightIcon, GlobeAmericasIcon, HeartIcon, SparklesIcon } from '@heroicons/react/24/outline'

export function About() {
  React.useEffect(() => { document.title = "About" }, [])

  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 flex flex-col gap-16 md:gap-24">
      <section className="text-center space-y-4 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">About</h1>
        <p className="text-lg sm:text-xl text-muted-foreground">Rooted in our community, blooming with passion. Discover the story behind every petal.</p>
      </section>
      <section className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold tracking-tight">Our Story</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">What started as a small roadside stand has blossomed into a beloved local institution. For over a decade, we have been dedicated to bringing the beauty of nature into the everyday lives of our community.</p>
          <p className="text-lg text-muted-foreground leading-relaxed">We believe that flowers are more than just decorations; they are a language of love, sympathy, celebration, and connection. Every arrangement that leaves our workshop is crafted with intention and care.</p>
        </div>
        <AspectRatio ratio={1.333}>
          <img src={"https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=800&q=80"} alt="Florist arranging flowers in a sunlit workshop" className="rounded-2xl object-cover w-full h-full shadow-lg" />
        </AspectRatio>
      </section>
      <section className="space-y-10">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight">Our Values</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">The principles that guide our hands and hearts every single day.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <GlobeAmericasIcon className="h-8 w-8 text-primary mb-4" />
              <CardTitle>Sustainable Sourcing</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">We partner exclusively with local, eco-conscious farms to reduce our carbon footprint and support our regional economy.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <HeartIcon className="h-8 w-8 text-primary mb-4" />
              <CardTitle>Community First</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Family-owned and deeply rooted, we regularly donate arrangements to local hospitals and community centers.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <SparklesIcon className="h-8 w-8 text-primary mb-4" />
              <CardTitle>Artisan Craftsmanship</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Every bouquet is hand-crafted by experienced florists who treat floral design as a true art form.</p>
            </CardContent>
          </Card>
        </div>
      </section>
      <section className="space-y-10 bg-muted/50 py-12 px-4 sm:px-8 rounded-3xl">
        <h2 className="text-3xl font-semibold tracking-tight text-center">Our Journey</h2>
        <div className="max-w-3xl mx-auto grid gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center gap-4 space-y-0">
              <Badge variant="default">2010</Badge>
              <CardTitle>Planting the Seed</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Opened our first tiny shop in the historic downtown district, focusing entirely on seasonal wildflowers.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center gap-4 space-y-0">
              <Badge variant="default">2015</Badge>
              <CardTitle>Growing the Family</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Expanded to a larger workshop to accommodate our growing wedding and events team.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center gap-4 space-y-0">
              <Badge variant="default">2023</Badge>
              <CardTitle>The Sustainability Pledge</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Committed to 100% locally sourced blooms and zero-waste packaging for all daily deliveries.</p>
            </CardContent>
          </Card>
        </div>
      </section>
      <section className="space-y-10">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight">Meet the Team</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">The creative minds and green thumbs behind our beautiful arrangements.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="border-none shadow-none bg-transparent">
            <CardContent className="pt-6 flex flex-col items-center text-center space-y-4">
              <Avatar className="h-32 w-32">
                <AvatarImage src={"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80"} alt="Sarah Jenkins" />
                <AvatarFallback>SJ</AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <h3 className="text-xl font-medium">Sarah Jenkins</h3>
                <p className="text-sm text-primary font-medium">Founder & Lead Florist</p>
              </div>
              <p className="text-sm text-muted-foreground">With over 15 years of experience, Sarah brings a wild, organic style to every piece she designs.</p>
            </CardContent>
          </Card>
          <Card className="border-none shadow-none bg-transparent">
            <CardContent className="pt-6 flex flex-col items-center text-center space-y-4">
              <Avatar className="h-32 w-32">
                <AvatarImage src={"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80"} alt="David Chen" />
                <AvatarFallback>DC</AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <h3 className="text-xl font-medium">David Chen</h3>
                <p className="text-sm text-primary font-medium">Events Director</p>
              </div>
              <p className="text-sm text-muted-foreground">David orchestrates our large-scale installations, ensuring every wedding and gala is breathtaking.</p>
            </CardContent>
          </Card>
          <Card className="border-none shadow-none bg-transparent">
            <CardContent className="pt-6 flex flex-col items-center text-center space-y-4">
              <Avatar className="h-32 w-32">
                <AvatarImage src={"https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80"} alt="Elena Rodriguez" />
                <AvatarFallback>ER</AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <h3 className="text-xl font-medium">Elena Rodriguez</h3>
                <p className="text-sm text-primary font-medium">Botanical Specialist</p>
              </div>
              <p className="text-sm text-muted-foreground">Our resident plant whisperer, Elena curates our rare houseplant collection and terrariums.</p>
            </CardContent>
          </Card>
        </div>
      </section>
      <section className="space-y-8">
        <h2 className="text-3xl font-semibold tracking-tight text-center">Behind the Scenes</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <AspectRatio ratio={1}>
            <img src={"https://images.unsplash.com/photo-1508784411316-02b8cd4d3a3a?w=600&q=80"} alt="Workshop details" className="rounded-xl object-cover w-full h-full" />
          </AspectRatio>
          <AspectRatio ratio={1}>
            <img src={"https://images.unsplash.com/photo-1463936575829-25148e1db1b8?w=600&q=80"} alt="Fresh cut flowers" className="rounded-xl object-cover w-full h-full" />
          </AspectRatio>
          <AspectRatio ratio={1}>
            <img src={"https://images.unsplash.com/photo-1526047932273-341f2a7631f9?w=600&q=80"} alt="Florist hands working" className="rounded-xl object-cover w-full h-full" />
          </AspectRatio>
          <AspectRatio ratio={1}>
            <img src={"https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=600&q=80"} alt="Finished bouquet" className="rounded-xl object-cover w-full h-full" />
          </AspectRatio>
        </div>
      </section>
      <section className="bg-primary/5 rounded-3xl p-8 sm:p-12 text-center space-y-8">
        <div className="space-y-4 max-w-2xl mx-auto">
          <h2 className="text-3xl font-semibold tracking-tight">Let's Create Something Beautiful</h2>
          <p className="text-lg text-muted-foreground">Whether you're planning a grand event or just want to brighten someone's day, we're here to help.</p>
        </div>
        <Link to="/contact">
          <Button size="lg" className="rounded-full px-8">
            <span>Get in Touch</span>
            <ArrowRightIcon className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </section>
    </main>
  )
}
