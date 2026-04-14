import { Zap, Mail, Share2, Link2 } from 'lucide-react'

interface FooterProps {
  onNavigate: (page: string) => void
}

export default function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 border-t border-slate-700">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Zap className="w-6 h-6 text-accent-500" />
              <span className="text-lg font-bold text-white">Pilot AI Studio</span>
            </div>
            <p className="text-slate-400">
              Transforming businesses with AI and modern web technologies.
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => onNavigate('home')} className="text-slate-400 hover:text-accent-400 transition">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('portfolio')} className="text-slate-400 hover:text-accent-400 transition">
                  Portfolio
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('blog')} className="text-slate-400 hover:text-accent-400 transition">
                  Blog
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="text-slate-400 hover:text-accent-400 transition">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><span className="text-slate-400">Web Development</span></li>
              <li><span className="text-slate-400">AI Integration</span></li>
              <li><span className="text-slate-400">Automation</span></li>
              <li><span className="text-slate-400">Consulting</span></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Connect</h3>
            <div className="flex gap-4">
              <a href="mailto:webpilot.montreux@gmail.com" className="text-slate-400 hover:text-accent-400 transition" title="Email">
                <Mail size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-accent-400 transition" title="LinkedIn">
                <Link2 size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-accent-400 transition" title="Share">
                <Share2 size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8 text-center text-slate-400">
          <p>&copy; {currentYear} Pilot AI Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
