import { Zap } from 'lucide-react'

interface HeaderProps {
  onNavigate: (page: string) => void
}

export default function Header({ onNavigate }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur border-b border-slate-700">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavigate('home')}>
          <Zap className="w-8 h-8 text-accent-500" />
          <span className="text-xl font-bold text-white">Pilot AI Studio</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <button onClick={() => onNavigate('home')} className="text-slate-300 hover:text-white transition">
            Home
          </button>
          <button onClick={() => onNavigate('portfolio')} className="text-slate-300 hover:text-white transition">
            Portfolio
          </button>
          <button onClick={() => onNavigate('blog')} className="text-slate-300 hover:text-white transition">
            Blog
          </button>
          <button 
            onClick={() => onNavigate('contact')}
            className="px-4 py-2 bg-accent-600 hover:bg-accent-700 rounded-lg text-white transition"
          >
            Contact
          </button>
        </nav>
      </div>
    </header>
  )
}
