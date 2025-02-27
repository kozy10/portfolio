import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiGo,
  SiAngular,
  SiPostgresql,
  SiMysql,
  SiAmazondynamodb,
  SiRedis,
  SiAmazonwebservices,
  SiGooglecloud,
  SiGraphql,
  SiTerraform,
  SiAlgolia,
  IconType,
} from '@icons-pack/react-simple-icons'

import { Section } from '@/components/Custom/shared/section'
import { cn } from '@/utilities/ui'

interface SkillData {
  icon: IconType
  name: string
  color?: string
}

const languageSkills: SkillData[] = [
  { icon: SiJavascript, name: 'Javascript', color: '#F7DF1E' },
  { icon: SiTypescript, name: 'Typescript', color: '#3178C6' },
  { icon: SiReact, name: 'React', color: '#61DAFB' },
  { icon: SiNextdotjs, name: 'Next.js' },
  { icon: SiAngular, name: 'Angular.js', color: '#DD0031' },
  { icon: SiNodedotjs, name: 'Node.js', color: '#339933' },
  { icon: SiGo, name: 'Go', color: '#00ADD8' },
]

const dbSkills: SkillData[] = [
  { icon: SiPostgresql, name: 'PostgreSQL', color: '#4169E1' },
  { icon: SiMysql, name: 'MySQL', color: '#4479A1' },
  { icon: SiAmazondynamodb, name: 'DynamoDB', color: '#4053D6' },
  { icon: SiRedis, name: 'Redis', color: '#DC382D' },
]

const otherSkills: SkillData[] = [
  { icon: SiAmazonwebservices, name: 'AWS', color: '#FF9900' },
  { icon: SiGooglecloud, name: 'Google Cloud', color: '#4285F4' },
  { icon: SiGraphql, name: 'GraphQL', color: '#E10098' },
  { icon: SiTerraform, name: 'Terraform', color: '#844FBA' },
  { icon: SiAlgolia, name: 'Algolia', color: '#5468FF' },
]

interface SkillIconProps {
  icon: IconType
  name: string
  color?: string
  className?: string
}

function SkillIcon({ icon: Icon, name, color, className }: SkillIconProps) {
  return (
    <div className="flex w-20 flex-col items-center gap-2">
      <div className="bg-neutral-50 rounded-xl p-2">
        <div className={cn('w-12 h-12 flex items-center justify-center rounded-xl', className)}>
          <Icon size={32} color={color} />
        </div>
      </div>
      <span className="text-xs text-neutral-600">{name}</span>
    </div>
  )
}

interface SkillGroupProps {
  title: string
  skills: SkillData[]
}

function SkillGroup({ title, skills }: SkillGroupProps) {
  return (
    <div className="space-y-2">
      <h3 className="text-base font-semibold text-neutral-900">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <SkillIcon key={skill.name} icon={skill.icon} name={skill.name} color={skill.color} />
        ))}
      </div>
    </div>
  )
}

export function Skill() {
  return (
    <Section title="Skill">
      <div className="space-y-8">
        <SkillGroup title="Language / Framework" skills={languageSkills} />
        <SkillGroup title="DB" skills={dbSkills} />
        <SkillGroup title="Others" skills={otherSkills} />
      </div>
    </Section>
  )
}
