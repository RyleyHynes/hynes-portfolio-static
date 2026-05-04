import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

/**
 * Landing page hero and personal summary.
 */
const Home = () => {
  const headshotSrc = `${import.meta.env.BASE_URL}ryley-hynes.png`

  return (
    <motion.section
      className="card p-10 text-slate-900 dark:text-slate-100"
      initial={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.25 }}
      viewport={{ once: true, amount: 0.2 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_20rem] md:items-start">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-emerald-600 dark:text-emerald-300">Ryley Hynes</p>
          <h1 className="section-title mt-3">Full-Stack Software Engineer</h1>
          <p className="mt-4 max-w-3xl text-lg text-slate-600 dark:text-slate-300">
            I build reliable, modern software with a focus on clean architecture, intuitive user experiences, and maintainable systems. My core stack is
            TypeScript/React and C#/.NET, with experience shipping production software in healthcare environments where
            quality matters.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link className="btn-primary inline-flex items-center gap-2" to="/projects">
              Explore Projects <ArrowUpRight size={16} />
            </Link>
            <Link className="btn-ghost" to="/contact">
              Contact
            </Link>
          </div>
        </div>
        <div className="justify-self-end">
          <img
            alt="Ryley Hynes headshot"
            className="h-auto w-full max-w-xs rounded-lg object-cover shadow-sm"
            src={headshotSrc}
          />
        </div>
      </div>
    </motion.section>
  )
}

export default Home
