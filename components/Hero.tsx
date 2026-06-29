export default function Hero() {
  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-card to-background">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 animate-fade-in">
          Firearms Through History
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-delayed">
          Explore the fascinating evolution of firearms from early hand cannons to modern weapons. 
          Firearms have profoundly influenced history, shaped military development, revolutionized 
          technology, impacted law enforcement practices, and influenced civilian sports and hunting traditions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#history"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#history')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Explore History
          </a>
          <a
            href="#categories"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#categories')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors"
          >
            View Categories
          </a>
        </div>
      </div>
    </section>
  )
}
