'use client'

import { Menu, Moon, Sun } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { useTheme } from '@/providers/Theme'

export const Hamburger = () => {
  const { theme, setTheme } = useTheme()
  const menuItems = [
    { href: '/about', label: 'About' },
    { href: '/work', label: 'Work' },
    { href: '/testimonials', label: 'Testimonials' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <Sheet>
      <SheetTrigger asChild>
        <div>
          <Menu className="size-6" />
          <span className="sr-only">Toggle menu</span>
        </div>
      </SheetTrigger>
      <SheetContent className="w-[300px] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle>
            <Link href="/" className="text-2xl font-bold">
              {'K・K'}
            </Link>
          </SheetTitle>
        </SheetHeader>
        <nav className="mt-8 flex flex-col space-y-4">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xl transition-colors hover:text-neutral-500"
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-8 flex flex-col space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xl">Switch Theme</span>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              >
                <Sun className="size-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute size-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </div>
            <Link href="/cv" className="w-full">
              <Button className="w-full bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200">
                Download CV
              </Button>
            </Link>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
