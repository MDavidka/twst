import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Progress } from '@/components/ui/progress'
import { Separator } from '@/components/ui/separator'
import { Switch } from '@/components/ui/switch'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { ArrowDownOnSquareIcon, DownloadIcon, MagnifyingGlassIcon, PlayIcon, ShareIcon } from '@heroicons/react/24/outline'
import { goToPlay, exportAchievements, shareAllAchievements } from '@/lib/achievements-logic'

export function Achievements() {
  React.useEffect(() => { document.title = "Achievements" }, [])
  const [search, setSearch] = React.useState('')
  const [categoryFilter, setCategoryFilter] = React.useState('')
  const [nextMilestoneProgress, setNextMilestoneProgress] = React.useState('')

  return (
    <div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <Card className="w-full lg:max-w-2xl">
            <CardHeader>
              <CardTitle>
                <h1 className="text-3xl lg:text-4xl font-heading">Achievements</h1>
              </CardTitle>
              <CardDescription>Track your progress through 100+ challenging achievements. Unlock rare badges and compete on the global leaderboard.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <Label htmlFor="search">Search achievements</Label>
                <div className="relative">
                  <Input id="search" placeholder="Search by name or category..." value={search} onChange={setSearch} />
                  <MagnifyingGlassIcon className="h-4 w-4 absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Categories</h3>
                <ToggleGroup type="single" value={categoryFilter} onValueChange={setCategoryFilter} className="flex flex-wrap gap-1">
                  <ToggleGroupItem value="all" className="data-[state=on]:bg-primary data-[state=on]:text-primary-foreground h-8 px-3">All</ToggleGroupItem>
                  <ToggleGroupItem value="clicking" className="data-[state=on]:bg-primary data-[state=on]:text-primary-foreground h-8 px-3">Clicking</ToggleGroupItem>
                  <ToggleGroupItem value="buildings" className="data-[state=on]:bg-primary data-[state=on]:text-primary-foreground h-8 px-3">Buildings</ToggleGroupItem>
                  <ToggleGroupItem value="grandmapocalypse" className="data-[state=on]:bg-primary data-[state=on]:text-primary-foreground h-8 px-3">Grandmapocalypse</ToggleGroupItem>
                </ToggleGroup>
              </div>
              <Separator className="my-6" />
              <div className="space-y-4 max-h-[600px] overflow-y-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card>
                    <CardContent className="p-6 space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="flex -space-x-2">
                          <Badge variant="secondary">Common</Badge>
                          <Badge variant="outline">87%</Badge>
                        </div>
                        <div className="flex-1 text-right">
                          <Switch checked="$state.achievements[0].unlocked" onCheckedChange="$handler.toggleAchievement[0]" />
                        </div>
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-medium">First click</h4>
                        <p className="text-sm text-muted-foreground">Click the giant cookie</p>
                      </div>
                      <Progress value="$state.achievements[0].progress" />
                      <Button variant="ghost" size="sm" onClick="$handler.shareAchievement[0]">
                        <ShareIcon className="h-4 w-4 mr-2" />
                        <span>Share</span>
                      </Button>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6 space-y-4">
                      <div className="flex items-center gap-3">
                        <Badge variant="default">Rare</Badge>
                        <Badge variant="outline">23%</Badge>
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-medium">Cookie Monster of legend</h4>
                        <p className="text-sm text-muted-foreground">Bake 1 sextillion cookies</p>
                      </div>
                      <Progress value="$state.achievements[1].progress" />
                    </CardContent>
                  </Card>
                </div>
              </div>
              <div className="pt-6 border-t">
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold">42/127</div>
                  <div className="text-sm text-muted-foreground">33% Complete</div>
                </div>
              </div>
            </CardContent>
          </Card>
          <div className="space-y-6 lg:sticky lg:top-8 lg:max-w-md">
            <Card>
              <CardHeader>
                <CardTitle>Next Milestone</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="text-lg font-semibold">Elder Cent</div>
                  <p className="text-sm text-muted-foreground">Own 100 grandmas</p>
                </div>
                <Progress value={nextMilestoneProgress} />
                <Button className="w-full" onClick={goToPlay}>
                  <PlayIcon className="h-4 w-4 mr-2" />
                  <span>Grind for it!</span>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Completion Roadmap</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <div>Basic clicking (10 achievements)</div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                  <div className="w-2 h-2 bg-primary/70 rounded-full" />
                  <div>Building mastery (25 achievements)</div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg">
                  <div className="w-2 h-2 bg-muted rounded-full" />
                  <div>Shadow achievements (15 achievements)</div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>
                  <div className="flex items-center gap-2">
                    <DownloadIcon className="h-5 w-5" />
                    <span>Export Progress</span>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full mb-3" onClick={exportAchievements}>
                  <ArrowDownOnSquareIcon className="h-4 w-4 mr-2" />
                  <span>Download JSON</span>
                </Button>
                <Button className="w-full" onClick={shareAllAchievements}>
                  <ShareIcon className="h-4 w-4 mr-2" />
                  <span>Share Profile</span>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
