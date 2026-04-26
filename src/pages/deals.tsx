import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ArrowLeftIcon, ArrowPathIcon, ClockIcon, FireIcon, HeartIcon, LightningBoltIcon, PackageIcon, StarIcon, TagIcon, TruckIcon } from '@heroicons/react/24/outline'
import { addToWishlist1, addToWishlist2, addToWishlistDealOfDay } from '@/lib/deals-logic'

export function Deals() {
  React.useEffect(() => { document.title = "Deals" }, [])
  const [bundleCase, setBundleCase] = React.useState('')
  const [bundleCharger, setBundleCharger] = React.useState('')

  return (
    <div className="min-h-screen bg-background text-foreground container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:grid lg:grid-cols-12 lg:gap-8">
      <div className="lg:col-span-3 sticky top-8 self-start">
        <Card>
          <CardHeader>
            <CardTitle>Deals</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="flash-sale" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="flash-sale">
                  <LightningBoltIcon className="mr-2 h-4 w-4" />
                  <div>Flash Sale</div>
                </TabsTrigger>
                <TabsTrigger value="clearance">
                  <TagIcon className="mr-2 h-4 w-4" />
                  <div>Clearance</div>
                </TabsTrigger>
                <TabsTrigger value="bundles">
                  <PackageIcon className="mr-2 h-4 w-4" />
                  <div>Bundles</div>
                </TabsTrigger>
              </TabsList>
              <TabsContent value="flash-sale">
                <div className="space-y-2">
                  <Button variant="ghost" className="justify-start w-full">All Deals</Button>
                  <Button variant="ghost" className="justify-start w-full">iPhone Deals</Button>
                  <Button variant="ghost" className="justify-start w-full">Samsung Deals</Button>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
      <div className="lg:col-span-9 space-y-8">
        <Card>
          <CardHeader>
            <div className="flex flex-col lg:flex-row lg:items-center gap-4">
              <CardTitle>Deals</CardTitle>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <ClockIcon className="h-4 w-4" />
                <div className="flex items-center gap-1 font-mono">
                  <div>$state.flashSaleCountdown</div>
                  <ArrowPathIcon className="h-3 w-3 animate-spin" />
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <Badge variant="destructive">
                    <FireIcon className="mr-1 h-3 w-3" />
                    <div>50% OFF</div>
                  </Badge>
                  <CardTitle className="text-lg">iPhone 15 Pro Max</CardTitle>
                  <CardDescription>256GB • Space Black</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 p-4">
                  <div className="space-y-1">
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold">$state.deal1Price</span>
                      <span className="text-sm line-through text-muted-foreground">$999</span>
                    </div>
                  </div>
                  <div className="flex items-center pt-2 gap-2">
                    <div className="flex -space-x-1">
                      <div className="w-5 h-5 bg-yellow-400 rounded-full ring-2 ring-background" />
                      <div className="w-5 h-5 bg-yellow-400 rounded-full ring-2 ring-background" />
                      <div className="w-5 h-5 bg-yellow-400 rounded-full ring-2 ring-background" />
                    </div>
                    <span className="text-xs text-muted-foreground">247 reviews</span>
                  </div>
                </CardContent>
                <CardFooter className="pt-0">
                  <div className="flex items-center justify-between w-full">
                    <Button size="sm" variant="outline" onClick={addToWishlist1}>
                      <HeartIcon className="mr-2 h-4 w-4" />
                      <div>Wishlist</div>
                    </Button>
                    <Button size="sm">Claim Deal</Button>
                  </div>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <Badge variant="secondary">
                    <TruckIcon className="mr-1 h-3 w-3" />
                    <div>Free Shipping</div>
                  </Badge>
                  <CardTitle className="text-lg">Samsung Galaxy S24 Ultra</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 p-4">
                  <div className="space-y-1">
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold">$state.deal2Price</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="pt-0">
                  <div className="flex items-center justify-between w-full">
                    <Button size="sm" variant="outline" onClick={addToWishlist2}>
                      <HeartIcon className="mr-2 h-4 w-4" />
                      <div>Wishlist</div>
                    </Button>
                    <Button size="sm">Claim Deal</Button>
                  </div>
                </CardFooter>
              </Card>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>
              <StarIcon className="mr-2 h-6 w-6 text-primary" />
              <div>Deal of the Day</div>
            </CardTitle>
            <CardDescription>Best value - Limited stock</CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">iPhone 15 Pro</h3>
                  <p className="text-muted-foreground">128GB • Natural Titanium + Case + Charger Bundle</p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Checkbox id="case" checked={bundleCase} />
                    <Label htmlFor="case">Add Premium Case</Label>
                    <span className="text-sm font-medium text-primary">+ $29</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox id="charger" checked={bundleCharger} />
                    <Label htmlFor="charger">Add 20W Fast Charger</Label>
                    <span className="text-sm font-medium text-primary">+ $19</span>
                  </div>
                </div>
                <Separator className="my-4" />
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-primary">$state.bundlePrice</span>
                  <span className="text-lg line-through text-muted-foreground">$849</span>
                  <Badge className="ml-2">44% OFF</Badge>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button size="lg" className="flex-1">Claim Deal Now</Button>
                <Button size="lg" variant="outline" onClick={addToWishlistDealOfDay}>
                  <HeartIcon className="mr-2 h-4 w-4" />
                  <div>Wishlist</div>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
        <div className="text-center">
          <Button size="lg" variant="outline" className="text-lg">
            <ArrowLeftIcon className="mr-2 h-5 w-5" />
            <div>Browse All Products</div>
          </Button>
        </div>
      </div>
    </div>
  )
}
