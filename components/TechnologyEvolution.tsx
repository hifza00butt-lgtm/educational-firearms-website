'use client'

export default function TechnologyEvolution() {
  const evolutions = [
    {
      period: 'Ignition Systems',
      technologies: [
        { name: 'Match-lock', era: '1400s-1600s', description: 'Slow match cord manually ignited powder' },
        { name: 'Wheel-lock', era: '1500s-1700s', description: 'Mechanical spinning wheel created sparks' },
        { name: 'Flint-lock', era: '1600s-1800s', description: 'Flint striking steel created consistent sparks' },
        { name: 'Percussion Cap', era: '1800s-1860s', description: 'Chemical ignition when struck' },
        { name: 'Centerfire', era: '1860s-present', description: 'Firing pin strikes primed cartridge' },
      ],
    },
    {
      period: 'Operating Systems',
      technologies: [
        { name: 'Muzzle-loading', era: '1300s-1800s', description: 'Powder and ball loaded from muzzle' },
        { name: 'Breech-loading', era: '1800s-present', description: 'Ammunition loaded from rear of barrel' },
        { name: 'Bolt-action', era: '1880s-present', description: 'Manual bolt cycles ammunition' },
        { name: 'Semi-automatic', era: '1900s-present', description: 'Gun recoil cycles next round' },
        { name: 'Automatic', era: '1900s-present', description: 'Continuous fire while trigger held' },
      ],
    },
    {
      period: 'Ammunition Evolution',
      technologies: [
        { name: 'Black Powder', era: '1300s-1880s', description: 'Original explosive propellant' },
        { name: 'Smokeless Powder', era: '1880s-present', description: 'More efficient, less smoke' },
        { name: 'Rimfire', era: '1800s-present', description: 'Priming compound in rim of case' },
        { name: 'Centerfire', era: '1860s-present', description: 'Priming compound in center of case' },
        { name: 'Intermediate Cartridges', era: '1940s-present', description: 'Balance power and control' },
      ],
    },
    {
      period: 'Materials & Manufacturing',
      technologies: [
        { name: 'Hand-forged Steel', era: '1300s-1800s', description: 'Individually crafted barrels' },
        { name: 'Mass Production', era: '1800s-present', description: 'Standardized manufacturing processes' },
        { name: 'Precision Machining', era: '1900s-present', description: 'CNC and modern tools' },
        { name: 'Polymer Components', era: '1980s-present', description: 'Lightweight synthetic materials' },
        { name: 'Modular Design', era: '2000s-present', description: 'Interchangeable parts and configurations' },
      ],
    },
  ]

  return (
    <section id="technology" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
          Technology <span className="text-primary">Evolution</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {evolutions.map((evolution, index) => (
            <div
              key={index}
              className="bg-card rounded-lg border border-border p-6 hover:border-primary transition-colors"
            >
              <h3 className="text-2xl font-bold text-primary mb-6">{evolution.period}</h3>

              <div className="space-y-4">
                {evolution.technologies.map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className="pb-4 border-b border-border last:border-b-0"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-foreground text-lg">{tech.name}</h4>
                      <span className="text-primary text-xs font-bold">{tech.era}</span>
                    </div>
                    <p className="text-muted-foreground text-sm">{tech.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Visual Timeline */}
        <div className="mt-16 bg-card rounded-lg border border-border p-8">
          <h3 className="text-2xl font-bold text-foreground mb-8">Major Technological Transitions</h3>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-24 text-right">
                <p className="text-sm font-bold text-primary">1320s</p>
              </div>
              <div className="flex-1">
                <div className="h-2 bg-primary/30 rounded w-1/6"></div>
              </div>
              <p className="text-sm text-muted-foreground">First cannons</p>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-24 text-right">
                <p className="text-sm font-bold text-primary">1609</p>
              </div>
              <div className="flex-1">
                <div className="h-2 bg-primary/50 rounded w-1/3"></div>
              </div>
              <p className="text-sm text-muted-foreground">Flintlock invented</p>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-24 text-right">
                <p className="text-sm font-bold text-primary">1886</p>
              </div>
              <div className="flex-1">
                <div className="h-2 bg-primary/70 rounded w-2/3"></div>
              </div>
              <p className="text-sm text-muted-foreground">Smokeless powder</p>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-24 text-right">
                <p className="text-sm font-bold text-primary">1903</p>
              </div>
              <div className="flex-1">
                <div className="h-2 bg-primary rounded w-5/6"></div>
              </div>
              <p className="text-sm text-muted-foreground">Bolt-action standard</p>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-24 text-right">
                <p className="text-sm font-bold text-primary">1947</p>
              </div>
              <div className="flex-1">
                <div className="h-2 bg-primary rounded w-full"></div>
              </div>
              <p className="text-sm text-muted-foreground">Modern era begins</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
