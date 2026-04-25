import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Textarea } from '@/components/ui/textarea'
import { ChatBubbleLeftEllipsisIcon, ChatBubbleLeftRightIcon, CheckCircleIcon, DocumentDuplicateIcon, PhoneIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { onCopyEmail, onStartChat, onCopyPhone, onSubmitContactForm, onNameChange, onEmailChange, onOrderChange, onMessageChange, onToggleLiveChat } from '@/lib/support-logic'

export function Support() {
  React.useEffect(() => { document.title = "Support" }, [])
  const [contactName, setContactName] = React.useState('')
  const [contactEmail, setContactEmail] = React.useState('')
  const [contactOrder, setContactOrder] = React.useState('')
  const [contactMessage, setContactMessage] = React.useState('')

  return (
    <div className="min-h-screen bg-background pb-24">
      <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">Support</h1>
        <p className="mt-4 text-xl text-muted-foreground">We're here to help. Choose the best way to reach us or browse our resources below.</p>
      </section>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle>Email Support</CardTitle>
              <CardDescription>Best for detailed inquiries and attachments.</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="text-2xl font-semibold text-foreground">support@phonewebshop.com</p>
              <p className="text-sm text-muted-foreground mt-2">Response within 24 hours.</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant="outline" onClick={onCopyEmail}>
                <DocumentDuplicateIcon className="w-4 h-4 mr-2" />
                <span>Copy Email</span>
              </Button>
            </CardFooter>
          </Card>
          <Card className="flex flex-col border-primary shadow-lg relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <Badge variant="default" className="px-3 py-1 text-xs uppercase tracking-wider">Fastest Response</Badge>
            </div>
            <CardHeader>
              <CardTitle>Live Chat</CardTitle>
              <CardDescription>Real-time assistance for quick questions.</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="text-2xl font-semibold text-foreground">Available 24/7</p>
              <p className="text-sm text-muted-foreground mt-2">{"Average wait time: < 2 mins."}</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant="default" onClick={onStartChat}>
                <ChatBubbleLeftRightIcon className="w-4 h-4 mr-2" />
                <span>Start Chat</span>
              </Button>
            </CardFooter>
          </Card>
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle>Phone Support</CardTitle>
              <CardDescription>Speak directly with a support agent.</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="text-2xl font-semibold text-foreground">1-800-555-0199</p>
              <p className="text-sm text-muted-foreground mt-2">Mon-Fri, 9am - 6pm EST.</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant="outline" onClick={onCopyPhone}>
                <PhoneIcon className="w-4 h-4 mr-2" />
                <span>Copy Phone</span>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <Card>
          <CardHeader className="text-center">
            <CardTitle>Support & Warranty Coverage</CardTitle>
            <CardDescription>Compare what's included in our standard and premium plans.</CardDescription>
          </CardHeader>
          <CardContent className="p-0 overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[40%] pl-6">Feature</TableHead>
                  <TableHead className="text-center">Standard (1 Year)</TableHead>
                  <TableHead className="text-center pr-6">Premium Protect (+2 Years)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium pl-6">Hardware Defect Coverage</TableCell>
                  <TableCell className="text-center">
                    <CheckCircleIcon className="w-5 h-5 text-primary mx-auto" />
                  </TableCell>
                  <TableCell className="text-center pr-6">
                    <CheckCircleIcon className="w-5 h-5 text-primary mx-auto" />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium pl-6">24/7 Technical Support</TableCell>
                  <TableCell className="text-center">
                    <CheckCircleIcon className="w-5 h-5 text-primary mx-auto" />
                  </TableCell>
                  <TableCell className="text-center pr-6">
                    <CheckCircleIcon className="w-5 h-5 text-primary mx-auto" />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium pl-6">Accidental Damage Protection</TableCell>
                  <TableCell className="text-center">
                    <XMarkIcon className="w-5 h-5 text-muted-foreground mx-auto" />
                  </TableCell>
                  <TableCell className="text-center pr-6">
                    <CheckCircleIcon className="w-5 h-5 text-primary mx-auto" />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium pl-6 pb-4">Free Battery Replacement</TableCell>
                  <TableCell className="text-center text-muted-foreground text-sm pb-4">Under 80% capacity</TableCell>
                  <TableCell className="text-center text-muted-foreground text-sm pr-6 pb-4">Any time</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </section>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="shipping">
              <AccordionTrigger>What are your shipping timelines?</AccordionTrigger>
              <AccordionContent>Standard shipping takes 3-5 business days. Expedited shipping is available at checkout for 1-2 day delivery. Orders placed before 2 PM EST ship the same day.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="returns">
              <AccordionTrigger>What is your return policy?</AccordionTrigger>
              <AccordionContent>We offer a 30-day money-back guarantee on all devices. Phones must be in original condition with all accessories included. A restocking fee may apply for damaged packaging.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="warranty">
              <AccordionTrigger>How does the warranty work?</AccordionTrigger>
              <AccordionContent>All phones come with a 1-year manufacturer warranty covering hardware defects. You can also purchase Premium Protect for extended coverage including accidental damage.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="unlocking">
              <AccordionTrigger>Are the phones carrier unlocked?</AccordionTrigger>
              <AccordionContent>Yes, all devices sold on our store are fully unlocked and compatible with any major carrier worldwide. Just insert your active SIM card.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="setup">
              <AccordionTrigger>Do you offer technical setup assistance?</AccordionTrigger>
              <AccordionContent>Absolutely! Our support team can guide you through data transfer, account setup, and basic troubleshooting via phone or live chat.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h2>
          <Card>
            <CardContent className="pt-6">
              <Form>
                <form onSubmit={onSubmitContactForm} className="space-y-4">
                  <FormField>
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" value={contactName} onChange={onNameChange} required />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  </FormField>
                  <FormField>
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="john@example.com" value={contactEmail} onChange={onEmailChange} required />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  </FormField>
                  <FormField>
                    <FormItem>
                      <FormLabel>Order Number (Optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g. ORD-12345" value={contactOrder} onChange={onOrderChange} />
                      </FormControl>
                      <FormDescription>Helps us locate your purchase faster.</FormDescription>
                      <FormMessage />
                    </FormItem>
                  </FormField>
                  <FormField>
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="How can we help you?" rows={4} value={contactMessage} onChange={onMessageChange} required />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  </FormField>
                  <Button type="submit" className="w-full">Send Message</Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </section>
      <div className="fixed bottom-6 right-6 z-50">
        <Button size="icon" className="h-14 w-14 rounded-full shadow-2xl" onClick={onToggleLiveChat}>
          <ChatBubbleLeftEllipsisIcon className="h-6 w-6" />
        </Button>
      </div>
    </div>
  )
}
