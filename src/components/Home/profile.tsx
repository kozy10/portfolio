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
        // If at the bottom, activate the last section (Project)
        sections[sections.length - 1]
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
    <Card className="relative flex w-72 flex-col gap-8 p-6">
      <div
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className="absolute right-2 top-2 flex size-8 cursor-pointer items-center justify-center"
      >
        <Sun
          size={24}
          className="absolute rotate-0 scale-0 text-neutral-600 transition-all dark:rotate-0 dark:scale-100"
        />
        <Moon
          size={24}
          className="absolute rotate-0 scale-100 text-neutral-600 transition-all dark:rotate-90 dark:scale-0"
        />
        <span className="sr-only">Toggle theme</span>
      </div>

      <div className="flex flex-col pt-4">
        <h1 className="text-3xl font-bold">Kentaro Kojima</h1>
        <p className="text-lg text-neutral-600">Full-Stack Engineer</p>
      </div>

      <div className="w-full space-y-2">
        <div className="flex items-center gap-2 text-neutral-600">
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

        <div className="flex items-center gap-2 text-neutral-600">
          <svg viewBox="0 0 24 24" fill="none" className="size-5" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          <span>xxxxxx.gmail.com</span>
          <Button variant="ghost" size="icon" className="size-5">
            <CopyIcon className="size-4" />
          </Button>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex gap-4">
          <Link href="https://github.com" target="_blank">
            <GithubIcon className="size-6 text-neutral-600 hover:text-neutral-900" />
          </Link>
          <Link href="https://linkedin.com" target="_blank">
            <LinkedinIcon className="size-6 text-neutral-600 hover:text-neutral-900" />
          </Link>
        </div>
      </div>

      <Button className="w-full">See Resume</Button>

      <div className="w-full space-y-4">
        <div className="space-y-4">
          {MENU_ITEMS.map((item) => (
            <div key={item.id} className="flex items-center gap-3">
              <div
                className={`h-[1.5px] ${isActive(item.id) ? 'w-16' : 'w-8'} ${
                  isActive(item.id) ? 'bg-neutral-900' : 'bg-neutral-500'
                } transition-all duration-300`}
              ></div>
              <Link
                href={`#${item.id}`}
                className={`block ${
                  isActive(item.id) ? 'text-neutral-900' : 'text-neutral-500'
                } font-semibold transition-colors hover:text-neutral-900`}
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
