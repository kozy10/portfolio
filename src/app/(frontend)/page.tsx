import { Profile } from '@/components/Custom/profile'
import { About } from '@/components/Custom/about'
import { Skill } from '@/components/Custom/skill'
import { Header } from '@/components/Custom/shared/header'
import Experience from '@/components/Custom/experience'
import { Project } from '@/components/Custom/project'
import Blog from '@/components/Custom/blog'

export default function Page() {
  return (
    <>
      {/* Header is only visible on screens smaller than lg */}
      <div className="lg:hidden">
        <Header />
      </div>

      <main className="relative mx-auto flex max-w-screen-lg justify-center">
        <div className="sticky top-0 hidden h-screen p-8 lg:block">
          <Profile />
        </div>

        <div className="max-w-3xl flex-1 space-y-16 px-4 py-8">
          <div id="about" className="scroll-mt-8">
            <About />
          </div>
          <div id="skill" className="scroll-mt-8">
            <Skill />
          </div>
          <div id="experience" className="scroll-mt-8">
            <Experience />
          </div>
          <div id="project" className="scroll-mt-8">
            <Project />
          </div>
          <div id="blog" className="scroll-mt-8">
            <Blog />
          </div>
        </div>
      </main>
    </>
  )
}
