"use client"

import { Code } from "lucide-react"
import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
}

export function Logo({ className }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <Code 
        size={24} 
        className="text-primary" 
        strokeWidth={2.5}
      />
      <span className="font-bold text-xl">
        Dev<span className="text-blue-500">Nux</span>Code
      </span>
    </div>
  )
}