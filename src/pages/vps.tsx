import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { Slider } from '@/components/ui/slider'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { Link } from 'react-router-dom'
import { BoltIcon, CircleStackIcon, CpuChipIcon, GlobeAltIcon, ServerIcon, ServerStackIcon } from '@heroicons/react/24/outline'

export function Vpshosting() {
  React.useEffect(() => { document.title = "VpsHosting" }, [])
  const [activeTab, setActiveTab] = React.useState(false)
  const [cpuValue, setCpuValue] = React.useState('')
  const [ramValue, setRamValue] = React.useState('')
  const [storageValue, setStorageValue] = React.useState('')
  const [osValue, setOsValue] = React.useState('')

  return (
    <div className="min-h-screen bg-background pb-12">
      <div className="bg-card border-b border-border px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">VpsHosting</h1>
          <p className="mt-2 max-w-2xl text-lg text-muted-foreground">High-performance virtual private servers for developers and scaling businesses. Configure your ideal environment below.</p>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardContent className="p-6 flex items-center space-x-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <CpuChipIcon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Compute</p>
                <p className="text-2xl font-bold text-foreground">$state.cpuDisplay</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 flex items-center space-x-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <ServerStackIcon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Memory</p>
                <p className="text-2xl font-bold text-foreground">$state.ramDisplay</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 flex items-center space-x-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <CircleStackIcon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Storage</p>
                <p className="text-2xl font-bold text-foreground">$state.storageDisplay</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 flex items-center space-x-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <GlobeAltIcon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Network</p>
                <p className="text-2xl font-bold text-foreground">10 Gbps</p>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Tabs defaultValue="configure" value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-3 mb-6">
                <TabsTrigger value="configure">Resources</TabsTrigger>
                <TabsTrigger value="os">Operating System</TabsTrigger>
                <TabsTrigger value="benchmarks">Benchmarks</TabsTrigger>
              </TabsList>
              <TabsContent value="configure">
                <Card>
                  <CardHeader>
                    <CardTitle>Scale Your Resources</CardTitle>
                    <CardDescription>Drag the sliders to allocate dedicated compute, memory, and storage to your instance.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-10 py-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <Label className="text-base font-semibold">CPU Cores</Label>
                        <Badge variant="secondary">$state.cpuDisplay</Badge>
                      </div>
                      <Slider value={cpuValue} onValueChange={setCpuValue} max={32} min={1} step={1} />
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <Label className="text-base font-semibold">Memory (RAM)</Label>
                        <Badge variant="secondary">$state.ramDisplay</Badge>
                      </div>
                      <Slider value={ramValue} onValueChange={setRamValue} max={128} min={2} step={2} />
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <Label className="text-base font-semibold">NVMe Storage</Label>
                        <Badge variant="secondary">$state.storageDisplay</Badge>
                      </div>
                      <Slider value={storageValue} onValueChange={setStorageValue} max={2000} min={50} step={50} />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="os">
                <Card>
                  <CardHeader>
                    <CardTitle>Select Operating System</CardTitle>
                    <CardDescription>Choose a distribution to pre-install on your server. Custom ISOs can be mounted post-deployment.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ToggleGroup type="single" value={osValue} onValueChange={setOsValue} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <ToggleGroupItem value="ubuntu" className="h-32 flex flex-col items-center justify-center gap-2 border-2 data-[state=on]:border-primary data-[state=on]:bg-primary/5">
                        <ServerIcon className="h-8 w-8" />
                        <span className="font-medium">Ubuntu 22.04 LTS</span>
                      </ToggleGroupItem>
                      <ToggleGroupItem value="debian" className="h-32 flex flex-col items-center justify-center gap-2 border-2 data-[state=on]:border-primary data-[state=on]:bg-primary/5">
                        <ServerIcon className="h-8 w-8" />
                        <span className="font-medium">Debian 12</span>
                      </ToggleGroupItem>
                      <ToggleGroupItem value="centos" className="h-32 flex flex-col items-center justify-center gap-2 border-2 data-[state=on]:border-primary data-[state=on]:bg-primary/5">
                        <ServerIcon className="h-8 w-8" />
                        <span className="font-medium">CentOS Stream 9</span>
                      </ToggleGroupItem>
                    </ToggleGroup>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="benchmarks">
                <Card>
                  <CardHeader>
                    <CardTitle>Performance Benchmarks</CardTitle>
                    <CardDescription>Average scores based on recent Geekbench 6 and FIO tests across our fleet.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Metric</TableHead>
                          <TableHead>4 Cores</TableHead>
                          <TableHead>8 Cores</TableHead>
                          <TableHead>16 Cores</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">Geekbench Multi-Core</TableCell>
                          <TableCell>4,120</TableCell>
                          <TableCell>7,850</TableCell>
                          <TableCell>14,200</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Random Read IOPS</TableCell>
                          <TableCell>85,000</TableCell>
                          <TableCell>120,000</TableCell>
                          <TableCell>210,000</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Network Throughput</TableCell>
                          <TableCell>2.5 Gbps</TableCell>
                          <TableCell>5 Gbps</TableCell>
                          <TableCell>10 Gbps</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardHeader className="bg-muted/50 border-b border-border">
                <CardTitle>Order Summary</CardTitle>
                <CardDescription>Real-time estimated pricing based on your configuration.</CardDescription>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">Compute</span>
                  <span className="font-medium text-foreground">$state.cpuDisplay</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">Memory</span>
                  <span className="font-medium text-foreground">$state.ramDisplay</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">Storage</span>
                  <span className="font-medium text-foreground">$state.storageDisplay</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">OS Image</span>
                  <span className="font-medium text-foreground capitalize">$state.osValue</span>
                </div>
                <Separator className="my-4" />
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Total Estimated Cost</p>
                    <p className="text-xs text-muted-foreground mt-1">Billed hourly, cancel anytime.</p>
                  </div>
                  <div className="text-right">
                    <span className="text-3xl font-bold text-primary">$state.estimatedPrice</span>
                    <span className="text-sm text-muted-foreground ml-1">/mo</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="bg-muted/30 pt-6">
                <Link className="w-full" to="/support">
                  <Button size="lg" className="w-full text-base">
                    <BoltIcon className="mr-2 h-5 w-5" />
                    <span>Deploy Server</span>
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
