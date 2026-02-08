export function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-50">
      {/* Header */}
      <header className="border-b border-white/5 bg-slate-950/70 backdrop-blur sticky top-0 z-20">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 via-sky-500 to-indigo-500 shadow-lg shadow-cyan-500/40">
              <span className="absolute h-10 w-10 rounded-2xl border border-white/20" />
              <span className="absolute h-6 w-6 animate-ping rounded-full bg-cyan-400/40" />
              <span className="relative h-3 w-3 rounded-full bg-white" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300/80">
                Project Frequency
              </p>
              <p className="text-sm text-slate-300/90">Public Meditation Sound Library</p>
            </div>
          </div>
          <div className="hidden text-xs text-slate-400 sm:block">
            Breathe in for 4 • Hold for 4 • Breathe out for 6
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="mx-auto flex max-w-5xl flex-col gap-10 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        {/* Hero */}
        <section className="grid gap-10 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:items-center">
          <div className="space-y-6">
            <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Tune into
              <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-indigo-400 bg-clip-text text-transparent">
                {" "}
                healing frequencies
              </span>
            </h1>
            <p className="max-w-xl text-balance text-sm leading-relaxed text-slate-300 sm:text-base">
              Project Frequency is a public space for deep rest, focus, and inner
              stillness. Press play, close your eyes, and let carefully selected
              tones guide your meditation.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300">
              <div className="flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-400/10 px-3 py-1">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-300" />
                </span>
                Always free • No login
              </div>
              <span className="text-slate-500">•</span>
              <span>Best with headphones</span>
            </div>
          </div>

          {/* Ambient visual card */}
          <div className="relative overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 p-5 shadow-xl">
            <div className="pointer-events-none absolute -left-16 top-0 h-40 w-40 rounded-full bg-cyan-500/30 blur-3xl" />
            <div className="pointer-events-none absolute -right-10 bottom-0 h-40 w-40 rounded-full bg-indigo-500/40 blur-3xl" />

            <div className="relative space-y-6">
              <div className="flex items-center justify-between text-xs text-slate-300">
                <span className="inline-flex items-center gap-1 rounded-full bg-slate-900/80 px-2 py-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
                  Live sound field
                </span>
                <span>Gentle • Minimal • Looping</span>
              </div>

              <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
                <div className="flex h-full items-center justify-center">
                  <div className="relative flex h-36 w-36 items-center justify-center rounded-full bg-gradient-to-tr from-cyan-400 via-sky-500 to-indigo-500">
                    <div className="absolute h-40 w-40 animate-ping rounded-full bg-cyan-300/20" />
                    <div className="absolute h-44 w-44 animate-[pulse_5s_ease-in-out_infinite] rounded-full border border-cyan-200/20" />
                    <div className="relative grid h-20 w-20 place-items-center rounded-full bg-slate-950/80 text-center text-[10px] uppercase tracking-[0.25em] text-slate-200">
                      <span>Deep Calm</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 text-[10px] text-slate-300">
                <div className="rounded-2xl bg-slate-900/80 p-3">
                  <p className="text-[10px] font-semibold text-slate-100">432 Hz</p>
                  <p className="text-[10px] text-slate-400">Heart-centered harmony</p>
                </div>
                <div className="rounded-2xl bg-slate-900/80 p-3">
                  <p className="text-[10px] font-semibold text-slate-100">528 Hz</p>
                  <p className="text-[10px] text-slate-400">Inner repair & renewal</p>
                </div>
                <div className="rounded-2xl bg-slate-900/80 p-3">
                  <p className="text-[10px] font-semibold text-slate-100">963 Hz</p>
                  <p className="text-[10px] text-slate-400">Crown & stillness</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Audio library */}
        <section className="space-y-4">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-lg font-semibold tracking-tight text-slate-50 sm:text-xl">
                Frequency Sessions
              </h2>
              <p className="max-w-2xl text-xs text-slate-300 sm:text-sm">
                Choose a soundscape, press play, and let it loop in the background.
                You can close your eyes, journal, or simply breathe with the rhythm.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2 text-[11px] text-slate-400">
              <span className="rounded-full border border-slate-700/80 bg-slate-900/80 px-3 py-1">
                Public • Stream only
              </span>
              <span className="rounded-full border border-slate-700/80 bg-slate-900/80 px-3 py-1">
                Headphones recommended
              </span>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {sessions.map((session) => (
              <article
                key={session.id}
                className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-800/80 bg-gradient-to-br from-slate-950/80 via-slate-900/90 to-slate-950/80 p-4 shadow-lg shadow-slate-950/60 transition hover:border-cyan-400/60 hover:shadow-cyan-900/60"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <h3 className="text-sm font-semibold text-slate-50 sm:text-base">
                        {session.title}
                      </h3>
                      <p className="text-xs text-slate-300/90">{session.subtitle}</p>
                    </div>
                    <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-slate-100">
                      {session.frequencyLabel}
                    </span>
                  </div>

                  <p className="text-xs leading-relaxed text-slate-300/90 sm:text-[13px]">
                    {session.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 text-[10px] text-slate-300/90">
                    {session.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-slate-900/80 px-2 py-0.5 text-[10px] text-slate-300/90"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-4 space-y-2">
                  <audio
                    controls
                    preload="none"
                    className="w-full overflow-hidden rounded-2xl bg-slate-900/80 text-slate-50 [&::-webkit-media-controls-panel]:bg-slate-900/80"
                  >
                    <source src={session.src} type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                  <p className="text-[10px] text-slate-400">
                    Duration: {session.duration} • Suggested: {session.suggestion}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Gentle guidance */}
        <section className="mt-2 grid gap-4 rounded-3xl border border-slate-800/80 bg-slate-950/80 p-4 text-xs text-slate-300 sm:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] sm:p-5">
          <div className="space-y-2">
            <h2 className="text-sm font-semibold text-slate-50 sm:text-base">
              A simple way to meditate with sound
            </h2>
            <ol className="grid gap-2 text-[11px] text-slate-300 sm:text-xs">
              <li>
                1. Find a comfortable position where your body can relax without
                strain.
              </li>
              <li>
                2. Choose one frequency, then lower your phone or close your eyes.
              </li>
              <li>
                3. Gently rest your attention on the sound and your breathing.
              </li>
              <li>
                4. When your mind wanders, softly return to the soundscape.
              </li>
            </ol>
          </div>

          <div className="space-y-2 rounded-2xl bg-slate-900/80 p-3">
            <p className="text-[11px] font-medium text-slate-100 sm:text-xs">
              Open for everyone
            </p>
            <p className="text-[11px] text-slate-300 sm:text-xs">
              This page is intentionally simple, quiet, and public. Share it with
              anyone who might benefit from a few minutes of stillness.
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-slate-800/80 pt-6 text-[11px] text-slate-500 sm:pt-8">
          <div className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
            <p>Project Frequency · A small place on the internet to pause.</p>
            <p className="text-[10px] text-slate-600">
              Please lower the volume if you feel any discomfort.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}

const sessions = [
  {
    id: "432",
    title: "432 Hz – Gentle Heart Space",
    subtitle: "Soft grounding tone for emotional ease",
    frequencyLabel: "432 Hz",
    description:
      "A warm, balanced frequency often associated with natural resonance and gentle emotional release.",
    duration: "25 min loop",
    suggestion: "Evening unwinding, reflective journaling",
    src:
      "https://cdn.pixabay.com/download/audio/2022/03/15/audio_2d5f59ed41.mp3?filename=deep-meditation-ambient-22850.mp3",
    tags: ["grounding", "soft pads", "heart", "slow breath"],
  },
  {
    id: "528",
    title: "528 Hz – Inner Repair Field",
    subtitle: "Bright, spacious tone for renewal",
    frequencyLabel: "528 Hz",
    description:
      "Subtle, uplifting harmonics that support clarity, gentle focus, and a sense of inner brightness.",
    duration: "20 min loop",
    suggestion: "Morning reset, focused creative work",
    src:
      "https://cdn.pixabay.com/download/audio/2021/10/26/audio_6b77c9b2c7.mp3?filename=healing-ambient-110241.mp3",
    tags: ["uplifting", "clarity", "soft light"],
  },
  {
    id: "963",
    title: "963 Hz – Crown of Stillness",
    subtitle: "Quiet spaciousness above thought",
    frequencyLabel: "963 Hz",
    description:
      "Airy textures and high, gentle tones that invite a feeling of open sky and quiet awareness.",
    duration: "15 min loop",
    suggestion: "Short, deep check-ins between tasks",
    src:
      "https://cdn.pixabay.com/download/audio/2022/03/10/audio_6ae7e8e3f0.mp3?filename=heavenly-sound-ambient-20943.mp3",
    tags: ["spacious", "light", "subtle", "crown"],
  },
  {
    id: "rain",
    title: "Rain & Low Theta",
    subtitle: "Safe cocoon for deep calm",
    frequencyLabel: "Rain + 4–8 Hz",
    description:
      "Soft rain layered with gentle low pulses to support deep relaxation and drifting states.",
    duration: "30 min loop",
    suggestion: "Before sleep, extended rest",
    src:
      "https://cdn.pixabay.com/download/audio/2021/11/15/audio_5e44b81e40.mp3?filename=deep-relaxation-ambient-124118.mp3",
    tags: ["rain", "theta", "sleep prep", "deep rest"],
  },
] as const;
