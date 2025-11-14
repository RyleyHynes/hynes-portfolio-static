import { profile } from '@/data/profile'
import { Mail, Phone, Github, Linkedin } from 'lucide-react'

export default function Contact() {
  const contactLinks = [
    { label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/[^0-9+]/g, '')}`, icon: Phone },
    { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
    { label: 'LinkedIn', value: '@ryleyhynes', href: profile.linkedin, icon: Linkedin },
    { label: 'GitHub', value: '@RyleyHynes', href: profile.github, icon: Github },
  ] as const

  return (
    <section className="grid gap-8 max-w-2xl text-slate-900 dark:text-slate-100">
      <header className="grid gap-2">
        <h2 className="section-title">Contact</h2>
        <p className="text-slate-600 dark:text-slate-300">
          Need a product-minded engineer who ships polished experiences fast? Reach me directly on any channel below
          and I’ll reply quickly with next steps or a portfolio walkthrough.
        </p>
      </header>

      <ul className="grid gap-4 sm:grid-cols-2">
        {contactLinks.map(({ label, value, href, icon: Icon }) => (
          <li key={label} className="card p-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-1">
              <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">{label}</p>
              <a
                className="text-lg font-semibold text-emerald-600 hover:text-emerald-500 dark:text-emerald-400 dark:hover:text-emerald-300"
                href={href}
                target={label === 'Phone' || label === 'Email' ? undefined : '_blank'}
                rel={label === 'Phone' || label === 'Email' ? undefined : 'noreferrer'}
              >
                {value}
              </a>
            </div>
            <Icon className="text-slate-400 dark:text-slate-500" size={28} aria-hidden="true" />
          </li>
        ))}
      </ul>
    </section>
  )
}
