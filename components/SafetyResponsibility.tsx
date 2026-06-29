export default function SafetyResponsibility() {
  const safetyPrinciples = [
    {
      title: 'Treat Every Firearm as Loaded',
      description: 'Always handle any firearm as if it contains ammunition, even if you believe it is unloaded.',
    },
    {
      title: 'Keep Finger Off Trigger',
      description: 'Keep your finger off the trigger until you intend to fire. Rest your finger on the trigger guard or frame.',
    },
    {
      title: 'Never Point at Anything Unintended',
      description: 'Always be aware of where the muzzle is pointing. Never aim at anything you do not intend to shoot.',
    },
    {
      title: 'Be Sure of Your Target',
      description: 'Know what you are shooting at and what is beyond it. Ensure there is a proper backstop.',
    },
    {
      title: 'Secure Storage',
      description: 'Store firearms securely and separately from ammunition to prevent unauthorized access, especially around children.',
    },
    {
      title: 'Proper Training',
      description: 'Seek professional training from certified instructors to learn safe handling, operation, and storage techniques.',
    },
  ]

  return (
    <section id="safety" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
          Safety & <span className="text-primary">Responsibility</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {safetyPrinciples.map((principle, index) => (
            <div
              key={index}
              className="bg-card rounded-lg border border-border p-6 hover:border-primary transition-colors"
            >
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{principle.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{principle.description}</p>
            </div>
          ))}
        </div>

        {/* Legal and Regulatory Information */}
        <div className="bg-card rounded-lg border border-border p-8 mb-8">
          <h3 className="text-2xl font-bold text-foreground mb-4">Legal Regulations</h3>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            Firearm laws and regulations vary significantly by country, region, state, and municipality. 
            Legal ownership, possession, and use of firearms are subject to:
          </p>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>Federal, state, and local licensing requirements</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>Background checks and security clearances</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>Training and certification mandates</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>Restrictions on firearm types and modifications</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>Storage and transportation regulations</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>Use restrictions in specific locations</span>
            </li>
          </ul>
        </div>

        {/* Education and Responsibility */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-card rounded-lg border border-border p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">Education</h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Firearms education is critical to understanding their history, mechanics, and proper use. 
              Formal training should cover:
            </p>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li className="flex gap-2">
                <span className="text-primary">✓</span>
                <span>Safe handling and operation</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">✓</span>
                <span>Legal requirements and restrictions</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">✓</span>
                <span>Shooting techniques and accuracy</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">✓</span>
                <span>Maintenance and care</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">✓</span>
                <span>Storage and security practices</span>
              </li>
            </ul>
          </div>

          <div className="bg-card rounded-lg border border-border p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">Responsibility</h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Firearm ownership and use carry significant responsibility. Responsible practices include:
            </p>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li className="flex gap-2">
                <span className="text-primary">✓</span>
                <span>Following all applicable laws and regulations</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">✓</span>
                <span>Regular training and skill development</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">✓</span>
                <span>Secure storage away from unauthorized users</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">✓</span>
                <span>Proper maintenance and inspection</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">✓</span>
                <span>Awareness of surroundings and risk assessment</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
