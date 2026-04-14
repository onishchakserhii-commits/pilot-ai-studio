import { ArrowRight, Zap } from 'lucide-react'

interface HeroProps {
  onNavigate: (page: string) => void
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section className="relative overflow-hidden pt-20 pb-32">
      <div className="absolute inset-0 bg-gradient-to-b from-accent-600/10 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 rounded-full border border-slate-700">
            <Zap size={16} className="text-accent-500" />
            <span className="text-sm text-slate-300">AI-Powered Solutions for Your Business</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            Transform Your Business with <span className="text-accent-500">AI & Web Innovation</span>
          </h1>
          
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Pilot AI Studio specializes in cutting-edge web development, AI integration, and automation solutions for small businesses in Switzerland. We build scalable, intelligent systems that drive growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <button
              onClick={() => onNavigate('portfolio')}
              className="px-8 py-3 bg-accent-600 hover:bg-accent-700 rounded-lg text-white font-medium transition flex items-center justify-center gap-2"
            >
              View Our Work
              <ArrowRight size={20} />
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-3 bg-slate-800 hover:bg-slate-700 rounded-lg text-white font-medium transition border border-slate-700"
            >
              Get Started
            </button>
          </div>
          
          <div className="grid grid-cols-3 gap-8 pt-16 text-center">
            <div>
              <div className="text-3xl font-bold text-accent-500">50+</div>
              <div className="text-slate-400">Projects Delivered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent-500">30+</div>
              <div className="text-slate-400">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent-500">8+</div>
              <div className="text-slate-400">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
