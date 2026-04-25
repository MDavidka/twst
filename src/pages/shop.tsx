import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group'
import { Label } from '@/components/ui/label'
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Slider } from '@/components/ui/slider'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { Link } from 'react-router-dom'
import { BuildingStorefrontIcon, DevicePhoneMobileIcon, EyeIcon, FunnelIcon, ListBulletIcon, MagnifyingGlassIcon, ShoppingCartIcon, SparklesIcon, Squares2X2Icon, StarIcon, TagIcon } from '@heroicons/react/24/outline'
import { toggleBrandApple, toggleBrandSamsung, toggleBrandGoogle, setPriceRange, setStorageFilters, setOsFilter, setSortOrder, addToCart, prevPage, nextPage } from '@/lib/shop-logic'

export function Shop() {
  React.useEffect(() => { document.title = "Shop" }, [])
  const [searchQuery, setSearchQuery] = React.useState('')

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-7xl space-y-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">Shop</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">Browse our complete catalog of the latest smartphones, compare features, and find the perfect device for your needs.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Devices</CardTitle>
              <DevicePhoneMobileIcon className="h-5 w-5 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">142</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">New Arrivals</CardTitle>
              <SparklesIcon className="h-5 w-5 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">12</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">On Sale</CardTitle>
              <TagIcon className="h-5 w-5 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">28</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Brands</CardTitle>
              <BuildingStorefrontIcon className="h-5 w-5 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">8</div>
            </CardContent>
          </Card>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
          <Card className="col-span-1 sticky top-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FunnelIcon className="h-5 w-5" />
                <span>Filters</span>
              </CardTitle>
              <CardDescription>Narrow down your choices.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <InputGroup>
                <InputGroupAddon>
                  <MagnifyingGlassIcon className="h-4 w-4 text-muted-foreground" />
                </InputGroupAddon>
                <InputGroupInput placeholder="Search models..." value={searchQuery} onChange={setSearchQuery} />
              </InputGroup>
              <Accordion type="multiple" defaultValue="brand,price,storage">
                <AccordionItem value="brand">
                  <AccordionTrigger>Brand</AccordionTrigger>
                  <AccordionContent className="space-y-3 pt-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="brand-apple" onCheckedChange={toggleBrandApple} />
                      <Label htmlFor="brand-apple" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Apple</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="brand-samsung" onCheckedChange={toggleBrandSamsung} />
                      <Label htmlFor="brand-samsung" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Samsung</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="brand-google" onCheckedChange={toggleBrandGoogle} />
                      <Label htmlFor="brand-google" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Google</Label>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="price">
                  <AccordionTrigger>Price Range</AccordionTrigger>
                  <AccordionContent className="pt-4 pb-2 px-1">
                    <Slider defaultValue={1000} max={2000} step={50} onValueChange={setPriceRange} />
                    <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                      <span>$0</span>
                      <span>Up to $2000</span>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="storage">
                  <AccordionTrigger>Storage Capacity</AccordionTrigger>
                  <AccordionContent className="pt-2">
                    <ToggleGroup type="multiple" variant="outline" className="justify-start flex-wrap gap-2" onValueChange={setStorageFilters}>
                      <ToggleGroupItem value={128} className="h-8 px-3 text-xs">128GB</ToggleGroupItem>
                      <ToggleGroupItem value={256} className="h-8 px-3 text-xs">256GB</ToggleGroupItem>
                      <ToggleGroupItem value={512} className="h-8 px-3 text-xs">512GB</ToggleGroupItem>
                      <ToggleGroupItem value="1tb" className="h-8 px-3 text-xs">1TB</ToggleGroupItem>
                    </ToggleGroup>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="os">
                  <AccordionTrigger>Operating System</AccordionTrigger>
                  <AccordionContent className="pt-2">
                    <RadioGroup defaultValue="all" onValueChange={setOsFilter}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="all" id="os-all" />
                        <Label htmlFor="os-all">All Systems</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="ios" id="os-ios" />
                        <Label htmlFor="os-ios">iOS</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="android" id="os-android" />
                        <Label htmlFor="os-android">Android</Label>
                      </div>
                    </RadioGroup>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
          <div className="col-span-1 lg:col-span-3 flex flex-col gap-6">
            <Tabs defaultValue="grid" className="w-full">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 bg-card p-2 rounded-lg border border-border">
                <div className="flex items-center gap-2 px-2">
                  <span className="text-sm text-muted-foreground whitespace-nowrap">Sort by:</span>
                  <Select defaultValue="newest" onValueChange={setSortOrder}>
                    <SelectTrigger className="w-[160px] h-8 text-sm bg-background">
                      <SelectValue placeholder="Select sorting" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="newest">Newest Arrivals</SelectItem>
                      <SelectItem value="price-asc">Price: Low to High</SelectItem>
                      <SelectItem value="price-desc">Price: High to Low</SelectItem>
                      <SelectItem value="rating">Top Rated</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <TabsList className="h-9">
                  <TabsTrigger value="grid" className="px-3">
                    <Squares2X2Icon className="h-4 w-4 mr-2" />
                    <span>Grid</span>
                  </TabsTrigger>
                  <TabsTrigger value="list" className="px-3">
                    <ListBulletIcon className="h-4 w-4 mr-2" />
                    <span>List</span>
                  </TabsTrigger>
                </TabsList>
              </div>
              <TabsContent value="grid" className="mt-0 outline-none">
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                  <Card className="overflow-hidden flex flex-col group hover:border-primary transition-colors">
                    <div className="relative">
                      <AspectRatio ratio={1}>
                        <div className="w-full h-full bg-secondary/50 flex items-center justify-center p-6">
                          <DevicePhoneMobileIcon className="w-full h-full text-muted-foreground/30" />
                        </div>
                      </AspectRatio>
                      <div className="absolute top-3 left-3 flex flex-col gap-2">
                        <Badge variant="default">New</Badge>
                      </div>
                      <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="secondary">
                              <EyeIcon className="h-4 w-4 mr-2" />
                              <span>Quick View</span>
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-[700px]">
                            <DialogHeader>
                              <DialogTitle>Titanium Pro Max</DialogTitle>
                              <DialogDescription>Flagship device with advanced camera system.</DialogDescription>
                            </DialogHeader>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-4">
                              <AspectRatio ratio={1}>
                                <div className="w-full h-full bg-secondary rounded-lg flex items-center justify-center">
                                  <DevicePhoneMobileIcon className="w-32 h-32 text-muted-foreground/50" />
                                </div>
                              </AspectRatio>
                              <div className="space-y-4">
                                <div>
                                  <span className="text-2xl font-bold text-foreground">$1,199.00</span>
                                </div>
                                <div className="space-y-2 text-sm">
                                  <div className="flex justify-between border-b border-border pb-1">
                                    <span className="text-muted-foreground">Processor</span>
                                    <span className="font-medium">A17 Pro</span>
                                  </div>
                                  <div className="flex justify-between border-b border-border pb-1">
                                    <span className="text-muted-foreground">Display</span>
                                    <span className="font-medium">6.7" OLED 120Hz</span>
                                  </div>
                                  <div className="flex justify-between border-b border-border pb-1">
                                    <span className="text-muted-foreground">Camera</span>
                                    <span className="font-medium">48MP Triple</span>
                                  </div>
                                </div>
                                <Button className="w-full mt-4" onClick={addToCart}>
                                  <ShoppingCartIcon className="h-4 w-4 mr-2" />
                                  <span>Add to Cart</span>
                                </Button>
                                <Link className="block mt-2" to="/compare">
                                  <Button variant="outline" className="w-full">Compare Specs</Button>
                                </Link>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </div>
                    <CardContent className="p-4 flex-1 flex flex-col">
                      <div className="flex items-center gap-1 mb-2 text-primary">
                        <StarIcon className="h-4 w-4 fill-current" />
                        <StarIcon className="h-4 w-4 fill-current" />
                        <StarIcon className="h-4 w-4 fill-current" />
                        <StarIcon className="h-4 w-4 fill-current" />
                        <StarIcon className="h-4 w-4 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground ml-1">(124)</span>
                      </div>
                      <h3 className="font-semibold text-lg line-clamp-1">Titanium Pro Max</h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">256GB Storage, 8GB RAM, Midnight Black</p>
                      <div className="mt-auto flex items-center justify-between">
                        <span className="text-xl font-bold">$1,199.00</span>
                      </div>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <Button className="w-full" onClick={addToCart}>
                        <ShoppingCartIcon className="h-4 w-4 mr-2" />
                        <span>Add to Cart</span>
                      </Button>
                    </CardFooter>
                  </Card>
                  <Card className="overflow-hidden flex flex-col group hover:border-primary transition-colors">
                    <div className="relative">
                      <AspectRatio ratio={1}>
                        <div className="w-full h-full bg-secondary/50 flex items-center justify-center p-6">
                          <DevicePhoneMobileIcon className="w-full h-full text-muted-foreground/30" />
                        </div>
                      </AspectRatio>
                      <div className="absolute top-3 left-3 flex flex-col gap-2">
                        <Badge variant="secondary">Best Seller</Badge>
                      </div>
                    </div>
                    <CardContent className="p-4 flex-1 flex flex-col">
                      <div className="flex items-center gap-1 mb-2 text-primary">
                        <StarIcon className="h-4 w-4 fill-current" />
                        <StarIcon className="h-4 w-4 fill-current" />
                        <StarIcon className="h-4 w-4 fill-current" />
                        <StarIcon className="h-4 w-4 fill-current" />
                        <StarIcon className="h-4 w-4 fill-current" />
                        <span className="text-xs text-muted-foreground ml-1">(892)</span>
                      </div>
                      <h3 className="font-semibold text-lg line-clamp-1">Galaxy Ultra Z</h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">512GB Storage, 12GB RAM, Phantom Silver</p>
                      <div className="mt-auto flex items-center justify-between">
                        <span className="text-xl font-bold">$1,299.00</span>
                      </div>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <Button className="w-full" onClick={addToCart}>
                        <ShoppingCartIcon className="h-4 w-4 mr-2" />
                        <span>Add to Cart</span>
                      </Button>
                    </CardFooter>
                  </Card>
                  <Card className="overflow-hidden flex flex-col group hover:border-primary transition-colors">
                    <div className="relative">
                      <AspectRatio ratio={1}>
                        <div className="w-full h-full bg-secondary/50 flex items-center justify-center p-6">
                          <DevicePhoneMobileIcon className="w-full h-full text-muted-foreground/30" />
                        </div>
                      </AspectRatio>
                      <div className="absolute top-3 left-3 flex flex-col gap-2">
                        <Badge variant="destructive">Sale -15%</Badge>
                      </div>
                    </div>
                    <CardContent className="p-4 flex-1 flex flex-col">
                      <div className="flex items-center gap-1 mb-2 text-primary">
                        <StarIcon className="h-4 w-4 fill-current" />
                        <StarIcon className="h-4 w-4 fill-current" />
                        <StarIcon className="h-4 w-4 fill-current" />
                        <StarIcon className="h-4 w-4 fill-current text-muted-foreground" />
                        <StarIcon className="h-4 w-4 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground ml-1">(45)</span>
                      </div>
                      <h3 className="font-semibold text-lg line-clamp-1">Pixel Perfect 8</h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">128GB Storage, 8GB RAM, Obsidian</p>
                      <div className="mt-auto flex flex-col items-start">
                        <span className="text-sm text-muted-foreground line-through">$899.00</span>
                        <span className="text-xl font-bold text-destructive">$764.15</span>
                      </div>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <Button className="w-full" onClick={addToCart}>
                        <ShoppingCartIcon className="h-4 w-4 mr-2" />
                        <span>Add to Cart</span>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="list" className="mt-0 outline-none">
                <Card>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[100px]">Image</TableHead>
                        <TableHead>Model</TableHead>
                        <TableHead className="hidden md:table-cell">Key Specs</TableHead>
                        <TableHead className="text-right">Price</TableHead>
                        <TableHead className="text-right">Action</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>
                          <div className="w-16 h-16 bg-secondary rounded flex items-center justify-center">
                            <DevicePhoneMobileIcon className="w-8 h-8 text-muted-foreground/50" />
                          </div>
                        </TableCell>
                        <TableCell className="font-medium">
                          <div>Titanium Pro Max</div>
                          <div className="text-xs text-muted-foreground mt-1 flex items-center">
                            <StarIcon className="w-3 h-3 text-primary fill-current mr-1" />
                            <span>4.8 (124 reviews)</span>
                          </div>
                        </TableCell>
                        <TableCell className="hidden md:table-cell text-sm text-muted-foreground">256GB / 8GB RAM / A17 Pro</TableCell>
                        <TableCell className="text-right font-bold">$1,199.00</TableCell>
                        <TableCell className="text-right">
                          <Button size="sm" onClick={addToCart}>Add</Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <div className="w-16 h-16 bg-secondary rounded flex items-center justify-center">
                            <DevicePhoneMobileIcon className="w-8 h-8 text-muted-foreground/50" />
                          </div>
                        </TableCell>
                        <TableCell className="font-medium">
                          <div>Galaxy Ultra Z</div>
                          <div className="text-xs text-muted-foreground mt-1 flex items-center">
                            <StarIcon className="w-3 h-3 text-primary fill-current mr-1" />
                            <span>4.9 (892 reviews)</span>
                          </div>
                        </TableCell>
                        <TableCell className="hidden md:table-cell text-sm text-muted-foreground">512GB / 12GB RAM / Snapdragon 8</TableCell>
                        <TableCell className="text-right font-bold">$1,299.00</TableCell>
                        <TableCell className="text-right">
                          <Button size="sm" onClick={addToCart}>Add</Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <div className="w-16 h-16 bg-secondary rounded flex items-center justify-center">
                            <DevicePhoneMobileIcon className="w-8 h-8 text-muted-foreground/50" />
                          </div>
                        </TableCell>
                        <TableCell className="font-medium">
                          <div>
                            <span>Pixel Perfect 8 </span>
                            <Badge variant="destructive" className="ml-2 text-[10px] h-4 px-1">Sale</Badge>
                          </div>
                          <div className="text-xs text-muted-foreground mt-1 flex items-center">
                            <StarIcon className="w-3 h-3 text-primary fill-current mr-1" />
                            <span>4.2 (45 reviews)</span>
                          </div>
                        </TableCell>
                        <TableCell className="hidden md:table-cell text-sm text-muted-foreground">128GB / 8GB RAM / Tensor G3</TableCell>
                        <TableCell className="text-right">
                          <div className="text-xs text-muted-foreground line-through">$899.00</div>
                          <div className="font-bold text-destructive">$764.15</div>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button size="sm" onClick={addToCart}>Add</Button>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </Card>
              </TabsContent>
            </Tabs>
            <Pagination className="mt-8">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" onClick={prevPage} />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" onClick={nextPage} />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </main>
    </div>
  )
}
