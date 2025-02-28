import { Profile } from '@/components/Custom/profile'
import { About } from '@/components/Custom/about'
import { Skill } from '@/components/Custom/skill'
import { Header } from '@/components/Custom/shared/header'
import Experience from '@/components/Custom/experience'
import { Project } from '@/components/Custom/project'
import Blog from '@/components/Custom/blog'
import Link from 'next/link'
import { GithubIcon, LinkedinIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Page() {
  return (
    <>
      {/* Header is only visible on screens smaller than lg */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-background">
        <Header />
      </div>

      {/* Mobile profile info - left aligned */}
      <div className="lg:hidden flex flex-col px-4 py-6 md:px-8 max-w-screen-md mx-auto mt-[56px]">
        <h1 className="text-4xl font-bold text-foreground">Kentaro Kojima</h1>
        <p className="text-2xl text-foreground">Full-Stack Engineer</p>
        <div className="mt-4 flex items-center justify-start gap-8">
          <div className="flex items-center gap-4">
            <Link href="https://github.com/kozy10" target="_blank">
              <GithubIcon className="size-6 text-muted-foreground hover:text-foreground transition-colors" />
            </Link>
            <Link href="https://www.linkedin.com/in/kentaro-kojima/" target="_blank">
              <LinkedinIcon className="size-6 text-muted-foreground hover:text-foreground transition-colors" />
            </Link>
          </div>
          <Link
            href="https://drive.google.com/file/d/1YL-jXcGbDkZZB-k3qWm0on8FY7-r0cJ4/view?usp=sharing"
            target="_blank"
          >
            <Button className="w-40">See Resume</Button>
          </Link>
        </div>
      </div>

      <main className="relative mx-auto flex max-w-screen-lg justify-center lg:pt-0 pt-[calc(56px)]">
        <div className="sticky top-0 hidden h-screen p-8 lg:block">
          <Profile />
        </div>

        <div className="max-w-3xl flex-1 space-y-16 px-4 py-8 md:px-8">
          <div id="about" className="lg:scroll-mt-8 scroll-mt-20">
            <About />
          </div>
          <div id="skill" className="lg:scroll-mt-8 scroll-mt-20">
            <Skill />
          </div>
          <div id="experience" className="lg:scroll-mt-8 scroll-mt-20">
            <Experience />
          </div>
          <div id="project" className="lg:scroll-mt-8 scroll-mt-20">
            <Project />
          </div>
          <div id="blog" className="lg:scroll-mt-8 scroll-mt-20">
            <Blog />
          </div>
        </div>
      </main>
    </>
  )
}
