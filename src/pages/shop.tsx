import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Slider } from '@/components/ui/slider'
import { AdjustmentsHorizontalIcon, ShoppingCartIcon } from '@heroicons/react/24/outline'
import { onToggleFilter, onPriceChange, onSortChange, onAddToCart, onPrevPage, onNextPage } from '@/lib/shop-logic'

export function Shop() {
  React.useEffect(() => { document.title = "Shop" }, [])

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="bg-muted/30 border-b border-border">
        <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">Shop</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">Browse our curated collection of fresh floral arrangements, lush plants, and thoughtful gifts for every occasion.</p>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8 items-start">
        <aside className="hidden lg:block w-64 shrink-0 sticky top-8">
          <div className="mb-6">
            <h2 className="text-lg font-semibold tracking-tight">Filters</h2>
          </div>
          <Accordion type="multiple" defaultValue="occasion,flower-type,price" className="w-full">
            <AccordionItem value="occasion">
              <AccordionTrigger className="text-base font-medium hover:no-underline">Occasion</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-3 pt-1">
                  <div className="flex items-center space-x-3">
                    <Checkbox id="occ-birthday" onCheckedChange={onToggleFilter} />
                    <Label htmlFor="occ-birthday" className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Birthday</Label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Checkbox id="occ-anniversary" onCheckedChange={onToggleFilter} />
                    <Label htmlFor="occ-anniversary" className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Anniversary</Label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Checkbox id="occ-sympathy" onCheckedChange={onToggleFilter} />
                    <Label htmlFor="occ-sympathy" className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Sympathy</Label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Checkbox id="occ-wedding" onCheckedChange={onToggleFilter} />
                    <Label htmlFor="occ-wedding" className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Wedding</Label>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="flower-type">
              <AccordionTrigger className="text-base font-medium hover:no-underline">Flower Type</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-3 pt-1">
                  <div className="flex items-center space-x-3">
                    <Checkbox id="type-roses" onCheckedChange={onToggleFilter} />
                    <Label htmlFor="type-roses" className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Roses</Label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Checkbox id="type-lilies" onCheckedChange={onToggleFilter} />
                    <Label htmlFor="type-lilies" className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Lilies</Label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Checkbox id="type-tulips" onCheckedChange={onToggleFilter} />
                    <Label htmlFor="type-tulips" className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Tulips</Label>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="price">
              <AccordionTrigger className="text-base font-medium hover:no-underline">Price Range</AccordionTrigger>
              <AccordionContent>
                <div className="pt-4 pb-2 px-2">
                  <Slider defaultValue={150} max={300} step={10} onValueChange={onPriceChange} />
                  <div className="flex items-center justify-between mt-4 text-sm text-muted-foreground">
                    <span>$0</span>
                    <span>$300+</span>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </aside>
        <main className="flex-1 w-full">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-4">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" className="lg:hidden flex items-center gap-2">
                    <AdjustmentsHorizontalIcon className="w-4 h-4" />
                    <span>Filters</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                  <SheetHeader>
                    <SheetTitle>Filters</SheetTitle>
                    <SheetDescription>Refine your search results.</SheetDescription>
                  </SheetHeader>
                  <div className="mt-6">
                    <p className="text-sm text-muted-foreground italic">Filters are available on desktop view.</p>
                  </div>
                </SheetContent>
              </Sheet>
              <p className="text-sm text-muted-foreground hidden sm:block">Showing 24 products</p>
            </div>
            <div className="flex items-center gap-2 self-end sm:self-auto">
              <Label htmlFor="sort-select" className="text-sm font-medium whitespace-nowrap">Sort by:</Label>
              <Select defaultValue="featured" onValueChange={onSortChange}>
                <SelectTrigger id="sort-select" className="w-[160px]">
                  <SelectValue placeholder="Select sorting" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-asc">Price: Low to High</SelectItem>
                  <SelectItem value="price-desc">Price: High to Low</SelectItem>
                  <SelectItem value="newest">Newest Arrivals</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            <Card className="group overflow-hidden flex flex-col border-border/50 shadow-sm hover:shadow-md transition-all">
              <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                <img src={"https://images.unsplash.com/photo-1563241527-3004b7be0ffd?q=80&w=800&auto=format&fit=crop"} alt="The Classic Rose Bouquet" className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105" />
                <Badge className="absolute top-3 right-3 bg-background/90 text-foreground backdrop-blur-sm hover:bg-background/90">Bestseller</Badge>
              </div>
              <CardContent className="p-5 flex-1 flex flex-col">
                <div className="flex justify-between items-start gap-4 mb-2">
                  <h3 className="font-semibold text-lg leading-tight line-clamp-2">The Classic Rose Bouquet</h3>
                  <p className="font-semibold text-lg shrink-0">$65.00</p>
                </div>
                <p className="text-sm text-muted-foreground mt-auto">Anniversary • Roses</p>
              </CardContent>
              <CardFooter className="p-5 pt-0">
                <Button className="w-full" onClick={onAddToCart}>
                  <ShoppingCartIcon className="w-4 h-4 mr-2" />
                  <span>Add to Cart</span>
                </Button>
              </CardFooter>
            </Card>
            <Card className="group overflow-hidden flex flex-col border-border/50 shadow-sm hover:shadow-md transition-all">
              <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                <img src={"https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?q=80&w=800&auto=format&fit=crop"} alt="Sunshine Daisy Arrangement" className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105" />
              </div>
              <CardContent className="p-5 flex-1 flex flex-col">
                <div className="flex justify-between items-start gap-4 mb-2">
                  <h3 className="font-semibold text-lg leading-tight line-clamp-2">Sunshine Daisy Arrangement</h3>
                  <p className="font-semibold text-lg shrink-0">$45.00</p>
                </div>
                <p className="text-sm text-muted-foreground mt-auto">Just Because • Mixed</p>
              </CardContent>
              <CardFooter className="p-5 pt-0">
                <Button className="w-full" onClick={onAddToCart}>
                  <ShoppingCartIcon className="w-4 h-4 mr-2" />
                  <span>Add to Cart</span>
                </Button>
              </CardFooter>
            </Card>
            <Card className="group overflow-hidden flex flex-col border-border/50 shadow-sm hover:shadow-md transition-all">
              <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                <img src={"https://images.unsplash.com/photo-1508610048659-a06b669e3321?q=80&w=800&auto=format&fit=crop"} alt="Elegant White Lilies" className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105" />
              </div>
              <CardContent className="p-5 flex-1 flex flex-col">
                <div className="flex justify-between items-start gap-4 mb-2">
                  <h3 className="font-semibold text-lg leading-tight line-clamp-2">Elegant White Lilies</h3>
                  <p className="font-semibold text-lg shrink-0">$85.00</p>
                </div>
                <p className="text-sm text-muted-foreground mt-auto">Sympathy • Lilies</p>
              </CardContent>
              <CardFooter className="p-5 pt-0">
                <Button className="w-full" onClick={onAddToCart}>
                  <ShoppingCartIcon className="w-4 h-4 mr-2" />
                  <span>Add to Cart</span>
                </Button>
              </CardFooter>
            </Card>
            <Card className="group overflow-hidden flex flex-col border-border/50 shadow-sm hover:shadow-md transition-all">
              <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                <img src={"https://images.unsplash.com/photo-1520763185298-1b434c919102?q=80&w=800&auto=format&fit=crop"} alt="Spring Tulip Medley" className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105" />
                <Badge className="absolute top-3 right-3 bg-secondary text-secondary-foreground hover:bg-secondary">Seasonal</Badge>
              </div>
              <CardContent className="p-5 flex-1 flex flex-col">
                <div className="flex justify-between items-start gap-4 mb-2">
                  <h3 className="font-semibold text-lg leading-tight line-clamp-2">Spring Tulip Medley</h3>
                  <p className="font-semibold text-lg shrink-0">$55.00</p>
                </div>
                <p className="text-sm text-muted-foreground mt-auto">Birthday • Tulips</p>
              </CardContent>
              <CardFooter className="p-5 pt-0">
                <Button className="w-full" onClick={onAddToCart}>
                  <ShoppingCartIcon className="w-4 h-4 mr-2" />
                  <span>Add to Cart</span>
                </Button>
              </CardFooter>
            </Card>
            <Card className="group overflow-hidden flex flex-col border-border/50 shadow-sm hover:shadow-md transition-all">
              <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                <img src={"https://images.unsplash.com/photo-1596438459194-f21434747602?q=80&w=800&auto=format&fit=crop"} alt="Purple Orchid Planter" className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105" />
              </div>
              <CardContent className="p-5 flex-1 flex flex-col">
                <div className="flex justify-between items-start gap-4 mb-2">
                  <h3 className="font-semibold text-lg leading-tight line-clamp-2">Purple Orchid Planter</h3>
                  <p className="font-semibold text-lg shrink-0">$95.00</p>
                </div>
                <p className="text-sm text-muted-foreground mt-auto">Wedding • Orchids</p>
              </CardContent>
              <CardFooter className="p-5 pt-0">
                <Button className="w-full" onClick={onAddToCart}>
                  <ShoppingCartIcon className="w-4 h-4 mr-2" />
                  <span>Add to Cart</span>
                </Button>
              </CardFooter>
            </Card>
            <Card className="group overflow-hidden flex flex-col border-border/50 shadow-sm hover:shadow-md transition-all">
              <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                <img src={"https://images.unsplash.com/photo-1562690868-60bbe7293e94?q=80&w=800&auto=format&fit=crop"} alt="Rustic Wildflower Mix" className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105" />
              </div>
              <CardContent className="p-5 flex-1 flex flex-col">
                <div className="flex justify-between items-start gap-4 mb-2">
                  <h3 className="font-semibold text-lg leading-tight line-clamp-2">Rustic Wildflower Mix</h3>
                  <p className="font-semibold text-lg shrink-0">$50.00</p>
                </div>
                <p className="text-sm text-muted-foreground mt-auto">Just Because • Mixed</p>
              </CardContent>
              <CardFooter className="p-5 pt-0">
                <Button className="w-full" onClick={onAddToCart}>
                  <ShoppingCartIcon className="w-4 h-4 mr-2" />
                  <span>Add to Cart</span>
                </Button>
              </CardFooter>
            </Card>
          </div>
          <div className="mt-12 flex justify-center">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" onClick={onPrevPage} />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" onClick={onNextPage}>2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" onClick={onNextPage} />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </main>
      </div>
    </div>
  )
}
