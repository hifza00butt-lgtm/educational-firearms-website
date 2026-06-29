'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface FirearmCardProps {
  name: string
  year: string
  origin: string
  designer: string
  significance: string
  facts: string[]
}

export default function FirearmCard({
  name,
  year,
  origin,
  designer,
  significance,
  facts,
}: FirearmCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="group h-full">
      <div className="bg-card rounded-lg overflow-hidden border border-border hover:border-primary transition-all duration-300 h-full flex flex-col hover:shadow-lg hover:shadow-primary/20">
        {/* Image placeholder */}
        <div className="w-full h-40 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center relative overflow-hidden">
          <div className="text-6xl opacity-40 group-hover:scale-110 transition-transform duration-300">🎖️</div>
          <div className="absolute top-0 left-0 right-0 bg-primary/20 backdrop-blur-sm px-4 py-2">
            <p className="text-sm font-semibold text-primary">{year}</p>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-2xl font-bold text-foreground mb-4">{name}</h3>

          <div className="space-y-3 mb-4">
            <div>
              <p className="text-xs uppercase font-bold text-primary mb-1">Country of Origin</p>
              <p className="text-foreground font-semibold">{origin}</p>
            </div>
            <div>
              <p className="text-xs uppercase font-bold text-primary mb-1">Designer/Manufacturer</p>
              <p className="text-foreground font-semibold">{designer}</p>
            </div>
          </div>

          <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{significance}</p>

          {!isExpanded && (
            <p className="text-primary text-sm font-semibold mb-4">
              {facts.length} interesting facts about this firearm
            </p>
          )}

          {isExpanded && (
            <div className="mb-4 space-y-2">
              <h4 className="font-semibold text-foreground text-sm">Interesting Facts:</h4>
              <ul className="space-y-2">
                {facts.map((fact, index) => (
                  <li key={index} className="flex gap-3 text-sm text-muted-foreground">
                    <span className="text-primary font-bold">•</span>
                    <span>{fact}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-auto flex items-center gap-2 text-primary hover:text-accent transition-colors font-semibold text-sm"
          >
            {isExpanded ? 'Hide Facts' : 'Learn More'}
            <ChevronDown
              size={16}
              className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
            />
          </button>
        </div>
      </div>
    </div>
  )
}
