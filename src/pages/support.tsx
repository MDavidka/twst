import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Field, FieldContent, FieldDescription, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { CircleStackIcon, DocumentCheckIcon, DocumentTextIcon, MapPinIcon, MessageCircleIcon, SearchIcon, TruckIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline'
import { trackOrder, submitWarrantyClaim, setReceiptFile, scheduleAppointment, downloadManual, openChat } from '@/lib/support-logic'

export function Support() {
  React.useEffect(() => { document.title = "Support" }, [])
  const [orderQuery, setOrderQuery] = React.useState('')
  const [model, setModel] = React.useState('')
  const [issueDescription, setIssueDescription] = React.useState('')

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-7xl">
      <div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-8">
        <div className="lg:col-span-3 max-w-3xl">
          <Card>
            <CardHeader>
              <CardTitle>Support</CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>
                    <div className="flex items-center gap-2">
                      <TruckIcon className="h-5 w-5" />
                      <span>Track Your Order</span>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={trackOrder} className="space-y-4">
                    <Field>
                      <FieldLabel>Order ID or Email</FieldLabel>
                      <FieldContent>
                        <Input placeholder="Enter order ID or email address" value={orderQuery} onChange={setOrderQuery} />
                      </FieldContent>
                      <FieldDescription>Track your order status in real-time</FieldDescription>
                    </Field>
                    <Button type="submit" className="w-full">
                      <SearchIcon className="h-4 w-4 mr-2" />
                      <span>Track Order</span>
                    </Button>
                  </form>
                  <div className="mt-6 p-4 bg-muted rounded-lg">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CircleStackIcon className="h-4 w-4" />
                      <span>$state.orderStatus || 'Enter order details to track'</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>
                    <div className="flex items-center gap-2">
                      <WrenchScrewdriverIcon className="h-5 w-5" />
                      <span>Troubleshooting</span>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible>
                    <AccordionItem value="battery">
                      <AccordionTrigger>Battery draining too fast</AccordionTrigger>
                      <AccordionContent>Check background apps, lower screen brightness, disable unused features. Restart device or update iOS/Android.</AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="software">
                      <AccordionTrigger>App crashes or glitches</AccordionTrigger>
                      <AccordionContent>Force close app, clear cache, update to latest version. Check for OS updates in Settings.</AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="screen">
                      <AccordionTrigger>Screen frozen or unresponsive</AccordionTrigger>
                      <AccordionContent>Force restart: iPhone (Vol+Vol+Power), Android (Power+VolDown 10s). Connect to computer if unresponsive.</AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="charging">
                      <AccordionTrigger>Not charging properly</AccordionTrigger>
                      <AccordionContent>Try different cable/outlet, clean port, restart. Wireless charging? Check alignment and case interference.</AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="wifi">
                      <AccordionTrigger>WiFi connection issues</AccordionTrigger>
                      <AccordionContent>Forget network and reconnect, restart router, toggle Airplane mode. Check signal strength.</AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="camera">
                      <AccordionTrigger>Camera not working</AccordionTrigger>
                      <AccordionContent>Close other apps, clean lens, restart. Test in different apps. Check permissions in Settings.</AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="sound">
                      <AccordionTrigger>No sound or speaker issues</AccordionTrigger>
                      <AccordionContent>Check volume/mute, clean speaker grills, test different apps. Try Bluetooth headphones.</AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="storage">
                      <AccordionTrigger>Storage full or slow performance</AccordionTrigger>
                      <AccordionContent>{"Delete unused apps/photos, clear cache, move to cloud. Check Settings > Storage."}</AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </div>
        <aside className="lg:sticky lg:top-8 lg:h-fit space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>File Warranty Claim</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <form onSubmit={submitWarrantyClaim} className="space-y-4">
                <Field>
                  <FieldLabel>Phone Model</FieldLabel>
                  <FieldContent>
                    <Select value={model} onValueChange={setModel}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select model" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="iphone-15">iPhone 15</SelectItem>
                        <SelectItem value="samsung-s24">Samsung S24</SelectItem>
                        <SelectItem value="pixel-8">Google Pixel 8</SelectItem>
                      </SelectContent>
                    </Select>
                  </FieldContent>
                </Field>
                <Field>
                  <FieldLabel>Issue Description</FieldLabel>
                  <FieldContent>
                    <Textarea placeholder="Describe the issue..." value={issueDescription} onChange={setIssueDescription} />
                  </FieldContent>
                </Field>
                <Field>
                  <FieldLabel>Receipt (optional)</FieldLabel>
                  <FieldContent>
                    <Input type="file" accept="image/*,.pdf" onChange={setReceiptFile} />
                  </FieldContent>
                </Field>
                <Button type="submit" className="w-full" variant="default">
                  <DocumentCheckIcon className="h-4 w-4 mr-2" />
                  <span>Submit Claim</span>
                </Button>
              </form>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Repair Centers</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="text-xs text-muted-foreground">Find nearest location</div>
              <div className="h-48 bg-muted rounded-lg flex items-center justify-center">
                <MapPinIcon className="h-8 w-8 text-muted-foreground" />
              </div>
              <Button variant="outline" size="sm" className="w-full" onClick={scheduleAppointment}>Schedule Appointment</Button>
            </CardContent>
            <CardFooter className="pt-0">
              <div className="space-y-1 text-xs">
                <div className="font-medium">Downtown Store</div>
                <div>123 Main St, City</div>
                <div>Mon-Fri 9AM-7PM</div>
              </div>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>
                <div className="flex items-center gap-2">
                  <DocumentTextIcon className="h-5 w-5" />
                  <span>Manuals</span>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Button variant="ghost" className="justify-start h-auto p-3 w-full text-left" onClick={downloadManual} data-model="iphone-15">
                  <span>iPhone 15 Manual</span>
                </Button>
                <Button variant="ghost" className="justify-start h-auto p-3 w-full text-left" onClick={downloadManual} data-model="samsung-s24">
                  <span>Samsung S24 Manual</span>
                </Button>
                <Button variant="ghost" className="justify-start h-auto p-3 w-full text-left" onClick={downloadManual} data-model="pixel-8">
                  <span>Google Pixel 8 Manual</span>
                </Button>
              </div>
            </CardContent>
          </Card>
          <Button variant="outline" size="lg" className="w-full" onClick={openChat}>
            <MessageCircleIcon className="h-5 w-5 mr-2" />
            <span>Live Chat Support</span>
          </Button>
        </aside>
      </div>
    </div>
  )
}
