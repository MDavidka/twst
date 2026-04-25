import React from 'react'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ChartContainer } from '@/components/ui/chart'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Skeleton } from '@/components/ui/skeleton'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ArrowRightIcon, ArrowUpTrayIcon, CalendarIcon, CookieIcon, PencilIcon, ShareIcon, TrashIcon } from '@heroicons/react/24/outline'
import { setChartType } from '@/lib/profile-logic'

export function Profile() {
  React.useEffect(() => { document.title = "Profile" }, [])
  const [tournamentDate, setTournamentDate] = React.useState('')
  const [playerName, setPlayerName] = React.useState('')

  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Card className="max-w-4xl mx-auto mb-16">
        <CardHeader>
          <CardTitle>Profile</CardTitle>
          <CardDescription>Manage your Cookie Clicker account, view stats history, customize your cookie, and register for tournaments.</CardDescription>
        </CardHeader>
      </Card>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Stats History</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Select defaultValue="cookies" onValueChange={setChartType}>
                <SelectTrigger>
                  <SelectValue placeholder="Chart type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cookies">Cookies Over Time</SelectItem>
                  <SelectItem value="cps">CPS History</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="sm">
                <CalendarIcon className="h-4 w-4 mr-2" />
                <div>Date Range</div>
              </Button>
            </div>
            <ChartContainer className="h-64">
              <Skeleton className="h-full w-full" />
            </ChartContainer>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Quick Stats</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Total Cookies</span>
              <span>$state.totalCookies</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Total CPS</span>
              <span>$state.totalCps</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Play Time</span>
              <span>$state.playTime</span>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <Card>
          <CardHeader>
            <CardTitle>
              <CookieIcon className="h-6 w-6 mr-2" />
              <div>Cookie Skin Customizer</div>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex justify-center">
              <div className="relative">
                <AspectRatio ratio={1}>
                  <div className="w-full h-full bg-gradient-to-br from-amber-400 to-orange-500 rounded-full shadow-2xl flex items-center justify-center text-4xl font-bold border-8 border-amber-600 animate-pulse">🍪</div>
                </AspectRatio>
                <Badge variant="secondary" className="absolute -top-2 -right-2">$state.selectedSkin</Badge>
              </div>
            </div>
            <Tabs defaultValue="themes" className="w-full">
              <TabsList>
                <TabsTrigger value="themes">Themes</TabsTrigger>
                <TabsTrigger value="effects">Effects</TabsTrigger>
              </TabsList>
              <TabsContent value="themes">
                <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-3">
                  <Button size="sm" variant="$state.skins[0].selected ? 'default' : 'outline'" className="h-12 aspect-square p-0 bg-gradient-to-br from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600" />
                  <Button size="sm" variant="$state.skins[1].selected ? 'default' : 'outline'" className="h-12 aspect-square p-0 bg-gradient-to-br from-blue-400 to-indigo-500 hover:from-blue-500 hover:to-indigo-600" />
                  <Button size="sm" variant="$state.skins[2].selected ? 'default' : 'outline'" className="h-12 aspect-square p-0 bg-gradient-to-br from-emerald-400 to-teal-500 hover:from-emerald-500 hover:to-teal-600" />
                </div>
              </TabsContent>
            </Tabs>
            <Button className="w-full">Apply Skin</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Save Slots</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <div className="font-medium">Main Save</div>
                <p className="text-sm text-muted-foreground">1,234,567 cookies</p>
              </div>
              <div className="flex gap-1">
                <Button variant="ghost" size="sm">
                  <PencilIcon className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <TrashIcon className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 border rounded-lg bg-muted/50">
              <div>
                <div className="font-medium">Backup Save</div>
                <p className="text-sm text-muted-foreground">Empty slot</p>
              </div>
              <Button variant="ghost" size="sm">
                <ArrowUpTrayIcon className="h-4 w-4 mr-1" />
                <div>Import</div>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        <Card>
          <CardHeader>
            <CardTitle>Tournament Registration</CardTitle>
            <CardDescription>Join upcoming Cookie Clicker tournaments and compete for prizes.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Calendar mode="single" selected={tournamentDate} onSelect={setTournamentDate} className="rounded-md border" />
            <div className="space-y-2">
              <Label>Player Name</Label>
              <Input value={playerName} onChange={setPlayerName} placeholder="Enter your display name" />
            </div>
            <Button className="w-full">Register for Tournament</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Social Sharing</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="flex-1 justify-start">
                <ArrowUpTrayIcon className="h-4 w-4 mr-2" />
                <div>Export Save</div>
              </Button>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="flex-1 justify-start">
                <ShareIcon className="h-4 w-4 mr-2" />
                <div>Share Stats</div>
              </Button>
            </div>
            <Button variant="default" className="w-full">
              <ArrowRightIcon className="h-4 w-4 mr-2" />
              <div>Update Profile & Submit Score</div>
            </Button>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
