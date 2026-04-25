import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ButtonGroup, ButtonGroupText } from '@/components/ui/button-group'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Checkbox } from '@/components/ui/checkbox'
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from '@/components/ui/input-group'
import { Item, ItemActions, ItemContent, ItemDescription, ItemGroup, ItemMedia, ItemSeparator, ItemTitle } from '@/components/ui/item'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Separator } from '@/components/ui/separator'
import { Link } from 'react-router-dom'
import { ArrowPathIcon, ArrowRightIcon, Battery50Icon, BoltIcon, ChatBubbleLeftRightIcon, DevicePhoneMobileIcon, LockClosedIcon, MinusIcon, MusicalNoteIcon, PlusIcon, ShieldCheckIcon, ShoppingCartIcon, Square2StackIcon, TagIcon, TrashIcon } from '@heroicons/react/24/outline'
import { onDecrementPhoneQty, onIncrementPhoneQty, onRemovePhone, onDecrementAudioQty, onIncrementAudioQty, onRemoveAudio, onApplyPromo, onOpenTradeIn, onViewWarrantyPlans, onProceedToCheckout, onAddCharger, onAddGlass, onAddCase, onAddStand } from '@/lib/cart-logic'

export function Cart() {
  React.useEffect(() => { document.title = "Cart" }, [])
  const [promoCode, setPromoCode] = React.useState('')
  const [shippingMethod, setShippingMethod] = React.useState('')
  const [isGift, setIsGift] = React.useState('')

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="bg-primary/5 py-12 px-4 sm:px-6 lg:px-8 border-b border-border">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground flex items-center gap-3">
              <ShoppingCartIcon className="h-10 w-10 text-primary" />
              <span>Cart</span>
            </h1>
            <p className="mt-2 text-lg text-muted-foreground max-w-2xl">Review your items, apply any discounts, and proceed to our secure checkout process.</p>
          </div>
          <div className="flex items-center gap-4">
            <ShieldCheckIcon className="h-6 w-6 text-muted-foreground" />
            <span className="text-sm text-muted-foreground font-medium">Secure 256-bit SSL Checkout</span>
          </div>
        </div>
      </header>
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8 space-y-8">
            <Accordion type="multiple" defaultValue="items,promo,shipping">
              <AccordionItem value="items">
                <AccordionTrigger className="text-xl font-semibold">1. Review Cart Items</AccordionTrigger>
                <AccordionContent className="pt-4 pb-6">
                  <ItemGroup>
                    <Item>
                      <ItemMedia>
                        <AspectRatio ratio={1} className="bg-muted rounded-md flex items-center justify-center border border-border">
                          <DevicePhoneMobileIcon className="h-10 w-10 text-muted-foreground" />
                        </AspectRatio>
                      </ItemMedia>
                      <ItemContent>
                        <ItemTitle>Nebula X Pro</ItemTitle>
                        <ItemDescription>256GB Storage, Midnight Black</ItemDescription>
                        <Badge variant="secondary" className="mt-2 w-fit">In Stock</Badge>
                      </ItemContent>
                      <ItemActions className="flex flex-col sm:flex-row items-end sm:items-center gap-4">
                        <span className="font-semibold text-lg">$999.00</span>
                        <ButtonGroup>
                          <Button variant="outline" size="icon" onClick={onDecrementPhoneQty}>
                            <MinusIcon className="h-4 w-4" />
                          </Button>
                          <ButtonGroupText>$state.phoneQty</ButtonGroupText>
                          <Button variant="outline" size="icon" onClick={onIncrementPhoneQty}>
                            <PlusIcon className="h-4 w-4" />
                          </Button>
                        </ButtonGroup>
                        <Button variant="ghost" size="icon" onClick={onRemovePhone} className="text-destructive">
                          <TrashIcon className="h-5 w-5" />
                        </Button>
                      </ItemActions>
                    </Item>
                    <ItemSeparator />
                    <Item>
                      <ItemMedia>
                        <AspectRatio ratio={1} className="bg-muted rounded-md flex items-center justify-center border border-border">
                          <MusicalNoteIcon className="h-10 w-10 text-muted-foreground" />
                        </AspectRatio>
                      </ItemMedia>
                      <ItemContent>
                        <ItemTitle>SonicPods Pro</ItemTitle>
                        <ItemDescription>Active Noise Cancelling, White</ItemDescription>
                      </ItemContent>
                      <ItemActions className="flex flex-col sm:flex-row items-end sm:items-center gap-4">
                        <span className="font-semibold text-lg">$249.00</span>
                        <ButtonGroup>
                          <Button variant="outline" size="icon" onClick={onDecrementAudioQty}>
                            <MinusIcon className="h-4 w-4" />
                          </Button>
                          <ButtonGroupText>$state.audioQty</ButtonGroupText>
                          <Button variant="outline" size="icon" onClick={onIncrementAudioQty}>
                            <PlusIcon className="h-4 w-4" />
                          </Button>
                        </ButtonGroup>
                        <Button variant="ghost" size="icon" onClick={onRemoveAudio} className="text-destructive">
                          <TrashIcon className="h-5 w-5" />
                        </Button>
                      </ItemActions>
                    </Item>
                  </ItemGroup>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="promo">
                <AccordionTrigger className="text-lg font-medium">2. Apply Promo Code</AccordionTrigger>
                <AccordionContent className="pt-2 pb-4">
                  <InputGroup className="max-w-md">
                    <InputGroupAddon>
                      <TagIcon className="h-5 w-5 text-muted-foreground" />
                    </InputGroupAddon>
                    <InputGroupInput placeholder="Enter discount code" value={promoCode} onChange={setPromoCode} />
                    <InputGroupButton onClick={onApplyPromo}>Apply</InputGroupButton>
                  </InputGroup>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="shipping">
                <AccordionTrigger className="text-lg font-medium">3. Shipping Method</AccordionTrigger>
                <AccordionContent className="pt-2 pb-4">
                  <RadioGroup value={shippingMethod} onValueChange={setShippingMethod} className="flex flex-col gap-4">
                    <div className="flex items-center space-x-3 border border-border p-4 rounded-lg hover:bg-muted/50 transition-colors">
                      <RadioGroupItem value="standard" id="ship-std" />
                      <Label htmlFor="ship-std" className="flex-1 cursor-pointer flex justify-between items-center">
                        <span className="font-medium">Standard Shipping (3-5 Business Days)</span>
                        <span className="text-muted-foreground">Free</span>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-3 border border-border p-4 rounded-lg hover:bg-muted/50 transition-colors">
                      <RadioGroupItem value="express" id="ship-exp" />
                      <Label htmlFor="ship-exp" className="flex-1 cursor-pointer flex justify-between items-center">
                        <span className="font-medium">Express Shipping (1-2 Business Days)</span>
                        <span className="font-semibold">$14.99</span>
                      </Label>
                    </div>
                  </RadioGroup>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="tradein">
                <AccordionTrigger className="text-lg font-medium">4. Trade-In Program</AccordionTrigger>
                <AccordionContent className="pt-2 pb-4 space-y-4">
                  <p className="text-muted-foreground">Got an old device? Trade it in for up to $400 credit toward your new purchase today.</p>
                  <Button variant="outline" onClick={onOpenTradeIn}>Estimate Trade-In Value</Button>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="gift">
                <AccordionTrigger className="text-lg font-medium">5. Gift Options</AccordionTrigger>
                <AccordionContent className="pt-2 pb-4 space-y-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="is-gift" checked={isGift} onCheckedChange={setIsGift} />
                    <Label htmlFor="is-gift">This order is a gift (hide prices on packing slip)</Label>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="warranty">
                <AccordionTrigger className="text-lg font-medium">6. Extended Warranty</AccordionTrigger>
                <AccordionContent className="pt-2 pb-4 space-y-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="default">Recommended</Badge>
                    <span className="font-medium">Protect your investment.</span>
                  </div>
                  <p className="text-muted-foreground text-sm">Add 2 years of accidental damage protection and priority technical support.</p>
                  <Button variant="secondary" size="sm" onClick={onViewWarrantyPlans}>View Protection Plans</Button>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="returns">
                <AccordionTrigger className="text-lg font-medium">7. Return Policy</AccordionTrigger>
                <AccordionContent className="pt-2 pb-4">
                  <Alert>
                    <ArrowPathIcon className="h-4 w-4" />
                    <AlertTitle>30-Day Money-Back Guarantee</AlertTitle>
                    <AlertDescription>Not completely satisfied? Return your device in its original condition within 30 days for a full refund, no questions asked.</AlertDescription>
                  </Alert>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="support">
                <AccordionTrigger className="text-lg font-medium">8. Need Help?</AccordionTrigger>
                <AccordionContent className="pt-2 pb-4 space-y-3">
                  <p className="text-muted-foreground">Our device experts are standing by to help you choose the right phone or accessory.</p>
                  <div className="flex items-center gap-4">
                    <Link to="/support">
                      <Button variant="outline">
                        <ChatBubbleLeftRightIcon className="mr-2 h-4 w-4" />
                        <span>Visit Support Hub</span>
                      </Button>
                    </Link>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="lg:col-span-4">
            <div className="sticky top-8">
              <Card className="shadow-lg border-primary/20">
                <CardHeader className="bg-muted/30 rounded-t-xl pb-4">
                  <CardTitle className="text-2xl">Order Summary</CardTitle>
                  <CardDescription>Review your costs before checkout.</CardDescription>
                </CardHeader>
                <CardContent className="pt-6 space-y-4">
                  <div className="flex justify-between items-center text-muted-foreground">
                    <span>Subtotal</span>
                    <span className="font-medium text-foreground">$1,248.00</span>
                  </div>
                  <div className="flex justify-between items-center text-muted-foreground">
                    <span>Estimated Tax</span>
                    <span className="font-medium text-foreground">$106.08</span>
                  </div>
                  <div className="flex justify-between items-center text-muted-foreground">
                    <span>Shipping</span>
                    <span className="font-medium text-foreground">Calculated at checkout</span>
                  </div>
                  <div className="flex justify-between items-center text-primary text-sm font-medium">
                    <span>Discount Applied</span>
                    <span>-$0.00</span>
                  </div>
                  <Separator className="my-4" />
                  <div className="flex justify-between items-center text-xl font-bold">
                    <span>Total</span>
                    <span>$1,354.08</span>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col gap-4 pb-6">
                  <Button size="lg" className="w-full text-lg h-14" onClick={onProceedToCheckout}>
                    <span>Proceed to Checkout</span>
                    <ArrowRightIcon className="ml-2 h-5 w-5" />
                  </Button>
                  <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground w-full">
                    <LockClosedIcon className="h-3 w-3" />
                    <span>Payments are secure and encrypted.</span>
                  </div>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <section className="bg-muted/20 border-t border-border mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="mb-8 text-center sm:text-left">
            <h2 className="text-2xl font-bold tracking-tight">Frequently Bought Together</h2>
            <p className="text-muted-foreground mt-2">Complete your setup with these essential accessories.</p>
          </div>
          <Carousel opts="[object Object]" className="w-full">
            <CarouselContent className="-ml-4">
              <CarouselItem className="pl-4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                <Card className="h-full flex flex-col">
                  <CardHeader className="p-0">
                    <AspectRatio ratio={1.33} className="bg-secondary flex items-center justify-center rounded-t-xl">
                      <Battery50Icon className="h-16 w-16 text-muted-foreground/50" />
                    </AspectRatio>
                  </CardHeader>
                  <CardContent className="pt-4 flex-1">
                    <CardTitle className="text-lg">20W Fast Wall Charger</CardTitle>
                    <CardDescription className="mt-1">USB-C Power Adapter</CardDescription>
                    <div className="mt-3 font-semibold text-foreground">$19.99</div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="secondary" className="w-full" onClick={onAddCharger}>Add to Cart</Button>
                  </CardFooter>
                </Card>
              </CarouselItem>
              <CarouselItem className="pl-4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                <Card className="h-full flex flex-col">
                  <CardHeader className="p-0">
                    <AspectRatio ratio={1.33} className="bg-secondary flex items-center justify-center rounded-t-xl">
                      <Square2StackIcon className="h-16 w-16 text-muted-foreground/50" />
                    </AspectRatio>
                  </CardHeader>
                  <CardContent className="pt-4 flex-1">
                    <CardTitle className="text-lg">Tempered Glass Shield</CardTitle>
                    <CardDescription className="mt-1">9H Hardness Protection</CardDescription>
                    <div className="mt-3 font-semibold text-foreground">$14.99</div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="secondary" className="w-full" onClick={onAddGlass}>Add to Cart</Button>
                  </CardFooter>
                </Card>
              </CarouselItem>
              <CarouselItem className="pl-4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                <Card className="h-full flex flex-col">
                  <CardHeader className="p-0">
                    <AspectRatio ratio={1.33} className="bg-secondary flex items-center justify-center rounded-t-xl">
                      <DevicePhoneMobileIcon className="h-16 w-16 text-muted-foreground/50" />
                    </AspectRatio>
                  </CardHeader>
                  <CardContent className="pt-4 flex-1">
                    <CardTitle className="text-lg">Silicone Grip Case</CardTitle>
                    <CardDescription className="mt-1">MagSafe Compatible</CardDescription>
                    <div className="mt-3 font-semibold text-foreground">$39.99</div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="secondary" className="w-full" onClick={onAddCase}>Add to Cart</Button>
                  </CardFooter>
                </Card>
              </CarouselItem>
              <CarouselItem className="pl-4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                <Card className="h-full flex flex-col">
                  <CardHeader className="p-0">
                    <AspectRatio ratio={1.33} className="bg-secondary flex items-center justify-center rounded-t-xl">
                      <BoltIcon className="h-16 w-16 text-muted-foreground/50" />
                    </AspectRatio>
                  </CardHeader>
                  <CardContent className="pt-4 flex-1">
                    <CardTitle className="text-lg">Wireless Charging Stand</CardTitle>
                    <CardDescription className="mt-1">15W Fast Charge</CardDescription>
                    <div className="mt-3 font-semibold text-foreground">$49.99</div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="secondary" className="w-full" onClick={onAddStand}>Add to Cart</Button>
                  </CardFooter>
                </Card>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="-left-4 hidden md:flex" />
            <CarouselNext className="-right-4 hidden md:flex" />
          </Carousel>
        </div>
      </section>
    </div>
  )
}
