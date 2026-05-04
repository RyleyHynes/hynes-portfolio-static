import { Link } from 'react-router-dom'
import { projects } from '@/data/profile'
import Badge from '@/components/data-display/Badge'

/**
 * Project gallery showcasing full-stack sample apps.
 */
const Projects = () => {
  return (
    <section className="grid gap-6">
      <header>
        <h2 className="section-title">Selected Projects</h2>
      </header>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map(p => {
          const isLive = p.isLive === true
          const imageSrc = 'image' in p ? `${import.meta.env.BASE_URL}${p.image}` : undefined
          return (
            <article
              key={p.name}
              className={[
                'card p-6 text-slate-900 dark:text-slate-100',
                isLive ? '' : 'card-coming-soon'
              ].join(' ')}
              aria-disabled={isLive ? undefined : true}
              title={isLive ? undefined : 'Live demos coming soon'}
            >
            {imageSrc && (
              <img
                alt={`${p.name} project preview`}
                className="mb-5 h-48 w-full rounded-xl object-cover"
                src={imageSrc}
              />
            )}
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-xl font-semibold">{p.name}</h3>
              <div className="flex flex-wrap justify-end gap-2">
                {p.links.map(l => {
                  if (!isLive) {
                    return (
                      <span
                        key={l.label}
                        className="btn-primary btn-compact opacity-60 pointer-events-none select-none"
                        aria-disabled="true"
                      >
                        {l.label}
                      </span>
                    )
                  }

                  if ('disabledReason' in l) {
                    return (
                      <span
                        key={l.label}
                        className="btn-primary btn-compact deploy-tooltip-trigger relative cursor-not-allowed opacity-70"
                        tabIndex={0}
                      >
                        {l.label}
                        <span className="deploy-tooltip">
                          {l.disabledReason}
                        </span>
                      </span>
                    )
                  }

                  const isInternal = l.href.startsWith('/')
                  const actionClass = 'btn-primary btn-compact'
                  return isInternal ? (
                    <Link key={l.label} className={actionClass} to={l.href}>
                      {l.label}
                    </Link>
                  ) : (
                    <a key={l.label} className={actionClass} href={l.href} target="_blank" rel="noreferrer">
                      {l.label}
                    </a>
                  )
                })}
              </div>
            </div>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-200">{p.blurb}</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {p.stack.map(s => <Badge key={s}>{s}</Badge>)}
            </ul>
          </article>
          )
        })}
      </div>
    </section>
  )
}

export default Projects
