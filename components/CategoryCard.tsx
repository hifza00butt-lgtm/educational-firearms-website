'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface CategoryCardProps {
  name: string
  background: string
  description: string
  context: string
}

export default function CategoryCard({
  name,
  background,
  description,
  context,
}: CategoryCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  const categoryEmojis: { [key: string]: string } = {
    Handguns: '🎯',
    Revolvers: '⚡',
    Pistols: '🔫',
    Rifles: '🎖️',
    Shotguns: '🦆',
    'Submachine Guns': '💨',
    'Machine Guns': '🔥',
    'Historical Muskets': '⚔️',
  }

  return (
    <div className="group h-full">
      <div className="bg-card rounded-lg overflow-hidden border border-border hover:border-primary transition-all duration-300 h-full flex flex-col hover:shadow-lg hover:shadow-primary/20">
        {/* Image placeholder */}
        <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-300">
          {categoryEmojis[name] || '🎖️'}
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-2xl font-bold text-foreground mb-2">{name}</h3>

          <p className="text-sm text-primary font-semibold mb-3">{background}</p>

          {!isExpanded && (
            <p className="text-muted-foreground text-sm line-clamp-3 mb-4">{description}</p>
          )}

          {isExpanded && (
            <div className="space-y-4 mb-4">
              <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
              <div>
                <h4 className="font-semibold text-foreground text-sm mb-2">Common Contexts:</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{context}</p>
              </div>
            </div>
          )}

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-auto flex items-center gap-2 text-primary hover:text-accent transition-colors font-semibold text-sm"
          >
            {isExpanded ? 'Show Less' : 'Learn More'}
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
