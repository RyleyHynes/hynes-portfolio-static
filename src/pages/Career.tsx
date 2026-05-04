import { education, experience } from '@/data/profile'
import { GraduationCap, Briefcase } from 'lucide-react'

/**
 * Timeline and narrative of professional and education experience.
 * Pulls structured data from `profile` plus localized environmental science history.
 */
const Career = () => {
  const ut = education.find((ed) => ed.school.includes('Tennessee'))
  const hca = experience.find((exp) => exp.company === 'HCA Healthcare')

  /**
   * Environmental-science roles held prior to software engineering.
   */
  type EnvRole = {
    title: string
    range: string
    bullets: string[]
    highlight?: string
  }

  /**
   * Chronological list capturing responsibilities before switching careers.
   */
  const envRoles: EnvRole[] = [
    {
      title: 'Environmental Scientist II — Tennessee Department of Environment & Conservation',
      range: '2021 – 2022',
      bullets: [
        'Conducted subsurface sewage disposal system inspections, water treatment facility inspections, and water quality sampling across Middle Tennessee.',
        'Investigated public complaints, documented violations, and coordinated legal enforcement actions when needed.',
        'Designed and reviewed onsite wastewater system layouts, performed property surveys, and evaluated site suitability.',
        'Expanded GIS reporting using ESRI tools, integrating field data, soil surveys, and hydrological information to support regulatory decisions.',
        'Collaborated with engineers, contractors, and local agencies to turn inspection findings into corrective actions and long-term compliance plans.',
      ],
    },
    {
      title: 'Environmental Scientist I — Tennessee Department of Environment & Conservation',
      range: '2019 – 2021',
      bullets: [
        'Built core field experience performing soil, water, and wastewater sampling, including chain-of-custody management and QA/QC verification.',
        'Assisted with subsurface sewage disposal system evaluations and treatment system performance checks.',
        'Prepared technical inspection reports, compliance summaries, and community-facing documentation.',
        'Supported complaint investigations by collecting field data, interviewing property owners, and coordinating follow-ups.',
        'Developed baseline GIS layers and environmental maps to support environmental reviews and permitting decisions.',
      ],
    },
  ]

  const nssBullets = [
    'Daily hands-on application of OOP fundamentals through group and solo projects.',
    'Built single-page applications in vanilla JavaScript and React.',
    'Ran agile project boards with GitHub Projects (boards + issues).',
    'Used Git/GitHub for version control, reviews, and release readiness.',
    'Practiced solution design via whiteboarding, architecture sketches, and wireframes.',
  ]

  const utBullets = [
    'Completed hands-on labs in soil classification, water quality testing, and watershed assessment across East Tennessee.',
    'Used ESRI tools for GIS mapping, landform analysis, and environmental modeling projects.',
    'Worked in small research groups to collect field data, maintain sampling documentation, and present findings to faculty.',
    'Developed technical writing skills through lab reports, environmental summaries, and regulatory-style documentation.',
  ]

  return (
    <section className="grid gap-8 text-slate-900 dark:text-slate-100">
      <header>
        <h2 className="section-title mb-0">Career</h2>
      </header>

      {hca && (
        <section className="rounded-3xl border border-emerald-200/70 dark:border-emerald-500/20 bg-gradient-to-br from-white via-emerald-50/40 to-white dark:from-slate-900 dark:via-emerald-950/20 dark:to-slate-950 p-6 sm:p-8 shadow-xl shadow-emerald-500/10">
          <div className="flex flex-wrap items-center gap-3">
            <div className="h-12 w-12 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 grid place-items-center">
              <Briefcase />
            </div>
            <div>
              <p className="text-sm uppercase tracking-wide text-emerald-600 dark:text-emerald-300">HCA Healthcare</p>
              <h3 className="text-2xl font-semibold">Full-stack Application Engineer</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">Progression from Technical Resident → Engineer II</p>
            </div>
          </div>

          <div className="relative mt-8">
            <span className="absolute left-4 top-0 bottom-0 w-px bg-emerald-100 dark:bg-emerald-900" aria-hidden="true"></span>
            <ul className="space-y-6">
              {hca.roles.map((role) => (
                <li key={role.title} className="relative pl-10">
                  <span className="absolute left-2 top-6 h-3 w-3 rounded-full border-2 border-emerald-400 bg-white dark:bg-slate-950" aria-hidden="true"></span>
                  <div className="rounded-2xl border border-white/60 dark:border-emerald-500/20 bg-white/80 dark:bg-slate-950/60 p-5 shadow-md">
                    <p className="text-xs uppercase tracking-wide text-emerald-500">{role.range}</p>
                    <h4 className="text-lg font-semibold">{role.title}</h4>
                    {role.blurb && <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{role.blurb}</p>}
                    {role.bullets && (
                      <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                        {role.bullets.map((bullet) => (
                          <li key={bullet} className="flex gap-3">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-400 flex-shrink-0" aria-hidden="true" />
                            <p className="flex-1">{bullet}</p>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section className="grid gap-6">
        <header className="flex flex-col gap-1">
          <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">Continued Education</p>
          <h3 className="text-2xl font-semibold">Nashville Software School</h3>
          <p className="text-sm text-slate-600 dark:text-slate-300">Full-time software training that bridged field science work into production application engineering.</p>
        </header>

        <div className="rounded-3xl border border-sky-200/70 dark:border-sky-500/20 bg-gradient-to-br from-white via-sky-50/50 to-white dark:from-slate-950 dark:via-sky-950/20 dark:to-slate-950 p-6 sm:p-8 shadow-lg shadow-sky-400/10">
          <div className="flex flex-wrap items-center gap-3">
            <div className="h-12 w-12 rounded-2xl bg-sky-500/10 text-sky-600 dark:text-sky-200 grid place-items-center">
              <GraduationCap />
            </div>
            <div>
              <p className="text-sm uppercase tracking-wide text-sky-600 dark:text-sky-300">Nashville Software School</p>
              <h4 className="text-xl font-semibold">Full-Stack Web Development Certificate</h4>
              <p className="text-sm text-slate-600 dark:text-slate-300">Apr 2022 – Sep 2022</p>
            </div>
          </div>

          <p className="mt-5 text-sm text-slate-600 dark:text-slate-300">
            Intensive full-time, six-month bootcamp focused on Python/Django fundamentals, problem solving, and a simulated SCRUM product environment for the capstone quarter.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
            {nssBullets.map((bullet) => (
              <li key={bullet} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-sky-400 flex-shrink-0" aria-hidden="true" />
                <p className="flex-1">{bullet}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="grid gap-6">
        <header className="flex flex-col gap-1">
          <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">Education & Early Career</p>
          <h3 className="text-2xl font-semibold">State of Tennessee</h3>
          <p className="text-sm text-slate-600 dark:text-slate-300">Field science discipline that still drives how I ship software today.</p>
        </header>

        <div className="rounded-3xl border border-amber-200/70 dark:border-amber-500/20 bg-gradient-to-br from-white via-amber-50/50 to-white dark:from-slate-950 dark:via-amber-950/20 dark:to-slate-950 p-6 sm:p-8 shadow-lg shadow-amber-400/10">
          <div className="flex flex-wrap items-center gap-3">
            <div className="h-12 w-12 rounded-2xl bg-amber-500/10 text-amber-600 dark:text-amber-200 grid place-items-center">
              <Briefcase />
            </div>
            <div>
              <p className="text-sm uppercase tracking-wide text-amber-600 dark:text-amber-300">State of Tennessee</p>
              <h4 className="text-xl font-semibold">Environmental Scientist progression</h4>
            </div>
          </div>

          <div className="relative mt-8">
            <span className="absolute left-4 top-0 bottom-0 w-px bg-amber-100 dark:bg-amber-900" aria-hidden="true"></span>
            <ul className="space-y-6">
              {envRoles.map((role) => (
                <li key={role.title} className="relative pl-10">
                  <span className="absolute left-2 top-6 h-3 w-3 rounded-full border-2 border-amber-400 bg-white dark:bg-slate-950" aria-hidden="true"></span>
                  <div className="rounded-2xl border border-white/60 dark:border-amber-500/20 bg-white/80 dark:bg-slate-950/60 p-5 shadow-md">
                    <p className="text-xs uppercase tracking-wide text-amber-500">{role.range}</p>
                    <h5 className="text-lg font-semibold">{role.title}</h5>
                    <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                      {role.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-amber-400 flex-shrink-0" aria-hidden="true" />
                          <p className="flex-1">{bullet}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {ut && (
        <section className="grid gap-6">
          <header className="flex flex-col gap-1">
            <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">Formal Education</p>
            <h3 className="text-2xl font-semibold">University of Tennessee, Knoxville</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">Environmental science foundation behind the field work, systems thinking, and technical documentation.</p>
          </header>

          <div className="rounded-3xl border border-orange-200/70 dark:border-orange-500/20 bg-gradient-to-br from-white via-orange-50/50 to-white dark:from-slate-950 dark:via-orange-950/20 dark:to-slate-950 p-6 sm:p-8 shadow-lg shadow-orange-400/10">
            <div className="flex flex-wrap items-center gap-3">
              <div className="h-12 w-12 rounded-2xl bg-orange-500/10 text-orange-600 dark:text-orange-200 grid place-items-center">
                <GraduationCap />
              </div>
              <div>
                <p className="text-sm uppercase tracking-wide text-orange-600 dark:text-orange-300">{ut.school}</p>
                <h4 className="text-xl font-semibold">B.S. Environmental & Soil Science • Minor in Watershed Science</h4>
                <p className="text-sm text-slate-600 dark:text-slate-300">{ut.range}</p>
              </div>
            </div>

            <p className="mt-5 text-sm text-slate-600 dark:text-slate-300">
              Field-focused program blending hydrology, soil science, and watershed systems with applied research and data analysis.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
              {utBullets.map((bullet) => (
                <li key={bullet} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-orange-400 flex-shrink-0" aria-hidden="true" />
                  <p className="flex-1">{bullet}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </section>
  )
}

export default Career
