import { useState } from 'react'
import { Mail, Phone, MapPin, Send, Zap, AlertCircle, CheckCircle } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
    setError('')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      // Using Formspree to send emails
      const response = await fetch('https://formspree.io/f/xyzgvkdp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          message: formData.message,
          _subject: `New Contact Request from ${formData.name}`,
          _replyto: formData.email,
        }),
      })

      if (response.ok) {
        setSubmitted(true)
        setFormData({ name: '', email: '', company: '', message: '' })
        setTimeout(() => {
          setSubmitted(false)
        }, 5000)
      } else {
        setError('Failed to send message. Please try again.')
      }
    } catch (err) {
      setError('An error occurred. Please try again later.')
      console.error('Form submission error:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 rounded-full border border-slate-700">
            <Zap size={16} className="text-accent-500" />
            <span className="text-sm text-slate-300">Get In Touch</span>
          </div>
          <h2 className="text-4xl font-bold text-white">Let's Start Your Project</h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Ready to transform your business with AI and modern web technologies? Contact us today for a free consultation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Mail className="w-6 h-6 text-accent-500 mt-1" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Email</h3>
                <a href="mailto:webpilot.montreux@gmail.com" className="text-slate-300 hover:text-accent-400 transition">
                  webpilot.montreux@gmail.com
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Phone className="w-6 h-6 text-accent-500 mt-1" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Phone</h3>
                <p className="text-slate-300">Available upon request</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <MapPin className="w-6 h-6 text-accent-500 mt-1" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Location</h3>
                <p className="text-slate-300">Montreux, Switzerland</p>
              </div>
            </div>

            <div className="mt-8 p-4 bg-accent-600/10 border border-accent-600/30 rounded-lg">
              <p className="text-sm text-accent-300">
                <strong>Response Time:</strong> We typically respond within 24 hours during business days.
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-accent-500 transition"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-accent-500 transition"
            />

            <input
              type="text"
              name="company"
              placeholder="Company Name"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-accent-500 transition"
            />

            <textarea
              name="message"
              placeholder="Tell us about your project..."
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-accent-500 transition resize-none"
            ></textarea>

            {error && (
              <div className="p-4 bg-red-600/20 border border-red-600 rounded-lg text-red-400 flex items-start gap-2">
                <AlertCircle size={18} className="flex-shrink-0 mt-0.5" />
                <span>{error}</span>
              </div>
            )}

            {submitted && (
              <div className="p-4 bg-emerald-600/20 border border-emerald-600 rounded-lg text-emerald-400 flex items-start gap-2">
                <CheckCircle size={18} className="flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Message sent successfully!</p>
                  <p className="text-sm">We'll get back to you soon at {formData.email}</p>
                </div>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full px-6 py-3 bg-accent-600 hover:bg-accent-700 disabled:bg-slate-600 disabled:cursor-not-allowed text-white font-medium rounded-lg transition flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <div className="animate-spin">⏳</div>
                  Sending...
                </>
              ) : (
                <>
                  <Send size={18} />
                  Send Message
                </>
              )}
            </button>

            <p className="text-xs text-slate-400 text-center">
              We respect your privacy. Your information will only be used to respond to your inquiry.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
