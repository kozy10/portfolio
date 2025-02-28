'use client'

import { CopyIcon, GithubIcon, LinkedinIcon, Moon, Sun } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { useTheme } from '@/providers/Theme'

// Define menu items as a constant
type MenuItem = {
  id: string
  label: string
}

const MENU_ITEMS: MenuItem[] = [
  { id: 'about', label: 'About' },
  { id: 'skill', label: 'Skill' },
  { id: 'experience', label: 'Experience' },
  { id: 'project', label: 'Project' },
  { id: 'blog', label: 'Article' },
]

export function Profile() {
  const { theme, setTheme } = useTheme()
  const [activeSection, setActiveSection] = useState<string>('about')

  useEffect(() => {
    const handleScroll = () => {
      const sections = MENU_ITEMS.map((item) => item.id)

      // Check if we're at the top of the page
      if (window.scrollY < 100) {
        setActiveSection('about')
        return
      }

      // Check if we're at the bottom of the page
      const isAtBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 100
      if (isAtBottom) {
        // If at the bottom, activate the last section
        const lastSection = sections[sections.length - 1]
        if (lastSection) {
          setActiveSection(lastSection)
        }
        return
      }

      // Find the section that is currently in view
      let foundActiveSection = false
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          // If the section is in the viewport (with some buffer for better UX)
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section)
            foundActiveSection = true
            break
          }
        }
      }

      // If no section is in view and we're not at the top, find the closest section
      if (!foundActiveSection && window.scrollY >= 100) {
        // Find the section closest to the viewport
        let closestSection = sections[0] || 'about' // Default to 'about' if sections is empty
        let closestDistance = Infinity

        for (const section of sections) {
          const element = document.getElementById(section)
          if (element) {
            const rect = element.getBoundingClientRect()
            const distance = Math.abs(rect.top)
            if (distance < closestDistance) {
              closestDistance = distance
              closestSection = section
            }
          }
        }

        setActiveSection(closestSection)
      }
    }

    window.addEventListener('scroll', handleScroll)
    // Initial check
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Function to determine if a section is active
  const isActive = (section: string) => activeSection === section

  return (
    <Card className="relative flex w-72 flex-col gap-4 p-6">
      <div
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className="absolute right-2 top-2 flex size-8 cursor-pointer items-center justify-center"
      >
        <Sun
          size={24}
          className="absolute rotate-0 scale-0 text-muted-foreground transition-all dark:rotate-0 dark:scale-100"
        />
        <Moon
          size={24}
          className="absolute rotate-0 scale-100 text-muted-foreground transition-all dark:rotate-90 dark:scale-0"
        />
        <span className="sr-only">Toggle theme</span>
      </div>

      <div className="flex flex-col pt-4">
        <h1 className="text-3xl font-bold text-foreground">Kentaro Kojima</h1>
        <p className="text-xl text-foreground">Full-Stack Engineer</p>
      </div>

      <div className="flex items-center gap-2 text-muted-foreground">
        <svg viewBox="0 0 24 24" fill="none" className="size-5" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
        Vancouver, Canada
      </div>

      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          <Link href="https://github.com/kozy10" target="_blank">
            <GithubIcon className="size-6 text-muted-foreground hover:text-foreground transition-colors" />
          </Link>
          <Link href="https://www.linkedin.com/in/kentaro-kojima" target="_blank">
            <LinkedinIcon className="size-6 text-muted-foreground hover:text-foreground transition-colors" />
          </Link>
        </div>
      </div>

      <Link
        href="https://drive.google.com/file/d/1YL-jXcGbDkZZB-k3qWm0on8FY7-r0cJ4/view?usp=sharing"
        target="_blank"
      >
        <Button className="w-full mt-6">See Resume</Button>
      </Link>

      <div className="w-full space-y-4 pt-8">
        <div className="space-y-4">
          {MENU_ITEMS.map((item) => (
            <div key={item.id} className="flex items-center gap-3">
              <div
                className={`h-[1.5px] ${isActive(item.id) ? 'w-16' : 'w-8'} ${
                  isActive(item.id) ? 'bg-foreground' : 'bg-muted-foreground'
                } transition-all duration-300`}
              ></div>
              <Link
                href={`#${item.id}`}
                className={`block ${
                  isActive(item.id) ? 'text-foreground' : 'text-muted-foreground'
                } font-semibold transition-colors hover:text-foreground`}
              >
                {item.label}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Card>
  )
}
