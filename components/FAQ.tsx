'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function FAQ() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: 'What is the difference between a rifle and a shotgun?',
      answer:
        'The primary difference lies in the barrel. Rifles have rifled barrels with spiral grooves that spin the projectile for accuracy at distance. Shotguns have smooth bores and typically fire multiple pellets (shot) rather than a single projectile. Rifles excel at long-range accuracy, while shotguns are effective at closer ranges and are designed for hunting game or sport shooting with spread patterns.',
    },
    {
      question: 'What is the difference between a pistol and a revolver?',
      answer:
        'Both are handguns but operate differently. Revolvers use a rotating cylinder with multiple chambers, with one round fired per trigger pull before rotating to the next chamber. Pistols use a magazine that feeds ammunition into a fixed chamber, typically firing faster with higher capacity. Revolvers are simpler mechanically and highly reliable, while modern pistols offer higher capacity and faster reloading.',
    },
    {
      question: 'Why are some historical firearms famous?',
      answer:
        'Certain firearms became famous because they revolutionized warfare, defined eras, or shaped culture and history. The M1 Garand transformed infantry tactics in WWII, the AK-47 became the most widely produced rifle in history, and the Colt Single Action Army became iconic in American frontier mythology. Their significance stems from their impact on military doctrine, technological advancement, or cultural history.',
    },
    {
      question: 'How have firearms evolved over time?',
      answer:
        'Firearms evolved through major transitions: from muzzle-loading with black powder to breech-loading; from match-lock to flintlock to percussion to centerfire ignition; from single-shot to repeating to semi-automatic and automatic firing. Materials evolved from iron and brass to steel to modern alloys. Design progressed from smoothbore muskets to rifled barrels, and from hand-forged to precision-manufactured. Each advancement made firearms more reliable, faster, and more powerful.',
    },
    {
      question: 'What is the significance of the flintlock mechanism?',
      answer:
        'The flintlock, invented around 1609, was revolutionary because it provided consistent, reliable ignition by using a piece of flint striking steel to produce sparks. It replaced unreliable earlier systems and remained the standard for nearly 200 years. This innovation made firearms more dependable and practical, accelerating their adoption in warfare and establishing them as primary military weapons.',
    },
    {
      question: 'What is smokeless powder and why was it important?',
      answer:
        'Smokeless powder, invented in 1886, replaced black powder with a more efficient explosive propellant. It produced higher velocities, flatter trajectories, less smoke (improving visibility in battle), and required less ammunition mass for equivalent energy. This single innovation made all firearms more powerful, more accurate, faster-shooting, and more practical, revolutionizing military weapons and ammunition design.',
    },
    {
      question: 'What does "semi-automatic" mean?',
      answer:
        'Semi-automatic firearms fire one round per trigger pull. After firing, the gun&apos;s recoil cycles the action, ejecting the spent cartridge and chambering the next round automatically. The shooter must release and press the trigger again for each shot. This differs from fully automatic weapons (where holding the trigger causes continuous fire) and manual operation (where the shooter must cycle the action by hand).',
    },
    {
      question: 'Why study firearm history?',
      answer:
        'Understanding firearm history provides crucial context for military history, technological development, law enforcement evolution, and cultural impact across centuries. Firearms shaped warfare tactics, influenced political events, affected social structures, and drove engineering innovation. Historical knowledge helps us understand how technology shapes society and provides perspective on how weapons influence human history and civilization.',
    },
  ]

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
          Frequently Asked <span className="text-primary">Questions</span>
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-16">
          Educational questions about firearm history, classification, and evolution
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-card rounded-lg border border-border overflow-hidden transition-all duration-300 hover:border-primary"
            >
              <button
                onClick={() =>
                  setExpandedIndex(expandedIndex === index ? null : index)
                }
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-primary/5 transition-colors"
              >
                <h3 className="text-left font-semibold text-lg text-foreground">
                  {faq.question}
                </h3>
                <ChevronDown
                  size={24}
                  className={`text-primary transition-transform duration-300 flex-shrink-0 ${
                    expandedIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {expandedIndex === index && (
                <div className="px-6 py-4 border-t border-border bg-background/50">
                  <p className="text-muted-foreground leading-relaxed text-base">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Additional Resources */}
        <div className="mt-16 bg-card rounded-lg border border-border p-8">
          <h3 className="text-2xl font-bold text-foreground mb-4">About This Resource</h3>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            This website is an educational resource dedicated to the history and classification of firearms. 
            It is designed for learning purposes only and provides historical context about how firearm technology 
            has evolved over centuries and influenced military tactics, law enforcement practices, sport shooting, 
            and hunting traditions.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            The information presented here is intended to educate visitors about firearms history, technology development, 
            and their role in shaping civilization. This is not a guide for firearm use, performance comparisons, or purchasing information. 
            Any person interested in firearm ownership or use should seek proper training from certified professionals and follow all 
            applicable local, state, and federal laws and regulations.
          </p>
        </div>
      </div>
    </section>
  )
}
