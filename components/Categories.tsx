'use client'

import { useState } from 'react'
import CategoryCard from './CategoryCard'

export default function Categories() {
  const categories = [
    {
      name: 'Handguns',
      background: 'Handguns evolved from early portable cannons into practical personal defense weapons.',
      description: 'Small firearms designed for one-handed operation, handguns are the most common firearms in civilian and law enforcement use. They typically fire smaller caliber ammunition and are valued for their portability and ease of use.',
      context: 'Used by civilians for personal protection, law enforcement for duty weapons, and military personnel as sidearms.',
      image: '/images/handgun.png',
    },
    {
      name: 'Revolvers',
      background: 'Developed in the 16th century but perfected by Samuel Colt in the 1830s, the revolver became iconic.',
      description: 'Handguns with a rotating cylinder containing multiple chambers, revolvers fire one round per trigger pull. Known for reliability and simplicity, they dominated personal defense and law enforcement for over 150 years.',
      context: 'Common in civilian self-defense, law enforcement backup weapons, and sport shooting. Historically significant in the American Old West.',
      image: '/images/revolver.png',
    },
    {
      name: 'Pistols',
      background: 'Modern pistols evolved from 19th-century designs to become the most common handgun type today.',
      description: 'Semi-automatic handguns that use a magazine to feed ammunition into the chamber. Pistols offer higher capacity and faster reloading than revolvers, making them dominant in modern military and law enforcement.',
      context: 'Primary sidearm for military and law enforcement worldwide. Popular for civilian sport shooting and personal defense.',
      image: '/images/pistol.png',
    },
    {
      name: 'Rifles',
      background: 'Rifles emerged with rifled barrels to improve accuracy and became the standard infantry weapon.',
      description: 'Long firearms with rifled barrels designed for accuracy at distance, rifles are used for hunting, sport shooting, and military purposes. They offer superior accuracy and range compared to handguns.',
      context: 'Essential for hunting, sport shooting competitions, and military applications. Central to battlefield tactics for centuries.',
      image: '/images/rifle.png',
    },
    {
      name: 'Shotguns',
      background: 'Shotguns developed from smooth-bore muskets and became specialized for hunting and sport.',
      description: 'Firearms that fire multiple pellets (shot) or a single projectile, shotguns are versatile weapons effective at short to medium range. Used extensively in hunting, sport shooting, and tactical applications.',
      context: 'Dominant in waterfowl and upland game hunting, clay shooting sports, and home defense applications.',
      image: '/images/shotgun.png',
    },
    {
      name: 'Submachine Guns',
      background: 'Invented during World War I, submachine guns combine pistol ammunition with automatic fire capability.',
      description: 'Compact automatic weapons that fire pistol-caliber ammunition, submachine guns excel at close-quarters combat. They offer fully automatic capability in a portable package.',
      context: 'Used by military special forces, law enforcement tactical teams, and security personnel. Historically significant in combat and police work.',
      image: '/images/submachine-gun.png',
    },
    {
      name: 'Machine Guns',
      background: 'Machine guns revolutionized warfare by providing sustained automatic fire and changed military tactics forever.',
      description: 'Automatic weapons capable of sustained rapid fire, machine guns are crew-served weapons designed for volume of fire. Classified by weight and deployment method (light, medium, heavy).',
      context: 'Military weapons for squad and platoon-level firepower. Used for area denial and suppressive fire in combat.',
      image: '/images/machine-gun.png',
    },
    {
      name: 'Historical Muskets',
      background: 'Muskets dominated warfare from the 1500s through the 1800s, defining infantry tactics for 300 years.',
      description: 'Early firearms with smooth bores and simple ignition systems, muskets were the primary infantry weapon for centuries. They evolved from match-lock to flint-lock to percussion systems.',
      context: 'Foundation of military history, used in formation-based warfare. Critical to understanding how firearms changed warfare and society.',
      image: '/images/musket.png',
    },
  ]

  return (
    <section id="categories" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
          Categories of <span className="text-primary">Firearms</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <CategoryCard key={index} {...category} />
          ))}
        </div>

        <div className="mt-16 p-8 bg-card rounded-lg border border-border">
          <h3 className="text-2xl font-bold text-foreground mb-4">Understanding Firearm Classification</h3>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            Firearms are classified by various criteria including operating mechanism (manual, semi-automatic, automatic), 
            barrel configuration (rifled vs. smooth), intended use (hunting, sport, military, law enforcement), and size/portability. 
            Each classification emerged from specific historical needs and technological developments, reflecting the evolution of 
            warfare, hunting practices, and civilian applications across cultures and centuries.
          </p>
        </div>
      </div>
    </section>
  )
}
