import { useState } from 'react'
import { getAllBlogPosts, getCategories } from '../lib/blog-data'
import { ArrowRight, Calendar, Clock, Zap } from 'lucide-react'

interface BlogProps {
  onSelectPost: (id: string) => void
}

export default function Blog({ onSelectPost }: BlogProps) {
  const posts = getAllBlogPosts()
  const categories = getCategories()
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState('')

  let filteredPosts = selectedCategory
    ? posts.filter(p => p.category === selectedCategory)
    : posts

  filteredPosts = filteredPosts.filter(p =>
    p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <section id="blog" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 rounded-full border border-slate-700">
            <Zap size={16} className="text-accent-500" />
            <span className="text-sm text-slate-300">Insights & Knowledge</span>
          </div>
          <h2 className="text-4xl font-bold text-white">Blog & Articles</h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Expert insights on AI, web development, automation, and technology trends for modern businesses.
          </p>
        </div>

        <div className="mb-8 space-y-4">
          <input
            type="text"
            placeholder="Search articles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-accent-500"
          />

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-lg transition ${
                selectedCategory === null
                  ? 'bg-accent-600 text-white'
                  : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
              }`}
            >
              All Articles
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
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {filteredPosts.map(post => (
            <div
              key={post.id}
              onClick={() => onSelectPost(post.id)}
              className="group bg-slate-700/50 rounded-lg border border-slate-600 hover:border-accent-500 overflow-hidden cursor-pointer transition hover:shadow-lg hover:shadow-accent-500/20"
            >
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-accent-600/20 text-accent-400">
                    {post.category}
                  </span>
                  <span className="text-xs text-slate-400">{post.date}</span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-accent-400 transition">
                  {post.title}
                </h3>

                <p className="text-slate-300 line-clamp-2">
                  {post.excerpt}
                </p>

                <div className="flex items-center gap-4 text-sm text-slate-400 pt-4 border-t border-slate-600">
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={16} />
                    {post.readTime} min read
                  </div>
                </div>

                <button className="w-full mt-4 px-4 py-2 bg-slate-600 hover:bg-accent-600 text-white rounded-lg transition flex items-center justify-center gap-2 group/btn">
                  Read Article
                  <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-400">No articles found matching your search.</p>
          </div>
        )}
      </div>
    </section>
  )
}
