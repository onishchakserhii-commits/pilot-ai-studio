import { useState } from 'react'
import { getAllPortfolioProjects, getCategories } from '../lib/portfolio-data'
import { ArrowRight, Zap } from 'lucide-react'

interface PortfolioProps {
  onSelectProject: (id: string) => void
}

export default function Portfolio({ onSelectProject }: PortfolioProps) {
  const projects = getAllPortfolioProjects()
  const categories = getCategories()
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const filteredProjects = selectedCategory
    ? projects.filter(p => p.category === selectedCategory)
    : projects

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      'AI Integration': 'bg-accent-600/20 text-accent-400',
      'Web Development': 'bg-primary-600/20 text-primary-400',
      'AI & Web': 'bg-purple-600/20 text-purple-400',
      'Automation': 'bg-emerald-600/20 text-emerald-400',
    }
    return colors[category] || 'bg-slate-700 text-slate-300'
  }

  return (
    <section id="portfolio" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 rounded-full border border-slate-700">
            <Zap size={16} className="text-accent-500" />
            <span className="text-sm text-slate-300">Our Work</span>
          </div>
          <h2 className="text-4xl font-bold text-white">Portfolio & Case Studies</h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Explore our successful projects showcasing web development, AI integration, and automation solutions.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-lg transition ${
              selectedCategory === null
                ? 'bg-accent-600 text-white'
                : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
            }`}
          >
            All Projects
          </button>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg transition ${
                selectedCategory === category
                  ? 'bg-accent-600 text-white'
                  : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map(project => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project.id)}
              className="group bg-slate-700/50 rounded-lg border border-slate-600 hover:border-accent-500 p-6 cursor-pointer transition hover:shadow-lg hover:shadow-accent-500/20"
            >
              <div className="flex items-start justify-between mb-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(project.category)}`}>
                  {project.category}
                </span>
                <span className="text-xs text-slate-400">{project.duration}</span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent-400 transition">
                {project.title}
              </h3>

              <p className="text-sm text-slate-300 mb-2">
                {project.clientIndustry} • {project.clientSize}
              </p>

              <p className="text-slate-300 mb-4 line-clamp-2">
                {project.shortDescription}
              </p>

              <div className="space-y-2 mb-4 pb-4 border-b border-slate-600">
                {project.results.slice(0, 2).map((result, idx) => (
                  <div key={idx} className="flex justify-between items-center text-sm">
                    <span className="text-slate-400">{result.metric}</span>
                    <span className="font-bold text-accent-400">{result.value}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.slice(0, 3).map((tech, idx) => (
                  <span key={idx} className="text-xs px-2 py-1 bg-slate-600 rounded text-slate-300">
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="text-xs px-2 py-1 bg-slate-600 rounded text-slate-300">
                    +{project.technologies.length - 3}
                  </span>
                )}
              </div>

              <button className="w-full px-4 py-2 bg-slate-600 hover:bg-accent-600 text-white rounded-lg transition flex items-center justify-center gap-2 group/btn">
                View Case Study
                <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
