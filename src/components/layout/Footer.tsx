const COMPANY = "VISIONPRINT PUBLISHING"

const serviceLinks = [
  "Book Writing",
  "Book Publishing",
  "Book Marketing",
  "Audiobook Production",
  "Book Editing",
  "Book Printing",
]

const otherLinks = [
  "Book Design",
  "Illustration",
  "Article Writing",
  "Web Content Writing",
  "Book Video Trailer",
  "Web Design & SEO",
]

export function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-[#1a1a1a] px-6 lg:px-8 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <p className="font-display text-2xl font-bold text-[#c9a84c] mb-4">{COMPANY}</p>
            <p className="text-[#555] text-sm leading-relaxed mb-6">
              From first draft to global shelves. Your story deserves a publishing partner that
              fights for it.
            </p>
            <div className="flex gap-3">
              {["Facebook", "Instagram", "Twitter", "LinkedIn"].map((social) => (
                <a
                  key={social}
                  href="#"
                  aria-label={social}
                  className="w-8 h-8 rounded-full border border-[#2a2a2a] flex items-center justify-center text-[#555] hover:border-[#c9a84c] hover:text-[#c9a84c] transition-colors duration-200"
                >
                  <span className="text-xs">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="text-[#f5f0e8] text-xs font-semibold tracking-[0.15em] uppercase mb-5">
              Services
            </p>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link}>
                  <a href="#services" className="text-[#555] text-sm hover:text-[#c9a84c] transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Other Services */}
          <div>
            <p className="text-[#f5f0e8] text-xs font-semibold tracking-[0.15em] uppercase mb-5">
              More Services
            </p>
            <ul className="space-y-3">
              {otherLinks.map((link) => (
                <li key={link}>
                  <a href="#services" className="text-[#555] text-sm hover:text-[#c9a84c] transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[#f5f0e8] text-xs font-semibold tracking-[0.15em] uppercase mb-5">
              Get in Touch
            </p>
            <ul className="space-y-4">
              <li>
                <p className="text-[#444] text-xs uppercase tracking-wide mb-0.5">Phone</p>
                <a href="tel:+17047246732" className="text-[#888] text-sm hover:text-[#c9a84c] transition-colors">
                  704-724-6732
                </a>
              </li>
              <li>
                <p className="text-[#444] text-xs uppercase tracking-wide mb-0.5">Email</p>
                <a href="mailto:info@visionprintpublishingllc.com" className="text-[#888] text-sm hover:text-[#c9a84c] transition-colors">
                  info@visionprintpublishingllc.com
                </a>
              </li>
              <li>
                <p className="text-[#444] text-xs uppercase tracking-wide mb-0.5">Address</p>
                <p className="text-[#888] text-sm">13534 Plazard Extension, Charlotte, NC 28215</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#1a1a1a] pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[#333] text-xs">
            © {new Date().getFullYear()} {COMPANY}. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Use"].map((item) => (
              <a key={item} href="#" className="text-[#333] text-xs hover:text-[#666] transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
