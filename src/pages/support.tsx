import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Field, FieldContent, FieldGroup, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { ChatBubbleLeftRightIcon, CreditCardIcon, GlobeAltIcon, MagnifyingGlassIcon, PaperAirplaneIcon, ServerStackIcon } from '@heroicons/react/24/outline'
import { onSubmitTicket, onSendChatMessage } from '@/lib/support-logic'

export function Support() {
  React.useEffect(() => { document.title = "Support" }, [])
  const [searchQuery, setSearchQuery] = React.useState('')
  const [ticketName, setTicketName] = React.useState('')
  const [ticketEmail, setTicketEmail] = React.useState('')
  const [ticketDepartment, setTicketDepartment] = React.useState('')
  const [ticketPriority, setTicketPriority] = React.useState('')
  const [ticketMessage, setTicketMessage] = React.useState('')
  const [chatOpen, setChatOpen] = React.useState(false)
  const [chatMessage, setChatMessage] = React.useState('')

  return (
    <div className="min-h-screen bg-background pb-24">
      <section className="bg-primary/5 py-16 md:py-24 border-b border-border/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-4">Support</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">How can we help you today? Search our knowledge base for quick answers or open a support ticket.</p>
          <div className="mt-10 max-w-2xl mx-auto relative shadow-sm rounded-md">
            <InputGroup>
              <InputGroupAddon>
                <MagnifyingGlassIcon className="h-5 w-5 text-muted-foreground" />
              </InputGroupAddon>
              <InputGroupInput placeholder="Search for articles, guides, and FAQs (e.g., 'setup email')..." value={searchQuery} onChange={setSearchQuery} className="h-14 text-base bg-background" />
            </InputGroup>
          </div>
        </div>
      </section>
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl -mt-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="hover:border-primary/50 transition-colors shadow-sm">
            <CardContent className="p-6 flex flex-col items-center text-center space-y-3">
              <div className="p-3 bg-primary/10 rounded-full mb-2">
                <ServerStackIcon className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-lg">Technical Support</CardTitle>
              <CardDescription>Server configuration, performance tuning, and troubleshooting.</CardDescription>
            </CardContent>
          </Card>
          <Card className="hover:border-primary/50 transition-colors shadow-sm">
            <CardContent className="p-6 flex flex-col items-center text-center space-y-3">
              <div className="p-3 bg-primary/10 rounded-full mb-2">
                <CreditCardIcon className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-lg">Billing & Accounts</CardTitle>
              <CardDescription>Invoices, payment methods, and subscription management.</CardDescription>
            </CardContent>
          </Card>
          <Card className="hover:border-primary/50 transition-colors shadow-sm">
            <CardContent className="p-6 flex flex-col items-center text-center space-y-3">
              <div className="p-3 bg-primary/10 rounded-full mb-2">
                <GlobeAltIcon className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-lg">Domains & DNS</CardTitle>
              <CardDescription>Domain registration, transfers, and DNS record management.</CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl py-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-foreground">Frequently Asked Questions</h2>
          <p className="text-muted-foreground mt-2">Quick answers to our most common support inquiries.</p>
        </div>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>How do I point my domain to your servers?</AccordionTrigger>
            <AccordionContent>You can point your domain by updating your nameservers at your domain registrar to ns1.ourhosting.com and ns2.ourhosting.com. Propagation usually takes 1-4 hours, but can take up to 24 hours globally.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Do you offer free SSL certificates?</AccordionTrigger>
            <AccordionContent>Yes, all of our shared and VPS hosting plans include free automated Let's Encrypt SSL certificates. They are provisioned automatically within an hour of your domain resolving to our servers.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>What is an inode limit and how does it affect me?</AccordionTrigger>
            <AccordionContent>An inode represents a single file or directory on the server. Our shared hosting plans have generous inode limits (typically 250,000+). Hitting this limit means you cannot create new files until old ones are deleted or you upgrade to a VPS.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>How do I upgrade from Shared Hosting to a VPS?</AccordionTrigger>
            <AccordionContent>Upgrading is seamless. You can initiate an upgrade directly from your client portal. Our migration team will copy your data to the new VPS environment with minimal downtime, usually scheduled during off-peak hours.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>How often are backups taken?</AccordionTrigger>
            <AccordionContent>We take automated daily backups of all shared hosting accounts, retained for 14 days. VPS customers can configure their own backup schedules or opt-in to our managed backup service.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>What PHP versions do you support?</AccordionTrigger>
            <AccordionContent>We support all actively maintained PHP versions (currently 8.1, 8.2, and 8.3), as well as legacy versions (7.4) via CloudLinux HardenedPHP for older applications. You can switch versions instantly in your control panel.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger>Is SSH access included with my plan?</AccordionTrigger>
            <AccordionContent>Jailed SSH access is available on all shared hosting plans upon request for security verification. Root SSH access is included by default on all VPS and Dedicated server plans.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-8">
            <AccordionTrigger>What is your refund policy?</AccordionTrigger>
            <AccordionContent>We offer a 30-day money-back guarantee on all shared hosting plans. If you are not satisfied within your first month, we will issue a full refund. Note that domain registrations and dedicated servers are non-refundable.</AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl pb-16">
        <Card className="border-border shadow-md">
          <CardHeader className="bg-muted/30 border-b border-border pb-6">
            <CardTitle className="text-2xl">Submit a Support Ticket</CardTitle>
            <CardDescription>Can't find the answer in our FAQ? Send us a detailed message and our 24/7 team will investigate.</CardDescription>
          </CardHeader>
          <form onSubmit={onSubmitTicket}>
            <CardContent className="pt-6">
              <FieldGroup>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <Field>
                    <FieldLabel>Full Name</FieldLabel>
                    <FieldContent>
                      <Input placeholder="Jane Doe" required value={ticketName} onChange={setTicketName} />
                    </FieldContent>
                  </Field>
                  <Field>
                    <FieldLabel>Email Address</FieldLabel>
                    <FieldContent>
                      <Input type="email" placeholder="jane@example.com" required value={ticketEmail} onChange={setTicketEmail} />
                    </FieldContent>
                  </Field>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <Field>
                    <FieldLabel>Department</FieldLabel>
                    <FieldContent>
                      <Select value={ticketDepartment} onValueChange={setTicketDepartment} required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select department routing" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="technical">Technical Support</SelectItem>
                          <SelectItem value="sales">Sales & Billing</SelectItem>
                          <SelectItem value="abuse">Abuse & Security</SelectItem>
                        </SelectContent>
                      </Select>
                    </FieldContent>
                  </Field>
                  <Field>
                    <FieldLabel>Priority Level</FieldLabel>
                    <FieldContent>
                      <Select value={ticketPriority} onValueChange={setTicketPriority} required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select urgency" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="low">Low (General Question)</SelectItem>
                          <SelectItem value="normal">Normal (Standard Issue)</SelectItem>
                          <SelectItem value="high">High (Service Degraded)</SelectItem>
                          <SelectItem value="urgent">Urgent (System Down)</SelectItem>
                        </SelectContent>
                      </Select>
                    </FieldContent>
                  </Field>
                </div>
                <Field>
                  <FieldLabel>Issue Description</FieldLabel>
                  <FieldContent>
                    <Textarea placeholder="Please provide as much detail as possible, including error messages, steps to reproduce, or affected domain names..." rows={6} required value={ticketMessage} onChange={setTicketMessage} />
                  </FieldContent>
                </Field>
              </FieldGroup>
            </CardContent>
            <CardFooter className="bg-muted/30 py-4 border-t border-border flex justify-end">
              <Button type="submit" className="w-full sm:w-auto" size="lg">
                <PaperAirplaneIcon className="mr-2 h-5 w-5" />
                <span>Submit Ticket</span>
              </Button>
            </CardFooter>
          </form>
        </Card>
      </section>
      <div className="fixed bottom-6 right-6 z-50">
        <Dialog open={chatOpen} onOpenChange={setChatOpen}>
          <DialogTrigger asChild>
            <Button size="icon" className="h-14 w-14 rounded-full shadow-xl">
              <ChatBubbleLeftRightIcon className="h-7 w-7" />
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[400px] p-0 overflow-hidden border-border shadow-2xl">
            <div className="bg-primary p-4 text-primary-foreground flex justify-between items-center">
              <div>
                <DialogTitle className="text-lg font-semibold text-primary-foreground">Live Chat Support</DialogTitle>
                <DialogDescription className="text-primary-foreground/80 text-sm mt-1">Typically replies in under 5 minutes.</DialogDescription>
              </div>
            </div>
            <ScrollArea className="h-[320px] p-4 bg-muted/10">
              <div className="flex flex-col space-y-4">
                <div className="flex items-start gap-3">
                  <Avatar className="h-8 w-8 mt-1">
                    <AvatarFallback className="bg-primary/20 text-primary text-xs font-bold">AI</AvatarFallback>
                  </Avatar>
                  <div className="bg-muted border border-border rounded-2xl rounded-tl-none p-3 text-sm max-w-[85%] text-foreground">Hello! I'm the hosting assistant. How can I help you today?</div>
                </div>
              </div>
            </ScrollArea>
            <div className="p-3 border-t border-border bg-background">
              <form onSubmit={onSendChatMessage} className="flex gap-2">
                <Input placeholder="Type your message..." value={chatMessage} onChange={setChatMessage} className="flex-1 focus-visible:ring-primary" />
                <Button type="submit" size="icon">
                  <PaperAirplaneIcon className="h-4 w-4" />
                </Button>
              </form>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
