const Footer = () => {
  return (
    <footer className="border-t border-border mt-24 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h1>MONOCHROME</h1>
          </div>
          <div>
            <h4 className="text-sm uppercase tracking-wider mb-4">Newsletter</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Subscribe for exclusive offers
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email"
                className="flex-1 bg-input-background border border-border px-3 py-2 text-sm"
              />
              <button className="bg-primary text-primary-foreground px-4 py-2 text-sm hover:bg-primary/90 transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export { Footer }