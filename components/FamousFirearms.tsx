'use client'

import FirearmCard from './FirearmCard'

export default function FamousFirearms() {
  const firearms = [
    {
      name: 'Colt Single Action Army',
      year: '1873',
      origin: 'United States',
      designer: 'Samuel Colt Manufacturing Company',
      significance:
        'The iconic revolver of the American West, this weapon became synonymous with frontier history and remains culturally significant.',
      facts: [
        'Known as the ".45 Peacemaker"',
        'Preferred sidearm of lawmen and outlaws in the Old West',
        'Still manufactured and highly sought by collectors',
        'Defined the revolver archetype for future designs',
      ],
    },
    {
      name: 'AK-47',
      year: '1947',
      origin: 'Soviet Union',
      designer: 'Mikhail Kalashnikov',
      significance:
        'The most widely produced and distributed rifle in history, the AK-47 revolutionized rifle design with its simplicity and reliability.',
      facts: [
        'Over 100 million produced or copied worldwide',
        'Reliable in extreme conditions',
        'Simplified design allows field maintenance',
        'Adopted by numerous armies and became a symbol of revolution',
      ],
    },
    {
      name: 'M16',
      year: '1964',
      origin: 'United States',
      designer: 'Eugene Stoner, ArmaLite',
      significance:
        'The standard rifle of the US military for decades, the M16 and its variants defined modern tactical rifle design.',
      facts: [
        'Extensively used in Vietnam War',
        'Pioneered the use of intermediate cartridges in military service',
        'Modular design influenced modern rifle development',
        'Evolution continues with M4 carbine variants',
      ],
    },
    {
      name: 'Lee–Enfield',
      year: '1895',
      origin: 'British Empire',
      designer: 'James Paris Lee and Royal Small Arms Factory',
      significance:
        'The primary rifle of the British military for over 60 years, the Lee-Enfield was known for its speed and accuracy.',
      facts: [
        'Famous for rapid rate of fire when operated skillfully',
        'Used in both World Wars by British and Commonwealth forces',
        'Excellent accuracy at long range',
        'Still used in ceremonial and some military applications',
      ],
    },
    {
      name: 'M1 Garand',
      year: '1936',
      origin: 'United States',
      designer: 'John Garand, Springfield Armory',
      significance:
        'The primary rifle of US forces in WWII, the Garand was the first semi-automatic rifle to be widely adopted by an army.',
      facts: [
        'General George S. Patton called it "the greatest battle implement ever devised"',
        'Gas-operated semi-automatic design',
        'Innovative 8-round clip-fed system',
        'Revolutionary for its time, changing infantry tactics',
      ],
    },
    {
      name: 'Winchester Model 1873',
      year: '1873',
      origin: 'United States',
      designer: 'Winchester Repeating Arms Company',
      significance:
        'The "gun that won the West," this rifle represented the transition to modern repeating firearms and shaped frontier history.',
      facts: [
        'First widely successful lever-action repeating rifle',
        'Popular with settlers, hunters, and frontiersmen',
        'Offered superior firepower over single-shot rifles',
        'Symbolized technological progress in the American West',
      ],
    },
    {
      name: 'Thompson Submachine Gun',
      year: '1921',
      origin: 'United States',
      designer: 'John Taliaferro Thompson',
      significance:
        'Iconic submachine gun that revolutionized close-quarters combat and became famous during Prohibition and WWII.',
      facts: [
        'Known as the "Tommy Gun"',
        'Legendary in American criminal and military history',
        'Proven effective in trench warfare and urban combat',
        'Highly reliable and simple to operate',
      ],
    },
  ]

  return (
    <section id="famous" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
          Famous <span className="text-primary">Historical Firearms</span>
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-16 max-w-3xl mx-auto">
          These firearms left indelible marks on history, influencing military tactics, civilian culture, and technological development
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {firearms.map((firearm, index) => (
            <FirearmCard key={index} {...firearm} />
          ))}
        </div>
      </div>
    </section>
  )
}
