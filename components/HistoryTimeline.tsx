'use client'

export default function HistoryTimeline() {
  const timelineEvents = [
    {
      year: '1320s-1330s',
      title: 'Hand Cannons Emerge',
      description: 'The earliest cannons appear in China, eventually leading to portable hand cannons in Europe. These were the first firearms used in warfare.',
    },
    {
      year: '1500s',
      title: 'Muskets and Arquebus',
      description: 'The arquebus and musket become primary infantry weapons in European armies, replacing traditional bows and crossbows.',
    },
    {
      year: '1609',
      title: 'Flintlock Mechanism',
      description: 'The flintlock mechanism is invented, providing a more reliable ignition system than previous methods and becoming standard for centuries.',
    },
    {
      year: '1808',
      title: 'Percussion Cap',
      description: 'The percussion cap is developed, improving reliability and marking the transition from flintlock to modern ignition methods.',
    },
    {
      year: '1836',
      title: 'Colt Revolver Patent',
      description: 'Samuel Colt patents the revolver mechanism, revolutionizing handgun design and dominating the firearms market for decades.',
    },
    {
      year: '1859',
      title: 'Spencer Repeating Rifle',
      description: 'The Spencer repeating rifle becomes one of the first widely-used repeating rifles, changing military tactics and battlefield dynamics.',
    },
    {
      year: '1886',
      title: 'Smokeless Powder',
      description: 'Smokeless powder revolutionizes ammunition, allowing higher velocities, flatter trajectories, and more efficient weapons.',
    },
    {
      year: '1903',
      title: 'Bolt-Action Magazine-Fed Rifles',
      description: 'The M1903 Springfield and Mauser Model 98 become standard infantry rifles, establishing the bolt-action magazine-fed design as dominant.',
    },
    {
      year: '1939-1945',
      title: 'World War II Innovation',
      description: 'Rapid firearms development during WWII produces semi-automatic rifles, submachine guns, and improves existing designs.',
    },
    {
      year: '1947',
      title: 'AK-47 Development',
      description: 'Mikhail Kalashnikov designs the AK-47, which becomes the most widely produced rifle in history due to its reliability and simplicity.',
    },
    {
      year: '1960s-Present',
      title: 'Modern Era',
      description: 'Development of intermediate cartridges, polymer components, modular designs, and advanced manufacturing techniques.',
    },
  ]

  return (
    <section id="history" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
          Timeline of Firearms <span className="text-primary">Development</span>
        </h2>

        <div className="relative">
          {/* Vertical line for desktop */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-transparent"></div>

          {/* Timeline items */}
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div
                key={index}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-card rounded-lg p-6 border border-border hover:border-primary transition-colors duration-300">
                    <div className="text-primary font-bold text-lg mb-2">{event.year}</div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">{event.title}</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">{event.description}</p>
                  </div>
                </div>

                {/* Circle marker for desktop */}
                <div className="hidden md:flex w-0 justify-center items-center">
                  <div className="w-6 h-6 bg-primary rounded-full border-4 border-background"></div>
                </div>

                {/* Spacer for responsive */}
                <div className="w-full md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
