import React from 'react'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Toggle } from '@/components/ui/toggle'
import { CheckCircleIcon, CircleIcon, EyeIcon, Grid3x3Icon, TrophyIcon, UserIcon, XCircleIcon } from '@heroicons/react/24/outline'
import { toggleShadowHints } from '@/lib/achievements-logic'

export function Achievements() {
  React.useEffect(() => { document.title = "Achievements" }, [])
  const [showShadowHints, setShowShadowHints] = React.useState(false)

  return (
    <div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Achievements</CardTitle>
              <CardDescription>Track your progress across 100+ milestones. Complete tiers to unlock rare rewards and shadow achievements.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Progress Tracker</h3>
                  <Badge variant="outline">
                    <div className="flex items-center gap-1">
                      <div className="h-3 w-3 bg-green-500 rounded-full animate-pulse" />
                      <span>$state.completionPercent%</span>
                    </div>
                  </Badge>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircleIcon className="h-4 w-4 text-green-500" />
                    <span>$state.unlockedCount unlocked</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-destructive">
                    <XCircleIcon className="h-4 w-4" />
                    <span>$state.missingAchievements.length missing</span>
                  </div>
                </div>
              </div>
              <Toggle pressed={showShadowHints} onPressedChange={toggleShadowHints} className="flex items-center justify-between w-full p-3 rounded-md border">
                <div className="space-y-1">
                  <p className="text-sm font-medium">Show Shadow Hints</p>
                  <p className="text-xs text-muted-foreground">Reveal hidden unlock conditions for shadow achievements</p>
                </div>
              </Toggle>
              <div className="pt-4 border-t">
                <Button className="w-full" size="lg">
                  <UserIcon className="h-4 w-4 mr-2" />
                  <span>View Profile</span>
                </Button>
              </div>
            </CardContent>
          </Card>
          <div className="space-y-6 lg:sticky lg:top-8 lg:self-start">
            <Card>
              <CardHeader>
                <CardTitle>
                  <div className="flex items-center gap-2">
                    <TrophyIcon className="h-5 w-5" />
                    <span>Achievement Timeline</span>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2 max-h-64 overflow-y-auto">
                  <div className="flex items-center gap-3 p-2 rounded-lg bg-accent/50">
                    <Avatar className="flex-shrink-0">
                      <AvatarFallback>GW</AvatarFallback>
                    </Avatar>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium truncate">Golden Cookie Hoarder</p>
                      <p className="text-xs text-muted-foreground">2024-01-15 • 1,234 cookies</p>
                    </div>
                    <Badge variant="secondary">Shadow</Badge>
                  </div>
                  <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-accent">
                    <Avatar className="flex-shrink-0">
                      <AvatarFallback>BS</AvatarFallback>
                    </Avatar>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium truncate">Bronze Starter</p>
                      <p className="text-xs text-muted-foreground">2024-01-10 • First cookie clicked</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-12" />
                      <TableHead>Tier</TableHead>
                      <TableHead className="text-right">Count</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <CircleIcon className="h-4 w-4 text-amber-500" />
                      </TableCell>
                      <TableCell className="font-medium">Bronze</TableCell>
                      <TableCell className="text-right">25 / 30</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <CircleIcon className="h-4 w-4 text-gray-400" />
                      </TableCell>
                      <TableCell className="font-medium">Silver</TableCell>
                      <TableCell className="text-right">18 / 25</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <CircleIcon className="h-4 w-4 text-yellow-500" />
                      </TableCell>
                      <TableCell className="font-medium">Gold</TableCell>
                      <TableCell className="text-right">12 / 20</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <EyeIcon className="h-4 w-4 text-slate-500" />
                      </TableCell>
                      <TableCell className="font-medium">Shadow</TableCell>
                      <TableCell className="text-right">3 / 15</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="mt-12 lg:mt-0">
          <Card>
            <CardHeader>
              <CardTitle>
                <div className="flex items-center gap-2">
                  <Grid3x3Icon className="h-5 w-5" />
                  <span>Achievement Gallery</span>
                </div>
              </CardTitle>
              <Tabs defaultValue="bronze" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="bronze">Bronze</TabsTrigger>
                  <TabsTrigger value="silver">Silver</TabsTrigger>
                  <TabsTrigger value="gold">Gold</TabsTrigger>
                  <TabsTrigger value="shadow">Shadow</TabsTrigger>
                </TabsList>
                <TabsContent value="bronze" className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <Card className="group relative overflow-hidden">
                      <CardHeader className="pb-2">
                        <div className="flex items-center gap-2">
                          <CheckCircleIcon className="h-6 w-6 text-green-500" />
                          <CardTitle className="text-base leading-tight">First Click</CardTitle>
                        </div>
                        <CardDescription className="text-xs">Click your first cookie</CardDescription>
                      </CardHeader>
                    </Card>
                    <Card className="group relative overflow-hidden">
                      <CardHeader className="pb-2">
                        <div className="flex items-center gap-2">
                          <CircleIcon className="h-6 w-6 text-amber-400/50" />
                          <CardTitle className="text-base leading-tight">Cookie Novice</CardTitle>
                        </div>
                        <CardDescription className="text-xs">Bake 100 cookies</CardDescription>
                      </CardHeader>
                    </Card>
                  </div>
                </TabsContent>
                <TabsContent value="shadow" className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card className="group relative overflow-hidden">
                      <CardHeader className="pb-2">
                        <div className="flex items-center gap-2 opacity-50 group-hover:opacity-100 transition-all">
                          <EyeIcon className="h-6 w-6 text-slate-400" />
                          <CardTitle className="text-base leading-tight">???</CardTitle>
                        </div>
                        <CardDescription className="text-xs">$state.showShadowHints ? 'Click exactly 69 cookies while wearing a tinfoil hat' : '??? (Shadow Achievement)'</CardDescription>
                      </CardHeader>
                    </Card>
                  </div>
                </TabsContent>
              </Tabs>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  )
}
