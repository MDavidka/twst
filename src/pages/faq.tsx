import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Textarea } from '@/components/ui/textarea'
import { CalculatorIcon, ChartBarIcon, CpuChipIcon, ExclamationTriangleIcon, PaperAirplaneIcon, UserIcon, VideoCameraIcon } from '@heroicons/react/24/outline'
import { calculateOptimalBuild, submitBugReport } from '@/lib/faq-logic'

export function Faq() {
  React.useEffect(() => { document.title = "FAQ" }, [])
  const [searchQuery, setSearchQuery] = React.useState('')
  const [currentCps, setCurrentCps] = React.useState('')
  const [gameVersion, setGameVersion] = React.useState('')
  const [saveData, setSaveData] = React.useState('')
  const [bugDescription, setBugDescription] = React.useState('')

  return (
    <Card className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-7xl">
      <CardHeader>
        <CardTitle className="text-3xl lg:text-4xl font-heading">FAQ</CardTitle>
        <CardDescription>Everything you need to know about Cookie Clicker mechanics, strategies, saves, and troubleshooting.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-8">
        <Card className="lg:max-w-2xl">
          <CardHeader>
            <CardTitle>Search FAQs</CardTitle>
          </CardHeader>
          <CardContent>
            <Input placeholder="Search clicking optimization, grandma builds, save issues..." value={searchQuery} onChange={setSearchQuery} />
          </CardContent>
        </Card>
        <Tabs defaultValue="beginner" className="w-full">
          <TabsList>
            <TabsTrigger value="beginner">
              <span className="flex items-center gap-2">
                <UserIcon className="h-4 w-4" />
                <div>Beginner</div>
              </span>
            </TabsTrigger>
            <TabsTrigger value="advanced">
              <span className="flex items-center gap-2">
                <ChartBarIcon className="h-4 w-4" />
                <div>Advanced</div>
              </span>
            </TabsTrigger>
            <TabsTrigger value="technical">
              <span className="flex items-center gap-2">
                <CpuChipIcon className="h-4 w-4" />
                <div>Technical</div>
              </span>
            </TabsTrigger>
          </TabsList>
          <TabsContent value="beginner">
            <Accordion type="single" collapsible>
              <AccordionItem value="clicking-basics">
                <AccordionTrigger>How do I start clicking for maximum cookies?</AccordionTrigger>
                <AccordionContent>Click the big cookie in the center! Each click gives 1 cookie base (increases with upgrades). Hold click for auto-fire or get Cursor buildings for passive clicking.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="first-building">
                <AccordionTrigger>What should I buy first: Cursor or Grandma?</AccordionTrigger>
                <AccordionContent>{"Cursor first! They give passive CPS immediately. Buy 10 cursors before your first grandma. See <a href='/upgrades' className='font-medium hover:underline'>Upgrades</a> for full priority."}</AccordionContent>
              </AccordionItem>
              <AccordionItem value="cookies-per-second">
                <AccordionTrigger>Why is CPS more important than total cookies?</AccordionTrigger>
                <AccordionContent>CPS = Cookies Per Second (passive income). Total cookies matter for spending, but CPS determines long-term growth. Always prioritize highest CPS/building.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="save-game">
                <AccordionTrigger>How do I save my progress?</AccordionTrigger>
                <AccordionContent>{"Progress auto-saves every 30 seconds to localStorage. Manual save/export in <a href='/play' className='font-medium hover:underline'>Play</a> page. Import JSON files anytime."}</AccordionContent>
              </AccordionItem>
            </Accordion>
          </TabsContent>
          <TabsContent value="advanced">
            <Accordion type="single" collapsible>
              <AccordionItem value="optimal-build">
                <AccordionTrigger>What's the optimal early/mid/late game build?</AccordionTrigger>
                <AccordionContent>{"Early: 200 Cursors → 100 Grandmas → Farms. Mid: Mines → Factories. Late: Idleverses. Use the <a href='/upgrades' className='font-medium hover:underline'>Upgrade Planner</a> for exact ratios."}</AccordionContent>
              </AccordionItem>
              <AccordionItem value="synergies">
                <AccordionTrigger>How do synergies work between buildings?</AccordionTrigger>
                <AccordionContent>{"Certain upgrades boost specific building pairs (e.g. Elder Pact boosts Grandmas+Cursors). Check <a href='/achievements' className='font-medium hover:underline'>Achievements</a> for synergy triggers."}</AccordionContent>
              </AccordionItem>
            </Accordion>
          </TabsContent>
          <TabsContent value="technical">
            <Accordion type="single" collapsible>
              <AccordionItem value="browser-support">
                <AccordionTrigger>Which browsers work best?</AccordionTrigger>
                <AccordionContent>Chrome/Edge/Firefox (desktop/mobile). Safari works but click detection slower. Always use latest version for best performance.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="mobile-play">
                <AccordionTrigger>Can I play on mobile?</AccordionTrigger>
                <AccordionContent>Yes! Touch cookie to click. Use landscape mode. Save frequently as mobile localStorage can clear unexpectedly.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </TabsContent>
        </Tabs>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>
                <span className="flex items-center gap-2">
                  <CpuChipIcon className="h-5 w-5" />
                  <div>Optimal Build Calculator</div>
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label>Current CPS</Label>
                <Input type="number" placeholder={0} value={currentCps} onChange={setCurrentCps} />
              </div>
              <Button onClick={calculateOptimalBuild}>
                <CalculatorIcon className="h-4 w-4 mr-2" />
                <div>Recommend Next Purchase</div>
              </Button>
              <div className="pt-4">
                <div className="text-sm text-muted-foreground mb-2">Recommendation:</div>
                <Badge variant="default">$state.optimalBuild</Badge>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>
                <span className="flex items-center gap-2">
                  <VideoCameraIcon className="h-5 w-5" />
                  <div>Top Player Strategies</div>
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="aspect-video bg-muted rounded-md flex items-center justify-center">
                  <VideoCameraIcon className="h-12 w-12 text-muted-foreground" />
                </div>
                <p className="text-sm text-muted-foreground">Speedrun World Record (1 hour)</p>
                <div className="flex gap-2 flex-wrap">
                  <Badge variant="outline">Early Game</Badge>
                  <Badge variant="outline">Cursor Rush</Badge>
                  <Badge variant="outline">Idleverses</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>
              <span className="flex items-center gap-2">
                <ExclamationTriangleIcon className="h-5 w-5" />
                <div>Report a Bug</div>
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label>Game Version</Label>
              <Input value={gameVersion} readOnly />
            </div>
            <div>
              <Label>Save Data</Label>
              <Textarea rows={4} value={saveData} placeholder="Save data auto-populated..." />
            </div>
            <div>
              <Label>Bug Description</Label>
              <Textarea rows={4} placeholder="What happened? Steps to reproduce..." value={bugDescription} onChange={setBugDescription} />
            </div>
            <Button className="w-full" onClick={submitBugReport}>
              <PaperAirplaneIcon className="h-4 w-4 mr-2" />
              <div>Submit Bug Report</div>
            </Button>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  )
}
