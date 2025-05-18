"use client"

import { ReactNode } from "react"
import { 
  SiReact, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiTypescript, 
  SiNodedotjs, 
  SiExpress,
  SiPython, 
  SiDjango, 
  SiMongodb, 
  SiPostgresql, 
  SiFirebase 
} from "react-icons/si"

type IconProps = {
  name: string
  className?: string
}

const techIcons: Record<string, ReactNode> = {
  "React": <SiReact />,
  "Next.js": <SiNextdotjs />,
  "Tailwind CSS": <SiTailwindcss />,
  "TypeScript": <SiTypescript />,
  "Node.js": <SiNodedotjs />,
  "Express": <SiExpress />,
  "Python": <SiPython />,
  "Django": <SiDjango />,
  "MongoDB": <SiMongodb />,
  "PostgreSQL": <SiPostgresql />,
  "Firebase": <SiFirebase />
}

export default function TechIcon({ name, className }: IconProps) {
  return (
    <div className={className}>
      {techIcons[name] || name}
    </div>
  )
}