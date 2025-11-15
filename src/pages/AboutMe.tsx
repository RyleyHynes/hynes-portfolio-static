import { useCallback, useEffect, useState } from 'react'
import { profile } from '@/data/profile'
import { MapPin, Plane } from 'lucide-react'
import lg1 from '@/assets/trips/lookingGlass/LG1.jpeg'
import lg2 from '@/assets/trips/lookingGlass/LG2.jpeg'
import lg3 from '@/assets/trips/lookingGlass/LG3.jpeg'
import lg4 from '@/assets/trips/lookingGlass/LG4.jpeg'
import lg5 from '@/assets/trips/lookingGlass/LG5.jpeg'
import lg6 from '@/assets/trips/lookingGlass/LG6.jpeg'
import lg7 from '@/assets/trips/lookingGlass/LG7.jpeg'
import teton1 from '@/assets/trips/teton/T1.jpeg'
import teton2 from '@/assets/trips/teton/T2.jpeg'
import teton3 from '@/assets/trips/teton/T3.jpeg'
import teton4 from '@/assets/trips/teton/T4.jpeg'
import teton5 from '@/assets/trips/teton/T5.jpeg'
import teton6 from '@/assets/trips/teton/T6.jpeg'
import teton7 from '@/assets/trips/teton/T7.jpeg'
import teton8 from '@/assets/trips/teton/T8.jpeg'
import teton9 from '@/assets/trips/teton/T9.jpeg'
import teton10 from '@/assets/trips/teton/T10.jpeg'
import rainier1 from '@/assets/trips/rainer/R1.jpeg'
import rainier2 from '@/assets/trips/rainer/R2.jpeg'
import rainier3 from '@/assets/trips/rainer/R3.jpeg'
import rainier4 from '@/assets/trips/rainer/R4.jpeg'
import rainier5 from '@/assets/trips/rainer/R5.jpeg'
import rainier6 from '@/assets/trips/rainer/R6.jpeg'
import rainier7 from '@/assets/trips/rainer/R7.jpeg'
import rainier8 from '@/assets/trips/rainer/R8.jpeg'
import rainier9 from '@/assets/trips/rainer/R9.jpeg'
import whitney1 from '@/assets/trips/whitney/W1.jpeg'
import whitney2 from '@/assets/trips/whitney/W2.jpeg'
import whitney3 from '@/assets/trips/whitney/W3.jpeg'
import whitney4 from '@/assets/trips/whitney/W4.jpeg'
import whitney5 from '@/assets/trips/whitney/W5.jpeg'
import whitney6 from '@/assets/trips/whitney/W6.jpeg'
import whitney7 from '@/assets/trips/whitney/W7.jpeg'
import whitney8 from '@/assets/trips/whitney/W8.jpeg'
import whitney9 from '@/assets/trips/whitney/W9.jpeg'
import whitney10 from '@/assets/trips/whitney/W10.jpeg'
import whitney12 from '@/assets/trips/whitney/W12.jpeg'
import whitney13 from '@/assets/trips/whitney/W13.jpeg'
import mojon1 from '@/assets/trips/mojonRojo/MR1.jpeg'
import mojon2 from '@/assets/trips/mojonRojo/MR2.jpeg'
import mojon3 from '@/assets/trips/mojonRojo/MR3.jpeg'
import mojon4 from '@/assets/trips/mojonRojo/MR4.jpeg'
import mojon5 from '@/assets/trips/mojonRojo/MR5.jpeg'
import mojon6 from '@/assets/trips/mojonRojo/MR6.jpeg'
import mojon7 from '@/assets/trips/mojonRojo/MR7.jpeg'
import mojon8 from '@/assets/trips/mojonRojo/MR8.jpeg'
import mojon9 from '@/assets/trips/mojonRojo/MR9.jpeg'
import mojon10 from '@/assets/trips/mojonRojo/MR10.jpeg'
import mojon11 from '@/assets/trips/mojonRojo/MR11.jpeg'
import mojon12 from '@/assets/trips/mojonRojo/MR12.jpeg'

// To use your own summit photos:
// 1. Drop files under src/assets/trips/<mountain-name>/photo-1.jpg.
// 2. Import them above (e.g., import teton1 from '@/assets/trips/teton/photo-1.jpg').
// 3. Add them to the `photos` array below in the order you want them displayed.
type MountainTrip = {
  name: string
  range: string
  elevation: string
  blurb: string
  photos: string[]
}

const mountains: MountainTrip[] = [
  {
    name: 'Mount Rainier',
    range: 'Cascade Range, WA',
    elevation: '14,411 ft',
    photos: [rainier1, rainier2, rainier3, rainier4, rainier5, rainier6, rainier7, rainier8, rainier9],
    blurb: 'Long glacier pushes, rope teams, and weather windows that demand patience and planning — a perfect metaphor for product work.',
  },
  {
    name: 'Grand Teton',
    range: 'Teton Range, WY',
    elevation: '13,775 ft',
    photos: [teton1, teton2, teton3, teton4, teton5, teton6, teton7, teton8, teton9, teton10],
    blurb: 'My first major alpine summit — where I learned to love early starts, glacier travel, and moving efficiently on ridge lines.',
  },
  {
    name: 'Mount Whitney',
    range: 'Sierra Nevada, CA',
    elevation: '14,505 ft',
    photos: [whitney1, whitney2, whitney3, whitney4, whitney5, whitney6, whitney7, whitney8, whitney9, whitney10, whitney12, whitney13],
    blurb: 'Exposure, switchbacks, and high-altitude pacing taught me how to stay calm, conserve energy, and lead in thin air.',
  },
  {
    name: 'Mojón Rojo',
    range: 'Patagonia, Argentina',
    elevation: '7,438 ft',
    photos: [mojon1, mojon2, mojon3, mojon4, mojon5, mojon6, mojon7, mojon8, mojon9, mojon10, mojon11, mojon12],
    blurb: 'Patagonian wind and weather keep you humble. These missions remind me to respect nature and enjoy every ridge line.',
  },
  {
    name: 'Looking Glass Rock',
    range: 'Pisgah National Forest, NC',
    elevation: '3,969 ft',
    photos: [lg1, lg2, lg3, lg4, lg5, lg6, lg7],
    blurb: 'Blue Ridge sandstone, long rappels, and humid approach hikes — this is home terrain where I coach friends on their first multi-pitch climbs.',
  },
] as const

export default function AboutMe() {
  const [photoIndex, setPhotoIndex] = useState<Record<string, number>>({})
  const [modal, setModal] = useState<{ name: string; index: number } | null>(null)
  const activeMountain = modal ? mountains.find((m) => m.name === modal.name) : null

  const handleModalShift = useCallback(
    (direction: 1 | -1) => {
      if (!modal || !activeMountain) return
      const total = activeMountain.photos.length
      const next = (modal.index + direction + total) % total
      setPhotoIndex((prev) => ({ ...prev, [modal.name]: next }))
      setModal({ name: modal.name, index: next })
    },
    [modal, activeMountain]
  )

  const shiftPhoto = (name: string, total: number, direction: 1 | -1) => {
    setPhotoIndex((prev) => {
      const current = prev[name] ?? 0
      const next = (current + direction + total) % total
      return { ...prev, [name]: next }
    })
  }

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setModal(null)
      if (modal && activeMountain) {
        if (event.key === 'ArrowLeft') {
          event.preventDefault()
          handleModalShift(-1)
        }
        if (event.key === 'ArrowRight') {
          event.preventDefault()
          handleModalShift(1)
        }
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [modal, activeMountain, handleModalShift])

  return (
    <section className="grid gap-8 text-slate-900 dark:text-slate-100">
      <header className="max-w-3xl space-y-4">
        <h2 className="section-title">About Me</h2>
      </header>

      <section className="grid gap-4">
        <article className="card p-6 flex flex-col gap-4">
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
          <p className="text-sm text-slate-600 dark:text-slate-300">
            Outside of work, I’m usually traveling, hiking, fishing, or planning a weekend somewhere new. I climb when I can, but mostly I just like being outdoors and staying active. I enjoy trying new things, checking out new spots, and taking a break from the screen. It keeps me balanced and helps me come back to work with a clear head.
          </p>
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
            {[
              'Syracuse, NY',
              'Albany, NY',
              'Nashville, TN (TVA)',
              'Fort Myers, FL (Junior Hockey)',
              'Knoxville, TN (College)',
              'Nashville, TN (Now)',
            ].map((stop, index, arr) => (
              <span key={stop} className="flex items-center gap-2 whitespace-nowrap">
                <span>{stop}</span>
                {index < arr.length - 1 && <span aria-hidden="true">✈︎</span>}
              </span>
            ))}
          </div>
        </article>
      </section>

      <section className="grid gap-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
            <h3 className="text-xl font-semibold">Notable Summits</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">A few mountains that shaped how I approach life and work.</p>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {mountains.map((mountain) => {
            const idx = photoIndex[mountain.name] ?? 0
            const total = mountain.photos.length
            const photo = mountain.photos[idx]

            return (
              <article key={mountain.name} className="card overflow-hidden">
                <div className="relative group">
                  <button
                    className="block w-full"
                    onClick={() => setModal({ name: mountain.name, index: idx })}
                    aria-label={`Expand ${mountain.name} photo ${idx + 1}`}
                  >
                    <img
                      src={photo}
                      alt={`${mountain.name} trip photo ${idx + 1}`}
                      className="h-56 w-full object-cover"
                      loading="lazy"
                    />
                  </button>
                  {total > 1 && (
                    <>
                      <button
                        className="absolute left-3 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-black/50 text-white grid place-items-center opacity-80 hover:opacity-100 transition"
                        onClick={() => shiftPhoto(mountain.name, total, -1)}
                        aria-label={`Previous ${mountain.name} photo`}
                      >
                        <span className="text-lg">‹</span>
                      </button>
                      <button
                        className="absolute right-3 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-black/50 text-white grid place-items-center opacity-80 hover:opacity-100 transition"
                        onClick={() => shiftPhoto(mountain.name, total, 1)}
                        aria-label={`Next ${mountain.name} photo`}
                      >
                        <span className="text-lg">›</span>
                      </button>
                    </>
                  )}
                  <span className="absolute bottom-3 right-3 text-xs font-semibold bg-black/60 text-white px-2 py-0.5 rounded-full">
                    {idx + 1}/{total}
                  </span>
                </div>
                <div className="p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="text-lg font-semibold">{mountain.name}</h4>
                    <span className="text-xs uppercase tracking-wide text-slate-400">{mountain.range}</span>
                  </div>
                  <p className="text-xs text-slate-500">Elevation {mountain.elevation}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-300">{mountain.blurb}</p>
                </div>
              </article>
            )
          })}
        </div>
      </section>

      {modal && activeMountain && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setModal(null)}
          role="dialog"
          aria-label={`${activeMountain.name} photo viewer`}
        >
          <div className="relative max-w-5xl w-full max-h-[90vh] bg-slate-900/70 rounded-3xl p-4" onClick={(e) => e.stopPropagation()}>
            <button
              className="absolute top-4 right-4 text-white/80 hover:text-white text-2xl"
              onClick={() => setModal(null)}
              aria-label="Close photo viewer"
            >
              ×
            </button>
            <div className="relative flex items-center justify-center">
              <img
                src={activeMountain.photos[modal.index]}
                alt={`${activeMountain.name} expanded view ${modal.index + 1}`}
                className="max-h-[70vh] w-full object-contain rounded-2xl"
              />
              {activeMountain.photos.length > 1 && (
                <>
                  <button
                    className="absolute left-2 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-black/60 text-white text-2xl"
                    onClick={() => handleModalShift(-1)}
                    aria-label="Previous photo"
                  >
                    ‹
                  </button>
                  <button
                    className="absolute right-2 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-black/60 text-white text-2xl"
                    onClick={() => handleModalShift(1)}
                    aria-label="Next photo"
                  >
                    ›
                  </button>
                </>
              )}
            </div>
            <div className="mt-4 text-center text-sm text-slate-100">
              <p className="font-semibold">{activeMountain.name}</p>
              <p className="text-slate-300">{activeMountain.range} · Elevation {activeMountain.elevation}</p>
              <p className="text-xs text-slate-400 mt-1">
                Photo {modal.index + 1} of {activeMountain.photos.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
