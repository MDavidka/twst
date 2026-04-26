import React from 'react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Spinner } from '@/components/ui/spinner'
import { Textarea } from '@/components/ui/textarea'
import { Link } from 'react-router-dom'
import { CheckCircleIcon, ClockIcon, EnvelopeIcon, MessageCircleIcon, PhoneIcon, ShoppingBagIcon } from '@heroicons/react/24/outline'
import { onSubmit, openLiveChat } from '@/lib/contact-logic'

export function Contact() {
  React.useEffect(() => { document.title = "Contact" }, [])
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [phoneInterest, setPhoneInterest] = React.useState('')
  const [message, setMessage] = React.useState('')
  const [submitting, setSubmitting] = React.useState('')
  const [successOpen, setSuccessOpen] = React.useState(false)

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-7xl">
      <div className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold tracking-tight bg-gradient-to-r from-foreground via-primary to-primary-foreground bg-clip-text text-transparent mb-6">Contact Us</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Get in touch for support, inquiries, or to schedule an in-store visit. We're here to help you find the perfect phone.</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PhoneIcon className="h-6 w-6" />
              <div>Send us a message</div>
            </CardTitle>
            <CardDescription>Fill out the form below and we'll get back to you within 24 hours.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <form onSubmit={onSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="John Doe" value={name} onChange={setName} />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="john@example.com" value={email} onChange={setEmail} />
              </div>
              <div>
                <Label htmlFor="phoneInterest">Phone Model Interest</Label>
                <Select value={phoneInterest} onValueChange={setPhoneInterest}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="iphone">iPhone (All Models)</SelectItem>
                    <SelectItem value="samsung">Samsung Galaxy</SelectItem>
                    <SelectItem value="pixel">Google Pixel</SelectItem>
                    <SelectItem value="other">Other Brands</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Tell us more about your inquiry..." rows={4} value={message} onChange={setMessage} />
              </div>
              <Button type="submit" className="w-full" disabled={submitting}>
                <Spinner className="mr-2 h-4 w-4" />
                <div>Send Message</div>
              </Button>
            </form>
          </CardContent>
        </Card>
        <div className="space-y-6 lg:sticky lg:top-24">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ClockIcon className="h-6 w-6" />
                <div>Store Hours</div>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-medium">Monday - Friday</span>
                  <span className="text-sm text-muted-foreground">9:00 AM - 8:00 PM</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium">Saturday</span>
                  <span className="text-sm text-muted-foreground">10:00 AM - 6:00 PM</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium">Sunday</span>
                  <span className="text-sm text-muted-foreground">11:00 AM - 5:00 PM</span>
                </div>
              </div>
              <Alert variant="destructive">
                <AlertTitle>Holiday Hours</AlertTitle>
                <AlertDescription>Christmas Eve: 9:00 AM - 4:00 PM | New Year's Day: Closed</AlertDescription>
              </Alert>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <EnvelopeIcon className="h-6 w-6" />
                <div>Quick Contact</div>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                <PhoneIcon className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">(555) 123-4567</p>
                  <p className="text-sm text-muted-foreground">Available 9AM-8PM</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                <EnvelopeIcon className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">hello@phoneshop.com</p>
                  <p className="text-sm text-muted-foreground">Response within 24h</p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="pt-0">
              <Button variant="outline" className="w-full" onClick={openLiveChat}>
                <MessageCircleIcon className="h-4 w-4 mr-2" />
                <div>Live Chat</div>
              </Button>
            </CardFooter>
          </Card>
          <Button variant="link" className="w-full text-muted-foreground hover:text-foreground p-0 h-auto">
            <Link to="/support">Need help now? Visit our Support Center →</Link>
          </Button>
        </div>
      </div>
      <Dialog open={successOpen} onOpenChange={setSuccessOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex flex-col items-center gap-2">
              <CheckCircleIcon className="h-12 w-12 text-green-500" />
              <div>Message Sent!</div>
            </DialogTitle>
            <DialogDescription className="text-center">Thanks for reaching out! We'll respond within 24 hours.</DialogDescription>
          </DialogHeader>
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <div className="flex-1 bg-muted p-4 rounded-lg text-center">
              <div className="font-mono font-bold text-2xl text-primary mb-1">WELCOME10</div>
              <p className="text-sm text-muted-foreground">10% off your next purchase</p>
            </div>
            <Button asChild>
              <Link to="/products">
                <ShoppingBagIcon className="h-4 w-4 mr-2" />
                <div>Shop Now</div>
              </Link>
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
