import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Link } from 'react-router-dom'
import { Battery100Icon, CameraIcon, CheckCircleIcon, CpuChipIcon, DevicePhoneMobileIcon, MagnifyingGlassIcon, PlusIcon, ShoppingCartIcon } from '@heroicons/react/24/outline'
import { onClearComparison, onAddToCartDevice1, onAddToCartDevice2, onViewTradeIn } from '@/lib/compare-logic'

export function Compare() {
  React.useEffect(() => { document.title = "Compare" }, [])

  return (
    <div className="min-h-screen bg-background flex flex-col w-full">
      <section className="bg-muted/30 py-12 md:py-16 lg:py-20 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-4">Compare</h1>
          <p className="text-lg text-muted-foreground">Select up to three devices to compare specifications side-by-side and find the perfect match for your needs.</p>
        </div>
      </section>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
        <main className="w-full lg:w-3/4 flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-foreground">Select Devices</h2>
              <Button variant="ghost" size="sm" onClick={onClearComparison}>Clear All</Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="w-full justify-start text-left font-normal h-12">
                    <MagnifyingGlassIcon className="mr-2 h-4 w-4 text-muted-foreground shrink-0" />
                    <span className="truncate">iPhone 15 Pro Max</span>
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="p-0 w-[var(--radix-popover-trigger-width)]" align="start">
                  <Command>
                    <CommandInput placeholder="Search phones..." />
                    <CommandList>
                      <CommandEmpty>No phone found.</CommandEmpty>
                      <CommandGroup heading="Popular">
                        <CommandItem>iPhone 15 Pro Max</CommandItem>
                        <CommandItem>Galaxy S24 Ultra</CommandItem>
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="w-full justify-start text-left font-normal h-12">
                    <MagnifyingGlassIcon className="mr-2 h-4 w-4 text-muted-foreground shrink-0" />
                    <span className="truncate">Galaxy S24 Ultra</span>
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="p-0 w-[var(--radix-popover-trigger-width)]" align="start">
                  <Command>
                    <CommandInput placeholder="Search phones..." />
                    <CommandList>
                      <CommandEmpty>No phone found.</CommandEmpty>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="w-full justify-start text-left font-normal h-12 text-muted-foreground border-dashed">
                    <PlusIcon className="mr-2 h-4 w-4 shrink-0" />
                    <span className="truncate">Add 3rd device...</span>
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="p-0 w-[var(--radix-popover-trigger-width)]" align="start">
                  <Command>
                    <CommandInput placeholder="Search phones..." />
                    <CommandList>
                      <CommandEmpty>No phone found.</CommandEmpty>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
            </div>
          </div>
          <Card className="overflow-hidden border-border shadow-sm">
            <div className="overflow-x-auto relative max-h-[70vh]">
              <Table className="w-full min-w-[800px]">
                <TableHeader className="sticky top-0 z-20 bg-card shadow-sm border-b border-border">
                  <TableRow className="hover:bg-transparent">
                    <TableHead className="w-[200px] align-bottom pb-4 bg-muted/20">Specifications</TableHead>
                    <TableHead className="align-top min-w-[220px] p-4 border-l border-border/50">
                      <div className="flex flex-col gap-3 items-center text-center">
                        <AspectRatio ratio={0.75} className="w-24 bg-muted rounded-md flex items-center justify-center overflow-hidden">
                          <DevicePhoneMobileIcon className="w-10 h-10 text-muted-foreground/50" />
                        </AspectRatio>
                        <div>
                          <h3 className="font-bold text-foreground text-base">iPhone 15 Pro Max</h3>
                          <p className="text-sm text-muted-foreground">$1,199.00</p>
                        </div>
                        <Button size="sm" className="w-full mt-2" onClick={onAddToCartDevice1}>
                          <ShoppingCartIcon className="w-4 h-4 mr-2" />
                          <span>Add to Cart</span>
                        </Button>
                      </div>
                    </TableHead>
                    <TableHead className="align-top min-w-[220px] p-4 border-l border-border/50">
                      <div className="flex flex-col gap-3 items-center text-center">
                        <AspectRatio ratio={0.75} className="w-24 bg-muted rounded-md flex items-center justify-center overflow-hidden">
                          <DevicePhoneMobileIcon className="w-10 h-10 text-muted-foreground/50" />
                        </AspectRatio>
                        <div>
                          <h3 className="font-bold text-foreground text-base">Galaxy S24 Ultra</h3>
                          <p className="text-sm text-muted-foreground">$1,299.00</p>
                        </div>
                        <Button size="sm" className="w-full mt-2" onClick={onAddToCartDevice2}>
                          <ShoppingCartIcon className="w-4 h-4 mr-2" />
                          <span>Add to Cart</span>
                        </Button>
                      </div>
                    </TableHead>
                    <TableHead className="align-top min-w-[220px] p-4 border-l border-border/50 bg-muted/10">
                      <div className="flex flex-col gap-3 items-center text-center h-full justify-center opacity-50">
                        <div className="w-24 h-32 border-2 border-dashed border-border rounded-md flex items-center justify-center mb-2">
                          <PlusIcon className="w-8 h-8 text-muted-foreground" />
                        </div>
                        <p className="text-sm text-muted-foreground">Select a 3rd device to compare</p>
                      </div>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium bg-muted/20 border-r border-border/50">
                      <div className="flex items-center gap-2">
                        <CpuChipIcon className="w-4 h-4 text-muted-foreground" />
                        <span>Processor</span>
                      </div>
                    </TableCell>
                    <TableCell className="border-r border-border/50">A17 Pro (3 nm)</TableCell>
                    <TableCell className="text-primary font-medium bg-primary/5 border-r border-border/50">
                      <div className="flex items-center justify-between">
                        <span>Snapdragon 8 Gen 3 (4 nm)</span>
                        <CheckCircleIcon className="w-4 h-4 text-primary shrink-0" />
                      </div>
                    </TableCell>
                    <TableCell className="text-muted-foreground bg-muted/10 text-center">-</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium bg-muted/20 border-r border-border/50">
                      <div className="flex items-center gap-2">
                        <DevicePhoneMobileIcon className="w-4 h-4 text-muted-foreground" />
                        <span>Display</span>
                      </div>
                    </TableCell>
                    <TableCell className="border-r border-border/50">6.7" Super Retina XDR OLED, 120Hz</TableCell>
                    <TableCell className="text-primary font-medium bg-primary/5 border-r border-border/50">
                      <div className="flex items-center justify-between gap-2">
                        <span>6.8" Dynamic AMOLED 2X, 120Hz, 2600 nits</span>
                        <CheckCircleIcon className="w-4 h-4 text-primary shrink-0" />
                      </div>
                    </TableCell>
                    <TableCell className="text-muted-foreground bg-muted/10 text-center">-</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium bg-muted/20 border-r border-border/50">
                      <div className="flex items-center gap-2">
                        <CameraIcon className="w-4 h-4 text-muted-foreground" />
                        <span>Main Camera</span>
                      </div>
                    </TableCell>
                    <TableCell className="border-r border-border/50">48MP Wide, 12MP Ultrawide, 12MP Telephoto (5x)</TableCell>
                    <TableCell className="text-primary font-medium bg-primary/5 border-r border-border/50">
                      <div className="flex items-center justify-between gap-2">
                        <span>200MP Wide, 12MP Ultrawide, 50MP Tele (5x), 10MP Tele (3x)</span>
                        <CheckCircleIcon className="w-4 h-4 text-primary shrink-0" />
                      </div>
                    </TableCell>
                    <TableCell className="text-muted-foreground bg-muted/10 text-center">-</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium bg-muted/20 border-r border-border/50">
                      <div className="flex items-center gap-2">
                        <Battery100Icon className="w-4 h-4 text-muted-foreground" />
                        <span>Battery</span>
                      </div>
                    </TableCell>
                    <TableCell className="border-r border-border/50">4422 mAh, 20W wired</TableCell>
                    <TableCell className="text-primary font-medium bg-primary/5 border-r border-border/50">
                      <div className="flex items-center justify-between gap-2">
                        <span>5000 mAh, 45W wired</span>
                        <CheckCircleIcon className="w-4 h-4 text-primary shrink-0" />
                      </div>
                    </TableCell>
                    <TableCell className="text-muted-foreground bg-muted/10 text-center">-</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </Card>
          <section className="space-y-6 pt-8 border-t border-border">
            <h2 className="text-2xl font-bold tracking-tight text-foreground">Understanding the Specs</h2>
            <div className="prose prose-sm md:prose-base dark:prose-invert max-w-none text-muted-foreground">
              <p>When comparing flagship devices, raw numbers only tell part of the story. While a higher megapixel count might sound impressive, computational photography and sensor size often play a larger role in final image quality. Similarly, battery life is heavily influenced by the efficiency of the processor and the operating system's power management, not just the raw mAh capacity. Use our technical breakdown to find the device that excels in the areas that matter most to your daily usage.</p>
            </div>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="ram">
                <AccordionTrigger>Does more RAM always mean better performance?</AccordionTrigger>
                <AccordionContent>Not necessarily. Android and iOS handle memory differently. Android devices generally benefit from more RAM (8GB+) for heavy multitasking and keeping apps alive in the background. iOS is highly optimized to run smoothly on less RAM due to its restrictive background process management.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="camera">
                <AccordionTrigger>Why do some phones have 200MP cameras?</AccordionTrigger>
                <AccordionContent>Ultra-high megapixel counts use a technique called 'pixel binning', combining data from multiple adjacent pixels into one larger virtual pixel. This improves low-light performance and allows for high-quality digital zoom (cropping into the sensor) without losing detail, rather than producing massive 200MP files by default.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="refresh">
                <AccordionTrigger>What is the benefit of a 120Hz display?</AccordionTrigger>
                <AccordionContent>A 120Hz refresh rate means the screen updates 120 times per second, twice as fast as standard 60Hz displays. This results in noticeably smoother scrolling, more responsive touch interactions, and better visual fluidity in supported games.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </main>
        <aside className="w-full lg:w-1/4 flex flex-col gap-6">
          <div className="sticky top-24 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Need Expert Advice?</CardTitle>
                <CardDescription>Not sure which specs matter most for your daily use?</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-6">Our tech specialists are available to help you decode the jargon and find the perfect match for your needs and budget.</p>
                <Button className="w-full" asChild>
                  <Link to="/support">Contact Support</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle>Trade-in & Save</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">Get up to $500 off your new flagship device when you trade in your current phone in good working condition.</p>
                <Button variant="outline" className="w-full bg-background" onClick={onViewTradeIn}>Calculate Value</Button>
              </CardContent>
            </Card>
          </div>
        </aside>
      </div>
    </div>
  )
}
