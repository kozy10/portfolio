'use client'

import { Menu, Moon, Sun } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { useTheme } from '@/providers/Theme'

export const Hamburger = () => {
  const { theme, setTheme } = useTheme()
  const [open, setOpen] = useState(false)

  const menuItems = [
    { href: '#about', label: 'About' },
    { href: '#skill', label: 'Skill' },
    { href: '#experience', label: 'Experience' },
    { href: '#project', label: 'Project' },
    { href: '#blog', label: 'Article' },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <div>
          <Menu className="size-6" />
          <span className="sr-only">Toggle menu</span>
        </div>
      </SheetTrigger>
      <SheetContent className="w-[300px] sm:w-[400px]">
        <nav className="mt-8 flex flex-col space-y-4">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xl transition-colors hover:text-neutral-500"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection(item.href.substring(1))
                setOpen(false)
              }}
            >
              {item.label}
            </a>
          ))}
          <div className="mt-8 flex flex-col space-y-4">
            <div className="flex items-center justify-between">
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
            <Link
              href="https://drive.google.com/file/d/1YL-jXcGbDkZZB-k3qWm0on8FY7-r0cJ4/view?usp=sharing"
              target="_blank"
              className="w-full"
            >
              <Button className="w-full bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200">
                See Resume
              </Button>
            </Link>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
