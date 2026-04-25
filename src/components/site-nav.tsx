import { Link, useLocation } from 'react-router-dom'
import { Bars3Icon } from '@heroicons/react/24/outline'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet'

const NAV_ITEMS = [
  { to: '/', label: 'Home' },
  { to: '/hosting', label: 'Hosting' },
  { to: '/domains', label: 'Domains' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export function SiteNav() {
  const { pathname } = useLocation()
  return (
    <nav className="w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between gap-2 px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="font-semibold tracking-tight">
          {NAV_ITEMS[0]?.label ?? 'Home'}
        </Link>
        <div className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <Link key={item.to} to={item.to}>
              <Button
                variant={pathname === item.to ? 'secondary' : 'ghost'}
                size="sm"
              >
                {item.label}
              </Button>
            </Link>
          ))}
        </div>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Bars3Icon className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64">
              <SheetTitle className="mb-4">Menu</SheetTitle>
              <div className="flex flex-col gap-1">
                {NAV_ITEMS.map((item) => (
                  <Link key={item.to} to={item.to}>
                    <Button
                      variant={pathname === item.to ? 'secondary' : 'ghost'}
                      className="w-full justify-start"
                    >
                      {item.label}
                    </Button>
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
