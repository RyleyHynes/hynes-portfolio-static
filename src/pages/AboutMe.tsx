import { profile } from '@/data/profile'
import { MapPin, Plane } from 'lucide-react'

const hobbies = [
  {
    title: 'Trail running & alpine climbing',
    blurb: 'Training for big mountain days keeps me calm under pressure and focused on the long haul.',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Film photography & mapping',
    blurb: 'I nerd out over 35mm cameras and QGIS projects that document cities, neighborhoods, and rides.',
    image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Cycling & gear tinkering',
    blurb: 'Weekend gravel rides plus dialing in the gear itself scratches my maker mindset outside of code.',
    image: 'https://images.unsplash.com/photo-1508979827770-d251eea1f8af?auto=format&fit=crop&w=600&q=80',
  },
] as const

export default function AboutMe() {
  return (
    <section className="grid gap-8 text-slate-900 dark:text-slate-100">
      <header className="max-w-3xl space-y-4">
        <h2 className="section-title">About Me</h2>
        <p className="text-slate-600 dark:text-slate-300">
          Beyond product roadmaps I stay energized through movement, community, and creative projects. Here’s a look at
          what shapes how I show up in work and life.
        </p>
      </header>

      <article className="card p-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 rounded-2xl bg-brand-50 dark:bg-brand-500/10 text-brand-600 dark:text-brand-300 grid place-items-center">
            <MapPin />
          </div>
          <div>
            <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">Based in</p>
            <p className="text-2xl font-semibold">{profile.location}</p>
          </div>
        </div>
        <div className="inline-flex items-center gap-2 text-sm bg-emerald-50 text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-300 px-3 py-1 rounded-full w-fit">
          <Plane size={16} />
          Willing to relocate for the right team
        </div>
      </article>

      <section className="grid gap-4">
        <h3 className="text-xl font-semibold">Life outside the editor</h3>
        <p className="text-sm text-slate-600 dark:text-slate-300">
          Movement and creativity fuel how I show up at work. Here are a few things keeping me inspired lately:
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          {hobbies.map((hobby) => (
            <article key={hobby.title} className="card overflow-hidden p-0">
              <img src={hobby.image} alt={hobby.title} className="h-40 w-full object-cover" loading="lazy" />
              <div className="p-4 space-y-1">
                <h4 className="font-semibold">{hobby.title}</h4>
                <p className="text-sm text-slate-600 dark:text-slate-300">{hobby.blurb}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </section>
  )
}
