import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import { Slider } from '@/components/ui/slider'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { Link } from 'react-router-dom'
import { CircleStackIcon, CpuChipIcon, CurrencyDollarIcon, ServerIcon } from '@heroicons/react/24/outline'
import { onCheckout } from '@/lib/vps-logic'

export function Vpshosting() {
  React.useEffect(() => { document.title = "VpsHosting" }, [])
  const [managementTier, setManagementTier] = React.useState('')
  const [cpuSlider, setCpuSlider] = React.useState('')
  const [ramSlider, setRamSlider] = React.useState('')
  const [storageSlider, setStorageSlider] = React.useState('')
  const [os, setOs] = React.useState('')
  const [controlPanel, setControlPanel] = React.useState('')
  const [location, setLocation] = React.useState('')

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        <header className="space-y-2">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">VpsHosting</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">High-performance virtual private servers with dedicated resources. Scale instantly as your business grows.</p>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Compute</CardTitle>
              <CpuChipIcon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$state.cpuDisplay</div>
              <p className="text-xs text-muted-foreground">Dedicated vCPU Cores</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Memory</CardTitle>
              <CircleStackIcon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$state.ramDisplay</div>
              <p className="text-xs text-muted-foreground">ECC DDR4 RAM</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Storage</CardTitle>
              <ServerIcon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$state.storageDisplay</div>
              <p className="text-xs text-muted-foreground">Enterprise NVMe SSD</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Estimated Cost</CardTitle>
              <CurrencyDollarIcon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">$state.priceDisplay</div>
              <p className="text-xs text-muted-foreground">Billed monthly, cancel anytime</p>
            </CardContent>
          </Card>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 space-y-6">
            <Tabs value={managementTier} onValueChange={setManagementTier} defaultValue="unmanaged" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="unmanaged">Unmanaged VPS</TabsTrigger>
                <TabsTrigger value="managed">Fully Managed VPS</TabsTrigger>
              </TabsList>
              <TabsContent value="unmanaged">
                <Card>
                  <CardHeader>
                    <CardTitle>Unmanaged Server Specifications</CardTitle>
                    <CardDescription>Full root access and complete control for experienced sysadmins and developers.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Feature</TableHead>
                          <TableHead>Included</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">Root Access</TableCell>
                          <TableCell>Full SSH Access</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Operating System</TableCell>
                          <TableCell>User Installed & Managed</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Security & Updates</TableCell>
                          <TableCell>User Responsibility</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Technical Support</TableCell>
                          <TableCell>Hardware & Network Only</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="managed">
                <Card>
                  <CardHeader>
                    <CardTitle>Managed Server Specifications</CardTitle>
                    <CardDescription>We handle the technical heavy lifting so you can focus on your business.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Feature</TableHead>
                          <TableHead>Included</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">Root Access</TableCell>
                          <TableCell>Optional / Upon Request</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Operating System</TableCell>
                          <TableCell>Automated Updates & Patches</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Security & Updates</TableCell>
                          <TableCell>24/7 Proactive Monitoring & Firewall</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Technical Support</TableCell>
                          <TableCell>Priority Application & Server Support</TableCell>
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
              <CardHeader>
                <CardTitle>Configure Server</CardTitle>
                <CardDescription>Adjust resources to match your workload.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <Label>CPU Cores</Label>
                    <span className="text-sm text-muted-foreground">$state.cpuDisplay</span>
                  </div>
                  <Slider value={cpuSlider} onValueChange={setCpuSlider} max={32} min={1} step={1} />
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <Label>Memory (RAM)</Label>
                    <span className="text-sm text-muted-foreground">$state.ramDisplay</span>
                  </div>
                  <Slider value={ramSlider} onValueChange={setRamSlider} max={128} min={2} step={2} />
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <Label>NVMe Storage</Label>
                    <span className="text-sm text-muted-foreground">$state.storageDisplay</span>
                  </div>
                  <Slider value={storageSlider} onValueChange={setStorageSlider} max={2000} min={40} step={40} />
                </div>
                <Separator className="my-4" />
                <div className="space-y-3">
                  <Label>Operating System</Label>
                  <ToggleGroup type="single" value={os} onValueChange={setOs} className="grid grid-cols-3 gap-2">
                    <ToggleGroupItem value="ubuntu" variant="outline" className="w-full">Ubuntu</ToggleGroupItem>
                    <ToggleGroupItem value="centos" variant="outline" className="w-full">CentOS</ToggleGroupItem>
                    <ToggleGroupItem value="debian" variant="outline" className="w-full">Debian</ToggleGroupItem>
                  </ToggleGroup>
                </div>
                <div className="space-y-3">
                  <Label>Control Panel</Label>
                  <Select value={controlPanel} onValueChange={setControlPanel}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Control Panel" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="none">None (CLI Only)</SelectItem>
                      <SelectItem value="cpanel">cPanel / WHM</SelectItem>
                      <SelectItem value="plesk">Plesk Obsidian</SelectItem>
                      <SelectItem value="webmin">Webmin</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-3">
                  <Label>Data Center Location</Label>
                  <Select value={location} onValueChange={setLocation}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Region" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="us-east">New York, USA (US-East)</SelectItem>
                      <SelectItem value="us-west">San Francisco, USA (US-West)</SelectItem>
                      <SelectItem value="eu-central">Frankfurt, DE (EU-Central)</SelectItem>
                      <SelectItem value="ap-southeast">Singapore (AP-Southeast)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col space-y-4">
                <Button className="w-full" size="lg" onClick={onCheckout}>Deploy Now</Button>
                <p className="text-sm text-center text-muted-foreground">
                  <span>Need something simpler? </span>
                  <Link className="text-primary hover:underline font-medium" to="/pricing">View standard tiers</Link>
                </p>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
