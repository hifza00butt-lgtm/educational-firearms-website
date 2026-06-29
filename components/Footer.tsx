export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">Firearms Through History</h3>
            <p className="text-muted-foreground leading-relaxed">
              An educational resource exploring the history, classification, and technological 
              evolution of firearms from ancient hand cannons to modern weapons.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#history"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Timeline
                </a>
              </li>
              <li>
                <a
                  href="#categories"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Categories
                </a>
              </li>
              <li>
                <a
                  href="#famous"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Famous Firearms
                </a>
              </li>
              <li>
                <a
                  href="#technology"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Technology
                </a>
              </li>
              <li>
                <a
                  href="#safety"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Safety
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Educational Purpose */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Educational Focus</h4>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              This resource focuses on historical facts and technological development, not on firearm 
              specifications, purchasing, or use instructions.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              All content is intended for educational purposes and complies with applicable laws and regulations.
            </p>
          </div>
        </div>

        {/* Educational Disclaimer */}
        <div className="bg-background/50 rounded-lg p-6 border border-border mb-8">
          <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
            <span className="text-2xl">📚</span>
            Educational Disclaimer
          </h4>
          <p className="text-muted-foreground text-sm leading-relaxed mb-3">
            This website is designed for <strong>historical and educational purposes only</strong>. 
            The content presented here documents the evolution and classification of firearms throughout history, 
            their impact on military tactics, law enforcement development, technological advancement, and civilian sports and hunting.
          </p>
          <p className="text-muted-foreground text-sm leading-relaxed mb-3">
            <strong>This website does NOT provide:</strong>
          </p>
          <ul className="text-muted-foreground text-sm space-y-1 mb-3 ml-4">
            <li>• Instructions for manufacturing, modifying, or operating firearms</li>
            <li>• Purchasing recommendations or commercial guidance</li>
            <li>• Detailed technical specifications for weapon performance</li>
            <li>• Content promoting violence or the misuse of weapons</li>
            <li>• Legal advice regarding firearm ownership or regulations</li>
          </ul>
          <p className="text-muted-foreground text-sm leading-relaxed">
            <strong>Individuals interested in firearm ownership, use, or operation should:</strong> 
            (1) Consult applicable local, state, and federal laws; (2) Seek training from certified, 
            professional instructors; (3) Obtain necessary licenses and permits; (4) Follow all safety regulations and best practices. 
            The creators and operators of this website are not responsible for any misuse of firearms or violation of applicable laws.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Firearms Through History. All rights reserved.
            </p>
            <p className="text-muted-foreground text-sm text-center md:text-right">
              Educational Resource | Historical Documentation | Not for Commercial Use
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
